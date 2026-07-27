'use client';

import { ArrowRight, CircleCheck } from 'lucide-react';
import type { MouseEvent } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { serviceCategories } from '@/data/services';
import { useAnchorScroll } from '@/hooks/use-anchor-scroll';
import type { Service } from '@/types';

interface ServiceDialogProps {
  service: Service | null;
  onClose: () => void;
}

export const ServiceDialog = ({ service, onClose }: ServiceDialogProps) => {
  const anchorScroll = useAnchorScroll();

  const handleCta = (event: MouseEvent<HTMLElement>) => {
    onClose();
    anchorScroll(event, '#contact');
  };

  const categoryLabel = serviceCategories.find(
    (category) => category.id === service?.category
  )?.label;

  return (
    <Dialog
      open={service !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="data-open:slide-in-from-bottom-8 data-closed:slide-out-to-bottom-8 w-[calc(100%-2rem)] max-w-md gap-0 rounded-lg p-0 **:data-[slot=dialog-close]:text-white/50 **:data-[slot=dialog-close]:hover:bg-white/10 **:data-[slot=dialog-close]:hover:text-white">
        {service ? (
          <>
            <div className="relative overflow-hidden rounded-t-lg bg-[linear-gradient(135deg,var(--color-ink-950),var(--color-navy-800))] p-7">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(70%_80%_at_85%_10%,color-mix(in_srgb,var(--color-brand-500)_35%,transparent)_0%,transparent_65%)]"
              />
              <div className="relative">
                <span className="flex size-12 items-center justify-center rounded-md bg-white/10 text-white">
                  <service.icon className="size-6" />
                </span>
                <DialogHeader className="mt-4 gap-1 p-0 text-left">
                  <DialogTitle className="text-h3 font-semibold text-white">
                    {service.name}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-neutral-400">
                    {service.tagline}
                  </DialogDescription>
                </DialogHeader>
                {categoryLabel ? (
                  <Badge className="mt-4 border-white/15 bg-white/10 text-white">
                    {categoryLabel}
                  </Badge>
                ) : null}
              </div>
            </div>

            <div className="p-7">
              <p className="text-sm leading-relaxed text-neutral-700">{service.description}</p>
              <ul className="mt-5 space-y-2.5">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <CircleCheck className="mt-0.5 size-4 shrink-0 text-teal-400" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <Button asChild variant="premium" size="xl" className="mt-7 w-full">
                <a href="#contact" onClick={handleCta}>
                  Scope this for my property
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </a>
              </Button>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
