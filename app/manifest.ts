import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "NICER App Corner",
    short_name: "NICER",
    description: "Health PH+, AdvocAid, Bantay Lamok and AI Kasalig in one place.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#eef3f1",
    theme_color: "#0d2b30",
    categories: ["health", "lifestyle", "utilities"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "Health PH+", url: "/apps/health-ph" },
      { name: "AdvocAid PH", url: "/apps/advocaid" },
      { name: "Bantay Lamok", url: "/apps/bantay-lamok" },
      { name: "AI Kasalig", url: "/apps/ai-kasalig" },
    ],
  };
}
