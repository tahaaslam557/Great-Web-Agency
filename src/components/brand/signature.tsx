"use client";

import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { RotateCcw } from "lucide-react";
import { useId, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { site } from "@/lib/site";

const W = 1400;
const H = 360;

/** A wide sine wave, filled below. It slides sideways forever while rising, so the ink looks liquid. */
const WAVE = (() => {
  let d = "M-400 0 Q -350 -14 -300 0";
  for (let x = -200; x <= W + 400; x += 100) d += ` T ${x} 0`;
  return `${d} V ${H + 80} H -400 Z`;
})();

const SWASH = "M70 312 C 30 338, 128 346, 170 316 C 430 268, 820 336, 1120 296 C 1220 284, 1296 276, 1336 266";

/**
 * Brand signature, played in four acts when the footer scrolls into view:
 * 1. every letter is traced in neon, one after another
 * 2. liquid ink rises through the letters on a moving wave
 * 3. an underline swash is drawn
 * 4. the logo's green square drops in, bounces and sends out a ripple
 * A cursor spotlight re-lights the outline on hover; click to sign again.
 * Timings live in globals.css under "Footer signature".
 */
export function Signature({ text = site.name }: { text?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, amount: 0.5 });
  const [run, setRun] = useState(0);
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");

  const px = useMotionValue(W / 2);
  const py = useMotionValue(H / 2);
  const sx = useSpring(px, { stiffness: 160, damping: 22 });
  const sy = useSpring(py, { stiffness: 160, damping: 22 });

  const onMove = (e: PointerEvent<SVGSVGElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width) * W);
    py.set(((e.clientY - r.top) / r.height) * H);
  };

  const textProps = {
    x: 60,
    y: 238,
    textLength: W - 150,
    lengthAdjust: "spacingAndGlyphs" as const,
    fontSize: 212,
    style: { fontFamily: "var(--font-signature), cursive" },
  };
  const letters = text.split("").map((ch, i) => (
    <tspan key={i} className="sig-letter" style={{ "--i": i } as CSSProperties}>
      {ch}
    </tspan>
  ));

  return (
    <div ref={wrapRef} className="relative">
      <svg
        key={run}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`${text} — signature`}
        data-play={inView ? "" : undefined}
        className="group block h-auto w-full cursor-pointer select-none overflow-visible"
        onPointerMove={onMove}
        onClick={() => setRun((r) => r + 1)}
      >
        <defs>
          <linearGradient id={`${uid}-ink`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={W} y2="0" spreadMethod="repeat">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.42" stopColor="#d9f7e2" />
            <stop offset="0.5" stopColor="#74d18d" />
            <stop offset="0.58" stopColor="#d9f7e2" />
            <stop offset="1" stopColor="#ffffff" />
            <animateTransform attributeName="gradientTransform" type="translate" from="0 0" to={`${W} 0`} dur="8s" repeatCount="indefinite" />
          </linearGradient>
          <linearGradient id={`${uid}-trace`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#b7f0c6" />
            <stop offset="0.5" stopColor="#63bf7c" />
            <stop offset="1" stopColor="#108b88" />
          </linearGradient>
          <radialGradient id={`${uid}-spot`}>
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <filter id={`${uid}-neon`} x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <mask id={`${uid}-liquid`} maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
            <g className="sig-liquid">
              <path className="sig-wave" d={WAVE} fill="#fff" />
            </g>
          </mask>
          <mask id={`${uid}-spotlight`} maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
            <motion.circle cx={sx} cy={sy} r={190} fill={`url(#${uid}-spot)`} />
          </mask>
        </defs>

        {/* Ghost of the name, waiting to be signed */}
        <text {...textProps} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={1}>
          {text}
        </text>

        {/* Act 1: neon trace, letter by letter */}
        <g className="sig-outline" filter={`url(#${uid}-neon)`}>
          <text {...textProps} fill="none" stroke={`url(#${uid}-trace)`} strokeWidth={1.8} strokeLinejoin="round">
            {letters}
          </text>
        </g>

        {/* Act 2: liquid ink fill */}
        <g mask={`url(#${uid}-liquid)`}>
          <text {...textProps} fill={`url(#${uid}-ink)`}>
            {text}
          </text>
        </g>

        {/* Hover: spotlight re-lights the outline around the cursor */}
        <g mask={`url(#${uid}-spotlight)`} className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <text {...textProps} fill="none" stroke="#9ef0b6" strokeWidth={2.4} filter={`url(#${uid}-neon)`}>
            {text}
          </text>
        </g>

        {/* Act 3: underline swash */}
        <path className="sig-swash" d={SWASH} pathLength={1} fill="none" stroke="#63bf7c" strokeWidth={4} strokeLinecap="round" />

        {/* Act 4: the logo square drops in and ripples */}
        <circle className="sig-ring" cx={1358} cy={248} r={22} fill="none" stroke="#63bf7c" strokeWidth={2} />
        <rect className="sig-square" x={1346} y={236} width={24} height={24} fill="#63bf7c" />
      </svg>

      <button
        type="button"
        onClick={() => setRun((r) => r + 1)}
        className="group absolute bottom-0 right-0 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50 transition-colors hover:border-green hover:text-green"
      >
        <RotateCcw className="h-3 w-3 transition-transform duration-500 group-hover:-rotate-[200deg]" aria-hidden />
        Sign again
      </button>
    </div>
  );
}
