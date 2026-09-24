import type { Stat } from "@/types";

/**
 * Global site configuration.
 * SEO copy, contact details, navigation and company stats are all editable here.
 */
export const site = {
  name: "Great Web Agency",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://greatwebagency.com",
  title: "Great Web Agency — Digital Experiences That Move Businesses Forward",
  description:
    "Great Web Agency designs and builds high-performance websites, ecommerce experiences, custom software and digital products for ambitious businesses.",
  ogHeadline: "We build digital experiences that move businesses forward.",
  // TODO: replace with the real inbox and response time
  email: "hello@greatwebagency.com",
  responseTime: "We reply to every inquiry within one business day.",
  location: "Remote-first · Working worldwide",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Dribbble", href: "https://dribbble.com/" },
    { label: "X / Twitter", href: "https://x.com/" },
  ],
} as const;

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/#process" },
] as const;

/** PLACEHOLDER numbers — update with real company data. */
export const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Digital projects" },
  { value: 20, suffix: "+", label: "Businesses served" },
  { value: 5, suffix: "+", label: "Years building" },
  { value: 24, suffix: "/7", label: "Digital mindset", display: "24/7" },
];

/** sessionStorage key used to play the intro loader only once per session */
export const INTRO_SESSION_KEY = "gwa-intro-seen";
