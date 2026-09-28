import {
  Building2,
  Cpu,
  Dumbbell,
  HardHat,
  ShoppingBag,
  Truck,
  UtensilsCrossed,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { Industry, PortfolioItem } from "@/types";

export const industryIcons: Record<Industry, LucideIcon> = {
  ecommerce: ShoppingBag,
  fitness: Dumbbell,
  food: UtensilsCrossed,
  transport: Truck,
  technology: Cpu,
  "real-estate": Building2,
  fintech: Wallet,
  construction: HardHat,
};

/** Short, industry-flavoured copy for the mock sections */
const copy: Record<Industry, { cta: string; nav: string[]; grid: string; stats: [string, string, string] }> = {
  ecommerce: { cta: "Shop now", nav: ["New", "Shop", "About", "Journal"], grid: "Best sellers", stats: ["12k", "4.9★", "48h"] },
  fitness: { cta: "Join today", nav: ["Classes", "Coaches", "Pricing", "App"], grid: "This week's classes", stats: ["40+", "12", "6am"] },
  food: { cta: "Book a table", nav: ["Menu", "Order", "Story", "Visit"], grid: "From the menu", stats: ["120", "4.8★", "7 days"] },
  transport: { cta: "Get a quote", nav: ["Services", "Track", "Fleet", "Contact"], grid: "Our services", stats: ["98%", "24/7", "30+"] },
  technology: { cta: "Start free", nav: ["Product", "Docs", "Pricing", "Blog"], grid: "Built for teams", stats: ["99.9%", "2M+", "150"] },
  "real-estate": { cta: "View listings", nav: ["Buy", "Rent", "Sell", "Agents"], grid: "Featured homes", stats: ["850", "$2.1B", "25y"] },
  fintech: { cta: "Open account", nav: ["Personal", "Business", "Security", "Help"], grid: "Why switch", stats: ["0%", "1M+", "256-bit"] },
  construction: { cta: "Request a bid", nav: ["Projects", "Services", "Safety", "Careers"], grid: "Recent projects", stats: ["320", "35y", "0"] },
};

type Vars = CSSProperties & Record<`--${string}`, string>;

/**
 * A full-page website mockup generated from a palette. Height is 2.5x its width
 * (3⅓ viewports at 4:3), sized entirely with container units so it scales anywhere.
 */
export function SiteMock({ item, className }: { item: PortfolioItem; className?: string }) {
  const [bg, ink, accent] = item.palette;
  const Icon = industryIcons[item.industry];
  const c = copy[item.industry];
  const vars: Vars = {
    "--m-bg": bg,
    "--m-ink": ink,
    "--m-accent": accent,
    "--m-soft": `color-mix(in oklab, ${ink} 8%, ${bg})`,
    "--m-line": `color-mix(in oklab, ${ink} 14%, transparent)`,
  };

  if (item.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={item.image} alt="" loading="lazy" className={cn("block w-full", className)} />
    );
  }

  const photo = (seed: number, extra?: string) => (
    <div
      className={cn("relative overflow-hidden", extra)}
      style={{
        background: `radial-gradient(120% 90% at ${20 + seed * 17}% ${30 + seed * 11}%, color-mix(in oklab, var(--m-accent) 75%, white) 0%, var(--m-accent) 35%, color-mix(in oklab, var(--m-accent) 40%, var(--m-ink)) 100%)`,
      }}
    >
      <div
        className="absolute rounded-full opacity-40"
        style={{
          width: "45%",
          aspectRatio: "1",
          right: `${(seed * 13) % 40}%`,
          bottom: `-${10 + ((seed * 7) % 20)}%`,
          background: "var(--m-bg)",
          filter: "blur(2cqw)",
        }}
      />
    </div>
  );

  const renderHero = () => {
    switch (item.layout) {
      case 1:
        return (
          <div className="grid h-[62cqw] grid-cols-2 items-center gap-[4cqw] px-[6cqw]">
            <div>
              <p className="text-[2.2cqw] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--m-accent)" }}>
                {c.nav[0]} · 2025
              </p>
              <p className="mt-[2cqw] text-[6.4cqw] font-bold leading-[1] tracking-[-0.04em]">{item.tagline}</p>
              <div className="mt-[4cqw] flex gap-[2cqw]">
                <span className="rounded-full px-[3.5cqw] py-[1.6cqw] text-[2.4cqw] font-semibold" style={{ background: "var(--m-accent)", color: "var(--m-bg)" }}>
                  {c.cta}
                </span>
                <span className="rounded-full border px-[3.5cqw] py-[1.6cqw] text-[2.4cqw] font-semibold" style={{ borderColor: "var(--m-line)" }}>
                  Learn more
                </span>
              </div>
            </div>
            {photo(1, "h-[50cqw] rounded-[3cqw]")}
          </div>
        );
      case 2:
        return (
          <div className="relative h-[62cqw] px-[3cqw]">
            <div className="absolute inset-x-[3cqw] inset-y-0">{photo(2, "h-full rounded-[3cqw]")}</div>
            <div className="absolute inset-x-[3cqw] inset-y-0 rounded-[3cqw] bg-gradient-to-t from-black/55 to-transparent" />
            <Icon className="absolute right-[9cqw] top-[7cqw] h-[12cqw] w-[12cqw] text-white/80" strokeWidth={1.2} />
            <div className="absolute bottom-[7cqw] left-[9cqw] right-[9cqw] text-white">
              <p className="text-[7.5cqw] font-bold leading-[0.95] tracking-[-0.045em]">{item.tagline}</p>
              <span className="mt-[3cqw] inline-block rounded-full bg-white px-[3.5cqw] py-[1.6cqw] text-[2.4cqw] font-semibold text-black">
                {c.cta}
              </span>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="grid h-[62cqw] grid-cols-5 gap-[3cqw] px-[6cqw] pt-[4cqw]">
            <div className="col-span-3 flex flex-col justify-between pb-[4cqw]">
              <p className="text-[8cqw] font-bold leading-[0.92] tracking-[-0.05em]">{item.tagline}</p>
              <div>
                <div className="h-[1.2cqw] w-[80%] rounded-full" style={{ background: "var(--m-line)" }} />
                <div className="mt-[1.4cqw] h-[1.2cqw] w-[60%] rounded-full" style={{ background: "var(--m-line)" }} />
                <span className="mt-[4cqw] inline-block rounded-[1.5cqw] px-[3.5cqw] py-[1.6cqw] text-[2.4cqw] font-semibold" style={{ background: "var(--m-ink)", color: "var(--m-bg)" }}>
                  {c.cta} →
                </span>
              </div>
            </div>
            <div className="col-span-2 grid grid-rows-2 gap-[3cqw] pb-[4cqw]">
              {photo(3, "rounded-[2.5cqw]")}
              <div className="flex items-center justify-center rounded-[2.5cqw]" style={{ background: "var(--m-soft)" }}>
                <Icon className="h-[10cqw] w-[10cqw]" style={{ color: "var(--m-accent)" }} strokeWidth={1.4} />
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex h-[62cqw] flex-col items-center px-[6cqw] pt-[5cqw] text-center">
            <span className="rounded-full border px-[3cqw] py-[1cqw] text-[2.2cqw] font-medium" style={{ borderColor: "var(--m-line)" }}>
              ✦ New season just landed
            </span>
            <p className="mt-[3cqw] max-w-[80%] text-[7cqw] font-bold leading-[0.98] tracking-[-0.045em]">{item.tagline}</p>
            <span className="mt-[3.5cqw] rounded-full px-[4cqw] py-[1.6cqw] text-[2.4cqw] font-semibold" style={{ background: "var(--m-accent)", color: "var(--m-bg)" }}>
              {c.cta}
            </span>
            {photo(0, "mt-[4cqw] w-full flex-1 rounded-t-[3cqw]")}
          </div>
        );
    }
  };

  return (
    <div
      aria-hidden
      className={cn("@container relative w-full select-none overflow-hidden font-sans", className)}
      style={{ ...vars, background: "var(--m-bg)", color: "var(--m-ink)" }}
    >
      <div className="aspect-[2/5] w-full">
        {/* Nav */}
        <div className="flex h-[10cqw] items-center justify-between px-[6cqw]">
          <span className="flex items-center gap-[1.5cqw] text-[3cqw] font-bold tracking-[-0.03em]">
            <span className="flex h-[4.4cqw] w-[4.4cqw] items-center justify-center rounded-[1.2cqw]" style={{ background: "var(--m-accent)" }}>
              <Icon className="h-[2.8cqw] w-[2.8cqw]" style={{ color: "var(--m-bg)" }} strokeWidth={2.2} />
            </span>
            {item.name}
          </span>
          <span className="hidden gap-[3cqw] text-[2.1cqw] opacity-70 @[180px]:flex">
            {c.nav.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </span>
        </div>

        {renderHero()}

        {/* Logo strip */}
        <div className="flex h-[12cqw] items-center justify-between gap-[3cqw] border-y px-[6cqw]" style={{ borderColor: "var(--m-line)" }}>
          {[18, 12, 16, 10, 14].map((w, i) => (
            <span key={i} className="h-[2cqw] rounded-full opacity-30" style={{ width: `${w}cqw`, background: "var(--m-ink)" }} />
          ))}
        </div>

        {/* Features */}
        <div className="h-[36cqw] px-[6cqw] pt-[6cqw]">
          <div className="h-[1.6cqw] w-[30cqw] rounded-full" style={{ background: "var(--m-ink)" }} />
          <div className="mt-[4cqw] grid grid-cols-3 gap-[3cqw]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-[2.5cqw] p-[3cqw]" style={{ background: "var(--m-soft)" }}>
                <span className="block h-[5cqw] w-[5cqw] rounded-full" style={{ background: i === 1 ? "var(--m-accent)" : "var(--m-line)" }} />
                <span className="mt-[3cqw] block h-[1.4cqw] w-[80%] rounded-full" style={{ background: "var(--m-ink)", opacity: 0.7 }} />
                <span className="mt-[1.4cqw] block h-[1cqw] w-full rounded-full" style={{ background: "var(--m-line)" }} />
                <span className="mt-[1cqw] block h-[1cqw] w-[70%] rounded-full" style={{ background: "var(--m-line)" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="h-[56cqw] overflow-hidden px-[6cqw]">
          <p className="text-[3.6cqw] font-bold tracking-[-0.03em]">{c.grid}</p>
          <div className="mt-[3cqw] grid grid-cols-3 gap-[2.5cqw]">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i}>
                {photo(i + 4, "aspect-[4/3] rounded-[2cqw]")}
                <div className="mt-[1.4cqw] flex items-center justify-between">
                  <span className="h-[1.2cqw] w-[55%] rounded-full" style={{ background: "var(--m-ink)", opacity: 0.6 }} />
                  <span className="h-[1.2cqw] w-[20%] rounded-full" style={{ background: "var(--m-accent)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats band */}
        <div className="mx-[3cqw] grid h-[22cqw] grid-cols-3 items-center rounded-[3cqw] px-[4cqw]" style={{ background: "var(--m-ink)", color: "var(--m-bg)" }}>
          {c.stats.map((s) => (
            <div key={s}>
              <p className="text-[6cqw] font-bold tracking-[-0.04em]" style={{ color: "var(--m-accent)" }}>
                {s}
              </p>
              <span className="mt-[1cqw] block h-[1cqw] w-[60%] rounded-full bg-current opacity-30" />
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="flex h-[27cqw] flex-col items-center justify-center px-[10cqw] text-center">
          <p className="text-[6cqw] leading-none" style={{ color: "var(--m-accent)" }}>
            “
          </p>
          <span className="h-[1.3cqw] w-[80%] rounded-full" style={{ background: "var(--m-ink)", opacity: 0.55 }} />
          <span className="mt-[1.4cqw] h-[1.3cqw] w-[65%] rounded-full" style={{ background: "var(--m-ink)", opacity: 0.55 }} />
          <span className="mt-[3cqw] h-[1cqw] w-[25%] rounded-full" style={{ background: "var(--m-line)" }} />
        </div>

        {/* Footer */}
        <div className="flex h-[25cqw] flex-col justify-between px-[6cqw] py-[4cqw]" style={{ background: "var(--m-soft)" }}>
          <div className="flex items-center justify-between">
            <span className="text-[4cqw] font-bold tracking-[-0.04em]">{item.name}</span>
            <span className="rounded-full px-[3cqw] py-[1.2cqw] text-[2.2cqw] font-semibold" style={{ background: "var(--m-accent)", color: "var(--m-bg)" }}>
              {c.cta}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-[3cqw]">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="space-y-[1.2cqw]">
                <span className="block h-[1cqw] w-[70%] rounded-full" style={{ background: "var(--m-ink)", opacity: 0.5 }} />
                <span className="block h-[1cqw] w-[50%] rounded-full" style={{ background: "var(--m-line)" }} />
                <span className="block h-[1cqw] w-[60%] rounded-full" style={{ background: "var(--m-line)" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
