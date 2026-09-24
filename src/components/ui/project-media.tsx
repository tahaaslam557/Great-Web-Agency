"use client";

import Image from "next/image";
import { useState } from "react";
import { ProjectVisual } from "@/components/visuals/project-visual";
import type { Project } from "@/types";

/** Real screenshot when available; falls back to the built-in artwork if missing or broken. */
export function ProjectMedia({ project, sizes, priority }: { project: Project; sizes: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);

  if (!project.image || failed) return <ProjectVisual kind={project.visual} title={project.title} />;

  return (
    <Image
      src={project.image}
      alt={`${project.title} — ${project.category} project preview`}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}
