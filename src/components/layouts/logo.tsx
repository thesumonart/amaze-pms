import Image from 'next/image';
import { logo, logoDark, logoMark } from '@/data/brand';
import { cn } from '@/lib/utils';

interface LogoProps {
  onDark?: boolean;
  variant?: 'full' | 'mark';
  className?: string;
  priority?: boolean;
}

export const Logo = ({ onDark = false, variant = 'full', className, priority = false }: LogoProps) => {
  const asset = (variant === 'mark' ? logoMark : null) ?? (onDark ? logoDark : null) ?? logo;
  const needsKnockout = onDark && asset === logo && logoDark === null;

  return (
    <Image
      src={asset.src}
      alt="Amaze PMSPL"
      width={asset.width}
      height={asset.height}
      priority={priority}
      className={cn(
        'ease-premium w-auto object-contain transition-[filter] duration-500',
        needsKnockout && 'brightness-0 invert',
        className ?? 'h-10'
      )}
    />
  );
}
