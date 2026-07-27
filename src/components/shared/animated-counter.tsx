'use client';

import { animate, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  className?: string;
  durationSeconds?: number;
}

/** Counts from 0 to `value` when scrolled into view; jumps straight to the
 * final value under prefers-reduced-motion. */
export const AnimatedCounter = ({ value, className, durationSeconds = 1.8 }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: durationSeconds,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reducedMotion, value, durationSeconds]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString('en-IN')}
    </span>
  );
}
