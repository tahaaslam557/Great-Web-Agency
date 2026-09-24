"use client";

import { useSyncExternalStore } from "react";

/** Subscribe to a CSS media query. Always false during SSR. */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** Fine pointer + hover + motion allowed: safe to enable pointer-driven effects. */
export const POINTER_EFFECTS = "(pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)";
