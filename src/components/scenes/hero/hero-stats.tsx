"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { EASE_PREMIUM } from "@/components/shared/motion";
import { stats } from "@/data/stats";

/** Glass stat strip sitting on the hero's fold line. */
export function HeroStats() {
  return (
    <motion.dl
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 0.7 }}
      className="glass-dark grid grid-cols-2 gap-px overflow-hidden rounded-lg lg:grid-cols-4"
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col gap-1 bg-white/[0.02] px-6 py-5"
        >
          <dt className="order-2 text-xs font-medium tracking-wide text-neutral-400">
            {stat.label}
          </dt>
          <dd className="order-1 font-mono text-2xl font-semibold text-white sm:text-3xl">
            <AnimatedCounter value={stat.value} />
            <span className="text-gold-300">{stat.suffix}</span>
          </dd>
        </div>
      ))}
    </motion.dl>
  );
}
