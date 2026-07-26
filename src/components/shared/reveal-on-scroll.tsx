"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  DURATION,
  EASE_PREMIUM,
  revealChild,
  revealParent,
  VIEWPORT,
} from "@/components/shared/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical travel in px before settling. */
  y?: number;
}

/** Single-element scroll reveal: fade + rise, fired once. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.base, ease: EASE_PREMIUM, delay }}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
}

/** Parent that staggers any nested `RevealItem`s into view. */
export function RevealGroup({ children, className }: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      variants={revealParent}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
}

export function RevealItem({ children, className }: RevealItemProps) {
  return (
    <motion.div className={className} variants={revealChild}>
      {children}
    </motion.div>
  );
}
