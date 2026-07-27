import type { ImageAsset } from "@/types";

/**
 * Single source of truth for brand artwork shipped in /public.
 *
 * Every entry points at a real file. Variants we do not have artwork for are
 * `null` rather than a guessed path, so nothing 404s — the consuming component
 * degrades instead. Dropping the real file in at the documented path and
 * flipping the `null` to an asset object is the only change needed.
 */

/** Full lockup: house mark + AMAZE wordmark + PMSPL. */
export const logo: ImageAsset = {
  src: "/images/logo.webp",
  width: 500,
  height: 274,
};

/**
 * Light-on-dark lockup. No reversed artwork supplied yet — until one lands at
 * `/images/logo-dark.webp`, `<Logo onDark />` knocks the full lockup out to
 * white with a filter.
 */
export const logoDark: ImageAsset | null = null;

/**
 * Icon-only mark for compact/scrolled nav states. No standalone mark supplied
 * yet — until one lands at `/images/logo-mark.webp`, `<Logo variant="mark" />`
 * falls back to the full lockup.
 */
export const logoMark: ImageAsset | null = null;

/**
 * Favicons. Only the 32px webp exists today; it is wired explicitly through
 * `metadata.icons` in `app/layout.tsx` because /public/icons is outside Next's
 * app-directory icon convention.
 *
 * Still missing (add the file, then add the line in layout.tsx): `favicon.ico`
 * for legacy browsers, `icon-192.png` / `icon-512.png` for PWA installs, and
 * `apple-icon.png` (180×180) for iOS home-screen bookmarks.
 */
export const favicon = {
  src: "/icons/favicon.webp",
  type: "image/webp",
  sizes: "32x32",
} as const;
