"use client";

import { AnimatePresence, motion } from "motion/react";
import { useRef, useState, type PointerEvent } from "react";
import { LogoMark } from "@/components/brand/logo";
import { GridBackground } from "@/components/ui/backgrounds";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { technologies } from "@/data/technologies";
import { cn, ease } from "@/lib/utils";

export function Technology({ label = "05 / Technology" }: { label?: string }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const current = hovered !== null ? technologies[hovered] : null;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = fieldRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section className="section-y relative overflow-hidden bg-navy text-white">
      <NoiseOverlay />
      <div className="container-x relative">
        <SectionHeading
          label={label}
          title="Powered by Modern Technology"
          tone="dark"
          align="split"
          description="We choose proven tools that keep your product fast, secure and easy to evolve — never technology for its own sake."
        />

        {/* Desktop constellation */}
        <div
          ref={fieldRef}
          onPointerMove={onMove}
          className="relative mt-20 hidden aspect-[16/8] overflow-hidden rounded-[30px] border border-line-dark bg-[#0c2030] md:block"
        >
          <GridBackground />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(16,139,136,0.25), transparent 60%)",
            }}
          />

          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            {technologies.map((t, i) => (
              <line
                key={t.name}
                x1="50"
                y1="50"
                x2={t.x}
                y2={t.y}
                vectorEffect="non-scaling-stroke"
                stroke={hovered === i ? "#63BF7C" : "rgba(255,255,255,0.12)"}
                strokeWidth={hovered === i ? 1.5 : 1}
                strokeDasharray={hovered === i ? "0" : "4 6"}
                style={{ transition: "stroke 0.3s" }}
              />
            ))}
          </svg>

          {/* Core */}
          <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28px] border border-green/40 bg-navy shadow-[0_0_80px_rgba(99,191,124,0.25)]">
            <span className="animate-pulse-ring absolute inset-0 rounded-[28px] border border-green/40" />
            <LogoMark tone="light" className="h-14 w-14" />
          </div>

          {technologies.map((t, i) => (
            <motion.button
              key={t.name}
              type="button"
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${t.x}%`, top: `${t.y}%` }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.05, duration: 0.6, ease: ease.out }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              aria-describedby="tech-note"
            >
              <span
                className={cn(
                  "animate-float block rounded-full border px-5 py-2.5 text-sm font-semibold backdrop-blur-md transition-all duration-300",
                  hovered === i
                    ? "border-green bg-green text-navy shadow-[0_0_40px_rgba(99,191,124,0.5)]"
                    : "border-white/15 bg-navy/70 text-white/85",
                )}
                style={{ animationDelay: `${-i * 0.7}s`, animationDuration: `${6 + (i % 3)}s` }}
              >
                {t.name}
              </span>
            </motion.button>
          ))}
        </div>

        <div
          className="mt-6 hidden min-h-[92px] rounded-[14px] border border-line-dark bg-white/[0.03] p-5 md:block"
          id="tech-note"
          aria-live="polite"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current?.name ?? "default"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <p className="micro-label text-green">{current ? current.category : "Our stack"}</p>
              <p className="mt-2 text-sm text-white/75">
                {current ? current.note : "Hover a technology to see where it fits in a build."}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: grouped pills */}
        <Stagger className="mt-14 flex flex-wrap gap-2.5 md:hidden">
          {technologies.map((t) => (
            <StaggerItem key={t.name}>
              <span className="block rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white/85">
                <span className="mr-2 text-green">●</span>
                {t.name}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
