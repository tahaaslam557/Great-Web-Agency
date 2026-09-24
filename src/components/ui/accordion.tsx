"use client";

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { cn, ease, pad } from "@/lib/utils";
import type { Faq } from "@/types";

/** Animated FAQ accordion: height + opacity, icon rotates into an ×. */
export function Accordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <ul className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <li key={item.question} className="border-b border-line">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center gap-5 py-7 text-left md:gap-8"
              >
                <span
                  className={cn(
                    "micro-label w-8 shrink-0 transition-colors duration-300",
                    isOpen ? "text-teal" : "text-muted",
                  )}
                >
                  {pad(i)}
                </span>
                <span className="flex-1 text-lg font-semibold tracking-[-0.02em] text-navy transition-colors group-hover:text-teal md:text-2xl">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                    isOpen ? "border-green bg-green text-navy" : "border-line text-navy",
                  )}
                >
                  <Plus className="h-4 w-4" aria-hidden />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: ease.out }}
                  className="overflow-hidden"
                >
                  <p className="text-lead max-w-2xl pb-8 pl-[3.25rem] pr-12 text-muted md:pl-16">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
