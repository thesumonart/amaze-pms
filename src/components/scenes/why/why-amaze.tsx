import type { LucideIcon } from 'lucide-react';
import { Award, BadgeCheck, Building2, Users } from 'lucide-react';
import { AnimatedCounter } from '@/components/shared/animated-counter';
import { RevealGroup, RevealItem } from '@/components/shared/reveal-on-scroll';
import { SectionHeading } from '@/components/shared/section-heading';
import { stats } from '@/data/stats';

const STAT_ICONS: Record<string, LucideIcon> = {
  professionals: Users,
  area: Building2,
  clients: BadgeCheck,
  years: Award,
};

export function WhyAmaze() {
  return (
    <section id="why-amaze" className="bg-canvas py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Why Amaze"
          title={
            <>
              Scale you can measure.{' '}
              <span className="text-brand-500">Standards you can audit.</span>
            </>
          }
          lede="Facility management fails quietly — a missed inspection here, an unfilled shift there. We run it like an engineering operation: staffed, scheduled, checked and reported, month after month."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = STAT_ICONS[stat.id] ?? Users;
            return (
              <RevealItem key={stat.id} className="flex">
                <article className="group border-border bg-card relative flex w-full flex-col overflow-hidden rounded-lg border p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(16,35,63,0.22)]">
                  <span className="bg-gold-500/10 text-gold-500 group-hover:bg-gold-500 group-hover:text-ink-950 flex size-11 items-center justify-center rounded-md transition-colors duration-300">
                    <Icon className="size-5" />
                  </span>
                  <p className="text-ink-950 mt-6 font-mono text-4xl font-semibold tracking-tight">
                    <AnimatedCounter value={stat.value} />
                    <span className="text-brand-500">{stat.suffix}</span>
                  </p>
                  <h3 className="text-ink-950 mt-2 text-sm font-semibold">{stat.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {stat.description}
                  </p>
                  <span className="ease-premium absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[linear-gradient(90deg,var(--color-brand-500),var(--color-gold-500))] transition-transform duration-500 group-hover:scale-x-100" />
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
