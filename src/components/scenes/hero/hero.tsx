"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { HeroBackground } from "@/components/scenes/hero/hero-background";
import { HeroStats } from "@/components/scenes/hero/hero-stats";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { Magnetic } from "@/components/shared/magnetic-button";
import {
  EASE_PREMIUM,
  revealChild,
  revealParent,
} from "@/components/shared/motion";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { useAnchorScroll } from "@/hooks/use-anchor-scroll";
import { gsap } from "@/lib/gsap";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const anchorScroll = useAnchorScroll();

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.to(contentRef.current, {
          yPercent: -14,
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom 35%",
            scrub: true,
          },
        });
      },
    );
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="noise flex min-h-svh flex-col justify-end overflow-hidden bg-ink-950"
    >
      <HeroBackground />
      <GradientBlob />

      <div
        ref={contentRef}
        className="container-site relative flex flex-1 flex-col justify-center pt-32 pb-10 lg:pt-36"
      >
        <motion.div
          variants={revealParent}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.p
            variants={revealChild}
            className="glass-dark rounded-full px-4 py-2 font-mono text-eyebrow uppercase text-gold-300"
          >
            {site.parent} · Since {site.foundedYear}
          </motion.p>

          <motion.h1
            variants={revealChild}
            className="mt-8 text-display font-semibold text-white text-balance"
          >
            Facility management,{" "}
            <span className="text-gradient-brand">engineered.</span>
          </motion.h1>

          <motion.p
            variants={revealChild}
            className="mt-6 max-w-2xl text-lede text-neutral-400"
          >
            15,000+ trained professionals keeping 20M+ sq. ft. of campuses,
            communities and workplaces running — with the discipline of an
            engineering company, not the promises of a vendor.
          </motion.p>

          <motion.div
            variants={revealChild}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Magnetic>
              <Button asChild variant="premium" size="xl">
                <a
                  href="#contact"
                  onClick={(event) => anchorScroll(event, "#contact")}
                >
                  Book a Free Inspection
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </a>
              </Button>
            </Magnetic>
            <Button asChild variant="premium-outline" size="xl">
              <a
                href="#services"
                onClick={(event) => anchorScroll(event, "#services")}
              >
                Explore services
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 1.4 }}
          className="mt-14 flex justify-center lg:mt-16"
        >
          <a
            href="#trusted-by"
            onClick={(event) => anchorScroll(event, "#trusted-by")}
            aria-label="Scroll to content"
            className="flex flex-col items-center gap-2 text-neutral-400 transition-colors hover:text-white"
          >
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em]">
              Scroll
            </span>
            <ChevronDown className="size-4 animate-scroll-cue" />
          </a>
        </motion.div>
      </div>

      <div className="container-site relative pb-8 lg:pb-12">
        <HeroStats />
      </div>
    </section>
  );
}
