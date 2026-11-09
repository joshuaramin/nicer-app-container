
export type AppInfo = {
  id: string;
  key: "health" | "advoc" | "lamok" | "ai";
  image: string;
  name: string;
  cat: "Health" | "Advocacy" | "AI";
  color: string;
  tag: string;
  short: string;
  long: string;
  feats: string[];
  meta: string[];
  url?: string;
};

export const APPS: AppInfo[] = [
  {
    id: "health-ph",
    key: "health",
    image: "/images/health-ph.png",
    name: "Health PH+",
    cat: "Health",
    color: "--health",
    tag: "Care and wellness",
    short: "HealthPH: Intelligent Disease Surveillance using Social Media",
    long: "The Philippines' Pulse on Health",
    url: "https://aiproject-nationalu.com/#/projects/healthph",
    feats: [
      "Daily check-in for water, sleep, movement and meals",
      "Plain-language health tips in English and Filipino",
      "Reminders for check-ups and vaccinations",
      "Guidance on when to see a health worker",
    ],
    meta: [
      "Communicable Respiratory Diseases",
      "Public Health Surveillance",
      "Multilingual and Multilabel Classfication",
    ],
  },
  {
    id: "advocaid",
    key: "advoc",
    image: "/images/advocaidph.png",
    name: "AdvocAid",
    cat: "Advocacy",
    color: "--advoc",
    tag: "Awareness",
    short: "AdvocAid PH Project: Transforming Digital Conversations into HIV Intelligence",
    long: "Enhancing public health surveillance through AI-driven multilingual and geospatial analysis of social media discourse.",
    url: "https://dost-ap8f.vercel.app/?fbclid=IwY2xjawVeDUFleHRuA2FlbQIxMQBwZG9mBHNydGMGYXBwX2lkATAAAR_wG__PUbLRfD5vO6V-0GilgSaMhi_JdnzeSTmImRWy3oBf0jWWHgXYd1WOzQ_aem_HtfsBqe95G4of7dNASfuCg",
    feats: [
      "Short explainers on common rights",
      "Step-by-step guides for filing complaints",
      "Directory of help desks and legal aid offices",
      "Works in low-data conditions",
    ],
    meta: ["Legal info", "Community", "Plain language"],
  },
  {
    id: "bantay-lamok",
    key: "lamok",
    image: "/images/bantay-lamok.png",
    name: "Bantay Lamok",
    cat: "Health",
    color: "--lamok",
    tag: "Dengue watch",
    short: "Bantay Lamok: Deep Learning Models for Predicting Mosquito Density and Disease Outbreaks on Crowdsourcing and Social Data",
    long: "A community-driven public health platform using AI, NLP, geospatial analytics, and citizen reports to support early detection and response to mosquito-related disease risks.",
    url: "https://aiproject-nationalu.com/#/projects/bantay-lamok",
    feats: [
      "Report standing water and breeding sites",
      "Follow the 4S routine with a checklist",
      "See what has been reported near you",
      "Share alerts with your barangay",
    ],
    meta: [
      "AI for Public Health",
      "Mosquito Surveillance",
      "Community Reporting",
    ],
  },
  {
    id: "ai-kasalig",
    key: "ai",
    image: "/images/ai-kasalig.png",
    name: "AI Kasalig",
    cat: "AI",
    color: "--ai",
    tag: "AI companion",
    short: "AIKasalig: Building Trust in AI for Philippine Healthcare",
    long: "Advancing responsible AI in Philippine healthcare through trust, transparency, explainability, ethical governance, and multilingual public health innovation.",
    url: "https://aiproject-nationalu.com/#/projects/aikasalig",
    feats: [
      "Ask in English, Filipino or a mix",
      "Answers in short, clear steps",
      "Hands you off to Health PH+, AdvocAid or Bantay Lamok",
      "Asks before it shares anything",
    ],
    meta: [
      "Responsible AI",
      "AI Governance",
      "Healthcare",
    ],
  },
];

export const CATS = ["All", "Health", "Advocacy", "AI"] as const;

export const getApp = (id: string) =>
  APPS.find((a) => a.id === id);
