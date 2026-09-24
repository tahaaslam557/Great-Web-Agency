import { Accordion } from "@/components/ui/accordion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { TextReveal } from "@/components/ui/text-reveal";
import { faqs } from "@/data/content";

export function Faq() {
  return (
    <section className="section-y bg-white">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>07 / FAQ</Eyebrow>
            <TextReveal text="Questions, answered" square className="text-display mt-6 text-navy" />
            <Reveal delay={0.2}>
              <p className="text-lead mt-6 max-w-sm text-muted">
                Something else on your mind? We&apos;re happy to talk it through.
              </p>
              <div className="mt-8">
                <MagneticButton href="/contact" variant="outline">
                  Ask us anything
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal className="lg:col-span-7 lg:col-start-6">
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
