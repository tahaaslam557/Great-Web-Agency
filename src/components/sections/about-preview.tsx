import { CountUp } from "@/components/ui/count-up";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { TextReveal } from "@/components/ui/text-reveal";
import { BrandVisual } from "@/components/visuals/brand-visual";
import { pillars } from "@/data/content";
import { stats } from "@/lib/site";

export function AboutPreview() {
  return (
    <section className="section-y relative bg-white">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <BrandVisual />
            </Reveal>
          </div>
          <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
            <Eyebrow>05 / About</Eyebrow>
            <TextReveal
              text="We care about the details that users feel"
              square
              accent={["feel"]}
              className="text-display mt-6 text-navy [&_.text-green]:text-teal"
            />
            <Reveal delay={0.15}>
              <p className="text-lead mt-8 max-w-xl text-muted">
                Great Web Agency is a small, senior team where designers and engineers work side by side. We combine
                craft with business thinking, so every decision — from a micro-interaction to a database schema — is
                made for a reason.
              </p>
            </Reveal>
            <Stagger className="mt-8 flex flex-wrap gap-2">
              {pillars.map((p) => (
                <StaggerItem key={p}>
                  <span className="block rounded-full border border-line px-4 py-2 text-sm font-medium text-navy">
                    {p}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.2} className="mt-10">
              <MagneticButton href="/about" variant="outline">
                More about us
              </MagneticButton>
            </Reveal>
          </div>
        </div>

        {/* PLACEHOLDER stats — edit in src/lib/site.ts */}
        <dl className="mt-24 grid grid-cols-2 border-t border-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="flex flex-col-reverse border-b border-line py-10 pr-6 even:border-l even:pl-6 lg:border-b-0 lg:border-l lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <dt className="mt-4 text-muted">{s.label}</dt>
              <dd className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-none tracking-[-0.05em] text-navy">
                <CountUp value={s.value} suffix={s.suffix} display={s.display} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
