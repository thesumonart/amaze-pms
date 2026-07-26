import { Marquee } from "@/components/shared/marquee";
import { Reveal } from "@/components/shared/reveal-on-scroll";
import { clientLogos } from "@/data/clients";

export function ClientMarquee() {
  return (
    <section
      id="trusted-by"
      className="border-b border-border bg-canvas py-16 sm:py-20"
    >
      <Reveal className="container-site">
        <p className="text-center font-mono text-eyebrow uppercase text-neutral-500">
          Trusted by 200+ businesses across India
        </p>
      </Reveal>
      <Marquee className="mt-10" durationSeconds={45}>
        {clientLogos.map((logo) => (
          <div
            key={logo.id}
            className="flex items-center gap-3 grayscale transition-all duration-500 hover:grayscale-0"
          >
            <logo.icon className="size-6 shrink-0 text-brand-500" />
            <span className="flex flex-col leading-tight">
              <span className="whitespace-nowrap text-base font-semibold tracking-tight text-navy-800">
                {logo.name}
              </span>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-neutral-500">
                {logo.sector}
              </span>
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
