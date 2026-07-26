"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { RevealItem } from "@/components/shared/reveal-on-scroll";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

const SPAN_CLASSES: Record<Service["span"], string> = {
  large: "sm:col-span-2 lg:row-span-2",
  wide: "sm:col-span-2",
  tall: "lg:row-span-2",
  standard: "",
};

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
}

export function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const roomy = service.span === "large" || service.span === "tall";

  return (
    <RevealItem className={cn("flex", SPAN_CLASSES[service.span])}>
      <motion.button
        type="button"
        onClick={() => onSelect(service)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="group relative flex w-full flex-col items-start overflow-hidden rounded-lg border border-border bg-card p-6 text-left shadow-[0_1px_2px_rgba(6,11,22,0.04)] transition-shadow duration-500 hover:shadow-[0_24px_48px_-20px_rgba(16,35,63,0.25)] lg:p-7"
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(80%_60%_at_100%_0%,color-mix(in_srgb,var(--color-brand-500)_9%,transparent)_0%,transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="relative flex w-full flex-1 flex-col">
          <div className="flex w-full items-start justify-between">
            <span className="flex size-11 items-center justify-center rounded-md bg-brand-500/10 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
              <service.icon className="size-5" />
            </span>
            <ArrowUpRight className="size-4 text-neutral-400 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-500 group-hover:opacity-100" />
          </div>

          <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink-950">
            {service.name}
          </h3>
          <p className="mt-1 text-sm text-neutral-500">{service.tagline}</p>

          {roomy ? (
            <>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                {service.description}
              </p>
              <ul className="mt-auto space-y-2 pt-6">
                {service.highlights.slice(0, 3).map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-neutral-700"
                  >
                    <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-gold-500" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="mt-3 line-clamp-2 max-h-0 text-sm leading-relaxed text-neutral-700 opacity-0 transition-all duration-500 ease-premium group-hover:max-h-24 group-hover:opacity-100">
              {service.description}
            </p>
          )}
        </div>
      </motion.button>
    </RevealItem>
  );
}
