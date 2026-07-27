'use client';

import { type MotionValue, useMotionValue } from 'motion/react';
import { type RefObject, useEffect } from 'react';

interface MousePosition {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

/**
 * Pointer position as motion values (no re-renders). When `container` is
 * provided, coordinates are relative to that element's top-left corner;
 * otherwise they are viewport coordinates.
 *
 * Pass `enabled: false` to skip the listener entirely — cheaper than tracking
 * a pointer whose values the caller is going to throw away (touch, coarse
 * pointers, reduced motion).
 */
export function useMousePosition(
  container?: RefObject<Element | null>,
  enabled = true
): MousePosition {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (event: PointerEvent) => {
      const rect = container?.current?.getBoundingClientRect();
      x.set(event.clientX - (rect?.left ?? 0));
      y.set(event.clientY - (rect?.top ?? 0));
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [container, enabled, x, y]);

  return { x, y };
}
