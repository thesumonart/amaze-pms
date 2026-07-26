import { cn } from "@/lib/utils";

interface LogoProps {
  /** Renders the wordmark for dark backgrounds. */
  onDark?: boolean;
  className?: string;
}

export function Logo({ onDark = false, className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        className="size-8 shrink-0"
        role="img"
        aria-label="Amaze PMS logo"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-brand-500)" />
            <stop offset="100%" stopColor="var(--color-navy-800)" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="url(#logo-gradient)" />
        <path
          d="M16 7.5 24 24.5h-3.9l-1.55-3.5h-5.1L11.9 24.5H8L16 7.5Zm0 8.2-1.35 3.1h2.7L16 15.7Z"
          fill="#ffffff"
        />
        <circle cx="24.5" cy="9" r="2.2" fill="var(--color-gold-500)" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[1.05rem] font-semibold tracking-tight",
            onDark ? "text-white" : "text-ink-950",
          )}
        >
          Amaze
        </span>
        <span
          className={cn(
            "font-mono text-[0.6rem] uppercase tracking-[0.32em]",
            onDark ? "text-neutral-400" : "text-neutral-500",
          )}
        >
          PMS
        </span>
      </span>
    </span>
  );
}
