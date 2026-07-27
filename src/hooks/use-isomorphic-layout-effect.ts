'use client';

import { useEffect, useLayoutEffect } from 'react';

/**
 * `useLayoutEffect` in the browser, `useEffect` on the server. Lets us stamp
 * pre-animation states (stroke dash offsets, hidden opacities) before first
 * paint — so nothing flashes fully-drawn — without React's SSR warning.
 */
export const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;
