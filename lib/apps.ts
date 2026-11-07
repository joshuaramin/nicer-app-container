export type AppInfo = {
  id: string;
  key: "health" | "advoc" | "lamok" | "ai";
  name: string;
  cat: "Health" | "Advocacy" | "AI";
  color: string; // CSS variable name
  tag: string;
  short: string;
  long: string;
  feats: string[];
  meta: string[];
  /** Replace with the real app link when ready. */
  url?: string;
};

export const APPS: AppInfo[] = [
  {
    id: "health-ph",
    key: "health",
    name: "Health PH+",
    cat: "Health",
    color: "--health",
    tag: "Care and wellness",
    short: "Daily health habits and care guidance for Filipino families.",
    long: "Health PH+ helps families build simple daily health habits and find reliable guidance in one place.",
    feats: [
      "Daily check-in for water, sleep, movement and meals",
      "Plain-language health tips in English and Filipino",
      "Reminders for check-ups and vaccinations",
      "Guidance on when to see a health worker",
    ],
    meta: ["Wellness", "Family", "Reminders"],
  },
  {
    id: "advocaid",
    key: "advoc",
    name: "AdvocAid",
    cat: "Advocacy",
    color: "--advoc",
    tag: "Rights and legal help",
    short: "Know your rights and where to turn for legal help.",
    long: "AdvocAid explains everyday rights in plain language and points people to the right office to ask for help.",
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
    name: "Bantay Lamok",
    cat: "Health",
    color: "--lamok",
    tag: "Dengue watch",
    short: "Spot, report and clear mosquito breeding sites in your barangay.",
    long: "Bantay Lamok lets neighbors report mosquito breeding sites and follow the 4S routine against dengue.",
    feats: [
      "Report standing water and breeding sites",
      "Follow the 4S routine with a checklist",
      "See what has been reported near you",
      "Share alerts with your barangay",
    ],
    meta: ["Dengue", "Barangay", "Reports"],
  },
  {
    id: "ai-kasalig",
    key: "ai",
    name: "AI Kasalig",
    cat: "AI",
    color: "--ai",
    tag: "AI companion",
    short: "An AI assistant that answers questions and guides you to the right service.",
    long: "AI Kasalig is a conversational assistant that answers questions in English or Filipino and routes you to the NICER app that fits.",
    feats: [
      "Ask in English, Filipino or a mix",
      "Answers in short, clear steps",
      "Hands you off to Health PH+, AdvocAid or Bantay Lamok",
      "Asks before it shares anything",
    ],
    meta: ["Chat", "Bilingual", "Guide"],
  },
];

export const CATS = ["All", "Health", "Advocacy", "AI"] as const;
export const getApp = (id: string) => APPS.find((a) => a.id === id);
