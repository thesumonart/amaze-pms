import { ClipboardCheck, LayoutDashboard, Leaf, Recycle, Zap } from 'lucide-react';
import { TechDashboard } from '@/components/scenes/tech/tech-dashboard';
import { Reveal, RevealGroup, RevealItem } from '@/components/shared/reveal-on-scroll';
import { SectionHeading } from '@/components/shared/section-heading';

const OPS_POINTS = [
  {
    icon: LayoutDashboard,
    title: "MIS you'll actually read",
    description:
      'Monthly dashboards covering SLAs, incidents, consumption and cost — reviewed with you, not emailed into a void.',
  },
  {
    icon: ClipboardCheck,
    title: 'Digital checklists, photo proof',
    description:
      'Every round is logged on mobile with timestamps and photos, so quality is verifiable — not anecdotal.',
  },
  {
    icon: Recycle,
    title: 'Water that works twice',
    description:
      'Our STP/WTP teams recycle treated water into flushing and landscaping, cutting fresh-water demand.',
  },
  {
    icon: Leaf,
    title: 'Green-certified consumables',
    description:
      'Eco-labelled chemicals and dosing controls protect indoor air quality and the people in your building.',
  },
  {
    icon: Zap,
    title: 'Energy under a microscope',
    description:
      'Utility tracking flags abnormal consumption early — before it becomes a bill you have to explain.',
  },
];

export const TechOps = () => {
  return (
    <section
      id="technology"
      className="noise bg-[linear-gradient(165deg,var(--color-ink-950)_0%,var(--color-ink-900)_60%,var(--color-navy-800)_100%)] py-24 sm:py-32"
    >
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            onDark
            eyebrow="Tech-enabled, sustainable ops"
            title={
              <>
                Run on data. <span className="text-gradient-brand">Easy on the planet.</span>
              </>
            }
            lede="Facility management is a numbers business. We instrument every site so you see the numbers too — and we engineer the waste out of water, energy and chemicals."
          />
          <RevealGroup className="mt-10 space-y-6">
            {OPS_POINTS.map((point) => (
              <RevealItem key={point.title} className="flex gap-4">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md bg-white/5 text-teal-400">
                  <point.icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                    {point.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="w-full">
          <TechDashboard />
        </Reveal>
      </div>
    </section>
  );
};
