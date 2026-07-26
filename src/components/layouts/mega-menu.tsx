"use client";

import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { MouseEvent } from "react";
import { DURATION, EASE_PREMIUM } from "@/components/shared/motion";
import { serviceCategories, services } from "@/data/services";
import { requestServiceDialog } from "@/lib/service-bus";

interface MegaMenuProps {
  open: boolean;
  onClose: () => void;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
  onContactClick: (event: MouseEvent<HTMLElement>, href: string) => void;
}

export function MegaMenu({
  open,
  onClose,
  onPointerEnter,
  onPointerLeave,
  onContactClick,
}: MegaMenuProps) {
  const handleServiceClick = (slug: string) => {
    onClose();
    requestServiceDialog(slug);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4, transition: { duration: DURATION.fast } }}
          transition={{ duration: 0.35, ease: EASE_PREMIUM }}
          className="absolute inset-x-0 top-full hidden justify-center px-6 pt-3 lg:flex"
          onMouseEnter={onPointerEnter}
          onMouseLeave={onPointerLeave}
        >
          <div className="w-full max-w-5xl overflow-hidden rounded-lg border border-border bg-popover shadow-[0_24px_80px_-24px_rgba(6,11,22,0.35)]">
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 p-8 xl:grid-cols-4">
              {serviceCategories.map((category) => (
                <div key={category.id}>
                  <p className="font-mono text-eyebrow uppercase text-neutral-500">
                    {category.label}
                  </p>
                  <ul className="mt-4 space-y-1">
                    {services
                      .filter((service) => service.category === category.id)
                      .map((service) => (
                        <li key={service.slug}>
                          <button
                            type="button"
                            onClick={() => handleServiceClick(service.slug)}
                            className="group flex w-full items-start gap-3 rounded-md p-2 text-left transition-colors hover:bg-muted"
                          >
                            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-sm bg-brand-500/10 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                              <service.icon className="size-4" />
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-ink-950">
                                {service.name}
                              </span>
                              <span className="mt-0.5 block text-xs text-neutral-500">
                                {service.tagline}
                              </span>
                            </span>
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-border bg-muted px-8 py-4">
              <p className="text-sm text-neutral-700">
                Not sure where to start? We'll walk your site and tell you.
              </p>
              <a
                href="#contact"
                onClick={(event) => {
                  onClose();
                  onContactClick(event, "#contact");
                }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 hover:text-navy-600"
              >
                Book a free inspection
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
