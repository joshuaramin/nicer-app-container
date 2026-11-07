import type { Metadata } from "next";
import { APPS } from "@/lib/apps";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <h1 className="h1">About NICER</h1>
      <div className="card about">
        <h2>One corner for every project</h2>
        <p>NICER App Corner collects the team&apos;s apps so people can open any of them from one screen. Each app opens on its own page with what it does and a quick way to try it.</p>
      </div>
      <div className="card">
        <h2>In this corner</h2>
        <ul className="feat">{APPS.map((a) => <li key={a.id}><span><b>{a.name}</b> · {a.tag}</span></li>)}</ul>
      </div>
      <div className="card about">
        <h2>Works offline</h2>
        <p>Install this app from your browser menu or the install button. Pages you have opened keep working without a connection.</p>
      </div>
    </>
  );
}
