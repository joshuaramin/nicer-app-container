"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const vars = (c: string) => ({ "--c": `var(${c})` }) as CSSProperties;

/** Reads/writes a value in localStorage, safely. */
function useStored<T>(key: string, initial: T) {
  const [v, setV] = useState<T>(initial);
  useEffect(() => {
    try {
      const s = localStorage.getItem(key);
      if (s) setV(JSON.parse(s));
    } catch {}
  }, [key]);
  const set = (n: T) => {
    setV(n);
    try { localStorage.setItem(key, JSON.stringify(n)); } catch {}
  };
  return [v, set] as const;
}

function HealthDemo({ color }: { color: string }) {
  const [s, setS] = useStored("health-checkin", { water: 0, habits: [false, false, false], day: "" });
  const today = new Date().toDateString();
  const st = s.day === today ? s : { water: 0, habits: [false, false, false], day: today };
  const done = Math.round((st.water / 8) * 50 + (st.habits.filter(Boolean).length / 3) * 50);
  const labels = ["Slept 7 hours or more", "Walked 30 minutes", "Ate vegetables"];
  return (
    <div className="card" style={vars(color)}>
      <h2>Today&apos;s check-in</h2>
      <div>
        <label>Water: {st.water} of 8 glasses</label>
        <div className="glasses">
          {Array.from({ length: 8 }, (_, i) => (
            <button key={i} className="glass" aria-label={`Glass ${i + 1}`} aria-pressed={i < st.water}
              onClick={() => setS({ ...st, day: today, water: st.water === i + 1 ? i : i + 1 })} />
          ))}
        </div>
      </div>
      {labels.map((t, i) => (
        <label key={t} className="check">
          <input type="checkbox" checked={st.habits[i]} onChange={() => setS({ ...st, day: today, habits: st.habits.map((h, j) => (j === i ? !h : h)) })} /> {t}
        </label>
      ))}
      <div className="bar"><i style={{ width: done + "%" }} /></div>
      <p className="note">{done >= 100 ? "All done. Great job today!" : done > 0 ? `${done}% of today's check-in done. Saved on this device.` : "Tap to start your check-in."}</p>
    </div>
  );
}

function AdvocDemo({ color }: { color: string }) {
  const r = [
    ["If you are arrested", "You have the right to stay silent and to have a competent lawyer of your choice. If you cannot afford one, you can ask for a free lawyer."],
    ["A dispute with a neighbor", "Many disputes between residents of the same city or municipality go to the barangay first for conciliation before a court case can be filed."],
    ["Problems at work", "Ask your employer or the labor office about wages, benefits and 13th month pay. Keep copies of your contract, payslips and messages."],
    ["Where to ask for help", "Try the Public Attorney's Office, a legal aid group, or your barangay help desk. Bring any documents you have."],
  ];
  return (
    <div className="card" style={vars(color)}>
      <h2>Know your rights</h2>
      {r.map(([t, p]) => (<details key={t}><summary>{t}</summary><p>{p}</p></details>))}
      <p className="note">General information only. It is not legal advice.</p>
    </div>
  );
}

type Report = { what: string; where: string; fresh?: boolean };
function LamokDemo({ color }: { color: string }) {
  const [steps, setSteps] = useState([false, false, false, false]);
  const [reports, setReports] = useStored<Report[]>("lamok-reports", [{ what: "Clogged gutter", where: "Brgy. Sample · example entry" }]);
  const [what, setWhat] = useState("Standing water in old tires");
  const [where, setWhere] = useState("");
  const [err, setErr] = useState(false);
  const four = ["Search and destroy breeding sites", "Self-protection: repellent and long sleeves", "Seek early consultation for fever", "Say yes to fogging when advised"];
  return (
    <>
      <div className="card" style={vars(color)}>
        <h2>4S against dengue</h2>
        {four.map((t, i) => (
          <label key={t} className="check"><input type="checkbox" checked={steps[i]} onChange={() => setSteps(steps.map((s, j) => (j === i ? !s : s)))} /> {t}</label>
        ))}
        <div className="bar"><i style={{ width: steps.filter(Boolean).length * 25 + "%" }} /></div>
      </div>
      <div className="card" style={vars(color)}>
        <h2>Report a breeding site</h2>
        <div>
          <label htmlFor="bt">What did you find?</label>
          <select id="bt" value={what} onChange={(e) => setWhat(e.target.value)}>
            <option>Standing water in old tires</option><option>Clogged gutter</option>
            <option>Uncovered water container</option><option>Flower vase or plant saucer</option>
          </select>
        </div>
        <div>
          <label htmlFor="bb">Barangay or street</label>
          <input id="bb" type="text" placeholder="e.g. Brgy. San Roque" value={where} onChange={(e) => { setWhere(e.target.value); setErr(false); }} aria-invalid={err} />
          {err && <p className="note" role="alert">Add a barangay or street first.</p>}
        </div>
        <button className="btn" onClick={() => {
          if (!where.trim()) return setErr(true);
          setReports([{ what, where: where.trim(), fresh: true }, ...reports.map((r) => ({ ...r, fresh: false }))]);
          setWhere("");
        }}>Submit report</button>
        <div className="list">
          {reports.map((r, i) => (
            <div key={i} className="row" style={vars(color)}>
              <div><b>{r.what}</b><span>{r.where}</span></div>
              <span className="badge">{r.fresh ? "New" : "Saved"}</span>
            </div>
          ))}
        </div>
        <p className="note">Reports are saved only on this device. Connect a backend to share them with your barangay.</p>
      </div>
    </>
  );
}

const REPLIES: Record<string, string> = {
  "Kailangan ko ba ng doktor?": "Kung may lagnat na higit 2 araw, hirap huminga, o matinding sakit, magpatingin agad. Buksan ang Health PH+ para sa gabay.",
  "How do I report a hazard?": "Open Bantay Lamok, choose what you found, add your barangay, then submit.",
  "What are my rights?": "Open AdvocAid for short explainers on common situations, like arrests, disputes and work problems.",
};
function AiDemo({ color }: { color: string }) {
  const [msgs, setMsgs] = useState<{ w: "bot" | "me"; t: string }[]>([
    { w: "bot", t: "Kumusta! I can help with health, legal questions and dengue prevention. What would you like to ask?" },
  ]);
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => { box.current?.scrollTo({ top: 1e5 }); }, [msgs]);
  const ask = (t: string) => {
    setMsgs((m) => [...m, { w: "me", t }]);
    setTimeout(() => setMsgs((m) => [...m, { w: "bot", t: REPLIES[t] }]), 500);
  };
  return (
    <div className="card" style={vars(color)}>
      <h2>Try AI Kasalig</h2>
      <div className="chat" ref={box} aria-live="polite">
        {msgs.map((m, i) => (<div key={i} className={"msg " + m.w}>{m.t}</div>))}
      </div>
      <div className="qs">
        {Object.keys(REPLIES).map((t) => (<button key={t} className="chip" onClick={() => ask(t)}>{t}</button>))}
      </div>
      <p className="note">Preview with sample replies. Connect your AI backend to make it live.</p>
    </div>
  );
}

export default function Demo({ id, color }: { id: string; color: string }) {
  if (id === "health-ph") return <HealthDemo color={color} />;
  if (id === "advocaid") return <AdvocDemo color={color} />;
  if (id === "bantay-lamok") return <LamokDemo color={color} />;
  if (id === "ai-kasalig") return <AiDemo color={color} />;
  return null;
}
