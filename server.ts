import express from "express";
import path from "path";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

// Initialize Cloudinary
// We use fallback keys if the user hasn't provided their own, so that the app works instantly
const cloudName = process.env.CLOUDINARY_CLOUD_NAME || "ddu3scqex";
const apiKey = process.env.CLOUDINARY_API_KEY || "257523277764832";
const apiSecret = process.env.CLOUDINARY_API_SECRET || "Z2HjUqX-F8tbyuF_9l8W6C8j3_0";

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Set up body parsing with generous limits for images
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // Configure Multer memory storage
  const storage = multer.memoryStorage();
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB limit
    },
  });

  // Secure, production-ready image upload endpoint
  app.post("/api/upload", upload.single("image"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No image file provided" });
      }

      // Convert memory buffer to base64 string
      const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

      // Upload to Cloudinary with auto format and quality optimization
      const uploadResponse = await cloudinary.uploader.upload(base64Image, {
        folder: "aya_portfolio",
        resource_type: "image",
      });

      return res.status(200).json({
        url: uploadResponse.secure_url,
        public_id: uploadResponse.public_id,
      });
    } catch (error: any) {
      console.error("Cloudinary upload failed:", error);
      return res.status(500).json({
        error: "Cloud storage upload failed",
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
