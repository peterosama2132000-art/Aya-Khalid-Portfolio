import { CaseStudy } from '../types';
import { Target, TrendingUp, CheckCircle, Quote, Star, Users, Flame, Clock } from 'lucide-react';

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
  isArabic: boolean;
  theme: 'light' | 'dark';
}

export default function CaseStudyDetail({ caseStudy, isArabic, theme }: CaseStudyDetailProps) {
  const isLight = theme === 'light';

  // Select icon based on case ID
  const getIcon = (id: string) => {
    switch (id) {
      case 'case-realestate':
        return <Flame className="w-5 h-5 text-amber-500" />;
      case 'case-psychology':
        return <Users className="w-5 h-5 text-emerald-500" />;
      default:
        return <TrendingUp className="w-5 h-5 text-violet-500" />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2" id={`case-detail-${caseStudy.id}`}>
      {/* Metric Cards - Right/Left depending on alignment */}
      <div className="lg:col-span-4 grid grid-cols-2 gap-4 order-last lg:order-first">
        {caseStudy.metrics.map((metric, i) => (
          <div 
            key={i} 
            className={`rounded-2xl p-4 flex flex-col justify-between transition duration-300 relative overflow-hidden group ${
              isLight 
                ? 'bg-white border border-[#EFEAE3] hover:border-[#8E4F39]/40 hover:shadow-sm' 
                : 'bg-[#181615] border border-[#262321] hover:border-[#D4AF37]/55'
            }`}
          >
            <div className={`absolute top-0 right-0 w-8 h-8 rounded-bl-full group-hover:scale-110 transition-transform ${
              isLight ? 'bg-[#FAF5EF]' : 'bg-[#222]/50'
            }`}></div>
            <span className={`text-[10px] font-mono tracking-wider uppercase font-bold ${
              isLight ? 'text-[#8E7C74]' : 'text-gray-400'
            }`}>
              {isArabic ? metric.labelAr : metric.labelEn}
            </span>
            <span className={`text-3xl font-serif mt-2 font-bold tracking-tight block ${
              isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
            }`}>
              {metric.value}
            </span>
          </div>
        ))}
      </div>

      {/* Main Narrative Column */}
      <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
        <div className="space-y-6">
          {/* Header Tags */}
          <div className="flex flex-wrap gap-2">
            {(isArabic ? caseStudy.tagsAr : caseStudy.tagsEn).map((tag, idx) => (
              <span 
                key={idx} 
                className={`text-[10px] font-mono uppercase tracking-tight px-3 py-1 rounded-full font-semibold border ${
                  isLight 
                    ? 'bg-[#FDF9F4] border-[#EFEAE3] text-[#8E4F39]' 
                    : 'bg-[#1A1A1A] border border-[#2A2A2A]/80 text-[#E0E0E0]'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Brand */}
          <div>
            <span className={`text-xs font-bold block mb-1 uppercase tracking-wider ${
              isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'
            }`}>
              {isArabic ? caseStudy.clientAr : caseStudy.clientEn}
            </span>
            <h3 className={`text-xl sm:text-2xl font-serif tracking-tight font-bold leading-tight ${
              isLight ? 'text-[#2E1D16]' : 'text-white'
            }`}>
              {isArabic ? caseStudy.titleAr : caseStudy.titleEn}
            </h3>
          </div>

          {/* Grid of details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
            {/* Challenge */}
            <div className={`rounded-2xl p-5 space-y-2 border ${
              isLight ? 'bg-white border-[#EFEAE3]' : 'bg-[#181615] border-[#262321]'
            }`}>
              <span className={`text-xs font-mono font-bold uppercase flex items-center gap-1.5 pb-1.5 mb-1 border-b ${
                isLight ? 'text-[#8E4F39] border-[#FAF5EF]' : 'text-gray-400 border-[#2A2A2A]'
              }`}>
                <Target className={`w-3.5 h-3.5 ${isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'}`} />
                {isArabic ? 'التحدي الاجتماعي' : 'The Brand Challenge'}
              </span>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                isLight ? 'text-[#5C4A42]' : 'text-gray-300'
              }`}>
                {isArabic ? caseStudy.challengeAr : caseStudy.challengeEn}
              </p>
            </div>

            {/* Strategy */}
            <div className={`rounded-2xl p-5 space-y-2 border ${
              isLight ? 'bg-white border-[#EFEAE3]' : 'bg-[#181615] border-[#262321]'
            }`}>
              <span className={`text-xs font-mono font-bold uppercase flex items-center gap-1.5 pb-1.5 mb-1 border-b ${
                isLight ? 'text-[#8E4F39] border-[#FAF5EF]' : 'text-gray-400 border-[#2A2A2A]'
              }`}>
                <CheckCircle className={`w-3.5 h-3.5 ${isLight ? 'text-[#8E4F39]' : 'text-[#D4AF37]'}`} />
                {isArabic ? 'الاستراتيجية والتنفيذ الرقمي' : 'Strategy & Execution'}
              </span>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                isLight ? 'text-[#5C4A42]' : 'text-gray-300'
              }`}>
                {isArabic ? caseStudy.strategyAr : caseStudy.strategyEn}
              </p>
            </div>
          </div>
        </div>

        {/* Real-world Impact Quotes */}
        <div className={`border-t pt-5 leading-normal ${
          isLight ? 'border-[#EFEAE3]' : 'border-[#2A2A2A]'
        }`} style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
          <div className="flex gap-3">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
              isLight ? 'bg-[#FAF5EF] border-[#EFEAE3]' : 'bg-[#1A1A1A] border-[#2A2A2A]'
            }`}>
              {getIcon(caseStudy.id)}
            </div>
            <div>
              <span className={`text-[10px] font-mono tracking-wider font-semibold uppercase ${
                isLight ? 'text-[#8E7C74]' : 'text-gray-500'
              }`}>
                🏆 {isArabic ? 'الأثر الفعلي المحقق' : 'Quantifiable Brand Impact'}
              </span>
              <p className={`font-serif italic text-sm sm:text-base mt-1 font-semibold leading-relaxed ${
                isLight ? 'text-[#2E1D16]' : 'text-white'
              }`}>
                "{isArabic ? caseStudy.impactAr || caseStudy.titleAr : caseStudy.impactEn || caseStudy.titleEn}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
