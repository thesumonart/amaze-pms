import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  durationSeconds?: number;
}

/** Infinite horizontal loop: two identical copies of the content shift by
 * -50%. Pauses on hover; frozen entirely under prefers-reduced-motion. */
export function Marquee({
  children,
  className,
  durationSeconds = 40,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <div
        className="flex w-max animate-marquee group-hover:paused motion-reduce:animate-none"
        style={{ "--marquee-duration": `${durationSeconds}s` } as CSSProperties}
      >
        <div className="flex items-center gap-14 pr-14">{children}</div>
        <div aria-hidden className="flex items-center gap-14 pr-14">
          {children}
        </div>
      </div>
    </div>
  );
}
