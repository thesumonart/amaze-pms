"use client";

import { motion, useReducedMotion, useSpring } from "motion/react";
import { useRef } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useMousePosition } from "@/hooks/use-mouse-position";

/**
 * Soft cursor-follow gradient inside the hero. Fills its nearest positioned
 * ancestor; desktop pointer devices only, disabled under reduced motion.
 */
export function GradientBlob() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px) and (pointer: fine)");
  const reducedMotion = useReducedMotion();

  const { x, y } = useMousePosition(containerRef);
  const springX = useSpring(x, { stiffness: 45, damping: 20, mass: 0.8 });
  const springY = useSpring(y, { stiffness: 45, damping: 20, mass: 0.8 });

  if (!isDesktop || reducedMotion) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        className="absolute size-144 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 mix-blend-screen blur-[110px]"
        style={{
          x: springX,
          y: springY,
          background:
            "radial-gradient(circle at center, var(--color-brand-500) 0%, var(--color-teal-400) 45%, transparent 70%)",
        }}
      />
    </div>
  );
}
