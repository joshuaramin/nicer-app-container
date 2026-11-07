"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

const TABS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/apps", key: "apps", label: "Apps" },
  { href: "/about", key: "about", label: "About" },
];

export default function TabBar() {
  const path = usePathname();
  const active = path === "/" ? "/" : "/" + path.split("/")[1];
  return (
    <nav className="tabbar" aria-label="Main">
      <div className="in">
        {TABS.map((t) => (
          <Link key={t.key} href={t.href} aria-current={active === t.href ? "page" : undefined}>
            <Icon name={t.key} size={24} />
            {t.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
