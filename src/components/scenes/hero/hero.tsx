'use client';

import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Magnetic } from '@/components/shared/magnetic-button';
import { DURATION, EASE_PREMIUM } from '@/components/shared/motion';
import { site } from '@/data/site';
import { useAnchorScroll } from '@/hooks/use-anchor-scroll';

const rise = (delay: number) => {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: DURATION.slow, ease: EASE_PREMIUM, delay },
  };
}

export const Hero = () => {
  const reduced = useReducedMotion() ?? false;
  const anchorScroll = useAnchorScroll();
  const r = (delay: number) => (reduced ? {} : rise(delay));

  return (
    <section
      id="top"
      className="noise bg-ink-950 flex min-h-svh items-center justify-center overflow-hidden"
    >
      <div className="container-site relative z-10 py-32 text-center">
        {/* Eyebrow — rule lines expand from center on entrance */}
        <motion.p
          {...r(0)}
          className="text-eyebrow mb-6 flex items-center justify-center gap-3 font-mono tracking-(--text-eyebrow--letter-spacing) text-neutral-400 uppercase"
        >
          <motion.span
            aria-hidden
            className="bg-gold-500/50 h-px"
            initial={{ width: 0 }}
            animate={{ width: 24 }}
            transition={
              reduced ? { duration: 0 } : { duration: 0.8, ease: EASE_PREMIUM, delay: 0.35 }
            }
          />
          {site.parent} · Since {site.foundedYear}
          <motion.span
            aria-hidden
            className="bg-gold-500/50 h-px"
            initial={{ width: 0 }}
            animate={{ width: 24 }}
            transition={
              reduced ? { duration: 0 } : { duration: 0.8, ease: EASE_PREMIUM, delay: 0.35 }
            }
          />
        </motion.p>

        {/* Headline */}
        <motion.h1
          {...r(0.09)}
          className="text-display mx-auto max-w-4xl leading-(--text-display--line-height) font-semibold tracking-(--text-display--letter-spacing) text-white"
        >
          Facility management, <span className="text-gradient-brand">engineered.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          {...r(0.18)}
          className="text-lede mx-auto mt-6 max-w-2xl leading-(--text-lede--line-height) text-neutral-400"
        >
          HVAC, power, water, security and housekeeping across 20M+ sq. ft. of campuses, communities
          and institutions — run with the discipline of an engineering company.
        </motion.p>

        {/* CTA row */}
        <motion.div {...r(0.27)} className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {/* Primary button — magnetic pull + lift on hover, press on tap */}
          <Magnetic strength={14}>
            <motion.a
              href="#contact"
              onClick={(e) => anchorScroll(e, '#contact')}
              whileHover={
                reduced ? {} : { y: -2, boxShadow: '0 12px 28px -8px var(--color-brand-500)' }
              }
              whileTap={
                reduced
                  ? {}
                  : { scale: 0.97, y: 0, boxShadow: '0 4px 12px -4px var(--color-brand-500)' }
              }
              transition={{ duration: 0.18, ease: EASE_PREMIUM }}
              className="bg-accent text-accent-foreground glow-cta inline-flex h-12 items-center gap-2 rounded-full px-7 text-base font-semibold"
            >
              Book a free inspection
              <motion.span
                className="inline-flex"
                whileHover={reduced ? {} : { x: 3 }}
                transition={{ duration: 0.2, ease: EASE_PREMIUM }}
              >
                <ArrowRight className="size-4" />
              </motion.span>
            </motion.a>
          </Magnetic>

          {/* Ghost link — underline draws in, arrow nudges */}
          <motion.a
            href="#services"
            onClick={(e) => anchorScroll(e, '#services')}
            className="group inline-flex items-center gap-2 py-1 text-sm font-medium text-neutral-300"
            whileHover={reduced ? {} : { color: 'var(--color-neutral-50)' }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative">
              See what we operate
              <span className="absolute top-full right-0 h-px w-0 rounded-full bg-current duration-200 group-hover:right-auto group-hover:left-0 group-hover:w-full" />
            </span>
            <motion.span
              className="inline-flex"
              whileHover={reduced ? {} : { x: 4 }}
              transition={{ duration: 0.25, ease: EASE_PREMIUM }}
            >
              <ArrowRight className="size-4" />
            </motion.span>
          </motion.a>
        </motion.div>

        <motion.p
          {...r(0.36)}
          className="mt-10 font-mono text-xs tracking-widest text-neutral-500 uppercase"
        >
          20M+ sq. ft. · 15,000+ professionals · operating since {site.foundedYear}
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.a
        {...r(0.9)}
        href="#trusted-by"
        onClick={(e) => anchorScroll(e, '#trusted-by')}
        aria-label="Scroll to content"
        whileHover={reduced ? {} : { color: 'var(--color-neutral-300)', y: 2 }}
        transition={{ duration: 0.2, ease: EASE_PREMIUM }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500"
      >
        <ChevronDown className="animate-scroll-cue size-5" />
      </motion.a>
    </section>
  );
}
