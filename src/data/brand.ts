import type { ImageAsset } from '@/types';

export const logo: ImageAsset = {
  src: '/images/logo.webp',
  width: 500,
  height: 274,
};

export const logoDark: ImageAsset | null = null;

export const logoMark: ImageAsset | null = null;

export const favicon = {
  src: '/icons/favicon.webp',
  type: 'image/webp',
  sizes: '32x32',
} as const;
