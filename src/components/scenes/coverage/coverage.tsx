import { MapPin } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-on-scroll";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { coverageCities } from "@/data/coverage";
import { cn } from "@/lib/utils";

export const Coverage = () => {
  return (
    <section id="coverage" className="bg-canvas py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Where we operate"
          title={
            <>
              Rooted in Hyderabad.{" "}
              <span className="text-brand-500">Present across India.</span>
            </>
          }
          lede="Regional operations teams — not franchisees — run every city, so the standard you sign for in Cyberabad is the standard you get everywhere."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coverageCities.map((city) => (
            <RevealItem key={city.id} className="flex">
              <article
                className={cn(
                  "group relative flex w-full flex-col overflow-hidden rounded-lg border p-7 transition-all duration-500 hover:-translate-y-1",
                  city.isHeadquarters
                    ? "noise border-transparent bg-[linear-gradient(150deg,var(--color-ink-950),var(--color-navy-800))] hover:shadow-[0_24px_48px_-16px_rgba(16,35,63,0.5)]"
                    : "border-border bg-card hover:border-brand-300 hover:shadow-[0_24px_48px_-20px_rgba(16,35,63,0.22)]",
                )}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,color-mix(in_srgb,currentColor_12%,transparent)_1px,transparent_0)] bg-size-[20px_20px] opacity-[0.35]"
                />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span
                      className={cn(
                        "flex size-10 items-center justify-center rounded-md",
                        city.isHeadquarters
                          ? "bg-gold-500/15 text-gold-300"
                          : "bg-brand-500/10 text-brand-500",
                      )}
                    >
                      <MapPin className="size-5" />
                    </span>
                    {city.isHeadquarters ? (
                      <Badge className="border-gold-500/30 bg-gold-500/15 font-mono text-[0.65rem] uppercase tracking-widest text-gold-300">
                        HQ
                      </Badge>
                    ) : null}
                  </div>
                  <p
                    className={cn(
                      "mt-6 font-mono text-eyebrow uppercase",
                      city.isHeadquarters
                        ? "text-neutral-400"
                        : "text-neutral-500",
                    )}
                  >
                    {city.kicker}
                  </p>
                  <h3
                    className={cn(
                      "mt-2 text-h3 font-semibold",
                      city.isHeadquarters ? "text-white" : "text-ink-950",
                    )}
                  >
                    {city.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 text-sm leading-relaxed",
                      city.isHeadquarters
                        ? "text-neutral-400"
                        : "text-neutral-700",
                    )}
                  >
                    {city.description}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
