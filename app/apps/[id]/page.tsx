import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { APPS } from "@/lib/apps";
import { getProject } from "@/lib/projects";
import Image from "next/image";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => APPS.map((p) => ({ id: p.id }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).id);
  return p
    ? { title: `${p.name} · NICER App Corner`, description: p.short }
    : {};
}

export default async function ProjectPage({ params }: Props) {
  const p = getProject((await params).id);
  if (!p) notFound();
  const c = { "--c": `var(${p.color})` } as CSSProperties;
  return (
    <div className="proj-page" style={c}>
      <Link className="back" href="/#projects">
        <Icon name="back" size={20} /> All projects
      </Link>

      <section className="proj-hero">
        <div className="ico">
          <Image className="proj-img" src={p.image} alt="" height={44} width={44} />
        </div>
        <h1>{p.name}</h1>
        <p>{p.long}</p>
        <div className="proj-meta">
          {p.meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
        {p.url ? (
          <a
            className="btn sun"
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open {p.name}
          </a>
        ) : (
          <p className="note">The link for {p.name} is coming soon.</p>
        )}
      </section>

      <section className="proj-card">
        <h2>What it does</h2>
        <ul className="feat">
          {p.feats.map((f) => (
            <li key={f}>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}