"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";
import { cn, ease } from "@/lib/utils";

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-y relative bg-offwhite">
      <div className="container-x">
        <SectionHeading
          label="06 / Clients"
          title="In Their Words"
          align="split"
          description="What it's like to build with us."
        />

        <div className="mt-16 flex flex-col gap-4 lg:h-[460px] lg:flex-row">
          {testimonials.map((t, i) => {
            const isActive = i === active;
            return (
              <motion.button
                key={i}
                type="button"
                layout
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-pressed={isActive}
                transition={{ layout: { duration: 0.6, ease: ease.out } }}
                className={cn(
                  "relative flex flex-col justify-between overflow-hidden rounded-lg border p-7 text-left transition-colors duration-500 md:p-9",
                  isActive
                    ? "border-navy bg-navy text-white lg:flex-[2.4]"
                    : "border-line bg-white text-navy opacity-70 hover:opacity-100 lg:flex-1",
                )}
              >
                {isActive && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-24 block -top-24 h-72 w-72 rounded-full bg-teal/40 blur-[80px]"
                  />
                )}
                <span className="relative block">
                  <Quote className={cn("h-8 w-8", isActive ? "text-green" : "text-teal")} aria-hidden />
                  <motion.span
                    layout="position"
                    className={cn(
                      "mt-6 block font-semibold tracking-[-0.025em]",
                      isActive ? "text-[clamp(1.25rem,2vw,1.75rem)] leading-snug" : "line-clamp-4 text-lg leading-snug",
                    )}
                  >
                    “{t.quote}”
                  </motion.span>
                </span>
                <motion.span layout="position" className="relative mt-8 flex items-center gap-4">
                  <span
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                      isActive ? "bg-green text-navy" : "bg-navy/5 text-navy",
                    )}
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className={cn("block text-sm", isActive ? "text-white/60" : "text-muted")}>
                      {t.role}, {t.company}
                    </span>
                  </span>
                  {t.isPlaceholder && isActive && (
                    <span
                      className={cn(
                        "micro-label ml-auto hidden rounded-full border px-2.5 py-1 sm:inline-block",
                        isActive ? "border-white/20 text-white/50" : "border-line text-muted",
                      )}
                      style={{ fontSize: "0.6rem" }}
                    >
                      Sample
                    </span>
                  )}
                </motion.span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
