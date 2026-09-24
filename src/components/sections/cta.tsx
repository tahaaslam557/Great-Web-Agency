"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import type { PointerEvent } from "react";
import { MARK_ARROW } from "@/components/brand/logo";
import { AnimatedGrid } from "@/components/ui/animated-grid";
import { GradientOrb } from "@/components/ui/backgrounds";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { TextReveal } from "@/components/ui/text-reveal";

interface CtaProps {
  title?: string;
  text?: string;
  button?: string;
}

/** Closing call to action: deep navy stage, living light, pointer spotlight. */
export function Cta({
  title = "Have an idea worth building?",
  text = "Let's turn it into a digital experience that makes an impact.",
  button = "Start a Conversation",
}: CtaProps) {
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${sx}% ${sy}%, rgba(99,191,124,0.22), transparent 60%)`;

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  return (
    <section className="bg-white px-3 pb-3 md:px-5 md:pb-5">
      <div
        onPointerMove={onMove}
        className="relative overflow-hidden rounded-[30px] bg-navy px-6 py-28 text-white md:py-40 lg:py-52"
      >
        <AnimatedGrid />
        <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
        <GradientOrb className="-left-40 -top-40 h-[480px] w-[480px] opacity-50" />
        <GradientOrb className="-bottom-60 -right-40 h-[560px] w-[560px] opacity-40 [animation-delay:-8s]" />
        <NoiseOverlay />

        {/* Floating brand fragments */}
        <svg
          viewBox="0 0 100 100"
          aria-hidden
          className="animate-float absolute left-[8%] top-[18%] hidden h-20 w-20 opacity-80 md:block"
        >
          <path d={MARK_ARROW} fill="#63BF7C" />
        </svg>
        <span
          aria-hidden
          className="animate-float absolute bottom-[20%] right-[10%] hidden h-5 w-5 bg-green md:block"
          style={{ animationDelay: "-3s" }}
        />
        <span
          aria-hidden
          className="animate-float absolute right-[18%] top-[22%] hidden h-24 w-24 rounded-full border border-white/15 md:block"
          style={{ animationDelay: "-5s" }}
        />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          <Eyebrow tone="dark">Start a project</Eyebrow>
          <TextReveal
            text={title}
            accent={["building"]}
            square
            className="mt-8 text-[clamp(2.75rem,7.5vw,7.5rem)] font-bold leading-[0.92] tracking-[-0.05em]"
          />
          <Reveal delay={0.3}>
            <p className="text-lead mx-auto mt-8 max-w-lg text-white/70">{text}</p>
            <div className="mt-12">
              <MagneticButton href="/contact" size="lg">
                {button}
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
