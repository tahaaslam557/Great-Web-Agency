"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Sticky category rail that highlights whichever pricing section is on screen. */
export function PricingNav({ items }: { items: { slug: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.slug);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.slug);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  // Keep the active pill visible inside the horizontally scrolling rail
  useEffect(() => {
    const rail = railRef.current;
    const pill = rail?.querySelector<HTMLElement>(`[data-slug="${active}"]`);
    if (!rail || !pill) return;
    rail.scrollTo({ left: pill.offsetLeft - rail.clientWidth / 2 + pill.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <nav aria-label="Pricing categories" className="sticky top-0 z-30 border-b border-line bg-white/85 backdrop-blur-xl">
      <div ref={railRef} className="container-x relative flex gap-1 overflow-x-auto py-4 [scrollbar-width:none]">
        {items.map((item, i) => (
          <a
            key={item.slug}
            href={`#${item.slug}`}
            data-slug={item.slug}
            aria-current={active === item.slug ? "true" : undefined}
            className={cn(
              "relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300",
              active === item.slug ? "text-white" : "text-navy/60 hover:text-navy",
            )}
          >
            {active === item.slug && (
              <motion.span layoutId="pricing-nav" className="absolute inset-0 rounded-full bg-navy" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
            )}
            <span className={cn("relative font-mono text-[10px]", active === item.slug ? "text-green" : "text-navy/35")}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="relative">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
