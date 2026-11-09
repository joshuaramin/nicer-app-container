"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { useOnline } from "./useOnline";

type InstallEvent = Event & { prompt: () => Promise<void> };

export default function Header() {
  const [installEvt, setInstallEvt] = useState<InstallEvent | null>(null);
  const online = useOnline();

  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setInstallEvt(e as InstallEvent);
    };
    const onInstalled = () => setInstallEvt(null);
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  function toggleTheme() {
    const r = document.documentElement;
    const dark =
      r.dataset.theme === "dark" ||
      (!r.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
    const next = dark ? "light" : "dark";
    r.dataset.theme = next;
    try {
      localStorage.setItem("nicer-theme", next);
    } catch {}
  }

  return (
    <header className="header">
      <div className="wrap header-in">
        <a
          className="brand"
          href="#top"
          aria-label="NICER App Corner, top of page"
        >
          <span className="logo">N</span>
          <span>
            <b>NICER App Corner</b>
            <span className="status">
              <i className={"dot" + (online ? "" : " off")} />
              {online ? "Online" : "Offline mode"}
            </span>
          </span>
        </a>
        <nav className="links" aria-label="Page sections">
          <a href="#projects">Projects</a>
          <a href="#install">Install</a>
          <a href="#about">About</a>
        </nav>
        <div className="topbtns">
          {installEvt && (
            <button
              className="iconbtn wide"
              onClick={async () => {
                await installEvt.prompt();
                setInstallEvt(null);
              }}
            >
              <Icon name="download" size={18} /> <span>Install</span>
            </button>
          )}
          <button
            className="iconbtn"
            onClick={toggleTheme}
            aria-label="Switch light or dark theme"
          >
            <Icon name="moon" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
