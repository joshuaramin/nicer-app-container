"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import type { Article } from "@/lib/articles/articles";

/** Article cards you can swipe left and right (scroll-snap), with arrows and dots. */
export default function ArticleCarousel({ articles }: { articles: Article[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [i, setI] = useState(0);
  const [end, setEnd] = useState(false);
  const [canScroll, setCanScroll] = useState(true);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const first = el.children[0] as HTMLElement | undefined;
      if (!first) return;
      const step = first.offsetWidth + 14; // card width + gap
      setI(Math.min(articles.length - 1, Math.round(el.scrollLeft / step)));
      setEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
      setCanScroll(el.scrollWidth > el.clientWidth + 2);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [articles.length]);

  const go = (n: number) => {
    const el = track.current;
    const card = el?.children[Math.max(0, Math.min(articles.length - 1, n))] as
      | HTMLElement
      | undefined;
    card?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured articles"
    >
      <ul className="track" ref={track}>
        {articles.map((a, n) => (
          <li
            key={a.slug}
            className="slide"
            aria-label={`${n + 1} of ${articles.length}`}
          >
            <article className="h-full">
              <Link className="feature" href={`/articles/${a.slug}`}>
                <Icon name="article" size={130} className="big" />
                <div className="tag">Featured article</div>
                <h3>{a.title}</h3>
                <p>{a.summary}</p>
                <span className="go">
                  Read article <Icon name="arrow" size={16} />
                </span>
              </Link>
            </article>
          </li>
        ))}
      </ul>
      <div className="car-ctrl">
        <div className="dots" aria-hidden="true">
          {articles.map((a, n) => (
            <i key={a.slug} className={n === i ? "on" : ""} />
          ))}
        </div>
        {/* <div className="arrows" hidden={!canScroll}>
          <button
            className="iconbtn"
            onClick={() => go(i - 1)}
            disabled={i === 0}
            aria-label="Previous article"
          >
            <Icon name="back" size={20} />
          </button>
          <button
            className="iconbtn"
            onClick={() => go(i + 1)}
            disabled={end}
            aria-label="Next article"
          >
            <Icon name="arrow" size={20} />
          </button>
        </div> */}
      </div>
    </div>
  );
}
