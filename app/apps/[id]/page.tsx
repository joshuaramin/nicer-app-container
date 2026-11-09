
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Demo from "@/components/Demos";
import { APPS, getApp } from "@/lib/apps";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return APPS.map((a) => ({ id: a.id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const a = getApp((await params).id);

  return a
    ? {
        title: a.name,
        description: a.short,
      }
    : {};
}

export default async function AppPage({ params }: Props) {
  const a = getApp((await params).id);

  if (!a) notFound();

  const c = {
    "--c": `var(${a.color})`,
  } as CSSProperties;

  return (
    <>
      <Link className="back" href="/apps">
        <span aria-hidden="true">←</span> All apps
      </Link>

      {/* Hero Section */}
      <div className="hero" style={c}>
        <div className="ico">
          <Image
            src={a.image}
            alt={`${a.name} logo`}
            width={64}
            height={64}
            priority
          />
        </div>

        <h1>{a.name}</h1>

        <p>{a.long}</p>

        <div className="meta">
          {a.meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>


      {/* Launch Button */}
      {a.url ? (
        <a
          className="btn sun"
          href={a.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Launch {a.name}
        </a>
      ) : (
        <p className="note">
          Add this app&apos;s link in{" "}
          <code>lib/apps.ts</code> to show a Launch button here.
        </p>
      )}
    </>
  );
}
