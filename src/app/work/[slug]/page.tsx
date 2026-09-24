import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Cta } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { ProjectMedia } from "@/components/ui/project-media";
import { Reveal } from "@/components/ui/reveal";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <PageHero label={`Case study · ${project.category}`} title={project.title} description={project.description}>
        <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-line-dark pt-8 sm:grid-cols-4">
          {[
            ["Client", project.client],
            ["Year", project.year],
            ["Services", project.category],
            ["Stack", project.technologies.slice(0, 2).join(", ")],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="micro-label text-white/45">{k}</dt>
              <dd className="mt-2 font-medium text-white">{v}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <section className="bg-navy pb-24">
        <div className="container-x">
          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-[30px] border border-line-dark">
            <ProjectMedia project={project} sizes="100vw" priority />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="micro-label text-muted">The challenge</h2>
            <p className="text-title mt-5 text-navy">{project.challenge}</p>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <h2 className="micro-label text-muted">Our approach</h2>
            <p className="text-lead mt-5 text-muted">{project.solution}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <li key={t} className="rounded-full border border-line px-3.5 py-1.5 text-sm font-medium text-navy/80">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="container-x mt-24">
          <h2 className="micro-label text-muted">Results</h2>
          <dl className="mt-6 grid border-t border-line sm:grid-cols-3">
            {project.metrics.map((m, i) => (
              <Reveal
                key={m.label}
                delay={i * 0.08}
                className="flex flex-col-reverse border-b border-line py-10 sm:border-b-0 sm:border-l sm:pl-8 sm:first:border-l-0 sm:first:pl-0"
              >
                <dt className="mt-3 text-muted">{m.label}</dt>
                <dd className="text-[clamp(2.75rem,5vw,4.5rem)] font-bold leading-none tracking-[-0.05em] text-navy">
                  {m.value}
                </dd>
              </Reveal>
            ))}
          </dl>
          <p className="mt-6 text-sm text-muted">
            Sample case study — replace with real project data in src/data/projects.ts.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-offwhite">
        <div className="container-x flex flex-col justify-between gap-8 py-16 md:flex-row md:items-center">
          <Link href="/work" className="inline-flex items-center gap-2 font-semibold text-navy hover:text-teal">
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <Link href={next.href} className="group text-right" data-cursor="project">
            <span className="micro-label text-muted">Next project</span>
            <span className="mt-2 flex items-center justify-end gap-3 text-[clamp(1.75rem,4vw,3.5rem)] font-bold tracking-[-0.04em] text-navy transition-colors group-hover:text-teal">
              {next.title}
              <ArrowUpRight className="h-8 w-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      <Cta />
    </>
  );
}
