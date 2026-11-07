"use client";

import Link from "next/link";
import { useState } from "react";
import { APPS, CATS } from "@/lib/apps";
import Icon from "./Icon";

export default function AppBrowser() {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");
  const list = APPS.filter(
    (a) =>
      (cat === "All" || a.cat === cat) &&
      (a.name + a.short + a.tag).toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <>
      <label className="search" htmlFor="q">
        <Icon name="search" size={20} />
        <input id="q" type="search" placeholder="Search apps" value={q} onChange={(e) => setQ(e.target.value)} autoComplete="off" />
      </label>
      <div className="chips" role="group" aria-label="Filter by category">
        {CATS.map((c) => (
          <button key={c} className="chip" aria-pressed={c === cat} onClick={() => setCat(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="list">
        {list.length === 0 && <div className="empty">No apps match. Try another word.</div>}
        {list.map((a) => (
          <Link key={a.id} className="row" href={`/apps/${a.id}`} style={{ "--c": `var(${a.color})` } as React.CSSProperties}>
            <div className="ico"><Icon name={a.key} size={22} /></div>
            <div><b>{a.name}</b><span>{a.tag}</span></div>
            <span className="badge">{a.cat}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
