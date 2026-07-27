import type { Variants } from 'motion/react';

/** Expo-out — the house easing for nearly all motion. */
export const EASE_PREMIUM: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const DURATION = {
  fast: 0.2,
  base: 0.5,
  slow: 0.9,
} as const;

export const STAGGER = 0.08;

/** Generous bottom margin so reveals start before elements hit the fold. */
export const VIEWPORT = { once: true, margin: '0px 0px -80px 0px' } as const;

export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_PREMIUM },
  },
};

export const revealParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: STAGGER } },
};

export const revealChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_PREMIUM },
  },
};
