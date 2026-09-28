"use client";

import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { Code, Layers, Rocket, Search, Target, TrendingUp, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/content";
import { cn, ease, pad } from "@/lib/utils";

const icons: LucideIcon[] = [Search, Target, Layers, Code, Rocket, TrendingUp];

export function Process({ label = "04 / Process" }: { label?: string }) {
  return (
    <section id="process" className="relative bg-offwhite">
      <div className="container-x section-y pb-0 lg:pb-0">
        <SectionHeading
          label={label}
          title="From Idea to Impact"
          align="split"
          description="Six clear stages, no black boxes. You always know what's happening, what's next and why."
        />
      </div>
      <HorizontalTimeline />
      <VerticalTimeline />
    </section>
  );
}

/** Desktop: native vertical scroll drives a horizontal story. No scroll hijacking. */
function HorizontalTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const x = useTransform(progress, (p) => -p * distance);
  const lineScale = useTransform(progress, [0, 1], [0.04, 1]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setActive(Math.min(processSteps.length - 1, Math.floor(p * processSteps.length * 0.999)));
  });

  return (
    <div ref={sectionRef} className="relative hidden h-[300vh] lg:block">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="relative flex w-max gap-6 pl-[max(48px,calc((100vw-1360px)/2+48px))] pr-[12vw]"
        >
          {/* Timeline rail */}
          <div className="absolute left-[max(48px,calc((100vw-1360px)/2+48px))] right-[12vw] top-[34px] h-px bg-navy/10">
            <motion.div className="h-full origin-left bg-green" style={{ scaleX: lineScale }} />
          </div>

          {processSteps.map((step, i) => {
            const Icon = icons[i];
            const isActive = i === active;
            const done = i < active;
            return (
              <article key={step.title} className="relative w-[min(420px,32vw)] shrink-0 pt-0">
                <motion.span
                  animate={{ scale: isActive ? 1 : 0.7 }}
                  className={cn(
                    "relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full border transition-colors duration-500",
                    isActive
                      ? "border-green bg-green text-navy"
                      : done
                        ? "border-green/60 bg-offwhite text-teal"
                        : "border-navy/15 bg-offwhite text-navy/40",
                  )}
                >
                  <Icon className="h-6 w-6" aria-hidden />
                  {isActive && (
                    <span className="animate-pulse-ring absolute inset-0 rounded-full border border-green" />
                  )}
                </motion.span>

                <motion.div
                  animate={{ opacity: isActive ? 1 : 0.38, y: isActive ? 0 : 12 }}
                  transition={{ duration: 0.6, ease: ease.out }}
                  className="mt-10 pr-8"
                >
                  <motion.p
                    animate={{ scale: isActive ? 1.06 : 1 }}
                    style={{ transformOrigin: "left bottom" }}
                    className={cn(
                      "font-mono text-[5.5rem] font-medium leading-none tracking-[-0.06em] transition-colors duration-500",
                      isActive ? "text-teal" : "text-navy/20",
                    )}
                  >
                    {pad(i)}
                  </motion.p>
                  <h3 className="mt-6 text-4xl font-bold tracking-[-0.04em] text-navy">{step.title}</h3>
                  <p className="text-lead mt-4 max-w-sm text-muted">{step.description}</p>
                  <StepBars active={isActive} index={i} />
                </motion.div>
              </article>
            );
          })}
        </motion.div>

        <div className="container-x mt-14 flex items-center gap-4">
          <span className="micro-label text-muted">Scroll</span>
          <div className="h-px w-40 bg-navy/10">
            <motion.div className="h-full origin-left bg-navy" style={{ scaleX: progress }} />
          </div>
          <span className="micro-label text-navy">
            {pad(active)} / {pad(processSteps.length - 1)}
          </span>
        </div>
      </div>
    </div>
  );
}

/** A tiny progress glyph that fills as each stage becomes active. */
function StepBars({ active, index }: { active: boolean; index: number }) {
  return (
    <div className="mt-8 flex gap-1.5" aria-hidden>
      {processSteps.map((_, i) => (
        <motion.span
          key={i}
          className="h-1.5 rounded-full"
          animate={{
            width: i === index && active ? 36 : 14,
            backgroundColor: active && i <= index ? "#63BF7C" : "rgba(10,26,39,0.12)",
          }}
          transition={{ duration: 0.5, ease: ease.out }}
        />
      ))}
    </div>
  );
}

/** Mobile/tablet: vertical timeline whose line draws as you scroll. */
function VerticalTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });

  return (
    <div className="container-x section-y pt-16 lg:hidden">
      <ol ref={ref} className="relative space-y-12 pl-16">
        <span className="absolute bottom-2 left-[23px] top-2 w-px bg-navy/10" aria-hidden />
        <motion.span
          className="absolute bottom-2 left-[23px] top-2 w-px origin-top bg-green"
          style={{ scaleY: scrollYProgress }}
          aria-hidden
        />
        {processSteps.map((step, i) => {
          const Icon = icons[i];
          return (
            <motion.li
              key={step.title}
              className="relative"
              initial={{ opacity: 0.35, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.8, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 0.6, ease: ease.out }}
            >
              <span className="absolute -left-16 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-green bg-offwhite text-teal">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <p className="micro-label text-teal">{pad(i)}</p>
              <h3 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-navy">{step.title}</h3>
              <p className="mt-3 text-muted">{step.description}</p>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
