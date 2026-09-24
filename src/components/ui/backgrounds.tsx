import { cn } from "@/lib/utils";

/** Reusable background layers: Grid, Glow, GradientOrb. Noise lives in noise-overlay.tsx. */

export function GridBackground({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 mask-fade", light ? "bg-grid-light" : "bg-grid", className)}
    />
  );
}

export function Glow({ className, color = "teal" }: { className?: string; color?: "teal" | "green" | "navy" }) {
  const colors = {
    teal: "rgba(16,139,136,0.55)",
    green: "rgba(99,191,124,0.45)",
    navy: "rgba(10,26,39,0.6)",
  };
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-[110px]", className)}
      style={{ background: `radial-gradient(circle, ${colors[color]} 0%, transparent 70%)` }}
    />
  );
}

export function GradientOrb({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("animate-drift pointer-events-none absolute rounded-full opacity-70 blur-[90px]", className)}
      style={{ background: "conic-gradient(from 120deg, #108B88, #63BF7C, #0A1A27, #108B88)" }}
    />
  );
}
