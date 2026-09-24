"use client";

import { useRef, type HTMLAttributes, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends HTMLAttributes<HTMLDivElement> {
  tone?: "dark" | "light";
}

/**
 * Card with a soft light that follows the pointer.
 * Position is written to CSS variables, so no React re-renders.
 */
export function SpotlightCard({ className, tone = "dark", children, ...rest }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={cn(
        "group/spot relative overflow-hidden rounded-lg border transition-colors duration-500",
        tone === "dark" ? "border-line-dark bg-white/[0.03]" : "border-line bg-white",
        className,
      )}
      {...rest}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background:
            tone === "dark"
              ? "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(99,191,124,0.14), transparent 60%)"
              : "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(16,139,136,0.09), transparent 60%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
