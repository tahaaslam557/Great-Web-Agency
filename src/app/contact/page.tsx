import type { Metadata } from "next";
import { Clock, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your project. Great Web Agency replies to every inquiry within one business day.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { service } = await searchParams;
  const requested = typeof service === "string" && services.some((s) => s.slug === service) ? service : "";

  return (
    <>
      <PageHero
        label="Contact"
        title="Let's build something great."
        accent={["great"]}
        description="Share a few details and we'll come back with thoughts, questions and next steps — no hard sell."
      />
      <section className="section-y bg-white">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <ContactForm defaultService={requested} />
          </Reveal>
          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.15} className="space-y-4 lg:sticky lg:top-28">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-start gap-4 rounded-[24px] border border-line p-6 transition-colors hover:border-teal/40"
              >
                <Mail className="mt-1 h-5 w-5 text-teal" aria-hidden />
                <span>
                  <span className="micro-label block text-muted">Email</span>
                  <span className="mt-2 block text-lg font-semibold text-navy group-hover:text-teal">{site.email}</span>
                </span>
              </a>
              <div className="flex items-start gap-4 rounded-[24px] border border-line p-6">
                <Clock className="mt-1 h-5 w-5 text-teal" aria-hidden />
                <span>
                  <span className="micro-label block text-muted">Response time</span>
                  <span className="mt-2 block text-navy">{site.responseTime}</span>
                </span>
              </div>
              <div className="flex items-start gap-4 rounded-[24px] border border-line p-6">
                <MapPin className="mt-1 h-5 w-5 text-teal" aria-hidden />
                <span>
                  <span className="micro-label block text-muted">Location</span>
                  <span className="mt-2 block text-navy">{site.location}</span>
                </span>
              </div>
              <div className="rounded-[24px] bg-navy p-6 text-white">
                <span className="micro-label block text-white/50">Follow</span>
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {site.socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-white/80 hover:text-green"
                      >
                        {s.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
