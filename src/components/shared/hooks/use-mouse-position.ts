"use client";

import { type MotionValue, useMotionValue } from "motion/react";
import { type RefObject, useEffect } from "react";

interface MousePosition {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

/**
 * Pointer position as motion values (no re-renders). When `container` is
 * provided, coordinates are relative to that element's top-left corner;
 * otherwise they are viewport coordinates.
 */
export function useMousePosition(
  container?: RefObject<HTMLElement | null>,
): MousePosition {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      const rect = container?.current?.getBoundingClientRect();
      x.set(event.clientX - (rect?.left ?? 0));
      y.set(event.clientY - (rect?.top ?? 0));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [container, x, y]);

  return { x, y };
}
