import type { Metadata } from "next";
import { Cta } from "@/components/sections/cta";
import { PricingHero } from "@/components/sections/pricing-hero";
import { PricingNav } from "@/components/sections/pricing-nav";
import { Reveal } from "@/components/ui/reveal";
import { TicketCard } from "@/components/ui/ticket-card";
import { formatPrice, pricing } from "@/data/pricing";
import { cn, pad } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent packages for websites, ecommerce, web portals, logo & branding, SEO, social media, video animation, maintenance and hosting.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingNav items={pricing.map(({ slug, label }) => ({ slug, label }))} />

      {pricing.map((cat, i) => {
        const surface = i % 2 === 0 ? "white" : "offwhite";
        return (
          <section
            key={cat.slug}
            id={cat.slug}
            aria-labelledby={`${cat.slug}-title`}
            className={cn("scroll-mt-20 py-20 lg:py-28", surface === "white" ? "bg-white" : "bg-offwhite")}
          >
            <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <Reveal className="lg:sticky lg:top-28">
                  <p className="font-mono text-[clamp(4rem,8vw,7rem)] font-medium leading-none tracking-[-0.06em] text-navy/10">
                    {pad(i)}
                  </p>
                  <h2 id={`${cat.slug}-title`} className="text-title -mt-3 text-navy md:-mt-6">
                    {cat.label}
                  </h2>
                  <p className="text-lead mt-5 max-w-sm text-muted">{cat.description}</p>
                  <p className="micro-label mt-8 flex items-center gap-2 text-muted">
                    <span className="h-px w-6 bg-green" />
                    {cat.plans.length} packages · from {formatPrice(Math.min(...cat.plans.map((p) => p.price)))}
                  </p>
                </Reveal>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
                {cat.plans.map((plan, j) => (
                  <Reveal key={plan.name} delay={(j % 2) * 0.08} amount={0.15} className="h-full">
                    <TicketCard plan={plan} category={cat.label} index={j} surface={surface} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <Cta title="Need something custom?" text="Tell us what you're building and we'll put together a quote that fits." button="Get a custom quote" />
    </>
  );
}
