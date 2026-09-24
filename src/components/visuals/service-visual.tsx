import { LogoMark } from "@/components/brand/logo";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ServiceVisualKey } from "@/types";

/**
 * One abstract composition per service. Pure HTML/CSS/SVG so it
 * can render on the server and cost nothing to animate.
 */
export function ServiceVisual({ kind, className }: { kind: ServiceVisualKey; className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "@container relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-line-dark bg-navy",
        className,
      )}
    >
      <div className="bg-grid absolute inset-0 opacity-70" style={{ backgroundSize: "8cqw 8cqw" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(16,139,136,0.45),transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(99,191,124,0.25),transparent_50%)]" />
      <div className="absolute inset-[8%]">{visuals[kind]}</div>
    </div>
  );
}

const card = "rounded-[2cqw] border border-white/12 bg-[#0d2131]/90 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]";
const bar = "rounded-full bg-white/15";

const visuals: Record<ServiceVisualKey, ReactNode> = {
  web: (
    <>
      <div className={cn(card, "absolute inset-x-0 top-0 h-[78%] overflow-hidden")}>
        <div className="flex gap-[1cqw] border-b border-white/10 px-[3cqw] py-[2cqw]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-[1.6cqw] w-[1.6cqw] rounded-full bg-white/25" />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-[3cqw] p-[4cqw]">
          <div className="space-y-[2cqw]">
            <div className="h-[4cqw] w-[90%] rounded-[1cqw] bg-white/85" />
            <div className="h-[4cqw] w-[65%] rounded-[1cqw] bg-white/85" />
            <div className={cn(bar, "h-[1.4cqw] w-[80%]")} />
            <div className="h-[5cqw] w-[40%] rounded-full bg-green" />
          </div>
          <div className="bg-brand animate-float rounded-[2cqw]" />
        </div>
      </div>
      <div
        className={cn(card, "animate-float absolute bottom-0 right-[6%] w-[34%] p-[3cqw]")}
        style={{ animationDelay: "-3s" }}
      >
        <span className="micro-label block text-green" style={{ fontSize: "2cqw" }}>
          Mobile
        </span>
        <div className="mt-[2cqw] space-y-[1.4cqw]">
          <div className={cn(bar, "h-[1.4cqw] w-full")} />
          <div className={cn(bar, "h-[1.4cqw] w-[70%]")} />
        </div>
      </div>
    </>
  ),
  commerce: (
    <>
      <div className="grid h-[80%] grid-cols-3 gap-[3cqw]">
        {[0, 1, 2].map((i) => (
          <div key={i} className={cn(card, "flex flex-col p-[2.4cqw]")}>
            <div className={cn("flex-1 rounded-[1.4cqw]", i === 1 ? "bg-brand" : "bg-white/[0.06]")} />
            <div className={cn(bar, "mt-[2cqw] h-[1.4cqw] w-[70%]")} />
            <span className="mt-[1.4cqw] font-semibold text-white" style={{ fontSize: "3cqw" }}>
              ${[89, 129, 64][i]}
            </span>
          </div>
        ))}
      </div>
      <div
        className={cn(
          card,
          "animate-float absolute bottom-0 right-0 flex items-center gap-[2cqw] px-[3cqw] py-[2.4cqw]",
        )}
      >
        <span
          className="flex h-[6cqw] w-[6cqw] items-center justify-center rounded-full bg-green font-bold text-navy"
          style={{ fontSize: "3cqw" }}
        >
          3
        </span>
        <span className="font-semibold text-white" style={{ fontSize: "3cqw" }}>
          Checkout →
        </span>
      </div>
    </>
  ),
  uiux: (
    <>
      <div className="grid h-full grid-cols-6 grid-rows-4 gap-[2cqw]">
        <div className={cn(card, "col-span-4 row-span-2")} />
        <div className={cn(card, "col-span-2 row-span-3 bg-teal/40")} />
        <div className={cn(card, "col-span-2 row-span-2")} />
        <div className={cn(card, "col-span-2 row-span-2 border-green/60 bg-green/15")} />
        <div className={cn(card, "col-span-2")} />
      </div>
      <svg viewBox="0 0 24 24" className="animate-float absolute left-[46%] top-[42%] h-[7cqw] w-[7cqw] drop-shadow-lg">
        <path d="M4 3l15 7-6 2-2 6z" fill="#63BF7C" stroke="#0A1A27" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
      <span
        className="absolute left-[53%] top-[56%] rounded-full bg-green px-[2cqw] py-[0.8cqw] font-semibold text-navy"
        style={{ fontSize: "2.4cqw" }}
      >
        Designer
      </span>
    </>
  ),
  software: (
    <>
      <svg viewBox="0 0 100 75" className="absolute inset-0 h-full w-full">
        {["M50 37 L18 14", "M50 37 L82 14", "M50 37 L18 60", "M50 37 L82 60"].map((d) => (
          <path
            key={d}
            d={d}
            className="animate-dash"
            stroke="#63BF7C"
            strokeOpacity="0.6"
            strokeWidth="0.4"
            fill="none"
          />
        ))}
      </svg>
      {[
        ["left-[4%] top-[8%]", "Auth"],
        ["right-[4%] top-[8%]", "API"],
        ["left-[4%] bottom-[8%]", "Database"],
        ["right-[4%] bottom-[8%]", "Dashboard"],
      ].map(([pos, label]) => (
        <div
          key={label}
          className={cn(card, "absolute px-[3cqw] py-[2cqw] font-mono text-white/80", pos)}
          style={{ fontSize: "2.6cqw" }}
        >
          <span className="mr-[1cqw] text-green">●</span>
          {label}
        </div>
      ))}
      <div className="absolute left-1/2 top-1/2 flex h-[20cqw] w-[20cqw] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[4cqw] border border-green/40 bg-navy">
        <span className="animate-pulse-ring absolute inset-0 rounded-[4cqw] border border-green/40" />
        <LogoMark tone="light" className="h-[55%] w-[55%]" />
      </div>
    </>
  ),
  seo: (
    <>
      <div className={cn(card, "absolute left-0 top-0 flex w-[44%] flex-col items-center p-[4cqw]")}>
        <svg viewBox="0 0 36 36" className="w-[70%] -rotate-90">
          <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
          <circle cx="18" cy="18" r="15" fill="none" stroke="#63BF7C" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <span className="-mt-[19cqw] mb-[12cqw] font-bold text-white" style={{ fontSize: "6cqw" }}>
          100
        </span>
        <span className="micro-label text-white/50" style={{ fontSize: "2cqw" }}>
          Performance
        </span>
      </div>
      <div className={cn(card, "absolute bottom-0 right-0 h-[62%] w-[60%] p-[3cqw]")}>
        <span className="micro-label text-white/50" style={{ fontSize: "2cqw" }}>
          Organic traffic
        </span>
        <svg viewBox="0 0 100 50" className="mt-[2cqw] w-full" preserveAspectRatio="none">
          <path d="M0 45 L15 40 L30 42 L45 30 L60 26 L75 14 L100 4 L100 50 L0 50Z" fill="rgba(99,191,124,0.18)" />
          <path d="M0 45 L15 40 L30 42 L45 30 L60 26 L75 14 L100 4" fill="none" stroke="#63BF7C" strokeWidth="1.5" />
        </svg>
      </div>
    </>
  ),
  strategy: (
    <>
      <div className="absolute left-0 right-0 top-1/2 h-px bg-white/20" />
      {["Research", "Roadmap", "Launch", "Scale"].map((label, i) => (
        <div
          key={label}
          className="absolute top-1/2 flex -translate-y-1/2 flex-col items-center"
          style={{ left: `${6 + i * 29}%` }}
        >
          <span
            className={cn(
              "h-[4cqw] w-[4cqw] rotate-45 border",
              i === 3 ? "border-green bg-green" : "border-teal bg-navy",
            )}
          />
          <span
            className={cn(card, "absolute px-[2cqw] py-[1.4cqw] text-white/85", i % 2 ? "top-[7cqw]" : "bottom-[7cqw]")}
            style={{ fontSize: "2.6cqw" }}
          >
            {label}
          </span>
        </div>
      ))}
      <div className="absolute right-0 top-0 font-bold text-green" style={{ fontSize: "5cqw" }}>
        → Goals
      </div>
    </>
  ),
};
