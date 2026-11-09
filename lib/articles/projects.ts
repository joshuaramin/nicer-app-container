export type Project = {
  id: string;
  key: "health" | "advoc" | "lamok" | "ai";
  name: string;
  cat: string;
  color: string; // CSS variable name
  short: string;
  /** Front-page URL. Set through environment variables (see .env.example). */
  url?: string;
};

// NEXT_PUBLIC_* values must be referenced literally so Next.js can inline them at build time.
const clean = (u?: string) => (u && /^https?:\/\//.test(u.trim()) ? u.trim() : undefined);

export const PROJECTS: Project[] = [
  {
    id: "health-ph",
    key: "health",
    name: "Health PH+",
    cat: "Health",
    color: "--health",
    short: "Daily health habits and care guidance for Filipino families.",
    url: clean(process.env.NEXT_PUBLIC_URL_HEALTH_PH),
  },
  {
    id: "advocaid",
    key: "advoc",
    name: "AdvocAid",
    cat: "Advocacy",
    color: "--advoc",
    short: "Know your rights and where to turn for legal help.",
    url: clean(process.env.NEXT_PUBLIC_URL_ADVOCAID),
  },
  {
    id: "bantay-lamok",
    key: "lamok",
    name: "Bantay Lamok",
    cat: "Health",
    color: "--lamok",
    short: "Spot, report and clear mosquito breeding sites in your barangay.",
    url: clean(process.env.NEXT_PUBLIC_URL_BANTAY_LAMOK),
  },
  {
    id: "ai-kasalig",
    key: "ai",
    name: "AI Kasalig",
    cat: "AI",
    color: "--ai",
    short: "An AI assistant that answers questions and guides you to the right service.",
    url: clean(process.env.NEXT_PUBLIC_URL_AI_KASALIG),
  },
];
