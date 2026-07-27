'use client';

import { useEffect, useState } from 'react';
import { ServiceCard } from '@/components/scenes/services/service-card';
import { ServiceDialog } from '@/components/scenes/services/service-dialog';
import { RevealGroup } from '@/components/shared/reveal-on-scroll';
import { SectionHeading } from '@/components/shared/section-heading';
import { services } from '@/data/services';
import { OPEN_SERVICE_EVENT } from '@/lib/service-bus';
import type { Service } from '@/types';

export const ServicesBento = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);

  useEffect(() => {
    const onOpenRequest = (event: Event) => {
      const slug = (event as CustomEvent<string>).detail;
      setActiveService(services.find((service) => service.slug === slug) ?? null);
    };
    window.addEventListener(OPEN_SERVICE_EVENT, onOpenRequest);
    return () => window.removeEventListener(OPEN_SERVICE_EVENT, onOpenRequest);
  }, []);

  return (
    <section id="services" className="bg-muted py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Integrated services"
            title={
              <>
                Every service line. <span className="text-brand-500">One accountable partner.</span>
              </>
            }
            lede="Nine specialist teams under one contract, one supervisor structure and one monthly report — so nothing falls between vendors."
          />
        </div>

        <RevealGroup className="mt-14 columns-1 gap-4 *:mb-4 sm:columns-2 lg:columns-3">
          {services.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              featured={i === 0}
              onSelect={setActiveService}
            />
          ))}
        </RevealGroup>
      </div>

      <ServiceDialog service={activeService} onClose={() => setActiveService(null)} />
    </section>
  );
}
