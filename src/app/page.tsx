import dynamic from 'next/dynamic';
import { Hero } from '@/components/scenes/hero/hero';
import { ServicesBento } from '@/components/scenes/services/services-bento';
import { ClientMarquee } from '@/components/scenes/trust/client-marquee';
import { site } from '@/data/site';

const WhyAmaze = dynamic(() =>
  import('@/components/scenes/why/why-amaze').then((mod) => mod.WhyAmaze)
);
const ProcessTimeline = dynamic(() =>
  import('@/components/scenes/process/process-timeline').then((mod) => mod.ProcessTimeline)
);
const Coverage = dynamic(() =>
  import('@/components/scenes/coverage/coverage').then((mod) => mod.Coverage)
);
const Testimonials = dynamic(() =>
  import('@/components/scenes/testimonials/testimonials').then((mod) => mod.Testimonials)
);
const TechOps = dynamic(() =>
  import('@/components/scenes/tech/tech-ops').then((mod) => mod.TechOps)
);
const FinalCta = dynamic(() =>
  import('@/components/scenes/cta/final-cta').then((mod) => mod.FinalCta)
);

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.legalName,
  alternateName: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  foundingDate: `${site.foundedYear}`,
  parentOrganization: { '@type': 'Organization', name: 'Action Group' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: ['Hyderabad', 'Bangalore', 'Chennai', 'India'],
  knowsAbout: [
    'Integrated Facility Management',
    'Housekeeping',
    'MEP Operations and Maintenance',
    'Security Services',
    'Pest Control',
    'Horticulture',
    'STP and WTP Management',
  ],
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 15000 },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD built from our own typed data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <Hero />
      <ClientMarquee />
      <ServicesBento />
      <WhyAmaze />
      <ProcessTimeline />
      <Coverage />
      <Testimonials />
      <TechOps />
      <FinalCta />
    </>
  );
}
