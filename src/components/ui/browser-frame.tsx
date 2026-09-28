import { SiteMock } from "@/components/visuals/site-mock";
import { cn } from "@/lib/utils";
import type { PortfolioItem } from "@/types";

interface BrowserFrameProps {
  item: PortfolioItem;
  /** Scroll the full page through the viewport while the parent `.group` is hovered */
  scrollOnHover?: boolean;
  tone?: "dark" | "light";
  className?: string;
}

/** Browser chrome around a generated site mock. The mock is 2.5x as tall as wide; the viewport is 4:3. */
export function BrowserFrame({ item, scrollOnHover = true, tone = "light", className }: BrowserFrameProps) {
  const dark = tone === "dark";
  const host = `${item.slug.replace(/-and-/g, "and").replace(/-/g, "")}.com`;
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[14px] border",
        dark ? "border-white/10 bg-[#13293a]" : "border-line bg-white",
        className,
      )}
    >
      <div className="flex h-8 items-center gap-3 px-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-[#ff6159]/80" />
          <span className="h-2 w-2 rounded-full bg-[#ffbd2e]/80" />
          <span className="h-2 w-2 rounded-full bg-[#28c941]/80" />
        </span>
        <span
          className={cn(
            "mx-auto flex h-5 min-w-0 max-w-[60%] flex-1 items-center justify-center truncate rounded-md px-2 font-mono text-[10px]",
            dark ? "bg-white/[0.06] text-white/45" : "bg-navy/[0.04] text-navy/45",
          )}
        >
          {host}
        </span>
        <span className="w-[42px]" aria-hidden />
      </div>
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className={cn(
            "absolute inset-x-0 top-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)]",
            scrollOnHover && "group-hover:-translate-y-[70%] group-hover:duration-[5200ms] group-focus-visible:-translate-y-[70%]",
          )}
        >
          <SiteMock item={item} />
        </div>
      </div>
    </div>
  );
}
