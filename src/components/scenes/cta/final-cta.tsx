'use client';

import { ArrowRight, Phone } from 'lucide-react';
import { Magnetic } from '@/components/shared/magnetic-button';
import { Reveal, RevealGroup, RevealItem } from '@/components/shared/reveal-on-scroll';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';

export function FinalCta() {
  return (
    <section
      id="contact"
      className="noise overflow-hidden bg-[linear-gradient(160deg,var(--color-ink-950)_0%,var(--color-navy-800)_55%,var(--color-navy-600)_100%)] pt-24 pb-40 sm:pt-32 sm:pb-44"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_110%,color-mix(in_srgb,var(--color-brand-500)_35%,transparent)_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)]"
      />

      <RevealGroup className="container-site relative flex flex-col items-center text-center">
        <RevealItem>
          <p className="text-eyebrow text-gold-300 font-mono uppercase">Free site inspection</p>
        </RevealItem>
        <RevealItem>
          <h2 className="text-h2 mt-5 max-w-3xl font-semibold text-balance text-white">
            Walk your site with us. Keep the findings either way.
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="text-lede mt-5 max-w-xl text-neutral-400">
            A senior operations lead — not a sales rep — audits your facility and hands you a
            costed, SLA-backed plan within seven days.
          </p>
        </RevealItem>
        <RevealItem className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Magnetic>
            <Button asChild variant="premium" size="xl" className="glow-gold">
              <a href={`mailto:${site.email}?subject=Free site inspection request`}>
                Book a Free Inspection
                <ArrowRight data-icon="inline-end" className="size-4" />
              </a>
            </Button>
          </Magnetic>
          <Button asChild variant="premium-outline" size="xl">
            <a href={`tel:${site.phone.replace(/\s/g, '')}`}>
              <Phone data-icon="inline-start" className="size-4" />
              {site.phone}
            </a>
          </Button>
        </RevealItem>
      </RevealGroup>

      <Reveal delay={0.3} className="relative mt-8 text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-neutral-400 uppercase">
          Response within 24 hours · {site.serviceAreas.join(' · ')}
        </p>
      </Reveal>
    </section>
  );
}
