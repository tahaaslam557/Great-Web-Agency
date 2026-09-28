"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { useState } from "react";
import { GridBackground, Glow } from "@/components/ui/backgrounds";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { formatPrice, pricing } from "@/data/pricing";
import { cn, ease } from "@/lib/utils";

/** Which three plans of each category the home page shows */
const picks: Record<string, [number, number, number]> = {
  website: [0, 3, 4],
  ecommerce: [0, 2, 3],
  branding: [2, 4, 5],
  seo: [0, 1, 2],
  maintenance: [0, 1, 2],
};
const tabs = pricing.filter((c) => c.slug in picks);

export function PricingPreview() {
  const [active, setActive] = useState(tabs[0].slug);
  const category = tabs.find((t) => t.slug === active)!;
  const plans = picks[active].map((i) => category.plans[i]);

  return (
    <section id="pricing" className="section-y relative overflow-hidden bg-navy text-white">
      <GridBackground className="opacity-50" />
      <Glow className="-right-40 top-20 h-[520px] w-[520px]" color="green" />
      <div className="container-x relative">
        <SectionHeading
          label="08 / Pricing"
          title="Honest prices. Serious work."
          accent={["Serious"]}
          tone="dark"
          align="split"
          description="Clear packages to get you moving — and custom quotes when your project needs something bigger."
        />

        <Reveal delay={0.1} className="mt-14">
          <div role="tablist" aria-label="Pricing categories" className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[0.04] p-1.5">
            {tabs.map((t) => (
              <button
                key={t.slug}
                role="tab"
                type="button"
                aria-selected={active === t.slug}
                aria-controls="pricing-panel"
                onClick={() => setActive(t.slug)}
                className={cn(
                  "relative shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 md:px-5",
                  active === t.slug ? "text-navy" : "text-white/65 hover:text-white",
                )}
              >
                {active === t.slug && (
                  <motion.span layoutId="pricing-tab" className="absolute inset-0 rounded-full bg-green" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div id="pricing-panel" role="tabpanel" className="mt-10 grid gap-5 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {plans.map((plan, i) => {
              const featured = !!plan.featured;
              return (
                <motion.div
                  key={`${active}-${plan.name}`}
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(6px)", transition: { duration: 0.25 } }}
                  transition={{ duration: 0.7, delay: i * 0.07, ease: ease.out }}
                  className={cn("relative overflow-hidden rounded-[24px] p-px", featured ? "lg:-my-4" : "")}
                >
                  {/* Rotating light border on the featured plan */}
                  {featured ? (
                    <span aria-hidden className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-spin bg-[conic-gradient(from_0deg,transparent_0deg,#63bf7c_60deg,transparent_140deg,transparent_360deg)] [animation-duration:5s]" />
                  ) : (
                    <span aria-hidden className="absolute inset-0 rounded-[24px] bg-white/10" />
                  )}
                  <div className={cn("relative flex h-full flex-col rounded-[23px] p-7 md:p-8", featured ? "bg-[#0f2a3a]" : "bg-navy")}>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold tracking-[-0.02em]">{plan.name}</h3>
                      {featured && <span className="micro-label rounded-full bg-green px-3 py-1.5 text-navy">Popular</span>}
                    </div>
                    <div className="mt-8 flex items-end gap-3">
                      <p className="text-[clamp(2.75rem,4.5vw,3.75rem)] font-bold leading-none tracking-[-0.05em]">{formatPrice(plan.price)}</p>
                      <div className="pb-1.5 text-sm">
                        {plan.unit && <p className="text-white/60">{plan.unit}</p>}
                      </div>
                    </div>
                    <ul className="mt-8 flex-1 space-y-3 border-t border-white/10 pt-7">
                      {plan.features.slice(0, 6).map((f) => (
                        <li key={f} className="flex items-start gap-3 text-[0.95rem] text-white/75">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" aria-hidden />
                          {f}
                        </li>
                      ))}
                      {plan.features.length > 6 && (
                        <li className="pl-7 text-sm text-white/45">+ {plan.features.length - 6} more included</li>
                      )}
                    </ul>
                    <div className="mt-9">
                      <MagneticButton
                        href={`/contact?plan=${encodeURIComponent(`${category.label} — ${plan.name}`)}`}
                        variant={featured ? "primary" : "ghost-light"}
                        fullWidth
                        magnetic={false}
                      >
                        Get started
                      </MagneticButton>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <Reveal delay={0.1} className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-white/60">
            Plus video animation, social media, custom portals and hosting —{" "}
            <Link href="/pricing" className="font-semibold text-green underline-offset-4 hover:underline">
              {pricing.length} categories in total
            </Link>
            .
          </p>
          <MagneticButton href="/pricing" variant="outline-light">
            See all pricing
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
