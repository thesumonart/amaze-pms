"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { animate, motion, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { EASE_PREMIUM } from "@/components/shared/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/testimonials";

const PAGE_STEP_PX = 440;

export function Testimonials() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragLimit, setDragLimit] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;
      setDragLimit(Math.max(0, track.scrollWidth - viewport.clientWidth));
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (trackRef.current) observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  const page = (direction: 1 | -1) => {
    const target = Math.min(
      0,
      Math.max(-dragLimit, x.get() - direction * PAGE_STEP_PX),
    );
    animate(x, target, { duration: 0.6, ease: EASE_PREMIUM });
  };

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-muted py-24 sm:py-32"
    >
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Client stories"
            title="Partners who stopped worrying about their buildings."
            lede="Drag through what long-term clients say about working with us."
          />
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon-lg"
              className="rounded-full"
              aria-label="Previous testimonials"
              onClick={() => page(-1)}
            >
              <ArrowLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon-lg"
              className="rounded-full"
              aria-label="Next testimonials"
              onClick={() => page(1)}
            >
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div ref={viewportRef} className="container-site mt-12">
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -dragLimit, right: 0 }}
          style={{ x }}
          className="flex w-max cursor-grab gap-5 select-none active:cursor-grabbing"
        >
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex w-[min(26rem,82vw)] shrink-0 flex-col rounded-lg border border-border bg-card p-8 shadow-[0_1px_2px_rgba(6,11,22,0.04)]"
            >
              <Quote className="size-7 fill-gold-500 text-gold-500" />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink-950">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-7 border-t border-border pt-5">
                <p className="text-sm font-semibold text-ink-950">
                  {testimonial.author}
                </p>
                <p className="mt-0.5 text-xs text-neutral-500">
                  {testimonial.role}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="font-normal">
                    {testimonial.propertyType}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="font-mono text-[0.65rem] uppercase tracking-wider text-neutral-500"
                  >
                    {testimonial.city}
                  </Badge>
                </div>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
