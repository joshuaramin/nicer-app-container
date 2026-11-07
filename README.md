# NICER App Corner (Next.js PWA)

Hub for Health PH+, AdvocAid, Bantay Lamok and AI Kasalig.

    npm install
    npm run dev          # development (service worker is off)
    npm run build && npm start   # production, installable + offline

- App list and copy: `lib/apps.ts` (set `url` on an app to show its Launch button)
- Manifest: `app/manifest.ts`; icons: `public/icons/`
- Offline: `public/sw.js` (bump `VERSION` when you change precached routes)
- Needs HTTPS (or localhost) for install and service worker. Deploy on Vercel or any Node host.
