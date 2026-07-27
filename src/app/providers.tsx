"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LenisProvider } from "@/hooks/use-lenis";

interface ProvidersProps {
  children: ReactNode;
}

/** Client shell: smooth scroll, reduced-motion policy, tooltip context.
 * `reducedMotion="user"` strips transform animation for users who ask,
 * keeping only opacity fades. */
export function Providers({ children }: ProvidersProps) {
  return (
    <LenisProvider>
      <MotionConfig reducedMotion="user">
        <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
      </MotionConfig>
    </LenisProvider>
  );
}
