import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";
import { ProjectMedia } from "./project-media";

interface ProjectCardProps {
  project: Project;
  aspect?: "wide" | "classic";
  tone?: "dark" | "light";
  sizes?: string;
  className?: string;
}

/** Case-study preview card. Hover: image zoom, lift, arrow travel, green accent. */
export function ProjectCard({
  project,
  aspect = "wide",
  tone = "dark",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
}: ProjectCardProps) {
  const dark = tone === "dark";
  return (
    <Link
      href={project.href}
      data-cursor="project"
      className={cn("group block transition-transform duration-500 ease-out hover:-translate-y-1.5", className)}
      aria-label={`${project.title} — view case study`}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-lg border transition-[border-color,box-shadow] duration-500",
          dark ? "border-line-dark group-hover:border-green/50" : "border-line group-hover:border-teal/40",
          "group-hover:shadow-[0_30px_80px_-30px_rgba(99,191,124,0.35)]",
          aspect === "wide" ? "aspect-[16/10]" : "aspect-[4/3]",
        )}
      >
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <ProjectMedia project={project} sizes={sizes} />
        </div>
        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-navy/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
          {project.year}
        </span>
        <span className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-green text-navy opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className={cn("micro-label flex items-center gap-2", dark ? "text-white/50" : "text-muted")}>
            <span className="h-px w-4 bg-green transition-all duration-500 group-hover:w-8" />
            {project.category}
          </p>
          <h3
            className={cn(
              "mt-3 text-[clamp(1.5rem,2.4vw,2.25rem)] font-semibold tracking-[-0.035em] transition-colors duration-300",
              dark ? "text-white" : "text-navy",
            )}
          >
            {project.title}
          </h3>
          <p className={cn("mt-2 max-w-md", dark ? "text-white/60" : "text-muted")}>{project.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((t, i) => (
              <li
                key={t}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium transition-all duration-500 group-hover:-translate-y-0.5",
                  dark ? "border-white/15 text-white/70" : "border-line text-navy/70",
                )}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <ArrowUpRight
          className={cn(
            "mt-8 h-7 w-7 shrink-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green",
            dark ? "text-white/40" : "text-navy/40",
          )}
          aria-hidden
        />
      </div>
    </Link>
  );
}
