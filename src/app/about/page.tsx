import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Cta } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { Process } from "@/components/sections/process";
import { Technology } from "@/components/sections/technology";
import { CountUp } from "@/components/ui/count-up";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TextReveal } from "@/components/ui/text-reveal";
import { BrandVisual } from "@/components/visuals/brand-visual";
import { values } from "@/data/content";
import { services } from "@/data/services";
import { stats } from "@/lib/site";
import { pad } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Great Web Agency thinks and builds: a senior team combining design, engineering, strategy and performance.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="A studio for people who build things that matter."
        accent={["matter"]}
        description="We're designers, engineers and strategists who believe great digital work is equal parts craft and clear thinking."
      />

      {/* Philosophy */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow>01 / Philosophy</Eyebrow>
            <TextReveal
              text="Design is how it works. Engineering is how it lasts."
              accent={["works", "lasts"]}
              className="text-display mt-6 text-navy [&_.text-green]:text-teal"
            />
            <Reveal delay={0.2}>
              <div className="text-lead mt-10 grid max-w-3xl gap-6 text-muted md:grid-cols-2">
                <p>
                  We don&apos;t hand designs over a wall. Designers prototype in code, engineers join from the first
                  workshop, and strategy stays in the room until launch day.
                </p>
                <p>
                  The result is work that looks considered, performs under pressure and can be changed easily when your
                  business does.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
            <BrandVisual />
          </Reveal>
        </div>

        <dl className="container-x mt-24 grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="flex flex-col-reverse border-t border-line py-8 pr-6">
              <dt className="mt-3 text-muted">{s.label}</dt>
              <dd className="text-[clamp(2.75rem,5vw,4.5rem)] font-bold leading-none tracking-[-0.05em] text-navy">
                <CountUp value={s.value} suffix={s.suffix} display={s.display} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Capabilities */}
      <section className="section-y bg-navy text-white">
        <div className="container-x">
          <Eyebrow tone="dark">02 / Capabilities</Eyebrow>
          <TextReveal text="One team, six disciplines." className="text-display mt-6" />
          <ul className="mt-16 border-t border-line-dark">
            {services.map((s, i) => (
              <li key={s.slug} className="border-b border-line-dark">
                <Link
                  href={`/services#${s.slug}`}
                  className="group grid items-baseline gap-2 py-7 transition-colors md:grid-cols-12 md:gap-6"
                >
                  <span className="micro-label text-green md:col-span-1">{pad(i)}</span>
                  <span className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold tracking-[-0.035em] text-white/85 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white md:col-span-6">
                    {s.title}
                  </span>
                  <span className="text-white/50 md:col-span-4">{s.short}</span>
                  <ArrowUpRight className="hidden h-6 w-6 justify-self-end text-white/30 transition-all group-hover:-translate-y-1 group-hover:text-green md:col-span-1 md:block" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process label="03 / Process" />

      {/* Values */}
      <section className="section-y bg-white">
        <div className="container-x">
          <Eyebrow>04 / Values</Eyebrow>
          <TextReveal text="What we hold ourselves to." className="text-display mt-6 max-w-[14ch] text-navy" />
          <Stagger className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <StaggerItem key={v.title}>
                <SpotlightCard tone="light" className="h-full p-8 hover:border-teal/40">
                  <span className="font-mono text-sm text-teal">{pad(i)}</span>
                  <h3 className="mt-14 text-2xl font-semibold tracking-[-0.03em] text-navy">{v.title}</h3>
                  <p className="mt-3 text-muted">{v.text}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Technology label="05 / Technology" />

      <Cta title="Let's build something great together." />
    </>
  );
}
