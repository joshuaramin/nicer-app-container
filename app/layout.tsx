import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import RegisterSW from "@/components/RegisterSW";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "NICER App Corner", template: "%s · NICER App Corner" },
  description: "Health PH+, AdvocAid, Bantay Lamok and AI Kasalig in one place.",
  applicationName: "NICER App Corner",
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "NICER", statusBarStyle: "default" },
  icons: { icon: "/icons/icon-192.png", apple: "/icons/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef3f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1a1d" },
  ],
};

// Applies the saved theme before first paint to avoid a flash.
const themeScript = `try{var t=localStorage.getItem('nicer-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=DM+Sans:wght@400;500;700&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="app">
          <div className="screen">
            <Header />
            {children}
          </div>
        </div>
        <TabBar />
        <RegisterSW />
      </body>
    </html>
  );
}
