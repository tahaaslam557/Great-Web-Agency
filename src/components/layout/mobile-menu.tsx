"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { GridBackground, Glow } from "@/components/ui/backgrounds";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { navLinks, site } from "@/lib/site";
import { ease, pad } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const links = [{ label: "Home", href: "/" }, ...navLinks, { label: "Contact", href: "/contact" }];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-navy px-6 pb-8 pt-28 md:hidden"
          initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
          animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
          exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
          transition={{ duration: 0.6, ease: ease.inOut }}
        >
          <GridBackground />
          <Glow className="-bottom-24 -left-24 h-80 w-80" color="teal" />

          <nav aria-label="Mobile" className="relative flex-1">
            <ul className="space-y-1">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12, transition: { duration: 0.15 } }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: ease.out }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-baseline gap-4 border-b border-white/10 py-4 text-white"
                  >
                    <span className="micro-label text-green">{pad(i)}</span>
                    <span className="text-[2.4rem] font-semibold leading-none tracking-[-0.04em]">{link.label}</span>
                    <ArrowUpRight className="ml-auto h-5 w-5 self-center text-white/40 transition group-active:text-green" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            className="relative mt-10 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.15 + links.length * 0.06 + 0.05, duration: 0.6, ease: ease.out }}
          >
            <div onClick={onClose}>
              <MagneticButton href="/contact" size="lg" fullWidth magnetic={false}>
                Start a Project
              </MagneticButton>
            </div>
            <a href={`mailto:${site.email}`} className="block text-center text-sm text-white/60">
              {site.email}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
