"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { MARK_ARROW, MARK_G } from "@/components/brand/logo";
import { INTRO_SESSION_KEY as SESSION_KEY } from "@/lib/site";
import { ease } from "@/lib/utils";
import { useIntro } from "./providers";

/**
 * ~0.9s intro on the first visit of a session: the G mark draws in,
 * the wordmark slides out of it, then the curtain lifts.
 * Skipped on repeat visits and under reduced motion.
 */
export function PageLoader() {
  const { markReady } = useIntro();
  const [show, setShow] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* storage unavailable: just play it */
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(
      () => {
        setShow(false);
        markReady();
      },
      seen || reduce ? 0 : 900,
    );
    return () => window.clearTimeout(t);
  }, [markReady]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          aria-hidden
          className="gwa-loader fixed inset-0 z-[200] flex items-center justify-center bg-navy"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.6, ease: ease.inOut }}
        >
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 100 100" className="h-14 w-14">
              <motion.path
                d={MARK_G}
                fill="#fff"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: ease.out }}
                style={{ transformOrigin: "50% 50%" }}
              />
              <motion.path
                d={MARK_ARROW}
                fill="var(--color-green)"
                initial={{ opacity: 0, x: -10, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15, ease: ease.out }}
              />
            </svg>
            <motion.div
              className="overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 0.5, delay: 0.3, ease: ease.out }}
            >
              <div className="flex flex-col whitespace-nowrap text-lg font-semibold uppercase leading-[0.95] text-white">
                <span>Great Web</span>
                <span>
                  Agency
                  <span className="ml-[2px] inline-block h-[0.32em] w-[0.32em] bg-green" />
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
