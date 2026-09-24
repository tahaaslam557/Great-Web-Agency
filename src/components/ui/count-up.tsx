"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** Counts from 0 to `value` once it scrolls into view. */
export function CountUp({ value, suffix = "", display }: { value: number; suffix?: string; display?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || display) return;
    const controls = animate(0, value, {
      duration: reduce ? 0 : 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setCurrent(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, display, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden>
        {display ?? (
          <>
            {current}
            <span className="text-green">{suffix}</span>
          </>
        )}
      </span>
      <span className="sr-only">{display ?? `${value}${suffix}`}</span>
    </span>
  );
}
