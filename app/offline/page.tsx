import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Offline" };

export default function Offline() {
  return (
    <div className="card about">
      <h2>You are offline</h2>
      <p>This page was not saved on your device yet. Reconnect to open it, or go back to a page you have already visited.</p>
      <Link className="btn" style={{ "--c": "var(--ink)" } as React.CSSProperties} href="/">Go to Home</Link>
    </div>
  );
}
