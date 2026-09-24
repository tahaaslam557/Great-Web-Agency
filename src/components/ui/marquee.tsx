import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: ReactNode[];
  /** Seconds for one full loop */
  duration?: number;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
}

/**
 * Infinite CSS marquee. The list is rendered twice and translated -50%,
 * so the loop is seamless. Pauses on hover, stops under reduced motion.
 */
export function Marquee({ items, duration = 40, reverse, className, itemClassName }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={i} className={cn("flex shrink-0 items-center", itemClassName)}>
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("marquee-group relative flex overflow-hidden mask-fade-x", className)}>
      <div
        className="animate-marquee flex w-max"
        style={{
          ["--marquee-duration" as string]: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
