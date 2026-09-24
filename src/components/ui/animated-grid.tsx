import { cn } from "@/lib/utils";

/** Cells that softly light up on the grid. Positions are fixed so SSR matches the client. */
const CELLS = [
  [2, 1, 0],
  [5, 3, 1.2],
  [9, 2, 2.1],
  [12, 5, 0.6],
  [3, 6, 2.8],
  [15, 1, 1.7],
  [7, 7, 3.4],
  [17, 4, 0.3],
];

export function AnimatedGrid({ className, cell = 64 }: { className?: string; cell?: number }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden mask-fade", className)}>
      <div className="bg-grid absolute inset-0" style={{ backgroundSize: `${cell}px ${cell}px` }} />
      {CELLS.map(([x, y, d], i) => (
        <span
          key={i}
          className="animate-twinkle absolute bg-teal/25"
          style={{
            left: x * cell + 1,
            top: y * cell + 1,
            width: cell - 1,
            height: cell - 1,
            animationDelay: `${d}s`,
            animationDuration: "5s",
          }}
        />
      ))}
    </div>
  );
}
