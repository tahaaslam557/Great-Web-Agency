import type { ReactNode } from "react";
import { GradientOrb, GridBackground } from "@/components/ui/backgrounds";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { TextReveal } from "@/components/ui/text-reveal";

interface PageHeroProps {
  label: string;
  title: string;
  accent?: string[];
  description?: string;
  children?: ReactNode;
}

/** Dark editorial hero shared by inner pages. */
export function PageHero({ label, title, accent, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pb-20 pt-40 text-white md:pb-28 md:pt-48">
      <GridBackground />
      <GradientOrb className="-right-40 -top-20 h-[460px] w-[460px] opacity-40" />
      <NoiseOverlay />
      <div className="container-x relative">
        <Eyebrow tone="dark">{label}</Eyebrow>
        <TextReveal as="h1" text={title} accent={accent} square className="text-hero mt-7 max-w-[16ch]" />
        {description && (
          <Reveal delay={0.3}>
            <p className="text-lead mt-9 max-w-xl text-white/70">{description}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
