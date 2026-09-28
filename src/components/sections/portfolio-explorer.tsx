"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SiteMock, industryIcons } from "@/components/visuals/site-mock";
import { industries, industryLabel, portfolio } from "@/data/portfolio";
import { cn, ease } from "@/lib/utils";
import type { Industry, PortfolioItem } from "@/types";

type Filter = Industry | "all";

export function PortfolioExplorer({ initialIndustry = "all" }: { initialIndustry?: Filter }) {
  const [filter, setFilter] = useState<Filter>(initialIndustry);
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const items = filter === "all" ? portfolio : portfolio.filter((p) => p.industry === filter);
  const openIndex = openSlug ? items.findIndex((p) => p.slug === openSlug) : -1;

  const choose = (next: Filter) => {
    setFilter(next);
    // Keep the URL shareable without triggering a navigation
    const url = new URL(window.location.href);
    if (next === "all") url.searchParams.delete("industry");
    else url.searchParams.set("industry", next);
    window.history.replaceState(null, "", url);
  };

  const step = useCallback(
    (dir: 1 | -1) => {
      if (openIndex < 0) return;
      setOpenSlug(items[(openIndex + dir + items.length) % items.length].slug);
    },
    [items, openIndex],
  );

  const active = industries.find((i) => i.key === filter);

  return (
    <section className="relative bg-white pb-24 lg:pb-36">
      {/* Filter rail */}
      <div className="sticky top-0 z-30 border-b border-line bg-white/85 backdrop-blur-xl">
        <div className="container-x flex items-center gap-4 py-4">
          <div role="tablist" aria-label="Filter by industry" className="-mx-1 flex flex-1 gap-1 overflow-x-auto px-1 [scrollbar-width:none]">
            {[{ key: "all" as const, label: "All work" }, ...industries].map((ind) => {
              const selected = filter === ind.key;
              const count = ind.key === "all" ? portfolio.length : portfolio.filter((p) => p.industry === ind.key).length;
              return (
                <button
                  key={ind.key}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => choose(ind.key)}
                  className={cn(
                    "relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300",
                    selected ? "text-white" : "text-navy/60 hover:text-navy",
                  )}
                >
                  {selected && (
                    <motion.span layoutId="portfolio-filter" className="absolute inset-0 rounded-full bg-navy" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                  )}
                  <span className="relative">{ind.label}</span>
                  <span className={cn("relative font-mono text-[10px]", selected ? "text-green" : "text-navy/35")}>{String(count).padStart(2, "0")}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container-x pt-14 lg:pt-20">
        {/* Current filter headline */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: ease.out }}
            >
              <p className="micro-label text-muted">{active ? "Industry" : "Everything"}</p>
              <h2 className="text-display mt-3 text-navy">
                {active ? active.label : "All work"}
                <span className="ml-1 inline-block h-[0.2em] w-[0.2em] bg-green" aria-hidden />
              </h2>
              <p className="text-lead mt-4 max-w-md text-muted">{active ? active.blurb : "Every site, every industry — pick one to narrow it down."}</p>
            </motion.div>
          </AnimatePresence>
          <p className="font-mono text-sm text-muted" aria-live="polite">
            Showing <span className="font-semibold text-navy">{String(items.length).padStart(2, "0")}</span> of {portfolio.length}
          </p>
        </div>

        {/* Grid */}
        <motion.ul layout className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {items.map((item, i) => (
              <motion.li
                key={item.slug}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, delay: Math.min(i, 8) * 0.04, ease: ease.out }}
                className={cn(i % 3 === 1 && "lg:translate-y-12")}
              >
                <PortfolioCard item={item} index={portfolio.indexOf(item)} onOpen={() => setOpenSlug(item.slug)} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <Lightbox
        item={openIndex >= 0 ? items[openIndex] : null}
        position={openIndex + 1}
        total={items.length}
        onClose={() => setOpenSlug(null)}
        onStep={step}
      />
    </section>
  );
}

function PortfolioCard({ item, index, onOpen }: { item: PortfolioItem; index: number; onOpen: () => void }) {
  const Icon = industryIcons[item.industry];
  return (
    <button
      type="button"
      onClick={onOpen}
      data-cursor="project"
      aria-label={`Open ${item.name} preview`}
      className="group block w-full text-left"
    >
      <div className="relative transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
        <BrowserFrame
          item={item}
          className="transition-[border-color,box-shadow] duration-500 group-hover:border-teal/40 group-hover:shadow-[0_30px_80px_-30px_rgba(16,139,136,0.45)]"
        />
        <span className="absolute right-4 top-12 flex h-10 w-10 scale-75 items-center justify-center rounded-full bg-navy text-white opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
          <Maximize2 className="h-4 w-4" aria-hidden />
        </span>
      </div>
      <div className="mt-5 flex items-start gap-4">
        <span className="font-mono text-xs text-navy/35">{String(index + 1).padStart(2, "0")}</span>
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-navy">{item.name}</h3>
          <p className="mt-1 truncate text-sm text-muted">{item.tagline}</p>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs font-medium text-navy/70">
          <Icon className="h-3.5 w-3.5 text-teal" aria-hidden />
          {industryLabel(item.industry)}
        </span>
      </div>
    </button>
  );
}

interface LightboxProps {
  item: PortfolioItem | null;
  position: number;
  total: number;
  onClose: () => void;
  onStep: (dir: 1 | -1) => void;
}

function Lightbox({ item, position, total, onClose, onStep }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const open = !!item;

  useEffect(() => {
    if (!open) return;
    const returnTo = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      returnTo?.focus();
    };
  }, [open, onClose, onStep]);

  // Each new site starts at its top
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [item?.slug]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${item.name} preview`}
          className="fixed inset-0 z-[120] flex items-center justify-center p-3 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button type="button" aria-label="Close preview" tabIndex={-1} onClick={onClose} className="absolute inset-0 bg-navy/85 backdrop-blur-md" />

          <motion.div
            className="relative grid h-full max-h-[900px] w-full max-w-6xl grid-rows-[auto_1fr] overflow-hidden rounded-[24px] bg-navy text-white shadow-[0_40px_120px_rgba(0,0,0,0.6)] lg:grid-cols-[1fr_320px] lg:grid-rows-1"
            initial={{ y: 40, scale: 0.96 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 30, scale: 0.97 }}
            transition={{ duration: 0.5, ease: ease.out }}
          >
            {/* Info column */}
            <div className="order-1 flex flex-col gap-5 border-b border-white/10 p-5 lg:order-2 lg:border-b-0 lg:border-l lg:p-8">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs text-white/50">
                  {String(position).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </p>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close preview"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-green hover:text-green"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.35, ease: ease.out }}
                >
                  <p className="micro-label text-green">{industryLabel(item.industry)}</p>
                  <h3 className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-none tracking-[-0.04em]">{item.name}</h3>
                  <p className="mt-3 text-white/65">{item.tagline}</p>
                  <div className="mt-5 hidden gap-2 lg:flex" aria-hidden>
                    {item.palette.map((c) => (
                      <span key={c} className="h-7 w-7 rounded-full border border-white/15" style={{ background: c }} title={c} />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-auto hidden space-y-5 lg:block">
                <p className="text-sm text-white/50">Scroll inside the preview to explore the full page. Use ← → to browse.</p>
                <MagneticButton href="/contact" fullWidth magnetic={false}>
                  Start one like this
                </MagneticButton>
                <Link href="/pricing" className="flex items-center justify-center gap-1.5 text-sm font-semibold text-white/70 hover:text-green">
                  See pricing <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="flex gap-2 lg:mt-0">
                <button
                  type="button"
                  onClick={() => onStep(-1)}
                  aria-label="Previous site"
                  className="flex h-11 flex-1 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-green hover:text-green"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onStep(1)}
                  aria-label="Next site"
                  className="flex h-11 flex-1 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-green hover:text-green"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Scrollable site */}
            <div ref={scrollRef} className="order-2 overflow-y-auto overscroll-contain bg-[#07131d] p-3 md:p-6 lg:order-1">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: ease.out }}
                  className="mx-auto max-w-[760px] overflow-hidden rounded-[14px] border border-white/10"
                >
                  <SiteMock item={item} />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
