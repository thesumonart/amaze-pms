'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { RevealItem } from '@/components/shared/reveal-on-scroll';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
  onSelect: (service: Service) => void;
}

export function ServiceCard({ service, featured, onSelect }: ServiceCardProps) {
  return (
    <RevealItem className="break-inside-avoid">
      <motion.button
        type="button"
        onClick={() => onSelect(service)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="group border-border bg-card relative flex w-full cursor-pointer flex-col items-start overflow-hidden rounded-lg border p-6 text-left shadow-[0_1px_2px_rgba(6,11,22,0.04)] transition-shadow duration-500 hover:shadow-[0_24px_48px_-20px_rgba(16,35,63,0.25)] lg:p-7"
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(80%_60%_at_100%_0%,color-mix(in_srgb,var(--color-brand-500)_9%,transparent)_0%,transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="relative flex w-full flex-col">
          <div className="flex w-full items-start justify-between">
            <span className="bg-brand-500/10 text-brand-500 group-hover:bg-brand-500 flex size-11 items-center justify-center rounded-md transition-colors duration-300 group-hover:text-white">
              <service.icon className="size-5" />
            </span>
            <ArrowUpRight className="group-hover:text-brand-500 size-4 text-neutral-400 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
          </div>
          <h3 className="text-ink-950 mt-5 text-lg font-semibold tracking-tight">{service.name}</h3>
          <p className="mt-1 text-sm text-neutral-500">{service.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            {service.description}
          </p>
          {featured && (
            <ul className="mt-4 space-y-2">
              {service.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="bg-gold-500 mt-2 size-1.5 shrink-0 rounded-full" />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.button>
    </RevealItem>
  );
}
