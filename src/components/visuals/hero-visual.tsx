"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { LogoMark } from "@/components/brand/logo";
import { cn, ease } from "@/lib/utils";

interface HeroVisualProps {
  /** Pointer position normalised to -0.5 … 0.5 */
  mx: MotionValue<number>;
  my: MotionValue<number>;
  play: boolean;
  delay?: number;
}

/** Fixed particle positions (no Math.random → no hydration mismatch). */
const PARTICLES = [
  [8, 14, 0],
  [22, 88, 1.1],
  [36, 6, 2.3],
  [52, 94, 0.6],
  [64, 12, 1.8],
  [78, 90, 2.9],
  [92, 30, 0.9],
  [4, 58, 2.1],
  [96, 72, 1.4],
  [46, 50, 3.1],
  [30, 70, 0.3],
  [70, 60, 2.6],
];

/**
 * Abstract "digital system" built from HTML/SVG: a browser, a code card,
 * a design-token card and a performance card, wired together with live lines.
 * Everything is sized in container units so it scales down to 320px.
 */
export function HeroVisual({ mx, my, play, delay = 0 }: HeroVisualProps) {
  const back = useLayer(mx, my, -10);
  const mid = useLayer(mx, my, 18);
  const front = useLayer(mx, my, 34);
  const top = useLayer(mx, my, 46);

  const enter = (i: number) => ({
    initial: { opacity: 0, y: 40, filter: "blur(10px)" },
    animate: play ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined,
    transition: { duration: 1.1, ease: ease.out, delay: delay + i * 0.12 },
  });

  return (
    <div className="@container relative aspect-[16/12] w-full sm:aspect-[16/11] lg:aspect-[16/15]" aria-hidden>
      {/* Frame */}
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[clamp(18px,3cqw,30px)] border border-white/10 bg-navy-2/60"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={play ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 1.2, ease: ease.out, delay }}
      >
        <motion.div
          className="bg-grid absolute -inset-10 opacity-70"
          style={{ ...back, backgroundSize: "6cqw 6cqw" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(16,139,136,0.35),transparent_55%),radial-gradient(ellipse_at_90%_100%,rgba(99,191,124,0.22),transparent_50%)]" />
        {PARTICLES.map(([x, y, d], i) => (
          <span
            key={i}
            className="animate-twinkle absolute h-[0.5cqw] min-h-[3px] w-[0.5cqw] min-w-[3px] rounded-full bg-green"
            style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${d}s` }}
          />
        ))}
      </motion.div>

      {/* Connection lines */}
      <motion.svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 160 110"
        preserveAspectRatio="none"
        style={mid}
        initial={{ opacity: 0 }}
        animate={play ? { opacity: 1 } : undefined}
        transition={{ duration: 1, delay: delay + 0.8 }}
      >
        <path
          d="M112 30 C 128 30, 130 48, 128 62"
          className="animate-dash"
          stroke="#63BF7C"
          strokeOpacity="0.7"
          strokeWidth="0.35"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M40 78 C 40 92, 60 96, 76 96"
          className="animate-dash"
          stroke="#108B88"
          strokeOpacity="0.9"
          strokeWidth="0.35"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M98 88 C 108 92, 116 90, 124 84"
          className="animate-dash"
          stroke="#63BF7C"
          strokeOpacity="0.6"
          strokeWidth="0.35"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </motion.svg>

      {/* Browser window */}
      <motion.div className="absolute left-[6%] top-[12%] w-[64%]" style={mid}>
        <motion.div {...enter(1)}>
          <Panel className="overflow-hidden">
            <div className="flex items-center gap-[0.8cqw] border-b border-white/10 px-[2cqw] py-[1.4cqw]">
              <Dot c="#FF6B6B" />
              <Dot c="#F7C948" />
              <Dot c="#63BF7C" />
              <span
                className="ml-[2cqw] flex-1 rounded-full bg-white/[0.06] px-[1.6cqw] py-[0.5cqw] font-mono text-white/45"
                style={fs(1.25)}
              >
                greatwebagency.com
              </span>
            </div>
            <div className="grid grid-cols-5 gap-[2cqw] p-[2.6cqw]">
              <div className="col-span-3 space-y-[1.3cqw]">
                <span className="micro-label block text-green" style={fs(1)}>
                  ● New launch
                </span>
                <div className="h-[2.6cqw] w-[92%] rounded-[0.6cqw] bg-white/85" />
                <div className="h-[2.6cqw] w-[70%] rounded-[0.6cqw] bg-white/85" />
                <div className="h-[0.9cqw] w-[84%] rounded bg-white/20" />
                <div className="h-[0.9cqw] w-[64%] rounded bg-white/20" />
                <div className="flex gap-[1cqw] pt-[0.6cqw]">
                  <div className="h-[3.2cqw] w-[12cqw] rounded-full bg-green" />
                  <div className="h-[3.2cqw] w-[9cqw] rounded-full border border-white/20" />
                </div>
              </div>
              <div className="bg-brand relative col-span-2 overflow-hidden rounded-[1.4cqw]">
                <LogoMark tone="light" className="absolute bottom-[10%] right-[10%] h-[40%] w-[40%] opacity-90" />
                <div className="absolute left-[12%] top-[14%] h-[26%] w-[26%] rounded-full border border-white/30" />
              </div>
              <div className="col-span-5 grid grid-cols-3 gap-[1.4cqw]">
                {["Strategy", "Design", "Build"].map((t, i) => (
                  <div key={t} className="rounded-[1cqw] border border-white/10 bg-white/[0.03] p-[1.4cqw]">
                    <div
                      className={cn(
                        "mb-[1cqw] h-[1.6cqw] w-[1.6cqw] rounded-[0.4cqw]",
                        i === 1 ? "bg-green" : "bg-teal",
                      )}
                    />
                    <span className="block font-medium text-white/70" style={fs(1.2)}>
                      {t}
                    </span>
                    <div className="mt-[0.8cqw] h-[0.6cqw] w-[80%] rounded bg-white/15" />
                  </div>
                ))}
              </div>
            </div>
          </Panel>
        </motion.div>
      </motion.div>

      {/* Code card */}
      <motion.div className="absolute right-[4%] top-[6%] w-[40%]" style={front}>
        <motion.div {...enter(2)}>
          <div className="animate-float" style={{ animationDelay: "-2s" }}>
            <Panel className="p-[2cqw] font-mono leading-[1.7]" style={fs(1.3)}>
              <div className="mb-[1cqw] flex items-center justify-between text-white/35">
                <span>launch.tsx</span>
                <span className="text-green">●</span>
              </div>
              <p>
                <span className="text-teal">export</span> <span className="text-white/60">default function</span>{" "}
                <span className="text-green">Launch</span>
                <span className="text-white/60">() {"{"}</span>
              </p>
              <p className="pl-[2cqw]">
                <span className="text-white/60">return</span> <span className="text-[#8fe0a6]">&lt;Experience</span>
              </p>
              <p className="pl-[4cqw] text-white/80">fast accessible</p>
              <p className="pl-[4cqw] text-white/80">
                converts<span className="text-[#8fe0a6]"> /&gt;</span>
                <span className="animate-caret ml-[0.3cqw] inline-block h-[1.4cqw] w-[0.5cqw] translate-y-[0.2cqw] bg-green" />
              </p>
              <p className="text-white/60">{"}"}</p>
            </Panel>
          </div>
        </motion.div>
      </motion.div>

      {/* Performance card */}
      <motion.div className="absolute bottom-[6%] right-[6%] w-[30%]" style={top}>
        <motion.div {...enter(3)}>
          <div className="animate-float" style={{ animationDelay: "-4s" }}>
            <Panel className="flex items-center gap-[1.6cqw] p-[1.8cqw]">
              <Ring />
              <div>
                <span className="micro-label block text-white/45" style={fs(0.95)}>
                  Performance
                </span>
                <span className="block font-semibold text-white" style={fs(2.4)}>
                  100
                </span>
                <span className="block text-green" style={fs(1.1)}>
                  LCP 0.8s ↓
                </span>
              </div>
            </Panel>
          </div>
        </motion.div>
      </motion.div>

      {/* Design tokens card */}
      <motion.div className="absolute bottom-[4%] left-[2%] w-[30%]" style={front}>
        <motion.div {...enter(4)}>
          <div className="animate-float" style={{ animationDelay: "-1s" }}>
            <Panel className="p-[1.8cqw]">
              <span className="micro-label block text-white/45" style={fs(0.95)}>
                Design tokens
              </span>
              <div className="mt-[1.2cqw] flex items-end gap-[1cqw]">
                {["#63BF7C", "#108B88", "#0A1A27"].map((c) => (
                  <span
                    key={c}
                    className="h-[4cqw] w-[4cqw] rounded-[0.8cqw] border border-white/15"
                    style={{ background: c }}
                  />
                ))}
                <span className="ml-auto font-semibold leading-none text-white" style={fs(3.4)}>
                  Aa
                </span>
              </div>
            </Panel>
          </div>
        </motion.div>
      </motion.div>

      {/* Live nodes */}
      <motion.div className="absolute left-[69%] top-[26%]" style={mid}>
        <Node />
      </motion.div>
      <motion.div className="absolute left-[24%] top-[70%]" style={mid}>
        <Node teal />
      </motion.div>
    </div>
  );
}

/** Parallax offset for one depth layer. */
function useLayer(mx: MotionValue<number>, my: MotionValue<number>, depth: number) {
  return {
    x: useTransform(mx, (v) => v * depth),
    y: useTransform(my, (v) => v * depth),
  };
}

function fs(cqw: number): CSSProperties {
  return { fontSize: `max(${cqw}cqw, ${Math.max(8, cqw * 5.4)}px)` };
}

function Panel({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div
      className={cn(
        "rounded-[clamp(10px,1.8cqw,18px)] border border-white/12 bg-[#0d2131]/85 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}

function Dot({ c }: { c: string }) {
  return <span className="h-[1cqw] w-[1cqw] rounded-full" style={{ background: c, opacity: 0.8 }} />;
}

function Node({ teal }: { teal?: boolean }) {
  return (
    <span className="relative flex h-[1.6cqw] w-[1.6cqw] -translate-x-1/2 -translate-y-1/2">
      <span className={cn("animate-pulse-ring absolute inset-0 rounded-full", teal ? "bg-teal" : "bg-green")} />
      <span className={cn("relative h-full w-full rounded-full border-2 border-navy", teal ? "bg-teal" : "bg-green")} />
    </span>
  );
}

function Ring() {
  return (
    <svg viewBox="0 0 36 36" className="h-[7cqw] w-[7cqw] shrink-0 -rotate-90">
      <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
      <motion.circle
        cx="18"
        cy="18"
        r="15"
        fill="none"
        stroke="#63BF7C"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, delay: 1.8, ease: ease.out }}
      />
    </svg>
  );
}
