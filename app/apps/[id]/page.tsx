import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Demo from "@/components/Demos";
import Icon from "@/components/Icon";
import { APPS, getApp } from "@/lib/apps";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return APPS.map((a) => ({ id: a.id }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getApp((await params).id);
  return a ? { title: a.name, description: a.short } : {};
}

export default async function AppPage({ params }: Props) {
  const a = getApp((await params).id);
  if (!a) notFound();
  const c = { "--c": `var(${a.color})` } as CSSProperties;
  return (
    <>
      <Link className="back" href="/apps"><Icon name="back" size={20} /> All apps</Link>
      <div className="hero" style={c}>
        <div className="ico"><Icon name={a.key} size={26} /></div>
        <h1>{a.name}</h1>
        <p>{a.long}</p>
        <div className="meta">{a.meta.map((m) => <span key={m}>{m}</span>)}</div>
      </div>
      <div className="card" style={c}>
        <h2>What it does</h2>
        <ul className="feat">{a.feats.map((f) => <li key={f}><span>{f}</span></li>)}</ul>
      </div>
      <Demo id={a.id} color={a.color} />
      {a.url ? (
        <a className="btn sun" href={a.url} target="_blank" rel="noopener noreferrer">Launch {a.name}</a>
      ) : (
        <p className="note">Add this app&apos;s link in <code>lib/apps.ts</code> to show a Launch button here.</p>
      )}
    </>
  );
}
