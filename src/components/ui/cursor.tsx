"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { POINTER_EFFECTS, useMediaQuery } from "@/lib/hooks";

type CursorMode = "default" | "hover" | "project";

/**
 * Optional follower cursor. The native cursor stays visible;
 * this only adds a soft ring that reacts to interactive elements.
 * Disabled for touch, coarse pointers and reduced motion.
 */
export function Cursor() {
  const enabled = useMediaQuery(POINTER_EFFECTS);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target instanceof Element ? e.target : null;
      const tagged = target?.closest<HTMLElement>("[data-cursor]");
      if (tagged?.dataset.cursor === "project") setMode("project");
      else if (tagged || target?.closest("a, button, [role='button'], input, textarea, select, label"))
        setMode("hover");
      else setMode("default");
    };
    const leave = () => setVisible(false);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = mode === "project" ? 124 : mode === "hover" ? 44 : 14;

  return (
    <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100]" style={{ x: sx, y: sy }}>
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        animate={{
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
          backgroundColor: mode === "project" ? "rgba(99,191,124,1)" : "rgba(99,191,124,0)",
          borderColor: mode === "default" ? "rgba(99,191,124,0.9)" : "rgba(99,191,124,0.6)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        style={{ borderWidth: 1.5, borderStyle: "solid", mixBlendMode: mode === "project" ? "normal" : "difference" }}
      >
        <AnimatePresence>
          {mode === "project" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="micro-label flex items-center gap-1 whitespace-nowrap font-semibold text-navy"
            >
              View project <ArrowRight className="h-3 w-3" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
