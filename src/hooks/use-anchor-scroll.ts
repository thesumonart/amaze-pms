"use client";

import type { MouseEvent } from "react";
import { useCallback } from "react";
import { useLenis } from "@/hooks/use-lenis";

/**
 * Smooth-scrolls in-page anchors through Lenis when it's active; falls back
 * to native scrolling (which respects scroll-margin-top) otherwise.
 */
export function useAnchorScroll(offset = -96) {
  const lenis = useLenis();

  return useCallback(
    (event: MouseEvent<HTMLElement>, href: string) => {
      if (!href.startsWith("#")) return;
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      event.preventDefault();
      if (lenis) {
        lenis.scrollTo(target, { offset });
      } else {
        target.scrollIntoView({ block: "start" });
      }
    },
    [lenis, offset],
  );
}
