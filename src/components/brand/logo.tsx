import { cn } from "@/lib/utils";

/** Vector paths traced from the supplied Great Web Agency logo. */
export const MARK_G =
  "M88 10H34C20.7 10 10 20.7 10 34V64C10 77.3 20.7 88 34 88H66V66H48V72H40C32.8 72 27 66.2 27 59V39C27 31.8 32.8 26 40 26H74Z";
export const MARK_ARROW = "M48 58L61 44H88V74L74 88V58Z";

interface MarkProps {
  className?: string;
  /** Colour of the G: navy on light backgrounds, white on dark ones */
  tone?: "dark" | "light";
  title?: string;
}

export function LogoMark({ className, tone = "dark", title }: MarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path d={MARK_G} fill={tone === "dark" ? "var(--color-navy)" : "#ffffff"} />
      <path d={MARK_ARROW} fill="var(--color-green)" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  tone?: "dark" | "light";
}

/** Full lockup: mark + two-line wordmark with the green square. */
export function Logo({ className, tone = "dark" }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark tone={tone} className="h-9 w-9 shrink-0" />
      <span
        aria-hidden
        className={cn(
          "flex flex-col text-[0.8rem] font-semibold uppercase leading-[0.95] tracking-[0.01em]",
          tone === "dark" ? "text-navy" : "text-white",
        )}
      >
        <span>Great Web</span>
        <span>
          Agency
          <span className="ml-[2px] inline-block h-[0.32em] w-[0.32em] bg-green" />
        </span>
      </span>
      <span className="sr-only">Great Web Agency</span>
    </span>
  );
}
