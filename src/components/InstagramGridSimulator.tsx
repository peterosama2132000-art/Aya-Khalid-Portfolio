import React from 'react';
import { 
  Instagram, 
  Heart, 
  MessageCircle, 
  Sparkles, 
  Send,
  ArrowUpRight
} from 'lucide-react';

interface InstagramPost {
  id: string;
  niche: 'realestate' | 'parenting' | 'mindset';
  imgUrl: string;
  likes: string;
  comments: string;
  titleAr: string;
  titleEn: string;
  strategyAr: string;
  strategyEn: string;
  captionAr: string;
  captionEn: string;
  keyword: string;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    niche: 'realestate',
    imgUrl: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80',
    likes: '1,420',
    comments: '245',
    titleAr: 'فخامة شاليهات أزور مراسي',
    titleEn: 'Azour Chalets Premium Living',
    strategyAr: 'تصوير POV سينمائي لإبراز مياه الساحل وتفعيل رغبة الاستئجار المباشر للعملاء النخبة.',
    strategyEn: 'Immersive POV camera sweep demonstrating direct lagoon deck access for elite vacationers.',
    captionAr: 'الراحة الحقيقية هي إنك تفتح باب بلكونتك تلاقي أرقى لاجون في مراسي مستنيك.. اكتب كلمة "مزدوج" وهنبعتلك الكتالوج بالأسعار.',
    captionEn: 'True comfort is sliding open your glass door to find Marassi’s calmest lagoon. Message "DUAL" for direct pricing.',
    keyword: 'مزدوج'
  },
  {
    id: 'post-2',
    niche: 'parenting',
    imgUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
    likes: '3,840',
    comments: '422',
    titleAr: 'التعامل مع نوبات غضب الأطفال',
    titleEn: 'Managing Public Toddler Tantrums',
    strategyAr: 'تصميم تربوي مريح بألوان ترابية لبناء مرجعية علمية موثوقة وعميقة للأمهات.',
    strategyEn: 'Calming earthy-tone infographic structuring actionable behavioral advice that parents trust.',
    captionAr: 'لما طفلك يبدأ يصرخ في السوبرماركت.. دي لغته للتعبير عن مشاعر مش عارف يفرغها. كورس التربية الحسية بيبسطلك خطوات الاحتواء. اكتب كلمة "أمهات" للتفاصيل.',
    captionEn: 'When your child cries in a public aisle, they are communicating sensory overload. Our course simplifies behavioral containment. Reply "PARENT" for details.',
    keyword: 'أمهات'
  },
  {
    id: 'post-3',
    niche: 'mindset',
    imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    likes: '5,920',
    comments: '811',
    titleAr: 'وضع الحدود السليمة لـ +30',
    titleEn: 'Personal Boundaries over 30',
    strategyAr: 'بورتريه قوي مع خطوط عريضة لتعزيز الجدية والاستحقاق النفسي والاجتماعي.',
    strategyEn: 'High-contrast portrait combined with clean display typography, optimized for massive saves.',
    captionAr: 'قول كلمة "لا" مش قلة ذوق، دي رخصة أمانك النفسي. حملي دليلنا المجاني "الحدود السليمة" الآن. اكتبي كلمة "دعم" وهيتبعتلك فوراً.',
    captionEn: 'Saying "no" is your ultimate psychological boundary. Access our free guide "Healthy Boundaries" today—simply DM us "FOCUS".',
    keyword: 'دعم'
  }
];

export default function InstagramGridSimulator({ isArabic, theme }: { isArabic: boolean; theme: 'light' | 'dark' }) {
  const isLight = theme === 'light';

  return (
    <div className={`rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border ${
      isLight ? 'bg-white border-[#EFEAE3]' : 'bg-[#121212] border-[#2A2A2A]'
    }`} id="instagram-simplified-showcase">
      <div className="absolute top-0 left-0 w-48 h-48 bg-[#D4AF37]/5 rounded-br-full pointer-events-none"></div>
      
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className={`p-1.5 rounded-lg border ${
                isLight ? 'bg-[#8E4F39]/10 border-[#8E4F39]/30' : 'bg-[#D4AF37]/10 border-[#D4AF37]/30'
              }`}>
                <Instagram className={`w-4 h-4 ${isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'}`} />
              </span>
              <span className={`text-[10px] font-mono tracking-widest uppercase font-bold block ${
                isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
              }`}>
                {isArabic ? 'الهوية البصرية وجذب المبيعات' : 'Visual Identity & Direct Leads'}
              </span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-serif tracking-tight font-black ${
              isLight ? 'text-[#2E1D16]' : 'text-white'
            }`}>
              {isArabic ? 'تنسيق الحساب البصري والبيع الذكي' : 'Strategic Instagram Showcase'}
            </h2>
            <p className={`text-xs sm:text-sm max-w-2xl leading-relaxed ${
              isLight ? 'text-[#5C4A42]' : 'text-gray-400'
            }`}>
              {isArabic 
                ? 'استكشفي كيف نصمم شبكة منشورات جذابة تدمج الهوية البصرية الراقية مع خطط البيع المباشر بالرسائل لتحويل المتابعين لعملاء مخلصين.'
                : 'See how we align a high-end visual grid with bulletproof direct-sales copywriting to effortlessly capture premium leads.'}
            </p>
          </div>

          <div className={`px-3 py-1.5 rounded-full flex items-center gap-2 self-start md:self-auto shadow-sm border ${
            isLight ? 'bg-[#FAF5EF] border-[#EFEAE3]' : 'bg-[#1A1A1A] border-[#2A2A2A]'
          }`}>
            <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'}`} />
            <span className={`text-[9px] font-mono uppercase tracking-wider font-bold ${
              isLight ? 'text-[#8E4F39]' : 'text-white'
            }`}>
              {isArabic ? 'أسلوب راقٍ ومبسط' : 'CHAMPAGNE AESTHETIC'}
            </span>
          </div>
        </div>

        {/* Simplifed Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div 
              key={post.id} 
              className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col justify-between border ${
                isLight 
                  ? 'bg-[#FAF5EF] border-[#EFEAE3] hover:border-[#8E4F39]/40' 
                  : 'bg-[#151515] border border-[#252525] hover:border-[#D4AF37]/40'
              }`}
              id={`simplified-post-${post.id}`}
            >
              {/* Image & Stats overlay */}
              <div className="relative aspect-video sm:aspect-square overflow-hidden group">
                <img 
                  src={post.imgUrl} 
                  alt={post.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center gap-3 text-white text-xs font-bold">
                    <span className="flex items-center gap-1.5 bg-black/60 px-2 py-1 rounded-lg">
                      <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-current" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1.5 bg-black/60 px-2 py-1 rounded-lg">
                      <MessageCircle className="w-3.5 h-3.5 text-gray-300" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>

              {/* Strategy and Caption Details */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className={`text-sm font-serif font-black ${
                    isLight ? 'text-[#2E1D16]' : 'text-white'
                  }`}>
                    {isArabic ? post.titleAr : post.titleEn}
                  </h3>
                  
                  {/* Strategy Box */}
                  <div className={`p-3 rounded-xl border ${
                    isLight ? 'bg-white border-[#EFEAE3]' : 'bg-[#1C1C1C] border-[#252525]'
                  }`}>
                    <span className={`text-[9px] font-mono uppercase font-bold block mb-1 ${
                      isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
                    }`}>
                      {isArabic ? '🎯 استراتيجية المحتوى:' : '🎯 CONTENT STRATEGY:'}
                    </span>
                    <p className={`text-xs leading-relaxed font-semibold ${
                      isLight ? 'text-[#5C4A42]' : 'text-gray-300'
                    }`}>
                      {isArabic ? post.strategyAr : post.strategyEn}
                    </p>
                  </div>

                  {/* Caption Box */}
                  <div className="space-y-1">
                    <span className={`text-[9px] font-mono uppercase block font-bold ${
                      isLight ? 'text-[#8E7C74]' : 'text-gray-500'
                    }`}>
                      {isArabic ? '✍️ مقتطف من الكابشن البيعي:' : '✍️ CAPTION COPY EXCERPT:'}
                    </span>
                    <p className={`text-xs leading-relaxed italic ${
                      isLight ? 'text-[#5C4A42]/90' : 'text-gray-400'
                    }`}>
                      "{isArabic ? post.captionAr : post.captionEn}"
                    </p>
                  </div>
                </div>

                {/* Automation trigger badge */}
                <div className={`rounded-xl p-3 flex items-center justify-between gap-2 mt-2 border ${
                  isLight ? 'bg-[#8E4F39]/5 border-[#8E4F39]/15' : 'bg-[#D4AF37]/5 border-[#D4AF37]/15'
                }`}>
                  <div className="space-y-0.5">
                    <span className={`text-[8px] font-mono block uppercase font-bold ${
                      isLight ? 'text-[#8E7C74]' : 'text-gray-400'
                    }`}>
                      {isArabic ? 'كلمة التحويل التلقائي:' : 'DM CONVERSION KEYWORD:'}
                    </span>
                    <span className={`text-sm font-serif font-black ${
                      isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
                    }`}>"{post.keyword}"</span>
                  </div>
                  <span className={`text-[9px] ${isLight ? 'text-[#8E7C74]' : 'text-gray-500'}`}>
                    {isArabic ? 'تحويل فوري ومباشر' : 'Instant funnel trigger'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simplified Aesthetic Pitch */}
        <div className={`p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 border ${
          isLight ? 'bg-[#FAF5EF] border-[#EFEAE3]' : 'bg-[#161616] border-[#252525]'
        }`}>
          <div className="space-y-1 text-center sm:text-right">
            <h4 className={`text-sm font-bold font-serif ${
              isLight ? 'text-[#2E1D16]' : 'text-white'
            }`}>
              {isArabic ? 'هل تبحثين عن تنسيق حساب يفيض بالفخامة ويأتي بالمبيعات؟' : 'Looking for high-ticket visual & sales alignment?'}
            </h4>
            <p className={`text-xs ${isLight ? 'text-[#5C4A42]' : 'text-gray-400'}`}>
              {isArabic 
                ? 'نقوم بصياغة الإسكربتات وتصميم المخططات التي تبني هيبتك المهنية كقائد في مجالك.' 
                : 'We design elite layouts and write persuasive scripts that establish absolute authority.'}
            </p>
          </div>
          <a
            href="#client-collaboration-desk"
            className={`px-4 py-2 text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-1.5 shadow-sm ${
              isLight 
                ? 'bg-[#8E4F39] hover:bg-[#72321D] text-white' 
                : 'bg-[#D4AF37] hover:bg-[#C29D2C] text-black'
            }`}
          >
            <span>{isArabic ? 'احصلي على تخطيطك الخاص' : 'Get Your Custom Formula'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
