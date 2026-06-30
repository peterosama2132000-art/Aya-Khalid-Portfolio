import { useState, useEffect } from 'react';
import { CASE_STUDIES, PDF_CASE_STUDIES } from './data';
import { CaseStudy, PdfCaseStudy } from './types';
// @ts-ignore
import portraitImg from './assets/images/aya_khaled_portrait_1782228695056.jpg';
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  Award, 
  TrendingUp, 
  Languages, 
  Sparkles,
  ArrowUpRight,
  MapPin,
  CheckCircle,
  Copy,
  Send,
  MessageSquare,
  Building2,
  Users,
  Flame,
  Clock,
  BookOpen,
  FileText,
  Check,
  Sun,
  Moon,
  ChevronRight,
  Briefcase,
  X,
  Laptop,
  Table,
  Calendar,
  Search,
  Download,
  Settings,
  Plus,
  Trash2,
  Edit,
  Save,
  Database,
  Inbox,
  FolderOpen,
  FileSpreadsheet,
  ExternalLink,
  Upload,
  Share2
} from 'lucide-react';

const AMIRA_SHEET_ROWS = [
  {
    hookAr: "اختيارك لـ شريك حياتك مش صدفة ده انعكاس لطفولتك",
    hookEn: "Choosing your partner is not a coincidence, it is a reflection of your childhood",
    directionAr: "لقطات بصرية هادئة، كتابة كلمات تظهر وتختفي.",
    directionEn: "Quiet visual shots, words appearing and disappearing.",
    scriptAr: "الدراما دي بنعيشها ونحاول نصلحها، بس النتيجة دايماً بتكون خذلان جديد. لازم نفهم إننا بننجذب للي بنعرفه وبنألفه مش للي بيريحنا، وعشان نكسر الدائرة دي لازم نتعافى من صدمات الطفولة الأول.",
    scriptEn: "We live and try to fix this drama, but the result is always a new disappointment. We must understand that we are drawn to what is familiar, not what is comfortable. To break this cycle, we must heal childhood trauma first.",
    captionAr: "كيف تبرمجنا طفولتنا لنختار شركاء مؤذيين؟ وكيف يمكننا كسر هذا النمط لبناء علاقات صحية مبنية على الوعي والتقدير المتبادل؟",
    captionEn: "How does our childhood program us to choose toxic partners? And how can we break this pattern to build healthy relationships based on awareness and mutual respect?",
    storyAr: "استطلاع: هل تحسين أن اختياراتك العاطفية تشبه نمط تربيتك في الطفولة؟",
    storyEn: "Poll: Do you feel your emotional choices resemble your childhood upbringing pattern?"
  },
  {
    hookAr: "انتي مش محتاجة حد يكملك، انتي كاملة ومحتاجة حد يضيف ليكي.",
    hookEn: "You do not need someone to complete you, you are complete and need someone to add to you.",
    directionAr: "تصميم Carousel بـ 5 شرائح بصرية قوية.",
    directionEn: "Carousel design with 5 strong visual slides.",
    scriptAr: "البحث عن نصف آخر يعني أنك تؤمنين بأنك نصف إنسان، وهذا وهم عاطفي. العلاقة الصحية هي شراكة متكافئة بين روحين كاملتين تقرران السير معاً، وتطوير بعضهما البعض وليس الاتكال المرضي.",
    scriptEn: "Searching for a second half means you believe you are half a human, which is an emotional illusion. A healthy relationship is an equal partnership between two complete souls deciding to walk together.",
    captionAr: "مفهوم الاستحقاق الحقيقي بعيداً عن الغرور: كيف تصبحين مكتملة بذاتك وتستقطبين الشريك المناسب؟",
    captionEn: "The concept of true worthiness away from arrogance: How to become complete in yourself and attract the right partner?",
    storyAr: "سؤال: ما هو أكبر \"ريد فلاج\" (علامة خطر) ترفضين التنازل عنه حالياً في أي علاقة؟",
    storyEn: "Question: What is the biggest red flag you refuse to compromise on now in any relationship?"
  },
  {
    hookAr: "الجملة دي مش تصريح بالتجاوز، دي بداية لاختبار الحدود",
    hookEn: "This sentence is not a permission to cross boundaries, it is the start of testing them",
    directionAr: "تصوير مباشر (Talking Head) بنبرة حازمة وقوية.",
    directionEn: "Direct video (Talking Head) with an assertive and firm tone.",
    scriptAr: "لما يسألك أسئلة شخصية جداً في البدايات أو يتجاوز في كلامه ويقولك 'أصلنا بنقرب من بعض'، دي مش صراحة، ده اختبار لمدى مرونة حدودك وقابليتك للتنازل. علميه من أول يوم فين خطك الأحمر.",
    scriptEn: "When he asks very personal questions early on or crosses lines saying 'we are getting closer', this is not honesty—it is a test of your boundaries and willingness to yield. Teach him from day one where your red line is.",
    captionAr: "التوعية بالاستغلال العاطفي والنفسي في فترة الخطوبة، وأهمية رسم الحدود الحمراء لحفظ الكرامة.",
    captionEn: "Awareness of emotional and psychological exploitation during engagement, and the importance of drawing red lines to preserve dignity.",
    storyAr: "مساحة للأسئلة المجهولة (Anonymous Box) حول العلاقات والحدود.",
    storyEn: "Anonymous Q&A space about relationships and boundaries."
  },
  {
    hookAr: "قبل ما تقولي أيوه، اسألي الأسئلة دي",
    hookEn: "Before saying yes, ask these questions",
    directionAr: "إنفوجرافيك بسيط ومقسم بوضوح.",
    directionEn: "Simple and clearly divided infographic.",
    scriptAr: "الزواج ليس مجرد فستان زفاف وجلسة تصوير، إنه حياة ومسؤولية يومية. اسأليه عن طريقته في إدارة الخلافات، وعلاقته بأهله، وتوقعاته المادية، وكيف يرى دورك كشريكة وصاحبة قرار.",
    scriptEn: "Marriage is not just a wedding dress and a photoshoot; it is daily life and responsibility. Ask him about his conflict resolution, his relationship with family, financial expectations, and your role as a partner.",
    captionAr: "5 مواضيع جوهرية وماصيرية لا يمكن تجاهل مناقشتها مع شريك المستقبل قبل خطوة عقد القران.",
    captionEn: "5 core and critical topics that cannot be ignored or bypassed with your future partner before the marriage contract.",
    storyAr: "اكتبي سؤالاً واحداً كنتِ تتمنين لو سألتيه لشريكك قبل الارتباط.",
    storyEn: "Write one question you wish you had asked your partner before getting engaged."
  },
  {
    hookAr: "اللي بتخافي تخسريه هو غالباً اللي بيأذيكي",
    hookEn: "The one you are afraid to lose is often the one hurting you",
    directionAr: "مشهد درامي تعبيري هادئ مع صوت داخلي عميق.",
    directionEn: "Expressive, calm dramatic scene with deep internal voiceover.",
    scriptAr: "خوفك من الوحدة والفراغ العاطفي يجعلكِ تقبلين بالقليل جداً. كلمة طيبة عابرة أو اهتمام لحظي يهدئ روعكِ لثوانٍ، مقابل التنازل عن سلامك النفسي وصحتك العاطفية في علاقة مستنزفة.",
    scriptEn: "Your fear of loneliness and emotional void makes you accept very little. A passing kind word or momentary attention calms you for seconds, in exchange for giving up your peace of mind and emotional health in a draining relationship.",
    captionAr: "كيف نميز بوضوح بين مشاعر الحب الحقيقي المتكافئ، ومشاعر التعلق المرضي الناتج عن الخوف من الفقد؟",
    captionEn: "How do we clearly distinguish between true equal love and unhealthy attachment stemming from the fear of loss?",
    storyAr: "هل تشعرين أن الخوف من كلام المجتمع يمنعكِ من ترك علاقة تؤذيكِ؟",
    storyEn: "Do you feel that fear of social talk prevents you from leaving a relationship that hurts you?"
  },
  {
    hookAr: "استقلاللك المادي هو خط دفاعك الأول",
    hookEn: "Your financial independence is your first line of defense",
    directionAr: "صورة بروفايل احترافية مع نص تحفيزي ملهم.",
    directionEn: "Professional profile picture with an inspiring motivational text.",
    scriptAr: "المال في يد المرأة ليس مجرد وسيلة للشراء، بل هو قوة القرار والاستقلالية وحرية الاختيار. عندما تكونين مكتفية مادياً، يصعب على الآخرين ابتزازكِ أو فرض خيارات لا تناسبكِ تحت وطأة الحاجة.",
    scriptEn: "Money in a woman's hand is not just a purchasing tool; it is the power of decision, independence, and freedom of choice. When you are financially independent, it is hard for others to exploit or control you.",
    captionAr: "العلاقة الوثيقة بين التمكين المالي والمهني للمرأة، وبين رفع مستوى استحقاقها وحفظ كرامتها في العلاقات.",
    captionEn: "The close relationship between financial/professional empowerment for women, and raising their worthiness and dignity in relationships.",
    storyAr: "هل تعتقدين أن خروج المرأة للعمل يزيد من قوة شخصيتها ونضجها العاطفي؟",
    storyEn: "Do you think working increases a woman's personality strength and emotional maturity?"
  },
  {
    hookAr: "الحدود مش سور بنبنيه، دي مراية بتعرفهم إزاي يتعاملوا معانا",
    hookEn: "Boundaries are not a wall we build, they are a mirror that teaches them how to treat us",
    directionAr: "شرح عملي بتمثيل موقف حياتي بسيط.",
    directionEn: "Practical explanation by acting out a simple life situation.",
    scriptAr: "قولكِ 'لا' للأشياء التي تؤذيكِ أو تضايقكِ ليس هجوماً على الشريك، بل هو توضيح لكتالوج التعامل السليم معكِ. الحب الحقيقي لا يختنق بالحدود، بل يزدهر في بيئة من الاحترام المتبادل.",
    scriptEn: "Saying 'no' to things that hurt or bother you is not an attack on your partner; it is explaining the catalog of proper interaction with you. True love thrives in mutual respect for boundaries.",
    captionAr: "دليل مبسط لوضع حدود واضحة ومستدامة مع الخطيب دون الشعور بالذنب أو الخوف من خسارة العلاقة.",
    captionEn: "A simple guide to setting clear, sustainable boundaries with your fiancé without guilt or fear of losing the relationship.",
    storyAr: "من هو الشخص الذي تجدين صعوبة بالغة في وضع حدود حازمة معه؟",
    storyEn: "Who is the person you find extremely difficult to set firm boundaries with?"
  },
  {
    hookAr: "كانت فاكرة إنه بيحبها، لحد ما اكتشفت إنه بيستغل ثقتها",
    hookEn: "She thought he loved her, until she discovered he was exploiting her trust",
    directionAr: "صورة تعبيرية ملفتة مع إضاءة خافتة (وجه غامض).",
    directionEn: "Striking expressive image with dim lighting (mysterious face).",
    scriptAr: "الاستغلال ليس مادياً فقط، فالاستغلال النفسي والعاطفي أشد وطأة. عندما يستغل الشريك نقاط ضعفك وأسرارك لكي يضغط عليكِ بها لاحقاً أو يقلل من ثقتك بنفسك، فهذا مؤشر خطير جداً.",
    scriptEn: "Exploitation is not just material; psychological and emotional exploitation is far worse. When a partner uses your vulnerabilities and secrets to pressure you later, it is a huge red flag.",
    captionAr: "تحليل سيكولوجي دقيق لأساليب الابتزاز العاطفي التي يمارسها البعض تحت غطاء الحب والاهتمام الكاذب.",
    captionEn: "A precise psychological analysis of emotional blackmail tactics practiced under the guise of false love and care.",
    storyAr: "هل سبق وأن شعرتِ بالذنب والابتزاز العاطفي داخل علاقة مقربة منكِ؟",
    storyEn: "Have you ever felt guilt-tripped or emotionally blackmailed in a close relationship?"
  },
  {
    hookAr: "الوحدة صعبة، بس مش أصعب من حياة مع شخص غلط",
    hookEn: "Loneliness is hard, but not harder than life with the wrong person",
    directionAr: "فيديو بلقطات سريعة ومعبرة مع موسيقى هادئة مؤثرة.",
    directionEn: "Video with quick, expressive cuts and calm, emotional music.",
    scriptAr: "أصعب درجات الوحدة هي أن تكوني وحيدة وأنتِ بجانب شريك حياتك. أن تتحدثي فلا يسمعك، وتتألمي فلا يشعر بكِ. الوحدة المنفردة تمنحكِ فرصة للسلام، بينما الوحدة الزوجية تلتهم روحك بالتدريج.",
    scriptEn: "The hardest level of loneliness is being alone while next to your partner—to speak and not be heard, to ache and not be felt. Single loneliness gives you peace, but marital loneliness slowly consumes your soul.",
    captionAr: "تفنيد المخاوف الشائعة من البقاء عزباء، وأهمية اختيار السلام الداخلي على حساب العلاقات المستنزفة السامة.",
    captionEn: "Deconstructing common fears of remaining single, and the importance of choosing inner peace over toxic, draining relationships.",
    storyAr: "كويز: ما هو أكبر تخوف يراودكِ عند التفكير في موضوع الزواج والارتباط؟",
    storyEn: "Quiz: What is your biggest fear when thinking about marriage and commitment?"
  },
  {
    hookAr: "مش كل كلمة حلوة حب، فيه كلام هدفه بس الوصول",
    hookEn: "Not every sweet word is love; some words only aim to get access",
    directionAr: "نص بخلفية بلون موحد وجذاب (تصميم بسيط وقوي).",
    directionEn: "Text with a solid, attractive background (simple yet strong design).",
    scriptAr: "الكلمات الجميلة رخيصة وسهلة المنال، أما المواقف والأفعال فهي العملة النادرة الحقيقية. راقبي التناقض بين ما يقوله وما يفعله؛ فالكلام يدغدغ العواطف بينما المواقف هي التي تبني البيوت المتينة.",
    scriptEn: "Beautiful words are cheap and easy, but actions and stands are the real rare currency. Watch the inconsistency between what he says and what he does; words tickle emotions, but actions build solid homes.",
    captionAr: "كيف تكتشفين النوايا غير الصادقة والتلاعب العاطفي في فترة التعارف وحماية قلبك من الخداع؟",
    captionEn: "How to discover insincere intentions and emotional manipulation during dating and protect your heart from deception?",
    storyAr: "اكتبي كلمة أو تصرفاً يجعلكِ تفقدين الثقة تماماً في الشريك الآخر.",
    storyEn: "Write one word or action that makes you completely lose trust in the other partner."
  },
  {
    hookAr: "ليش بنكرر نفس الغلط مع أشخاص مختلفين؟",
    hookEn: "Why do we repeat the same mistake with different people?",
    directionAr: "فيديو تعليمي تفاعلي يوضح آلية عمل دورة الصدمة النفسية.",
    directionEn: "Interactive educational video explaining the mechanism of the psychological trauma cycle.",
    scriptAr: "العقل الباطن يعيدنا لنفس السيناريوهات المؤلمة بحثاً عن فرصة لإصلاحها، فننجذب لا شعورياً لنفس النماذج السامة. لكي تكسري هذه الحلقة المفرغة، عليكِ أولاً مواجهة جذور الصدمة القديمة والتشافي منها.",
    scriptEn: "The subconscious mind returns us to the same painful scenarios seeking a chance to fix them, making us unconsciously drawn to toxic models. To break this vicious cycle, you must first face and heal old trauma.",
    captionAr: "فهم عميق لأنماط التكرار اللاواعي في العلاقات السامة، والخطوات العملية للتحرر والتشافي الذاتي التام.",
    captionEn: "Deep understanding of unconscious repetition patterns in toxic relationships, and practical steps for total self-healing and liberation.",
    storyAr: "استطلاع: هل تشعرين أنكِ تقعين دائماً في غرام نفس النمط من الشخصيات غير المناسبة؟",
    storyEn: "Poll: Do you feel you always fall for the same pattern of unsuitable personalities?"
  },
  {
    hookAr: "انتي مش مشروع للإصلاح، انتي إنسانة للتقدير",
    hookEn: "You are not a rehabilitation project; you are a human to be appreciated",
    directionAr: "صورة للأميرة بخلفية مكتبية مريحة ودافئة.",
    directionEn: "A picture of Amira with a comfortable and warm office background.",
    scriptAr: "لا تدخلي أي علاقة بنية تغيير الطرف الآخر أو 'إصلاحه'. أنتِ شريكة حياة ولستِ مصلحة اجتماعية أو عيادة نفسية متنقلة. اختاري من يناسبكِ بنضجه الحالي، فالأشخاص يتغيرون فقط عندما يريدون هم ذلك.",
    scriptEn: "Never enter a relationship with the intention of changing or 'fixing' the other person. You are a partner, not a social therapist or mobile clinic. Choose someone who fits you in their current maturity.",
    captionAr: "فخ محاولة 'إصلاح الشريك' وكيف يستنزف طاقتكِ النفسية والجسدية ويقضي على تقديرك واحترامك لذاتك.",
    captionEn: "The trap of trying to 'fix the partner' and how it drains your psychological and physical energy and ruins self-respect.",
    storyAr: "اكتبي نصيحة من ذهب توجهينها لفتاة في مقتبل فترة خطوبتها وتعارفها.",
    storyEn: "Write a piece of golden advice to a girl at the beginning of her engagement and dating period."
  },
  {
    hookAr: "الشخص اللي بيخليكِ تشكي في نفسك، هو الشخص اللي لازم تبعدي عنه",
    hookEn: "The person who makes you doubt yourself is the one you must walk away from",
    directionAr: "تصوير سريع مع لقطات ديناميكية ونقاط تظهر بالتدريج.",
    directionEn: "Fast-paced video with dynamic cuts and bullet points appearing gradually.",
    scriptAr: "التلاعب النفسي أو الـ Gaslighting هو أسلوب يجعل الطرف الآخر يشكك في ذاكرته، مشاعره، وصحته العقلية لكي يظل خاضعاً ومسيطراً عليه. العلاقة السليمة تمنحكِ الأمان والوضوح، وليس الشك المستمر في ذاتك.",
    scriptEn: "Psychological manipulation or gaslighting is a method that makes you doubt your memory, feelings, and sanity to keep you controlled. A healthy relationship gives you safety and clarity, not constant self-doubt.",
    captionAr: "كيف تكتشفين التلاعب النفسي الممنهج (Gaslighting) وتحمين سلامتكِ العقلية والروحية من التدمير؟",
    captionEn: "How to detect systematic psychological manipulation (gaslighting) and protect your mental and spiritual sanity from destruction?",
    storyAr: "اكتبي علامة واحدة واضحة تخبركِ فوراً أن هذا الشخص لا يستحق ثقتكِ الكبيرة.",
    storyEn: "Write one clear sign that immediately tells you this person does not deserve your trust."
  },
  {
    hookAr: "الاستحقاق هو إنك تعرفي قيمتك الحقيقية",
    hookEn: "Worthiness is knowing your true value",
    directionAr: "تصميم Carousel مقسم لأسئلة وأجوبة مباشرة وسريعة.",
    directionEn: "Carousel design divided into direct and quick Q&A format.",
    scriptAr: "الاستحقاق ليس تعالياً أو كبراً على الآخرين، بل هو وضع معيار واضح لطريقة معاملتك ورفض التقليل من شأنكِ. الاستحقاق يعني أنكِ تدركين تماماً ما تقدمينه وتستحقين الحصول على المقابل المناسب من التقدير.",
    scriptEn: "Worthiness is not arrogance or looking down on others; it is setting a clear standard for how you are treated and refusing belittlement. It means knowing what you offer and deserving the proper appreciation in return.",
    captionAr: "الإجابة عن الأسئلة الأكثر شيوعاً وتكراراً من المتابعات حول تقدير الذات وكيفية بناء استحقاق نفسي متين.",
    captionEn: "Answering the most common and repeated questions from female followers about self-esteem and building a solid sense of worthiness.",
    storyAr: "شاركينا في كلمة واحدة: ماذا يعني مفهوم الاستحقاق الشخصي بالنسبة لكِ؟",
    storyEn: "Share with us in one word: What does the concept of personal worthiness mean to you?"
  },
  {
  }
];

function generateFullCalendarRows(pdf: any, pageNum: number, pageTitle: string): any[] {
  // If we already have amira sheet 1, return it
  if (pdf.id === 'pdf-amira' && pageNum === 1) {
    return AMIRA_SHEET_ROWS;
  }

  // Let's determine the category/niche of the PDF
  const cat = (pdf.categoryEn || "").toLowerCase();
  const isRealEstate = cat.includes('estate') || cat.includes('broker') || cat.includes('aria') || pdf.id.includes('aria');
  const isWellness = cat.includes('wellness') || cat.includes('lifestyle') || pdf.id.includes('wellness');

  // Let's determine the sheet type
  const titleLower = (pageTitle || "").toLowerCase();
  const isScripts = titleLower.includes('script') || titleLower.includes('video') || titleLower.includes('سيناريو') || titleLower.includes('ريلز');

  if (isRealEstate) {
    if (isScripts) {
      return [
        {
          hookAr: "ليه الأغنياء بيشتروا في الساحل الشمالي دلوقتي بالذات؟",
          hookEn: "Why are high-net-worth individuals buying in the North Coast right now?",
          directionAr: "تصوير POV هادئ وممتاز لفيلا مطلة على البحر مباشرة.",
          directionEn: "POV cinematic walkthrough of a prime beachfront villa.",
          scriptAr: "الاستثمار في العقار الفاخر مش مجرد شراء جدران، ده حماية لقيمة فلوسك بالدولار، وعائد سنوي بيبدأ من 15% من التشغيل الفندقي الراقي. في 'آريا' بنضمنلك الاستحواذ والإدارة بالكامل.",
          scriptEn: "Investing in luxury real estate isn't just about walls. It protects your capital in hard currency with an annual return starting from 15% via professional hotel operations.",
          captionAr: "الاستثمار العقاري الآمن في الساحل الشمالي: كيف تختار الوحدة التي تضمن أعلى عائد فندقي مستدام؟",
          captionEn: "Secure real estate investment in the North Coast: How to choose the unit that guarantees the highest sustainable yield?",
          storyAr: "هل تفضل عائد الإيجار الفندقي بالعملة الصعبة أم إعادة البيع السريع؟",
          storyEn: "Poll: Do you prefer hotel rental yield in USD or quick resale?"
        },
        {
          hookAr: "الفرق بين الشاليه العادي والـ Boutique Villa اللي بتصنع فارق",
          hookEn: "The difference between an ordinary chalet and a bespoke Boutique Villa",
          directionAr: "لقطات قريبة (Close-ups) للتفاصيل الرخامية والتشطيبات الفاخرة.",
          directionEn: "Close-up shots of Italian marble and bespoke brass finishes.",
          scriptAr: "الخصوصية هي الفخامة الحقيقية. لما تفتح باب غرفتك وتلاقي حمام السباحة الخاص بيمتد للبحر، بدون أي تطفل أو إزعاج، ده اللي بنسميه تصميم بلا تنازلات.",
          scriptEn: "Privacy is the ultimate luxury. Sliding open your door to find a private pool blending into the horizon, with zero noise, is what we call compromise-free design.",
          captionAr: "التصميم الهندسي الذكي في مشاريع ARIA الفاخرة يضع راحتك وخصوصيتك في المقام الأول.",
          captionEn: "Smart architectural design in ARIA luxury projects prioritizes your absolute comfort and privacy.",
          storyAr: "ما هي أول ميزة تهمك في تشطيب شاليهك الخاص بالساحل؟",
          storyEn: "What is the first feature you check in premium coastal finishes?"
        },
        {
          hookAr: "خطأ فادح بيعمله المستثمرين في عقارات الساحل",
          hookEn: "A fatal mistake investors make in Coast real estate",
          directionAr: "تصوير مباشر (Talking Head) بنبرة واثقة وخلفية بحرية خلابة.",
          directionEn: "Direct video (Talking Head) with a confident tone and a coastal backdrop.",
          scriptAr: "تشتري عشان السعر الأرخص وتنسى قوة شركة الإدارة والتشغيل الفندقي. في النهاية الشاليه بيفضل مقفول طول السنة وبتخسر العائد المستدام. اختار البراند الصح.",
          scriptEn: "Buying for the cheapest price while neglecting the management & hotel operation company is a major pitfall. Choose the right brand.",
          captionAr: "أهمية التشغيل الفندقي المحترف في الحفاظ على قيمة أصولك العقارية وتوليد عوائد مستمرة.",
          captionEn: "The importance of professional hotel management in preserving your asset value and driving consistent yields.",
          storyAr: "هل جربت تستثمر في العقارات الفندقية قبل كده؟",
          storyEn: "Have you ever invested in hotel-operated properties?"
        },
        {
          hookAr: "معادلة الـ 10 سنوات: كيف تدفع وحدتك ثمنها بنفسها؟",
          hookEn: "The 10-Year Equation: How your unit pays for itself",
          directionAr: "إنفوجرافيك متحرك يوضح الأرقام ونسب العوائد والتشغيل.",
          directionEn: "Motion graphics showing numbers, yields, and operational metrics.",
          scriptAr: "الاستثمار الذكي بيعتمد على تشغيل الوحدة فندقياً طول شهور السنة مش بس في الصيف. من خلال برامج التأجير العالمية لـ ARIA، تقدر تغطي الأقساط بالكامل من العوائد.",
          scriptEn: "Smart investment relies on operating the unit year-round, not just during summer. Through ARIA's global rental programs, you cover installments directly from yields.",
          captionAr: "شرح تفصيلي لبرنامج العائد الاستثماري المضمون ونسب الإشغال في مشاريعنا الساحلية.",
          captionEn: "Detailed breakdown of the guaranteed investment return program and occupancy rates in our coastal projects.",
          storyAr: "اكتب 'استثمار' وهنبعتلك دراسة الجدوى والأسعار فوراً.",
          storyEn: "Type 'Invest' and we'll instantly send you the complete financial feasibility study."
        },
        {
          hookAr: "أفخم لاجون كريستالي في مصر بيمتد لحد شاليهك",
          hookEn: "Egypt's most luxurious crystal lagoon extending straight to your chalet",
          directionAr: "فيديو جوي (Drone shot) مذهل للمياه الفيروزية الصافية.",
          directionEn: "Stunning aerial drone footage of crystal-clear turquoise waters.",
          scriptAr: "تخيل تصحى كل يوم على منظر الكريستال لاجون الصافي، خطوة واحدة من تراس شاليهك الخاص. هدوء تام وراحة بتستحقها أنت وعيلتك.",
          scriptEn: "Imagine waking up to the crystal lagoon views, just one step from your terrace. Pure peace and comfort that you and your family deserve.",
          captionAr: "المساحات المائية الشاسعة واللاجونز الكريستالية تعيد تعريف الهدوء الساحلي في مشاريعنا.",
          captionEn: "Vast water bodies and crystal lagoons redefine coastal tranquility in our master-planned projects.",
          storyAr: "هل بتفضل الشاليه المطل على البحر مباشرة أم على اللاجون الصافي؟",
          storyEn: "Do you prefer a direct sea view or a pristine lagoon view?"
        },
        {
          hookAr: "ليه الإقبال على المشاريع المغلقة (Gated) بيزيد كل سنة؟",
          hookEn: "Why demand for gated premium communities increases every year?",
          directionAr: "جولة POV بصرية تبدأ من بوابات الأمن الذكية للمشروع.",
          directionEn: "POV visual tour starting from the project's smart gated security.",
          scriptAr: "الأمان والخصوصية هما ركائز العيش الراقي. مجتمع مغلق بالكامل، حراسة 24 ساعة، وكاميرات مراقبة متطورة بتخليك متطمن على أولادك ومستمتع بكل لحظة.",
          scriptEn: "Security and privacy are the pillars of upscale living. A fully gated community, 24/7 security, and advanced monitoring give you peace of mind.",
          captionAr: "منظومة الأمان والخصوصية المتكاملة في مشاريع ARIA تضمن لك ولعائلتك أقصى درجات الراحة.",
          captionEn: "The integrated security and privacy systems at ARIA guarantee the highest standards of safety for your family.",
          storyAr: "ما هي أكثر ميزة تهمك في الكومباوند الساحلي؟",
          storyEn: "What feature matters most to you in a coastal compound?"
        },
        {
          hookAr: "شاليه أحلامك بالتقسيط المريح على 8 سنوات بدون فوائد",
          hookEn: "Your dream chalet with easy installments over 8 years interest-free",
          directionAr: "عرض سينمائي للمطابخ الحديثة وغرف المعيشة الواسعة.",
          directionEn: "Cinematic presentation of modern kitchens and spacious living rooms.",
          scriptAr: "فرصتك لامتلاك وحدة فاخرة في أرقى مناطق الساحل بأقل مقدم وأطول فترة سداد. احجز الآن بأسعار اللونش واستفد من الخصم الخاص.",
          scriptEn: "Your chance to own a luxury unit in the finest areas of the North Coast with the lowest down payment and longest payment term.",
          captionAr: "خطط السداد المرنة والأسعار الحصرية المتاحة حالياً لفترة محدودة خلال فترة اللونش.",
          captionEn: "Flexible payment plans and exclusive pricing available now for a limited time during our launch phase.",
          storyAr: "اكتب 'حجز' وهيتم التواصل معاك من مستشارنا العقاري.",
          storyEn: "Type 'Book' and our premium real estate consultant will contact you instantly."
        },
        {
          hookAr: "إطلالة بانورامية مزدوجة تجمع بين البحر واللاجون",
          hookEn: "Panoramic double-view combining both sea and lagoon",
          directionAr: "لقطة بانورامية بزاوية 360 درجة من روف الشاليه الفخم.",
          directionEn: "A 360-degree panoramic sweep from the rooftop of a luxury chalet.",
          scriptAr: "مفيش حيرة بعد اليوم. صممنا الشاليهات بنظام الإطلالة المزدوجة عشان تستمتع زرقة البحر اللانهائية من جهة، وصفاء اللاجون من جهة تانية.",
          scriptEn: "No more choosing. We designed our chalets with double-view capability so you enjoy the infinite blue sea on one side, and the lagoon on the other.",
          captionAr: "التميز المعماري لشركة ARIA يمنح وحدتك قيمة استثنائية وإطلالات ساحرة من كل الزوايا.",
          captionEn: "ARIA's architectural excellence gives your unit exceptional value and charming views from all angles.",
          storyAr: "ما رأيك في فكرة الإطلالة المزدوجة؟",
          storyEn: "What do you think of the double-view concept?"
        },
        {
          hookAr: "تخيل تقضي الصيف الجاي في شاليهك الخاص المستلم متشطب بالكامل",
          hookEn: "Imagine spending next summer in your own fully finished chalet",
          directionAr: "لقطات سريعة تظهر جودة الخامات الإيطالية المستخدمة في التشطيب.",
          directionEn: "Fast-paced shots highlighting premium Italian materials used in finishes.",
          scriptAr: "استلام شاليهك بالكامل بالتكييفات والمطبخ الإيطالي الفاخر، جاهز للسكن والتشغيل فوراً. وفرنا عليك تعب ومجهود التشطيب عشان تستمتع على طول.",
          scriptEn: "Receive your chalet fully finished with ACs and luxury Italian kitchens, ready for immediate move-in and operation.",
          captionAr: "التزامنا بأعلى معايير التشطيب الفندقي الفاخر يضمن لك تسليم وحدة متكاملة تليق بتطلعاتك.",
          captionEn: "Our commitment to the highest standards of luxury hotel finishing guarantees a unit matching your aspirations.",
          storyAr: "هل تفضل الاستلام بالفرش والأجهزة كاملة أم التشطيب فقط؟",
          storyEn: "Do you prefer receiving the unit fully furnished or finished only?"
        },
        {
          hookAr: "الفرصة الأخيرة للاستثمار بأسعار مرحلة اللونش الأولى",
          hookEn: "Last chance to invest at the exclusive Phase 1 launch prices",
          directionAr: "ساعة رملية أو عد تنازلي مع موسيقى حماسية سريعة.",
          directionEn: "Hourglass or countdown visual with fast-paced exciting music.",
          scriptAr: "المرحلة الأولى شارفت على الانتهاء بالكامل. الأسعار هتزيد بنسبة 10% بدءاً من الأسبوع القادم. احمي استثمارك واحجز وحدتك اليوم بالأسعار القديمة.",
          scriptEn: "Phase 1 is nearly sold out. Prices will increase by 10% starting next week. Secure your investment and book today at the old prices.",
          captionAr: "العد التنازلي لانتهاء عروض مرحلة اللونش الأولى لمشروع ARIA الساحلي الفاخر.",
          captionEn: "The countdown to the end of our Phase 1 launch offers for ARIA's luxury coastal project.",
          storyAr: "اكتب 'تفاصيل' وهنبعتلك بروشور الأسعار المتبقية فوراً على الخاص.",
          storyEn: "Type 'Details' and we'll instantly send you the remaining pricing brochure."
        }
      ];
    } else {
      return [
        {
          hookAr: "أعمدة التسويق العقاري الفاخر لبراند ARIA",
          hookEn: "Premium Real Estate Marketing Pillars for ARIA",
          directionAr: "تصميم أنيق وبسيط بـ 3 شرائح بصرية متناسقة.",
          directionEn: "Elegant, clean design with 3 coherent visual slides.",
          scriptAr: "الركيزة الأولى: سرد قصصي حسي يركز على عيش التجربة. الركيزة الثانية: إثبات الأمان المادي والعائد الاستثماري بالحقائق. الركيزة الثالثة: توفير سهولة مطلقة في التواصل والحجز الفوري.",
          scriptEn: "Pillar 1: Sensory storytelling focused on experience. Pillar 2: Financial safety and proven yields. Pillar 3: Absolute friction-free booking and support.",
          captionAr: "الاستراتيجية الشاملة لتسويق وتدشين الهوية العقارية الفاخرة للجمهور النخبي.",
          captionEn: "The comprehensive strategy to market and launch luxury real estate identities to high-net-worth audiences.",
          storyAr: "أي عمود تسويقي تراه الأكثر تأثيراً وجذباً للعميل الفاخر؟",
          storyEn: "Which marketing pillar do you find most effective for premium buyers?"
        },
        {
          hookAr: "الجمهور المستهدف: عقلية المشتري النخبي (Elite Targeting)",
          hookEn: "Target Audience: Inside the Elite Buyer's Mindset",
          directionAr: "رسم بياني مبسط لشرائح الجمهور واهتماماتهم المالية والشخصية.",
          directionEn: "Simplified chart illustrating audience segments and their financial/personal interests.",
          scriptAr: "العميل الفاخر لا يشتري لمجرد السكن، بل يشتري التميز والأمان والاستمرارية. يهمه جودة الخدمة الفندقية، جيرة محترمة، وخصوصية تامة لسلامة عائلته ونفسه.",
          scriptEn: "Elite buyers don't just buy square footage; they buy status, security, and longevity. They value professional services and like-minded neighbors.",
          captionAr: "كيف تفكك صياغة المحتوى عقلية المشتري ذو الملاءة المالية العالية وتلبي احتياجاته غير المعلنة؟",
          captionEn: "How copywriting decodes the high-net-worth mindset and answers their unspoken requirements.",
          storyAr: "ما هي أكثر ميزة تمنح العميل إحساساً بالفخامة والتميز? ",
          storyEn: "What feature gives clients the ultimate sense of luxury and status?"
        },
        {
          hookAr: "قمع المبيعات الذكي: من ريلز إنستغرام لرسالة واتساب مغلقة",
          hookEn: "The Smart Funnel: From Instagram Reels to WhatsApp Close",
          directionAr: "إنفوجرافيك تفاعلي يمثل رحلة العميل خطوة بخطوة.",
          directionEn: "Interactive infographic mapping the customer journey step-by-step.",
          scriptAr: "الرحلة بتبدأ من فيديو يخطف الأنظار، ثم تفعيل أوتوميشن ManyChat بكلمة مفتاحية ذكية، وإرسال البروشور فوراً، ثم إحالة العميل الساخن لمستشار المبيعات على الواتساب.",
          scriptEn: "The journey begins with an eye-catching reel, followed by ManyChat automated keyword replies delivering the brochure, leading straight to WhatsApp sales closing.",
          captionAr: "كيف نربط المحتوى الإبداعي بأتمتة المبيعات لزيادة معدل تحويل العملاء المهتمين بنسبة ٣٠٠٪؟",
          captionEn: "How we link creative content with sales automation to boost lead conversion rates by 300%.",
          storyAr: "هل تفضل الحصول على الأسعار تلقائياً على الخاص أم بالاتصال الهاتفي المباشر؟",
          storyEn: "Do you prefer receiving prices automatically via DM or via a phone call?"
        },
        {
          hookAr: "جدولة النشر وتنسيق القنوات لحملة الصيف العقارية",
          hookEn: "Publishing Schedule & Channel Synergy for the Summer Campaign",
          directionAr: "جدول تقويمي يوضح توزيع المحتوى على مدار 4 أسابيع.",
          directionEn: "Calendar grid showcasing content distribution over 4 weeks.",
          scriptAr: "توزيع مدروس بين الفيديوهات الترويجية السريعة لبناء الوعي، منشورات الكاروسيل للتفاصيل الفنية، والستوريز اليومية التفاعلية للحفاظ على حرارة التواصل وبناء الرغبة.",
          scriptEn: "Careful balance between fast-paced awareness reels, technical carousel posts, and daily interactive stories to maintain heat and drive desire.",
          captionAr: "الخطة الزمنية المتكاملة لتنسيق وتوزيع المحتوى العقاري لضمان أقصى وصول وتأثير.",
          captionEn: "The integrated timeline for coordinating and distributing real estate content to ensure maximum reach and impact.",
          storyAr: "ما هي المنصة الأكثر تصفحاً لديك للبحث عن العقارات الفاخرة؟",
          storyEn: "What is your primary platform for researching premium properties?"
        },
        {
          hookAr: "5 أدوات ذكية نستخدمها لإدارة حملات ARIA باحترافية",
          hookEn: "5 smart tools we use to manage ARIA campaigns professionally",
          directionAr: "عرض أيقونات الأدوات المستخدمة مع شرح موجز لكل أداة.",
          directionEn: "Icons of tools utilized with a brief explanation of each tool's function.",
          scriptAr: "استخدام ManyChat للرد الآلي، CapCut للمونتاج السريع والسينمائي، Notion لإدارة الأفكار والسيناريوهات، Google Sheets للمتابعة اللحظية، و Meta Ads لإعادة الاستهداف الدقيق.",
          scriptEn: "Leveraging ManyChat for automated responses, CapCut for cinematic editing, Notion for storyboards, Google Sheets for tracking, and Meta Ads for target retargeting.",
          captionAr: "كواليس العمل الاحترافي والأدوات التقنية التي تضمن سلاسة تشغيل ونجاح حملاتنا التسويقية الكبرى.",
          captionEn: "Behind-the-scenes of professional operations and tech tools securing the flawless execution of our major campaigns.",
          storyAr: "هل تستخدم أتمتة الرسائل ManyChat في مشروعك العقاري حالياً؟",
          storyEn: "Do you currently use ManyChat message automation in your real estate project?"
        }
      ];
    }
  }

  if (isWellness) {
    return [
      {
        hookAr: "الاستيقاظ بدون توتر هو أعظم هدية لجهازك العصبي اليوم",
        hookEn: "Waking up without stress is the greatest gift to your nervous system today",
        directionAr: "فيديو هادئ لروتين الصباح مع زاوية تصوير واسعة وإضاءة طبيعية دافئة.",
        directionEn: "Calm morning routine walkthrough with wide angle and warm natural lighting.",
        scriptAr: "ابدأ يومك بـ 5 دقائق فقط من الصمت والتنفس العميق قبل فتح هاتفك وتصفح السوشيال ميديا. هدوء البداية يحدد مسار يومك بالكامل ونشاطك العقلي والبدني.",
        scriptEn: "Start your day with just 5 minutes of silence and deep breathing before checking your phone or scrolling. Morning stillness shapes your entire daily trajectory.",
        captionAr: "العادات الصباحية الصغيرة التي تعيد ضبط طاقتك وسلامك الداخلي للإنتاجية والتركيز المستدام.",
        captionEn: "Micro morning habits that reset your energy and inner peace for sustainable productivity and focus.",
        storyAr: "هل تفتح هاتفك فور الاستيقاظ أم تأخذ وقتاً لنفسك أولاً؟",
        storyEn: "Do you open your phone immediately upon waking up, or take personal time first?"
      },
      {
        hookAr: "علاقتك مع شرب المية: هل بتشرب لما تعطش بس؟",
        hookEn: "Your relationship with water: Do you only drink when you are thirsty?",
        directionAr: "تصميم كاروسيل جذاب بألوان هادئة يعرض فوائد الترطيب المستمر.",
        directionEn: "Attractive carousel with soothing colors showcasing continuous hydration benefits.",
        scriptAr: "العطش هو علامة متأخرة على الجفاف. شرب المية بانتظام على مدار اليوم بيحسن نضارة البشرة، بيزيد التركيز الذهني بنسبة 20%، وبيخلص الجسم من السموم المتراكمة.",
        scriptEn: "Thirst is a late indicator of dehydration. Drinking water consistently improves skin clarity, boosts mental clarity by 20%, and flushes toxins.",
        captionAr: "أهمية الحفاظ على رطوبة جسمك ودورها الخفي في رفع مستويات الطاقة وتخفيف التوتر اليومي.",
        captionEn: "The importance of continuous hydration and its hidden role in boosting energy levels and relieving stress.",
        storyAr: "كام كوباية مية شربتها النهاردة لحد دلوقتي؟",
        storyEn: "How many glasses of water have you had today so far?"
      },
      {
        hookAr: "كيف تكسر دائرة التفكير الزائد (Overthinking) في دقيقتين؟",
        hookEn: "How to break the overthinking loop in just two minutes?",
        directionAr: "تمثيل موقف بسيط يوضح التوتر ثم الاسترخاء والتنفس السليم.",
        directionEn: "Simple lifestyle simulation showing stress, transition to relaxation, and proper breathing.",
        scriptAr: "جرب قاعدة 5-4-3-2-1 الحسية: اذكر 5 أشياء تراها، 4 أشياء تلمسها، 3 أشياء تسمعها، شيئين تشمهما، وشيء واحد تتذوقه. هذا التمرين يعيدك للحظة الحالية فوراً ويخفف حدة القلق.",
        scriptEn: "Try the 5-4-3-2-1 sensory technique: Name 5 things you see, 4 you feel, 3 you hear, 2 you smell, and 1 you taste. This instantly grounds you in the present.",
        captionAr: "طرق عملية وسريعة للتخلص من التفكير المفرط والعودة للتوازن والهدوء الداخلي في المواقف الصعبة.",
        captionEn: "Practical and quick techniques to release overthinking and restore inner balance and focus during high-pressure moments.",
        storyAr: "هل تعاني من التفكير المفرط قبل النوم بالذات؟",
        storyEn: "Do you suffer from overthinking right before bed?"
      },
      {
        hookAr: "أهمية التدوين اليومي (Journaling) في ترتيب أفكارك وتخفيف القلق",
        hookEn: "The importance of daily journaling in organizing thoughts and easing anxiety",
        directionAr: "مشهد مريح لليد وهي تكتب على دفتر أنيق وقلم كلاسيكي.",
        directionEn: "Cozy shot of writing with an elegant pen on a physical book.",
        scriptAr: "تفريغ الأفكار على الورق بيخرجها من عقلك المزدحم لمساحة واضحة تقدر تحللها وتتعامل معاها بموضوعية. خصص 10 دقائق كل ليلة لكتابة ما يمتن قلبك له وتحديات يومك.",
        scriptEn: "Dumping thoughts onto paper unburdens your mind, letting you analyze and address them objectively. Dedicate 10 minutes every night for self-reflection.",
        captionAr: "قوة التدوين والكتابة العلاجية في تعزيز الصحة النفسية والنمو الشخصي المستمر.",
        captionEn: "The therapeutic power of journaling in boosting emotional wellbeing and continuous personal development.",
        storyAr: "اكتب 'دفتر' وهنبعتلك نموذج تدوين جاهز للتحميل فوراً.",
        storyEn: "Type 'Journal' and we will instantly send you a free digital journaling template."
      },
      {
        hookAr: "النوم الصحي: روتين ما قبل النوم المثالي لنوم عميق ومريح",
        hookEn: "Healthy Sleep: The ultimate wind-down routine for deep rest",
        directionAr: "لقطات دافئة لإضاءة خافتة وإغلاق الأجهزة الإلكترونية وقراءة كتاب.",
        directionEn: "Warm low-light shots of shutting down digital devices and reading a physical book.",
        scriptAr: "تجنب الشاشات الزرقاء قبل النوم بساعة على الأقل. الضوء الأزرق بيمنع إفراز الميلاتونين المسؤول عن النوم. استبدلها بقراءة خفيفة، شاي دافئ خالي من الكافيين، وتنفس هادئ.",
        scriptEn: "Avoid blue screens for at least an hour before bed. Blue light halts melatonin release. Swap screens for light reading, herbal tea, and breathing exercises.",
        captionAr: "خطوات بسيطة ومجربة لبناء روتين نوم صحي يضمن لك الاستيقاظ بكامل طاقتك وحيويتك.",
        captionEn: "Simple, proven steps to build a healthy evening routine ensuring you wake up fully energized and active.",
        storyAr: "كام ساعة بتنامها في المتوسط كل ليلة؟",
        storyEn: "How many hours of sleep do you get on average each night?"
      }
    ];
  }

  // Fallback / Personal Branding / Marketing (Default)
  return [
    {
      hookAr: `استراتيجية المحتوى الفعالة لـ ${pdf.titleAr || 'صناعة التأثير'}`,
      hookEn: `Effective Content Strategy for ${pdf.titleEn || 'Authority Building'}`,
      directionAr: "عرض كاروسيل تفاعلي مقسم لخطوات واضحة لتوليد الأفكار الحية.",
      directionEn: "Interactive carousel broken down into clear steps for generating organic ideas.",
      scriptAr: "الخطوة الأولى: تحديد مخاوف العميل الحقيقية وتفكيكها. الخطوة الثانية: صياغة هوك يلمس المشكلة مباشرة. الخطوة الثالثة: تقديم الحل الحاسم مع حافز قوي للتفاعل والأتمتة.",
      scriptEn: "Step 1: Identify and deconstruct client fears. Step 2: Write a compelling hook answering the pain point. Step 3: Present the solution with a clear automated CTA.",
      captionAr: "الدليل الشامل لصناعة محتوى تسويقي عالي التحويل يربط صناعة التأثير بالمبيعات المباشرة.",
      captionEn: "The ultimate guide to creating high-converting marketing content connecting influence with direct sales.",
      storyAr: "هل تجد صعوبة أكبر في صياغة الهوك القوي أم نص الاسكريبت؟",
      storyEn: "Do you find it harder to write a powerful hook or the script itself?"
    },
    {
      hookAr: "سر الاستمرارية في السوشيال ميديا بدون احتراق مهني",
      hookEn: "The secret to consistent social media presence without burnout",
      directionAr: "لقطة دافئة لترتيب مساحة العمل مع نغمة هادئة مريحة.",
      directionEn: "Warm shot organizing workspace with a relaxing, comfortable background track.",
      scriptAr: "الاستمرارية مش معناها تنشر كل يوم على حساب صحتك ونوعية محتواك. السر بيكمن في تحضير وتصوير المحتوى على دفعات (Batching) وجدولتها مسبقاً، والاعتماد على قوالب جاهزة.",
      scriptEn: "Consistency doesn't mean publishing daily at the expense of quality. The secret is batch-producing and scheduling content in advance, using optimized templates.",
      captionAr: "نصائح عملية لتنظيم وقتك وصناعة المحتوى باحترافية وتجنب الضغط والاحتراق المهني.",
      captionEn: "Practical tips to organize your creative workflow, produce premium content, and avoid burnout.",
      storyAr: "كام مرة بتنشر محتوى في الأسبوع حالياً؟",
      storyEn: "How many times a week do you currently publish content?"
    },
    {
      hookAr: "الفرق بين زيادة المتابعين وزيادة الأرباح الحقيقية",
      hookEn: "The difference between follower growth and real business revenue",
      directionAr: "تصوير مباشر (Talking Head) بنبرة عملية وواثقة ومقنعة.",
      directionEn: "Direct video (Talking Head) with a practical, confident, and persuasive tone.",
      scriptAr: "المتابعين هم مجرد رقم للغرور (Vanity Metric) لو مفيش خطة واضحة لتحويلهم لعملاء دافعين. التركيز لازم يكون على بناء الثقة، حل المشكلات الفردية، وتسهيل عملية الشراء والطلب.",
      scriptEn: "Followers are just a vanity metric if there is no clear customer conversion funnel. Your focus should be on building trust, solving problems, and easing purchases.",
      captionAr: "الاستراتيجية الصحيحة لبناء قمع تحويل العملاء من السوشيال ميديا وتحقيق عوائد مالية مستدامة.",
      captionEn: "The correct strategy to build client conversion funnels from social media and achieve sustainable revenue.",
      storyAr: "هل تركز حالياً على زيادة عدد المتابعين أم تحسين جودة العملاء؟",
      storyEn: "Are you focusing on follower growth or improving lead quality right now?"
    },
    {
      hookAr: "5 أنواع محتوى تضمن لك أعلى تفاعل وحفظ (Saves) من جمهورك",
      hookEn: "5 content types that guarantee the highest saves and engagement",
      directionAr: "إنفوجرافيك متحرك يعرض الأنماط الخمسة بالتفصيل.",
      directionEn: "Motion graphics showcasing the five high-performing content styles.",
      scriptAr: "النوع الأول: أدلة عملية خطوة بخطوة. النوع الثاني: مقارنات مفصلة. النوع الثالث: قصص نجاح وتحديات واقعية. النوع الرابع: قوالب وموارد مجانية. النوع الخامس: نصائح سريعة للمشاكل الشائعة.",
      scriptEn: "Type 1: Step-by-step guides. Type 2: Detailed comparisons. Type 3: Success stories & struggles. Type 4: Free resources & templates. Type 5: Quick answers to common problems.",
      captionAr: "تحليل لأنواع المحتوى الأكثر حفظاً ومشاركة ودورها في تعزيز حضورك وانتشارك العضوي.",
      captionEn: "An analysis of highly saved and shared content styles and their role in organic amplification.",
      storyAr: "ما هو نوع المحتوى الذي تقوم بحفظه غالباً لتصفحه لاحقاً؟",
      storyEn: "What type of content do you usually save for later reference?"
    },
    {
      hookAr: "كيف تجعل براندك الشخصي علامة لا تنسى في مجال عملك؟",
      hookEn: "How to make your personal brand unforgettable in your industry?",
      directionAr: "عرض بورتريه احترافي مع إضاءة سينمائية متميزة ونصوص منسقة.",
      directionEn: "Professional portrait display with cinematic lighting and formatted typography overlay.",
      scriptAr: "التميز بييجي من اتساق هويتك البصرية، صدق نبرة صوتك، وتكرار تقديم قيمتك الفريدة. لما الناس تفتكر اسمك في مجالك لمجرد ذكر المشكلة، هنا بتكون صنعت البراند الشخصي الصح.",
      scriptEn: "Authority comes from visual consistency, authenticity of voice, and repeatedly delivering unique value. When your name is top-of-mind, you succeed.",
      captionAr: "الخطوات الجوهرية لصياغة وتأصيل هوية براندك الشخصي وترسيخ ريادتك في السوق.",
      captionEn: "The essential steps to draft and anchor your personal brand identity and solidify your market authority.",
      storyAr: "اكتب 'براند' لتلقي الدليل المجاني لتأسيس العلامة الشخصية.",
      storyEn: "Type 'Brand' to receive our premium personal branding blueprint for free."
    }
  ];
}

const calendarProfiles: Record<string, {
  portraitUrl: string;
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  bioAr: string;
  bioEn: string;
  verifiedAr?: string;
  verifiedEn?: string;
  descBriefAr?: string;
  descBriefEn?: string;
  stat1Value: string;
  stat1LabelAr: string;
  stat1LabelEn: string;
  stat2Value: string;
  stat2LabelAr: string;
  stat2LabelEn: string;
  stat3Value: string;
  stat3LabelAr: string;
  stat3LabelEn: string;
  stat4Value: string;
  stat4LabelAr: string;
  stat4LabelEn: string;
  summaryTitleAr: string;
  summaryTitleEn: string;
  summaryDescAr: string;
  summaryDescEn: string;
  tagsAr: string[];
  tagsEn: string[];
}> = {
  'pdf-amira': {
    portraitUrl: '',
    nameAr: 'أميرة بكر',
    nameEn: 'Amira Bakr',
    titleAr: 'محتوى نفسي وتربوي للأمهات',
    titleEn: 'Psychology & Child Parenting',
    bioAr: 'متخصصة في مرافقة الأمهات والآباء نحو بناء جيل متزن نفسياً وعاطفياً، بأدلة علمية ونماذج عملية مرنة وتفاعلية.',
    bioEn: 'Specialized in guiding parents towards raising emotionally stable and balanced children using practical, science-backed behavioral framework calendars.',
    verifiedAr: 'حساب تربوي ونفسي معتمد',
    verifiedEn: 'Verified Parenting Strategist',
    descBriefAr: 'مستشارة وباحثة في علم النفس السلوكي وصحة الطفل',
    descBriefEn: 'Behavioral Psychology Researcher & Consultant',
    stat1Value: '45k+',
    stat1LabelAr: 'حجم المجتمع التربوي',
    stat1LabelEn: 'Parent Community',
    stat2Value: '+180%',
    stat2LabelAr: 'النمو أورجانيك بدون تمويل',
    stat2LabelEn: 'Organic Growth',
    stat3Value: '100%',
    stat3LabelAr: 'حجز المقاعد بالورش',
    stat3LabelEn: 'Workshop Bookings',
    stat4Value: '2.4x',
    stat4LabelAr: 'مضاعف التفاعل اليومي',
    stat4LabelEn: 'Daily Engagement',
    summaryTitleAr: 'العلم النفسي والاحتواء العاطفي في كادر واحد.',
    summaryTitleEn: 'Bridging psychological values with comforting parenting.',
    summaryDescAr: 'نعمل مع الأمهات اللواتي يواجهن صعوبة في ضبط الغضب والآباء الباحثين عن لغة حوار آمنة مع المراهقين. نبرتنا هادئة وعلمية وخالية تماماً من الكلمات الأكاديمية المعقدة، ونسعى لصياغة حلول قابلة للتطبيق فوراً.',
    summaryDescEn: 'Focus on families looking to build secure dialog channels. We simplify developmental methodologies into digestible, beautiful infographics and deep video scripts targeting core parental pain points.',
    tagsAr: ['💡 الاستراتيجية النفسية', '💬 بناء مجتمع الأمهات', '🌍 التربية الحسية', '📊 التسويق التربوي'],
    tagsEn: ['💡 Psycho-strategy', '💬 Parent Community', '🌍 Sensory Frameworks', '📊 Educational Sales']
  },
  'pdf-aria': {
    portraitUrl: '',
    nameAr: 'أريا للوساطة العقارية',
    nameEn: 'ARIA Broker',
    titleAr: 'عقارات الساحل الفاخرة',
    titleEn: 'Luxury Real Estate',
    bioAr: 'تأمين مبيعات عالية القيمة لشاليهات فاخرة بمراسي والساحل الشمالي، وتحويل استفسارات التعليقات العشوائية لصفقات مبيعات مغلقة بالواتساب.',
    bioEn: 'Securing multi-million dollar bookings and transactions in Marassi and North Coast with high-conversion conversational CRM funnels.',
    verifiedAr: 'علامة عقارية فاخرة معتمدة',
    verifiedEn: 'Verified Luxury Brokerage',
    descBriefAr: 'أسطول شاليهات أزور ومراسي الفاخر بالكامل',
    descBriefEn: 'Azour Fleet & Marassi Luxury Chalets',
    stat1Value: '11',
    stat1LabelAr: 'شاليهات مخصصة بـ مراسي',
    stat1LabelEn: 'Exclusive Marassi Chalets',
    stat2Value: '98%',
    stat2LabelAr: 'معدل إشغال الصيف',
    stat2LabelEn: 'Summer Occupancy Rate',
    stat3Value: '<2 Mins',
    stat3LabelAr: 'متوسط سرعة استجابة مبيعاتنا',
    stat3LabelEn: 'Average Response Time',
    stat4Value: '+35%',
    stat4LabelAr: 'زيادة تحويل العملاء المهتمين',
    stat4LabelEn: 'Direct Sales Conversion',
    summaryTitleAr: 'أقصى درجات الرفاهية والاستثمار بذكاء.',
    summaryTitleEn: 'Maximum coastal luxury with high-efficiency automation.',
    summaryDescAr: 'تصميم وإدارة محتوى لقطاعات العقارات والسياحة الفاخرة للساحل الشمالي. نستهدف بدقة النخبة والباحثين عن خدمات فندقية راقية ومستثمرين يتطلعون لعائد مميز دون تعقيد تشغيلي.',
    summaryDescEn: 'Fusing highly aesthetic property tours with frictionless DM automation templates. Designed custom booking keys and influencer campaigns to ensure high-ticket occupancy throughout the summer peak.',
    tagsAr: ['💡 البيع الاجتماعي', '💬 جذب العملاء العقاريين', '🌍 الساحل الفاخر', '📊 أوتوميشن المبيعات'],
    tagsEn: ['💡 Social Selling', '💬 Property Lead Gen', '🌍 Luxury Coastal', '📊 Sales Automation']
  },
  'pdf-aria-r2': {
    portraitUrl: '',
    nameAr: 'ARIA للتشغيل الفندقي',
    nameEn: 'ARIA Rentals',
    titleAr: 'عقارات واستثمارات الساحل',
    titleEn: 'Luxury Coastal Investment',
    bioAr: 'حملة محتوى موسعة تركز على توسعة زوايا العرض وحسم مخاوف المستثمر الخليجي الباحث عن عوائد مميزة بالعملة الصعبة دون وجع دماغ التشغيل والخدمات الفندقية.',
    bioEn: 'An expanded campaign overcoming premium buyer objections and highlighting steady rental yields for high-net-worth GCC investors.',
    verifiedAr: 'شريك إدارة عقارية معتمد',
    verifiedEn: 'Verified Facility Partner',
    descBriefAr: 'استشارات الاستثمار والتشغيل الفندقي الفاخر',
    descBriefEn: 'Premium Property Investment & Yields',
    stat1Value: '11',
    stat1LabelAr: 'عقارات الساحل الفاخرة',
    stat1LabelEn: 'Premium Coastal Units',
    stat2Value: '98%',
    stat2LabelAr: 'معدل إشغال الصيف المدار',
    stat2LabelEn: 'Summer Occupancy Rate',
    stat3Value: '<2 Mins',
    stat3LabelAr: 'سرعة استجابة المبيعات',
    stat3LabelEn: 'Average Response Time',
    stat4Value: '+35%',
    stat4LabelAr: 'زيادة تحويل المبيعات',
    stat4LabelEn: 'Direct Sales Conversion',
    summaryTitleAr: 'استثمار عقاري فاخر بعوائد تشغيلية مضمونة.',
    summaryTitleEn: 'Premium property yields with automated concierge desks.',
    summaryDescAr: 'نركز على استقطاب المستثمرين للنقاط الإيجابية لحسم المخاوف التشغيلية من خلال معاينة ثلاثية الأبعاد تفاعلية، تواصل دائم ومباشر مع ممثلي الخدمة بالواتساب.',
    summaryDescEn: 'Overcoming buyer friction and building long-term confidence. We detail asset appreciation and zero-latency VIP support channels for international buyers.',
    tagsAr: ['💡 الاستثمار الفندقي', '💬 حلول حسم المخاوف', '🌍 الساحل الشمالي', '📊 جذب مستثمرين'],
    tagsEn: ['💡 Property Investment', '💬 Friction Demolition', '🌍 North Coast', '📊 Investor Funnels']
  },
  'pdf-wellness': {
    portraitUrl: '',
    nameAr: 'التمكين والوعي الاجتماعي',
    nameEn: 'Wellness & Empowerment Hub',
    titleAr: 'التمكين والعلاقات للمرأة',
    titleEn: 'Empowerment & Well-being',
    bioAr: 'صناعة خطابات تعبر عن التعافي الحقيقي للمرأة، الاستقلال العاطفي، وضع الحدود الصحية، وحسم مبيعات برامج الكوتشينج بدون ميزانيات إضافية.',
    bioEn: 'Crafting deeply resonant female empowerment narratives and managing high-trust DM closings for premium wellness programs.',
    verifiedAr: 'مستشارة تمكين ووعي نفسي معتمدة',
    verifiedEn: 'Verified Mindset Consultant',
    descBriefAr: 'تأسيس قنوات حجز برامج الكوتشينج الفردية والجروب',
    descBriefEn: 'Developing Premium Coaching & Mindset Funnels',
    stat1Value: '2.5k+',
    stat1LabelAr: 'استشارات الدايركت المفلترة',
    stat1LabelEn: 'DM Leads Handled',
    stat2Value: '92%',
    stat2LabelAr: 'معدل التوصية والتناقل',
    stat2LabelEn: 'Word of Mouth Rate',
    stat3Value: 'Booked Out',
    stat3LabelAr: 'حجز مقاعد الكوتشينج',
    stat3LabelEn: 'Private Coaching',
    stat4Value: '88%',
    stat4LabelAr: 'نسبة استمرار العميلات بالدورة',
    stat4LabelEn: 'Client Retention Rate',
    summaryTitleAr: 'إعادة بناء الاستحقاق وكسر التعلق العاطفي المرضي.',
    summaryTitleEn: 'Dismantling people-pleasing and building true self-worth.',
    summaryDescAr: 'إطلاق سلسلة "إنتي مش لوحدك" بهوية بصرية ولغوية داعمة. صياغة خطابات تعبر عن وضع الحدود الصارمة مع التغلب على فخ جلد الذات وتأهيل مئات النساء للاستقلال والوعي.',
    summaryDescEn: 'Breaking the silence around toxic traits and emotional neglect. We build comfortable community rooms and anonymous engagement questions to foster premium bonding.',
    tagsAr: ['💡 التمكين الذاتي', '💬 بناء الاستحقاق', '🌍 تحويل محادثات الدايركت', '📊 التعافي العاطفي'],
    tagsEn: ['💡 Self-Empowerment', '💬 Self-Worth', '🌍 DM Sales Close', '📊 Emotional Recovery']
  },
  'pdf-child': {
    portraitUrl: '',
    nameAr: 'مدرسة نبطة للطفل',
    nameEn: 'Nabta Child Development',
    titleAr: 'صحة وسلوك الطفل',
    titleEn: 'Child Development & Behavior',
    bioAr: 'تحويل دراسات صعوبات التعلم والتربية الإيجابية وعلم النفس السلوكي عند الأطفال إلى كاروسيلات ملونة وبسيطة تفاعلية للأمهات.',
    bioEn: 'Translating complex child behavioral research and sensory regulation guidelines into beautiful, practical visual toolkits for mothers.',
    verifiedAr: 'شريك تربوي وتعديل سلوك معتمد',
    verifiedEn: 'Verified Parenting Partner',
    descBriefAr: 'تنمية مهارات الأطفال وتوجيه سلوك المراهقين',
    descBriefEn: 'Guiding positive discipline and teen developmental behaviors',
    stat1Value: '30k+',
    stat1LabelAr: 'حجم المجتمع التربوي للبراند',
    stat1LabelEn: 'Active Parent Base',
    stat2Value: '+120%',
    stat2LabelAr: 'معدل تفاعل الحساب العضوي',
    stat2LabelEn: 'Organic Engagement Rate',
    stat3Value: '150+',
    stat3LabelAr: 'أدوات وجداول سلوك مطبوعة',
    stat3LabelEn: 'Schedules & Worksheets',
    stat4Value: '3x',
    stat4LabelAr: 'مضاعف مشاركة وتناقل الريلز',
    stat4LabelEn: 'Reels Share Multiplier',
    summaryTitleAr: 'أدوات تربوية سليمة وعلاقات أسرية متينة.',
    summaryTitleEn: 'Practical behavioral toolkits for secure family bonds.',
    summaryDescAr: 'تطوير كاروسيلات تعليمية مدروسة تشرح نوبات الغضب والارتباط الحسي والبدائل التربوية الصحيحة، وتأسيس دوائر دعم الأمهات والوالدين.',
    summaryDescEn: 'Designing educational visual slides detailing sensory limits and emotional regulation. We help families reduce household tension and replace it with cooperative play.',
    tagsAr: ['💡 تعديل السلوك', '💬 التربية الإيجابية', '🌍 الارتباط الحسي', '📊 التسويق التربوي'],
    tagsEn: ['💡 Behavior Reform', '💬 Positive Discipline', '🌍 Sensory Play', '📊 Educational Sales']
  },
  'pdf-rasha': {
    portraitUrl: '',
    nameAr: 'عيادات د. رشا التجميلية',
    nameEn: 'Dr. Rasha Aesthetics',
    titleAr: 'التجميل الطبي وطب الأسنان الفاخر',
    titleEn: 'Medical & Dental Aesthetics',
    bioAr: 'إبراز دقة الجودة الطبية والخدمات التجميلية بـ Hooks مريحة تتبنى تبديد مخاوف العمليات ولقطات عيادة سينمائية مذهلة تبني الثقة المطلقة.',
    bioEn: 'Showcasing medical precision and top-tier facial rejuvenation procedures with high-end aesthetic video reels and trust-building patient guides.',
    verifiedAr: 'عيادات تجميل طبية معتمدة',
    verifiedEn: 'Verified Clinical Aesthetics',
    descBriefAr: 'ابتسامة المشاهير والتجميل غير الجراحي الفاخر',
    descBriefEn: 'Premium Celebrity Smiles & Rejuvenation',
    stat1Value: '1.2k+',
    stat1LabelAr: 'حالات تجميل أسنان ناجحة',
    stat1LabelEn: 'Successful Smile Makeovers',
    stat2Value: '99%',
    stat2LabelAr: 'نسبة الرضا والراحة الطبية',
    stat2LabelEn: 'Patient Satisfaction Rate',
    stat3Value: '+40%',
    stat3LabelAr: 'زيادة في حجوزات الكونسيرج',
    stat3LabelEn: 'Increase in Premium Bookings',
    stat4Value: '<3 Mins',
    stat4LabelAr: 'سرعة الرد وحسم استفسارات العيادة',
    stat4LabelEn: 'Clinic Response Time',
    summaryTitleAr: 'تكامل الدقة الطبية واللمسة الجمالية الفاخرة.',
    summaryTitleEn: 'Advanced medical precision paired with pristine smile designs.',
    summaryDescAr: 'نصمم استراتيجية محتوى متخصصة تجمع بين الجاذبية البصرية الراسخة وإبراز احترافية الإجراءات الطبية لتبسيط التقنيات الحديثة وكسب ولاء المراجعات.',
    summaryDescEn: 'Developing premium clinical campaigns highlighting patient comfort and absolute dental craftsmanship to differentiate the practice and maximize high-ticket treatment sales.',
    tagsAr: ['💡 تجميل الأسنان الفاخر', '💬 لقطات عيادة سينمائية', '🌍 تبديد مخاوف المرضى', '📊 أوتوميشن مبيعات'],
    tagsEn: ['💡 Premium Dentistry', '💬 Cinematic Clinic Reels', '🌍 Patient Comfort', '📊 Medical Lead Gen']
  }
};

const serializeBio = (bio: any) => {
  try {
    const jsonStr = JSON.stringify(bio);
    const utf8Str = encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode(parseInt(p1, 16));
    });
    return btoa(utf8Str);
  } catch (e) {
    console.error("Failed to serialize bio", e);
    return "";
  }
};

const deserializeBio = (encoded: string) => {
  try {
    const binaryStr = atob(encoded);
    const utf8Str = Array.from(binaryStr).map((ch) => {
      return '%' + ('00' + ch.charCodeAt(0).toString(16)).slice(-2);
    }).join('');
    const jsonStr = decodeURIComponent(utf8Str);
    return JSON.parse(jsonStr);
  } catch (e) {
    console.error("Failed to deserialize bio", e);
    return null;
  }
};

export default function App() {
  const [isArabic, setIsArabic] = useState<boolean>(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Dynamic Content States controlled by Admin Dashboard
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(() => {
    const saved = localStorage.getItem('aya_case_studies');
    return saved ? JSON.parse(saved) : CASE_STUDIES;
  });

  const [pdfCaseStudies, setPdfCaseStudies] = useState<PdfCaseStudy[]>(() => {
    const saved = localStorage.getItem('aya_pdf_case_studies');
    if (saved) {
      try {
        const parsed: PdfCaseStudy[] = JSON.parse(saved);
        return parsed.map(p => {
          const original = PDF_CASE_STUDIES.find(orig => orig.id === p.id);
          if (original) {
            const isOldPlaceholder = p.externalUrl && p.externalUrl.includes('1zoS5L6q7ggsKYba2nCksC79sleWhjx2r8M53jTJIDYI');
            return {
              ...p,
              titleAr: original.titleAr,
              titleEn: original.titleEn,
              categoryAr: original.categoryAr,
              categoryEn: original.categoryEn,
              descAr: original.descAr,
              descEn: original.descEn,
              externalUrl: (!p.externalUrl || isOldPlaceholder) ? original.externalUrl : p.externalUrl
            };
          }
          return p;
        });
      } catch (e) {
        return PDF_CASE_STUDIES;
      }
    }
    return PDF_CASE_STUDIES;
  });

  const [amiraSheetRows, setAmiraSheetRows] = useState<any[]>(() => {
    const saved = localStorage.getItem('aya_amira_sheet_rows');
    return saved ? JSON.parse(saved) : AMIRA_SHEET_ROWS;
  });

  const [realWorkSection, setRealWorkSection] = useState(() => {
    const saved = localStorage.getItem('aya_real_work_section');
    if (saved) return JSON.parse(saved);
    return {
      subtitleAr: "Work Samples · ملفات حقيقية",
      subtitleEn: "Work Samples · Real Documents",
      titleAr: "عينات من شغلي الفعلي.",
      titleEn: "Samples of My Actual Work.",
      descAr: "خطط محتوى وحملات حقيقية اشتغلت عليها – حملها وشوفها بنفسك.",
      descEn: "Real content plans and campaigns I have crafted – open and explore them yourself.",
      storageAr: "وحدات التخزين: ١٥ ملف نشط",
      storageEn: "Storage: 15 active sheets"
    };
  });

  const DEFAULT_ADMIN_BIO = {
    nameAr: "آية خالد",
    nameEn: "Aya Khaled",
    titleAr: "أخصائية استراتيجية المحتوى والبيع الاجتماعي",
    titleEn: "Content Strategist & Social Selling Specialist",
    bioAr: "آية خالد – أخصائية استراتيجية رائدة في تدشين وصياغة اسكريبتات الفيديو عالية التفاعل (Reels/TikToks)، وتوليد كابشنات البيع الاجتماعي الحسمة. أدمج صناعة محتوى مؤثر مع استراتيجيات البيع الشمولي والـ DM Automation للوصول لعملاء مخلصين وعلاقة ثقة ممتدة. متخصصة في قطاعات العقارات الفاخرة، والتربية وصحة الطفل، والتمكين في مصر ومختلف دول الخليج.",
    bioEn: "Aya Khaled – A results-driven Social Media Specialist & Content Strategist blending deep psychology-led copywriting with high-ticket social selling. Fusing creative influence with direct \"DM-to-WhatsApp\" sales automation, meticulously driving organic visibility and closing leads for premium GCC development, health, and leadership brands.",
    locationAr: "مصر | للأسواق العربية والخليج",
    locationEn: "Egypt | Remote for GCC & Global",
    verifiedAr: "أخصائي معتمد وموثوق",
    verifiedEn: "Verified Strategist",
    descBriefAr: "إدارة وتوليد حوارات الإقناع للمشاريع الفاخرة",
    descBriefEn: "Meticulous social scripts that close sales.",
    // Contact Info & Photo Editable Fields
    portraitUrl: "",
    email: "aya2017.khalid@gmail.com",
    whatsapp: "+20 11 27867391",
    whatsappLink: "https://wa.me/201127867391",
    linkedin: "https://www.linkedin.com",
    linkedinLabelAr: "آية خالد على لينكد إن",
    linkedinLabelEn: "Aya Khaled on LinkedIn",
    locationDetailAr: "الجيزة / القاهرة، مصر",
    locationDetailEn: "Giza / Cairo, Egypt",
    // Core stats
    stat1Value: "11",
    stat1LabelAr: "فرصة عمل ريادية",
    stat1LabelEn: "Entrepreneurial Opportunities",
    stat2Value: "3+",
    stat2LabelAr: "سنوات خبرة متخصصة",
    stat2LabelEn: "Years of Experience",
    stat3Value: "AR / EN",
    stat3LabelAr: "ثنائية اللغة وثقافة الخليج",
    stat3LabelEn: "Bilingual Strategy",
    stat4Value: "GCC + EG",
    stat4LabelAr: "أسواق مستهدفة بالكامل",
    stat4LabelEn: "Target Markets"
  };

  const [adminBio, setAdminBio] = useState(() => {
    // 1. Check URL query parameters first
    const params = new URLSearchParams(window.location.search);
    const encodedBio = params.get('p') || params.get('bio');
    if (encodedBio) {
      try {
        const parsed = deserializeBio(encodedBio);
        if (parsed) {
          // Store it in localStorage so the profile is updated for this session/visitor
          localStorage.setItem('aya_admin_bio', JSON.stringify(parsed));
          return { ...DEFAULT_ADMIN_BIO, ...parsed };
        }
      } catch (e) {
        console.error("Failed to parse bio from URL query parameter", e);
      }
    }

    // 2. Fallback to localStorage
    const saved = localStorage.getItem('aya_admin_bio');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Automatically migrate old developer email/phone if they are present
        if (parsed.email === "peterosama2132000@gmail.com") {
          parsed.email = "aya2017.khalid@gmail.com";
        }
        if (parsed.whatsapp === "+20 101 683 9791") {
          parsed.whatsapp = "+20 11 27867391";
        }
        if (parsed.whatsappLink === "https://wa.me/201016839791") {
          parsed.whatsappLink = "https://wa.me/201127867391";
        }
        return { ...DEFAULT_ADMIN_BIO, ...parsed };
      } catch (e) {
        return DEFAULT_ADMIN_BIO;
      }
    }
    return DEFAULT_ADMIN_BIO;
  });

  const [inquiries, setInquiries] = useState<any[]>(() => {
    const saved = localStorage.getItem('aya_inquiries');
    if (saved) return JSON.parse(saved);
    return [
      {
        id: 'inq-1',
        brand: 'إعمار العقارية - Emaar',
        niche: 'realstate',
        goal: 'reels',
        date: '2026-06-23',
        status: 'Contacted',
        notes: 'Contacted via WhatsApp, scheduling a brief onboarding call for Reels planning.'
      },
      {
        id: 'inq-2',
        brand: 'مدرسة نبطة - Nabta',
        niche: 'parenting',
        goal: 'selling',
        date: '2026-06-24',
        status: 'New',
        notes: 'Waiting for intake form response.'
      }
    ];
  });

  // Admin Modal state
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [adminTab, setAdminTab] = useState<'profile' | 'cases' | 'calendars' | 'inquiries'>('profile');

  // Editing selections
  const [selectedAdminCaseId, setSelectedAdminCaseId] = useState<string>('');
  const [selectedAdminPdfId, setSelectedAdminPdfId] = useState<string>('');
  const [selectedAdminPageNum, setSelectedAdminPageNum] = useState<number>(1);

  // Synchronization with local storage & server persistence
  const [hasLoadedFromServer, setHasLoadedFromServer] = useState<boolean>(false);

  // Load from server on mount to ensure all users see the same updated content/uploaded picture
  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        const res = await fetch('/api/portfolio-data');
        if (res.ok) {
          const data = await res.json();
          if (data && Object.keys(data).length > 0) {
            if (data.caseStudies) setCaseStudies(data.caseStudies);
            if (data.pdfCaseStudies) setPdfCaseStudies(data.pdfCaseStudies);
            if (data.amiraSheetRows) setAmiraSheetRows(data.amiraSheetRows);
            if (data.adminBio) setAdminBio(data.adminBio);
            if (data.realWorkSection) setRealWorkSection(data.realWorkSection);
            if (data.inquiries) setInquiries(data.inquiries);
          }
        }
      } catch (err) {
        console.error("Failed to load portfolio data from server", err);
      } finally {
        setHasLoadedFromServer(true);
      }
    };
    loadPortfolioData();
  }, []);

  // Synchronization with local storage
  useEffect(() => {
    localStorage.setItem('aya_case_studies', JSON.stringify(caseStudies));
  }, [caseStudies]);

  useEffect(() => {
    localStorage.setItem('aya_pdf_case_studies', JSON.stringify(pdfCaseStudies));
  }, [pdfCaseStudies]);

  useEffect(() => {
    localStorage.setItem('aya_amira_sheet_rows', JSON.stringify(amiraSheetRows));
  }, [amiraSheetRows]);

  useEffect(() => {
    localStorage.setItem('aya_admin_bio', JSON.stringify(adminBio));
  }, [adminBio]);

  useEffect(() => {
    localStorage.setItem('aya_real_work_section', JSON.stringify(realWorkSection));
  }, [realWorkSection]);

  useEffect(() => {
    localStorage.setItem('aya_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  // Helper to save specific keys explicitly to server (only when admin triggers it)
  const savePortfolioDataToServer = async (partialData: any) => {
    try {
      await fetch('/api/portfolio-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(partialData),
      });
    } catch (err) {
      console.error("Failed to save portfolio data to server", err);
    }
  };

  // Selected edit item states for form binding
  const [editBioForm, setEditBioForm] = useState<any>(null);
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleImageUpload = async (file: File) => {
    setIsUploadingImage(true);
    setUploadError(null);
    try {
      const formData = new FormData();
      formData.append('image', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error(isArabic ? 'فشل رفع الصورة على الخادم السحابي' : 'Failed to upload image to cloud storage');
      }

      const data = await res.json();
      if (data.url) {
        setEditBioForm((prev: any) => ({ ...prev, portraitUrl: data.url }));
      } else {
        throw new Error('No URL in response');
      }
    } catch (err: any) {
      console.error(err);
      setUploadError(err.message || 'Upload error');
    } finally {
      setIsUploadingImage(false);
    }
  };

  const [editCaseForm, setEditCaseForm] = useState<any>(null);
  const [editPdfForm, setEditPdfForm] = useState<any>(null);

  useEffect(() => {
    if (isAdminOpen) {
      setEditBioForm(adminBio);
      
      if (caseStudies.length > 0 && !selectedAdminCaseId) {
        setSelectedAdminCaseId(caseStudies[0].id);
        setEditCaseForm(caseStudies[0]);
      }
      if (pdfCaseStudies.length > 0 && !selectedAdminPdfId) {
        setSelectedAdminPdfId(pdfCaseStudies[0].id);
        setEditPdfForm(pdfCaseStudies[0]);
        setSelectedAdminPageNum(1);
      }
    }
  }, [isAdminOpen]);

  useEffect(() => {
    const cs = caseStudies.find(c => c.id === selectedAdminCaseId);
    if (cs) {
      setEditCaseForm(cs);
    }
  }, [selectedAdminCaseId, caseStudies]);

  useEffect(() => {
    const pdf = pdfCaseStudies.find(p => p.id === selectedAdminPdfId);
    if (pdf) {
      setEditPdfForm(pdf);
    }
  }, [selectedAdminPdfId, pdfCaseStudies]);

  const handleAddNewCase = () => {
    const newId = `case-${Date.now()}`;
    const newCase: CaseStudy = {
      id: newId,
      category: 'realstate',
      titleAr: 'مشروع حملة جديد',
      titleEn: 'New Content Campaign Case',
      clientAr: 'البراند الراقي',
      clientEn: 'Elite Brand Co.',
      challengeAr: 'تصميم وبناء ركائز محتوى متفردة تجذب الفئة المخملية المستهدفة.',
      challengeEn: 'Structuring high-ticket design values that attract wealthy clientele.',
      strategyAr: 'تطبيق قمع المحتوى الفيروسي وكتابة سيناريوهات حاسمة في الدايركت مسج.',
      strategyEn: 'Applying emotional hooks with systematic DM automated templates.',
      impactAr: 'زيادة المبيعات بنسبة ٢٠٠٪ وحسم صفقات هامة سريعة.',
      impactEn: '200% direct conversions, closing major organic bookings.',
      tagsAr: ['استراتيجية المحتوى', 'ريلز مبيعات'],
      tagsEn: ['Content Strategy', 'Sales Reels'],
      accentColor: '#8E4F39',
      metrics: [
        { labelAr: 'تفاعل حقيقي', labelEn: 'Engagement Rate', value: '+140%' },
        { labelAr: 'عملاء محتملين', labelEn: 'Inquiries Handled', value: '75+' },
        { labelAr: 'معدل الحسم', labelEn: 'Direct Close Rate', value: '4.2x' }
      ]
    };
    const updated = [...caseStudies, newCase];
    setCaseStudies(updated);
    savePortfolioDataToServer({ caseStudies: updated });
    setSelectedAdminCaseId(newId);
  };

  const handleSaveCaseStudy = () => {
    if (!editCaseForm) return;
    const updated = caseStudies.map(c => c.id === editCaseForm.id ? editCaseForm : c);
    setCaseStudies(updated);
    savePortfolioDataToServer({ caseStudies: updated });
    alert(isArabic ? 'تم حفظ حالة الدراسة بنجاح!' : 'Case Study saved successfully!');
  };

  const handleDeleteCaseStudy = (id: string) => {
    if (caseStudies.length <= 1) {
      alert(isArabic ? 'لا يمكن حذف آخر حالة دراسة متبقية!' : 'Cannot delete the last remaining case study!');
      return;
    }
    if (confirm(isArabic ? 'هل تريد حذف حالة الدراسة هذه؟' : 'Are you sure you want to delete this case study?')) {
      const remaining = caseStudies.filter(c => c.id !== id);
      setCaseStudies(remaining);
      savePortfolioDataToServer({ caseStudies: remaining });
      setSelectedAdminCaseId(remaining[0].id);
    }
  };

  const handleAddNewPdfFile = () => {
    const newId = `pdf-${Date.now()}`;
    const newPdf: PdfCaseStudy = {
      id: newId,
      categoryAr: 'سوشيال سيلينج',
      categoryEn: 'Social Selling',
      badgeBgLight: 'bg-[#FAF0EC] text-[#8E4F39]',
      badgeBgDark: 'bg-[#3A1F15] text-[#F3C2B2]',
      iconBgColor: 'bg-[#72321D]',
      titleAr: 'مخطط محتوى تسويقي جديد',
      titleEn: 'New Marketing Content Plan',
      descAr: 'جدولة سيناريوهات ولقطات لحملات انتشار مدروسة للعملاء.',
      descEn: 'Full schedule of video scripts and storytelling angles.',
      totalPages: 1,
      pages: [
        {
          pageNum: 1,
          titleAr: 'المخطط العام',
          titleEn: 'Main Campaign Plan',
          sections: [
            {
              titleAr: 'الهوك الجاذب الأول للجمهور',
              titleEn: 'Audience Entry Hook',
              contentAr: 'هذا السطر مصمم خصيصاً لجذب الفئة المستهدفة.\nقم بالضغط لتعديل هذا الكابشن وكتابة المحتوى الذي تفضله.',
              contentEn: 'This hook is custom structured to capture interest.\nClick edit to customize this script and caption.'
            }
          ]
        }
      ]
    };
    const updated = [...pdfCaseStudies, newPdf];
    setPdfCaseStudies(updated);
    savePortfolioDataToServer({ pdfCaseStudies: updated });
    setSelectedAdminPdfId(newId);
    setSelectedAdminPageNum(1);
  };

  const handleSavePdfFileMetadata = () => {
    if (!editPdfForm) return;
    const updated = pdfCaseStudies.map(p => p.id === editPdfForm.id ? editPdfForm : p);
    setPdfCaseStudies(updated);
    savePortfolioDataToServer({ pdfCaseStudies: updated });
    alert(isArabic ? 'تم حفظ معلومات الكلاندر الأساسية بنجاح!' : 'Calendar metadata saved successfully!');
  };

  const handleDeletePdfFile = (id: string) => {
    if (pdfCaseStudies.length <= 1) {
      alert(isArabic ? 'لا يمكن حذف آخر مخطط محتوى متبقي!' : 'Cannot delete the last remaining content calendar!');
      return;
    }
    if (confirm(isArabic ? 'هل تريد حذف مخطط المحتوى هذا بالكامل؟' : 'Are you sure you want to delete this content calendar?')) {
      const remaining = pdfCaseStudies.filter(p => p.id !== id);
      setPdfCaseStudies(remaining);
      savePortfolioDataToServer({ pdfCaseStudies: remaining });
      setSelectedAdminPdfId(remaining[0].id);
    }
  };

  const handleSaveSpreadsheetRows = (rowsData: any[]) => {
    if (selectedAdminPdfId === 'pdf-amira' && selectedAdminPageNum === 1) {
      setAmiraSheetRows(rowsData);
      savePortfolioDataToServer({ amiraSheetRows: rowsData });
    } else {
      const sections = rowsData.map(r => ({
        titleAr: r.hookAr || r.titleAr || '',
        titleEn: r.hookEn || r.titleEn || '',
        contentAr: `${r.scriptAr}\n${r.captionAr}`,
        contentEn: `${r.scriptEn}\n${r.captionEn}`,
        hookAr: r.hookAr,
        hookEn: r.hookEn,
        directionAr: r.directionAr,
        directionEn: r.directionEn,
        scriptAr: r.scriptAr,
        scriptEn: r.scriptEn,
        captionAr: r.captionAr,
        captionEn: r.captionEn,
        storyAr: r.storyAr,
        storyEn: r.storyEn
      }));
      
      const updated = pdfCaseStudies.map(pdf => {
        if (pdf.id === selectedAdminPdfId) {
          const pages = pdf.pages.map(p => {
            if (p.pageNum === selectedAdminPageNum) {
              return { ...p, sections };
            }
            return p;
          });
          return { ...pdf, pages };
        }
        return pdf;
      });
      setPdfCaseStudies(updated);
      savePortfolioDataToServer({ pdfCaseStudies: updated });
    }
    alert(isArabic ? 'تم حفظ خلايا جدول الكلاندر بنجاح!' : 'Spreadsheet rows saved successfully!');
  };

  const handleAddManualInquiry = async () => {
    const manualBrand = prompt(isArabic ? 'أدخل اسم البراند/المشروع الجديد:' : 'Enter new Brand/Project name:');
    if (!manualBrand) return;
    const newInq = {
      id: `inq-${Date.now()}`,
      brand: manualBrand,
      niche: 'realstate',
      goal: 'reels',
      date: new Date().toISOString().split('T')[0],
      status: 'New',
      notes: isArabic ? 'تمت إضافتها يدوياً من لوحة التحكم' : 'Added manually via admin panel'
    };
    setInquiries(prev => [newInq, ...prev]);

    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newInq),
      });
    } catch (err) {
      console.error("Failed to save manual inquiry to server", err);
    }
  };

  const [activeCaseId, setActiveCaseId] = useState<string>('case-realestate');
  
  // Tool detail state for interactive tools list
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  // Custom Inquiry Form States
  const [clientBrand, setClientBrand] = useState<string>('');
  const [clientNiche, setClientNiche] = useState<string>('realstate');
  const [clientGoal, setClientGoal] = useState<string>('reels');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [copiedTemplate, setCopiedTemplate] = useState<boolean>(false);

  const handleSubmitInquiry = async () => {
    setIsFormSubmitted(true);
    if (!clientBrand.trim()) return;

    // Check for duplicates to avoid duplicate logs
    const exists = inquiries.some(inq => inq.brand.toLowerCase() === clientBrand.toLowerCase() && inq.niche === clientNiche && inq.goal === clientGoal);
    if (exists) return;

    const newInquiry = {
      id: `inq-${Date.now()}`,
      brand: clientBrand,
      niche: clientNiche,
      goal: clientGoal,
      date: new Date().toISOString().split('T')[0],
      status: 'New',
      notes: isArabic ? 'تم إرسالها من النموذج الرئيسي' : 'Submitted via main website form.'
    };

    setInquiries(prev => [newInquiry, ...prev]);

    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newInquiry),
      });
    } catch (err) {
      console.error("Failed to submit inquiry to server", err);
    }
  };

  // PDF Interactive Viewer State
  const [activePdfId, setActivePdfId] = useState<string | null>(null);
  const [pdfPageNumber, setPdfPageNumber] = useState<number>(1);
  const [cardPageNumbers, setCardPageNumbers] = useState<{ [pdfId: string]: number }>({});
  const [pdfZoom, setPdfZoom] = useState<number>(100);
  const [modalViewMode, setModalViewMode] = useState<'spreadsheet' | 'document'>('spreadsheet');
  const [driveSearchQuery, setDriveSearchQuery] = useState<string>('');
  const [driveCategoryFilter, setDriveCategoryFilter] = useState<string>('all');
  const [linkCopied, setLinkCopied] = useState<boolean>(false);

  // Handle URL updates when activePdfId changes
  const handleSelectPdf = (id: string | null) => {
    setActivePdfId(id);
    if (id) {
      setPdfPageNumber(1);
      setPdfZoom(100);
      setModalViewMode('spreadsheet');
      const params = new URLSearchParams(window.location.search);
      params.set('calendar', id);
      window.history.pushState(null, '', `${window.location.pathname}?${params.toString()}`);
    } else {
      const params = new URLSearchParams(window.location.search);
      params.delete('calendar');
      const newQuery = params.toString();
      window.history.pushState(null, '', `${window.location.pathname}${newQuery ? `?${newQuery}` : ''}`);
    }
  };

  const handleCopyShareLink = (pdfId: string) => {
    const params = new URLSearchParams();
    params.set('calendar', pdfId);
    
    // Check if there are edits to adminBio, and serialize them so they appear for the recipient
    const serialized = serializeBio(adminBio);
    if (serialized) {
      params.set('p', serialized);
    }
    
    const shareUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    });
  };

  // Query parameter synchronization for direct calendar sharing link
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const calParam = params.get('calendar');
    if (calParam) {
      const found = pdfCaseStudies.find(p => p.id === calParam);
      if (found) {
        setActivePdfId(calParam);
        setPdfPageNumber(1);
        setPdfZoom(100);
        setModalViewMode('spreadsheet');
        
        setTimeout(() => {
          const el = document.getElementById('real-work-samples');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    }
  }, [pdfCaseStudies]);

  // Set page title dynamically
  useEffect(() => {
    document.title = isArabic 
      ? "آية خالد | معرض الأعمال والريادة الرقمية" 
      : "Aya Khaled | Premium Content Strategist Portfolio";
  }, [isArabic]);

  const activeCase = caseStudies.find(c => c.id === activeCaseId) || caseStudies[0];

  // Get active profile details based on activePdfId (or fallback to adminBio)
  const getDisplayProfile = () => {
    if (activePdfId) {
      // Find matching custom calendar profile
      const customProfile = calendarProfiles[activePdfId];
      if (customProfile) {
        return {
          portraitUrl: adminBio.portraitUrl || portraitImg,
          nameAr: customProfile.nameAr,
          nameEn: customProfile.nameEn,
          titleAr: customProfile.titleAr,
          titleEn: customProfile.titleEn,
          bioAr: customProfile.bioAr,
          bioEn: customProfile.bioEn,
          verifiedAr: customProfile.verifiedAr || adminBio.verifiedAr,
          verifiedEn: customProfile.verifiedEn || adminBio.verifiedEn,
          descBriefAr: customProfile.descBriefAr || adminBio.descBriefAr,
          descBriefEn: customProfile.descBriefEn || adminBio.descBriefEn,
          stat1Value: customProfile.stat1Value,
          stat1LabelAr: customProfile.stat1LabelAr,
          stat1LabelEn: customProfile.stat1LabelEn,
          stat2Value: customProfile.stat2Value,
          stat2LabelAr: customProfile.stat2LabelAr,
          stat2LabelEn: customProfile.stat2LabelEn,
          stat3Value: customProfile.stat3Value,
          stat3LabelAr: customProfile.stat3LabelAr,
          stat3LabelEn: customProfile.stat3LabelEn,
          stat4Value: customProfile.stat4Value,
          stat4LabelAr: customProfile.stat4LabelAr,
          stat4LabelEn: customProfile.stat4LabelEn,
          summaryTitleAr: customProfile.summaryTitleAr,
          summaryTitleEn: customProfile.summaryTitleEn,
          summaryDescAr: customProfile.summaryDescAr,
          summaryDescEn: customProfile.summaryDescEn,
          tagsAr: customProfile.tagsAr,
          tagsEn: customProfile.tagsEn,
        };
      } else {
        const pdf = pdfCaseStudies.find(p => p.id === activePdfId);
        if (pdf) {
          return {
            portraitUrl: adminBio.portraitUrl || portraitImg,
            nameAr: pdf.titleAr.split('–')[0]?.trim() || pdf.titleAr,
            nameEn: pdf.titleEn.split('–')[0]?.trim() || pdf.titleEn,
            titleAr: pdf.categoryAr,
            titleEn: pdf.categoryEn,
            bioAr: pdf.descAr,
            bioEn: pdf.descEn,
            verifiedAr: isArabic ? "ملف خطة معتمد" : "Approved Plan File",
            verifiedEn: isArabic ? "Approved Plan File" : "Approved Plan File",
            descBriefAr: pdf.categoryAr,
            descBriefEn: pdf.categoryEn,
            stat1Value: "95%",
            stat1LabelAr: "نسبة الرضا والنجاح",
            stat1LabelEn: "Satisfaction Rate",
            stat2Value: "100%",
            stat2LabelAr: "أمان البيانات والالتزام",
            stat2LabelEn: "Reliability & Safety",
            stat3Value: "<24h",
            stat3LabelAr: "سرعة تسليم المخطط والتنفيذ",
            stat3LabelEn: "Delivery Speed",
            stat4Value: "2.5x",
            stat4LabelAr: "مضاعف التفاعل وزيادة الانتشار",
            stat4LabelEn: "Engagement Multiplier",
            summaryTitleAr: pdf.titleAr,
            summaryTitleEn: pdf.titleEn,
            summaryDescAr: pdf.descAr,
            summaryDescEn: pdf.descEn,
            tagsAr: [pdf.categoryAr, 'أتمتة المبيعات', 'خطط محتوى', 'البيع الاجتماعي'],
            tagsEn: [pdf.categoryEn, 'Sales Automation', 'Content Plan', 'Social Selling']
          };
        }
      }
    }
    // Fallback to normal adminBio
    return {
      portraitUrl: adminBio.portraitUrl || portraitImg,
      nameAr: adminBio.nameAr,
      nameEn: adminBio.nameEn,
      titleAr: adminBio.titleAr,
      titleEn: adminBio.titleEn,
      bioAr: adminBio.bioAr,
      bioEn: adminBio.bioEn,
      verifiedAr: adminBio.verifiedAr,
      verifiedEn: adminBio.verifiedEn,
      descBriefAr: adminBio.descBriefAr,
      descBriefEn: adminBio.descBriefEn,
      stat1Value: adminBio.stat1Value || "11",
      stat1LabelAr: adminBio.stat1LabelAr || 'فرصة عمل ريادية',
      stat1LabelEn: adminBio.stat1LabelEn || 'Entrepreneurial Opportunities',
      stat2Value: adminBio.stat2Value || "3+",
      stat2LabelAr: adminBio.stat2LabelAr || 'سنوات خبرة متخصصة',
      stat2LabelEn: adminBio.stat2LabelEn || 'Years of Experience',
      stat3Value: adminBio.stat3Value || "AR / EN",
      stat3LabelAr: adminBio.stat3LabelAr || 'ثنائية اللغة وثقافة الخليج',
      stat3LabelEn: adminBio.stat3LabelEn || 'Bilingual Strategy',
      stat4Value: adminBio.stat4Value || "GCC + EG",
      stat4LabelAr: adminBio.stat4LabelAr || 'أسواق مستهدفة بالكامل',
      stat4LabelEn: adminBio.stat4LabelEn || 'Target Markets',
      summaryTitleAr: 'استراتيجية محتوى مبنية على البيانات، ومجتمعات بتتحول لمبيعات.',
      summaryTitleEn: 'Data-Driven Strategies and loyal consumer communities.',
      summaryDescAr: 'متخصصة سوشيال ميديا واستراتيجية محتوى بخبرة موسعة في زيادة التفاعل، وبناء مجتمعات أونلاين، وتحسين الحضور الرقمي في قطاعات الـ High-Ticket وسريعة الإنتاج. مرونة عالية في كتابة سيناريوهات فيديو قصيرة عالية الأداء (Reels/TikToks)، تصميم كاريوسيلات تعليمية ونفسية تفاعلية، وإدارة الحسابات الاحترافية وصناعة الـ Lifestyle التوعوي في مصر والخليج لتوجيه العملاء بطريقة انسيابية وممتعة.',
      summaryDescEn: 'Fusing detailed visual identity design with psychological lead generation. I specialize in crafting high-conversion short scripts, designing educational infographics, structuring DM automation pipelines, and deploying campaign calendars. I empower premium brands across real estate, counseling, and lifestyle sectors to turn passive scrolling views into dedicated paying patrons.',
      tagsAr: null as string[] | null,
      tagsEn: null as string[] | null
    };
  };

  const displayBio = getDisplayProfile();

  // Helper to get tools details
  const getToolDescription = (toolName: string) => {
    if (isArabic) {
      switch (toolName) {
        case 'Notion': return 'تنظيم وهيكلة جداول المحتوى، كتابة الإسكريبتات، وإدارة الملفات البرمجية للعملاء.';
        case 'Trello': return 'تنسيق سير العمل اليومي مع فرق الإنتاج والمصممين لتفادي أي تأخير.';
        case 'CapCut': return 'مونتاج سريع وتنسيق لقطات ريلز المتفجرة بإيقاع عالي ومؤثرات صوتية حاسمة.';
        case 'Canva': return 'تصميم كروكي ومخططات أولية للكاروسيلات التعليمية وتجانس الهوية البصرية.';
        case 'Meta Suite': return 'جدولة المحتوى، تحليل الأداء اليومي والشهري، وإدارة الحملات الإعلانية أورجانيك.';
        case 'ChatGPT': return 'العصف الذهني وصياغة أفكار سيناريوهات بديلة وتوليد عناوين جذابة متعددة.';
        case 'ManyChat': return 'بناء سيناريوهات الردود الآلية وتوليد الروابط المباشرة لـ DM Automation.';
        case 'Google Forms': return 'بناء وتنسيق استبيانات فحص واحتواء العملاء وتحديد الأهداف.';
        default: return 'أداة مساعدة لإنتاج أفضل جودة محتوى ممكنة.';
      }
    } else {
      switch (toolName) {
        case 'Notion': return 'Structuring dynamic calendars, script repositories, and visual boards.';
        case 'Trello': return 'Managing production pipelines and checking off daily creative tasks with teams.';
        case 'CapCut': return 'Quick high-impact mobile editing, sensory transitions, and voice sync.';
        case 'Canva': return 'Drafting layout concepts and wireframing educational parenting slides.';
        case 'Meta Suite': return 'Scheduling content, monitoring analytics, and reviewing comments efficiently.';
        case 'ChatGPT': return 'Brainstorming variations of emotional hooks and checking keywords.';
        case 'ManyChat': return 'Architecting conversational flows and auto-delivery keywords for DMs.';
        case 'Google Forms': return 'Building detailed client intake diagnostics to analyze brand needs.';
        default: return 'Essential tool for streamlining marketing deliverables.';
      }
    }
  };

  // Helper to generate the text template for WhatsApp/Email
  const generateInquiryTemplate = () => {
    const nicheLabel = clientNiche === 'realstate' 
      ? (isArabic ? 'العقارات الفاخرة والاستثمار الساحلي' : 'Luxury Real Estate') 
      : clientNiche === 'parenting' 
      ? (isArabic ? 'تنمية سلوك وصحة الطفل (مدرسة نبطة)' : 'Child Development & Etiquette') 
      : clientNiche === 'relationships'
      ? (isArabic ? 'سيكولوجية العلاقات والتوجيه الأسري' : 'Relationship Psychology & Counseling')
      : clientNiche === 'empowerment'
      ? (isArabic ? 'التمكين العاطفي وتفكيك التعلق' : 'Female Empowerment & Well-being')
      : (isArabic ? 'الصحة الهرمونية وتغذية الأمعاء' : 'Hormonal Health & Gut Nutrition');

    const goalLabel = clientGoal === 'reels' 
      ? (isArabic ? 'صياغة اسكريبتات ريلز جاذبة ومعدل انتشار واسع' : 'High-impact video scriptwriting') 
      : clientGoal === 'selling' 
      ? (isArabic ? 'تأسيس قنوات بيع بالدايركت والتحويل لواتساب' : 'DM automated-to-WhatsApp conversion pipeline') 
      : (isArabic ? 'استشارة استراتيجية محتوى متكاملة للعلامة' : 'Full-scale content audit & brand campaign planning');

    if (isArabic) {
      return `مرحباً أستاذة آية خالد،
أود الاستفسار عن إمكانية التعاون بخصوص براند: "${clientBrand || 'مشروعنا الفاخر'}"
مجال عملنا: ${nicheLabel}
الهدف الأساسي لنا: ${goalLabel}
أود مناقشة تفاصيل الاستراتيجية وكيف يمكننا العمل معاً لرفع جودة المحتوى ومعدلات حسم المبيعات لدينا. شكراً لكِ!`;
    } else {
      return `Dear Aya Khaled,
I would like to inquire about a strategic collaboration for our brand: "${clientBrand || 'Our Luxury Brand'}".
Our business niche is: ${nicheLabel}.
Our main objective is: ${goalLabel}.
We are looking forward to discussing how your expertise in social selling and content strategy can uplift our brand metrics and direct sales. Best regards!`;
    }
  };

  const handleCopyTemplate = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(generateInquiryTemplate());
        setCopiedTemplate(true);
        setTimeout(() => setCopiedTemplate(false), 2000);
      } else {
        // Fallback for sandboxed iframes or unsupported browsers
        const textarea = document.createElement('textarea');
        textarea.value = generateInquiryTemplate();
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopiedTemplate(true);
        setTimeout(() => setCopiedTemplate(false), 2000);
      }
    } catch (err) {
      console.warn('Clipboard copy failed', err);
    }
  };

  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 transition-all ${
      isLight 
        ? 'bg-[#FAF5EF] text-[#2E1D16] selection:bg-[#8E4F39]/10 selection:text-[#8E4F39]' 
        : 'bg-[#0D0C0B] text-[#E0E0E0] selection:bg-[#D4AF37]/20 selection:text-[#D4AF37]'
    }`} style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
      
      {/* Dynamic Theme and Language Floating Toggles */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col sm:flex-row gap-3">
        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className={`flex items-center justify-center p-3 rounded-full shadow-xl transition-all hover:scale-110 active:scale-95 cursor-pointer border ${
            isLight 
              ? 'bg-white border-[#EFEAE3] text-[#8E4F39]' 
              : 'bg-[#181615] border-[#262321] text-[#D4AF37]'
          }`}
          title={isArabic ? 'تغيير المظهر' : 'Switch Theme'}
        >
          {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>

        {/* Language Toggle */}
        <button
          onClick={() => setIsArabic(!isArabic)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer border ${
            isLight 
              ? 'bg-white border-[#EFEAE3] text-[#2E1D16] hover:border-[#8E4F39]/50' 
              : 'bg-[#181615] border-[#262321] text-[#E0E0E0] hover:border-[#D4AF37]/50'
          }`}
          id="lang-toggle-btn"
        >
          <Languages className={`w-4 h-4 ${isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'}`} />
          <span className="text-xs font-semibold tracking-wider font-mono">
            {isArabic ? 'English / EN' : 'عربي / AR'}
          </span>
        </button>
      </div>

      {/* Top Luxury Header */}
      <header className={`border-b sticky top-0 z-40 transition-colors duration-300 backdrop-blur-md px-6 py-4 ${
        isLight ? 'border-[#EFEAE3] bg-[#FAF5EF]/95' : 'border-[#262321] bg-[#0D0C0B]/95'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group select-none"
            onClick={() => {
              setAdminTab('profile');
              setIsAdminOpen(true);
            }}
            title={isArabic ? "لوحة التحكم" : "Admin Panel"}
          >
            <span className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-serif font-black shadow-inner transition-transform group-hover:scale-105 active:scale-95 ${
              isLight ? 'bg-[#8E4F39] text-white' : 'bg-[#D4AF37] text-black'
            }`}>
              {isArabic ? 'أخ' : 'AK'}
            </span>
            <div className="flex items-baseline gap-2">
              <span className={`text-xl font-serif font-black tracking-widest uppercase transition-all group-hover:opacity-90 ${
                isLight ? 'text-[#2E1D16]' : 'text-[#D4AF37]'
              }`}>
                {isArabic ? adminBio.nameAr : adminBio.nameEn}
              </span>
              <span className={`w-1.5 h-1.5 rounded-full transition-all group-hover:scale-125 ${isLight ? 'bg-[#8E4F39]' : 'bg-[#D4AF37]'}`}></span>
              <span className={`text-[10px] font-mono tracking-widest uppercase hidden md:inline-block ${
                isLight ? 'text-[#8E7C74]' : 'text-gray-400'
              }`}>
                {isArabic ? adminBio.titleAr : adminBio.titleEn}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-1.5 font-mono text-[10px] ${
              isLight ? 'text-[#8E7C74]' : 'text-gray-400'
            }`}>
              <MapPin className={`w-3.5 h-3.5 ${isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'}`} />
              <span>{isArabic ? adminBio.locationAr : adminBio.locationEn}</span>
            </div>

            <a 
              href="#client-collaboration-desk"
              className={`hidden sm:inline-flex px-4 py-1.5 rounded-full text-xs font-bold transition-all hover:scale-105 shadow-sm ${
                isLight 
                  ? 'bg-[#8E4F39] text-white hover:bg-[#72321D]' 
                  : 'bg-[#D4AF37] text-black hover:bg-[#C29D2C]'
              }`}
            >
              {isArabic ? 'تواصل معي' : 'Contact Me'}
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        
        {/* Section 1: Hero Profile Section with Portrait and Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch" id="hero-bento-intro">
          
          {/* Hero text box on the right (RTL) / left (LTR) */}
          <div className={`lg:col-span-8 border rounded-3xl p-8 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all ${
            isLight ? 'bg-white border-[#EFEAE3]' : 'bg-[#121110] border-[#262321]'
          }`}>
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full -z-0 opacity-10 ${
              isLight ? 'bg-[#8E4F39]' : 'bg-[#D4AF37]'
            }`}></div>
            
            <div className="space-y-6 z-10">
              <div className={`inline-flex items-center gap-1.5 border px-3 py-1 rounded-full text-xs font-semibold ${
                isLight 
                  ? 'bg-[#FAF5EF] border-[#8E4F39]/20 text-[#8E4F39]' 
                  : 'bg-[#D4AF37]/10 border-[#D4AF37]/30 text-[#D4AF37]'
              }`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isArabic ? 'ملف الأعمال الشخصي الفاخر' : 'Premium Creative Portfolio'}</span>
              </div>

              <div className="space-y-3">
                <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight font-black leading-tight ${
                  isLight ? 'text-[#2E1D16]' : 'text-white'
                }`}>
                  {isArabic 
                    ? 'محتوى يبيع، ومجتمع يفضل وفي للبراند.' 
                    : 'Transforming Social Content into Direct Sales Conversions.'}
                </h1>
                <p className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
                  isLight ? 'text-[#5C4A42]' : 'text-gray-400'
                }`}>
                  {isArabic ? displayBio.bioAr : displayBio.bioEn}
                </p>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {(displayBio.tagsAr && displayBio.tagsEn ? (isArabic ? displayBio.tagsAr : displayBio.tagsEn) : [
                  isArabic ? '💡 كتابة الإسكربتات القوية' : '💡 Scriptwriting Strategy',
                  isArabic ? '💬 إغلاق مبيعات الدايركت' : '💬 Social Selling Pro',
                  isArabic ? '🌍 لهجة مصرية وخليجية وثيقة' : '🌍 Bilingual GCC Dialects',
                  isArabic ? '📊 تخطيط المحتوى والتقييم' : '📊 Content Planning Pro',
                  isArabic ? '🏡 العقارات والبراندات الفاخرة' : '🏡 High-Ticket Niches'
                ]).map((tag, i) => (
                  <span key={i} className={`border rounded-xl px-3 py-1.5 text-xs font-medium ${
                    isLight 
                      ? 'bg-[#FAF5EF] border-[#EFEAE3] text-[#5C4A42] hover:bg-[#FAF5EF]/60' 
                      : 'bg-[#181615] border-[#262321] text-gray-300'
                  }`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Credentials / Quick Contact links */}
            <div className={`border-t pt-6 mt-8 flex flex-wrap items-center justify-between gap-4 z-10 ${
              isLight ? 'border-[#EFEAE3]' : 'border-[#262321]'
            }`}>
              <div className="flex items-center gap-1.5">
                <Linkedin className={`w-4 h-4 ${isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'}`} />
                <a 
                  href={adminBio.linkedin || "https://www.linkedin.com"} 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className={`text-xs font-mono transition ${
                    isLight ? 'text-[#8E7C74] hover:text-[#8E4F39]' : 'text-gray-400 hover:text-[#D4AF37]'
                  }`}
                >
                  {isArabic ? (adminBio.linkedinLabelAr || 'آية خالد على لينكد إن') : (adminBio.linkedinLabelEn || 'Aya Khaled on LinkedIn')}
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <span className={`text-xs font-mono hidden sm:inline-block ${
                  isLight ? 'text-[#8E7C74]' : 'text-gray-500'
                }`}>
                  {adminBio.email || "aya2017.khalid@gmail.com"}
                </span>
                <a 
                  href={`mailto:${adminBio.email || "aya2017.khalid@gmail.com"}`} 
                  className={`px-4 py-2 rounded-full text-xs transition flex items-center gap-1.5 cursor-pointer font-bold shadow-sm ${
                    isLight 
                      ? 'bg-[#8E4F39] text-white hover:bg-[#72321D]' 
                      : 'bg-[#D4AF37] text-black hover:bg-[#C29D2C]'
                  }`}
                >
                  <span>{isArabic ? 'عروض الـ Case Studies' : 'Inquire'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Portrait Photo Card */}
          <div className={`lg:col-span-4 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between relative min-h-[380px] border ${
            isLight ? 'border-[#EFEAE3]' : 'border-[#262321]'
          }`}>
            <img 
              src={displayBio.portraitUrl} 
              alt="Aya Khaled Portrait" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover absolute inset-0 transition duration-500 hover:scale-105"
            />
            {/* Dark abstract gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            
            {/* Floating details in photo bar */}
            <div className="z-10 p-6 mt-auto text-stone-100 space-y-1">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                {isArabic ? displayBio.verifiedAr : displayBio.verifiedEn}
              </span>
              <h3 className="font-serif text-lg font-bold leading-tight text-white">
                {isArabic ? `${displayBio.nameAr} • صانعة المحتوى` : `${displayBio.nameEn} • Content Strategist`}
              </h3>
              <p className="text-[11px] text-gray-300">
                {isArabic ? displayBio.descBriefAr : displayBio.descBriefEn}
              </p>
            </div>
          </div>

        </section>

        {/* Section 2: Core Performance & Impact Stats Bar */}
        <section className={`border rounded-2xl p-6 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center transition-all ${
          isLight ? 'bg-white border-[#EFEAE3]' : 'bg-[#121110] border-[#262321]'
        }`}>
          <div className="space-y-1">
            <span className={`text-[10px] font-mono uppercase tracking-wider block ${
              isLight ? 'text-[#8E7C74]' : 'text-gray-500'
            }`}>
              {isArabic ? displayBio.stat1LabelAr : displayBio.stat1LabelEn}
            </span>
            <span className={`text-3xl font-serif font-black block ${
              isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
            }`}>{displayBio.stat1Value}</span>
          </div>
          <div className={`space-y-1 pr-2 border-r ${
            isLight ? 'border-[#EFEAE3]' : 'border-[#222]'
          }`}>
            <span className={`text-[10px] font-mono uppercase tracking-wider block ${
              isLight ? 'text-[#8E7C74]' : 'text-gray-500'
            }`}>
              {isArabic ? displayBio.stat2LabelAr : displayBio.stat2LabelEn}
            </span>
            <span className={`text-3xl font-serif font-black block ${
              isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
            }`}>{displayBio.stat2Value}</span>
          </div>
          <div className={`space-y-1 pr-2 border-r ${
            isLight ? 'border-[#EFEAE3]' : 'border-[#222]'
          }`}>
            <span className={`text-[10px] font-mono uppercase tracking-wider block ${
              isLight ? 'text-[#8E7C74]' : 'text-gray-500'
            }`}>
              {isArabic ? displayBio.stat3LabelAr : displayBio.stat3LabelEn}
            </span>
            <span className={`text-3xl font-serif font-black block ${
              isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
            }`}>{displayBio.stat3Value}</span>
          </div>
          <div className={`space-y-1 pr-2 border-r ${
            isLight ? 'border-[#EFEAE3]' : 'border-[#222]'
          }`}>
            <span className={`text-[10px] font-mono uppercase tracking-wider block ${
              isLight ? 'text-[#8E7C74]' : 'text-gray-500'
            }`}>
              {isArabic ? displayBio.stat4LabelAr : displayBio.stat4LabelEn}
            </span>
            <span className={`text-3xl font-serif font-black block ${
              isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
            }`}>{displayBio.stat4Value}</span>
          </div>
        </section>

        {/* Section 2.5: High-Impact Summary Card */}
        <section className={`border rounded-3xl p-8 shadow-sm transition-all relative overflow-hidden ${
          isLight ? 'bg-white border-[#EFEAE3]' : 'bg-[#121110] border-[#262321]'
        }`}>
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4AF37]/5 rounded-br-full pointer-events-none"></div>
          <div className="space-y-4 max-w-4xl relative z-10">
            <span className={`text-xs font-mono uppercase tracking-widest font-bold ${
              isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
            }`}>
              {isArabic ? 'رؤية ومنهجية العمل' : 'Strategic Objective'}
            </span>
            <h2 className={`text-2xl sm:text-3xl font-serif font-bold tracking-tight ${
              isLight ? 'text-[#2E1D16]' : 'text-white'
            }`}>
              {isArabic ? displayBio.summaryTitleAr : displayBio.summaryTitleEn}
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed ${
              isLight ? 'text-[#5C4A42]' : 'text-gray-300'
            }`}>
              {isArabic ? displayBio.summaryDescAr : displayBio.summaryDescEn}
            </p>
          </div>
        </section>

        {/* Section 2.8: Services Section - What I Offer */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className={`text-xs font-mono uppercase tracking-widest font-bold ${
              isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
            }`}>
              {isArabic ? 'الخدمات الاحترافية' : 'Service Offerings'}
            </span>
            <h2 className={`text-2xl sm:text-3xl font-serif font-black ${
              isLight ? 'text-[#2E1D16]' : 'text-white'
            }`}>
              {isArabic ? 'إيه اللي بقدمه لبراندك؟' : 'What I Bring To Your Brand'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                titleAr: 'كتابة محتوى وسكريبتات',
                titleEn: 'Content & Scriptwriting',
                descAr: 'صياغة سكريبتات ريلز وتيك توك تخطف الانتباه في أول 3 ثوانٍ وتوجّه العميل بسلاسة نحو اتخاذ إجراء بيعي أو تفاعلي فوري.',
                descEn: 'Writing short video scripts with immediate emotional hooks and strong call-to-actions engineered to maximize watch time and conversions.'
              },
              {
                titleAr: 'إدارة مجتمع الـ Social Selling',
                titleEn: 'Social Selling & Closings',
                descAr: 'تحويل صندوق رسائل الدايركت والتعليقات لقناة بيع ذهبية من خلال حوارات تفاعلية ذكية تقود العميل مباشرة لخدمة الواتساب VIP.',
                descEn: 'Directing casual commenters from Instagram posts straight into premium WhatsApp consultation chats using warm, personalized logic.'
              },
              {
                titleAr: 'تحليل نبرة البراند والجمهور',
                titleEn: 'Brand Tone & Archetype',
                descAr: 'دراسة وتحليل نبرة صوت علامتك التجارية وتحديد نبرة بصرية ولغوية تميزك عن المنافسين وتبني ثقة حديدية مع جمهورك.',
                descEn: 'Developing custom brand voice guidelines and aesthetic standards that match high-ticket buyer expectations.'
              },
              {
                titleAr: 'Premium DM Strategy',
                titleEn: 'Premium DM Funnels',
                descAr: 'تخطيط مسارات ذكية وسيناريوهات تلقائية للرد الفوري على عملائك بالأسعار والكتالوجات فور استخدام الكلمات المفتاحية بالتعليقات.',
                descEn: 'Designing keyword-triggered automated messaging sequences (ManyChat/Meta) that deliver resources and drive instant lead responses.'
              },
              {
                titleAr: 'Content Calendars',
                titleEn: 'Structured Content Calendars',
                descAr: 'تصميم وبناء جداول المحتوى الشهرية التي تضمن الموازنة الكاملة بين التوعية والتثقيف والترويج المباشر لخدماتك ومنتجاتك.',
                descEn: 'Architecting comprehensive monthly schedules ensuring a flawless balance between brand authority, education, and product sales.'
              },
              {
                titleAr: 'حملات الـ Influencers',
                titleEn: 'Influencer Coordination',
                descAr: 'إدارة وتنسيق التعاون مع المؤثرين وصناع المحتوى لتقديم رسالتك بشكل طبيعي ومقنع يضمن تحقيق أعلى معدل انتشار وعائد استثماري.',
                descEn: 'Selecting, briefing, and managing influencer campaigns to showcase your projects authentically and tap into high-trust networks.'
              }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className={`border rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] shadow-sm flex flex-col justify-between group ${
                  isLight 
                    ? 'bg-white border-[#EFEAE3] hover:border-[#8E4F39]/50 hover:shadow-md' 
                    : 'bg-[#121110] border-[#262321] hover:border-[#D4AF37]/50'
                }`}
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isLight ? 'bg-[#FAF5EF] text-[#8E4F39] group-hover:bg-[#8E4F39]/10' : 'bg-[#181615] text-[#D4AF37] group-hover:bg-[#D4AF37]/10'
                  }`}>
                    {idx === 0 && <FileText className="w-5 h-5" />}
                    {idx === 1 && <Users className="w-5 h-5" />}
                    {idx === 2 && <Award className="w-5 h-5" />}
                    {idx === 3 && <MessageSquare className="w-5 h-5" />}
                    {idx === 4 && <Clock className="w-5 h-5" />}
                    {idx === 5 && <TrendingUp className="w-5 h-5" />}
                  </div>
                  <h3 className={`text-base font-serif font-black ${
                    isLight ? 'text-[#2E1D16]' : 'text-white'
                  }`}>
                    {isArabic ? service.titleAr : service.titleEn}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    isLight ? 'text-[#5C4A42]' : 'text-gray-400'
                  }`}>
                    {isArabic ? service.descAr : service.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4.2: Portfolio / Approved PDFs & Content Plans (عينات من شغلي الفعلي) */}
        <section className="space-y-8" id="real-work-samples">
          <div className={`flex flex-col ${isArabic ? 'text-right items-start' : 'text-left items-start'} space-y-2`}>
            <span className={`text-xs sm:text-sm font-semibold tracking-wider uppercase block ${
              isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
            }`}>
              {isArabic ? realWorkSection.subtitleAr : realWorkSection.subtitleEn}
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight ${
              isLight ? 'text-[#2E1D16]' : 'text-white'
            }`}>
              {isArabic ? realWorkSection.titleAr : realWorkSection.titleEn}
            </h2>
            <p className={`text-sm sm:text-base max-w-3xl leading-relaxed ${
              isLight ? 'text-[#5C4A42]' : 'text-gray-400'
            }`}>
              {isArabic ? realWorkSection.descAr : realWorkSection.descEn}
            </p>
          </div>

          {/* Cloud Drive Header & Controls */}
          <div className={`p-6 rounded-2xl border flex flex-col md:flex-row gap-4 justify-between items-center transition-all ${
            isLight ? 'bg-white border-[#EFEAE3] shadow-sm' : 'bg-[#121110] border-[#262321] shadow-md'
          }`}>
            {/* Left side breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold">
              <span className="text-gray-400">{isArabic ? 'وحدات الملفات' : 'My Drive'}</span>
              <span className="text-gray-300">/</span>
              <span className={isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'}>
                {isArabic ? 'عينات العمل الفعلي' : 'Real Work Samples'}
              </span>
            </div>

            {/* Quick stats / metadata */}
            <div className="text-[10px] font-mono text-gray-400">
              {isArabic ? realWorkSection.storageAr : realWorkSection.storageEn}
            </div>

            {/* Live Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              {/* Search Bar */}
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={driveSearchQuery}
                  onChange={(e) => setDriveSearchQuery(e.target.value)}
                  placeholder={isArabic ? 'ابحث عن ملف...' : 'Search files...'}
                  className={`w-full pl-9 pr-4 py-2 text-xs rounded-xl border focus:outline-none transition-all ${
                    isLight 
                      ? 'bg-white border-stone-200 focus:border-[#8E4F39] text-[#2E1D16]' 
                      : 'bg-[#111] border-[#222] focus:border-[#D4AF37] text-white'
                  }`}
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {[
                  { id: 'all', ar: 'الكل', en: 'All' },
                  { id: 'Real Estate', ar: 'عقارات', en: 'Real Estate' },
                  { id: 'Personal Branding', ar: 'براند شخصي', en: 'Personal Brand' },
                  { id: 'Lifestyle', ar: 'أسلوب حياة', en: 'Lifestyle' }
                ].map(cat => {
                  const isActive = driveCategoryFilter === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setDriveCategoryFilter(cat.id)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? isLight
                            ? 'bg-[#8E4F39] text-white'
                            : 'bg-[#D4AF37] text-black'
                          : isLight
                          ? 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'
                          : 'bg-[#111] border border-[#222] text-stone-400 hover:bg-[#1a1817]'
                      }`}
                    >
                      {isArabic ? cat.ar : cat.en}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Files Grid (Premium warm cards designed exactly like the uploaded mockup) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {pdfCaseStudies.filter(pdf => {
              const matchesSearch = isArabic
                ? pdf.titleAr.toLowerCase().includes(driveSearchQuery.toLowerCase()) || pdf.descAr.toLowerCase().includes(driveSearchQuery.toLowerCase())
                : pdf.titleEn.toLowerCase().includes(driveSearchQuery.toLowerCase()) || pdf.descEn.toLowerCase().includes(driveSearchQuery.toLowerCase());
              const matchesCategory = driveCategoryFilter === 'all' || pdf.categoryEn.toLowerCase() === driveCategoryFilter.toLowerCase() || pdf.categoryAr === driveCategoryFilter;
              return matchesSearch && matchesCategory;
            }).map((pdf) => (
              <div 
                key={pdf.id}
                onClick={() => {
                  handleSelectPdf(pdf.id);
                }}
                className={`w-full rounded-[2.2rem] p-8 sm:p-9 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer group relative ${
                  isLight 
                    ? 'bg-[#FFFAF6] border-[#F5EBE4] shadow-[0_4px_20px_rgba(142,79,57,0.02)]' 
                    : 'bg-[#181514] border-[#2E2421] shadow-[0_4px_20px_rgba(0,0,0,0.2)]'
                }`}
              >
                {/* Top Row: Left is Badge, Right is Circle Icon */}
                <div className="flex justify-between items-center w-full">
                  {/* Category Badge (Left) */}
                  <span className={`px-4 py-1.5 text-[11px] font-bold tracking-wide rounded-full select-none ${
                    isLight 
                      ? 'bg-[#FDF0EB] text-[#8E4F39]' 
                      : 'bg-[#2E1B15] text-[#F3C2B2]'
                  }`}>
                    {isArabic ? pdf.categoryAr : pdf.categoryEn}
                  </span>

                  {/* Document Circle Icon (Right) */}
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 select-none ${
                    isLight 
                      ? 'bg-[#FDF0EB] text-[#8E4F39]' 
                      : 'bg-[#2E1B15] text-[#F3C2B2]'
                  }`}>
                    <FileText className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>

                {/* Content Area (Right-Aligned in Arabic, Left-Aligned in English) */}
                <div className={`mt-6 ${isArabic ? 'text-right' : 'text-left'}`}>
                  {/* Title */}
                  <h3 className={`text-xl sm:text-2xl font-serif font-black leading-snug ${
                    isLight ? 'text-[#2E1D16]' : 'text-white'
                  }`}>
                    {isArabic ? pdf.titleAr : pdf.titleEn}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mt-3.5 ${
                    isLight ? 'text-stone-600' : 'text-stone-300'
                  }`}>
                    {isArabic ? pdf.descAr : pdf.descEn}
                  </p>


                </div>

                {/* Bottom Row: Centered or Aligned Link with Arrow Down Icon */}
                <div className="flex flex-col gap-3.5 mt-8 w-full">
                  {pdf.externalUrl && (
                    <a
                      href={pdf.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation(); // Avoid opening the preview modal
                      }}
                      className={`flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl border transition-all duration-300 ${
                        isLight 
                          ? 'bg-emerald-500/10 text-emerald-800 border-emerald-200/50 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 shadow-sm' 
                          : 'bg-emerald-500/10 text-emerald-300 border-emerald-900/40 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 shadow-sm'
                      }`}
                    >
                      <FileSpreadsheet className="w-4 h-4" />
                      <span>
                        {isArabic ? 'الكالندر الكامل (Google Sheets) ↗' : 'Full Calendar (Google Sheets) ↗'}
                      </span>
                    </a>
                  )}

                  <div className={`flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold transition-opacity group-hover:opacity-85 ${
                    isArabic ? 'justify-end' : 'justify-start'
                  } ${
                    isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
                  }`}>
                    <span className="underline decoration-1 underline-offset-4">
                      {isArabic ? 'معاينة تفاعلية سريعة' : 'Quick Interactive Preview'}
                    </span>
                    <Download className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* Interactive PDF & Content Calendar Spreadsheet Modal */}
        {activePdfId && (() => {
          const activePdf = pdfCaseStudies.find(p => p.id === activePdfId);
          if (!activePdf) return null;
          const activePage = activePdf.pages.find(pg => pg.pageNum === pdfPageNumber) || activePdf.pages[0];

          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md" style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
              <div className={`w-full max-w-6xl rounded-[1.5rem] overflow-hidden shadow-2xl flex flex-col h-[90vh] sm:h-[86vh] border transition-all ${
                isLight ? 'bg-stone-50 border-stone-200' : 'bg-[#121110] border-[#222]'
              }`}>
                
                {/* Google Sheets Styled Top Bar */}
                <div className={`px-4 py-3 border-b flex flex-col gap-2 ${
                  isLight ? 'bg-white border-stone-200 text-[#2E1D16]' : 'bg-[#161514] border-[#222] text-stone-200'
                }`}>
                  {/* Row 1: File name & Close Button */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Table className="w-5 h-5 text-emerald-600" />
                      <div className="flex flex-col">
                        <span className="font-serif font-black text-xs sm:text-sm leading-tight flex items-center gap-1.5">
                          {isArabic ? activePdf.titleAr : activePdf.titleEn}
                          <span className="text-[10px] font-mono px-1.5 py-0.2 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 rounded">
                            .xlsx
                          </span>
                        </span>
                        <div className="flex gap-2 text-[10px] text-stone-400 font-mono mt-0.5">
                          <span>File</span>
                          <span>•</span>
                          <span>Edit</span>
                          <span>•</span>
                          <span>View</span>
                          <span>•</span>
                          <span>Format</span>
                          <span>•</span>
                          <span>Data</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* External Google Sheets Link Button */}
                      {activePdf.externalUrl && (
                        <a
                          href={activePdf.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-200 cursor-pointer shadow-sm"
                        >
                          <FileSpreadsheet className="w-3.5 h-3.5" />
                          <span>{isArabic ? 'فتح بـ Google Sheets الأصلي ↗' : 'Open in Google Sheets ↗'}</span>
                        </a>
                      )}

                      {/* View Mode Toggle: Spreadsheet vs Document */}
                      <div className={`p-0.5 rounded-lg border flex gap-1 ${
                        isLight ? 'bg-stone-100 border-stone-200' : 'bg-[#111] border-[#222]'
                      }`}>
                        <button
                          onClick={() => setModalViewMode('spreadsheet')}
                          className={`px-3 py-1 rounded-md text-[10px] font-mono font-bold transition-all cursor-pointer ${
                            modalViewMode === 'spreadsheet'
                              ? isLight
                                ? 'bg-white text-emerald-600 shadow-sm'
                                : 'bg-[#1a1817] text-emerald-400'
                              : 'text-stone-400 hover:text-stone-300'
                          }`}
                        >
                          {isArabic ? 'جدول الكلاندر' : 'Spreadsheet'}
                        </button>
                        <button
                          onClick={() => setModalViewMode('document')}
                          className={`px-3 py-1 rounded-md text-[10px] font-mono font-bold transition-all cursor-pointer ${
                            modalViewMode === 'document'
                              ? isLight
                                ? 'bg-white text-[#8E4F39] shadow-sm'
                                : 'bg-[#1a1817] text-[#D4AF37]'
                              : 'text-stone-400 hover:text-stone-300'
                          }`}
                        >
                          {isArabic ? 'معاينة المستند' : 'Document View'}
                        </button>
                      </div>

                      {/* Share Link Button */}
                      <button
                        onClick={() => handleCopyShareLink(activePdf.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer border ${
                          linkCopied
                            ? 'bg-emerald-600 text-white border-emerald-600'
                            : isLight
                            ? 'bg-[#8E4F39]/10 text-[#8E4F39] hover:bg-[#8E4F39]/20 border-transparent'
                            : 'bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 border-transparent'
                        }`}
                        title={isArabic ? 'نسخ رابط الكالندر للمشاركة' : 'Copy Calendar Share Link'}
                      >
                        {linkCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>{isArabic ? 'تم النسخ!' : 'Copied!'}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>{isArabic ? 'مشاركة الرابط' : 'Share Link'}</span>
                          </>
                        )}
                      </button>

                      {/* Close button */}
                      <button 
                        onClick={() => handleSelectPdf(null)}
                        className="p-1.5 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition cursor-pointer"
                        title={isArabic ? 'إغلاق المعاينة' : 'Close Preview'}
                      >
                        <X className="w-5 h-5 text-gray-500 hover:text-red-500" />
                      </button>
                    </div>
                  </div>

                  {/* Row 2: Spreadsheet Formula Bar / Action Toolbar */}
                  <div className={`flex items-center gap-2 px-2 py-1 rounded-lg border text-[11px] font-mono ${
                    isLight ? 'bg-stone-50 border-stone-100 text-stone-600' : 'bg-[#111] border-[#222] text-stone-400'
                  }`}>
                    <span className="font-bold text-emerald-600 select-none">fx</span>
                    <span className="text-gray-300">|</span>
                    <span className="truncate">
                      =GET_CAMPAIGN_CONTENT("{activePdf.id}", "Sheet_{pdfPageNumber}")
                    </span>
                  </div>
                </div>

                {/* Main Modal Body */}
                <div className="flex-1 flex overflow-hidden">
                  
                  {/* Left Sidebar Sheet Tabs (Desktop only) */}
                  <div className={`hidden md:flex flex-col w-48 p-4 gap-2 overflow-y-auto border-r ${
                    isLight ? 'bg-stone-50 border-stone-200' : 'bg-[#151312] border-[#222]'
                  }`}>
                    <span className="text-[9px] font-mono uppercase tracking-widest font-black text-gray-400 select-none">
                      {isArabic ? 'صفحات المخطط' : 'Campaign Sheets'}
                    </span>
                    {activePdf.pages.map((pg) => {
                      const isActive = pg.pageNum === pdfPageNumber;
                      return (
                        <button
                          key={pg.pageNum}
                          onClick={() => setPdfPageNumber(pg.pageNum)}
                          className={`text-right w-full p-2 rounded-lg border transition flex items-center gap-2 cursor-pointer text-xs ${
                            isActive
                              ? isLight
                                ? 'bg-white border-[#8E4F39] text-[#8E4F39] shadow-sm font-bold'
                                : 'bg-[#1c1a18] border-[#D4AF37] text-[#D4AF37] font-bold'
                              : isLight
                              ? 'bg-transparent border-transparent text-gray-500 hover:bg-stone-200/50'
                              : 'bg-transparent border-transparent text-gray-400 hover:bg-[#1C1A18]/50'
                          }`}
                        >
                          <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-500' : 'bg-stone-300'}`}></span>
                          <span className="font-serif truncate">
                            {isArabic ? pg.titleAr : pg.titleEn}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Main Interactive Grid Area */}
                  <div className={`flex-1 overflow-auto p-4 sm:p-6 ${
                    isLight ? 'bg-stone-100' : 'bg-[#0E0D0C]'
                  }`}>
                    {modalViewMode === 'spreadsheet' ? (() => {
                      // Get the spreadsheet rows for the active page
                      const rows = (() => {
                        if (activePdf.id === 'pdf-amira' && pdfPageNumber === 1) {
                          return amiraSheetRows;
                        }
                        
                        // Check if the page has custom detailed section rows already from user edits
                        const hasDetailedEdits = activePage.sections?.some((sec: any) => sec.hookAr || sec.scriptAr);
                        if (hasDetailedEdits) {
                          return activePage.sections.map((sec: any) => {
                            const contentParts = (sec.contentAr || "").split('\n');
                            return {
                              hookAr: sec.hookAr || sec.titleAr || '',
                              hookEn: sec.hookEn || sec.titleEn || '',
                              directionAr: sec.directionAr || (isArabic ? "لقطات ملائمة مع نبرة هادئة" : "Calm thematic sequence"),
                              directionEn: sec.directionEn || "Appropriate visuals with calm voiceover",
                              scriptAr: sec.scriptAr || contentParts[0] || sec.contentAr || '',
                              scriptEn: sec.scriptEn || (sec.contentEn || "").split('\n')[0] || sec.contentEn || '',
                              captionAr: sec.captionAr || contentParts[1] || sec.contentAr || "كابشن تفصيلي للتأثير",
                              captionEn: sec.captionEn || sec.contentEn || "Detailed caption",
                              storyAr: sec.storyAr || "استطلاع تفاعلي لزيادة الوعي",
                              storyEn: sec.storyEn || "Interactive Poll"
                            };
                          });
                        }
                        
                        // Otherwise, return full realistic 10-day content calendar
                        return generateFullCalendarRows(activePdf, pdfPageNumber, activePage.titleAr);
                      })();

                      return (
                        <div className="w-full overflow-x-auto rounded-2xl border shadow-lg bg-white dark:bg-[#121110] border-stone-200 dark:border-[#222]">
                          {/* Main Spreadsheet Table */}
                          <table className="w-full text-xs text-right border-collapse min-w-[900px]" style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
                            {/* Purple/Violet Header Bar */}
                            <thead>
                              <tr className="bg-[#7030A0] text-white">
                                {/* Index Column */}
                                <th className="w-12 py-3 px-2 border border-stone-300/30 font-mono text-[10px] font-bold text-center bg-[#5B2C84]/40 select-none">
                                  #
                                </th>
                                {isArabic ? (
                                  <>
                                    <th className="w-[22%] py-3.5 px-4 border border-stone-300/30 text-right font-bold text-[13px] tracking-wide font-serif">الهوك (Hook)</th>
                                    <th className="w-[18%] py-3.5 px-4 border border-stone-300/30 text-right font-bold text-[13px] tracking-wide font-serif">التوجيه (Direction)</th>
                                    <th className="w-[22%] py-3.5 px-4 border border-stone-300/30 text-right font-bold text-[13px] tracking-wide font-serif">نص الاسكريبت</th>
                                    <th className="w-[18%] py-3.5 px-4 border border-stone-300/30 text-right font-bold text-[13px] tracking-wide font-serif">الكابشن (ملخص)</th>
                                    <th className="w-[20%] py-3.5 px-4 border border-stone-300/30 text-right font-bold text-[13px] tracking-wide font-serif">الستوري التفاعلية</th>
                                  </>
                                ) : (
                                  <>
                                    <th className="w-[22%] py-3.5 px-4 border border-stone-300/30 text-left font-bold text-[13px] tracking-wide">Hook (الهوك)</th>
                                    <th className="w-[18%] py-3.5 px-4 border border-stone-300/30 text-left font-bold text-[13px] tracking-wide">Direction (التوجيه)</th>
                                    <th className="w-[22%] py-3.5 px-4 border border-stone-300/30 text-left font-bold text-[13px] tracking-wide">Script Text</th>
                                    <th className="w-[18%] py-3.5 px-4 border border-stone-300/30 text-left font-bold text-[13px] tracking-wide">Caption (الكابشن)</th>
                                    <th className="w-[20%] py-3.5 px-4 border border-stone-300/30 text-left font-bold text-[13px] tracking-wide">Interactive Story</th>
                                  </>
                                )}
                              </tr>
                            </thead>

                            {/* Spreadsheet Grid Lines & Cells */}
                            <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                              {rows.map((row, idx) => (
                                <tr 
                                  key={idx} 
                                  className={`hover:bg-purple-50/20 dark:hover:bg-purple-950/10 transition-colors ${
                                    idx % 2 === 0 ? 'bg-white dark:bg-[#121110]' : 'bg-[#FAFAFA] dark:bg-[#161514]'
                                  }`}
                                >
                                  {/* Row Index */}
                                  <td className="w-12 py-3 px-2 border border-stone-200 dark:border-stone-800 font-mono text-[10px] text-center text-stone-400 bg-stone-50/40 dark:bg-[#151312]/30 select-none">
                                    {idx + 1}
                                  </td>
                                  
                                  {/* Hook Column */}
                                  <td className="p-3.5 border border-stone-200 dark:border-stone-800 leading-relaxed font-serif text-stone-800 dark:text-stone-200">
                                    {isArabic ? row.hookAr : row.hookEn}
                                  </td>
                                  
                                  {/* Direction Column */}
                                  <td className="p-3.5 border border-stone-200 dark:border-stone-800 leading-relaxed text-stone-700 dark:text-stone-300">
                                    {isArabic ? row.directionAr : row.directionEn}
                                  </td>
                                  
                                  {/* Script Column */}
                                  <td className="p-3.5 border border-stone-200 dark:border-stone-800 leading-relaxed font-serif text-stone-800 dark:text-stone-200">
                                    {isArabic ? row.scriptAr : row.scriptEn}
                                  </td>
                                  
                                  {/* Caption Column */}
                                  <td className="p-3.5 border border-stone-200 dark:border-stone-800 leading-relaxed text-stone-700 dark:text-stone-300">
                                    {isArabic ? row.captionAr : row.captionEn}
                                  </td>
                                  
                                  {/* Story Column */}
                                  <td className="p-3.5 border border-stone-200 dark:border-stone-800 leading-relaxed text-stone-700 dark:text-stone-300">
                                    {isArabic ? row.storyAr : row.storyEn}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    })() : (
                      /* Document Page View Mode (Clean paper PDF look) */
                      <div className="flex justify-center items-start">
                        <div 
                          style={{ transform: `scale(${pdfZoom / 100})`, transformOrigin: 'top center' }}
                          className={`w-full max-w-2xl bg-white text-stone-900 rounded-lg p-6 sm:p-12 shadow-xl border relative min-h-[620px] transition-transform duration-200 ${
                            isLight ? 'border-stone-300' : 'border-stone-850'
                          }`}
                        >
                          {/* Paper Watermark Header */}
                          <div className="flex items-center justify-between border-b pb-4 mb-6 border-stone-200 text-[10px] font-mono text-stone-400 select-none">
                            <span>{isArabic ? 'آية خالد • استشاري محتوى' : 'Aya Khaled • Content Strategist'}</span>
                            <span>{isArabic ? 'معتمد وسري للغاية ٢٠٢٦' : 'CONFIDENTIAL • STRATEGY 2026'}</span>
                          </div>

                          {/* Page Number Stamp (Floating top corner) */}
                          <div className="absolute top-4 right-4 sm:top-12 sm:right-12 text-[10px] font-mono text-stone-300 font-bold border rounded-full w-8 h-8 flex items-center justify-center select-none">
                            #{activePage.pageNum}
                          </div>

                          {/* Title of Page */}
                          <div className="space-y-1 mb-8">
                            <span className="text-[9px] font-mono text-[#8E4F39] uppercase tracking-widest font-bold block">
                              {isArabic ? `القسم المعتمد ${activePage.pageNum}` : `APPROVED SECTION ${activePage.pageNum}`}
                            </span>
                            <h1 className="text-xl sm:text-2xl font-serif font-black text-[#2E1D16] leading-tight">
                              {isArabic ? activePage.titleAr : activePage.titleEn}
                            </h1>
                            <div className="w-12 h-1 bg-[#8E4F39] rounded mt-2"></div>
                          </div>

                          {/* Structured Page Sections */}
                          <div className="space-y-8 text-right font-serif">
                            {activePage.sections.map((sec, idx) => (
                              <div key={idx} className="space-y-3">
                                <h3 className="text-sm sm:text-base font-black text-[#72321D] flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E4F39]"></span>
                                  {isArabic ? sec.titleAr : sec.titleEn}
                                </h3>
                                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed whitespace-pre-line pl-4">
                                  {isArabic ? sec.contentAr : sec.contentEn}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Footer watermark inside paper */}
                          <div className="absolute bottom-4 left-6 right-6 border-t pt-4 border-stone-100 flex items-center justify-between text-[9px] font-mono text-stone-300 select-none">
                            <span>{isArabic ? 'خطة المحتوى السنوية والسيناريوهات الملحقة' : 'Campaign Content Blueprint & Script Book'}</span>
                            <span>Page {activePage.pageNum}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Sheet Tabs bar (Just like Google Sheets/Excel bottom tab bar) */}
                <div className={`px-4 py-1.5 border-t flex items-center gap-2 overflow-x-auto select-none ${
                  isLight ? 'bg-stone-50 border-stone-200' : 'bg-[#151312] border-[#222]'
                }`}>
                  <span className="text-[10px] font-mono font-bold text-stone-400 mr-2 uppercase">Sheets:</span>
                  {activePdf.pages.map((pg) => {
                    const isActive = pg.pageNum === pdfPageNumber;
                    return (
                      <button
                        key={pg.pageNum}
                        onClick={() => setPdfPageNumber(pg.pageNum)}
                        className={`px-3 py-1 rounded text-[11px] font-mono font-bold transition flex items-center gap-2 cursor-pointer ${
                          isActive
                            ? isLight
                              ? 'bg-white text-emerald-600 shadow-sm border border-stone-200'
                              : 'bg-[#1c1a18] text-emerald-400 border border-[#333]'
                            : 'text-stone-400 hover:bg-stone-200/40 dark:hover:bg-[#1a1817]'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-500 animate-pulse' : 'bg-stone-300'}`}></span>
                        {isArabic ? `صفحة ${pg.pageNum}` : `Sheet ${pg.pageNum}`}
                      </button>
                    );
                  })}
                </div>

                {/* Status Bar Footer */}
                <div className={`px-4 py-2 text-[10px] font-mono flex items-center justify-between select-none border-t ${
                  isLight ? 'bg-white border-stone-200 text-gray-500' : 'bg-[#151312] border-[#222] text-gray-400'
                }`}>
                  <span>FILE: AYA_CALENDAR_{activePdfId.toUpperCase()}.xlsx</span>
                  <span>{isArabic ? 'حالة الخلايا: جاهزة للمزامنة والأتمتة' : 'Cells synced with ManyChat & WA API'}</span>
                </div>

              </div>
            </div>
          );
        })()}



        {/* Section 5: Dynamic Tools List ("الأدوات اللي بشتغل بيها.") */}
        <section className={`border rounded-3xl p-6 sm:p-8 shadow-sm transition-all ${
          isLight ? 'bg-white border-[#EFEAE3]' : 'bg-[#121110] border-[#262321]'
        }`}>
          <div className="space-y-6">
            <div className="space-y-1.5">
              <span className={`text-xs font-mono uppercase tracking-widest font-bold block ${
                isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
              }`}>
                {isArabic ? 'المنظومة التكنولوجية المعتمدة' : 'Software Stack'}
              </span>
              <h2 className={`text-2xl sm:text-3xl font-serif font-black ${
                isLight ? 'text-[#2E1D16]' : 'text-white'
              }`}>
                {isArabic ? 'الأدوات اللي بشتغل بيها.' : 'Tools I Work With'}
              </h2>
              <p className={`text-xs sm:text-sm max-w-2xl leading-relaxed ${
                isLight ? 'text-[#5C4A42]' : 'text-gray-400'
              }`}>
                {isArabic 
                  ? 'مرري مؤشر الفأرة أو اضغطي على أي أداة لمعرفة كيفية دمجها الاحترافي في إنتاج المحتوى والأتمتة لتسهيل أعمال البراند.'
                  : 'Hover or tap on any tool to see how it integrates into the daily production and social sales workflow.'}
              </p>
            </div>

            {/* Tags Container */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {[
                'Notion',
                'Trello',
                'CapCut',
                'Canva',
                'Meta Business Suite',
                'ChatGPT',
                'ManyChat',
                'Google Forms'
              ].map((tool) => {
                const isSelected = hoveredTool === tool;
                return (
                  <button
                    key={tool}
                    onMouseEnter={() => setHoveredTool(tool)}
                    onMouseLeave={() => setHoveredTool(null)}
                    onClick={() => setHoveredTool(hoveredTool === tool ? null : tool)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all duration-300 relative border cursor-pointer ${
                      isSelected
                        ? isLight
                          ? 'bg-[#8E4F39] text-white border-[#8E4F39]'
                          : 'bg-[#D4AF37] text-black border-[#D4AF37]'
                        : isLight
                        ? 'bg-[#FAF5EF] border-[#EFEAE3] text-[#5C4A42] hover:border-[#8E4F39]/50'
                        : 'bg-[#181615] border-[#262321] text-gray-300 hover:border-[#D4AF37]/50'
                    }`}
                  >
                    {tool}
                  </button>
                );
              })}
            </div>

            {/* Dynamic tool breakdown output box */}
            <div className={`p-4 rounded-xl border transition-all duration-300 min-h-[75px] flex items-center ${
              isLight ? 'bg-[#FAF5EF] border-[#EFEAE3]' : 'bg-[#181615] border-[#262321]'
            }`}>
              {hoveredTool ? (
                <div className="space-y-1 text-xs sm:text-sm">
                  <span className={`font-mono font-black uppercase ${
                    isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
                  }`}>
                    {hoveredTool} :
                  </span>
                  <p className={isLight ? 'text-[#2E1D16]' : 'text-stone-300'}>
                    {getToolDescription(hoveredTool)}
                  </p>
                </div>
              ) : (
                <span className={`text-xs italic ${isLight ? 'text-[#8E7C74]' : 'text-gray-500'}`}>
                  {isArabic 
                    ? '💡 ضعي مؤشر الماوس أو انقري فوق أي أداة بالملف لاستعراض الغرض الاستراتيجي منها وحل المشكلات.' 
                    : '💡 Hover or tap any application to reveal its strategic role in our production systems.'}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Section 5.5: Education Section */}
        <section className={`border rounded-3xl p-6 sm:p-8 shadow-sm transition-all relative overflow-hidden ${
          isLight ? 'bg-white border-[#EFEAE3]' : 'bg-[#121110] border-[#262321]'
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 text-center sm:text-right">
              <span className={`text-xs font-mono uppercase tracking-widest font-bold ${
                isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
              }`}>
                {isArabic ? 'الخلفية الأكاديمية والتمكين' : 'Academic Credentials'}
              </span>
              <h3 className={`text-xl sm:text-2xl font-serif font-black ${
                isLight ? 'text-[#2E1D16]' : 'text-white'
              }`}>
                {isArabic ? 'جامعة القاهرة - دار العلوم' : 'Cairo University - Dar Al-Uloom'}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                isLight ? 'text-[#5C4A42]' : 'text-gray-300'
              }`}>
                {isArabic 
                  ? 'بكالوريوس العلوم الإسلامية واللغة العربية بتقدير ممتاز مع مرتبة الشرف الأولى. تمنحني لغة فصيحة وثقافة لهجة خليجية وثيقة ومتمكنة لصياغة سيناريوهات ممتازة تناسب النخبة.'
                  : 'Bachelor of Arabic Language & Islamic Sciences, Graduated with First-Class Honors. This grants me a flawless grasp of persuasive syntax, bilingual phrasing, and rich GCC dialects.'}
              </p>
            </div>
            <div className={`p-4 rounded-full border shrink-0 ${
              isLight ? 'bg-[#FAF5EF] border-[#EFEAE3]' : 'bg-[#181615] border-[#262321]'
            }`}>
              <BookOpen className={`w-8 h-8 ${isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'}`} />
            </div>
          </div>
        </section>

        {/* Section 6: VIP Client Inquiry & Collaboration Desk */}
        <section className={`border rounded-3xl p-8 relative overflow-hidden shadow-xl transition-all ${
          isLight 
            ? 'bg-gradient-to-tr from-[#FAF5EF] to-white border-[#EFEAE3]' 
            : 'bg-gradient-to-tr from-[#151515] to-[#0F0F0F] border-[#2A2A2A]'
        }`} id="client-collaboration-desk">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
            {/* Consultation Intake Form left */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div>
                <span className={`text-xs font-mono tracking-widest uppercase font-bold block mb-2 ${
                  isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
                }`}>
                  {isArabic ? 'عندك براند محتاج صوت يفهم جمهوره؟' : 'Ready To Scale Your Brand Voice?'}
                </span>
                <h2 className={`text-2xl sm:text-3xl font-serif tracking-tight font-bold ${
                  isLight ? 'text-[#2E1D16]' : 'text-white'
                }`}>
                  {isArabic ? 'دعينا نطلق حملتك القادمة بفعالية حسم فائقة' : 'Secure Aya’s Strategic Services'}
                </h2>
                <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${
                  isLight ? 'text-[#5C4A42]' : 'text-gray-400'
                }`}>
                  {isArabic 
                    ? 'هل تمتلكين مشروعاً عقارياً فاخراً بمصر أو الخليج، أو تديرين براند كوتشينج وصحة نفسية؟ حددي تطلعات حملتك لتجهيز قالب استعلام رسمي فوري ومناقشته سوياً.'
                    : 'Are you running an elite development project, parenting academy, or high-end retail? Configure your project objectives below to instantly frame a customized inquiry draft.'}
                </p>
              </div>

              {/* Form Controls */}
              <div className="space-y-4 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-[11px] font-mono tracking-wider uppercase mb-1.5 ${
                      isLight ? 'text-[#8E7C74]' : 'text-gray-400'
                    }`}>
                      {isArabic ? 'اسم البراند / المشروع:' : 'Your Brand / Project Name'}
                    </label>
                    <input 
                      type="text" 
                      placeholder={isArabic ? 'مثال: أريا العقارية' : 'e.g. ARIA Luxury'}
                      value={clientBrand}
                      onChange={(e) => {
                        setClientBrand(e.target.value);
                        setIsFormSubmitted(true);
                      }}
                      className={`w-full border outline-none rounded-xl p-3 text-xs transition ${
                        isLight 
                          ? 'bg-white border-[#EFEAE3] text-[#2E1D16] focus:border-[#8E4F39]' 
                          : 'bg-[#1A1A1A] border-[#2A2A2A] text-white focus:border-[#D4AF37]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-[11px] font-mono tracking-wider uppercase mb-1.5 ${
                      isLight ? 'text-[#8E7C74]' : 'text-gray-400'
                    }`}>
                      {isArabic ? 'مجال البراند المهني:' : 'Your Business Niche'}
                    </label>
                    <select 
                      value={clientNiche}
                      onChange={(e) => {
                        setClientNiche(e.target.value);
                        setIsFormSubmitted(true);
                      }}
                      className={`w-full border outline-none rounded-xl p-3 text-xs transition ${
                        isLight 
                          ? 'bg-white border-[#EFEAE3] text-[#2E1D16] focus:border-[#8E4F39]' 
                          : 'bg-[#1A1A1A] border-[#2A2A2A] text-white focus:border-[#D4AF37]'
                      }`}
                    >
                      <option value="realstate">{isArabic ? '🏡 عقارات واستثمار ساحلي فاخر' : 'Luxury Real Estate'}</option>
                      <option value="parenting">{isArabic ? '👶 مدرسة نبطة وتنمية الطفل' : 'Child Development & Etiquette'}</option>
                      <option value="relationships">{isArabic ? '👥 وعي وسيكولوجية العلاقات' : 'Relationship Psychology'}</option>
                      <option value="empowerment">{isArabic ? '👑 التمكين وفك التعلق العاطفي' : 'Female Empowerment'}</option>
                      <option value="health">{isArabic ? '🥑 الصحة الهرمونية وتغذية الأمعاء' : 'Hormonal Gut Health'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block text-[11px] font-mono tracking-wider uppercase mb-1.5 ${
                    isLight ? 'text-[#8E7C74]' : 'text-gray-400'
                  }`}>
                    {isArabic ? 'الهدف الرئيسي للتعاون صيفاً:' : 'Key Campaign Objective'}
                  </label>
                  <select 
                    value={clientGoal}
                    onChange={(e) => {
                      setClientGoal(e.target.value);
                      setIsFormSubmitted(true);
                    }}
                    className={`w-full border outline-none rounded-xl p-3 text-xs transition ${
                      isLight 
                        ? 'bg-white border-[#EFEAE3] text-[#2E1D16] focus:border-[#8E4F39]' 
                        : 'bg-[#1A1A1A] border-[#2A2A2A] text-white focus:border-[#D4AF37]'
                    }`}
                  >
                    <option value="reels">{isArabic ? 'اسكريبتات ريلز جاذبة ومعدل انتشار واسع' : 'High-impact viral scripts'}</option>
                    <option value="selling">{isArabic ? 'تأسيس قنوات بيع بالدايركت والتحويل لواتساب' : 'DM-to-WhatsApp selling pipeline'}</option>
                    <option value="consultation">{isArabic ? 'استشارة استراتيجية محتوى متكاملة للعلامة' : 'Full strategic content audit'}</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleSubmitInquiry}
                    className={`w-full rounded-xl py-3 px-4 text-xs font-bold cursor-pointer transition flex items-center justify-center gap-2 shadow-sm ${
                      isLight 
                        ? 'bg-[#8E4F39] text-white hover:bg-[#72321D]' 
                        : 'bg-[#D4AF37] text-black hover:bg-[#C29D2C]'
                    }`}
                  >
                    <Award className="w-4 h-4" />
                    <span>{isArabic ? 'تجهيز قالب الاستفسار' : 'Draft Official Inquiry'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Generated results Display right */}
            <div className={`lg:col-span-6 border rounded-2xl p-6 space-y-5 flex flex-col justify-between ${
              isLight ? 'bg-white border-[#EFEAE3]' : 'bg-[#121110] border-[#262321]'
            }`}>
              <div className="space-y-4">
                <div className={`flex items-center justify-between border-b pb-3 ${
                  isLight ? 'border-[#EFEAE3]' : 'border-[#262321]'
                }`}>
                  <span className={`text-xs font-mono uppercase font-bold flex items-center gap-1.5 ${
                    isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
                  }`}>
                    <MessageSquare className="w-4 h-4" />
                    {isArabic ? 'مسودة خطاب طلب الخدمة الموثق:' : 'Your Official Inquiry Draft:'}
                  </span>
                  <span className="text-[10px] font-mono text-gray-500">Aya Khaled ©</span>
                </div>

                <div className={`border rounded-xl p-4 text-xs leading-relaxed font-serif whitespace-pre-line min-h-[160px] ${
                  isLight ? 'bg-[#FAF5EF] border-[#EFEAE3] text-[#2E1D16]' : 'bg-[#0F0F0F] border-[#2A2A2A] text-gray-300'
                }`}>
                  {generateInquiryTemplate()}
                </div>
              </div>

              <div className={`border-t pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 ${
                isLight ? 'border-[#EFEAE3]' : 'border-[#262321]'
              }`}>
                <span className={`text-[10px] text-center sm:text-left ${
                  isLight ? 'text-[#8E7C74]' : 'text-gray-500'
                }`}>
                  {isArabic ? 'سيتم الرد وتجهيز المقابلة خلال 24 ساعة' : 'Aya responds within 24 business hours.'}
                </span>
                
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleCopyTemplate}
                    className={`flex-1 sm:flex-none px-3 py-2 border rounded-lg text-xs hover:text-white transition cursor-pointer flex items-center justify-center gap-1.5 font-mono ${
                      isLight 
                        ? 'bg-[#FAF5EF] border-[#EFEAE3] text-[#5C4A42] hover:bg-stone-200' 
                        : 'bg-[#1A1A1A] border-[#2A2A2A] text-gray-300 hover:bg-[#1C1A18]'
                    }`}
                  >
                    {copiedTemplate ? (
                      <span className="text-emerald-500 font-bold">{isArabic ? 'تم النسخ!' : 'Copied!'}</span>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{isArabic ? 'نسخ الخطاب' : 'Copy Text'}</span>
                      </>
                    )}
                  </button>
                  
                  <a
                    href={`mailto:${adminBio.email || "aya2017.khalid@gmail.com"}?subject=Strategic Inquiry for ${clientBrand || 'Our Brand'}&body=${encodeURIComponent(generateInquiryTemplate())}`}
                    className={`flex-1 sm:flex-none px-4 py-2 text-xs rounded-lg font-bold transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm ${
                      isLight 
                        ? 'bg-[#8E4F39] text-white hover:bg-[#72321D]' 
                        : 'bg-[#D4AF37] text-black hover:bg-[#C29D2C]'
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'إرسال مباشر' : 'Send Direct'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Three contact info boxes */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className={`border rounded-2xl p-5 flex items-center gap-4 shadow-sm transition-all ${
            isLight ? 'bg-white border-[#EFEAE3]' : 'bg-[#121110] border-[#262321]'
          }`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              isLight ? 'bg-[#FAF5EF] text-[#8E4F39]' : 'bg-[#181615] text-[#D4AF37]'
            }`}>
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className={`text-[9px] font-mono uppercase block font-bold ${
                isLight ? 'text-[#8E7C74]' : 'text-gray-500'
              }`}>
                {isArabic ? 'البريد الإلكتروني' : 'Email address'}
              </span>
              <a href={`mailto:${adminBio.email || "aya2017.khalid@gmail.com"}`} className="text-xs font-mono font-bold hover:underline break-all">
                {adminBio.email || "aya2017.khalid@gmail.com"}
              </a>
            </div>
          </div>

          <div className={`border rounded-2xl p-5 flex items-center gap-4 shadow-sm transition-all ${
            isLight ? 'bg-white border-[#EFEAE3]' : 'bg-[#121110] border-[#262321]'
          }`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              isLight ? 'bg-[#FAF5EF] text-[#8E4F39]' : 'bg-[#181615] text-[#D4AF37]'
            }`}>
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className={`text-[9px] font-mono uppercase block font-bold ${
                isLight ? 'text-[#8E7C74]' : 'text-gray-500'
              }`}>
                {isArabic ? 'الواتساب للبراندات' : 'WhatsApp Line'}
              </span>
              <a href={adminBio.whatsappLink || "https://wa.me/201127867391"} target="_blank" className="text-xs font-mono font-bold hover:underline">
                {adminBio.whatsapp || "+20 11 27867391"}
              </a>
            </div>
          </div>

          <div className={`border rounded-2xl p-5 flex items-center gap-4 shadow-sm transition-all ${
            isLight ? 'bg-white border-[#EFEAE3]' : 'bg-[#121110] border-[#262321]'
          }`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              isLight ? 'bg-[#FAF5EF] text-[#8E4F39]' : 'bg-[#181615] text-[#D4AF37]'
            }`}>
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className={`text-[9px] font-mono uppercase block font-bold ${
                isLight ? 'text-[#8E7C74]' : 'text-gray-500'
              }`}>
                {isArabic ? 'الموقع والمقر الميداني' : 'Location & Operations'}
              </span>
              <span className="text-xs font-bold">
                {isArabic ? (adminBio.locationDetailAr || 'الجيزة / القاهرة، مصر') : (adminBio.locationDetailEn || 'Giza / Cairo, Egypt')}
              </span>
            </div>
          </div>
        </section>

      </main>

      {/* Styled Footer section */}
      <footer className={`border-t py-12 px-6 transition-colors duration-300 mt-20 ${
        isLight ? 'bg-[#FAF5EF] border-[#EFEAE3]' : 'bg-[#151515] border-[#2A2A2A]'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className={`text-lg font-serif font-black tracking-widest uppercase block ${
              isLight ? 'text-[#2E1D16]' : 'text-[#D4AF37]'
            }`}>
              {isArabic ? adminBio.nameAr : adminBio.nameEn}
            </span>
            <span className={`text-xs font-mono block max-w-xl leading-relaxed ${
              isLight ? 'text-[#8E7C74]' : 'text-gray-500'
            }`}>
              {isArabic 
                ? 'أخصائية استراتيجية المحتوى وإدارة مبيعات الدايركت في العقارات الفاخرة وخيارات التمكين وتنمية سلوك الأطفال بالوطن العربي والخليج.'
                : 'Premium Social Media Strategist & High-Ticket Lead Closing Specialist in Egypt and the GCC Region.'}
            </span>
          </div>

          <div className="text-center md:text-right space-y-2 font-mono text-xs">
            <span className={isLight ? 'text-[#2E1D16]' : 'text-gray-400'}>
              {adminBio.email || "aya2017.khalid@gmail.com"}
            </span>
            <p className={`text-[11px] tracking-wide ${
              isLight ? 'text-[#8E7C74]' : 'text-gray-600'
            }`}>
              {isArabic 
                ? 'حقوق الطبع والنشر © 2026 آية خالد. جميع الحقوق محفوظة لعلامتها الفاخرة.'
                : '© 2026 Aya Khaled. All rights reserved. Crafted with clean portfolio alignment.'}
            </p>
          </div>
        </div>
      </footer>

      {/* INTERACTIVE FULL-SCREEN ADMIN PORTAL MODAL */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md" style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
          <div className={`w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col h-[90vh] sm:h-[85vh] border transition-all ${
            isLight ? 'bg-stone-50 border-stone-200 text-[#2E1D16]' : 'bg-[#121110] border-[#222] text-stone-200'
          }`}>
            
            {/* Header Area */}
            <div className={`px-6 py-4 border-b flex items-center justify-between ${
              isLight ? 'bg-white border-stone-200' : 'bg-[#161514] border-[#222]'
            }`}>
              <div className="flex items-center gap-3">
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isLight ? 'bg-[#8E4F39]/10 text-[#8E4F39]' : 'bg-[#D4AF37]/10 text-[#D4AF37]'
                }`}>
                  <Settings className="w-5 h-5 animate-spin-slow" />
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-serif font-black flex items-center gap-2">
                    {isArabic ? 'لوحة تحكم الموقع المتكاملة' : 'Integrated Site Dashboard'}
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">LIVE CONTROL</span>
                  </h2>
                  <p className="text-[10px] text-gray-400">
                    {isArabic ? 'تحكم في نصوص السيرة الذاتية، دراسات الحالة، جداول الكلاندرز، والطلبات الواردة' : 'Control biography, case studies, content calendars, and live client inquiries.'}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsAdminOpen(false)}
                className="p-2 rounded-xl hover:bg-red-500/10 hover:text-red-500 transition cursor-pointer"
                title={isArabic ? 'إغلاق لوحة التحكم' : 'Close Admin'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Layout Body */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
              
              {/* Sidebar Tabs */}
              <div className={`w-full md:w-56 p-4 border-b md:border-b-0 md:border-r flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-x-visible md:overflow-y-auto ${
                isLight ? 'bg-stone-100/50 border-stone-200' : 'bg-[#0E0D0C]/50 border-[#222]'
              }`}>
                {/* Tab 1: Profile & Bio */}
                <button
                  onClick={() => setAdminTab('profile')}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap md:w-full ${
                    adminTab === 'profile'
                      ? isLight ? 'bg-white text-[#8E4F39] shadow-sm' : 'bg-[#1C1A18] text-[#D4AF37] border-l-2 border-[#D4AF37]'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  <span>{isArabic ? 'الملف الشخصي' : 'Bio & Profile'}</span>
                </button>

                {/* Tab 2: Case Studies */}
                <button
                  onClick={() => setAdminTab('cases')}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap md:w-full ${
                    adminTab === 'cases'
                      ? isLight ? 'bg-white text-[#8E4F39] shadow-sm' : 'bg-[#1C1A18] text-[#D4AF37] border-l-2 border-[#D4AF37]'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Database className="w-4 h-4" />
                  <span>{isArabic ? 'معرض الأعمال' : 'Case Studies'}</span>
                </button>

                {/* Tab 3: Content Calendars */}
                <button
                  onClick={() => setAdminTab('calendars')}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap md:w-full ${
                    adminTab === 'calendars'
                      ? isLight ? 'bg-white text-[#8E4F39] shadow-sm' : 'bg-[#1C1A18] text-[#D4AF37] border-l-2 border-[#D4AF37]'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isArabic ? 'جداول الكلاندرز' : 'Content Calendars'}</span>
                </button>

                {/* Tab 4: Inquiries Tracker */}
                <button
                  onClick={() => setAdminTab('inquiries')}
                  className={`flex items-center justify-between gap-2.5 px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap md:w-full ${
                    adminTab === 'inquiries'
                      ? isLight ? 'bg-white text-[#8E4F39] shadow-sm' : 'bg-[#1C1A18] text-[#D4AF37] border-l-2 border-[#D4AF37]'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Inbox className="w-4 h-4" />
                    <span>{isArabic ? 'طلبات التعاون' : 'Client Inquiries'}</span>
                  </div>
                  {inquiries.length > 0 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                      {inquiries.length}
                    </span>
                  )}
                </button>
              </div>

              {/* Main Tab Panels */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {/* TAB 1: PROFILE & BIO FORM */}
                {adminTab === 'profile' && editBioForm && (
                  <div className="space-y-6 max-w-3xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-3 border-stone-200 dark:border-[#222] gap-3">
                      <h3 className="font-serif text-base font-bold">{isArabic ? 'تعديل السيرة الذاتية ومعلومات الهوية' : 'Edit Biography & Brand Identity'}</h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <button
                          onClick={() => {
                            setAdminBio(editBioForm);
                            savePortfolioDataToServer({ adminBio: editBioForm });
                            alert(isArabic ? 'تم حفظ السيرة الذاتية بنجاح!' : 'Biography updated successfully!');
                          }}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                            isLight ? 'bg-[#8E4F39] text-white hover:bg-[#72321D]' : 'bg-[#D4AF37] text-black hover:bg-[#C29D2C]'
                          }`}
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>{isArabic ? 'حفظ التعديلات' : 'Save Changes'}</span>
                        </button>

                        <button
                          onClick={() => {
                            setAdminBio(editBioForm);
                            savePortfolioDataToServer({ adminBio: editBioForm });
                            const serialized = serializeBio(editBioForm);
                            const shareUrl = `${window.location.origin}${window.location.pathname}?p=${serialized}`;
                            navigator.clipboard.writeText(shareUrl).then(() => {
                              alert(isArabic 
                                ? 'تم حفظ التعديلات بنجاح ونسخ رابط السيرة الذاتية المعدّلة مع الصورة لمشاركته مع أي شخص!' 
                                : 'Changes saved successfully and custom profile share link copied to clipboard!');
                            });
                          }}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer border ${
                            isLight 
                              ? 'bg-white border-[#8E4F39] text-[#8E4F39] hover:bg-[#8E4F39]/5' 
                              : 'bg-[#121212] border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/5'
                          }`}
                          title={isArabic ? 'نسخ الرابط لمشاركته مع الآخرين بالصورة والبيانات الجديدة' : 'Copy link to share with others with new image & details'}
                        >
                          <Share2 className="w-3.5 h-3.5" />
                          <span>{isArabic ? 'حفظ ومشاركة الرابط' : 'Save & Share Link'}</span>
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name AR */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'الاسم (عربي)' : 'Name (Arabic)'}</label>
                        <input
                          type="text"
                          value={editBioForm.nameAr || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, nameAr: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>
                      {/* Name EN */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'الاسم (إنجليزي)' : 'Name (English)'}</label>
                        <input
                          type="text"
                          value={editBioForm.nameEn || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, nameEn: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* Title AR */}
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'اللقب المهني (عربي)' : 'Professional Title (Arabic)'}</label>
                        <input
                          type="text"
                          value={editBioForm.titleAr || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, titleAr: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>
                      {/* Title EN */}
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'اللقب المهني (إنجليزي)' : 'Professional Title (English)'}</label>
                        <input
                          type="text"
                          value={editBioForm.titleEn || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, titleEn: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* Bio Description AR */}
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'نبذة السيرة الذاتية (عربي)' : 'Biography Description (Arabic)'}</label>
                        <textarea
                          rows={4}
                          value={editBioForm.bioAr || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, bioAr: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none font-sans leading-relaxed ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>
                      {/* Bio Description EN */}
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'نبذة السيرة الذاتية (إنجليزي)' : 'Biography Description (English)'}</label>
                        <textarea
                          rows={4}
                          value={editBioForm.bioEn || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, bioEn: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none font-sans leading-relaxed ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* Verified Badge Details */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'تسمية التوثيق (عربي)' : 'Verified Badge Label (Arabic)'}</label>
                        <input
                          type="text"
                          value={editBioForm.verifiedAr || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, verifiedAr: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'تسمية التوثيق (إنجليزي)' : 'Verified Badge Label (English)'}</label>
                        <input
                          type="text"
                          value={editBioForm.verifiedEn || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, verifiedEn: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* Brief tagline on image card */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'وصف الكارد العائم (عربي)' : 'Brief Tagline on Portrait Card (Arabic)'}</label>
                        <input
                          type="text"
                          value={editBioForm.descBriefAr || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, descBriefAr: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'وصف الكارد العائم (إنجليزي)' : 'Brief Tagline on Portrait Card (English)'}</label>
                        <input
                          type="text"
                          value={editBioForm.descBriefEn || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, descBriefEn: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* Location details */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'موقع العمل (عربي)' : 'Location (Arabic)'}</label>
                        <input
                          type="text"
                          value={editBioForm.locationAr || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, locationAr: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'موقع العمل (إنجليزي)' : 'Location (English)'}</label>
                        <input
                          type="text"
                          value={editBioForm.locationEn || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, locationEn: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* CONTACT INFO SECTION HEADER */}
                      <div className="md:col-span-2 pt-4 border-t border-stone-100 dark:border-[#222]">
                        <h4 className="font-serif text-sm font-bold text-[#8E4F39] dark:text-[#D4AF37]">
                          {isArabic ? 'صورة الملف الشخصي وبيانات التواصل' : 'Profile Photo & Contact Information'}
                        </h4>
                      </div>

                      {/* Portrait Image Upload & URL */}
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                          {isArabic ? 'صورة الملف الشخصي' : 'Profile Picture'}
                        </label>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
                          {/* Preview box */}
                          <div className={`relative h-32 rounded-lg border flex items-center justify-center overflow-hidden ${
                            isLight ? 'bg-stone-50 border-stone-200' : 'bg-[#141414] border-[#222]'
                          }`}>
                            <img 
                              src={editBioForm.portraitUrl || portraitImg} 
                              alt="Profile Preview" 
                              className="w-full h-full object-cover"
                            />
                            {editBioForm.portraitUrl && (
                              <button
                                type="button"
                                onClick={() => setEditBioForm({ ...editBioForm, portraitUrl: "" })}
                                className="absolute top-1.5 right-1.5 bg-red-600 hover:bg-red-700 text-white p-1 rounded-full text-[10px] z-10 cursor-pointer"
                                title={isArabic ? "حذف واستعادة الافتراضي" : "Delete and restore default"}
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>

                          {/* Upload Area / Dropzone */}
                          <div className="sm:col-span-2">
                            <label 
                              className={`flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-lg transition relative ${
                                isUploadingImage ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
                              } ${
                                isLight 
                                  ? 'bg-stone-50 border-stone-200 hover:bg-stone-100/70 hover:border-[#8E4F39]' 
                                  : 'bg-[#111] border-[#222] hover:bg-[#151515] hover:border-[#D4AF37]'
                              }`}
                              onDragOver={(e) => { e.preventDefault(); }}
                              onDrop={(e) => {
                                e.preventDefault();
                                if (isUploadingImage) return;
                                const file = e.dataTransfer.files?.[0];
                                if (file && file.type.startsWith('image/')) {
                                  handleImageUpload(file);
                                }
                              }}
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4 text-center">
                                {isUploadingImage ? (
                                  <>
                                    <div className="w-6 h-6 border-2 border-t-transparent animate-spin rounded-full mb-2 border-stone-500"></div>
                                    <p className="text-xs font-bold mb-0.5 text-stone-400">
                                      {isArabic ? 'جارٍ رفع الصورة وتثبيتها سحابياً...' : 'Uploading & securing to Cloud Storage...'}
                                    </p>
                                    <p className="text-[10px] text-stone-400">
                                      {isArabic ? 'برجاء الانتظار للحصول على الرابط الدائم' : 'Please wait while we receive the secure link.'}
                                    </p>
                                  </>
                                ) : (
                                  <>
                                    <Upload className={`w-6 h-6 mb-1.5 ${isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'}`} />
                                    <p className="text-xs font-bold mb-0.5">
                                      {isArabic ? 'اضغط لرفع صورة أو اسحبها هنا واثبتها' : 'Click to upload portrait or drag & drop to lock it'}
                                    </p>
                                    <p className="text-[10px] text-stone-400">
                                      {isArabic ? 'سيتم رفع الصورة تلقائياً لخادم سحابي دائم وآمن' : 'Your image will be stored on a secure, permanent cloud.'}
                                    </p>
                                  </>
                                )}
                              </div>
                              <input 
                                type="file" 
                                accept="image/*" 
                                className="hidden" 
                                disabled={isUploadingImage}
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    handleImageUpload(file);
                                  }
                                }}
                              />
                            </label>

                            {uploadError && (
                              <div className="mt-1.5 text-[10px] text-red-500 font-bold bg-red-500/10 p-2 rounded border border-red-500/20">
                                {uploadError}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Direct URL Input fallback */}
                        <div className="space-y-1 mt-1">
                          <label className="text-[9px] uppercase font-bold tracking-wider text-stone-500 block">
                            {isArabic ? 'أو أدخل رابط الصورة مباشرة (URL)' : 'Or enter direct image URL'}
                          </label>
                          <input
                            type="text"
                            placeholder="https://images.unsplash.com/..."
                            value={editBioForm.portraitUrl?.startsWith('data:') ? '' : (editBioForm.portraitUrl || '')}
                            onChange={(e) => setEditBioForm({ ...editBioForm, portraitUrl: e.target.value })}
                            className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                            }`}
                          />
                        </div>

                      </div>

                      {/* Email address */}
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'البريد الإلكتروني' : 'Email Address'}</label>
                        <input
                          type="email"
                          value={editBioForm.email || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, email: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* WhatsApp number */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'رقم الواتساب للعرض' : 'WhatsApp Number (Display)'}</label>
                        <input
                          type="text"
                          value={editBioForm.whatsapp || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, whatsapp: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* WhatsApp API link */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'رابط الواتساب المباشر' : 'WhatsApp Link (URL)'}</label>
                        <input
                          type="text"
                          value={editBioForm.whatsappLink || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, whatsappLink: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* LinkedIn URL */}
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'رابط حساب لينكد إن' : 'LinkedIn URL'}</label>
                        <input
                          type="text"
                          value={editBioForm.linkedin || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, linkedin: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* LinkedIn labels */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'اسم رابط لينكد إن (عربي)' : 'LinkedIn Label (Arabic)'}</label>
                        <input
                          type="text"
                          value={editBioForm.linkedinLabelAr || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, linkedinLabelAr: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'اسم رابط لينكد إن (إنجليزي)' : 'LinkedIn Label (English)'}</label>
                        <input
                          type="text"
                          value={editBioForm.linkedinLabelEn || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, linkedinLabelEn: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* Location and Operations Detail (bottom boxes) */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'تفاصيل المقر للعرض (عربي)' : 'Operations Location Label (Arabic)'}</label>
                        <input
                          type="text"
                          value={editBioForm.locationDetailAr || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, locationDetailAr: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'تفاصيل المقر للعرض (إنجليزي)' : 'Operations Location Label (English)'}</label>
                        <input
                          type="text"
                          value={editBioForm.locationDetailEn || ''}
                          onChange={(e) => setEditBioForm({ ...editBioForm, locationDetailEn: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* STATS SECTION HEADER */}
                      <div className="md:col-span-2 pt-4 border-t border-stone-100 dark:border-[#222]">
                        <h4 className="font-serif text-sm font-bold text-[#8E4F39] dark:text-[#D4AF37]">
                          {isArabic ? 'الإحصائيات والأرقام (البار العلوي)' : 'Stats & Achievements (Top Bar)'}
                        </h4>
                      </div>

                      {/* Stat 1 */}
                      <div className="md:col-span-2 grid grid-cols-3 gap-2 border p-3 rounded-lg border-stone-100 dark:border-[#222]">
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-stone-400">{isArabic ? 'القيمة' : 'Value'}</label>
                          <input
                            type="text"
                            value={editBioForm.stat1Value || ''}
                            onChange={(e) => setEditBioForm({ ...editBioForm, stat1Value: e.target.value })}
                            className={`w-full p-1.5 border rounded text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                            }`}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-stone-400">{isArabic ? 'العنوان (عربي)' : 'Label (AR)'}</label>
                          <input
                            type="text"
                            value={editBioForm.stat1LabelAr || ''}
                            onChange={(e) => setEditBioForm({ ...editBioForm, stat1LabelAr: e.target.value })}
                            className={`w-full p-1.5 border rounded text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                            }`}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-stone-400">{isArabic ? 'العنوان (إنجليزي)' : 'Label (EN)'}</label>
                          <input
                            type="text"
                            value={editBioForm.stat1LabelEn || ''}
                            onChange={(e) => setEditBioForm({ ...editBioForm, stat1LabelEn: e.target.value })}
                            className={`w-full p-1.5 border rounded text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Stat 2 */}
                      <div className="md:col-span-2 grid grid-cols-3 gap-2 border p-3 rounded-lg border-stone-100 dark:border-[#222]">
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-stone-400">{isArabic ? 'القيمة' : 'Value'}</label>
                          <input
                            type="text"
                            value={editBioForm.stat2Value || ''}
                            onChange={(e) => setEditBioForm({ ...editBioForm, stat2Value: e.target.value })}
                            className={`w-full p-1.5 border rounded text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                            }`}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-stone-400">{isArabic ? 'العنوان (عربي)' : 'Label (AR)'}</label>
                          <input
                            type="text"
                            value={editBioForm.stat2LabelAr || ''}
                            onChange={(e) => setEditBioForm({ ...editBioForm, stat2LabelAr: e.target.value })}
                            className={`w-full p-1.5 border rounded text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                            }`}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-stone-400">{isArabic ? 'العنوان (إنجليزي)' : 'Label (EN)'}</label>
                          <input
                            type="text"
                            value={editBioForm.stat2LabelEn || ''}
                            onChange={(e) => setEditBioForm({ ...editBioForm, stat2LabelEn: e.target.value })}
                            className={`w-full p-1.5 border rounded text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Stat 3 */}
                      <div className="md:col-span-2 grid grid-cols-3 gap-2 border p-3 rounded-lg border-stone-100 dark:border-[#222]">
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-stone-400">{isArabic ? 'القيمة' : 'Value'}</label>
                          <input
                            type="text"
                            value={editBioForm.stat3Value || ''}
                            onChange={(e) => setEditBioForm({ ...editBioForm, stat3Value: e.target.value })}
                            className={`w-full p-1.5 border rounded text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                            }`}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-stone-400">{isArabic ? 'العنوان (عربي)' : 'Label (AR)'}</label>
                          <input
                            type="text"
                            value={editBioForm.stat3LabelAr || ''}
                            onChange={(e) => setEditBioForm({ ...editBioForm, stat3LabelAr: e.target.value })}
                            className={`w-full p-1.5 border rounded text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                            }`}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-stone-400">{isArabic ? 'العنوان (إنجليزي)' : 'Label (EN)'}</label>
                          <input
                            type="text"
                            value={editBioForm.stat3LabelEn || ''}
                            onChange={(e) => setEditBioForm({ ...editBioForm, stat3LabelEn: e.target.value })}
                            className={`w-full p-1.5 border rounded text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Stat 4 */}
                      <div className="md:col-span-2 grid grid-cols-3 gap-2 border p-3 rounded-lg border-stone-100 dark:border-[#222]">
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-stone-400">{isArabic ? 'القيمة' : 'Value'}</label>
                          <input
                            type="text"
                            value={editBioForm.stat4Value || ''}
                            onChange={(e) => setEditBioForm({ ...editBioForm, stat4Value: e.target.value })}
                            className={`w-full p-1.5 border rounded text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                            }`}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-stone-400">{isArabic ? 'العنوان (عربي)' : 'Label (AR)'}</label>
                          <input
                            type="text"
                            value={editBioForm.stat4LabelAr || ''}
                            onChange={(e) => setEditBioForm({ ...editBioForm, stat4LabelAr: e.target.value })}
                            className={`w-full p-1.5 border rounded text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                            }`}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-stone-400">{isArabic ? 'العنوان (إنجليزي)' : 'Label (EN)'}</label>
                          <input
                            type="text"
                            value={editBioForm.stat4LabelEn || ''}
                            onChange={(e) => setEditBioForm({ ...editBioForm, stat4LabelEn: e.target.value })}
                            className={`w-full p-1.5 border rounded text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                            }`}
                          />
                        </div>
                      </div>

                    </div>

                    <div className="pt-6 border-t border-stone-200 dark:border-[#222]">
                      <button
                        onClick={() => {
                          if (confirm(isArabic ? 'هل تريد استعادة البيانات الافتراضية للموقع بالكامل؟ سيؤدي هذا لمسح جميع التغييرات.' : 'Are you sure you want to restore default site data? This resets all edits.')) {
                            localStorage.removeItem('aya_case_studies');
                            localStorage.removeItem('aya_pdf_case_studies');
                            localStorage.removeItem('aya_amira_sheet_rows');
                            localStorage.removeItem('aya_admin_bio');
                            localStorage.removeItem('aya_inquiries');
                            window.location.reload();
                          }
                        }}
                        className="px-5 py-2.5 rounded-xl text-xs font-bold text-red-500 bg-red-500/10 hover:bg-red-500/20 transition cursor-pointer"
                      >
                        {isArabic ? 'إعادة ضبط مصنع البيانات بالكامل' : 'Reset All Local Data to Default'}
                      </button>
                    </div>
                  </div>
                )}

                {/* TAB 2: CASE STUDIES LIST & FORM */}
                {adminTab === 'cases' && editCaseForm && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b pb-3 border-stone-200 dark:border-[#222]">
                      <div className="flex items-center gap-3">
                        <label className="text-xs font-bold text-gray-400">{isArabic ? 'اختر دراسة الحالة:' : 'Select Case Study:'}</label>
                        <select
                          value={selectedAdminCaseId}
                          onChange={(e) => setSelectedAdminCaseId(e.target.value)}
                          className={`p-1.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        >
                          {caseStudies.map(c => (
                            <option key={c.id} value={c.id}>{isArabic ? c.titleAr : c.titleEn}</option>
                          ))}
                        </select>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleAddNewCase}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>{isArabic ? 'إضافة حالة دراسة' : 'Add Case Study'}</span>
                        </button>
                        <button
                          onClick={() => handleDeleteCaseStudy(selectedAdminCaseId)}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-red-600 hover:bg-red-700 text-white transition cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>{isArabic ? 'حذف الحالية' : 'Delete Selected'}</span>
                        </button>
                        <button
                          onClick={handleSaveCaseStudy}
                          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                            isLight ? 'bg-[#8E4F39] text-white' : 'bg-[#D4AF37] text-black'
                          }`}
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>{isArabic ? 'حفظ الحالية' : 'Save Changes'}</span>
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                      {/* Accent Color */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'اللون التميزي للكارد' : 'Card Theme Accent Color'}</label>
                        <input
                          type="color"
                          value={editCaseForm.accentColor || '#8E4F39'}
                          onChange={(e) => setEditCaseForm({ ...editCaseForm, accentColor: e.target.value })}
                          className="w-full h-9 rounded-lg cursor-pointer border-none outline-none"
                        />
                      </div>
                      
                      {/* Niche Category */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'مجال براند دراسة الحالة' : 'Brand Niche Category'}</label>
                        <select
                          value={editCaseForm.category}
                          onChange={(e) => setEditCaseForm({ ...editCaseForm, category: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        >
                          <option value="realstate">{isArabic ? 'العقارات والاستثمار الفاخر' : 'Luxury Real Estate'}</option>
                          <option value="parenting">{isArabic ? 'تنمية الطفل والسلوك' : 'Child Development'}</option>
                          <option value="relationships">{isArabic ? 'العلاقات الأسرية والزوجية' : 'Relationships & Family'}</option>
                          <option value="empowerment">{isArabic ? 'التمكين وتقدير الذات' : 'Female Empowerment'}</option>
                          <option value="hormonal">{isArabic ? 'الصحة الهرمونية والغذائية' : 'Hormonal & Gut Health'}</option>
                        </select>
                      </div>

                      {/* Title AR */}
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'العنوان الجاذب (عربي)' : 'Attractive Title (Arabic)'}</label>
                        <input
                          type="text"
                          value={editCaseForm.titleAr || ''}
                          onChange={(e) => setEditCaseForm({ ...editCaseForm, titleAr: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>
                      {/* Title EN */}
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'العنوان الجاذب (إنجليزي)' : 'Attractive Title (English)'}</label>
                        <input
                          type="text"
                          value={editCaseForm.titleEn || ''}
                          onChange={(e) => setEditCaseForm({ ...editCaseForm, titleEn: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* Client AR */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'العميل/البراند (عربي)' : 'Client/Brand (Arabic)'}</label>
                        <input
                          type="text"
                          value={editCaseForm.clientAr || ''}
                          onChange={(e) => setEditCaseForm({ ...editCaseForm, clientAr: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>
                      {/* Client EN */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'العميل/البراند (إنجليزي)' : 'Client/Brand (English)'}</label>
                        <input
                          type="text"
                          value={editCaseForm.clientEn || ''}
                          onChange={(e) => setEditCaseForm({ ...editCaseForm, clientEn: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* Challenge AR */}
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'التحدي التسويقي (عربي)' : 'Marketing Challenge (Arabic)'}</label>
                        <textarea
                          rows={2}
                          value={editCaseForm.challengeAr || ''}
                          onChange={(e) => setEditCaseForm({ ...editCaseForm, challengeAr: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>
                      {/* Challenge EN */}
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'التحدي التسويقي (إنجليزي)' : 'Marketing Challenge (English)'}</label>
                        <textarea
                          rows={2}
                          value={editCaseForm.challengeEn || ''}
                          onChange={(e) => setEditCaseForm({ ...editCaseForm, challengeEn: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* Strategy AR */}
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'الخطة الاستراتيجية (عربي)' : 'The Strategy (Arabic)'}</label>
                        <textarea
                          rows={2}
                          value={editCaseForm.strategyAr || ''}
                          onChange={(e) => setEditCaseForm({ ...editCaseForm, strategyAr: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>
                      {/* Strategy EN */}
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'الخطة الاستراتيجية (إنجليزي)' : 'The Strategy (English)'}</label>
                        <textarea
                          rows={2}
                          value={editCaseForm.strategyEn || ''}
                          onChange={(e) => setEditCaseForm({ ...editCaseForm, strategyEn: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* Impact AR */}
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'الأثر والنتائج والمبيعات (عربي)' : 'Impact & Conversion Metrics (Arabic)'}</label>
                        <textarea
                          rows={2}
                          value={editCaseForm.impactAr || ''}
                          onChange={(e) => setEditCaseForm({ ...editCaseForm, impactAr: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>
                      {/* Impact EN */}
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'الأثر والنتائج والمبيعات (إنجليزي)' : 'Impact & Conversion Metrics (English)'}</label>
                        <textarea
                          rows={2}
                          value={editCaseForm.impactEn || ''}
                          onChange={(e) => setEditCaseForm({ ...editCaseForm, impactEn: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* Metrics Editor (Dynamic) */}
                      <div className="md:col-span-2 border p-4 rounded-xl space-y-4 border-stone-200 dark:border-[#222]">
                        <span className="text-xs font-bold block border-b pb-1 border-stone-200 dark:border-[#222]">{isArabic ? 'مؤشرات الأداء الرئيسية (KPIs)' : 'KPI Impact Metrics (Three items)'}</span>
                        {editCaseForm.metrics?.map((met: any, idx: number) => (
                          <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <input
                              type="text"
                              value={met.value || ''}
                              placeholder={isArabic ? 'القيمة (مثال: +150%)' : 'Value (e.g., +150%)'}
                              onChange={(e) => {
                                const metricsCopy = [...editCaseForm.metrics];
                                metricsCopy[idx].value = e.target.value;
                                setEditCaseForm({ ...editCaseForm, metrics: metricsCopy });
                              }}
                              className={`p-2 border rounded-lg text-xs outline-none font-mono font-bold ${
                                isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                              }`}
                            />
                            <input
                              type="text"
                              value={met.labelAr || ''}
                              placeholder={isArabic ? 'التسمية بالعربية' : 'Label (Arabic)'}
                              onChange={(e) => {
                                const metricsCopy = [...editCaseForm.metrics];
                                metricsCopy[idx].labelAr = e.target.value;
                                setEditCaseForm({ ...editCaseForm, metrics: metricsCopy });
                              }}
                              className={`p-2 border rounded-lg text-xs outline-none ${
                                isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                              }`}
                            />
                            <input
                              type="text"
                              value={met.labelEn || ''}
                              placeholder={isArabic ? 'التسمية بالإنجليزية' : 'Label (English)'}
                              onChange={(e) => {
                                const metricsCopy = [...editCaseForm.metrics];
                                metricsCopy[idx].labelEn = e.target.value;
                                setEditCaseForm({ ...editCaseForm, metrics: metricsCopy });
                              }}
                              className={`p-2 border rounded-lg text-xs outline-none ${
                                isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                              }`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: CONTENT CALENDARS & INTERACTIVE SHEETS SPREADSHEETS */}
                {adminTab === 'calendars' && editPdfForm && (
                  <div className="space-y-6">
                    {/* General Section Settings */}
                    <div className={`p-5 rounded-[1.8rem] border ${
                      isLight ? 'bg-amber-50/40 border-[#F5EBE4]' : 'bg-[#181514] border-[#2E2421]'
                    } space-y-4`}>
                      <h4 className="font-serif text-xs sm:text-sm font-bold text-[#8E4F39] dark:text-[#D4AF37] flex items-center gap-2">
                        <FolderOpen className="w-4 h-4" />
                        <span>{isArabic ? 'تعديل نصوص وعناوين قسم الملفات بالداشبورد' : 'Edit Section Headings & Drive Stats'}</span>
                      </h4>
                      <p className="text-[10px] text-stone-500 dark:text-stone-400">
                        {isArabic 
                          ? 'تحكم في العناوين والوصف ومساحة التخزين التي تظهر للزوار في قسم عينات العمل الفعلي (#real-work-samples).' 
                          : 'Control the headings, description, and storage stats shown to visitors in the real work samples section.'}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Subtitle */}
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">
                            {isArabic ? 'العنوان الفرعي للقسم (عربي)' : 'Section Subtitle (Arabic)'}
                          </label>
                          <input
                            type="text"
                            value={realWorkSection.subtitleAr}
                            onChange={(e) => setRealWorkSection({ ...realWorkSection, subtitleAr: e.target.value })}
                            className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200 text-[#2E1D16]' : 'bg-[#1c1c1b] border-[#222] text-white'
                            }`}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">
                            {isArabic ? 'العنوان الفرعي للقسم (إنجليزي)' : 'Section Subtitle (English)'}
                          </label>
                          <input
                            type="text"
                            value={realWorkSection.subtitleEn}
                            onChange={(e) => setRealWorkSection({ ...realWorkSection, subtitleEn: e.target.value })}
                            className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200 text-[#2E1D16]' : 'bg-[#1c1c1b] border-[#222] text-white'
                            }`}
                          />
                        </div>

                        {/* Title */}
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">
                            {isArabic ? 'العنوان الرئيسي للقسم (عربي)' : 'Section Title (Arabic)'}
                          </label>
                          <input
                            type="text"
                            value={realWorkSection.titleAr}
                            onChange={(e) => setRealWorkSection({ ...realWorkSection, titleAr: e.target.value })}
                            className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200 text-[#2E1D16]' : 'bg-[#1c1c1b] border-[#222] text-white'
                            }`}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">
                            {isArabic ? 'العنوان الرئيسي للقسم (إنجليزي)' : 'Section Title (English)'}
                          </label>
                          <input
                            type="text"
                            value={realWorkSection.titleEn}
                            onChange={(e) => setRealWorkSection({ ...realWorkSection, titleEn: e.target.value })}
                            className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200 text-[#2E1D16]' : 'bg-[#1c1c1b] border-[#222] text-white'
                            }`}
                          />
                        </div>

                        {/* Description */}
                        <div className="space-y-1 md:col-span-2">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">
                            {isArabic ? 'وصف القسم (عربي)' : 'Section Description (Arabic)'}
                          </label>
                          <textarea
                            rows={2}
                            value={realWorkSection.descAr}
                            onChange={(e) => setRealWorkSection({ ...realWorkSection, descAr: e.target.value })}
                            className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200 text-[#2E1D16]' : 'bg-[#1c1c1b] border-[#222] text-white'
                            }`}
                          />
                        </div>
                        <div className="space-y-1 md:col-span-2">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">
                            {isArabic ? 'وصف القسم (إنجليزي)' : 'Section Description (English)'}
                          </label>
                          <textarea
                            rows={2}
                            value={realWorkSection.descEn}
                            onChange={(e) => setRealWorkSection({ ...realWorkSection, descEn: e.target.value })}
                            className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200 text-[#2E1D16]' : 'bg-[#1c1c1b] border-[#222] text-white'
                            }`}
                          />
                        </div>

                        {/* Storage Stat Text */}
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">
                            {isArabic ? 'حالة التخزين / الإحصائية (عربي)' : 'Storage/Drive Stat (Arabic)'}
                          </label>
                          <input
                            type="text"
                            value={realWorkSection.storageAr}
                            onChange={(e) => setRealWorkSection({ ...realWorkSection, storageAr: e.target.value })}
                            className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200 text-[#2E1D16]' : 'bg-[#1c1c1b] border-[#222] text-white'
                            }`}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">
                            {isArabic ? 'حالة التخزين / الإحصائية (إنجليزي)' : 'Storage/Drive Stat (English)'}
                          </label>
                          <input
                            type="text"
                            value={realWorkSection.storageEn}
                            onChange={(e) => setRealWorkSection({ ...realWorkSection, storageEn: e.target.value })}
                            className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200 text-[#2E1D16]' : 'bg-[#1c1c1b] border-[#222] text-white'
                            }`}
                          />
                        </div>

                        <div className="md:col-span-2 pt-2 flex justify-end">
                          <button
                            onClick={() => {
                              savePortfolioDataToServer({ realWorkSection });
                              alert(isArabic ? 'تم حفظ إعدادات القسم والمساحة بنجاح!' : 'Drive section and storage settings saved successfully!');
                            }}
                            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                              isLight ? 'bg-[#8E4F39] text-white hover:bg-[#72321D]' : 'bg-[#D4AF37] text-black hover:bg-[#C29D2C]'
                            }`}
                          >
                            <Save className="w-3.5 h-3.5" />
                            <span>{isArabic ? 'حفظ إعدادات العناوين' : 'Save Section Headings'}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b pb-3 border-stone-200 dark:border-[#222]">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <label className="text-xs font-bold text-gray-400">{isArabic ? 'اختر الملف:' : 'Select File:'}</label>
                          <select
                            value={selectedAdminPdfId}
                            onChange={(e) => setSelectedAdminPdfId(e.target.value)}
                            className={`p-1.5 border rounded-lg text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                            }`}
                          >
                            {pdfCaseStudies.map(p => (
                              <option key={p.id} value={p.id}>{isArabic ? p.titleAr : p.titleEn}</option>
                            ))}
                          </select>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <label className="text-xs font-bold text-gray-400">{isArabic ? 'الصفحة:' : 'Page:'}</label>
                          <select
                            value={selectedAdminPageNum}
                            onChange={(e) => setSelectedAdminPageNum(Number(e.target.value))}
                            className={`p-1.5 border rounded-lg text-xs outline-none ${
                              isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                            }`}
                          >
                            {editPdfForm.pages?.map((pg: any) => (
                              <option key={pg.pageNum} value={pg.pageNum}>{isArabic ? `صفحة ${pg.pageNum}` : `Page ${pg.pageNum}`}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleAddNewPdfFile}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>{isArabic ? 'إضافة ملف' : 'Add File'}</span>
                        </button>
                        <button
                          onClick={() => handleDeletePdfFile(selectedAdminPdfId)}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-red-600 hover:bg-red-700 text-white transition cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>{isArabic ? 'حذف الحالي' : 'Delete Selected'}</span>
                        </button>
                        <button
                          onClick={handleSavePdfFileMetadata}
                          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                            isLight ? 'bg-[#8E4F39] text-white' : 'bg-[#D4AF37] text-black'
                          }`}
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>{isArabic ? 'حفظ البيانات' : 'Save Metadata'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Metadata Settings */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl border-b pb-6 border-stone-200 dark:border-[#222]">
                      {/* Title AR */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'عنوان ملف الكلاندر (عربي)' : 'File Title (Arabic)'}</label>
                        <input
                          type="text"
                          value={editPdfForm.titleAr || ''}
                          onChange={(e) => setEditPdfForm({ ...editPdfForm, titleAr: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>
                      {/* Title EN */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'عنوان ملف الكلاندر (إنجليزي)' : 'File Title (English)'}</label>
                        <input
                          type="text"
                          value={editPdfForm.titleEn || ''}
                          onChange={(e) => setEditPdfForm({ ...editPdfForm, titleEn: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* Desc AR */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'وصف الملف (عربي)' : 'File Description (Arabic)'}</label>
                        <input
                          type="text"
                          value={editPdfForm.descAr || ''}
                          onChange={(e) => setEditPdfForm({ ...editPdfForm, descAr: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>
                      {/* Desc EN */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'وصف الملف (إنجليزي)' : 'File Description (English)'}</label>
                        <input
                          type="text"
                          value={editPdfForm.descEn || ''}
                          onChange={(e) => setEditPdfForm({ ...editPdfForm, descEn: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* Category AR */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'تصنيف الملف (عربي)' : 'File Category (Arabic)'}</label>
                        <input
                          type="text"
                          value={editPdfForm.categoryAr || ''}
                          onChange={(e) => setEditPdfForm({ ...editPdfForm, categoryAr: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>
                      {/* Category EN */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'تصنيف الملف (إنجليزي)' : 'File Category (English)'}</label>
                        <input
                          type="text"
                          value={editPdfForm.categoryEn || ''}
                          onChange={(e) => setEditPdfForm({ ...editPdfForm, categoryEn: e.target.value })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* Total Pages */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'عدد الصفحات الكلي' : 'Total Pages Count'}</label>
                        <input
                          type="number"
                          value={editPdfForm.totalPages || 1}
                          onChange={(e) => setEditPdfForm({ ...editPdfForm, totalPages: Number(e.target.value) })}
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>

                      {/* External Google Sheets Link */}
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">
                          {isArabic ? 'رابط ملف Google Sheets الخارجي (اختياري)' : 'External Google Sheets Link (Optional)'}
                        </label>
                        <input
                          type="text"
                          value={editPdfForm.externalUrl || ''}
                          onChange={(e) => setEditPdfForm({ ...editPdfForm, externalUrl: e.target.value })}
                          placeholder="https://docs.google.com/spreadsheets/..."
                          className={`w-full p-2.5 border rounded-lg text-xs outline-none ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#1a1a1a] border-[#222]'
                          }`}
                        />
                      </div>
                    </div>

                    {/* SPREADSHEET NESTED ROWS EDITOR */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif text-sm font-bold text-[#8E4F39] dark:text-[#D4AF37] flex items-center gap-2">
                          <Table className="w-4 h-4" />
                          <span>{isArabic ? `تعديل خلايا جدول الصفحة ${selectedAdminPageNum}` : `Edit Cells for Page ${selectedAdminPageNum}`}</span>
                        </h4>
                        <button
                          onClick={() => {
                            const newRow = {
                              hookAr: 'هوك بيعي جذاب جديد للتأثير المباشر',
                              hookEn: 'Brand-New Direct Response Conversion Hook',
                              directionAr: 'فيديو ريلز مع نبرة صوتية واثقة وكابشن مقنع بالتعليقات',
                              directionEn: 'Visual reel with high-energy voiceover and custom CTA',
                              scriptAr: 'سيناريو تسويقي: أود إخبارك بأقصر الطرق لزيادة مبيعاتك...',
                              scriptEn: 'Video script outline: Today we break down how to optimize conversions...',
                              captionAr: 'كابشن تفصيلي للتفاعل والمشاركة مع الفئة المستهدفة واستطلاع وعي.',
                              captionEn: 'Detailed conversion-oriented caption outline for organic scaling.',
                              storyAr: 'ستوري تفاعلي لاستقطاب العملاء المحتملين وتوليد مكالمات استشارية.',
                              storyEn: 'Interactive story layout targeting active brand inquiries.'
                            };
                            const currentRows = [
                              ...(selectedAdminPdfId === 'pdf-amira' && selectedAdminPageNum === 1
                                ? amiraSheetRows
                                : (editPdfForm.pages?.find((p: any) => p.pageNum === selectedAdminPageNum)?.sections.map((sec: any) => {
                                    const parts = (sec.contentAr || '').split('\n');
                                    return {
                                      hookAr: sec.hookAr || sec.titleAr || '',
                                      hookEn: sec.hookEn || sec.titleEn || '',
                                      directionAr: sec.directionAr || "لقطات ملائمة مع نبرة هادئة",
                                      directionEn: sec.directionEn || "Appropriate visuals with calm voiceover",
                                      scriptAr: sec.scriptAr || parts[0] || sec.contentAr || '',
                                      scriptEn: sec.scriptEn || (sec.contentEn || '').split('\n')[0] || sec.contentEn || '',
                                      captionAr: sec.captionAr || parts[1] || sec.contentAr || '',
                                      captionEn: sec.captionEn || sec.contentEn || '',
                                      storyAr: sec.storyAr || "استطلاع تفاعلي",
                                      storyEn: sec.storyEn || "Interactive poll"
                                    };
                                  }) || []))
                            ];
                            handleSaveSpreadsheetRows([...currentRows, newRow]);
                          }}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>{isArabic ? 'إضافة صف جديد للجدول' : 'Add New Spreadsheet Row'}</span>
                        </button>
                      </div>

                      <div className="space-y-3">
                        {/* Map active rows to editable cards */}
                        {(selectedAdminPdfId === 'pdf-amira' && selectedAdminPageNum === 1
                          ? amiraSheetRows
                          : (editPdfForm.pages?.find((p: any) => p.pageNum === selectedAdminPageNum)?.sections.map((sec: any) => {
                              const parts = (sec.contentAr || '').split('\n');
                              return {
                                hookAr: sec.hookAr || sec.titleAr || '',
                                hookEn: sec.hookEn || sec.titleEn || '',
                                directionAr: sec.directionAr || "لقطات ملائمة مع نبرة هادئة",
                                directionEn: sec.directionEn || "Appropriate visuals with calm voiceover",
                                scriptAr: sec.scriptAr || parts[0] || sec.contentAr || '',
                                scriptEn: sec.scriptEn || (sec.contentEn || '').split('\n')[0] || sec.contentEn || '',
                                captionAr: sec.captionAr || parts[1] || sec.contentAr || '',
                                captionEn: sec.captionEn || sec.contentEn || '',
                                storyAr: sec.storyAr || "استطلاع تفاعلي",
                                storyEn: sec.storyEn || "Interactive poll"
                              };
                            }) || [])
                        ).map((row: any, rIdx: number) => (
                          <div key={rIdx} className={`border p-4 rounded-2xl relative transition-all ${
                            isLight ? 'bg-white border-stone-200' : 'bg-[#151413] border-[#222]'
                          }`}>
                            <div className="flex items-center justify-between border-b pb-2 mb-3 border-stone-100 dark:border-[#222]">
                              <span className="text-xs font-mono font-bold text-emerald-500">
                                {isArabic ? `الصف رقم ${rIdx + 1}` : `Row Column #${rIdx + 1}`}
                              </span>
                              <button
                                onClick={() => {
                                  const allRows = [
                                    ...(selectedAdminPdfId === 'pdf-amira' && selectedAdminPageNum === 1
                                      ? amiraSheetRows
                                      : (editPdfForm.pages?.find((p: any) => p.pageNum === selectedAdminPageNum)?.sections.map((sec: any) => {
                                          const parts = (sec.contentAr || '').split('\n');
                                          return {
                                            hookAr: sec.hookAr || sec.titleAr || '',
                                            hookEn: sec.hookEn || sec.titleEn || '',
                                            directionAr: sec.directionAr || "لقطات ملائمة مع نبرة هادئة",
                                            directionEn: sec.directionEn || "Appropriate visuals with calm voiceover",
                                            scriptAr: sec.scriptAr || parts[0] || sec.contentAr || '',
                                            scriptEn: sec.scriptEn || (sec.contentEn || '').split('\n')[0] || sec.contentEn || '',
                                            captionAr: sec.captionAr || parts[1] || sec.contentAr || '',
                                            captionEn: sec.captionEn || sec.contentEn || '',
                                            storyAr: sec.storyAr || "استطلاع تفاعلي",
                                            storyEn: sec.storyEn || "Interactive poll"
                                          };
                                        }) || []))
                                  ];
                                  if (confirm(isArabic ? 'هل تريد حذف هذا الصف؟' : 'Are you sure you want to delete this row?')) {
                                    handleSaveSpreadsheetRows(allRows.filter((_, i) => i !== rIdx));
                                  }
                                }}
                                className="p-1 rounded hover:bg-red-500/10 text-red-500 transition cursor-pointer"
                                title={isArabic ? 'حذف هذا الصف' : 'Delete Row'}
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {/* Hook */}
                              <div className="space-y-1">
                                <label className="text-[9px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'الهوك الجاذب (عربي)' : 'The Hook (Arabic)'}</label>
                                <input
                                  type="text"
                                  value={row.hookAr || ''}
                                  onChange={(e) => {
                                    const allRows = [
                                      ...(selectedAdminPdfId === 'pdf-amira' && selectedAdminPageNum === 1
                                        ? amiraSheetRows
                                        : (editPdfForm.pages?.find((p: any) => p.pageNum === selectedAdminPageNum)?.sections.map((sec: any) => {
                                            const parts = (sec.contentAr || '').split('\n');
                                            return {
                                              hookAr: sec.hookAr || sec.titleAr || '',
                                              hookEn: sec.hookEn || sec.titleEn || '',
                                              directionAr: sec.directionAr || "لقطات ملائمة مع نبرة هادئة",
                                              directionEn: sec.directionEn || "Appropriate visuals with calm voiceover",
                                              scriptAr: sec.scriptAr || parts[0] || sec.contentAr || '',
                                              scriptEn: sec.scriptEn || (sec.contentEn || '').split('\n')[0] || sec.contentEn || '',
                                              captionAr: sec.captionAr || parts[1] || sec.contentAr || '',
                                              captionEn: sec.captionEn || sec.contentEn || '',
                                              storyAr: sec.storyAr || "استطلاع تفاعلي",
                                              storyEn: sec.storyEn || "Interactive poll"
                                            };
                                          }) || []))
                                    ];
                                    allRows[rIdx].hookAr = e.target.value;
                                    handleSaveSpreadsheetRows(allRows);
                                  }}
                                  className={`w-full p-2 border rounded-lg text-xs outline-none ${
                                    isLight ? 'bg-white border-stone-100' : 'bg-[#1c1c1b] border-[#222]'
                                  }`}
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[9px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'الهوك الجاذب (إنجليزي)' : 'The Hook (English)'}</label>
                                <input
                                  type="text"
                                  value={row.hookEn || ''}
                                  onChange={(e) => {
                                    const allRows = [
                                      ...(selectedAdminPdfId === 'pdf-amira' && selectedAdminPageNum === 1
                                        ? amiraSheetRows
                                        : (editPdfForm.pages?.find((p: any) => p.pageNum === selectedAdminPageNum)?.sections.map((sec: any) => {
                                            const parts = (sec.contentAr || '').split('\n');
                                            return {
                                              hookAr: sec.hookAr || sec.titleAr || '',
                                              hookEn: sec.hookEn || sec.titleEn || '',
                                              directionAr: sec.directionAr || "لقطات ملائمة مع نبرة هادئة",
                                              directionEn: sec.directionEn || "Appropriate visuals with calm voiceover",
                                              scriptAr: sec.scriptAr || parts[0] || sec.contentAr || '',
                                              scriptEn: sec.scriptEn || (sec.contentEn || '').split('\n')[0] || sec.contentEn || '',
                                              captionAr: sec.captionAr || parts[1] || sec.contentAr || '',
                                              captionEn: sec.captionEn || sec.contentEn || '',
                                              storyAr: sec.storyAr || "استطلاع تفاعلي",
                                              storyEn: sec.storyEn || "Interactive poll"
                                            };
                                          }) || []))
                                    ];
                                    allRows[rIdx].hookEn = e.target.value;
                                    handleSaveSpreadsheetRows(allRows);
                                  }}
                                  className={`w-full p-2 border rounded-lg text-xs outline-none ${
                                    isLight ? 'bg-white border-stone-100' : 'bg-[#1c1c1b] border-[#222]'
                                  }`}
                                />
                              </div>

                              {/* Script content */}
                              <div className="space-y-1">
                                <label className="text-[9px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'سيناريو الفيديو (عربي)' : 'Video Script (Arabic)'}</label>
                                <textarea
                                  rows={2}
                                  value={row.scriptAr || ''}
                                  onChange={(e) => {
                                    const allRows = [
                                      ...(selectedAdminPdfId === 'pdf-amira' && selectedAdminPageNum === 1
                                        ? amiraSheetRows
                                        : (editPdfForm.pages?.find((p: any) => p.pageNum === selectedAdminPageNum)?.sections.map((sec: any) => {
                                            const parts = (sec.contentAr || '').split('\n');
                                            return {
                                              hookAr: sec.hookAr || sec.titleAr || '',
                                              hookEn: sec.hookEn || sec.titleEn || '',
                                              directionAr: sec.directionAr || "لقطات ملائمة مع نبرة هادئة",
                                              directionEn: sec.directionEn || "Appropriate visuals with calm voiceover",
                                              scriptAr: sec.scriptAr || parts[0] || sec.contentAr || '',
                                              scriptEn: sec.scriptEn || (sec.contentEn || '').split('\n')[0] || sec.contentEn || '',
                                              captionAr: sec.captionAr || parts[1] || sec.contentAr || '',
                                              captionEn: sec.captionEn || sec.contentEn || '',
                                              storyAr: sec.storyAr || "استطلاع تفاعلي",
                                              storyEn: sec.storyEn || "Interactive poll"
                                            };
                                          }) || []))
                                    ];
                                    allRows[rIdx].scriptAr = e.target.value;
                                    handleSaveSpreadsheetRows(allRows);
                                  }}
                                  className={`w-full p-2 border rounded-lg text-xs outline-none ${
                                    isLight ? 'bg-white border-stone-100' : 'bg-[#1c1c1b] border-[#222]'
                                  }`}
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[9px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'سيناريو الفيديو (إنجليزي)' : 'Video Script (English)'}</label>
                                <textarea
                                  rows={2}
                                  value={row.scriptEn || ''}
                                  onChange={(e) => {
                                    const allRows = [
                                      ...(selectedAdminPdfId === 'pdf-amira' && selectedAdminPageNum === 1
                                        ? amiraSheetRows
                                        : (editPdfForm.pages?.find((p: any) => p.pageNum === selectedAdminPageNum)?.sections.map((sec: any) => {
                                            const parts = (sec.contentAr || '').split('\n');
                                            return {
                                              hookAr: sec.hookAr || sec.titleAr || '',
                                              hookEn: sec.hookEn || sec.titleEn || '',
                                              directionAr: sec.directionAr || "لقطات ملائمة مع نبرة هادئة",
                                              directionEn: sec.directionEn || "Appropriate visuals with calm voiceover",
                                              scriptAr: sec.scriptAr || parts[0] || sec.contentAr || '',
                                              scriptEn: sec.scriptEn || (sec.contentEn || '').split('\n')[0] || sec.contentEn || '',
                                              captionAr: sec.captionAr || parts[1] || sec.contentAr || '',
                                              captionEn: sec.captionEn || sec.contentEn || '',
                                              storyAr: sec.storyAr || "استطلاع تفاعلي",
                                              storyEn: sec.storyEn || "Interactive poll"
                                            };
                                          }) || []))
                                    ];
                                    allRows[rIdx].scriptEn = e.target.value;
                                    handleSaveSpreadsheetRows(allRows);
                                  }}
                                  className={`w-full p-2 border rounded-lg text-xs outline-none ${
                                    isLight ? 'bg-white border-stone-100' : 'bg-[#1c1c1b] border-[#222]'
                                  }`}
                                />
                              </div>

                              {/* Caption details */}
                              <div className="space-y-1">
                                <label className="text-[9px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'الكابشن المقترح بالتعليقات (عربي)' : 'Suggested Caption (Arabic)'}</label>
                                <textarea
                                  rows={2}
                                  value={row.captionAr || ''}
                                  onChange={(e) => {
                                    const allRows = [
                                      ...(selectedAdminPdfId === 'pdf-amira' && selectedAdminPageNum === 1
                                        ? amiraSheetRows
                                        : (editPdfForm.pages?.find((p: any) => p.pageNum === selectedAdminPageNum)?.sections.map((sec: any) => {
                                            const parts = (sec.contentAr || '').split('\n');
                                            return {
                                              hookAr: sec.hookAr || sec.titleAr || '',
                                              hookEn: sec.hookEn || sec.titleEn || '',
                                              directionAr: sec.directionAr || "لقطات ملائمة مع نبرة هادئة",
                                              directionEn: sec.directionEn || "Appropriate visuals with calm voiceover",
                                              scriptAr: sec.scriptAr || parts[0] || sec.contentAr || '',
                                              scriptEn: sec.scriptEn || (sec.contentEn || '').split('\n')[0] || sec.contentEn || '',
                                              captionAr: sec.captionAr || parts[1] || sec.contentAr || '',
                                              captionEn: sec.captionEn || sec.contentEn || '',
                                              storyAr: sec.storyAr || "استطلاع تفاعلي",
                                              storyEn: sec.storyEn || "Interactive poll"
                                            };
                                          }) || []))
                                    ];
                                    allRows[rIdx].captionAr = e.target.value;
                                    handleSaveSpreadsheetRows(allRows);
                                  }}
                                  className={`w-full p-2 border rounded-lg text-xs outline-none ${
                                    isLight ? 'bg-white border-stone-100' : 'bg-[#1c1c1b] border-[#222]'
                                  }`}
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[9px] uppercase font-bold tracking-wider text-stone-400">{isArabic ? 'الكابشن المقترح بالتعليقات (إنجليزي)' : 'Suggested Caption (English)'}</label>
                                <textarea
                                  rows={2}
                                  value={row.captionEn || ''}
                                  onChange={(e) => {
                                    const allRows = [
                                      ...(selectedAdminPdfId === 'pdf-amira' && selectedAdminPageNum === 1
                                        ? amiraSheetRows
                                        : (editPdfForm.pages?.find((p: any) => p.pageNum === selectedAdminPageNum)?.sections.map((sec: any) => {
                                            const parts = (sec.contentAr || '').split('\n');
                                            return {
                                              hookAr: sec.hookAr || sec.titleAr || '',
                                              hookEn: sec.hookEn || sec.titleEn || '',
                                              directionAr: sec.directionAr || "لقطات ملائمة مع نبرة هادئة",
                                              directionEn: sec.directionEn || "Appropriate visuals with calm voiceover",
                                              scriptAr: sec.scriptAr || parts[0] || sec.contentAr || '',
                                              scriptEn: sec.scriptEn || (sec.contentEn || '').split('\n')[0] || sec.contentEn || '',
                                              captionAr: sec.captionAr || parts[1] || sec.contentAr || '',
                                              captionEn: sec.captionEn || sec.contentEn || '',
                                              storyAr: sec.storyAr || "استطلاع تفاعلي",
                                              storyEn: sec.storyEn || "Interactive poll"
                                            };
                                          }) || []))
                                    ];
                                    allRows[rIdx].captionEn = e.target.value;
                                    handleSaveSpreadsheetRows(allRows);
                                  }}
                                  className={`w-full p-2 border rounded-lg text-xs outline-none ${
                                    isLight ? 'bg-white border-stone-100' : 'bg-[#1c1c1b] border-[#222]'
                                  }`}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: CLIENT COLLABORATION INQUIRIES LIST */}
                {adminTab === 'inquiries' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b pb-3 border-stone-200 dark:border-[#222]">
                      <h3 className="font-serif text-base font-bold flex items-center gap-2">
                        <Inbox className="w-4 h-4 text-[#8E4F39] dark:text-[#D4AF37]" />
                        <span>{isArabic ? 'صندوق طلبات الاستفسار الواردة' : 'Client Collaboration Desk Inbox'}</span>
                      </h3>
                      <button
                        onClick={handleAddManualInquiry}
                        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition cursor-pointer font-sans"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{isArabic ? 'إضافة استفسار يدوياً' : 'Add Manual Inquiry'}</span>
                      </button>
                    </div>

                    {inquiries.length === 0 ? (
                      <div className="text-center py-12 text-stone-500 text-xs font-serif italic">
                        {isArabic ? 'لا توجد طلبات استفسار مرسلة حتى الآن.' : 'No collaboration inquiries logged yet.'}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {inquiries.map((inq, idx) => {
                          const nicheName = inq.niche === 'realstate' 
                            ? (isArabic ? 'العقارات والساحل الفاخر' : 'Luxury Real Estate') 
                            : inq.niche === 'parenting' 
                            ? (isArabic ? 'تنمية الطفل والسلوك' : 'Child Development') 
                            : inq.niche === 'relationships'
                            ? (isArabic ? 'العلاقات والتوجيه الأسري' : 'Relationship Psychology')
                            : inq.niche === 'empowerment'
                            ? (isArabic ? 'التمكين الفردي وتقدير الذات' : 'Female Empowerment')
                            : (isArabic ? 'الصحة الغذائية والهرمونية' : 'Hormonal & Gut Health');

                          const goalName = inq.goal === 'reels' 
                            ? (isArabic ? 'اسكريبتات ريلز انتشار حاسم' : 'High-impact Video scripts') 
                            : inq.goal === 'selling' 
                            ? (isArabic ? 'قنوات بيع بالدايركت لواتساب' : 'DM-to-WhatsApp pipeline') 
                            : (isArabic ? 'استشارة استراتيجية محتوى متكاملة' : 'Full brand content audit');

                          return (
                            <div key={inq.id} className={`border p-5 rounded-2xl relative space-y-3 transition ${
                              isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-[#151413] border-[#222]'
                            }`}>
                              <div className="flex items-center justify-between">
                                <span className="font-serif font-black text-sm text-[#8E4F39] dark:text-[#D4AF37]">
                                  {inq.brand}
                                </span>
                                <span className="text-[10px] text-gray-400 font-mono">
                                  {inq.date}
                                </span>
                              </div>

                              <div className="space-y-1 font-sans text-xs">
                                <div>
                                  <span className="text-[10px] text-stone-400 font-bold uppercase block tracking-wider">{isArabic ? 'مجال البراند:' : 'Business Niche:'}</span>
                                  <span className="text-stone-300 font-medium">{nicheName}</span>
                                </div>
                                <div>
                                  <span className="text-[10px] text-stone-400 font-bold uppercase block tracking-wider">{isArabic ? 'الهدف المطلوب:' : 'Primary Campaign Goal:'}</span>
                                  <span className="text-stone-300 font-medium">{goalName}</span>
                                </div>
                                <div>
                                  <span className="text-[10px] text-stone-400 font-bold uppercase block tracking-wider">{isArabic ? 'ملاحظات/متابعة التعاون:' : 'Notes / Status Updates:'}</span>
                                  <input
                                    type="text"
                                    value={inq.notes || ''}
                                    onChange={(e) => {
                                      const updatedInqs = [...inquiries];
                                      updatedInqs[idx].notes = e.target.value;
                                      setInquiries(updatedInqs);
                                    }}
                                    placeholder={isArabic ? 'أدخل ملاحظات حول العميل هنا...' : 'Add progress notes...'}
                                    className={`w-full p-1.5 mt-1 border rounded text-[11px] outline-none ${
                                      isLight ? 'bg-stone-50 border-stone-100' : 'bg-[#1c1a19] border-[#222]'
                                    }`}
                                  />
                                </div>
                              </div>

                              <div className="flex items-center justify-between pt-2 border-t border-stone-100 dark:border-[#222] text-xs">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[10px] font-bold text-stone-400 uppercase">{isArabic ? 'حالة الطلب:' : 'Status:'}</span>
                                  <select
                                    value={inq.status}
                                    onChange={(e) => {
                                      const updatedInqs = [...inquiries];
                                      updatedInqs[idx].status = e.target.value;
                                      setInquiries(updatedInqs);
                                    }}
                                    className={`p-1 border rounded text-[10px] outline-none font-bold ${
                                      inq.status === 'New' 
                                        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                                        : inq.status === 'Contacted' 
                                        ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' 
                                        : inq.status === 'Discussing' 
                                        ? 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                    }`}
                                  >
                                    <option value="New">{isArabic ? 'جديد / New' : 'New'}</option>
                                    <option value="Contacted">{isArabic ? 'تم التواصل / Contacted' : 'Contacted'}</option>
                                    <option value="Discussing">{isArabic ? 'قيد النقاش / Discussing' : 'Discussing'}</option>
                                    <option value="Completed">{isArabic ? 'مكتمل / Completed' : 'Completed'}</option>
                                  </select>
                                </div>

                                <button
                                  onClick={() => {
                                    if (confirm(isArabic ? 'هل تريد حذف هذا الطلب؟' : 'Are you sure you want to delete this inquiry?')) {
                                      setInquiries(prev => prev.filter(i => i.id !== inq.id));
                                    }
                                  }}
                                  className="text-[10px] font-bold text-red-500 hover:text-red-400 px-2 py-1 rounded bg-red-500/5 hover:bg-red-500/10 transition cursor-pointer"
                                >
                                  {isArabic ? 'حذف الاستفسار' : 'Delete Inquiry'}
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
