import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Cta } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal } from "@/components/ui/reveal";
import { ServiceVisual } from "@/components/visuals/service-visual";
import { services } from "@/data/services";
import { cn, pad } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design & development, ecommerce, UI/UX design, custom software, SEO & performance and digital strategy — delivered by one senior team.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Everything you need to build and grow online."
        accent={["grow"]}
        description="Six disciplines, one team. Pick a single service or combine them — every engagement is shaped around the outcome you need."
      >
        <nav aria-label="Services" className="mt-14 flex flex-wrap gap-2">
          {services.map((s, i) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="group flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:border-green hover:text-white"
            >
              <span className="font-mono text-xs text-green">{pad(i)}</span>
              {s.title}
            </a>
          ))}
        </nav>
      </PageHero>

      {services.map((s, i) => {
        const dark = i % 2 === 1;
        return (
          <section
            key={s.slug}
            id={s.slug}
            aria-labelledby={`${s.slug}-title`}
            className={cn("section-y scroll-mt-20", dark ? "bg-offwhite" : "bg-white")}
          >
            <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
              <div className={cn("lg:col-span-6", i % 2 === 1 && "lg:order-2 lg:col-start-7")}>
                <div className="lg:sticky lg:top-28">
                  <Reveal>
                    <p className="font-mono text-[clamp(4rem,9vw,8rem)] font-medium leading-none tracking-[-0.06em] text-navy/10">
                      {pad(i)}
                    </p>
                    <h2 id={`${s.slug}-title`} className="text-title -mt-4 text-navy md:-mt-8">
                      {s.title}
                    </h2>
                    <p className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-[-0.04em] text-teal">
                      {s.intro}
                    </p>
                  </Reveal>
                  <Reveal delay={0.15} className="mt-10">
                    <ServiceVisual kind={s.visual} />
                  </Reveal>
                </div>
              </div>

              <div className={cn("lg:col-span-5", i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-8")}>
                <Reveal>
                  <p className="text-lead text-muted">{s.explanation}</p>
                </Reveal>

                <Reveal delay={0.1} className="mt-12">
                  <h3 className="micro-label text-muted">Deliverables</h3>
                  <ul className="mt-5 divide-y divide-line border-y border-line">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-4 py-4 font-medium text-navy">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green/15 text-teal">
                          <Check className="h-3.5 w-3.5" aria-hidden />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={0.1} className="mt-12">
                  <h3 className="micro-label text-muted">How it runs</h3>
                  <ol className="mt-5 grid gap-3 sm:grid-cols-3">
                    {s.process.map((p, j) => (
                      <li key={p} className="rounded-[14px] border border-line bg-white p-4">
                        <span className="font-mono text-xs text-teal">{pad(j)}</span>
                        <span className="mt-2 block font-semibold text-navy">{p}</span>
                      </li>
                    ))}
                  </ol>
                </Reveal>

                <Reveal delay={0.1} className="mt-12">
                  <h3 className="micro-label text-muted">Technologies</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.technologies.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line px-3.5 py-1.5 text-sm font-medium text-navy/80"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={0.1} className="mt-12">
                  <MagneticButton href={`/contact?service=${s.slug}`}>Discuss {s.title.split(" ")[0]}</MagneticButton>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <Cta
        title="Not sure where to start?"
        text="Tell us about the problem. We'll recommend the right mix."
        button="Book a free call"
      />
    </>
  );
}
