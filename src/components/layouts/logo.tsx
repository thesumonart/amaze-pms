import Image from "next/image";
import { logo, logoDark, logoMark } from "@/data/brand";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** Renders the lockup for dark backgrounds. */
  onDark?: boolean;
  /** `mark` requests the icon-only lockup used in compact/scrolled states. */
  variant?: "full" | "mark";
  /** Rendered height utility — width follows the intrinsic aspect ratio. */
  className?: string;
  /** Loads eagerly with high priority; use for the above-the-fold nav. */
  priority?: boolean;
}

export function Logo({
  onDark = false,
  variant = "full",
  className,
  priority = false,
}: LogoProps) {
  // No standalone mark or reversed artwork yet — both degrade to the full
  // lockup, the reversed case knocked out to white via filter. See data/brand.
  const asset =
    (variant === "mark" ? logoMark : null) ??
    (onDark ? logoDark : null) ??
    logo;
  const needsKnockout = onDark && asset === logo && logoDark === null;

  return (
    <Image
      src={asset.src}
      alt="Amaze PMSPL"
      width={asset.width}
      height={asset.height}
      priority={priority}
      className={cn(
        "w-auto object-contain transition-[filter] duration-500 ease-premium",
        needsKnockout && "brightness-0 invert",
        className ?? "h-10",
      )}
    />
  );
}
