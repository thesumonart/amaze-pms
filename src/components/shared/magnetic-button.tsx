'use client';

import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import type { PointerEvent, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Maximum pull distance in px at the element's edge. */
  strength?: number;
}

/** Wrapper that makes its child gently follow the cursor within a small
 * radius. Mouse-only; inert on touch and under prefers-reduced-motion. */
export function Magnetic({ children, className, strength = 16 }: MagneticProps) {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.3 });

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    x.set((offsetX / (rect.width / 2)) * strength);
    y.set((offsetY / (rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={cn('inline-flex', className)}
      style={{ x: springX, y: springY }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
}
