"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, type ReactNode } from "react";
import { ease } from "@/lib/utils";

// Stays false during the very first render so the server HTML is never covered.
let hasNavigated = false;

/**
 * Page transition: on client-side navigation a navy/teal layer
 * briefly covers the page and wipes upward as the new page arrives.
 */
export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const animateCurtain = hasNavigated && !reduce;

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <>
      {animateCurtain && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[150] bg-brand"
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          animate={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.55, ease: ease.inOut }}
        />
      )}
      {children}
    </>
  );
}
