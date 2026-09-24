"use client";

import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { projectFilters, projects } from "@/data/projects";
import { cn, ease } from "@/lib/utils";

type Filter = (typeof projectFilters)[number];

/** Filterable portfolio grid with Motion layout animations. */
export function WorkGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.filters.includes(filter));

  return (
    <LayoutGroup>
      <div role="toolbar" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {projectFilters.map((f) => {
          const active = f === filter;
          const count = f === "All" ? projects.length : projects.filter((p) => p.filters.includes(f)).length;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300",
                active ? "text-navy" : "text-navy/60 hover:text-navy",
              )}
            >
              {active && (
                <motion.span
                  layoutId="work-filter"
                  className="absolute inset-0 rounded-full bg-green"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {!active && <span className="absolute inset-0 rounded-full border border-line" />}
              <span className="relative">
                {f} <span className="ml-1 font-mono text-xs opacity-60">{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => {
            // Every third card spans the row; a trailing card that would sit alone does too
            const wide = i % 3 === 0 || (i === visible.length - 1 && i % 3 === 1);
            return (
              <motion.li
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
                transition={{ duration: 0.55, ease: ease.out, delay: i * 0.04 }}
                className={cn(wide && "md:col-span-2")}
              >
                <ProjectCard
                  project={project}
                  tone="light"
                  aspect={wide ? "wide" : "classic"}
                  sizes={wide ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
                />
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>

      {visible.length === 0 && (
        <p className="mt-14 rounded-lg border border-dashed border-line p-10 text-center text-muted">
          No projects in this category yet — check back soon.
        </p>
      )}
    </LayoutGroup>
  );
}
