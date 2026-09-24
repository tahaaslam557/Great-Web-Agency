import { PageHero } from "./page-hero";

/** Simple long-form layout for legal pages. */
export function LegalPage({ title, sections }: { title: string; sections: { heading: string; body: string }[] }) {
  return (
    <>
      <PageHero label="Legal" title={title} />
      <section className="section-y bg-white">
        <div className="container-x max-w-3xl">
          <p className="rounded-[14px] border border-dashed border-line p-5 text-sm text-muted">
            Placeholder copy — replace with your final, legally reviewed text before launch.
          </p>
          {sections.map((s) => (
            <div key={s.heading} className="mt-12">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-navy">{s.heading}</h2>
              <p className="text-lead mt-4 text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
