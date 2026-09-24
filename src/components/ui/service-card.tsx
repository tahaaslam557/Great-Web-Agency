"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { ServiceVisual } from "@/components/visuals/service-visual";
import { cn, ease, pad } from "@/lib/utils";
import type { Service } from "@/types";

/** Expandable service card used on touch / small screens. */
export function ServiceCard({
  service,
  index,
  defaultOpen = false,
}: {
  service: Service;
  index: number;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border transition-colors duration-500",
        open ? "border-navy bg-navy text-white" : "border-line bg-offwhite text-navy",
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-4 p-5 text-left"
      >
        <span className={cn("micro-label", open ? "text-green" : "text-muted")}>{pad(index)}</span>
        <span className="flex-1 text-xl font-semibold tracking-[-0.03em]">{service.title}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-full border",
            open ? "border-green bg-green text-navy" : "border-line",
          )}
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: ease.out }}
          >
            <div className="px-5 pb-5">
              <p className="text-white/70">{service.short}</p>
              <ServiceVisual kind={service.visual} className="mt-5 rounded-[14px]" />
              <Link href={`/services#${service.slug}`} className="mt-5 inline-block text-sm font-semibold text-green">
                Learn more →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
