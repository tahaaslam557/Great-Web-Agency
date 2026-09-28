"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Logo } from "@/components/brand/logo";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { navLinks } from "@/lib/site";
import { cn, ease } from "@/lib/utils";
import { useIntro } from "./providers";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const pathname = usePathname();
  const { ready } = useIntro();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    // Hide while reading downwards, reveal as soon as the user scrolls up
    setHidden(y > 480 && y > prev && !menuOpen);
  });

  const isActive = (href: string) => !href.includes("#") && pathname.startsWith(href);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: hidden ? "-120%" : 0, opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.7, ease: ease.out }}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex h-16 max-w-[1320px] items-center justify-between rounded-[18px] border pl-4 pr-2 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 md:pl-6",
            scrolled || menuOpen
              ? "border-white/10 bg-navy/75 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <Link href="/" aria-label="Great Web Agency — home" className="rounded-md" onClick={() => setMenuOpen(false)}>
            <Logo tone="light" />
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex" onMouseLeave={() => setHovered(null)}>
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHovered(link.href)}
                    onFocus={() => setHovered(link.href)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative z-10 block px-3.5 py-2 text-[0.92rem] font-medium transition-colors duration-300",
                      active ? "text-white" : "text-white/70 hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                  {hovered === link.href && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-full bg-white/[0.07]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-green"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <MagneticButton href="/contact" size="md" className="h-11 px-5">
              Let&apos;s Talk
            </MagneticButton>
          </div>

          <button
            type="button"
            className="relative flex h-12 w-12 items-center justify-center rounded-full lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <motion.span
              className="absolute h-[1.5px] w-6 rounded bg-white"
              animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            />
            <motion.span
              className="absolute h-[1.5px] rounded bg-white"
              animate={menuOpen ? { rotate: -45, y: 0, width: 24 } : { rotate: 0, y: 4, width: 16, x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            />
          </button>
        </nav>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
