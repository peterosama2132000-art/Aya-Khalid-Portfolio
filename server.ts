import express from "express";
import path from "path";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

// Initialize Cloudinary if explicitly configured by the user
const isCloudinaryConfigured = !!(
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET
);

if (isCloudinaryConfigured) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Set up body parsing with generous limits for images
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // Serve static uploads folder
  const uploadsDir = path.join(process.cwd(), "uploads");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }
  app.use("/uploads", express.static(uploadsDir));

  // File path for persistent portfolio data
  const dataFilePath = path.join(process.cwd(), "portfolio_data.json");

  // Get persistent portfolio data
  app.get("/api/portfolio-data", (req, res) => {
    try {
      if (fs.existsSync(dataFilePath)) {
        const fileContent = fs.readFileSync(dataFilePath, "utf8");
        return res.status(200).json(JSON.parse(fileContent));
      }
      return res.status(200).json({});
    } catch (error: any) {
      console.error("Error reading portfolio data:", error);
      return res.status(500).json({ error: "Failed to read portfolio data" });
    }
  });

  // Save persistent portfolio data (merges incoming keys)
  app.post("/api/portfolio-data", (req, res) => {
    try {
      const incoming = req.body;
      
      let existing = {};
      if (fs.existsSync(dataFilePath)) {
        try {
          existing = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
        } catch (e) {
          console.warn("Could not parse existing portfolio_data.json, resetting...", e);
        }
      }
      
      const updated = { ...existing, ...incoming };
      fs.writeFileSync(dataFilePath, JSON.stringify(updated, null, 2), "utf8");
      console.log("Portfolio data updated successfully on server.");
      return res.status(200).json({ success: true });
    } catch (error: any) {
      console.error("Error writing portfolio data:", error);
      return res.status(500).json({ error: "Failed to save portfolio data" });
    }
  });

  // Safe client inquiry submission endpoint
  app.post("/api/inquiries", (req, res) => {
    try {
      const newInquiry = req.body;
      if (!newInquiry || !newInquiry.brand) {
        return res.status(400).json({ error: "Invalid inquiry data" });
      }
      
      let existing: any = {};
      if (fs.existsSync(dataFilePath)) {
        try {
          existing = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
        } catch (e) {
          console.warn("Could not parse existing portfolio_data.json for inquiries, resetting...", e);
        }
      }
      
      const inquiries = existing.inquiries || [];
      // Prevent duplicates
      const exists = inquiries.some((inq: any) => 
        inq.brand.toLowerCase() === newInquiry.brand.toLowerCase() && 
        inq.niche === newInquiry.niche && 
        inq.goal === newInquiry.goal
      );
      
      if (!exists) {
        inquiries.unshift(newInquiry);
        existing.inquiries = inquiries;
        fs.writeFileSync(dataFilePath, JSON.stringify(existing, null, 2), "utf8");
        console.log("New inquiry added successfully on server.");
      }
      
      return res.status(200).json({ success: true, inquiries });
    } catch (error: any) {
      console.error("Error adding inquiry:", error);
      return res.status(500).json({ error: "Failed to add inquiry" });
    }
  });

  // Configure Multer memory storage
  const storage = multer.memoryStorage();
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB limit
    },
  });

  // Secure, multi-tiered image upload endpoint
  app.post("/api/upload", upload.single("image"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No image file provided" });
      }

      const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

      // TIER 1: Cloudinary upload (only if configured by the user)
      if (isCloudinaryConfigured) {
        try {
          console.log("Attempting upload to Cloudinary...");
          const uploadResponse = await cloudinary.uploader.upload(base64Image, {
            folder: "aya_portfolio",
            resource_type: "image",
          });
          console.log("Cloudinary upload successful:", uploadResponse.secure_url);
          return res.status(200).json({
            url: uploadResponse.secure_url,
            public_id: uploadResponse.public_id,
          });
        } catch (error: any) {
          console.warn("Cloudinary upload failed, trying next tier...", error?.message || error);
        }
      }

      // TIER 2: freeimage.host upload using public key with multipart FormData
      try {
        console.log("Attempting upload to freeimage.host...");
        const formData = new FormData();
        formData.append("key", "6d207e02198a847e40c400f281102d6f");
        formData.append("action", "upload");
        
        const blob = new Blob([req.file.buffer], { type: req.file.mimetype });
        formData.append("source", blob, req.file.originalname || "image.jpg");

        const response = await fetch("https://freeimage.host/api/1/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data: any = await response.json();
          if (data && data.image && data.image.url) {
            console.log("freeimage.host upload successful:", data.image.url);
            return res.status(200).json({
              url: data.image.url,
              public_id: data.image.id || null,
            });
          }
        } else {
          console.warn(`freeimage.host response not OK: ${response.status} ${response.statusText}`);
        }
      } catch (error: any) {
        console.warn("freeimage.host upload failed, trying next tier...", error?.message || error);
      }

      // TIER 3: catbox.moe upload (extremely reliable, keyless)
      try {
        console.log("Attempting upload to catbox.moe...");
        const formData = new FormData();
        formData.append("reqtype", "fileupload");
        
        const blob = new Blob([req.file.buffer], { type: req.file.mimetype });
        formData.append("fileToUpload", blob, req.file.originalname || "image.jpg");

        const response = await fetch("https://catbox.moe/user/api.php", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const urlStr = await response.text();
          if (urlStr && urlStr.startsWith("http")) {
            console.log("catbox.moe upload successful:", urlStr.trim());
            return res.status(200).json({
              url: urlStr.trim(),
              public_id: null,
            });
          } else {
            console.warn("catbox.moe returned invalid response:", urlStr);
          }
        } else {
          console.warn(`catbox.moe response not OK: ${response.status} ${response.statusText}`);
        }
      } catch (error: any) {
        console.warn("catbox.moe upload failed, trying next tier...", error?.message || error);
      }

      // TIER 3: Local Storage Fallback (100% Reliable & Keyless)
      console.log("Using local storage fallback...");
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const extension = req.file.mimetype.split("/")[1] || "jpg";
      const filename = `${uniqueSuffix}.${extension}`;
      const localFilePath = path.join(uploadsDir, filename);

      fs.writeFileSync(localFilePath, req.file.buffer);

      const localUrl = `/uploads/${filename}`;
      console.log("Local storage upload successful:", localUrl);

      return res.status(200).json({
        url: localUrl,
        public_id: filename,
      });

    } catch (error: any) {
      console.error("All upload tiers failed:", error);
      return res.status(500).json({
        error: "Image upload failed across all tiers",
        details: error?.message || error,
      });
    }
  });

  // Vite Dev Server middleware setup
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
