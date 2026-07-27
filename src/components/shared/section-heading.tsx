import type { ReactNode } from 'react';
import { Reveal } from '@/components/shared/reveal-on-scroll';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  align?: 'left' | 'center';
  /** Set when the section sits on a dark background. */
  onDark?: boolean;
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  lede,
  align = 'left',
  onDark = false,
  className,
}: SectionHeadingProps) => {
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <p
        className={cn(
          'text-eyebrow font-mono uppercase',
          onDark ? 'text-gold-300' : 'text-brand-500'
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'text-h2 mt-4 font-semibold text-balance',
          onDark ? 'text-white' : 'text-ink-950'
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p className={cn('text-lede mt-5', onDark ? 'text-neutral-400' : 'text-neutral-700')}>
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
