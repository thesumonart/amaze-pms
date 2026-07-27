import { Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from '@/components/layouts/logo';
import { NewsletterForm } from '@/components/layouts/newsletter-form';
import { footerCompanyLinks } from '@/data/nav-links';
import { services } from '@/data/services';
import { site, socialLinks } from '@/data/site';

const SOCIAL_ICON_PATHS: Record<string, string> = {
  LinkedIn:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  X: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  YouTube:
    'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
};

export function Footer() {
  return (
    <footer className="noise bg-ink-950 text-neutral-400">
      <div className="container-site">
        <div className="glass-dark relative -translate-y-16 rounded-lg p-8 backdrop-blur-xs sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-md">
            <h2 className="text-h3 font-semibold text-white">Operations intelligence, monthly.</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Benchmarks, site walkthroughs and facility ops playbooks from 25 years on the ground.
              No sales sequences.
            </p>
          </div>
          <div className="mt-6 w-full max-w-md lg:mt-0">
            <NewsletterForm />
          </div>
        </div>

        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo onDark className="h-12" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              {site.legalName}. {site.parent}. Keeping India's campuses, communities and workplaces
              running since {site.foundedYear}.
            </p>
            <ul className="mt-6 flex gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:border-brand-400 flex size-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4 fill-current"
                      role="img"
                      aria-label={link.label}
                    >
                      <title>{link.label}</title>
                      <path d={SOCIAL_ICON_PATHS[link.label]} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer services">
            <p className="text-eyebrow font-mono text-neutral-400 uppercase">Services</p>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <a
                    href="#services"
                    className="group relative flex w-fit flex-col text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {service.name}
                    <span className="absolute top-full right-0 h-0.5 w-0 rounded-full bg-current duration-200 group-hover:right-auto group-hover:left-0 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer company">
            <p className="text-eyebrow font-mono text-neutral-400 uppercase">Company</p>
            <ul className="mt-4 space-y-2.5">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative flex w-fit flex-col text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                    <span className="absolute top-full right-0 h-0.5 w-0 rounded-full bg-current duration-200 group-hover:right-auto group-hover:left-0 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-eyebrow font-mono text-neutral-400 uppercase">Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-brand-400 mt-0.5 size-4 shrink-0" />
                <span>
                  {site.address.street}, {site.address.city}, {site.address.state}{' '}
                  {site.address.postalCode}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="text-brand-400 size-4 shrink-0" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="text-brand-400 size-4 shrink-0" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Serving {site.serviceAreas.slice(0, 3).join(' · ')} · Pan-India</p>
        </div>
      </div>
    </footer>
  );
}
