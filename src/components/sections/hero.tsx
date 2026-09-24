"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, type PointerEvent } from "react";
import { useIntro } from "@/components/layout/providers";
import { GradientOrb } from "@/components/ui/backgrounds";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { Eyebrow } from "@/components/ui/section-heading";
import { TextReveal } from "@/components/ui/text-reveal";
import { HeroVisual } from "@/components/visuals/hero-visual";
import { POINTER_EFFECTS, useMediaQuery } from "@/lib/hooks";
import { ease } from "@/lib/utils";

export function Hero() {
  const { ready } = useIntro();
  const ref = useRef<HTMLElement>(null);
  const finePointer = useMediaQuery(POINTER_EFFECTS);

  // Normalised pointer (-0.5 … 0.5), smoothed with a spring
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18, mass: 0.8 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.8 });
  const glowX = useTransform(mx, (v) => `${50 + v * 30}%`);
  const glowY = useTransform(my, (v) => `${40 + v * 30}%`);
  const gridX = useTransform(mx, (v) => v * -8);
  const gridY = useTransform(my, (v) => v * -8);
  const glow = useMotionTemplate`radial-gradient(900px circle at ${glowX} ${glowY}, rgba(16,139,136,0.28), transparent 60%)`;

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (!finePointer || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width - 0.5);
    rawY.set((e.clientY - r.top) / r.height - 0.5);
  };

  const base = 0.1;
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30, filter: "blur(8px)" },
    animate: ready ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined,
    transition: { duration: 0.9, ease: ease.out, delay: base + delay },
  });

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      className="relative overflow-hidden bg-navy pb-20 pt-32 text-white md:pt-40 lg:pb-28"
    >
      {/* Atmosphere */}
      <motion.div
        className="bg-grid pointer-events-none absolute inset-0 mask-fade"
        style={{ x: gridX, y: gridY }}
        aria-hidden
      />
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} aria-hidden />
      <GradientOrb className="-right-40 top-1/3 h-[520px] w-[520px] opacity-40" />
      <NoiseOverlay />

      <div className="container-x relative grid items-center gap-14 lg:min-h-[calc(100svh-15rem)] lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <motion.div {...fadeUp(0)}>
            <Eyebrow tone="dark">Digital products • Web • Software</Eyebrow>
          </motion.div>

          <TextReveal
            as="h1"
            onMount
            play={ready}
            delay={base + 0.15}
            stagger={0.07}
            accent={["forward"]}
            square
            text="We build digital experiences that move businesses forward"
            className="text-hero mt-7 max-w-[14ch] text-white lg:max-w-none"
          />

          <motion.p {...fadeUp(0.75)} className="text-lead mt-9 max-w-md text-white/70">
            Strategy, design and technology — combined to build websites, software and digital products people remember.
          </motion.p>
          <motion.div {...fadeUp(0.9)} className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton href="/contact" size="lg">
              Start a Project
            </MagneticButton>
            <MagneticButton href="/work" size="lg" variant="outline-light" arrow={false}>
              Explore Our Work
            </MagneticButton>
          </motion.div>
          <motion.div {...fadeUp(1.05)} className="mt-10 hidden items-center gap-3 text-sm text-white/50 lg:flex">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-pulse-ring absolute inset-0 rounded-full bg-green" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-green" />
            </span>
            Available for new projects
          </motion.div>
        </div>

        <div className="lg:col-span-5 lg:-mr-6 xl:-mr-10">
          <HeroVisual mx={mx} my={my} play={ready} delay={base + 0.9} />
        </div>
      </div>
    </section>
  );
}
