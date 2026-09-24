import { cn } from "@/lib/utils";
import { TextReveal } from "./text-reveal";
import { Reveal } from "./reveal";

interface SectionHeadingProps {
  /** e.g. "01 / Services" */
  label: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
  accent?: string[];
  className?: string;
  align?: "left" | "split";
}

export function Eyebrow({ children, tone = "light" }: { children: string; tone?: "dark" | "light" }) {
  return (
    <p className={cn("micro-label flex items-center gap-2.5", tone === "dark" ? "text-white/60" : "text-muted")}>
      <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeading({
  label,
  title,
  description,
  tone = "light",
  accent,
  className,
  align = "left",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn("grid gap-8", align === "split" && "lg:grid-cols-12 lg:items-end", className)}>
      <div className={cn(align === "split" && "lg:col-span-7")}>
        <Eyebrow tone={tone}>{label}</Eyebrow>
        <TextReveal
          text={title}
          accent={accent}
          square
          className={cn("text-display mt-6", dark ? "text-white" : "text-navy")}
        />
      </div>
      {description && (
        <Reveal delay={0.2} className={cn(align === "split" && "lg:col-span-4 lg:col-start-9 lg:pb-3")}>
          <p className={cn("text-lead max-w-md", dark ? "text-white/65" : "text-muted")}>{description}</p>
        </Reveal>
      )}
    </div>
  );
}
