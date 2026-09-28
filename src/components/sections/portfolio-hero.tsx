import type { CSSProperties } from "react";
import { GradientOrb, GridBackground } from "@/components/ui/backgrounds";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { CountUp } from "@/components/ui/count-up";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { TextReveal } from "@/components/ui/text-reveal";
import { industries, portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// One of each industry first, so the ribbon reads as a varied mix
const ribbon = industries.flatMap((ind, i) =>
  portfolio.filter((p) => p.industry === ind.key).slice(i % 2, (i % 2) + 1),
);
const tilt = ["-rotate-[4deg] translate-y-6", "rotate-[3deg] -translate-y-4", "-rotate-[2deg] translate-y-2", "rotate-[5deg] translate-y-8"];

/** Portfolio page hero: headline over a tilted, endlessly drifting ribbon of launched sites. */
export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-navy pb-24 pt-40 text-white md:pb-32 md:pt-48">
      <GridBackground />
      <GradientOrb className="-left-40 top-10 h-[480px] w-[480px] opacity-40" />
      <NoiseOverlay />

      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Eyebrow tone="dark">Portfolio</Eyebrow>
            <TextReveal
              as="h1"
              text="Every industry. Never a template."
              accent={["Never"]}
              square
              className="text-hero mt-7 max-w-[14ch]"
            />
          </div>
          <Reveal delay={0.3} className="lg:col-span-4 lg:pb-3">
            <p className="text-lead text-white/70">
              A gallery of sites we&apos;ve launched for stores, studios, startups and builders. Hover any one to scroll it,
              click to open it up.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.4} className="mt-14 grid grid-cols-3 gap-4 border-y border-white/10 py-7 md:max-w-2xl">
          {[
            { value: portfolio.length, suffix: "+", label: "Sites launched" },
            { value: industries.length, suffix: "", label: "Industries" },
            { value: 100, suffix: "%", label: "Custom design" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-[clamp(2rem,4vw,3rem)] font-bold leading-none tracking-[-0.04em]">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="micro-label mt-2 text-white/50">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>

      {/* Ribbon */}
      <div className="marquee-group relative mt-20 mask-fade-x md:mt-24" aria-hidden>
        <div
          className="animate-marquee flex w-max gap-8 py-10"
          style={{ "--marquee-duration": "80s" } as CSSProperties}
        >
          {[...ribbon, ...ribbon].map((item, i) => (
            <div key={`${item.slug}-${i}`} className={cn("group w-[260px] shrink-0 md:w-[340px]", tilt[i % tilt.length])}>
              <BrowserFrame
                item={item}
                tone="dark"
                className="shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
