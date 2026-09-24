import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { TextReveal } from "@/components/ui/text-reveal";
import { SignalVisual } from "@/components/visuals/signal-visual";

export function Intro() {
  return (
    <section className="section-y relative overflow-hidden bg-offwhite">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <Eyebrow>Why it matters</Eyebrow>
          <TextReveal
            text={"Your website shouldn't\njust exist. It should work"}
            accent={["work"]}
            square
            stagger={0.05}
            className="text-display mt-7 text-navy [&_.text-green]:text-teal"
          />
        </div>

        <div className="flex flex-col justify-end gap-10 lg:col-span-4">
          <Reveal delay={0.15}>
            <SignalVisual />
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-lead text-muted">
              Great Web Agency combines strategy, design and engineering to create digital experiences that look
              exceptional, perform fast and turn attention into action.
            </p>
            <div className="mt-8">
              <MagneticButton href="/about" variant="outline">
                How we think
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
