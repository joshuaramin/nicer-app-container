import Link from "next/link";
import type { CSSProperties } from "react";
import Icon from "@/components/Icon";
import { APPS } from "@/lib/apps";

export default function Home() {
  const f = APPS[2];
  return (
    <>
      <div className="hello">
        <h1>Mabuhay! What do you need today?</h1>
        <p>Open an app, or ask AI Kasalig to point you to the right one.</p>
      </div>
      <Link className="feature" href={`/apps/${f.id}`} style={{ "--c": `var(${f.color})` } as CSSProperties}>
        <Icon name={f.key} size={150} className="big" />
        <div className="tag">Featured this week</div>
        <h3>{f.name}</h3>
        <p>{f.short}</p>
        <span className="go">Open app <Icon name="arrow" size={16} /></span>
      </Link>
      <div className="sec"><h2>Your apps</h2><small>{APPS.length} available</small></div>
      <div className="grid">
        {APPS.map((a) => (
          <Link key={a.id} className="tile" href={`/apps/${a.id}`} style={{ "--c": `var(${a.color})` } as CSSProperties}>
            <div className="ico"><Icon name={a.key} size={24} /></div>
            <div><h3>{a.name}</h3><p>{a.short}</p></div>
            <span className="badge">{a.cat}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
