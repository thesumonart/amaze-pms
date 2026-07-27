'use client';

import { useEffect, useRef } from 'react';
import { SectionHeading } from '@/components/shared/section-heading';
import { processSteps } from '@/data/process';
import { gsap } from '@/lib/gsap';

/**
 * The site's one pinned scroll scene: on desktop the section locks while the
 * five steps travel horizontally and the progress line draws in. Mobile and
 * reduced-motion users get a plain vertical timeline.
 */
export const ProcessTimeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const track = trackRef.current;
      if (!track?.parentElement) return;
      const container = track.parentElement;
      // `track` is width:max-content, so it never has internal overflow —
      // scrollWidth always equals clientWidth. The scrollable distance is
      // how much wider the track is than the container that clips it.
      const distance = () => Math.max(0, track.scrollWidth - container.clientWidth);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${distance() + window.innerHeight * 0.5}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
      timeline
        .to(track, { x: () => -distance(), ease: 'none' }, 0)
        .fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, ease: 'none' }, 0);
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="noise bg-ink-900 overflow-hidden py-24 sm:py-28 lg:flex lg:h-svh lg:flex-col lg:justify-center lg:py-0"
    >
      <div className="container-site">
        <SectionHeading
          onDark
          eyebrow="How engagements run"
          title="From first walkthrough to monthly report."
          lede="A fixed, five-step operating rhythm — the same playbook that has onboarded 200+ properties without service gaps."
        />

        <div
          ref={lineRef}
          aria-hidden
          className="mt-14 hidden h-0.5 origin-left bg-[linear-gradient(90deg,var(--color-brand-500),var(--color-gold-500))] lg:block"
        />

        <div ref={trackRef} className="mt-10 flex flex-col gap-4 lg:w-max lg:flex-row lg:gap-6">
          {processSteps.map((step) => (
            <article
              key={step.id}
              className="glass-dark relative flex flex-col rounded-lg p-7 lg:w-84 lg:shrink-0 lg:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-gold-300 font-mono text-sm">{step.index}</span>
                <span className="bg-brand-500/15 text-brand-300 flex size-10 items-center justify-center rounded-md">
                  <step.icon className="size-5" />
                </span>
              </div>
              <h3 className="text-h3 mt-6 font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{step.description}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 hidden font-mono text-xs tracking-[0.2em] text-neutral-400 uppercase lg:block">
          Keep scrolling — the timeline moves with you
        </p>
      </div>
    </section>
  );
}
