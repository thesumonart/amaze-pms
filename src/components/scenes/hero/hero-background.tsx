/** Layered mesh-gradient backdrop for the hero: slow aurora drift, a faint
 * engineering grid, and a gold glow anchored behind the primary CTA. */
export function HeroBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-ink-950)_0%,var(--color-ink-900)_55%,var(--color-navy-800)_100%)]" />
      <div className="absolute inset-[-10%] animate-aurora bg-[radial-gradient(60%_50%_at_72%_12%,color-mix(in_srgb,var(--color-navy-600)_75%,transparent)_0%,transparent_65%)]" />
      <div className="absolute inset-[-10%] animate-aurora bg-[radial-gradient(50%_45%_at_18%_75%,color-mix(in_srgb,var(--color-brand-500)_28%,transparent)_0%,transparent_70%)] [animation-delay:-7s]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(45%_60%_at_50%_100%,color-mix(in_srgb,var(--color-gold-500)_16%,transparent)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[76px_76px] mask-[radial-gradient(70%_65%_at_50%_40%,black_30%,transparent_100%)]" />
    </div>
  );
}
