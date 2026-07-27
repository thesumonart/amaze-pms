import Image from 'next/image';
import { Marquee } from '@/components/shared/marquee';
import { Reveal } from '@/components/shared/reveal-on-scroll';
import { clientLogos } from '@/data/clients';

export function ClientMarquee() {
  return (
    <section id="trusted-by" className="border-border bg-canvas border-b py-16 sm:py-20">
      <Reveal className="container-site">
        <p className="text-eyebrow text-center font-mono text-neutral-500 uppercase">
          Trusted by 200+ businesses across India
        </p>
      </Reveal>
      <Marquee className="mt-10" durationSeconds={45}>
        {clientLogos.map((client) => (
          <div
            key={client.id}
            // Fixed box + object-contain normalises logos that arrive at wildly
            // different aspect ratios to one optical height.
            className="flex h-10 w-[9.5rem] shrink-0 items-center justify-center"
          >
            {client.logo ? (
              <Image
                src={client.logo.src}
                alt={client.name}
                width={client.logo.width}
                height={client.logo.height}
                className="ease-premium max-h-10 w-auto max-w-full object-contain opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0"
              />
            ) : (
              <span className="text-navy-800 ease-premium text-center text-base font-semibold tracking-tight whitespace-nowrap opacity-60 transition-opacity duration-500 hover:opacity-100">
                {client.name}
              </span>
            )}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
