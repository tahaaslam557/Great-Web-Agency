"use client";

import { AnimatePresence, motion } from "motion/react";
import { Check, Minus, Plus } from "lucide-react";
import { useId, useState } from "react";
import { cn, ease } from "@/lib/utils";

/** Plan features: the first few always visible, the rest behind a toggle. */
export function FeatureList({ features, visible = 5, dark = false }: { features: string[]; visible?: number; dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const head = features.slice(0, visible);
  const rest = features.slice(visible);

  const item = (f: string) => (
    <li key={f} className={cn("flex items-start gap-3 text-[0.95rem]", dark ? "text-white/75" : "text-navy/75")}>
      <span className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full", dark ? "bg-green/20 text-green" : "bg-green/15 text-teal")}>
        <Check className="h-3 w-3" aria-hidden />
      </span>
      {f}
    </li>
  );

  return (
    <div>
      <ul className="space-y-3">{head.map(item)}</ul>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            id={id}
            className="space-y-3 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: ease.out }}
          >
            <li aria-hidden className="h-0" />
            {rest.map(item)}
          </motion.ul>
        )}
      </AnimatePresence>
      {rest.length > 0 && (
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors",
            dark ? "text-green hover:text-green-bright" : "text-teal hover:text-navy",
          )}
        >
          {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
          {open ? "Show less" : `${rest.length} more included`}
        </button>
      )}
    </div>
  );
}
