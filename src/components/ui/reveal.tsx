"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { ease } from "@/lib/utils";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  y?: number;
  blur?: boolean;
  /** Fraction of the element that must be visible before revealing */
  amount?: number;
}

/** Scroll-triggered fade-up used for section entrances. */
export function Reveal({ children, delay = 0, y = 30, blur = true, amount = 0.25, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: blur ? "blur(8px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, delay, ease: ease.out }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps extends HTMLMotionProps<"div"> {
  stagger?: number;
  delay?: number;
  amount?: number;
}

/** Parent that staggers any <StaggerItem> children into view. */
export function Stagger({ children, stagger = 0.08, delay = 0, amount = 0.2, ...rest }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...rest }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: ease.out } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
