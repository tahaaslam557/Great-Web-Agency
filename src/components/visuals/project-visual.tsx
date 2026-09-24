import type { ReactNode } from "react";
import { LogoMark } from "@/components/brand/logo";
import { cn } from "@/lib/utils";
import type { ProjectVisualKey } from "@/types";

/**
 * Built-in case-study artwork (browser mockups, device frames, dashboards).
 * Used whenever a project has no screenshot, or the screenshot fails to load.
 */
export function ProjectVisual({ kind, title }: { kind: ProjectVisualKey; title: string }) {
  return (
    <div aria-hidden className="@container absolute inset-0 overflow-hidden" style={{ background: backgrounds[kind] }}>
      <div className="bg-grid absolute inset-0 opacity-50" style={{ backgroundSize: "6cqw 6cqw" }} />
      {art[kind](title)}
    </div>
  );
}

const backgrounds: Record<ProjectVisualKey, string> = {
  browser: "linear-gradient(135deg, #108B88 0%, #0A1A27 70%)",
  commerce: "linear-gradient(160deg, #0f2a2c 0%, #0A1A27 60%, #1d4a33 100%)",
  dashboard: "linear-gradient(135deg, #0A1A27 0%, #0f2434 50%, #108B88 130%)",
  mobile: "linear-gradient(135deg, #63BF7C 0%, #108B88 55%, #0A1A27 100%)",
  brand: "#e9efec",
};

const frame = "rounded-[1.6cqw] border border-white/15 bg-[#0d2131] shadow-[0_4cqw_8cqw_-2cqw_rgba(0,0,0,0.55)]";

function Browser({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn(frame, "overflow-hidden", className)}>
      <div className="flex items-center gap-[0.8cqw] border-b border-white/10 px-[2cqw] py-[1.4cqw]">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-[1cqw] w-[1cqw] rounded-full bg-white/25" />
        ))}
        <span className="ml-[2cqw] h-[1.8cqw] w-[30%] rounded-full bg-white/[0.07]" />
      </div>
      {children}
    </div>
  );
}

const art: Record<ProjectVisualKey, (title: string) => ReactNode> = {
  browser: (title) => (
    <>
      <Browser className="absolute left-[10%] top-[14%] w-[80%]">
        <div className="p-[4cqw]">
          <span className="micro-label block text-green" style={{ fontSize: "1.3cqw" }}>
            ● {title}
          </span>
          <p
            className="mt-[2cqw] max-w-[70%] font-bold leading-[0.95] tracking-[-0.04em] text-white"
            style={{ fontSize: "5.4cqw" }}
          >
            Finance, made clear.
          </p>
          <div className="mt-[3cqw] flex gap-[1.4cqw]">
            <span className="h-[3.4cqw] w-[14cqw] rounded-full bg-green" />
            <span className="h-[3.4cqw] w-[10cqw] rounded-full border border-white/25" />
          </div>
          <div className="mt-[4cqw] grid grid-cols-3 gap-[2cqw]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-[9cqw] rounded-[1.2cqw] border border-white/10 bg-white/[0.04]" />
            ))}
          </div>
        </div>
      </Browser>
    </>
  ),
  commerce: () => (
    <>
      <Browser className="absolute left-[7%] top-[12%] w-[62%]">
        <div className="grid grid-cols-2 gap-[2cqw] p-[3cqw]">
          {["#63BF7C", "#108B88", "#1f3a4d", "#2b6f5a"].map((c, i) => (
            <div key={i} className="space-y-[1cqw]">
              <div className="aspect-square rounded-[1.2cqw]" style={{ background: c }} />
              <div className="h-[1cqw] w-[70%] rounded-full bg-white/25" />
            </div>
          ))}
        </div>
      </Browser>
      <div className={cn(frame, "absolute right-[8%] top-[22%] w-[24%] rounded-[3cqw] p-[1.4cqw]")}>
        <div className="aspect-[9/16] rounded-[2cqw] bg-[#0A1A27] p-[1.6cqw]">
          <div className="aspect-square rounded-[1.4cqw] bg-green" />
          <div className="mt-[1.6cqw] h-[1cqw] w-[80%] rounded-full bg-white/40" />
          <div className="mt-[1cqw] h-[1cqw] w-[50%] rounded-full bg-white/20" />
          <div className="mt-[3cqw] h-[3.4cqw] rounded-full bg-green" />
        </div>
      </div>
    </>
  ),
  dashboard: () => (
    <Browser className="absolute left-[8%] top-[12%] w-[84%]">
      <div className="grid grid-cols-4 gap-[2cqw] p-[3cqw]">
        <div className="col-span-1 space-y-[1.4cqw]">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={cn("h-[2.4cqw] rounded-[0.8cqw]", i === 1 ? "bg-green/80" : "bg-white/[0.07]")} />
          ))}
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-[2cqw]">
          {["98.2%", "1,284", "4.6h"].map((v) => (
            <div key={v} className="rounded-[1.2cqw] border border-white/10 bg-white/[0.04] p-[1.6cqw]">
              <div className="h-[0.8cqw] w-[50%] rounded-full bg-white/20" />
              <span className="mt-[1cqw] block font-semibold text-white" style={{ fontSize: "2.8cqw" }}>
                {v}
              </span>
            </div>
          ))}
          <div className="col-span-3 rounded-[1.2cqw] border border-white/10 bg-white/[0.04] p-[2cqw]">
            <svg viewBox="0 0 100 30" className="w-full" preserveAspectRatio="none">
              <path
                d="M0 26 L12 22 L24 24 L36 16 L48 18 L60 10 L72 12 L84 5 L100 3 L100 30 L0 30Z"
                fill="rgba(99,191,124,0.2)"
              />
              <path
                d="M0 26 L12 22 L24 24 L36 16 L48 18 L60 10 L72 12 L84 5 L100 3"
                fill="none"
                stroke="#63BF7C"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
    </Browser>
  ),
  mobile: () => (
    <>
      {[-1, 0, 1].map((o) => (
        <div
          key={o}
          className={cn(frame, "absolute top-1/2 w-[24%] rounded-[3.4cqw] p-[1.2cqw]")}
          style={{
            left: `${38 + o * 22}%`,
            transform: `translateY(${o === 0 ? -50 : -42}%) rotate(${o * 6}deg)`,
            zIndex: o === 0 ? 2 : 1,
          }}
        >
          <div className="aspect-[9/19] rounded-[2.4cqw] bg-[#f4f8f6] p-[2cqw]">
            <div className="h-[1.2cqw] w-[40%] rounded-full bg-navy/20" />
            <div className="mt-[2cqw] font-bold leading-none tracking-[-0.04em] text-navy" style={{ fontSize: "3cqw" }}>
              {o === 0 ? "Good morning" : o < 0 ? "Today" : "Progress"}
            </div>
            <div className="mt-[2cqw] aspect-square rounded-full border-[1.4cqw] border-green border-r-teal/30" />
            <div className="mt-[2cqw] space-y-[1cqw]">
              <div className="h-[3cqw] rounded-[1cqw] bg-teal/15" />
              <div className="h-[3cqw] rounded-[1cqw] bg-teal/15" />
            </div>
          </div>
        </div>
      ))}
    </>
  ),
  brand: (title) => (
    <>
      <div className="bg-grid-light absolute inset-0" style={{ backgroundSize: "6cqw 6cqw" }} />
      <div
        className="absolute left-[8%] top-[24%] font-bold uppercase leading-[0.85] tracking-[-0.06em] text-navy"
        style={{ fontSize: "11cqw" }}
      >
        {title.split(" ")[0]}
      </div>
      <div className="absolute bottom-[12%] left-[8%] flex gap-[2cqw]">
        {["#0A1A27", "#108B88", "#63BF7C", "#ffffff"].map((c) => (
          <span key={c} className="h-[7cqw] w-[7cqw] rounded-[1cqw] border border-navy/10" style={{ background: c }} />
        ))}
      </div>
      <div className="absolute bottom-[10%] right-[8%] flex h-[26cqw] w-[26cqw] items-center justify-center rounded-full bg-navy">
        <LogoMark tone="light" className="h-[45%] w-[45%]" />
      </div>
    </>
  ),
};
