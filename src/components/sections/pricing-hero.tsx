"use client";

import { motion, useReducedMotion } from "motion/react";
import { GradientOrb, GridBackground } from "@/components/ui/backgrounds";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { TextReveal } from "@/components/ui/text-reveal";
import { formatPrice, pricing } from "@/data/pricing";

// A sample "order" printed on the receipt: the featured plan of four categories
const lines = ["website", "branding", "seo", "maintenance"].map((slug) => {
  const cat = pricing.find((c) => c.slug === slug)!;
  const plan = cat.plans.find((p) => p.featured) ?? cat.plans[0];
  return { label: cat.label, plan: plan.name, price: formatPrice(plan.price) + (plan.unit?.startsWith("/") ? plan.unit : "") };
});

/** Pricing hero: a receipt feeds out of a printer slot, line by line. */
export function PricingHero() {
  const reduce = useReducedMotion();
  const printDelay = reduce ? 0 : 0.6;

  return (
    <section className="relative overflow-hidden bg-navy pb-24 pt-40 text-white md:pb-32 md:pt-48">
      <GridBackground />
      <GradientOrb className="-right-40 -top-20 h-[460px] w-[460px] opacity-40" />
      <NoiseOverlay />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow tone="dark">Pricing</Eyebrow>
          <TextReveal as="h1" text="Clear prices. No small print." accent={["No"]} square className="text-hero mt-7 max-w-[13ch]" />
          <Reveal delay={0.3}>
            <p className="text-lead mt-9 max-w-xl text-white/70">
              {pricing.length} service categories, one straightforward price list. Pick a package, or mix and match — we&apos;ll
              tailor a quote around the result you need.
            </p>
          </Reveal>
        </div>

        {/* Printer + receipt */}
        <div className="mx-auto w-full max-w-[380px] lg:col-span-5" aria-hidden>
          <div className="relative z-10 h-14 rounded-[18px] border border-white/10 bg-gradient-to-b from-[#1b3547] to-[#0f2434] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)]">
            <span className="absolute right-5 top-1/2 h-2 w-2 -translate-y-1/2 animate-pulse rounded-full bg-green shadow-[0_0_12px_#63bf7c]" />
            <span className="absolute inset-x-8 bottom-3 h-1.5 rounded-full bg-black/60" />
          </div>
          <div className="relative -mt-4 overflow-hidden px-6 pt-1">
            <motion.div
              className="relative bg-[#fbfaf6] px-6 pb-10 pt-8 font-mono text-[12px] text-navy shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] receipt-edge"
              initial={{ y: reduce ? 0 : "-100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 2.6, delay: printDelay, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="text-center text-sm font-semibold tracking-[0.2em]">GREAT WEB AGENCY</p>
              <p className="mt-1 text-center text-[10px] text-navy/50">ORDER #0001 · QUOTE</p>
              <div className="my-5 border-t border-dashed border-navy/25" />
              <ul className="space-y-3.5">
                {lines.map((l, i) => (
                  <motion.li
                    key={l.label}
                    initial={{ opacity: reduce ? 1 : 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: printDelay + 0.5 + i * 0.35, duration: 0.2 }}
                  >
                    <div className="flex justify-between gap-3">
                      <span className="font-semibold uppercase">{l.label}</span>
                      <span className="font-semibold">{l.price}</span>
                    </div>
                    <p className="text-[10px] text-navy/55">{l.plan}</p>
                  </motion.li>
                ))}
              </ul>
              <div className="my-5 border-t border-dashed border-navy/25" />
              <div className="flex justify-between text-sm font-bold">
                <span>TOTAL</span>
                <span>Your call</span>
              </div>
              <p className="mt-6 text-center text-[10px] tracking-[0.2em] text-navy/50">THANK YOU · COME BUILD AGAIN</p>
              <div className="mx-auto mt-4 flex h-8 w-40 items-end gap-[2px]">
                {Array.from({ length: 34 }, (_, i) => (
                  <span key={i} className="bg-navy" style={{ width: i % 3 === 0 ? 3 : 1, height: `${60 + ((i * 37) % 40)}%` }} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
