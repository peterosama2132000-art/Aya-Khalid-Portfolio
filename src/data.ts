import { CaseStudy, SocialScript, ChatScenario, PdfCaseStudy } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-realestate',
    category: 'realstate',
    titleEn: 'Luxury Real Estate & Premium Summer Bookings',
    titleAr: 'عقارات فاخرة وحجوزات صيفية مميزة',
    clientEn: 'ARIA Broker & REVA Rentals (North Coast / Marassi Fleet)',
    clientAr: 'أريا العقارية وريفا للتأجير (أسطول مراسي والساحل الشمالي)',
    challengeEn: 'Managing high-ticket summer bookings for a fleet of luxury chalets with extreme competition and converting casual Instagram comments/DMs directly into WhatsApp closings without premium booking drop-offs.',
    challengeAr: 'إدارة وتأمين حجوزات عالية القيمة لأسطول يضم شاليهات فاخرة بمراسي في ظل منافسة شرسة، وتحويل استفسارات التعليقات العشوائية مباشرة لحجوزات مغلقة دون فقدان العملاء.',
    strategyEn: 'Architected a 30-day premium layout blueprint showcasing sensory coastal details. Designed automated "DM-to-WhatsApp" routing with custom booking keys (e.g., word "مزدوج" for double view or "بيسين" for ground floor pool step-out), and formulated influencer script sequences emphasizing luxury concierge features.',
    strategyAr: 'تصميم مخطط محتوى مرئي فاخر لمدة 30 يوماً يعتمد على اللمسات الحسية الساحرة للساحل. تطوير نظام تتبع وتوجيه ذكي من الدايركت إلى الواتساب بكلمات مفتاحية مخصصة (مثل الكلمات "مزدوج" أو "بيسين")، وصياغة اسكريبتات للمؤثرين تركز على الرفاهية والخدمة الفندقية.',
    impactEn: 'Maintained zero-latency response timers. Streamlined qualified buyers from casual window-shoppers, yielding record summer bookings and establishing elite brand authority on social channels.',
    impactAr: 'تحقيق زمن استجابة صفري وتوجيه فوري للاستفسارات المؤهلة، مما حول صندوق الرسائل لقناة مبيعات ذهبية تغلغل بأسطول مراسي وحققت أفضل موسم حجز فندقي فاخر.',
    tagsEn: ['Social Selling', 'Lead Generation', 'Concierge Branding', 'High-Ticket Niche'],
    tagsAr: ['البيع الاجتماعي', 'جذب العملاء المهتمين', 'الهوية الفاخرة', 'سوق النخبة وعالي القيمة'],
    accentColor: 'from-amber-600 to-amber-900',
    metrics: [
      { labelEn: 'Fleet Properties', labelAr: 'أسطول العقارات المدار', value: '11' },
      { labelEn: 'Summer Occupancy', labelAr: 'معدل إشغال الصيف', value: '98%' },
      { labelEn: 'Response Time', labelAr: 'متوسط سرعة الرد', value: '<2 Mins' },
      { labelEn: 'Direct Conversion', labelAr: 'زيادة تحويل الاستفسارات', value: '+35%' }
    ]
  },
  {
    id: 'case-psychology',
    category: 'parenting',
    titleEn: 'Personal Branding, Mental Health & Child Development',
    titleAr: 'صناعة الهوية الشخصية، الصحة النفسية ونمو الطفل',
    clientEn: 'Dr. Noha Baranya (Edulane) & Nabta child development',
    clientAr: 'د. نهى برانية (إيدولين) ومدرسة نبطة للطفل',
    challengeEn: 'Translating complex academic developmental methodologies, psychological child behavioral research, and emotional awareness exercises into digestible, engaging, and highly shareable premium social graphics without over-simplifying high-authority scientific value.',
    challengeAr: 'تحويل النظريات الأكاديمية وصعوبات التعلم وعلم النفس السلوكي عند الأطفال والمراهقين إلى محتوى مبسط، منظم، وجذاب يدفع الأمهات للمشاركة الفعالة وحجز جلسات الاستشارات الخاصة.',
    strategyEn: 'Developed psycho-educational visual slides (Carousels) detailing sensory behaviors, setting bounds, and gut-health links. Wrote deep video scripts addressing parenting "pain points" (tantrums, procrastination) using immediate psychological hooks, and engineered "Community Circles" for emotional venting.',
    strategyAr: 'تطوير كاروسيلات تعليمية ملونة وتحليلية ممتازة تشرح غضب الأطفال وحدود الأمان الشخصي والارتباط المعوي. كتابة اسكريبتات ريلز تستهدف نقاط الألم للأبوين (العناد، إدمان الشاشات) بهوك عاطفي، وتأسيس دوائر دعم الأمهات.',
    impactEn: 'Achieved peak organic engagement rates on parenting platforms. Positioned personal brand profiles as high-authority mental gateways and booked out offline interactive educational programs.',
    impactAr: 'لوحظ أعلى معدل تفاعل ومشاركة أورجانيك بمجتمعات التربية. ترسيخ الثقة بالهوية الشخصية وحجز كامل المقاعد ببرامج ورش الأطفال والكورسات الاستشارية.',
    tagsEn: ['Psycho-strategy', 'Parent Community', 'Sensory Frameworks', 'Educational Sales'],
    tagsAr: ['الاستراتيجية النفسية', 'بناء مجتمع الأمهات', 'التربية الحسية', 'التسويق التعليمي'],
    accentColor: 'from-emerald-600 to-emerald-950',
    metrics: [
      { labelEn: 'Parent Community', labelAr: 'حجم المجتمع التربوي', value: '45k+' },
      { labelEn: 'Organic Growth', labelAr: 'النمو أورجانيك بدون تمويل', value: '+180%' },
      { labelEn: 'Workshop Bookings', labelAr: 'حجز المقاعد بالورش', value: '100%' },
      { labelEn: 'Engagement Multiplier', labelAr: 'مضاعف التفاعل اليومي', value: '2.4x' }
    ]
  },
  {
    id: 'case-mindset',
    category: 'empowerment',
    titleEn: 'Social Empowerment, Boundaries & GCC Female Auditing',
    titleAr: 'التمكين الاجتماعي، الحدود وصناعة الوعي للمرأة بالخليج',
    clientEn: 'Bilingual Female Leadership & Wellness Hubs',
    clientAr: 'سلسلة فك التعلق والتمكين الاجتماعي للمرأة بالخليج ومصر',
    challengeEn: 'Breaking the shame associated with acknowledging toxic partner traits, self-worth neglect, and co-dependency, creating professional remote coaching funnels that scale high-conversion program signups.',
    challengeAr: 'تحطيم الصور النمطية السامة المرتبطة بالتعلق العاطفي المرضي وفقدان الهوية الذاتية، وتصميم قنوات حجز وتسويق رقمية مرنة تزيد مبيعات اشتراكات الكوتشينج الخاص والجروبات.',
    strategyEn: 'Curated the striking "إنتي مش لوحدك" (You are not alone) series. Crafted deeply resonant narrative hooks dismantling "people-pleasing", "the savior complex", and boundary setting. Launched interactive Instagram engagement templates (custom polls, sliders, anonymous question containers).',
    strategyAr: 'إطلاق سلسلة "إنتي مش لوحدك" بهوية حاسمة وحادة. صياغة خطابات تعبر عن التعافي الحقيقي، الاستقلال المالي والمهني، وضع الحدود الصارمة مع التغلب على فخ المثالية وجلد الذات.',
    impactEn: 'Successfully converted program signups via private direct messaging (DMs) with zero marketing ad budgets. Scaled highly reliable peer networks and deep interactive discussions.',
    impactAr: 'تحقيق أعلى معدل تحويل وإغلاق مبيعات الدفعات المغلقة للبرامج عن طريق رسائل الدايركت فقط دون ميزانيات إضافية، وتأهيل مئات النساء للاستقلال والوعي النفسي.',
    tagsEn: ['Bilingual Strategy', 'Empowerment Funnels', 'DM Sales Close', 'High-Trust Bonding'],
    tagsAr: ['التمكين الذاتي', 'بناء الاستحقاق', 'تحويل المحادثات لمبيعات', 'الترابط العاطفي العالي'],
    accentColor: 'from-violet-600 to-violet-950',
    metrics: [
      { labelEn: 'Program Conversions', labelAr: 'مبيعات برامج الكوتشينج', value: 'booked out' },
      { labelEn: 'Word of Mouth rate', labelAr: 'معدل التوصية والتناقل', value: '92%' },
      { labelEn: 'DM Leads Handled', labelAr: 'استشارات الدايركت المفلترة', value: '2.5k+' },
      { labelEn: 'Client Retention', labelAr: 'نسبة استمرار العملاء', value: '88%' }
    ]
  }
];

export const SOCIAL_SCRIPTS: SocialScript[] = [
  // 🏡 CATEGORY 1: Real Estate (Aria & Reva)
  {
    id: 're-1',
    category: 'realstate',
    type: 'reel',
    brandEn: 'ARIA Rentals',
    brandAr: 'أريا للتأجير الفاخر',
    titleEn: 'Double-View Formula (Unit 409 Azour Marassi)',
    titleAr: 'معادلة الإطلالة المزدوجة النادرة (شاليه 409 أزور مراسي)',
    hookEn: 'Why choose between the yacht marina and tranquility? At Marassi, ARIA offers both.',
    hookAr: 'لما بتيجي تحجز إجازتك في مراسي.. دايماً بتقع في الحيرة دي: تختار شاليه على المارينا وأجواء اليخوت؟ ولا هدوء اللاجون الرايق؟',
    captionEn: 'Sensory coastal details, concierge quality. Double visual perspective. July and August availability is shrinking fast. Send word "مزدوج" on WhatsApp to secure your week.',
    captionAr: 'صباح يطل على روقان اللاجون، ومساء ينبض بسحر المارينا.. شاليه واحد، ومقعد أمامي لأجمل مشهدين. مساحة فاخرة، فرش جديد بالكامل، وإطلالة مزدوجة تعيد تعريف مفهوم الاستجمام. الأسابيع المتاحة تنفذ سريعاً جداً لشهر 7 و 8. ابعت كلمة "مزدوج" على الواتساب دلوقتي وفريق المبيعات هيأكدلك الأسعار والتوافر حالاً !',
    ctaEn: 'Send "مزدوج" on WhatsApp for pricing and availability.',
    ctaAr: 'ابعت كلمة "مزدوج" على الواتساب لحجز أسبوعك الاستثنائي في مراسي.',
    storyInteractiveEn: 'Interactive poll: Do you prefer Marina views or Lagoon relaxation?',
    storyInteractiveAr: 'تصويت: بتحب فيو المارينا واليخوت ⚓ ولا هدوء وبساطة اللاجون الفيروزي 💧؟',
    keyword: 'مزدوج',
    scenes: [
      {
        timeRange: '0:00 - 0:06',
        visualEn: 'Smart lock clicks open, camera sweeps dynamically to the first terrace revealing premium Marassi yachts.',
        visualAr: 'تبدأ اللقطة بشاشة مظلمة ثم يفتح باب الشاليه فجأة برمز ذكي، وتتحرك الكاميرا بسرعة وديناميكية نحو الشرفة لتكشف منظر اليخوت الفاخرة بالمارينا.',
        audioEn: 'Voiceover: "When you book luxury in Marassi, you usually face a compromise..."',
        audioAr: 'التعليق الصوتي: "لما بتيجي تحجز إجازتك في مراسي.. دايماً بتقع في الحيرة دي: أختار شاليه على المارينا وأعيش وسط اليخوت وحيوية الممشى؟ ولا الهدوء أمام اللاجون؟"'
      },
      {
        timeRange: '0:06 - 0:15',
        visualEn: 'Camera sweeps 180 degrees through the living room out to the opposite balcony overlooking the silent lagoon.',
        visualAr: 'تلتف الكاميرا بسلاسة ونعومة بنسبة 180 درجة، وتتحرك عبر الصالة الفاخرة لتصل للبلكونة المقابلة وتكشف فجأة مياه اللاجون الفيروزية الساكنة.',
        audioEn: 'Voiceover: "At ARIA, we do not compromise. We bring you Unit 409 Azour—the rare gem that cracks this formula simultaneously!"',
        audioAr: 'التعليق الصوتي: "في ARIA.. إحنا مبنحبش فكرة إنك تتنازل أو تختار. عشان كده وفرنالك شاليه 409 أزور اللي بيحل المعادلة الصعبة دي في وقت واحد!"'
      },
      {
        timeRange: '0:15 - 0:38',
        visualEn: 'Cinematic B-rolls of the grand living room, fully outfitted kitchen, 3 custom bedrooms and independent maid suite.',
        visualAr: 'لقطات سينمائية هادئة تستعرض تفاصيل الصالة المغمورة بالضوء الطبيعي، جودة المفروشات والأسرة القطنية البيضاء الناعمة، وتصميم الثلاث غرف وغرفة المربية المستقلة.',
        audioEn: 'Voiceover: "Wake up to absolute calm, stroll down to premium seaside dining in seconds. Perfect space with 3 premium rooms and an independent maid suite for absolute family comfort."',
        audioAr: 'التعليق الصوتي: "هنا.. بتصحى بمزاج على مياه اللاجون الرايقة، وبالليل بلكونتك الثانية بتبص على أرقى مطاعم المارينا.. مساحة واسعة مع 3 غرف نوم فاخرة وغرفة مربية ملحقة مستقلة لضمان الخصوصية والراحة."'
      }
    ]
  },
  {
    id: 're-2',
    category: 'realstate',
    type: 'reel',
    brandEn: 'REVA Rentals',
    brandAr: 'ريفا للتأجير الذكي',
    titleEn: 'Step-Out Pool Access Luxury (Unit Z20 Ground Floor)',
    titleAr: 'من السرير للبيسين في خطوتين (استوديو Z20 الأرضي)',
    hookEn: 'From bed to deep turquoise water in under 45 seconds.',
    hookAr: 'تخيل تصحى من النوم، تفتح باب بلكونتك، وتلاقي نفسك جوه البيسين في خطوتين بالظبط؟ من غير ممرات ومن غير أسانسير.',
    captionEn: 'Absolute step-out pool access, high-speed fiber internet and perfect smart entry locks for premium remote workers and high-end couples. Send word "بيسين" on WhatsApp for pricing.',
    captionAr: 'شروق صيفي يعاش من تراس مسبحك الحصري بذكاء فندقي مبهر. استوديو Z20 الأرضي يمثل ملاذك الذكي: مكالمة تنسيق صفرية بفضل السمارت لوك الذكي، إنترنت فائق السرعة ومساحة عمل مخصصة لو وراك متابعة سريعة لشغلك، ومستوى تعقيم صارم قبل استلامك. ابعت كلمة "بيسين" على الواتساب دلوقتي وخذ عروض الويك إند السريعة وحسم إجازتك.',
    ctaEn: 'Send "بيسين" to check calendar and price cards.',
    ctaAr: 'ابعت كلمة "بيسين" عبر الواتساب لتلقي تفاصيل المواعيد المتاحة حالاً.',
    storyInteractiveEn: 'Interactive poll: Do you prefer direct ground-floor garden access or direct pool step-out?',
    storyInteractiveAr: 'تصويت: بتفضل شاليه أرضي بحديقة خاصة وسور خضرة 🌳 ولا شاليه بيفتح مباشرة على البيسين والمياه الزرقاء 🏊؟',
    keyword: 'بيسين',
    scenes: [
      {
        timeRange: '0:00 - 0:06',
        visualEn: 'POV of opening a massive glass door from bedroom directly to pool.',
        visualAr: 'لقطة بمنظور الشخص الأول (POV) لشخص يصحو من السرير الفخم ذو الأغطية البيضاء، ويخطو خطوتين فقط ليفتح باب التراس الزجاجي الكبير.',
        audioEn: 'Sounds of water ripples. Voiceover: "Imagine waking up, sliding open your terrace, and stepping straight into pristine waters..."',
        audioAr: 'التعليق الصوتي: "تخيل تصحى من النوم.. تفتح باب بلكونتك، وتلاقي نفسك جوه البيسين في خطوتين بالظبط! من غير ممرات ومن غير أسانسير ومن غير ما تضيع دقيقة واحدة من يومك."'
      },
      {
        timeRange: '0:06 - 0:15',
        visualEn: 'Camera pushes out showing the crystal-clear pool touching the terrace borders.',
        visualAr: 'تندفع الكاميرا بسلاسة للخارج لتظهر المياه الزرقاء للمسبح وهي تلامس حدود تراس الاستوديو مباشرة.',
        audioEn: 'Voiceover: "Welcome to ground studio Z20. Curated meticulously for fast travel, high efficiency, and elite smart luxury."',
        audioAr: 'التعليق الصوتي: "في ARيا بنختصر عليك المسافات عشان تعيش الرفاهية الكاملة. بنقدملك استوديو 106 Z20 الأرضي الفاخر المصمم للاستجمام السريع والوصول الفوري للمسبح."'
      }
    ]
  },
  {
    id: 're-3',
    category: 'realstate',
    type: 'reel',
    brandEn: 'ARIA Rentals',
    brandAr: 'أريا للتأجير الفاخر',
    titleEn: 'Private Cozy Garden Seclusion (Studio 10 05G G)',
    titleAr: 'حديقتك الفندقية الخاصة بمراسي (استوديو 10 05G G)',
    hookEn: 'Do you love the Sahel energy, but seek absolute quietness and privacy once inside your door?',
    hookAr: 'بتحب طاقة وحيوية الساحل.. بس لما بترجع مكانك، بتدور على أعلى درجات الخصوصية والهدوء؟ الهروب من الزحمة بيبدأ من هنا.',
    captionEn: 'Private green extended patio, smart lock self check-in, premium Egyptian cotton bedding. Send "حديقة" on WhatsApp for direct bookings.',
    captionAr: 'المعادلة النادرة لعشاق الروقان والطبيعة والخصوصية التامة في قلب مراسي. في ARIA بنقدملك استوديو 10 05G G الأرضي المجهز بمدخل خاص وتراس يفتح مباشرة على حديقتك السرية الخاصة لقهوة الصباح أو القراءة في هدوء تام. مجهز بنظام دخول رقمي ذكي Lock Smart وتعقيم شامل صارم. ابعت كلمة "حديقة" على الواتساب دلوقتي وفريقنا هيأكدلك التواريخ المتاحة حالاً.',
    ctaEn: 'Send "حديقة" to book your tranquil escape.',
    ctaAr: 'ابعت كلمة "حديقة" على الواتساب واحسم عطلتك الفاخرة المضمونة اليوم.',
    storyInteractiveEn: 'Interactive poll: Do you prefer morning breakfast in a green private garden?',
    storyInteractiveAr: 'تصويت: تتخيل فطارك هنا بكرة وسط الخضرة والهدوء 🥐؟ ابعت "حديقة" واستلم التفاصيل.',
    keyword: 'حديقة',
    scenes: [
      {
        timeRange: '0:00 - 0:06',
        visualEn: 'Up-close of hand entering passcode on glowing smart lock, stepping inside sun-lit luxury studio.',
        visualAr: 'تبدأ اللقطة بـ زووم مقرب على يد تفتح الباب بالرمز الذكي (Smart Lock)، وتتحرك الكاميرا للداخل لتظهر مدخل الاستوديو الفاخر المليء بالضوء الطبيعي.',
        audioEn: 'Voiceover: "The retreat from the Sahel crowds starts right here at your private doorstep..."',
        audioAr: 'التعليق الصوتي: "بتحب طاقة وحيوية الساحل.. بس لما بترجع مكانك، بتدور على أعلى درجات الخصوصية والهدوء؟ الهروب من الزحمة بيبدأ من هنا."'
      },
      {
        timeRange: '0:06 - 0:15',
        visualEn: 'Camera glides smoothly from bed to open terrace doors, showing wide green grass lawn fully enclosed.',
        visualAr: 'تتحرك الكاميرا بسلاسة من السرير الفاخر باتجاه باب التراس، وتفتح الباب لتكشف فجأة عن مساحة خضراء واسعة، وهي حديقتك السرية الخاصة المجهزة بالكامل.',
        audioEn: 'Voiceover: "Meet Studio 10 05G G Ground Floor. A sanctuary opening directly to your secret garden lawn. Sip coffee in absolute solitude."',
        audioAr: 'التعليق الصوتي: "في ARIA.. بنقدملك استوديو 10 05G G الدور الأرضي. مكان مش بس بتستمتع فيه بالفخامة الفندقية، ده بيوفرلك مدخل خاص وتراس يفتح مباشرة على حديقتك السرية الخاصة لقهوة الصباح الهادئة."'
      }
    ]
  },
  {
    id: 're-4',
    category: 'realstate',
    type: 'reel',
    brandEn: 'ARIA Brokerage',
    brandAr: 'أريا للخدمات العقارية',
    titleEn: 'Why Marina Front-Row Units Sell Out First',
    titleAr: 'ليه وحدات الصف الأول في المارينا بتخلص فوراً؟',
    hookEn: 'The golden rule of Marassi: The most exclusive spots are booked first. Front row is non-negotiable.',
    hookAr: 'في قاعدة ثابتة كلنا عارفينها في مراسي.. الأماكن الأجمل.. دايماً بتتحجز الأول قبل ما الموسم يبدأ.',
    captionEn: 'First row on the Marina and Walkway. High demand. Avoid compromises on your luxury stay. Send "مارينا" on WhatsApp for real-time occupancy updates.',
    captionAr: 'الصف الأول على المارينا والممشى مباشرة. المعادلة الصيفية الأكثر طلباً وجاذبية للجميع لروح الساحل النخبوية بدون أي مساومة. نحن حالياً في وحدة 407 cyan6 الفخمة المطلة على اليخوت وممشى المطاعم الفاخرة. الطلب في قمته والمتبقي أسابيع معدودة لشهر 7 و 8. ابعتلنا تاريخ وصولك المفضل على الواتساب وسنتحقق من التوافر فوراً.',
    ctaEn: 'Send "مارينا" to chat with our fleet manager.',
    ctaAr: 'ابعت تاريخ وصولك المفضل على الواتساب وهنتحقق من التوافر لحسم إقامتك الاستثنائية.',
    storyInteractiveEn: 'Interactive poll: Do you love late-night walks on the Marina?',
    storyInteractiveAr: 'تصويت: بتحب تسهر بالليل وتتمشى بالمارينا وسط اليخوت ⚓ ولا بتفضل القعدة بالبلكونة والروقان؟',
    keyword: 'مارينا',
    scenes: [
      {
        timeRange: '0:00 - 0:06',
        visualEn: 'Presenter in sharp luxury attire holding wireless mic on high-end chalet terrace overlooking Marassi Marina.',
        visualAr: 'يبدأ الفيديو بلقطة لمسؤول مبيعات بمظهر أنيق وهو ممسك بـ المايك اللاسلكي، يتحدث بثقة مبتسماً للكاميرا من داخل التراس الفخم، وخلفه إطلالة اليخوت والممشى مباشرة.',
        audioEn: 'Presenter: "There is one rule we all know in Marassi... the absolute best units are gone before the summer even begins."',
        audioAr: 'مسؤول المبيعات: "في قاعدة ثابتة كلنا عارفينها في مراسي.. الأماكن الأجمل.. دايماً بتتحجز الأول."'
      },
      {
        timeRange: '0:06 - 0:15',
        visualEn: 'Camera pans to reveal panoramic front-row view of elite yachts. Quick cuts of the modern pristine furniture.',
        visualAr: 'تتحرك الكاميرا بسلاسة لتكشف امتداد الإطلالة البانورامية (الصف الأول بالكامل)، ثم لقطات سريعة جداً لفخامة أثاث شاليه وجاهزيته الفندقية الصارمة في وحدة 407 cyan6.',
        audioEn: 'Presenter: "We are at Unit 407 cyan6. Right on the yachts dock. It offers the complete elite vibe without a single compromise."',
        audioAr: 'مسؤول المبيعات: "احنا حالياً في وحدة 407 cyan6.. الصف الأول على المارينا والممشى مباشرة. دي المعادلة الأكثر طلباً وجاذبية؛ لأنها ببساطة بتديك التجربة الكاملة لروح الساحل النخبوية."'
      }
    ]
  },
  {
    id: 're-5',
    category: 'realstate',
    type: 'post',
    brandEn: 'REVA Rentals',
    brandAr: 'ريفا للتأجير الذكي',
    titleEn: 'Zero Luggage Moving Struggle (Unit J11 Chalet)',
    titleAr: 'خطوات من الباركينج.. لراحة عائلتك الفاخرة (شاليه غرفتين J11)',
    hookEn: 'Your luxury vacation should start with a deep breath of relief, not lifting heavy bags across endless corridors.',
    hookAr: 'الإجازة الفاخرة مش مفروض تبدأ بتعب وشيل شنط وممرات طويلة.. راحتك بتبدأ من أول خطوة.',
    captionEn: 'Two premium bedrooms, absolute pristine quality. Private dedicated parking directly in front of Unit J11. Send word "عائلة" via WhatsApp to reserve.',
    captionAr: 'وصول سريع، خصوصية تامة، وبداية فورية للروقان والاستجمام اللي بتستحقه عيلتك. خطوات معدودة من الباركينج الخاص بك لمدخل الشاليه لتسهيل حركتك ونقل عائلتك بكل أريحية. شاليه غرفتين بنقاء فندقي صارم وفرش جديد كلياً مودرن لم تلمسه يد قبلك في وحدة 306 J11 بموقع يمنحك امتياز الوصول السلس. تواصل معانا دلوقتي عبر الواتساب واضمن إجازتك العائلية الاستثنائية الصيف ده.',
    ctaEn: 'Send word "عائلة" to reserve your stress-free chalet.',
    ctaAr: 'ابعت كلمة "عائلة" على الواتساب لحجز أسبوعك المريح الخالي من مجهود الشنط.',
    storyInteractiveEn: 'Interactive: Do you struggle with luggage transportation when traveling?',
    storyInteractiveAr: 'تصويت: بتشيل هم نقل الشنط والمشي لمسافات طويلة في السفر 🧳؟ الحل المريح عندنا، اسحبي واستعلمي.',
    keyword: 'عائلة'
  },

  // 🌿 CATEGORY 2: Parenting (Nabta / Edulane)
  {
    id: 'par-1',
    category: 'parenting',
    type: 'reel',
    brandEn: 'Nabta Child Academy',
    brandAr: 'مدرسة نبطة للطفل',
    titleEn: 'Why Children Say No (De-escalating Anger)',
    titleAr: 'ليه ابنك بيقول "لأ" لكل حاجة؟ (تفكيك نوبات الغضب والاضطراب)',
    hookEn: 'Your child is not trying to trigger you; their nervous system is in shutdown mode.',
    hookAr: 'ابنك مش بيعاندك.. هو غرقان في مشاعره ومش عارف يترجم اللي حاسس بيه لكلام! الصرخات دي نداء استغاثة عاطفية.',
    captionEn: 'Tantrums are a sensory cry for help. De-escalate with active connection and labeling emotions rather than physical punishment or yelling. Comment "نبطة" to join our behavior and emotional intelligence sessions.',
    captionAr: 'في مدرسة نبطة بنتعامل مع نوبات الغضب كـ نداء استغاثة عاطفي.. الطفل في اللحظة دي غرقان في مشاعره والصرخة هي طريقته الوحيدة عشان يقولك جهازي العصبي حصله "شورت سيركت". بنعلمك إزاي تتعاملي من غير ما تخسري أعصابك ونبني جسور تواصل قوية: انزلي لمستوى نظره لتطمين حواسه، واستخدمي تسمية المشاعر مثل "أنا حاسة إنك محبط عشان اللعبة خلصت صح؟" ده بيقلل حدة الغضب تلقائياً. ابعتي لنا كلمة "نبطة" في التعليقات لمعرفة تفاصيل جلسات تعديل السلوك والذكاء العاطفي.',
    ctaEn: 'Comment "نبطة" for behavioral consultations.',
    ctaAr: 'اكتبي كلمة "نبطة" في التعليقات وسيتم التواصل معكِ لحجز جلسات تعديل السلوك.',
    storyInteractiveEn: 'Interactive poll: Do you yell back during tantrums?',
    storyInteractiveAr: 'تفاعل: اختاري: "ده بيعند معايا وراسه يابس" 😡 أو "ده محتاج مساعدة ومو عارف يعبر" 🥺؟',
    keyword: 'نبطة',
    scenes: [
      {
        timeRange: '0:00 - 0:06',
        visualEn: 'Split-screen of an overwhelmed mother next to a child crying or throwing tantrums in public.',
        visualAr: 'لقطة توضح طفل يصرخ ويغضب والناس بتبصلك وأنتِ أعصابك بتنهار ومش عارفة تتصرفي مع غضبه وصراخه.',
        audioEn: 'Voiceover: "Is your child throwing tantrums in public? Yelling is not the answer..."',
        audioAr: 'التعليق الصوتي: "ابنك بيصرخ ويغضب في الشارع؟ وأعصابك بتنهار قدام الناس؟ إيه اللي بيحصل بجد في اللحظة دي؟ في علم النفس، طفلك مش بيعاندك!"'
      },
      {
        timeRange: '0:06 - 0:15',
        visualEn: 'Mother kneeling down, placing hand on shoulder gently, looking into child eyes calmly.',
        visualAr: 'لقطة توضح الأم وهي بتنزل لمستوى نظر الطفل (في نفس مستواه)، وبتحط يدها ببطء وحنان على كتفه لتعطيه الأمان بلغة جسد هادئة.',
        audioEn: 'Voiceover: "Label their feeling. Say: I know you are frustrated because playtime ended. Sensory labeling calms the brain instantly."',
        audioAr: 'التعليق الصوتي: "الهدف مش إننا نسكته.. الهدف إننا نطمنه. انزلي لمستوى نظره وسمي شعوره: أنا حاسة إنك محبط عشان اللعبة خلصت صح؟ هتلاقي الغضب هدي من نفسه لما يحس إنك فاهماه."'
      }
    ]
  },
  {
    id: 'par-2',
    category: 'parenting',
    type: 'reel',
    brandEn: 'Nabta Etiquette',
    brandAr: 'مدرسة نبطة للإتيكيت والأمان',
    titleEn: 'Concept of Personal Bubble (Anti-abuse Safety)',
    titleAr: 'حدود الجسد والفقاعة الشخصية (توعية الأطفال ضد التحرش والتطفل)',
    hookEn: '"Do not touch my bubble." Teach your child how to establish physical boundaries from home.',
    hookAr: 'ممنوع تلمسني أو تقرب مني كدة.. علمي طفلك إزاي يحط حدود لجسمه من غير خوف أو إحراج!',
    captionEn: 'The concept of personal bubble is a vital security tool. Teach children they own their bodies and have the right to refuse uncomfortable hugs even from relatives. Comment "إتيكيت" for program details.',
    captionAr: 'أطفال كتير بيتعرضوا لمواقف تعدي على مساحتهم الشخصية ومش بيعرفوا يدافعوا عن نفسهم ببساطة لأنهم متعلموش إن جسمهم ملكهم هما وبس. في مدرسة نبطة للإتيكيت بنعلم الطفل مفهوم فقاعة المساحة الشخصية كجزء من مهارات الأمان الشخصي، وإنه له الحق الكامل يقول "لا" لأي حد بيقرب منه بشكل مش مريح حتى لو كان حد قريبه. التعليم بيبدأ من البيت لما نحترم مساحتهم ونطلب إذنهم قبل ما نحضنهم. اكتبوا كلمة "إتيكيت" في التعليقات وهنبعتلك تفاصيل ورش الأطفال والبرامج المتاحة.',
    ctaEn: 'Comment "إتيكيت" for child protection and social skills programs.',
    ctaAr: 'اكتبي كلمة "إتيكيت" في التعليقات لحجز مقعد بورش حماية الذات والذكاء الاجتماعي للأطفال.',
    storyInteractiveEn: 'Interactive: Does your child know how to say NO comfortably?',
    storyInteractiveAr: 'تفاعل: هل طفلك بيعرف يقول "لا" بقوة ووضوح لما حد يضايقه 🛑؟ (بيعرف / بيخجل)',
    keyword: 'إتيكيت',
    scenes: [
      {
        timeRange: '0:00 - 0:06',
        visualEn: 'B-roll of children playing with a visual of a hula-hoop or circular glowing ring around them.',
        visualAr: 'لقطة توضح طفل واقف وفي جرافيك بسيط دائري مضيء حواليه بيشكل هالة أو فقاعة حماية شخصية زاهية.',
        audioEn: 'Voiceover: "Teach your child the personal bubble. It is not rudeness; it is body safety..."',
        audioAr: 'التعليق الصوتي: "علمي طفلك يحمي جسمه من غير خوف.. في مدرسة نبطة بنعلم الطفل مفهوم فقاعة المساحة الشخصية، وإن جسمه ملكه هو وبس."'
      },
      {
        timeRange: '0:06 - 0:15',
        visualEn: 'Child extending hand and saying NO firmly with a confident smile, stepping back from an approaching shadow.',
        visualAr: 'لقطة توضح طفل بيرفع إيده بوضوح وبيرفض لمسة أو تقريب غير مريح بابتسامة ثقة وصوت واضح، وبيرجع خطوة لورا.',
        audioEn: 'Voiceover: "If someone crosses their bubble, teach them to say NO firmly. Respect their choice when they refuse relative hugs at home to empower their safety in school."',
        audioAr: 'التعليق الصوتي: "التعليم بيبدأ من البيت.. لو طفلك رافض بوسة أو حضن من حد قريبه، احترمي قراره وشجعيه؛ عشان يتعلم يقول لا لأي تطفل أو تحرش برة البيت وهو واثق في حدود جسمه."'
      }
    ]
  },
  {
    id: 'par-3',
    category: 'parenting',
    type: 'reel',
    brandEn: 'Nabta Academy',
    brandAr: 'مدرسة نبطة للتشخيص والتقييم',
    titleEn: 'Intelligent IQ Diagnosis (ADHD & Learning Struggles)',
    titleAr: 'ابنك مش كسول.. هو محتاج يكتشف خريطة ذكائه! (تقييم تشتت الانتباه وصعوبات التعلم)',
    hookEn: 'Is your child lazy, or is the standard visual school system failing to translate their unique intelligence?',
    hookAr: 'أكبر رد فعل بنلجأ له لما ابننا يتشتت أو يتأخر في المذاكرة هو الاتهام بالتقصير أو الكسل.. بس الحقيقة إنه ممكن يكون عبقري في حتة تانية!',
    captionEn: 'Standard school models do not cover tactile or linguistic unique variations. Dr. Noha offers diagnostic assessments to build customized plans. Comment "تقييم" to book.',
    captionAr: 'بلاش تظلمي طفلك بالضغط والعصبية وهو محتاج بس اللي يفهمه ويوجهه صح. في نبطة بنقدم خدمة التقييم النفسي والتربوي الشامل عشان نفهم خريطة ذكاء طفلك (ذكاء لغوي، حركي، أو إبداعي)، وبناء عليه بنحدد الخطة العلاجية اللي تناسبه سواء كانت جلسات تعديل سلوك أو تنمية مهارات أو اختبارات ذكاء متخصصة زي الـ آي كيو واختبارات الـ إيه دي إتش دي. التشخيص المبكر هو أول خطوة لحل المشكلة وتوفير الإحباط والضغط النفسي. ابعتي كلمة "تقييم" في التعليقات لحجز موعد جلسة التقييم والتشخيص المناسبة.',
    ctaEn: 'Comment "تقييم" to check diagnostic calendars.',
    ctaAr: 'اكتبي كلمة "تقييم" في التعليقات وهنتواصل معاكي فوراً لتأمين موعد تقييم شامل لطفلك.',
    storyInteractiveEn: 'Interactive: Share your child biggest learning struggle',
    storyInteractiveAr: 'تفاعل: ابنك مش كسول هو بس محتاج اللي يفهمه.. إيه أكتر تحدي بيواجهك معاه في المذاكرة 📝؟ (اكتبي هنا)',
    keyword: 'تقييم',
    scenes: [
      {
        timeRange: '0:00 - 0:06',
        visualEn: 'Up-close of a child looking at books with a look of extreme frustration, pencil slipping off their fingers.',
        visualAr: 'لقطة توضح طفل جالس أمام كتب ومستندات دراسية والملل والتشتت باين على عيونه، والأم بتلومه بعصبية وصوت عالي.',
        audioEn: 'Voiceover: "Do you complain about your child lack of focus during homework? Maybe the issue is not laziness..."',
        audioAr: 'التعليق الصوتي: "كتير من الأمهات بيشتكوا من تشتت طفلهم في المذاكرة وبطء استيعابه، وأول رد فعل بنلجأ له هو لوم الطفل أو اتهامه بالتقصير والكسل..."'
      },
      {
        timeRange: '0:06 - 0:15',
        visualEn: 'B-roll of children building complex geometric wooden patterns with a look of high focus and intelligence.',
        visualAr: 'تنتقل اللقطة لطفل بيبني تصميمات خشبية هندسية معقدة بتركيز شديد وابتسامة ذكاء وفخر واضحة.',
        audioEn: 'Voiceover: "Bespoke psychological diagnosis helps map their specific learning style. Is he a kinesthetic, visual, or linguistic learner? Diagnose early, support with love."',
        audioAr: 'التعليق الصوتي: "الحقيقة إن طفلك ممكن يكون عنده طاقة إبداعية كبيرة أو ذكاء مميز في مجالات تانية، والمناهج التقليدية مش عارفة تخرّجها. التقييم والتشخيص الصح بيوفر سنين من الإحباط والضغط وبيرجعله ثقته في نفسه."'
      }
    ]
  },
  {
    id: 'par-4',
    category: 'parenting',
    type: 'reel',
    brandEn: 'Nabta Art & Drama',
    brandAr: 'نبطة (العلاج بالفن والدراما)',
    titleEn: 'Psychodrama for Healing Child Social Anxiety',
    titleAr: 'علاج الخجل الاجتماعي عند الأطفال بـ "السيكودراما"',
    hookEn: 'Is your child shy or social? Acting can heal fears and change internal self-image.',
    hookAr: 'طفلك خجول ومتردد في الكلام قدام الناس؟ السيكودراما والتمثيل هما العصا السحرية لكسر الخوف وبناء شخصية واثقة وقوية!',
    captionEn: 'Psychodrama is a structured therapeutic tool helping kids experiment with social roles in a secure container. Comment "سيكودراما" to inquire about our upcoming groups.',
    captionAr: 'أطفال كتير عندهم قدرات ومواهب كبيرة بس الخجل والانعزال بيمنعهم يشاركوها مع اللي حواليهم. في نبطة بنستخدم تقنية "السيكودراما التربوية" كأداة قوية جداً لكسر حاجز الخوف الاجتماعي. السيكودراما هي مساحة آمنة بيمثل فيها الطفل أدوار مختلفة (دور طفل شجاع، أو شخصية قيادية) فبتبدأ صورته الذاتية عن نفسه تتغير، وبتتطور مهاراته الاجتماعية بشكل تلقائي وبدون أي ضغط عليه. اسألينا في التعليقات عن مواعيد جلسات السيكودراما للأطفال بنبطة.',
    ctaEn: 'Comment "سيكودراما" to get group updates.',
    ctaAr: 'اكتبي كلمة "سيكودراما" في التعليقات لحجز مكان طفلك في أقرب ورشة علاج بالدراما والتمثيل.',
    storyInteractiveEn: 'Interactive poll: Would you like your child to participate in role-playing?',
    storyInteractiveAr: 'تفاعل: التمثيل ممكن يعالج الخوف والتردد! بتحبي ابنك يجرب أنشطة فيها تمثيل وقصة 🎭؟ (نعم / لا)',
    keyword: 'سيكودراما',
    scenes: [
      {
        timeRange: '0:00 - 0:05',
        visualEn: 'A child hiding behind a curtain in a play room, looking nervous.',
        visualAr: 'لقطة توضح طفل منسحب وخايف يشارك ألعاب جماعية مع أصحابه، وواقف خجول وراء ستارة الغرفة.',
        audioEn: 'Voiceover: "Shyness can block your child biggest talents. Standard advice like just go play does not work..."',
        audioAr: 'التعليق الصوتي: "الخجل بيحرم أطفال كتير من مشاركة مواهبهم الكبيرة مع اللي حواليهم، ونصيحة الروح التقليدية اذهب والعب مبقتش تكفي..."'
      },
      {
        timeRange: '0:05 - 0:15',
        visualEn: 'The same child wearing a kings cape, stepping onto stage with a big smile, acting boldly.',
        visualAr: 'لقطة مبهجة لنفس الطفل وهو يرتدي عباءة بطل خارق وتيجان كرتونية، وبيتحرك ويحكي بجرأة وحماس وسط الأطفال والأخصائية بتشجعه.',
        audioEn: 'Voiceover: "Through educational psychodrama, we let them act out bravery. Playing a hero rewires their self-image permanently. Watch them step into confidence."',
        audioAr: 'التعليق الصوتي: "في جلسات السيكودراما بنعطيهم أدوار بطل شجاع أو قائد، فالجهاز العصبي بيجرب طاقة الشجاعة بسلام وأمان، فبتبدأ صورته عن نفسه تتغير برة الجلسات ويواجه أصحابه بكل جرأة ونضج."'
      }
    ]
  },
  {
    id: 'par-5',
    category: 'parenting',
    type: 'carousel',
    brandEn: 'Nabta Parenting Hub',
    brandAr: 'مدرسة نبطة للطفل والعائلة',
    titleEn: 'Five Smart Alternatives to Screen Addiction',
    titleAr: '٥ بدائل ذكية وممتعة لعلاج إدمان الشاشات في البيت',
    hookEn: 'Do not just take the iPad; build highly engaging physical sensory alternatives.',
    hookAr: 'إدمان الشاشات والألعاب الإلكترونية بيبني فجوة تواصل وتوتر في بيتك.. والحل مش بس المنع، الحل هو توفير بديل ذكي وجذاب!',
    captionEn: 'Children seek screens for instant dopamine release. Counter this with custom physical, art, and roleplay sensory channels. Comment "نشاط" to receive our customized screen-alternative list.',
    captionAr: 'الطفل بيلجأ للموبايل لأنه بيعطيه جرعة إثارة سريعة وسهلة مش بيلاقيها في الواقع. عشان كدة المنع لوحده بيولد غضب وعناد. البديل لازم يكون أمتع وأقوى في تنشيط مهاراته. في نبطة بنقدم للأهل بدائل ذكية بتنمي ذكاء طفلك العاطفي والاجتماعي: 1. اللعب التشاركي الحر بدون أوامر؛ 2. استخدام أدوات الفن والصلصال لتفريغ مشاعره؛ 3. ألعاب الأدوار؛ 4. القراءة التفاعلية؛ 5. الأنشطة الحركية الجماعية. كدة بنحول وقت الطفل من استهلاك سلبي لبناء حقيقي لشخصيته. ابعتي كلمة "نشاط" في التعليقات عشان يوصلك دليلنا المجاني للأنشطة البديلة بالمنزل.',
    ctaEn: 'Comment "نشاط" for the free Screen Detox activity card deck.',
    ctaAr: 'اكتبي كلمة "نشاط" في التعليقات وهنبعتلك كشف كامل بأفكار أنشطة بديلة للآيباد تغني طفلك عنه.',
    storyInteractiveEn: 'Interactive: Share your child daily screen hours',
    storyInteractiveAr: 'تفاعل: إدمان الشاشات.. إيه أكتر حاجة بتسلي طفلك في البيت غير الموبايل والتابلت 📱؟ (اكتبي هنا)',
    keyword: 'نشاط',
    carouselSlides: [
      {
        slideNumber: 1,
        titleEn: 'Slide 1: The Dopamine Default',
        titleAr: 'ليه ابنك بيهرب للشاشات؟',
        contentEn: 'Fast stimulation. The virtual world provides instant reward pathways. To compete, the real-world alternatives must engage their tactile, visual, and movement senses.',
        contentAr: 'الشاشات بتديله جرعة إثارة وتسلية مريحة جداً لسهولتها، فعشان ننافس السحر ده ونحميه، لازم البدائل تكون مشوقة وبتتحرك فيها حواسه كلها.'
      },
      {
        slideNumber: 2,
        titleEn: 'Slide 2: Active Sensory Channels',
        titleAr: 'الأدوات الحسية: الفن والصلصال وألعاب الأدوار',
        contentEn: 'Use free-form painting or clay sculpting to let children express suppressed emotions safely. Leverage roleplaying to act out daily friction scenarios, shifting energy to creation.',
        contentAr: 'الرسم الحر وتشكيل الصلصال بيساعدوا على الاسترخاء وتفريغ الشحنات العاطفية، بينما ألعاب الأدوار بتخليه يفرغ طاقته الحركية في نشاط هادف.'
      },
      {
        slideNumber: 3,
        titleEn: 'Slide 3: Collaborative No-Command Time',
        titleAr: 'تخصيص وقت اللعب التشاركي الحر',
        contentEn: 'Allocate 15-20 minutes daily for interactive play where parents do not issue commands, only follow the child creative leads. This fills their attention bucket organically.',
        contentAr: '15 دقيقة يومياً من اللعب المشترك بدون أوامر أو تعليمات، بس بتسمعي حكاياته وبتشاركيه أفكاره، ده بيشبع احتياجه للأمان ويلغي الرغبة في الهروب للآيباد.'
      }
    ]
  },

  // ⚖️ CATEGORY 3: Relationships (Sara)
  {
    id: 'rel-1',
    category: 'relationships',
    type: 'reel',
    brandEn: 'Sara Relationship Mindset',
    brandAr: 'سارة لوعي العلاقات',
    titleEn: 'The Illusion of Possession and Control in Love',
    titleAr: 'وهم الامتلاك وأقفاص السيطرة (سيكولوجية الارتباط المرضي)',
    hookEn: 'True love thrives in freedom; it dies inside cages of co-dependency and control.',
    hookAr: 'الخوف من الفقد دايماً بيخلينا نتحكم في تفاصيل الشريك عشان نضمن وجوده.. بس الحقيقة إن الحب بيموت في أقفاص السيطرة والاستحواذ!',
    captionEn: 'The illusion of owning the partner destroys safe emotional bonds. Replace co-dependency with independent inner worth and security. Send word "تشافي" to book your discovery consultation.',
    captionAr: 'أكبر وهم نعيشه في العلاقات العاطفية هو وهم امتلاك الشريك الآخر. الحب الحقيقي يزدهر في المساحات الحرة والحرية، ويموت في أقفاص السيطرة والتحكم. لما خوفك من الفقد يتحول لرغبة عارمة في مراقبة تفاصيل شريكك، إنتِ بتقتلي ببطء الشغف والأمان اللي قامت عليهم العلاقة. الحل بيبدأ بفك الارتباط المرضي والتركيز على بناء أمان داخلي مستقل لا يتأثر بغياب أو حضور أحد. ابعتي كلمة "تشافي" في رسالة خاصة عشان تبدأي رحلتك معايا وتأمني استشارتك الخاصة وتستردي سلامك.',
    ctaEn: 'Send word "تشافي" to register for private counseling.',
    ctaAr: 'ابعتيلي كلمة "تشافي" في الرسائل الخاصة لتفاصيل حجز الجلسات الاستشارية واستعادة حدودك.',
    storyInteractiveEn: 'Interactive poll: Does fear of loss make you control your partner?',
    storyInteractiveAr: 'تفاعل: نسبة الخوف من الفقد والتعلق عندك كام من % وبتأثر على قراراتك 📊؟ (مؤشر التفاعل)',
    keyword: 'تشافي',
    scenes: [
      {
        timeRange: '0:00 - 0:05',
        visualEn: 'Up-close of hand closing firmly on a vintage textbook, then gently releasing and opening the palms.',
        visualAr: 'تبدأ اللقطة بـ زووم مقرب ليدي سارة وهي مغلقتان على شكل قبضة ضيقة كأنها بتمسك حاجة بقوة، ثم بتفتح كفيها ببطء شديد وتفردهما بمرونة للأعلى.',
        audioEn: 'Voiceover: "The biggest illusion in love is thinking we can own another human. True love grows in open spaces..."',
        audioAr: 'التعليق الصوتي: "أكبر وهم نعيشه في العلاقات العاطفية.. هو وهم امتلاك الشريك الآخر. الحب الحقيقي يزدهر في المساحات الحرة.. ويموت في التملك والسيطرة."'
      },
      {
        timeRange: '0:05 - 0:15',
        visualEn: 'Transition to Sarah looking calmly at the screen with relaxed body language behind a warm desk setup.',
        visualAr: 'تنتقل اللقطة لسارة وهي جالسة على مقعد مريح، ملامحها هادئة وتتحدث بنبرة تحليلية ممتازة ولغة جسد مريحة تعبر عن الأمان والاتزان النفسي.',
        audioEn: 'Voiceover: "When fear of loss turns into controlling their details, you suffocate the very safety of the bond. True safety comes from within, independent of their presence."',
        audioAr: 'التعليق الصوتي: "لما خوفك من الفقد يتحول لرغبة في التحكم في تفاصيل شريكك، إنتِ بتخنقي الأمان اللي قامت عليه العلاقة. الخوف مش بيحمي الحب.. الخوف بيقتله. أمانك الذاتي لازم ينبع من جواكي أولاً عشان متعيشيش مهددة."'
      }
    ]
  },
  {
    id: 'rel-2',
    category: 'relationships',
    type: 'reel',
    brandEn: 'Sara Relationship Mindset',
    brandAr: 'سارة لوعي العلاقات',
    titleEn: 'The Power of Safe Silence and Emotional Maturity',
    titleAr: 'سحر الصمت الآمن وفلسفة الهدوء بين الشريكين',
    hookEn: 'Is your silence a wall of emotional abuse, or is it a mature bridge of safe connection?',
    hookAr: 'بتخافي من الصمت مع شريكك؟ بتحسي إن الهدوء معناه جفاء ولازم تملي الفراغ بكلام عشوائي أو خناق؟',
    captionEn: 'Silence is not always a sign of distance; safe silence represents high emotional intelligence. Avoid filling quiet spaces with arguments. Send "تواصل" for strategic relationship auditing.',
    captionAr: 'الصمت في العلاقات ليس دائماً علامة على الجفاء أو نهاية المشاعر.. بل قد يكون أحياناً أعلى درجات النضج والتواصل العاطفي العميق. المشكلة الكبرى هي خوفنا من الفراغ الداخلي، الخوف اللي بيدفعنا لملء هذا الصمت بكلمات عشوائية أو اتهامات ومجادلات لا طائل منها فقط للهروب من مواجهة أنفسنا! الحل هو التدرب على "الصمت الآمن" حيث يتواجد الطرفان معاً بسلام دون حاجة للكلام ودون قلق. ابعتي كلمة "تواصل" لتطوير هذا النضج في علاقتك وبناء تواصل صحي وعميق.',
    ctaEn: 'Send word "تواصل" to configure safe communication paths.',
    ctaAr: 'ابعتيلي كلمة "تواصل" في الرسائل الخاصة عشان نحدد الخطوات العملية لبناء تفاهم صامت وآمن.',
    storyInteractiveEn: 'Interactive poll: Do you feel anxious when there is silence with your partner?',
    storyInteractiveAr: 'تفاعل: هل بتخافي من الصمت والهدوء مع شريكك 🤫؟ (بيقلقني وبحس بجفاء / بيبسطني وبحس بأمان)',
    keyword: 'تواصل',
    scenes: [
      {
        timeRange: '0:00 - 0:06',
        visualEn: 'Sarah taking a slow sip from a ceramic coffee cup, sitting in complete tranquility and holding a brief silence.',
        visualAr: 'تظهر سارة وهي ترتشف ببطء من فنجان قهوة وتصمت لثانيتين كاملتين بهدوء ووقار قبل أن تبدأ في التحدث مباشرة بعينين تعبران عن الفهم والاحتواء.',
        audioEn: 'Voiceover: "Do you panic during silence? Silence in a relationship is not always distance..."',
        audioAr: 'التعليق الصوتي: "بتخافي من الصمت مع شريكك؟ بتحسي إن الهدوء معناه جفاء ولازم تملي الفراغ بأي كلام؟ الصمت في العلاقات مش دايماً علامة على نهاية المشاعر..."'
      },
      {
        timeRange: '0:06 - 0:15',
        visualEn: 'Up-close of Sarah with supportive hand gestures showing absolute professional composure.',
        visualAr: 'تنتقل الزاوية للقطة متوسطة تظهر لغة جسد سارة المريحة وهي تتحدث بلغة حانية وعميقة عن سيكولوجية الصمت وتفادي خناقات التافهة.',
        audioEn: 'Voiceover: "True maturity is practicing safe silence, standing in the same room without feeling threatened. Arguments often happen just to escape inner emptiness. Connect in silence."',
        audioAr: 'التعليق الصوتي: "أحياناً الصمت بيكون أعلى درجات النضج والتواصل العاطفي. مشكلتنا الكبرى هي خوفنا من الفراغ، الخوف اللي بيخلينا نفتح خناقات ومجادلات بس عشان نهرب من مواجهة نفسنا. اتدربي على الصمت الآمن وشاركي الهدوء بسلام."'
      }
    ]
  },
  {
    id: 'rel-3',
    category: 'relationships',
    type: 'reel',
    brandEn: 'Sara Relationship Mindset',
    brandAr: 'سارة لوعي العلاقات',
    titleEn: 'The Trap of Extreme Self-Sacrifice in Love',
    titleAr: 'وهم التضحية المفرطة والتنازل السام (كيف تصنعين شريكاً أنانياً؟)',
    hookEn: 'Extreme sacrifice is not a measure of love; it is an unconscious defensive act to buy acceptance.',
    hookAr: 'التضحية المفرطة والتنازل اللي بييجي على حساب كرامتك وصحتك النفسية مش حب.. ده فخ لشراء القبول وتجنب الرفض!',
    captionEn: 'Continuous self-sacrifice molds codependent, selfish partners who drain your energy. Replace sacrifice with balanced investment. Send "حدود" to establish protective boundaries.',
    captionAr: 'عندما تلعبين دور الضحية المستمرة وتتنازلين دائماً عن قيمك وحدودك النفسية لتجنب المشاكل، إنتِ بتصنعي بيدك شريكاً اعتمادياً يتغذى على طاقتك ويمارس عليك الأنانية دون وعي منه. التنازل اللي بيوجع روحك وبيجي على حساب كرامتك وصحتك مستحيل يبني علاقة صحية أو يخليكي غالية في عينه. الحل الجذري هو استبدال التضحية بالاستثمار المتبادل والوعي بأهمية وضع خطوط حمراء. ابعتي كلمة "حدود" لحماية سلامك الداخلي والبدء بوضع حدود قوية في علاقتك.',
    ctaEn: 'Send word "حدود" to learn boundary setting guidelines.',
    ctaAr: 'ابعتيلي كلمة "حدود" في الرسائل الخاصة عشان تبدأي رحلتك في بناء حدود حديدية تحمي هدوء قلبك.',
    storyInteractiveEn: 'Interactive poll: Do you believe sacrifice makes them value you more?',
    storyInteractiveAr: 'تفاعل: تفتكري التضحية المفرطة والتنازل المستمر بيزيد من قيمتك في عيونهم 🥀؟ (بيخليهم يقدروني / بيزود أنانيتهم)',
    keyword: 'حدود',
    scenes: [
      {
        timeRange: '0:00 - 0:06',
        visualEn: 'Sarah sitting behind an elegant dark desk, dropping a luxury pen slowly, looking seriously at the lens.',
        visualAr: 'تبدأ اللقطة بسارة وهي جالسة خلف مكتب أنيق، ممسكة بقلم وتكتب بتركيز، ثم تتوقف فجأة وتضع القلم ببطء وترفع رأسها لتنظر للكاميرا بنظرة جادة وحاسمة.',
        audioEn: 'Voiceover: "Extreme self-sacrifice is not deep love. It is simply an unconscious mechanism to prevent rejection..."',
        audioAr: 'التعليق الصوتي: "التضحية المفرطة في العلاقات.. ليست دليلاً على عمق الحب.. بل هي في الحقيقة آلية دفاعية غير واعية لشراء القبول وتجنب الرفض..."'
      },
      {
        timeRange: '0:06 - 0:15',
        visualEn: 'Up-close of Sarah emphasizing boundary values with clean hand gestures.',
        visualAr: 'تنتقل الكاميرا للقطة مقربة تظهر سارة وهي تشبك يديها معاً على المكتب وتتقدم قليلاً للأمام لتعزيز التواصل البصري الحازم والواعي وتوضيح أبعاد الأنانية التلقائية للشريك.',
        audioEn: 'Voiceover: "When you play the martyr, you produce a selfish, dependent partner who consumes your life force. Stop the compromise. Protect your boundaries."',
        audioAr: 'التعليق الصوتي: "لما تلعبي دور الضحية وتتنازلي عن حدودك، إنتِ بتصنعي بإيدك شريك اعتمادي وأناني بيتغذى على طاقتك. التنازل اللي بيأذيكي نفسياً مستحيل يبني علاقة محترمة. استبدلي التضحية بالاستثمار المتبادل والحدود الصارمة."'
      }
    ]
  },
  {
    id: 'rel-4',
    category: 'relationships',
    type: 'reel',
    brandEn: 'Sara Relationship Mindset',
    brandAr: 'سارة لوعي العلاقات',
    titleEn: 'Honoring Your Emotional Scars (Post-Breakup Healing)',
    titleAr: 'تكريم الندوب العاطفية وفخ العلاقة البديلة السريعة',
    hookEn: 'A new relationship to forget the old one? This is the biggest trap of self-sabotage.',
    hookAr: 'علاقة جديدة بسرعة عشان تنسي القديمة؟ دي أكبر خدعة بنؤذي بيها نفسنا! ندوبك العاطفية محتاجة تكريم وتفهم للدرس.',
    captionEn: 'Your post-breakup scars are maps of wisdom, not defects. Do not rush into a new bond to cover the pain; heal first. Send word "تشافي" to resolve past trauma bonds.',
    captionAr: 'ندوبك العاطفية الناتجة عن العلاقات السابقة ليست عيباً أو تشوهاً يجب إخفاؤه أو الخجل منه.. بل هي خريطة طريق لنضجك وحكمتك الحالية. الخطأ الفادح هو محاولة الدخول في علاقة جديدة كلياً فقط لتغطية تلك الندوب أو الهروب من ألمها، مما يجعلك تعيدين إنتاج نفس الصدمات القديمة وتكرار نفس المعاناة مع أشخاص جدد. الحل هو التوقف وتكريم تلك الندوب عبر فهم الدرس وتنظيف الصدمة تماماً قبل المضي قدماً. ابعتي كلمة "تشافي" في رسالة خاصة لمساعدتك في تفكيك صدمات الماضي وبناء مستقبل عاطفي نقي وصحي.',
    ctaEn: 'Send word "تشافي" to clean past emotional trauma.',
    ctaAr: 'ابعتيلي كلمة "تشافي" في الرسائل الخاصة للبدء الفوري ببرنامج الكوتشينج لتنظيف ندوب الماضي.',
    storyInteractiveEn: 'Interactive: Share the biggest emotional lesson you learned from your past',
    storyInteractiveAr: 'تفاعل: سؤال صريح ومحتاج شجاعة: إيه أكبر درس عاطفي خرجتي بيه من جروح وخيبات الماضي 💔؟ (اكتبي هنا)',
    keyword: 'تشافي_سارة',
    scenes: [
      {
        timeRange: '0:00 - 0:06',
        visualEn: 'Sarah looking at her hands under warm natural light, then looking up with a look of extreme compassion.',
        visualAr: 'تظهر سارة بإضاءة طبيعية دافئة وهي تنظر ليدها ببطء ثم تنظر للكاميرا مباشرة بنبرة تجمع بين الحنان والتعاطف الشديد والعمق المعرفي الخبير.',
        audioEn: 'Voiceover: "scars are not defects. Rushing to a new partner to mask the old pain is self-inflicted damage..."',
        audioAr: 'التعليق الصوتي: "ندوبك العاطفية.. ليست عيباً أو تشوهاً.. بل هي في الحقيقة خريطة طريق لنضجك وحكمتك الحالية. علاقة جديدة بسرعة عشان تنسي القديمة؟ دي أكبر خدعة بنؤذي بيها نفسنا."'
      },
      {
        timeRange: '0:06 - 0:15',
        visualEn: 'Medium shot of Sarah with open body language representing inner peace and healing.',
        visualAr: 'تنتقل الكاميرا للقطة متوسطة تظهر سارة بلغة جسد منفتحة وهادئة تعبر عن السلام الداخلي وتوضيح فخ إعادة إنتاج نفس الصدمة مع شريك جديد بسبب الهروب.',
        audioEn: 'Voiceover: "Honor the scars. Stop and digest the deep emotional lessons they carry before taking another step. Heal your foundation first."',
        audioAr: 'التعليق الصوتي: "الهروب مش حل، بيخليكي تكرري نفس الوجع بس مع وشوش تانية. الحل هو التوقف وتكريم ندوبك، وفهم الدرس العاطفي العميق وتنظيف الصدمة بالكامل قبل ما تاخدي أي خطوة لقدام."'
      }
    ]
  },
  {
    id: 'rel-5',
    category: 'relationships',
    type: 'reel',
    brandEn: 'Sara Relationship Mindset',
    brandAr: 'سارة لوعي العلاقات',
    titleEn: 'Emotional Autonomy & The Trap of Seeking Safety in Others',
    titleAr: 'وهم الأمان الخارجي وعقدة الاحتياج المرضي',
    hookEn: 'Seeking emotional safety in another human is like building your house on quicksand.',
    hookAr: 'لو شريكك هو المصدر الوحيد لأمانك ولتقديرك لذاتك.. إنتي بتبني بيتك فوق رمال متحركة والحمل ده دايماً بيخليه يهرب!',
    captionEn: 'Inner safety is generated, not given. Relying entirely on a partner for self-worth smothers the relationship. Send word "أمان" to construct authentic emotional autonomy.',
    captionAr: 'البحث عن الأمان العاطفي في شخص آخر هو أشبه ببناء منزل كامل فوق رمال متحركة. الأمان مفهوم ينبع من الداخل أولاً ولا يملكه أحد ليمنحه لكِ. لما تخلي شريكك هو البوصلة الوحيدة لتقديرك لذاتك ولشعورك بالأمان، إنتِ بتطفي نور روحك وتضعي على كاهله حملاً ثقيلاً جداً، ينتهي به الأمر دائماً للهروب والابتعاد عنك للتحرر من هذا العبء. الحل هو بناء مرساة أمانك الداخلي المستقل من خلال تقدير الذات وتطوير حياتك الشخصية. ابعتي كلمة "أمان" في رسالة خاصة لتأسيس أمانك الداخلي الذي لا يهتز بأي ظروف.',
    ctaEn: 'Send word "أمان" to build your inner security.',
    ctaAr: 'ابعتيلي كلمة "أمان" في الرسائل الخاصة للالتحاق بورش التمكين العاطفي والاستقلال النفسي.',
    storyInteractiveEn: 'Interactive poll: Do you rely on their messages to feel safe?',
    storyInteractiveAr: 'تفاعل: بأي درجة بتعتمدي على كلامه ورسايله عشان تحسي بأمانك واستحقاقك 💓؟ (مؤشر التفاعل)',
    keyword: 'أمان',
    scenes: [
      {
        timeRange: '0:00 - 0:06',
        visualEn: 'Sarah standing next to a wide high-rise window, looking out calmly, then turning slowly with warm absolute confidence.',
        visualAr: 'تظهر سارة وهي واقفة بجانب نافذة كبيرة، تنظر للخارج بهدوء تام، ثم تلتفت ببطء شديد نحو الكاميرا وتبدأ الحديث بنبرة عميقة وصوت دافئ ممتلئ بالثقة والهدوء.',
        audioEn: 'Voiceover: "Placing your security in others is like building on sinking sand. Safety is cultivated inside, not gifted..."',
        audioAr: 'التعليق الصوتي: "البحث عن الأمان العاطفي في شخص آخر.. هو أشبه ببناء منزل كامل فوق رمال متحركة. الأمان مفهوم ينبع من الداخل أولاً .. ولا يملكه أحد ليمنحه لكِ."'
      },
      {
        timeRange: '0:06 - 0:15',
        visualEn: 'Sarah placing her hand gently over her chest, emphasizing emotional self-regulation.',
        visualAr: 'تتحرك الكاميرا بسلاسة للقطة متوسطة مقربة، وتضع سارة يدها برفق على قلبها لتعزيز المعنى النفسي وتأثير تحميل الشريك مسؤولية قيمتك واستحقاقك الذاتي.',
        audioEn: 'Voiceover: "When you demand they provide your ultimate self-worth, you place a suffocating burden on them. They will withdraw. Rebuild your own anchor."',
        audioAr: 'التعليق الصوتي: "لما تخلي شريكك هو مصدر أمانك الوحيد، إنتِ بتحطيه تحت ضغط رهيب وعبء تقيل بيخليه يهرب ويبعد عنك عشان يتنفس. ابني مرساة أمانك الداخلي المستقل وتطوير ذاتك عشان تكوني إنتِ مصدر أمانك الأول."'
      }
    ]
  },

  // 🌸 CATEGORY 4: Empowerment (Amira yusuf)
  {
    id: 'emp-1',
    category: 'empowerment',
    type: 'reel',
    brandEn: 'Amira Yusuf',
    brandAr: 'أميرة يوسف (سلسلة فك التعلق)',
    titleEn: 'Biochemical Cycles of Trauma Bonds (Trauma Hook)',
    titleAr: 'إدمان الوجع والتعلق الكيميائي السام (إنتي مش مدمنة للشخص.. إنتي مدمنة للدوبامين!)',
    hookEn: 'Why do we crave what hurts us? Deconstructing toxic attachment as an actual chemical addiction.',
    hookAr: 'إنتِ مش بتحبيه زي ما إنتِ فاكرة.. إنتِ ببساطة مدمنة للوجع اللي بيسببهولك، وجسمك هو اللي بيطلب الجرعة الدورية!',
    captionEn: 'Trauma bonds are biochemical traps of cortisol and dopamine. Break the cycle with active emotional detox and professional scale support. Send word "حرية" for program enrollment detail.',
    captionAr: 'الموضوع مش رومانسي خالص، الموضوع "إدمان كيميائي". عقلك في دوامة العلاقة السامة بيفرز كورتيزول (هرمون التوتر) عالي وقت الخناق والإهمال، ووقت الصلح بيغرق في دوبامين عالي، فبيربط بين الوجع والنشوة وتفاصيل العذاب. الخنقة وضربات القلب السريعة والتفكير المفرط لما بيبعد مش نداء روح، دي أعراض انسحاب جسدية حقيقية وجسمك بيطلب المخدر! الحل إنك تبدأي ديتوكس مشاعر وتوقفي الجرعة فورا. احفظي الفيديو ده وابعتي كلمة "حرية" في رسالة خاصة عشان تستلمي خطوات برنامج فك التعلق فورا.',
    ctaEn: 'Send "حرية" to get active emotional detox templates.',
    ctaAr: 'ابعتيلي كلمة "حرية" في الرسائل الخاصة لاستلام خريطة التعافي والالتحاق ببرنامجنا الخاص.',
    storyInteractiveEn: 'Interactive poll: Have you experienced withdrawal symptoms like overthinking?',
    storyInteractiveAr: 'تفاعل: هل سألتِ نفسك ليه رغم الإهانة أو التجاهل لسه متمسكة ⛓؟ ابعتي "حرية" واستلمي التفاصيل.',
    keyword: 'حرية',
    scenes: [
      {
        timeRange: '0:00 - 0:06',
        visualEn: 'B-roll of a woman staring anxiously at her shining mobile phone screen in a dimly lit rustic room.',
        visualAr: 'لقطة شيك ومعبرة لملامح سيدة حائرة بتنظر لشاشة موبايلها والضوء البارد بينعكس على عيونها الحزينة في ركن هادئ من الغرفة.',
        audioEn: 'Voiceover: "Why do we feel physically sick when they withdraw? It is not a call of the soul; it is biochemical withdrawal..."',
        audioAr: 'التعليق الصوتي: "الخنقة، ضربات القلب السريعة، والتفكير المفرط لما بيبعد مش نداء روح لروح.. دي أعراض انسحاب جسدية حقيقية، وجسمك بيطلب المخدر! الموضوع مش حب، الموضوع إدمان كيميائي..."'
      },
      {
        timeRange: '0:06 - 0:15',
        visualEn: 'The woman putting her phone face down with supreme resolution, taking a deep breath under warm glowing lights.',
        visualAr: 'لقطة حيوية ومشرقة لنفس السيدة وهي بتشيل تيجان الحزن، بتحط موبايلها مقفول على الطاولة، وبتاخد خطوة للأمام وبتنفس حرية وثقة تحت إضاءة دافئة.',
        audioEn: 'Voiceover: "Dopamine fires up during reconciliation, making toxic loops feel intensely addictive. Reclaim your stability, break the dosage, and enter active professional recovery."',
        audioAr: 'التعليق الصوتي: "عقلك وقت الخناق بيفرز كورتيزول وتوتر عالي، ووقت الصلح الكاذب بيفرز كمية رهيبة من الدوبامين، فبيربط بين الوجع والنشوة ويشوف العلاقة الهادية مملة. ابدأي ديتوكس مشاعر ووقفي الجرعة فوراً واستردي ذاتك ونورك المستقل."'
      }
    ]
  },
  {
    id: 'emp-2',
    category: 'empowerment',
    type: 'carousel',
    brandEn: 'Amira Yusuf',
    brandAr: 'أميرة يوسف (سلسلة فك التعلق)',
    titleEn: 'The Lost Mirror (Signs of Unconscious Self-Loss)',
    titleAr: 'النسخة المستنزفة وعلامات خسارة الذات (بصي في المراية بصدق!)',
    hookEn: 'Apologizing for things you never did? Your inner voice is reading with their critical dialect.',
    hookAr: 'بصي في المراية بصدق وسرعة.. مين الشخص اللي قدامك ده؟ ده مش إنتِ.. دي النسخة الباهتة اللي هما صمموها بالتنازلات ملو الصيف!',
    captionEn: 'Self-loss is the highest toll paid in co-dependency. Learn how toxic partnerships change your voice into criticism. Comment "النسخة الجديدة" to register for elite remote coaching masterclasses.',
    captionAr: 'أكبر خسارة في العلاقات السامة مش إنك تخسري الطرف التاني، الخسارة الحقيقية إنك بتخسري نفسك وتنسي ضحكتك وصوت طموحك اللي انطفى عشان ترضيهم وتتجنبي الخناق. السكوت بيبدأ بتنازل صغير وبينتهي بإنك بتعتذري على حاجات معملتيهاش وصوتك الداخلي هو انتقادهم المعادي ليكي! حان الوقت تستردي ذاتك من النهارده بـ "لا" صغيرة للحاجة اللي بتوجعك و"آه" كبيرة لنفسك. ابعتي كلمة "النسخة الجديدة" لحجز مكانك بجلسات الكوتشينج الخاصة معايا الشهر ده لتفصيل خطة تحررك.',
    ctaEn: 'Comment "النسخة الجديدة" for personal scale coaching.',
    ctaAr: 'اكتبي كلمة "النسخة الجديدة" في الكومنتات لمعرفة تفاصيل ورش استعادة الذات وبناء استحقاقك.',
    storyInteractiveEn: 'Interactive poll: Do you apologize often to avoid arguments?',
    storyInteractiveAr: 'تفاعل: لو شفتي نفسك من سنتين، تفتكري هتعرفيها 🥺؟ ولا التعلق غير ملامح روحك؟ (هعرفها / اتغيرت بزيادة)',
    keyword: 'النسخة_الجديدة',
    carouselSlides: [
      {
        slideNumber: 1,
        titleEn: 'Slide 1: apoloziging for things you did not do',
        titleAr: 'تعتذري على حاجات معملتيهاش؟',
        contentEn: 'You find yourself constantly taking the blame, smoothing over their bad moods, and saying sorry just to maintain a fragile quiet. This dissolves your self-respect.',
        contentAr: 'أول خسارة صامتة هي التنازل عن الحقيقة؛ بتلاقي نفسك بتعتذري على تصرفات عادية وتتحملي ذنب نرفزتهم بس عشان المركب تمشي وتسلمي من النكد.'
      },
      {
        slideNumber: 2,
        titleEn: 'Slide 2: dropping your hobbies and connections',
        titleAr: 'بطلتي تضحكي وتمارسي هواياتك؟',
        contentEn: 'You dropped your friends, skipped family gatherings, and slowly abandoned your career plans to fit into their tight, jealous comfort zone. You became a shadow.',
        contentAr: 'تاني علامة هي العزل التدريجي؛ بطلتي تقابلي صاحباتك، لغيتي طموحك ودراستك عشان السيطرة والغيرة، وتحولتي لـ "تابع" ملوش قرار مستقل.'
      },
      {
        slideNumber: 3,
        titleEn: 'Slide 3: setting a sacred boundaries rule',
        titleAr: 'بروتوكول "لا" الصغيرة و "نعم" لنفسك',
        contentEn: 'Boundaries are not walls of hate; they are lines of self-love. Start saying NO to small exhausting requests without explaining, reclaiming your personal sovereignty.',
        contentAr: 'التعافي بيبدأ بـ "لا" صغيرة لكل تصرف بيجي على كرامتك واستحقاقك، و"نعم" كبيرة وجريئة لنفسك وشغلك وصحتك النفسية برواق.'
      }
    ]
  },
  {
    id: 'emp-3',
    category: 'empowerment',
    type: 'reel',
    brandEn: 'Amira Yusuf',
    brandAr: 'أميرة يوسف (سلسلة فك التعلق)',
    titleEn: 'Trauma Comfort Zones & Self-Sabotage Triggers',
    titleAr: 'منطقة الراحة للألم وعقدة التدمير الذاتي التلقائي',
    hookEn: 'Why do you sabotage your own progress every time things start to feel calm and safe?',
    hookAr: 'ليه كل ما بتحاولي تتغيري وتتحسني.. وتعيشي بسلام حقيقي.. فجأة وبدون سبب واضح بتلاقي نفسك بوظتي كل حاجة ورجعتي لنقطة الصفر؟',
    captionEn: 'The subconscious brain mistakes old pain for a safe zone. We destroy our own peace because calm feels unfamiliar. Send "التحول" to align your nervous system with security.',
    captionAr: 'ده مش ضعف إرادة، ده اسمه "التدمير الذاتي التلقائي". عقلك الباطن اتبرمج في طفولتك إن التوتر والدراما هما الوضع الطبيعي المألوف، فلما تلمسي السلام عقلك بيخاف من الهدوء ده وبيعتبره "خطر" مجهول، فيخليكي تاخدي قرارات تدمر التحسن بدون وعي زي الرجوع لشخص مستنزف أو خلق مشاكل من مفيش! في جلسات الكوتشينج بنعيد تهيئة جهازك العصبي عشان يستقر في الأمان بدل الألم. ابعتي كلمة "التحول" في رسالة خاصة لحجز مكانك وتأمين نسختك الجديدة.',
    ctaEn: 'Send word "التحول" for neuro-recovery planning.',
    ctaAr: 'ابعتيلي كلمة "التحول" في الرسائل الخاصة لمعرفة تفاصيل كورس برمجة العقل الباطن واستقرار السلام.',
    storyInteractiveEn: 'Interactive poll: Do you self-sabotage when things go too well?',
    storyInteractiveAr: 'تفاعل: هل بتخافي من التغيير والسلام ودايماً مستنية المصيبة لما الأمور تمشي صح 😱؟ (أيوة جداً / بحاول أفصل)',
    keyword: 'التحول',
    scenes: [
      {
        timeRange: '0:00 - 0:05',
        visualEn: 'Up-close of Sarah drawing a circle on a paper, then crossing it out aggressively, looking deep into the camera.',
        visualAr: 'تبدأ اللقطة بسارة وهي جالسة، بترسم خطوط دائرة متوازنة على ورقة، وفجأة بتشخبط عليها بقوة كأنها بتمسحها، وترفع رأسها ببطء للكاميرا بنظرة فلسفية ثاقبة.',
        audioEn: 'Voiceover: "Every time you touch stability, do you break it? This is not weakness; it is trauma comfort zone..."',
        audioAr: 'التعليق الصوتي: "ليه كل ما بتحاولي تتغيري وتتحسني.. بترجعي تاني لنقطة الصفر؟ ده مش ضعف إرادة منك، ده اسمه التدمير الذاتي الناتج عن برمجة الطفولة..."'
      },
      {
        timeRange: '0:05 - 0:15',
        visualEn: 'Sarah with relaxed body language, speaking softly under elegant studio lighting.',
        visualAr: 'تظهر سارة بإضاءة دافئة وناعمة وهي تتحدث بلغة حانية وعميقة عن سيكولوجية إدمان هرمونات التوتر وأعراض الانسحاب الجسدية للكورتيزول.',
        audioEn: 'Voiceover: "The subconscious brain views calm as danger because it grew up in chaos. You trigger problems just to feel the old familiar stress. Rewire your nervous system to accept peace."',
        audioAr: 'التعليق الصوتي: "عقلك الباطن اتبرمج إن الألم والدراما هما الوضع الطبيعي، فلما يجي الهدوء بيترجمه على إنه خطر ما قبل العاصفة ويبدأ يدمر السلام بإيدك عشان يرجعك للتوتر المألوف. بنعلم جهازك العصبي إزاي يستقبل الأمان كوضع طبيعي جديد."',
        textScreenAr: 'عقلك الباطن بيدمر سلامك.. ليرجع للمألوف!'
      }
    ]
  },

  // 🍎 CATEGORY 5: Health & Nutrition
  {
    id: 'he-1',
    category: 'health',
    type: 'reel',
    brandEn: 'Hormonal Wellness',
    brandAr: 'أريج للصحة الهرمونية والغذائية',
    titleEn: 'Insulin Resistance & Stubborn Weight-Loss Platues',
    titleAr: 'مقاومة الأنسولين وعناد حرق الدهون (ليه الدايت القاسي حرب خسرانة؟)',
    hookEn: 'Yout weight platue is not a calorie math problem; it is a hormone blockade called Insulin Resistance.',
    hookAr: 'لو شو ما عملتي دايت وحرمتي نفسك مارح تنحفي؟ السالفة مو سعرات.. السالفة عناد هرموني اسمه مقاومة الأنسولين!',
    captionEn: 'Caloric restriction crashes under high insulin blockades. Balance blood sugar using strict food sequencing (fiber, protein, fats, then complex carbs) to reopen fat burning. Comment "نظام" to design your metabolic recovery.',
    captionAr: 'أدري السالفة محبطة والميزان ثابت، بس هذي الحقيقة اللي جسمك بيحاول يقولها لك كل يوم: السالفة هرمونات مش سعرات! مقاومة الأنسولين بتخلي خلايا جسمك صمة ما تسمع نداء الأنسولين، فيظل السكر محبوس بالدم والبنكرياس يفرز أكتر وأنسولينك العالي هو القفل اللي يمنع جسمك من حرق غرام دهون واحد خاصة بالبطن! العلاق بيبدأ بالترتيب الذكي: ابدئي وجبتك بالألياف (الخضار الورقي) لحماية دمك من الارتفاع المفاجئ، ثم البروتين والدهون، وآخر شي الكارب. اكتبيلي كلمة "نظام" في التعليقات عشان نتواصل ونبدأ نصلح علاقتك مع جسمك من الجذور.',
    ctaEn: 'Comment "نظام" for personalized metabolic plans.',
    ctaAr: 'اكتبي كلمة "نظام" في التعليقات وسيتم التواصل معكِ فوراً لإرسال كتالوج الوعي الهرموني والتغذية الذكية.',
    storyInteractiveEn: 'Interactive poll: Do you suffer from intense sugar cravings after meals?',
    storyInteractiveAr: 'تفاعل: بتعاني من خمول فظيع وهدة حيل بعد الغدا ونفسك في قطعة كاكاو حتى لو شبعانة 🍫؟ (أيوة جداً / عادي)',
    keyword: 'نظام',
    scenes: [
      {
        timeRange: '0:00 - 0:05',
        visualEn: 'Up-close of a person stepping onto scales with a look of disappointment, then sliding hands off in resignation.',
        visualAr: 'لقطة مقربة لشخص يقف على الميزان ويشعر بالإحباط الشديد لثبات الميزان، ثم بيفرك عيونه بقلة حيلة وخمول بعد الغداء.',
        audioEn: 'Voiceover: "Are you starving yourself and still not losing weight? It is not lack of willpower..."',
        audioAr: 'التعليق الصوتي: "تعبتِ من كثر المحاولة؟ لو شو ما عملتي دايت وحرمتي نفسك من كل شي تحبينه مارح تنحفي! السالفة مو سعرات.. السالفة عناد هرموني اسمه مقاومة الأنسولين!"'
      },
      {
        timeRange: '0:05 - 0:15',
        visualEn: 'Transitions showcasing rich green leafy salad followed by clean protein (grilled salmon) and healthy fats.',
        visualAr: 'لقطة ملونة ومبهجة تركز على ترتيب صحن الأكل: سلطة خضراء غنية بالألياف، ثم بروتين مشوي، ثم دهون صحية مع كارب معقد بذكاء.',
        audioEn: 'Voiceover: "Standard diets trigger stress which blocks fat-burning. Protect your bloodstream: start with fiber, then protein, then carbs. Tame insulin, release fat naturally."',
        audioAr: 'التعليق الصوتي: "خلايا جسمك سكرت الأبواب وصارت صمة ما تسمع نداء الأنسولين. الأنسولين العالي هو القفل اللي يمنع جسمك من حرق غرام دهون واحد. الحل مو إنك تجوعي، الحل بالترتيب: ابدئي وجبتك بالألياف الخضراء لتكون درع حماية لدمك، ثم البروتين والدهون، وآخر شي الكارب. كدة بتهدي الأنسولين وتفتحي قفل الدهون."'
      }
    ]
  },
  {
    id: 'he-2',
    category: 'health',
    type: 'reel',
    brandEn: 'Gut Micro-Biome Wellness',
    brandAr: 'أريج للصحة الهرمونية والغذائية',
    titleEn: 'Your Gut Micro-Biome Controls Your Mood and Sugar Cravings',
    titleAr: 'مملكة بكتيريا الأمعاء ومزاجك العام (إرادتك مش ضعيفة!)',
    hookEn: 'You are not the one choosing that chocolate bar; your gut bacteria is whispering signals directly to your brain.',
    hookAr: 'مفكرة حالك انتي يلي عم تقرري تاكلي كاكاو أو سكريات هلق؟ لا يا جميلة.. بكتيريا بطنك هي اللي ماسكة الريموت كنترول وبتتحكم بمزاجك!',
    captionEn: 'The gut-brain axis is direct. Over 90% of serotonin is manufactured in your microbiome. Dysbiosis sends intense sugar cravings to feed bad bacteria. Comment "بكتيريا" to start our detox and rebalancing protocol.',
    captionAr: 'هل فكرتي مرة ليش فجأة تحسين بضيق خلق بدون سبب؟ أو ليش قاعدة تحاربي نفسك عشان ما تاكلي حلو وبالنهاية تضعفين وكأن في شي داخلك أقوى من إرادتك؟ الأمعاء تسمى العقل الثاني لأن فيها ملايين الكائنات الدقيقة (الميكروبيوم) اللي بتصنع أكتر من 90% من هرمون السعادة في جسمك. لما يختل التوازن وتسيطر البكتيريا الضارة بتخليكي تشتهي السكر بجنون وترسل إشارات توتر وقلق لمخك لأنها تتغذى عليه! ابعتي كلمة "بكتيريا" في التعليقات وراح نبلش رحلة تنظيف وتوازن تخليك ترجعين تمسكين زمام الأمور وصحتك.',
    ctaEn: 'Comment "بكتيريا" to get rebalancing microbiome checklists.',
    ctaAr: 'اكتبي كلمة "بكتيريا" في التعليقات وسيتم إرسال قائمة أغذية بروبيوتيك لتنظيف معدتك واستقرار مودك.',
    storyInteractiveEn: 'Interactive poll: Do you experience sudden mood drops without physical reason?',
    storyInteractiveAr: 'تفاعل: هل بتحسي بضيق خلق وتقلب مزاج مفاجئ والبطن دايماً منفوخة 🎈؟ (نعم جداً / نادراً)',
    keyword: 'بكتيريا',
    scenes: [
      {
        timeRange: '0:00 - 0:06',
        visualEn: 'Up-close of a woman holding her stomach, feeling sudden fatigue and sadness, looking at her reflection with low energy.',
        visualAr: 'لقطة توضح سيدة بتنظر لنفسها بالمرآة بملامح حائرة، وحاطة يدها على بطنها بتشعر بثقل وانتفاخ وخمول ملهوش سبب واضح.',
        audioEn: 'Voiceover: "Why do you feel sudden sadness or intense anxiety for no logical reason? Your second brain is signaling..."',
        audioAr: 'التعليق الصوتي: "سألتي نفسك مرة ليش فجأة تندفعين لقرار نكد أو تحسين بضيق وحزن وانتي ما فيك شي؟ الأمعاء مرتبطة بمخك عن طريق عصب مباشر يعني أي خلل بالهضم بينعكس فورا على شكل قلق أو أرق!"'
      },
      {
        timeRange: '0:06 - 0:15',
        visualEn: 'Transitions of high-quality probiotic foods like pickles, leafy greens, and greek yogurt under clean presentation.',
        visualAr: 'لقطات متتابعة تظهر أغذية مخمرة طبيعية (مخلل خيار طبيعي، جرجير، زبادي يوناني) وسوائل دافئة شيك.',
        audioEn: 'Voiceover: "Inside your gut is an entire bacterial colony managing your serotonin. When bad bacteria dominates, it demands sugar and sends stress signals to your brain. Feed the friendly bacteria with prebiotic fibers and natural pickles. Reclaim your mood."',
        audioAr: 'التعليق الصوتي: "داخل أمعائك مملكة من البكتيريا النافعة هي اللي بتتحكم بمودك وتركيزك. لما تخرب بيئة أمعائك، البكتيريا الضارة هي اللي بتمسك الريموت وتخليكي تشتهي السكر بجنون وترسل إشارات توتر لمخك عشان تضعفي وتستسلمي. الحل مو بضعف إرادتك، الحل بتنظيف هالمملكة وتغذيتها بالألياف والبروبيوتيك والبعد عن السكر المكرر."'
      }
    ]
  }
];

export const CHAT_SCENARIOS: ChatScenario[] = [
  {
    id: 'scen-realestate',
    titleEn: 'Marassi Booking Close - DM to Direct WhatsApp Sale',
    titleAr: 'تأجير مراسي - تحويل استفسارات الدايركت لمبيعات وحجز مغلق',
    descriptionEn: 'Simulate how Aya Khaled manages high-intent luxury rental leads, converting a standard price inquiry into a premium closed booking on WhatsApp.',
    descriptionAr: 'محاكاة لكيفية إدارة واحتواء استفسارات الإيجار الفاخر بمراسي، والتوجيه السلس للواتساب لربط الحجز بنبرة ناصعة وتأصيل الاستعجال.',
    category: 'realstate',
    brand: 'ARIA rentals',
    initialMessageEn: 'Hi! Is chalet 409 Azour with the double view available for next week? How much is it?',
    initialMessageAr: 'مرحبا! هل شاليه 409 أزور ذو الإطلالة المزدوجة متاح للأسبوع القادم؟ وكم السعر لـ 4 أفراد؟',
    flow: [
      {
        visitorReplyTrigger: ['سعر', 'التكلفة', 'بكام', 'سعر الشاليه'],
        optionLabelEn: 'Option A: Quote direct flat rate immediately (Standard approach - risk of drop-off)',
        optionLabelAr: 'الخيار أ: إرسال السعر مباشرة بشكل صامت (طريقة تقليدية - خطر رحيل العميل)',
        ayaResponseEn: 'Hi, yes it is available. The rate is $500 per night. You can book now.',
        ayaResponseAr: 'أهلاً بك، نعم متاح. السعر هو 25,000 جنيه في الليلة. للحجز تواصل معنا.',
        strategyStepEn: 'No framing or value statement. High risk of lead dropping out based only on price competition.',
        strategyStepAr: 'افتقاد الهوية والجاذبية. لا يوجد خلق للقيمة مما يدفع العميل للمقارنة السعرية والرحيل.',
        nextOptions: [
          {
            optionLabelEn: 'Continue conversational friction',
            optionLabelAr: 'متابعة بحديث تقليدي',
            ayaResponseEn: 'Let me know if this fits your budget so I can reserve it.',
            ayaResponseAr: 'قولي لو السعر ده مناسب لميزانيتكم عشان أأكد الحجز.',
            strategyStepEn: 'Weak value posture. Places client in defensive spot.',
            strategyStepAr: 'تفاوض ضعيف يضعف هيبة وسلطة العلامة الفاخرة.'
          }
        ]
      },
      {
        visitorReplyTrigger: ['مزدوج', 'تفاصيل', 'حجز', 'متاح'],
        optionLabelEn: 'Option B: Aya’s High-Ticket Value Framing (Premium Conversational Strategy)',
        optionLabelAr: 'الخيار ب: استراتيجية أية لترسيخ الفخامة (البيع الاجتماعي الفاخر والتوجيه الفوري)',
        ayaResponseEn: 'Welcome! Yes, our rare double-view chalet 409 Azour has just opened its calendar for that exact frame. Imagine waking up to the flat, crystal silence of the Lagoon on your right terrace, and steps from elite yacht dining on your left. It features premium Egyptian cotton, direct digital smart lock keys, and thorough 5-star chemical sanitization. Since it is the most requested unit in Marassi, let’s move this over to our direct WhatsApp VIP booking chat so our fleet manager can prioritize your dates and send the tailored photos right now.',
        ayaResponseAr: 'أهلاً بك وبمقام عائلتك الكريمة ✨ نعم، شاليه 409 أزور النادر ذو الإطلالة المزدوجة متاح حالياً بالتحديد لتلك التواريخ. تخيل تصحوا صباحاً على المياه الفيروزية الهادئة للاجون لروقان الذهن، وبلكونتكم الثانية على بعد خطوات معدودة مشياً من أرقى مطاعم وكافيهات المارينا الحيوية بالمساء.. الشاليه مجهز بـ سمارت لوك لدخول رقمي وخصوصية كاملة، وفريقنا يعقمه فندرياً بالمللي قبل وصولكم. لأن الشاليه ذو الإطلالة المزدوجة هو أول ما ينفذ في الموسم، خلينا ننتقل فوراً لشات الواتساب VIP عشان نبعتلك بقية الصور والأسعار المفصلة ونأمن حجز عيلتك.',
        strategyStepEn: 'Luxury positioning: emphasizing exclusivity, convenience, and direct sensory benefits, shifting the conversation seamlessly to WhatsApp VIP line to close.',
        strategyStepAr: 'ترسيخ الفخامة الحسية: التركيز على التفاصيل والنقاء وتوجيه فوري ذكي للشات المغلق لربط المبيعات.',
        nextOptions: [
          {
            optionLabelEn: 'Route to WhatsApp Closure Link',
            optionLabelAr: 'توفير التوجيه المباشر للواتساب',
            ayaResponseEn: 'Excellent decision! Chat directly with our Concierge Desk here: [Concierge Link]. We have prioritized your dates.',
            ayaResponseAr: 'اختيار نخبوي ممتاز! اضغط على الرابط دلوقتي للانتقال الفوري للواتساب، وسيتم إبراز عروض وتأكيد تواريخكم فورا: [رابط خدمة الواتساب VIP]',
            strategyStepEn: 'Frictionless redirect routing. Highly qualified lead is closed securely.',
            strategyStepAr: 'إنهاء انسيابي لرحلة الشراء خالٍ من التعقيد وضابط للاستعجال والنخبوية.'
          }
        ]
      }
    ]
  }
];

export const PDF_CASE_STUDIES: PdfCaseStudy[] = [
  {
    id: 'pdf-amira',
    categoryAr: 'Personal Branding',
    categoryEn: 'Personal Branding',
    badgeBgLight: 'bg-[#FAF0EC] text-[#8E4F39]',
    badgeBgDark: 'bg-[#3A1F15] text-[#F3C2B2]',
    iconBgColor: 'bg-[#72321D]',
    titleAr: 'بلان أميرة بكر – محتوى نفسي وتربوي للأمهات والوالدين',
    titleEn: 'Amira Bakr Plan – Psychology & Child Parenting',
    descAr: 'محتوى نفسي وتربوي بـ Hooks مؤثرة وكاروسيلات تفاعلية.',
    descEn: 'Psychological and educational content with deep hooks and interactive carousels.',
    totalPages: 3,
    externalUrl: 'https://docs.google.com/spreadsheets/d/1AxmRKFoUOy2PWWuixYqiEnJZIOWs28Q1/edit?usp=sharing&ouid=111077804275936942926&rtpof=true&sd=true',
    pages: [
      {
        pageNum: 1,
        titleAr: 'الهوية والتأصيل النفسي للجمهور',
        titleEn: 'Identity & Psychological Foundation',
        sections: [
          {
            titleAr: 'فهم عقلية العميل المستهدف',
            titleEn: 'Target Audience Mindset',
            contentAr: 'التركيز على الأمهات اللواتي يواجهن صعوبة في ضبط الغضب، والآباء الباحثين عن لغة حوار آمنة مع المراهقين دون خسارة شخصيتهم.',
            contentEn: 'Focus on mothers dealing with emotional regulation, and parents looking to build safe dialog channels with teens.'
          },
          {
            titleAr: 'نبرة الصوت (Tone of Voice)',
            titleEn: 'Brand Tone of Voice',
            contentAr: 'نبرة علمية مطمئنة، هادئة، خالية من التعقيد الأكاديمي، تعتمد على الاحتواء والحلول القابلة للتطبيق فوراً.',
            contentEn: 'Scientific, reassuring, and calm tone. Free of academic jargon, focused entirely on practical step-by-step solutions.'
          }
        ]
      },
      {
        pageNum: 2,
        titleAr: 'سيناريوهات ريلز بناء الثقة والوعي',
        titleEn: 'Trust-Building Video Scripts',
        sections: [
          {
            titleAr: 'اللقطة الأولى: الهوك القوي [0:00 - 0:08]',
            titleEn: 'Scene 1: Psychological Hook',
            contentAr: 'الكاميرا تلتقط وجهاً قلقاً ثم يهدأ بابتسامة دافئة من د. أميرة.\nالتعليق: "لما طفلك يعاندك، المشكلة مش في قلة أدبه.. المشكلة إن جهازه العصبي حاسس بالتهديد!"',
            contentEn: 'Reassurance shot smiling directly at the screen.\nVoiceover: "When your child rebels, it is not disrespect. Their nervous system is simply feeling unsafe."'
          }
        ]
      },
      {
        pageNum: 3,
        titleAr: 'خطة الكاروسيل ومغناطيس التفاعل',
        titleEn: 'Carousel & Engagement Funnel',
        sections: [
          {
            titleAr: 'كاروسيل: "5 عبارات تهدم ثقة طفلك بنفسه دون أن تشعر"',
            titleEn: '5 Sentences that Destroy Self-Esteem',
            contentAr: 'شرح تفاعلي بالخطوات والبدائل التربوية السليمة مع تفعيل أوتوميشن كلمة "تربية" لإرسال الدليل المجاني للوالدين.',
            contentEn: 'Step-by-step interactive slides showing toxic verbal patterns. Triggers automatic book delivery via keyword "تربية".'
          }
        ]
      }
    ]
  },
  {
    id: 'pdf-aria-r2',
    categoryAr: 'عقارات فاخرة',
    categoryEn: 'Luxury Real Estate',
    badgeBgLight: 'bg-[#FAF0EC] text-[#8E4F39]',
    badgeBgDark: 'bg-[#3A1F15] text-[#F3C2B2]',
    iconBgColor: 'bg-[#72321D]',
    titleAr: 'بلان ARIA – حملة عقارات الساحل الشمالي (الجزء الثاني)',
    titleEn: 'ARIA Plan – North Coast Luxury Real Estate (Round 2)',
    descAr: 'حملة محتوى موسعة لـ ARIA مع سكريبتات وزوايا متعددة.',
    descEn: 'Expanded content campaign for ARIA luxury real estate with multi-angle scripts.',
    totalPages: 3,
    externalUrl: 'https://docs.google.com/spreadsheets/d/1fA5EuSJfAzdkEuDd0Wzr5is62flnXSnfo0Dd0XPkvI0/edit?usp=sharing',
    pages: [
      {
        pageNum: 1,
        titleAr: 'توسعة زوايا العرض وحسم مخاوف العميل',
        titleEn: 'Overcoming Premium Buyer Objections',
        sections: [
          {
            titleAr: 'زوايا الاستثمار والتشغيل الفندقي',
            titleEn: 'ROI & Professional Facility Management',
            contentAr: 'مخاطبة المستثمر الخليجي الذي يريد عائداً دورياً بالعملة الصعبة دون وجع دماغ الإشراف والتشغيل المباشر.',
            contentEn: 'Addressing GCC investors looking for steady USD rental yields without operational or maintenance headaches.'
          }
        ]
      },
      {
        pageNum: 2,
        titleAr: 'سيناريو "حياة بلا تنازلات في الساحل"',
        titleEn: 'Reels Script: Zero Compromise Lifestyle',
        sections: [
          {
            titleAr: 'مشهد الهوك الحسي البصري [0:00 - 0:07]',
            titleEn: 'Visual Sensory Hook [0:00 - 0:07]',
            contentAr: 'انعكاس الشمس على مسبح خاص يمتد للأفق مع موسيقى هادئة راقية.\nالتعليق: "عارف يعني إيه تقعد في مكان واحد بيوفرلك فيو البحر ومباشرة المسبح الخاص؟"',
            contentEn: 'Sunset reflections on infinity pool blending with sea view.\nVoiceover: "What does true peace look like? Private beach access, continuous serenity, and bespoke service."'
          }
        ]
      },
      {
        pageNum: 3,
        titleAr: 'أرقام الاستثمار وأتمتة الحجوزات',
        titleEn: 'Investment Statistics & WhatsApp Funnel',
        sections: [
          {
            titleAr: 'تأثير تشغيل ManyChat السريع بكلمة "الساحل"',
            titleEn: 'ManyChat Integration: Keyword "الساحل"',
            contentAr: 'توليد حجز فوري للمعاينة الرقمية ثلاثية الأبعاد لوحدات مراسي وتوجيه العميل لخدمة الكونسيرج الفاخرة.',
            contentEn: 'Instantly delivering interactive 3D virtual tours and connecting hot buyers directly with concierge desks.'
          }
        ]
      }
    ]
  },
  {
    id: 'pdf-aria',
    categoryAr: 'عقارات فاخرة',
    categoryEn: 'Luxury Real Estate',
    badgeBgLight: 'bg-[#FAF0EC] text-[#8E4F39]',
    badgeBgDark: 'bg-[#3A1F15] text-[#F3C2B2]',
    iconBgColor: 'bg-[#72321D]',
    titleAr: 'بلان ARIA Broker – التسويق العقاري الفاخر بمراسي والساحل',
    titleEn: 'ARIA Broker Plan – Luxury Real Estate Marketing & Strategy',
    descAr: 'خطة محتوى كاملة لشركة ARIA Broker للوساطة العقارية.',
    descEn: 'Full strategic content plan for ARIA Broker premium real estate in North Coast and Marassi.',
    totalPages: 4,
    externalUrl: 'https://docs.google.com/spreadsheets/d/1KdgA49b1-J_-RaRtPhLLnOusDy1wJ8WXIypmP8BDpp4/edit?usp=sharing',
    pages: [
      {
        pageNum: 1,
        titleAr: 'الهوية التسويقية واستراتيجية الفخامة',
        titleEn: 'Luxury Marketing & Strategy Blueprint',
        sections: [
          {
            titleAr: 'الجمهور المستهدف (Elite Targeting)',
            titleEn: 'Target Audience Profile',
            contentAr: 'المستثمر الخليجي، المصطاف رفيع المستوى الباحث عن الخصوصية المطلقة، والتشطيب الفندقي المتميز في مراسي والساحل الشمالي.',
            contentEn: 'High-net-worth GCC investors, luxury summer travelers seeking absolute privacy and premium hotel-grade chalets.'
          },
          {
            titleAr: 'أعمدة المحتوى (Content Pillars)',
            titleEn: 'Core Content Pillars',
            contentAr: 'التفاصيل الحسية وعيش التجربة الفاخرة، ضمان الموثوقية والأمان والتعقيم الفندقي، وتسهيل عملية الحجز المباشر بالدعم التقني.',
            contentEn: 'Sensory storytelling of beachside living, absolute reliability and security of booking, and streamlined smart payment options.'
          }
        ]
      },
      {
        pageNum: 2,
        titleAr: 'سيناريوهات الفيديو القصير (Double-View)',
        titleEn: 'Short Video Scripts (Double-View Formula)',
        sections: [
          {
            titleAr: 'المشهد الأول: الهوك القاتل [0:00 - 0:06]',
            titleEn: 'Scene 1: Sensory Hook',
            contentAr: 'الباب الذكي يفتح POV والكاميرا تندفع للشرفة المطلة على اليخوت الفاخرة بالمارينا.\nالتعليق: "لما بتيجي تحجز إجازتك في مراسي.. دايماً بتقع في الحيرة دي: تختار شاليه على المارينا وأجواء اليخوت؟ ولا هدوء اللاجون الرايق؟"',
            contentEn: 'Smart lock clicks open, camera sweeps dynamically to the first terrace revealing premium Marassi yachts.\nVoiceover: "When you book luxury in Marassi, you usually face a compromise..."'
          }
        ]
      },
      {
        pageNum: 3,
        titleAr: 'سيناريو استوديو المسبح (Step-Out Pool Access)',
        titleEn: 'Ground Floor Studio Script (Pool Access)',
        sections: [
          {
            titleAr: 'المشهد الأول: لقطة الخطوة الأولى [0:00 - 0:08]',
            titleEn: 'Scene 1: Immediate Action Hook',
            contentAr: 'شخص يستيقظ من سرير ذو أغطية فندقية بيضاء، يفتح التراس الزجاجي الكبير، ويخطو خطوتين ليجد حمام السباحة.\nالتعليق: "تخيل تصحى من النوم.. تفتح باب بلكونتك، وتلاقي نفسك جوه البيسين في خطوتين بالظبط! من غير ممرات ومن غير أسانسير."',
            contentEn: 'POV of opening a massive glass door from bedroom directly to pool.\nVoiceover: "Imagine waking up, sliding open your terrace, and stepping straight into pristine waters..."'
          }
        ]
      },
      {
        pageNum: 4,
        titleAr: 'جدول الحملة وتوزيع القنوات الشهري',
        titleEn: '30-Day Campaign & Distribution Calendar',
        sections: [
          {
            titleAr: 'التقسيم الأسبوعي للمحتوى المجدول',
            titleEn: 'Weekly Distribution Matrix',
            contentAr: 'الأسبوع الأول: التركيز على ريلز "معادلة الفخامة" والميزات المزدوجة للشاليهات.\nالأسبوع الثاني: تفعيل أوتوميشن الكلمات "مزدوج" و "بيسين" وقياس تجاوب الجمهور.\nالأسبوع الثالث: منشورات كاروسيل للمقارنة الحركية.\nالأسبوع الرابع: إعلانات الاستهداف الدافئ للعملاء لشهري أغسطس وسبتمبر.',
            contentEn: 'Week 1: Launch "Luxury Equation" reels highlighting double-view apartments.\nWeek 2: Direct automated lead magnets via keyword replies to qualify serious prospects.\nWeek 3: Infographics comparing Ground Floor pool access vs Upper Floor panoramic views.\nWeek 4: Retargeting campaigns with late-summer booking offers and custom vouchers.'
          }
        ]
      }
    ]
  },
  {
    id: 'pdf-wellness',
    categoryAr: 'Lifestyle',
    categoryEn: 'Lifestyle',
    badgeBgLight: 'bg-[#FAF0EC] text-[#8E4F39]',
    badgeBgDark: 'bg-[#3A1F15] text-[#F3C2B2]',
    iconBgColor: 'bg-[#72321D]',
    titleAr: 'بلان حياة – عادات يومية متوازنة وصحة نفسية',
    titleEn: 'Life Plan – Mindful Wellness & Balanced Lifestyle',
    descAr: 'خطة محتوى متكاملة لبراند بلان حياة.',
    descEn: 'Full strategic content plan for the Wellness & Mindful lifestyle brand.',
    totalPages: 3,
    externalUrl: 'https://docs.google.com/spreadsheets/d/1TZ1FMVXbNWP45Wefbh3_tOLAm33OsA-0T9OVoyF3YYE/edit?usp=drivesdk',
    pages: [
      {
        pageNum: 1,
        titleAr: 'صناعة القيمة وبناء الوعي اليومي',
        titleEn: 'Creating Value & Daily Awareness',
        sections: [
          {
            titleAr: 'فلسفة بلان حياة',
            titleEn: 'The Philosophy of Balance',
            contentAr: 'تمكين الفرد من إدارة يومه بصحة وهدوء نفسي، والتركيز على العادات الصغيرة التي تصنع فارقاً حقيقياً في جودة المعيشة والإنتاجية.',
            contentEn: 'Empowering individuals to manage their days with peace, focus on micro-habits that elevate living standards and productivity.'
          }
        ]
      },
      {
        pageNum: 2,
        titleAr: 'سيناريوهات الاستشفاء النفسي والجسدي',
        titleEn: 'Mental and Physical Rejuvenation Scripts',
        sections: [
          {
            titleAr: 'فيديو روتين الاستيقاظ الهادئ',
            titleEn: 'Calm Wake-Up Routine Reel',
            contentAr: 'لقطة شروق الشمس مع فنجان قهوة وكتابة اليوميات.\nالتعليق: "الاستيقاظ بدون توتر هو أعظم هدية ممكن تقدمها لجهازك العصبي اليوم وكل يوم."',
            contentEn: 'Quiet sunrise moments with a fresh brew and journaling.\nVoiceover: "A morning without alarms and stress is the greatest gift you can offer your body today."'
          }
        ]
      },
      {
        pageNum: 3,
        titleAr: 'أعمدة نشر الـ Wellness السنوية',
        titleEn: 'Yearly Wellness Distribution Pillars',
        sections: [
          {
            titleAr: 'توزيع النشر وتفاعل الجمهور بكلمة "حياة"',
            titleEn: 'ManyChat Funnel: Keyword "حياة"',
            contentAr: 'توزيع مخططات يومية جاهزة للطباعة فور إرسال الكلمة المفتاحية على الخاص لبناء قاعدة عملاء دافئة للمنتجات القادمة.',
            contentEn: 'Distributing print-ready planners to readers typing the keyword, converting attention into qualified potential buyers.'
          }
        ]
      }
    ]
  },
  {
    id: 'pdf-lubna',
    categoryAr: 'Personal Branding',
    categoryEn: 'Personal Branding',
    badgeBgLight: 'bg-[#FAF0EC] text-[#8E4F39]',
    badgeBgDark: 'bg-[#3A1F15] text-[#F3C2B2]',
    iconBgColor: 'bg-[#72321D]',
    titleAr: 'بلان لبنى هاني – بناء براند شخصي وصناعة التأثير',
    titleEn: 'Lubna Hany Plan – Personal Branding & Influence',
    descAr: 'بلان محتوى متكامل لبراند لبنى هاني.',
    descEn: 'Comprehensive content packet designed for Lubna Hany personal brand.',
    totalPages: 3,
    externalUrl: 'https://docs.google.com/spreadsheets/d/1xzyhcNYCt75lh7b7q7ruCzlD3p24QE5BQWE75Gv9mmQ/edit?usp=drivesdk',
    pages: [
      {
        pageNum: 1,
        titleAr: 'استراتيجية البرند الشخصي وصناعة التأثير',
        titleEn: 'Personal Branding & Authority Building',
        sections: [
          {
            titleAr: 'الأعمدة الأساسية لصناعة المحتوى لـ لبنى',
            titleEn: 'Core Creative Pillars for Lubna',
            contentAr: 'إظهار رحلة النجاح الحقيقية، والتركيز على مشاركة الخبرات والدروس القاسية وتوثيق التحديات اليومية بطريقة صادقة ومقنعة للجمهور.',
            contentEn: 'Sharing real business struggles, celebrating major milestones, and framing daily routines as educational stories.'
          }
        ]
      },
      {
        pageNum: 2,
        titleAr: 'سكريبتات الفيديوهات عالية الانتشار (High-Retention)',
        titleEn: 'High-Retention Video Blueprints',
        sections: [
          {
            titleAr: 'هوك "السر المالي الذي لا يخبرك به الخبراء"',
            titleEn: 'Reels Hook: The Hidden Cost of Success',
            contentAr: 'الكاميرا تتبع لقطة حركة سريعة لليد تكتب على سبورة.\nالتعليق: "عشان تعمل أول مليون جنيه، إنت مش محتاج كورس بـ ألف دولار.. محتاج تفهم المعادلة البسيطة دي!"',
            contentEn: 'Writing on a board dynamically.\nVoiceover: "To hit your first milestone, you do not need expensive software. You just need to master this simple habit."'
          }
        ]
      },
      {
        pageNum: 3,
        titleAr: 'رحلة تحويل المتابعين لعملاء مخلصين',
        titleEn: 'Subscriber to Premium Client Conversion',
        sections: [
          {
            titleAr: 'استخدام أوتوميشن كلمة "سر"',
            titleEn: 'Keyword Automation "سر"',
            contentAr: 'إرسال دليل صناعة البراند الشخصي بنقرة واحدة لزيادة معدلات النقر وتأهيل العملاء لشراء الاستشارات الفردية المغلقة.',
            contentEn: 'Sending personal brand blueprint via DM, prompting users to book high-ticket 1-on-1 strategy sessions.'
          }
        ]
      }
    ]
  },
  {
    id: 'pdf-rasha',
    categoryAr: 'Personal Branding',
    categoryEn: 'Personal Branding',
    badgeBgLight: 'bg-[#FAF0EC] text-[#8E4F39]',
    badgeBgDark: 'bg-[#3A1F15] text-[#F3C2B2]',
    iconBgColor: 'bg-[#72321D]',
    titleAr: 'بلان د. رشا – تموضع الهوية الطبية وتصحيح الخرافات',
    titleEn: 'Dr. Rasha Plan – Medical Authority & Healthcare Branding',
    descAr: 'محتوى متخصص للبراند الشخصي لـ د. رشا.',
    descEn: 'Bespoke high-concept content pack for Dr. Rasha personal brand.',
    totalPages: 3,
    externalUrl: 'https://docs.google.com/spreadsheets/d/1pkJ2ASANU9ClX-h2cOqR9SZPaRXwZKW7toIeWrt9at4/edit?usp=drivesdk',
    pages: [
      {
        pageNum: 1,
        titleAr: 'تموضع الهوية الطبية في فضاء السوشيال ميديا',
        titleEn: 'Positioning Medical Authority in Social Space',
        sections: [
          {
            titleAr: 'استراتيجية الثقة والوقاية الطبية الموثوقة',
            titleEn: 'Reassurance & Safe Health Education',
            contentAr: 'تأصيل دور د. رشا كطبيبة رائدة تفكك الخرافات الطبية المنتشرة وتوفر نصائح صحية قائمة على الأدلة العلمية الرصينة.',
            contentEn: 'Positioning Dr. Rasha as an authoritative physician dismantling dangerous health myths with clear, evidence-based research.'
          }
        ]
      },
      {
        pageNum: 2,
        titleAr: 'سيناريوهات تصحيح الخرافات والرد على تساؤلات المرضى',
        titleEn: 'Myth-Busting Reels & Q&A Scenarios',
        sections: [
          {
            titleAr: 'سكريبت "ليه التحاليل بتاعتك سليمة بس إنت تعبان؟"',
            titleEn: 'Reels Script: Normal Lab Results Yet Exhausted?',
            contentAr: 'مظهر طبي وتجربة بصرية فريدة تفاعلية.\nالتعليق: "بتروح للدكتور يقولك تحاليلك ممتازة، بس إنت مش قادر تقوم من السرير؟ تعالى أقولك السبب الحقيقي المستخبى!"',
            contentEn: 'Medical setting with elegant visuals.\nVoiceover: "Your lab results look perfectly normal, yet you can barely drag yourself out of bed? Let us uncover the hidden cause."'
          }
        ]
      },
      {
        pageNum: 3,
        titleAr: 'جدول تحويل الاستفسارات إلى حجوزات عيادة حقيقية',
        titleEn: 'Clinic Bookings Conversion Roadmap',
        sections: [
          {
            titleAr: 'قمع تفعيل كلمة "موعد" التلقائية',
            titleEn: 'ManyChat Funnel: Keyword "موعد"',
            contentAr: 'تسهيل عملية الحجز عبر المساعد الآلي على الواتساب لتقليل نسبة التغيب عن العيادة وضمان تنظيم المواعيد بيسر.',
            contentEn: 'Streamlining appointment loops via automatic scheduling assistant on WhatsApp to reduce no-show rates.'
          }
        ]
      }
    ]
  },
  {
    id: 'pdf-pack123',
    categoryAr: 'Showcase',
    categoryEn: 'Showcase',
    badgeBgLight: 'bg-[#FAF0EC] text-[#8E4F39]',
    badgeBgDark: 'bg-[#3A1F15] text-[#F3C2B2]',
    iconBgColor: 'bg-[#72321D]',
    titleAr: 'حزمة سكريبتات ريلز سريعة وكابشنز بيعية متكاملة',
    titleEn: 'Fast Reels Scripts & High-Converting Captions Pack',
    descAr: 'مجموعة متنوعة من السكريبتات والكابشن.',
    descEn: 'Diverse collection of viral short-form video scripts and high-converting captions.',
    totalPages: 3,
    externalUrl: 'https://docs.google.com/spreadsheets/d/1JS2-73fC6grOvvzrePGcNT9o_LAvrrMHET7E28Gmw-M/edit?usp=drivesdk',
    pages: [
      {
        pageNum: 1,
        titleAr: 'مفهوم حزم المحتوى والسكريبت السريع',
        titleEn: 'Content Pack Concept & Fast Scripting',
        sections: [
          {
            titleAr: 'لماذا تعمل حزم المحتوى المتنوعة؟',
            titleEn: 'Why Diverse Content Packs Convert',
            contentAr: 'توفير هيكل سكريبت مرن يعتمد على 3 أركان: خطاف حاسم سريع، حشوة قصيرة مفيدة، ودعوة واضحة لاتخاذ إجراء فوري.',
            contentEn: 'Providing modular script structures based on three absolute pillars: high-impact hooks, short rich values, and clear call-to-actions.'
          }
        ]
      },
      {
        pageNum: 2,
        titleAr: 'نماذج لـ 3 سكريبتات ريلز جاهزة للتطبيق',
        titleEn: '3 Ready-to-Shoot Reels Templates',
        sections: [
          {
            titleAr: 'سكريبت 1: زاوية المقارنة والفضول المباشر',
            titleEn: 'Script 1: Visual Comparison & Curiosity Hook',
            contentAr: 'مقارنة بصرية واضحة بين أسلوبين.\nالتعليق: "العلامات التجارية الفاشلة بتعمل كدة.. أما العمالقة فبيعملوا السر ده!"',
            contentEn: 'Fast visual split.\nVoiceover: "Struggling brands push sales directly. Market giants utilize this psychological loop instead..."'
          }
        ]
      },
      {
        pageNum: 3,
        titleAr: 'صياغة الكابشنز البيعية وتوزيع الكلمات المفتاحية',
        titleEn: 'High-Ticket Caption Copywriting & Keywords',
        sections: [
          {
            titleAr: 'نموذج الكابشن الهيكلي المقنع لـ Instagram',
            titleEn: 'High-Converting Instagram Caption Blueprint',
            contentAr: 'توليد الرغبة وعرض المشكلة بدقة متناهية مع تفعيل أوتوميشن كلمة "حزمة" لإرسال الروابط فوراً للعملاء المهتمين.',
            contentEn: 'Injecting deep desire and structured pain points, enabling keyword "حزمة" to capture interested buyers immediately.'
          }
        ]
      }
    ]
  },
  {
    id: 'pdf-highlights',
    categoryAr: 'Showcase',
    categoryEn: 'Showcase',
    badgeBgLight: 'bg-[#FAF0EC] text-[#8E4F39]',
    badgeBgDark: 'bg-[#3A1F15] text-[#F3C2B2]',
    iconBgColor: 'bg-[#72321D]',
    titleAr: 'معرض إنجازات آية خالد – أقوى نماذج المحتوى الاستراتيجي',
    titleEn: 'Aya Khaled – Master Strategic Content Portfolio Highlights',
    descAr: 'نظرة عامة على أبرز شغل آية وأنواع المحتوى.',
    descEn: 'A master showcase highlighting Aya Khaled’s best strategic content assets.',
    totalPages: 3,
    externalUrl: 'https://docs.google.com/spreadsheets/d/1LDcSADNGzgTwLQLK2tAps9T2_rQNlS1wRnmM6KQBbY8/edit?usp=drivesdk',
    pages: [
      {
        pageNum: 1,
        titleAr: 'منهجية العمل والنتائج بالأرقام',
        titleEn: 'Working Methodology & Proven ROI',
        sections: [
          {
            titleAr: 'رؤية وفلسفة صناعة المحتوى الاستراتيجي',
            titleEn: 'The Strategic Creative Vision',
            contentAr: 'المحتوى ليس مجرد كلمات لطيفة، بل هو أصل تسويقي مستدام يولد الأرباح، يبني الثقة المتبادلة، ويحول المشاهد العابر لمشترٍ دائم.',
            contentEn: 'Content is not just cute words; it is a long-term business asset that drives growth, establishes authority, and closes sales.'
          }
        ]
      },
      {
        pageNum: 2,
        titleAr: 'نماذج من سيناريوهات الحملات الكبرى',
        titleEn: 'Major Campaign Launch Scripts',
        sections: [
          {
            titleAr: 'حملة إطلاق براند عقاري فاخر بالساحل الشمالي',
            titleEn: 'Elite Real Estate Launch Sequence',
            contentAr: 'تحليل الحملة التي حققت تفاعلاً كبيراً ومئات طلبات المعاينة المباشرة عبر تفعيل أوتوميشن الكلمات التفاعلية.',
            contentEn: 'Anatomy of the campaign that drove massive engagement and hundreds of high-quality organic leads via keyword funnels.'
          }
        ]
      },
      {
        pageNum: 3,
        titleAr: 'توصيات العملاء وتجربة التعاون والنجاح المشترك',
        titleEn: 'Client Testimonials & Working Experience',
        sections: [
          {
            titleAr: 'ماذا يقول الشركاء بعد تجربة العمل؟',
            titleEn: 'What Partners Say After Collaboration',
            contentAr: 'آراء موثقة من أطباء، مستشاري علاقات، وشركات عقارية حول دقة الالتزام، عمق الصياغة، والنتائج التسويقية الرائعة.',
            contentEn: 'Validated reviews from clinical experts, premium realtors, and relationship coaches highlighting creative precision and high ROI.'
          }
        ]
      }
    ]
  },
  {
    id: 'pdf-plan-v3',
    categoryAr: 'Content Plan',
    categoryEn: 'Content Plan',
    badgeBgLight: 'bg-[#FAF0EC] text-[#8E4F39]',
    badgeBgDark: 'bg-[#3A1F15] text-[#F3C2B2]',
    iconBgColor: 'bg-[#72321D]',
    titleAr: 'بلان محتوى تفصيلي وزوايا مبيعات وأفكار بصرية متطورة',
    titleEn: 'Advanced Content Plan & Cinematic Sales Blueprints',
    descAr: 'بلان محتوى تفصيلي بزوايا وأفكار متجددة.',
    descEn: 'A deep content plan detailing creative angles and fresh marketing hooks.',
    totalPages: 3,
    externalUrl: 'https://docs.google.com/spreadsheets/d/12nu7RlcoZVc9occ5y-XMKKUgXnXq3OAAbfkhvsYVaT8/edit?usp=drivesdk',
    pages: [
      {
        pageNum: 1,
        titleAr: 'تحديث زوايا المحتوى وهيكل النشر الحديث',
        titleEn: 'Modern Creative Angles & Publishing Grid',
        sections: [
          {
            titleAr: 'استراتيجية الخروج من رتابة المحتوى المتكرر',
            titleEn: 'Breaking Through Content Redundancy',
            contentAr: 'تجنب القوالب المعتادة والاعتماد على بناء صراع معرفي شيق يجذب المشاهد من اللحظة الأولى ويبقيه متفاعلاً للنهاية.',
            contentEn: 'Avoiding repetitive industry tropes. Introducing psychological hooks that command and capture high attention rates.'
          }
        ]
      },
      {
        pageNum: 2,
        titleAr: 'سيناريوهات الفيديو عالية الإنتاج والأفكار البصرية',
        titleEn: 'Cinematic Visual Guidelines & Voiceover Scripts',
        sections: [
          {
            titleAr: 'سيناريو "حقيقة واحدة تمنعك من زيادة أسعار خدماتك"',
            titleEn: 'Script: The One Truth Stopping Your Pricing Upgrade',
            contentAr: 'لقطة مقربة لكتابة كلمة "السعر" ثم شطبها بقلم أحمر.\nالتعليق: "الناس مش بترفض تدفع السعر العالي عشان معندهاش فلوس.. بترفض لأنك لسة بتكلمهم بنفس طريقة المبتدئين!"',
            contentEn: 'Close-up shot of writing and crossing out prices.\nVoiceover: "High-ticket clients do not reject your high prices due to budget; they reject because you sound like an amateur!"'
          }
        ]
      },
      {
        pageNum: 3,
        titleAr: 'قمع التحويل النهائي وتفعيل الكلمات التفاعلية',
        titleEn: 'Final Conversion Funnel & Keyword Setup',
        sections: [
          {
            titleAr: 'أوتوميشن مبيعات كلمة "خطة"',
            titleEn: 'ManyChat Funnel: Keyword "خطة"',
            contentAr: 'مخطط سير العميل الفاخر من قراءة المنشور إلى الحصول التلقائي على الدليل المالي المصغر وحجز استشارة المعاينة مباشرة.',
            contentEn: 'Converting active readers into pre-qualified leads by instantly sending comprehensive blueprints directly via DM.'
          }
        ]
      }
    ]
  },
  {
    id: 'pdf-sample03',
    categoryAr: 'متنوع',
    categoryEn: 'Mixed Portfolio',
    badgeBgLight: 'bg-[#FAF0EC] text-[#8E4F39]',
    badgeBgDark: 'bg-[#3A1F15] text-[#F3C2B2]',
    iconBgColor: 'bg-[#72321D]',
    titleAr: 'نموذج محتوى تفكيك المخاوف وبناء الرغبة الاستراتيجية',
    titleEn: 'Strategic Friction Demolition & Desire Creation Model',
    descAr: 'نموذج محتوى بزوايا تسويقية مختلفة.',
    descEn: 'A pristine content sample showcasing various marketing angles.',
    totalPages: 2,
    externalUrl: 'https://docs.google.com/spreadsheets/d/1of2XICVVft-BFMmKjnXfrp6_qKiJ26AzfMrEr2MeI0o/edit?usp=drivesdk',
    pages: [
      {
        pageNum: 1,
        titleAr: 'تحليل الزاوية التسويقية للمثال الثالث',
        titleEn: 'Marketing Angle Analysis (Sample 03)',
        sections: [
          {
            titleAr: 'استراتيجية تفكيك المخاوف وبناء الرغبة الحقيقية',
            titleEn: 'Desire Creation & Overcoming Friction',
            contentAr: 'طريقة ذكية لمخاطبة العملاء المتشككين من خلال تقديم براهين منطقية وتجارب حية تثبت تفوق الخدمة وسرعة تحقيقها للنتائج المرجوة.',
            contentEn: 'A strategic blueprint for addressing skeptical buyers by presenting rational proof and fast-track implementation results.'
          }
        ]
      },
      {
        pageNum: 2,
        titleAr: 'صياغة المحتوى والسكريبت المصاحب للكتابة',
        titleEn: 'Copywriting Sample & Video Scripting',
        sections: [
          {
            titleAr: 'السيناريو البصري والكابشن المقنع',
            titleEn: 'Visual Storyboard & Conversion Caption',
            contentAr: 'تكامل كامل بين الكلمات المكتوبة والإرشادات البصرية لإيصال فكرة الحملة بوضوح وسلاسة فائقة تضمن تفاعل المتابعين المخلصين.',
            contentEn: 'Flawless alignment of voiceover words and sensory visual scenes to convey core brand values with maximum efficiency.'
          }
        ]
      }
    ]
  },
  {
    id: 'pdf-sample01',
    categoryAr: 'متنوع',
    categoryEn: 'Mixed Portfolio',
    badgeBgLight: 'bg-[#FAF0EC] text-[#8E4F39]',
    badgeBgDark: 'bg-[#3A1F15] text-[#F3C2B2]',
    iconBgColor: 'bg-[#72321D]',
    titleAr: 'نموذج النصوص الإقناعية واللقطات السينمائية المؤثرة',
    titleEn: 'Persuasive Copywriting & Cinematic Video Shots Model',
    descAr: 'نموذج مبتكر يعرض أسلوب الكتابة.',
    descEn: 'An innovative writing showcase presenting unique copy structures.',
    totalPages: 2,
    externalUrl: 'https://docs.google.com/spreadsheets/d/1CVE7n83A325c2ehRdJ7El1tb94GlgzG3k9uUif-u9hc/edit?usp=drivesdk',
    pages: [
      {
        pageNum: 1,
        titleAr: 'الهيكل الإنشائي والنبرة الإقناعية للمثال الأول',
        titleEn: 'Persuasive Structure & Tone (Sample 01)',
        sections: [
          {
            titleAr: 'فلسفة كتابة النصوص المؤثرة (Copywriting Philosophy)',
            titleEn: 'High-Impact Copywriting Methods',
            contentAr: 'الاعتماد على جمل قصيرة مكثفة تنبض بالحياة، تخاطب حواس العميل مباشرة، وتدفعه لمواصلة القراءة بشغف وفضول متجدد.',
            contentEn: 'Utilizing highly condensed, active sentences that speak to the reader’s senses, driving high reading completion rates.'
          }
        ]
      },
      {
        pageNum: 2,
        titleAr: 'النص الإبداعي واللقطات السينمائية المقترحة',
        titleEn: 'Creative Copy & Suggested Cinematic Shots',
        sections: [
          {
            titleAr: 'نموذج السكريبت المصور ذو التأثير البصري الفوري',
            titleEn: 'High-Concept Cinematic Script',
            contentAr: 'تحديد دقيق لزوايا الكاميرا وحركة الإضاءة لترافق الكلمة المنطوقة، مما يعزز الموثوقية والهيبة ويجذب المشاهد ذو الذوق الرفيع.',
            contentEn: 'Meticulous details for lighting and camera movements paired with voiceover to build maximum luxury and brand authority.'
          }
        ]
      }
    ]
  },
  {
    id: 'pdf-sample00',
    categoryAr: 'متنوع',
    categoryEn: 'Mixed Portfolio',
    badgeBgLight: 'bg-[#FAF0EC] text-[#8E4F39]',
    badgeBgDark: 'bg-[#3A1F15] text-[#F3C2B2]',
    iconBgColor: 'bg-[#72321D]',
    titleAr: 'نموذج استراتيجية التنوع وتوزيع المحتوى متعدد القنوات',
    titleEn: 'Multi-Channel Content Diversity Strategy Blueprint',
    descAr: 'نموذج محتوى متنوع من أعمال آية.',
    descEn: 'A diverse and highly versatile content showcase of premium assets.',
    totalPages: 2,
    externalUrl: 'https://docs.google.com/spreadsheets/d/1CVE7n83A325c2ehRdJ7El1tb94GlgzG3k9uUif-u9hc/edit?usp=drivesdk',
    pages: [
      {
        pageNum: 1,
        titleAr: 'استراتيجية التنوع وتأثير تنوع المحتوى',
        titleEn: 'Content Versatility & Strategy Overview',
        sections: [
          {
            titleAr: 'أهمية تنوع الأشكال البصرية في قنوات التواصل',
            titleEn: 'Visual Variety Across Campaign Channels',
            contentAr: 'المزاوجة الفعالة بين ريلز الفيديو السريعة، الكاروسيلات التعليمية الدقيقة، والاستوريات التفاعلية اليومية لضمان تفاعل دائم.',
            contentEn: 'Blending fast-form video, educational slides, and interactive daily stories to create cohesive brand presence.'
          }
        ]
      },
      {
        pageNum: 2,
        titleAr: 'سكريبت تطبيقي وكابشن عالي التحويل',
        titleEn: 'Sample Application Script & High-Converting Copy',
        sections: [
          {
            titleAr: 'نموذج كتابة نصوص الاستحواذ السريع على الانتباه',
            titleEn: 'Fast Attention Grab Script Template',
            contentAr: 'خطافات بصرية جريئة مبنية على زوايا سيكولوجية تثبت اهتمام المتلقي وتوجهه لخدمة الرد المباشر بكلمات مفتاحية مجهزة.',
            contentEn: 'Psychological hooks designed to capture professional audience attention immediately, leading to integrated DM funnels.'
          }
        ]
      }
    ]
  },
  {
    id: 'pdf-sample06',
    categoryAr: 'متنوع',
    categoryEn: 'Mixed Portfolio',
    badgeBgLight: 'bg-[#FAF0EC] text-[#8E4F39]',
    badgeBgDark: 'bg-[#3A1F15] text-[#F3C2B2]',
    iconBgColor: 'bg-[#72321D]',
    titleAr: 'نموذج التكامل التقني وأتمتة المبيعات بـ ManyChat',
    titleEn: 'Sales Automation & Smart ManyChat Funnel Model',
    descAr: 'أحدث نموذج محتوى من شغل آية.',
    descEn: 'A modern, high-converting content model representing recent works.',
    totalPages: 2,
    externalUrl: 'https://docs.google.com/spreadsheets/d/1c9858H-oJ1DQqtt0ekMiLrrLuIMMz2IDeqM3e3HeNDs/edit?usp=drivesdk',
    pages: [
      {
        pageNum: 1,
        titleAr: 'الهيكل الفني والعمق الاستراتيجي للمثال السادس',
        titleEn: 'Creative Anatomy & Tactical Goals (Sample 06)',
        sections: [
          {
            titleAr: 'التكامل التقني مع أوتوميشن المبيعات الحديث',
            titleEn: 'Technological Synergy with Sales Automations',
            contentAr: 'ربط السكريبت بمحفزات أوتوميشن ManyChat ذكية لقياس مستويات اهتمام العملاء بدقة وإرسال عروض الأسعار تلقائياً.',
            contentEn: 'Perfect coupling of video content with smart DM replies to segment potential luxury buyers and convert traffic.'
          }
        ]
      },
      {
        pageNum: 2,
        titleAr: 'نص السكريبت المقترح والكابشن التفاعلي الحاسم',
        titleEn: 'Reels Script & Definitive Caption Call-to-Action',
        sections: [
          {
            titleAr: 'نصوص المحادثة التفاعلية الفعالة بالدايركت',
            titleEn: 'Conversational DM Script Formulas',
            contentAr: 'كتابة تمنح المتابع شعوراً بالحصرية والاهتمام الشخصي الفائق، مما يعزز رغبته في شراء الخدمات والاستشارات الراقية.',
            contentEn: 'Copy structured to deliver absolute exclusivity and deep premium service value, triggering instant high-ticket conversions.'
          }
        ]
      }
    ]
  },
  {
    id: 'pdf-sample05',
    categoryAr: 'متنوع',
    categoryEn: 'Mixed Portfolio',
    badgeBgLight: 'bg-[#FAF0EC] text-[#8E4F39]',
    badgeBgDark: 'bg-[#3A1F15] text-[#F3C2B2]',
    iconBgColor: 'bg-[#72321D]',
    titleAr: 'نموذج مرونة نبرة الصوت وتناغم الهوية الفاخرة',
    titleEn: 'Brand Voice Tone & High-Ticket Brand Consistency Model',
    descAr: 'نموذج إضافي يعرض تنوع الستايل والـ Tone.',
    descEn: 'An additional content piece showcasing diverse writing styles and tones.',
    totalPages: 2,
    externalUrl: 'https://docs.google.com/spreadsheets/d/17qHLx1rMxa2De87gOkYrw797nEhBB1EpTzEzGZRhUkI/edit?usp=drivesdk',
    pages: [
      {
        pageNum: 1,
        titleAr: 'دراسة مرونة الستايل والـ Tone للمثال الخامس',
        titleEn: 'Aesthetic Tone & Style Versatility (Sample 05)',
        sections: [
          {
            titleAr: 'كيف تختار الـ Tone المناسب لبراندك الفاخر؟',
            titleEn: 'Selecting the Ideal Brand Voice for High-Ticket Assets',
            contentAr: 'المزاوجة الفريدة بين الوقار والمهنية الطبية العالية مع البساطة والقرب الإنساني الذي يزيل الحواجز ويبني المودة والثقة.',
            contentEn: 'Perfectly balancing academic medical authority with warm, empathetic human messaging that fosters immediate client trust.'
          }
        ]
      },
      {
        pageNum: 2,
        titleAr: 'سكريبت ونصوص جاهزة وتكتيكات الاستوري اليومي',
        titleEn: 'Ready-to-Shoot Scripts & Daily Interactive Story Tactics',
        sections: [
          {
            titleAr: 'استراتيجية "ملصقات الأسئلة" الذكية بالانستغرام',
            titleEn: 'Instagram Interactive Question Stickers Strategy',
            contentAr: 'توظيف الأسئلة غير المتوقعة لإظهار الكفاءة المهنية العالية لـ آية في الرد وصياغة الحلول السحرية لحل أزمات البراندات.',
            contentEn: 'Leveraging custom story prompts to exhibit creative competence, directly generating hot leads into direct messages.'
          }
        ]
      }
    ]
  },
  {
    id: 'pdf-sample04',
    categoryAr: 'متنوع',
    categoryEn: 'Mixed Portfolio',
    badgeBgLight: 'bg-[#FAF0EC] text-[#8E4F39]',
    badgeBgDark: 'bg-[#3A1F15] text-[#F3C2B2]',
    iconBgColor: 'bg-[#72321D]',
    titleAr: 'نموذج كسر ركود تفاعل الحسابات والريلز التفاعلية',
    titleEn: 'Overcoming Account Stagnation & High-Retention Reels Model',
    descAr: 'نموذج إضافي من شغل المحتوى والسكريبتات.',
    descEn: 'A high-converting content model showing copywriting expertise.',
    totalPages: 2,
    externalUrl: 'https://docs.google.com/spreadsheets/d/1fq9A9wkR9MjLz93FIFzYexdhIGQKcAXNR64q6k6E7EE/edit?usp=drivesdk',
    pages: [
      {
        pageNum: 1,
        titleAr: 'الهيكل التسويقي والهدف العام للمثال الرابع',
        titleEn: 'Marketing Anatomy & Campaign Goals (Sample 04)',
        sections: [
          {
            titleAr: 'طريقة التغلب على فترات ركود تفاعل الحساب',
            titleEn: 'Curing Low Engagement & Reigniting Account Growth',
            contentAr: 'تطبيق تكتيك "المنشورات الصادمة والجدلية الصحية" لجلب انتباه فئات جديدة مهتمة وزيادة معدل ظهور الحساب العضوي.',
            contentEn: 'Deploying educational debate angles to capture cold eyes, organically expanding account reach and profile visits.'
          }
        ]
      },
      {
        pageNum: 2,
        titleAr: 'السيناريو المصور ذو التقييم العالي والتفاعل النشط',
        titleEn: 'Cinematic High-Retention Reels Script Formula',
        sections: [
          {
            titleAr: 'صياغة نصوص التحفيز والخطوات التفاعلية بالكامل',
            titleEn: 'Action-Driven Copywriting & Conversions',
            contentAr: 'كتابة تركز على مشكلة يومية ملحة للجمهور وتوفر حلاً فورياً وبسيطاً يشجع على المشاركة وحفظ المنشور لمراجعته لاحقاً.',
            contentEn: 'Addressing a highly urgent daily challenge and offering an instant actionable micro-solution, driving bookmarks and shares.'
          }
        ]
      }
    ]
  }
];

