"use client";

import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { ServiceVisual } from "@/components/visuals/service-visual";
import { services } from "@/data/services";
import { cn, ease, pad } from "@/lib/utils";

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="section-y relative bg-white">
      <div className="container-x">
        <SectionHeading
          label="01 / Services"
          title="What We Build"
          align="split"
          description="From first concept to launch and beyond, we design and develop digital experiences built around real business goals."
        />

        {/* Desktop: interactive list + live visual */}
        <div className="mt-20 hidden gap-12 lg:grid lg:grid-cols-12">
          <LayoutGroup>
            <ul className="lg:col-span-6">
              {services.map((s, i) => {
                const isActive = i === active;
                return (
                  <motion.li key={s.slug} layout="position" className="relative border-t border-line last:border-b">
                    {isActive && (
                      <motion.span
                        layoutId="service-indicator"
                        className="absolute -top-px left-0 h-[2px] w-full origin-left bg-green"
                        transition={{ type: "spring", stiffness: 300, damping: 32 }}
                      />
                    )}
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-expanded={isActive}
                      className="group flex w-full items-baseline gap-6 py-7 text-left"
                    >
                      <span className={cn("micro-label w-8 transition-colors", isActive ? "text-teal" : "text-muted")}>
                        {pad(i)}
                      </span>
                      <span
                        className={cn(
                          "flex-1 text-[clamp(1.5rem,2.3vw,2.25rem)] font-semibold tracking-[-0.035em] transition-colors duration-300",
                          isActive ? "text-navy" : "text-navy/35 group-hover:text-navy/70",
                        )}
                      >
                        {s.title}
                      </span>
                      <ArrowUpRight
                        className={cn(
                          "h-6 w-6 self-center transition-all duration-500",
                          isActive
                            ? "rotate-45 text-teal opacity-100"
                            : "text-navy/30 opacity-0 group-hover:opacity-100",
                        )}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: ease.out }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pl-14">
                            <p className="text-lead max-w-md text-muted">{s.short}</p>
                            <Link
                              href={`/services#${s.slug}`}
                              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline"
                            >
                              Learn more <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ul>
          </LayoutGroup>

          <div className="lg:col-span-6">
            <div className="sticky top-28">
              <div className="relative">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={current.slug}
                    initial={{ opacity: 0, scale: 0.97, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
                    transition={{ duration: 0.55, ease: ease.out }}
                  >
                    <ServiceVisual kind={current.visual} />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute -bottom-5 left-8 flex items-center gap-3 rounded-full border border-line bg-white px-5 py-2.5 shadow-soft">
                  <motion.span
                    key={active}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="font-mono text-sm font-medium text-teal"
                  >
                    {pad(active)}
                  </motion.span>
                  <span className="text-sm font-semibold text-navy">/ {pad(services.length - 1)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: accordion cards */}
        <div className="mt-14 space-y-3 lg:hidden">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} defaultOpen={i === 0} />
          ))}
        </div>

        <div className="mt-16 flex justify-center lg:mt-24">
          <MagneticButton href="/services" variant="outline">
            All services
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
