import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import Icon from "@/components/Icon";
import { APPS } from "@/lib/apps";
import ArticleCarousel from "@/components/ArticleCarousel";
import { ARTICLES } from "@/lib/articles/articles";

export default function Home() {
  const f = APPS[2];

  return (
    <>
      <div className="hello">
        <h1>Mabuhay! What do you need today?</h1>
        <p>Open an app, or ask AI Kasalig to point you to the right one.</p>
      </div>

      <section className="wrap" aria-label="Featured articles">
        <ArticleCarousel articles={ARTICLES} />
      </section>

      <section className="wrap two" id="install" aria-labelledby="install-h">
        <div className="panel">
          <h2 id="install-h">Add it to your device</h2>
          <ul className="steps">
            <li>
              <b>Android and desktop Chrome or Edge:</b> use the Install button
              in the header, or the browser menu.
            </li>
            <li>
              <b>iPhone and iPad:</b> tap Share, then Add to Home Screen.
            </li>
          </ul>
          <p className="note">
            Once installed, it opens like an app and the home page works without
            a connection.
          </p>
        </div>
        <div className="panel" id="about">
          <h2>About</h2>
          <p>
            NICER App Corner is a landing page for the team&apos;s projects.
            Each card is a link. The projects open on their own sites and are
            not part of this app.
          </p>
          <p className="note">
            <Icon name="external" size={14} /> Links open in a new tab.
          </p>
        </div>
      </section>

      <div className="grid">
        {APPS.map((a) => (
          <Link
            key={a.id}
            className="tile"
            href={`/apps/${a.id}`}
            style={{ "--c": `var(${a.color})` } as CSSProperties}
          >
            <div className="ico">
              <Image
                src={a.image}
                alt={`${a.name} logo`}
                width={64}
                height={64}
                className="app-image"
              />
            </div>

            <div>
              <h3>{a.name}</h3>
              <p className="short-description">{a.short}</p>
            </div>

            <span className="badge">{a.cat}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
