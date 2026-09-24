/** Join class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Zero-pad an index into a two-digit label: 0 -> "01". */
export function pad(index: number): string {
  return String(index + 1).padStart(2, "0");
}

/** Shared easing curves so every section speaks the same motion language. */
export const ease = {
  out: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
};

export const spring = {
  soft: { type: "spring", stiffness: 180, damping: 22, mass: 0.6 } as const,
  snappy: { type: "spring", stiffness: 400, damping: 30 } as const,
};
