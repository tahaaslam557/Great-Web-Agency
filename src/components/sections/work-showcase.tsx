import { GridBackground, Glow } from "@/components/ui/backgrounds";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

// Alternating editorial rhythm: wide/classic, offset columns
const layout = [
  { col: "lg:col-span-7", aspect: "wide" as const, offset: "" },
  { col: "lg:col-span-5", aspect: "classic" as const, offset: "lg:mt-40" },
  { col: "lg:col-span-5", aspect: "classic" as const, offset: "" },
  { col: "lg:col-span-7", aspect: "wide" as const, offset: "lg:mt-28" },
];

export function WorkShowcase() {
  const featured = projects.slice(0, 4);

  return (
    <section id="work" className="section-y relative overflow-hidden bg-navy text-white">
      <GridBackground className="opacity-50" />
      <Glow className="-left-40 top-40 h-[500px] w-[500px]" />
      <div className="container-x relative">
        <SectionHeading
          label="02 / Work"
          title="Selected Work"
          tone="dark"
          align="split"
          description="A few recent projects — each one built around a measurable business outcome."
        />

        <div className="mt-20 grid gap-x-10 gap-y-20 lg:grid-cols-12 lg:gap-y-28">
          {featured.map((project, i) => (
            <Reveal key={project.slug} className={cn(layout[i].col, layout[i].offset)} delay={(i % 2) * 0.1}>
              <ProjectCard project={project} aspect={layout[i].aspect} />
            </Reveal>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <MagneticButton href="/work" variant="outline-light">
            View all work
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
