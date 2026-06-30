export type CampaignCategory = 'realstate' | 'parenting' | 'relationships' | 'empowerment' | 'health';

export interface CaseStudy {
  id: string;
  category: CampaignCategory;
  titleEn: string;
  titleAr: string;
  clientEn: string;
  clientAr: string;
  challengeEn: string;
  challengeAr: string;
  strategyEn: string;
  strategyAr: string;
  impactEn: string;
  impactAr: string;
  tagsEn: string[];
  tagsAr: string[];
  accentColor: string;
  metrics: { labelEn: string; labelAr: string; value: string }[];
}

export interface ScriptScene {
  timeRange: string;
  visualEn: string;
  visualAr: string;
  audioEn?: string;
  audioAr?: string;
  textScreenEn?: string;
  textScreenAr?: string;
}

export interface SocialScript {
  id: string;
  category: CampaignCategory;
  type: 'reel' | 'post' | 'carousel';
  brandEn: string;
  brandAr: string;
  titleEn: string;
  titleAr: string;
  hookEn?: string;
  hookAr?: string;
  captionEn: string;
  captionAr: string;
  ctaEn: string;
  ctaAr: string;
  storyInteractiveEn?: string;
  storyInteractiveAr?: string;
  keyword?: string;
  scenes?: ScriptScene[];
  carouselSlides?: {
    slideNumber: number;
    titleEn: string;
    titleAr: string;
    contentEn: string;
    contentAr: string;
  }[];
}

export interface ChatMessage {
  id: string;
  sender: 'visitor' | 'aya' | 'system';
  textEn: string;
  textAr: string;
  timestamp: string;
  strategyStep?: string;
  strategyStepAr?: string;
}

export interface ChatScenario {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  category: CampaignCategory;
  brand: string;
  initialMessageEn: string;
  initialMessageAr: string;
  flow: {
    visitorReplyTrigger: string[]; // keywords or option selected
    optionLabelEn: string;
    optionLabelAr: string;
    ayaResponseEn: string;
    ayaResponseAr: string;
    strategyStepEn: string;
    strategyStepAr: string;
    nextOptions?: {
      optionLabelEn: string;
      optionLabelAr: string;
      ayaResponseEn: string;
      ayaResponseAr: string;
      strategyStepEn: string;
      strategyStepAr: string;
      nextOptions?: {
        optionLabelEn: string;
        optionLabelAr: string;
        ayaResponseEn: string;
        ayaResponseAr: string;
        strategyStepEn: string;
        strategyStepAr: string;
      }[];
    }[];
  }[];
}

export interface PdfSection {
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
}

export interface PdfPage {
  pageNum: number;
  titleAr: string;
  titleEn: string;
  sections: PdfSection[];
}

export interface PdfCaseStudy {
  id: string;
  categoryAr: string;
  categoryEn: string;
  badgeBgLight: string;
  badgeBgDark: string;
  iconBgColor: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  totalPages: number;
  pages: PdfPage[];
  externalUrl?: string;
}

