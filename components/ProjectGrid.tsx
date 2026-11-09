"use client";

import type { CSSProperties } from "react";
import { PROJECTS } from "@/lib/projects";
import Icon from "./Icon";
import { useOnline } from "./useOnline";

export default function ProjectGrid() {
  const online = useOnline();
  return (
    <>
      {!online && (
        <p className="offline-note" role="status">
          You are offline. Project links need an internet connection.
        </p>
      )}
      <ul className="grid">
        {PROJECTS.map((p) => {
          const style = { "--c": `var(${p.color})` } as CSSProperties;
          const body = (
            <>
              <span className="ico">
                <Icon name={p.key} size={26} />
              </span>
              <span className="card-text">
                <span className="badge">{p.cat}</span>
                <h3>{p.name}</h3>
                <span className="desc">{p.short}</span>
              </span>
              <span className="cta">
                {p.url ? (
                  <>
                    Open {p.name} <Icon name="external" size={16} />
                  </>
                ) : (
                  "Link coming soon"
                )}
              </span>
            </>
          );
          return (
            <li key={p.id}>
              {p.url ? (
                <a
                  className="pcard"
                  style={style}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.name} (opens its front page)`}
                >
                  {body}
                </a>
              ) : (
                <div
                  className="pcard disabled"
                  style={style}
                  aria-disabled="true"
                >
                  {body}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
