import { MARK_ARROW, MARK_G } from "@/components/brand/logo";
import { cn } from "@/lib/utils";

/** Large abstract brand composition built from the G mark geometry. */
export function BrandVisual({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("bg-brand relative aspect-square overflow-hidden rounded-[30px]", className)}>
      <div className="bg-grid absolute inset-0 opacity-60" />
      <svg viewBox="0 0 100 100" className="absolute -bottom-[12%] -right-[12%] h-[90%] w-[90%]">
        <path d={MARK_G} fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.25" />
      </svg>
      <svg viewBox="0 0 100 100" className="animate-float absolute left-[12%] top-[14%] h-[46%] w-[46%]">
        <path d={MARK_ARROW} fill="#63BF7C" />
      </svg>
      {[20, 38, 56].map((s, i) => (
        <span
          key={s}
          className="absolute rounded-full border border-white/15"
          style={{
            width: `${s * 1.4}%`,
            height: `${s * 1.4}%`,
            left: `${58 - s * 0.7}%`,
            top: `${58 - s * 0.7}%`,
            opacity: 1 - i * 0.25,
          }}
        />
      ))}
      <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-navy/60 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
        <span className="mr-2 text-green">●</span>Design × Engineering
      </div>
    </div>
  );
}
