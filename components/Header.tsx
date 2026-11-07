"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

type InstallEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

export default function Header() {
  const [installEvt, setInstallEvt] = useState<InstallEvent | null>(null);
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setInstallEvt(e as InstallEvent);
    };
    const onInstalled = () => setInstallEvt(null);
    const up = () => setOnline(true);
    const down = () => setOnline(false);
    setOnline(navigator.onLine);
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    window.addEventListener("online", up);
    window.addEventListener("offline", down);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
      window.removeEventListener("online", up);
      window.removeEventListener("offline", down);
    };
  }, []);

  function toggleTheme() {
    const r = document.documentElement;
    const dark =
      r.dataset.theme === "dark" ||
      (!r.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
    const next = dark ? "light" : "dark";
    r.dataset.theme = next;
    try { localStorage.setItem("nicer-theme", next); } catch {}
  }

  async function install() {
    if (!installEvt) return;
    await installEvt.prompt();
    setInstallEvt(null);
  }

  return (
    <div className="top">
      <div className="brand">
        <div className="logo">N</div>
        <div>
          <b>NICER App Corner</b>
          <span className="status">
            <i className={"dot" + (online ? "" : " off")} />
            {online ? "Online" : "Offline mode"}
          </span>
        </div>
      </div>
      <div className="topbtns">
        {installEvt && (
          <button className="iconbtn" onClick={install} aria-label="Install app">
            <Icon name="download" size={20} />
          </button>
        )}
        <button className="iconbtn" onClick={toggleTheme} aria-label="Switch light or dark theme">
          <Icon name="moon" size={20} />
        </button>
      </div>
    </div>
  );
}
