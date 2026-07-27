'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Logo } from '@/components/layouts/logo';
import { MegaMenu } from '@/components/layouts/mega-menu';
import { MobileNav } from '@/components/layouts/mobile-nav';
import { Button } from '@/components/ui/button';
import { primaryNavLinks } from '@/data/nav-links';
import { useAnchorScroll } from '@/hooks/use-anchor-scroll';
import { cn } from '@/lib/utils';

const CLOSE_DELAY_MS = 140;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const anchorScroll = useAnchorScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setServicesOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), CLOSE_DELAY_MS);
  };

  const solid = scrolled || servicesOpen;
  const linkClass = cn(
    'group relative py-2 text-sm font-medium transition-colors',
    solid ? 'text-neutral-700 hover:text-ink-950' : 'text-white/80 hover:text-white'
  );

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500',
        solid ? 'glass-nav backdrop-blur-xs' : 'glass-nav-ghost'
      )}
    >
      <div className="container-site relative flex h-16 items-center justify-between lg:h-18">
        <a
          href="#top"
          aria-label="Amaze PMS — back to top"
          onClick={(event) => anchorScroll(event, '#top')}
        >
          <Logo
            onDark={!solid}
            variant={solid ? 'mark' : 'full'}
            priority
            className="h-9 lg:h-10"
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {primaryNavLinks.map((link) =>
            link.label === 'Services' ? (
              <button
                key={link.href}
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onMouseEnter={openServices}
                onMouseLeave={scheduleClose}
                onClick={() => setServicesOpen((current) => !current)}
                className={cn(linkClass, 'flex items-center gap-1')}
              >
                {link.label}
                <ChevronDown
                  className={cn(
                    'size-3.5 transition-transform duration-300',
                    servicesOpen && 'rotate-180'
                  )}
                />
              </button>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => anchorScroll(event, link.href)}
                className={linkClass}
              >
                {link.label}
                <span className="absolute top-full right-0 h-px w-0 rounded-full bg-current duration-200 group-hover:right-auto group-hover:left-0 group-hover:w-full" />
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="premium" size="lg" className="hidden px-5 lg:inline-flex">
            <a href="#contact" onClick={(event) => anchorScroll(event, '#contact')}>
              Book a Free Inspection
            </a>
          </Button>
          <MobileNav onDark={!solid} />
        </div>

        <MegaMenu
          open={servicesOpen}
          onClose={() => setServicesOpen(false)}
          onPointerEnter={openServices}
          onPointerLeave={scheduleClose}
          onContactClick={anchorScroll}
        />
      </div>
    </header>
  );
}
