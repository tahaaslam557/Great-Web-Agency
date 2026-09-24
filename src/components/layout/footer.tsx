import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { GridBackground } from "@/components/ui/backgrounds";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { TextReveal } from "@/components/ui/text-reveal";
import { services } from "@/data/services";
import { navLinks, site } from "@/lib/site";

const linkClass =
  "group inline-flex items-center gap-1.5 text-white/65 transition-colors duration-300 hover:text-white";

function FooterLink({ href, children, external }: { href: string; children: string; external?: boolean }) {
  const inner = (
    <>
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
        {children}
      </span>
      {external && (
        <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green group-hover:opacity-100" />
      )}
    </>
  );
  return external ? (
    <a href={href} className={linkClass} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={href} className={linkClass}>
      {inner}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <GridBackground className="opacity-60" />
      <NoiseOverlay />
      <div className="container-x relative pt-24 lg:pt-32">
        <div className="grid gap-12 border-b border-line-dark pb-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Great Web Agency — home" className="inline-block rounded-md">
              <Logo tone="light" />
            </Link>
            <p className="mt-6 max-w-xs text-white/55">Strategy, design and technology for ambitious businesses.</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className="micro-label mb-5 text-white/40">Navigate</h2>
            <ul className="space-y-3">
              {[...navLinks, { label: "Contact", href: "/contact" }].map((l) => (
                <li key={l.href}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="micro-label mb-5 text-white/40">Services</h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <FooterLink href={`/services#${s.slug}`}>{s.title}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="micro-label mb-5 text-white/40">Contact</h2>
            <a
              href={`mailto:${site.email}`}
              className="text-lg font-semibold tracking-[-0.02em] text-white transition-colors hover:text-green"
            >
              {site.email}
            </a>
            <p className="mt-3 text-sm text-white/55">{site.location}</p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green transition-transform hover:translate-x-1"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="py-14 lg:py-20">
          <TextReveal
            as="p"
            text={"Let's build\nsomething great."}
            square
            stagger={0.08}
            className="text-[clamp(3rem,10.5vw,10.5rem)] font-bold uppercase leading-[0.86] tracking-[-0.055em] text-white"
          />
        </div>

        <div className="flex flex-col gap-6 border-t border-line-dark py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} Great Web Agency. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.socials.map((s) => (
              <li key={s.label}>
                <FooterLink href={s.href} external>
                  {s.label}
                </FooterLink>
              </li>
            ))}
          </ul>
          <ul className="flex gap-6">
            <li>
              <FooterLink href="/privacy">Privacy</FooterLink>
            </li>
            <li>
              <FooterLink href="/terms">Terms</FooterLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
