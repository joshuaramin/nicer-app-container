const P: Record<string, React.ReactNode> = {
  health: (<><path d="M12 21s-7-4.4-9.3-9A5.2 5.2 0 0 1 12 6.6 5.2 5.2 0 0 1 21.3 12C19 16.6 12 21 12 21z" /><path d="M12 9.5v5M9.5 12h5" /></>),
  advoc: <path d="M12 3v18M5 21h14M12 6H5l-2 7a3.5 3.5 0 0 0 7 0L8 6M12 6h7l2 7a3.5 3.5 0 0 1-7 0l-2-7" />,
  lamok: (<><ellipse cx="12" cy="13" rx="3" ry="5" /><path d="M12 8V4M10 3l2 2 2-2M9 11 3 8M9 14l-6 1M15 11l6-3M15 14l6 1M9 17l-4 4M15 17l4 4" /></>),
  ai: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />,
  home: <path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
  apps: (<><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" /><rect x="3" y="14" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" /></>),
  about: (<><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5v.1" /></>),
  search: (<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.5-4.5" /></>),
  back: <path d="M15 5l-7 7 7 7" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  moon: <path d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z" />,
  article: <path d="M5 4h14v16H5zM9 9h6M9 13h6M9 17h3" />,
  external: <path d="M7 17 17 7M8 7h9v9" />,
  download: <path d="M12 3v12M7 10l5 5 5-5M4 21h16" />,
};

export default function Icon({
  name,
  size = 22,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {P[name]}
    </svg>
  );
}
