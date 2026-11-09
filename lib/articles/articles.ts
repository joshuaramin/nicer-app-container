export type Article = {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO
  readMins: number;
  body: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "one-place-for-four-projects",
    title: "One place for four projects",
    summary:
      "Why NICER App Corner exists, and how it gets you to Health PH+, AdvocAid, Bantay Lamok and AI Kasalig in one tap.",
    date: "2026-11-09",
    readMins: 2,
    body: [
      "NICER runs four projects: Health PH+, AdvocAid, Bantay Lamok and AI Kasalig. Each one has its own front page. Until now, people had to know where each page lived before they could open it.",
      "NICER App Corner is the single starting point. It is a light web app that works on phones, tablets and desktop computers. Pick a project and you go straight to that project's front page.",
      "The App Corner does not run the projects inside itself. Each project stays on its own site, so the teams can keep updating them on their own schedule. The App Corner only holds the links.",
      "You can install it like an app. On Android and desktop Chrome or Edge, use the Install button. On iPhone and iPad, tap Share, then Add to Home Screen. After that, the home page opens even without a connection. Opening a project still needs the internet.",
    ],
  },
  {
    slug: "install-on-your-phone",
    title: "Add NICER App Corner to your phone",
    summary: "Two taps to put the App Corner on your home screen on Android, iPhone, iPad or desktop.",
    date: "2026-11-09",
    readMins: 1,
    body: [
      "On Android, or on desktop Chrome and Edge, use the Install button in the header. You can also open the browser menu and choose Install app.",
      "On iPhone and iPad, open the page in Safari, tap Share, then choose Add to Home Screen.",
      "After installing, NICER App Corner opens in its own window like any other app.",
    ],
  },
  {
    slug: "using-it-offline",
    title: "What works without internet",
    summary: "The home page and articles you have opened stay available offline. Project links need a connection.",
    date: "2026-11-09",
    readMins: 1,
    body: [
      "After you open NICER App Corner once, the home page is saved on your device and opens even when you are offline.",
      "The four projects live on their own sites. Opening Health PH+, AdvocAid, Bantay Lamok or AI Kasalig needs an internet connection, and the page tells you when you are offline.",
    ],
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
export const fmtDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric" });
