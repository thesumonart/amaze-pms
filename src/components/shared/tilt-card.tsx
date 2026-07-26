"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import type { PointerEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Rotation clamp in degrees. */
  maxTilt?: number;
}

/** Subtle 3D tilt following the pointer, clamped and spring-smoothed.
 * Mouse-only; flat on touch and under prefers-reduced-motion. */
export function TiltCard({ children, className, maxTilt = 7 }: TiltCardProps) {
  const reducedMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 160, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 160, damping: 20 });

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const ratioX = (event.clientX - rect.left) / rect.width - 0.5;
    const ratioY = (event.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-ratioY * maxTilt * 2);
    rotateY.set(ratioX * maxTilt * 2);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        className={cn("will-change-transform", className)}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        onPointerMove={handleMove}
        onPointerLeave={reset}
      >
        {children}
      </motion.div>
    </div>
  );
}
