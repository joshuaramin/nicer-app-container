import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { ARTICLES, fmtDate, getArticle } from "@/lib/articles/articles";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () =>
  ARTICLES.map((a) => ({ slug: a.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getArticle((await params).slug);
  return a
    ? { title: `${a.title} · NICER App Corner`, description: a.summary }
    : {};
}

export default async function ArticlePage({ params }: Props) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  return (
    <article className="wrap article-page">
      <Link className="back" href="/">
        <Icon name="back" size={20} /> Home
      </Link>
      <h1>{a.title}</h1>
      <p className="meta">
        <time dateTime={a.date}>{fmtDate(a.date)}</time> · {a.readMins} min read
      </p>
      <div className="prose">
        {a.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}
