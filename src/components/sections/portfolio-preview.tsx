import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { GridBackground } from "@/components/ui/backgrounds";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { industryIcons } from "@/components/visuals/site-mock";
import { industries, portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// Deal the portfolio into three columns so each column mixes industries
const columns = [0, 1, 2].map((c) => portfolio.filter((_, i) => i % 3 === c).slice(0, 7));
const speeds = ["70s", "85s", "62s"];

/** Home section: industry index on the left, a tilted wall of live-scrolling sites on the right. */
export function PortfolioPreview() {
  return (
    <section id="portfolio" className="section-y relative overflow-hidden bg-offwhite">
      <GridBackground light className="opacity-70" />
      <div className="container-x relative grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            label="03 / Portfolio"
            title="Built for every industry."
            accent={["every"]}
            description="Over 40 launches across eight industries — each one designed around how that audience actually buys."
          />

          <Reveal delay={0.15} className="mt-12">
            <ul className="divide-y divide-line border-y border-line">
              {industries.map((ind) => {
                const Icon = industryIcons[ind.key];
                const count = portfolio.filter((p) => p.industry === ind.key).length;
                return (
                  <li key={ind.key}>
                    <Link
                      href={`/portfolio?industry=${ind.key}`}
                      className="group flex items-center gap-4 py-3.5 text-navy transition-colors hover:text-teal"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white transition-colors group-hover:border-green group-hover:bg-green">
                        <Icon className="h-4 w-4 transition-colors group-hover:text-navy" aria-hidden />
                      </span>
                      <span className="text-lg font-semibold tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1">
                        {ind.label}
                      </span>
                      <span className="ml-auto font-mono text-xs text-muted">{String(count).padStart(2, "0")}</span>
                      <ArrowUpRight className="h-4 w-4 text-navy/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green" aria-hidden />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="mt-10">
            <MagneticButton href="/portfolio">Explore the portfolio</MagneticButton>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7" amount={0.1}>
          <div className="marquee-group relative h-[560px] overflow-hidden rounded-[30px] border border-line bg-navy [perspective:1400px] md:h-[720px]">
            <div className="absolute -inset-x-[12%] -top-[20%] -bottom-[20%] grid grid-cols-2 gap-5 px-5 [transform:rotateX(18deg)_rotateZ(-8deg)] md:grid-cols-3 mask-fade-y">
              {columns.map((col, c) => (
                <div key={c} className={cn("overflow-hidden", c === 2 && "hidden md:block")}>
                  <div
                    className="animate-marquee-y flex flex-col gap-5"
                    style={
                      {
                        "--marquee-duration": speeds[c],
                        animationDirection: c % 2 ? "reverse" : "normal",
                      } as CSSProperties
                    }
                  >
                    {[...col, ...col].map((item, i) => (
                      <Link
                        key={`${item.slug}-${i}`}
                        href={`/portfolio?industry=${item.industry}`}
                        className="group block"
                        tabIndex={i >= col.length ? -1 : undefined}
                        aria-hidden={i >= col.length ? true : undefined}
                        aria-label={`${item.name} — view in portfolio`}
                      >
                        <BrowserFrame item={item} tone="dark" className="transition-[border-color] duration-500 group-hover:border-green/60" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,26,39,0.6)_100%)]" />
            <p className="micro-label absolute bottom-5 left-5 rounded-full border border-white/15 bg-navy/70 px-3.5 py-2 text-white/80 backdrop-blur-md">
              <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green align-middle" />
              Hover to scroll a site
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
