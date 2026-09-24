import type { Project, ProjectCategory } from "@/types";

/**
 * PLACEHOLDER portfolio. Replace with real case studies.
 * To use a real screenshot, drop it in /public/projects and set `image`.
 * If the image is missing, the built-in visual renders instead.
 */
export const projects: Project[] = [
  {
    slug: "northwind-finance",
    title: "Northwind Finance",
    client: "Northwind",
    category: "Web Design & Development",
    filters: ["Web", "UI/UX"],
    description: "A fast, trust-first marketing platform for a growing fintech brand.",
    result: "Faster pages and a clearer path to sign-up.",
    visual: "browser",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    year: "2025",
    href: "/work/northwind-finance",
    challenge: "The previous site was slow, hard to update and buried the sign-up journey under generic content.",
    solution:
      "We rebuilt the information architecture around three core audiences, designed a modular component system and shipped it on a headless stack with instant page loads.",
    metrics: [
      { value: "0.9s", label: "Largest Contentful Paint" },
      { value: "12", label: "Reusable page modules" },
      { value: "100", label: "Lighthouse accessibility" },
    ],
  },
  {
    slug: "atlas-outdoor",
    title: "Atlas Outdoor",
    client: "Atlas",
    category: "Ecommerce",
    filters: ["Ecommerce", "Web"],
    description: "A headless storefront for a premium outdoor equipment label.",
    result: "A smoother journey from product discovery to checkout.",
    visual: "commerce",
    technologies: ["Shopify", "Next.js", "Stripe"],
    year: "2025",
    href: "/work/atlas-outdoor",
    challenge:
      "Customers struggled to compare technical products on mobile, and the checkout lost buyers at the shipping step.",
    solution:
      "We designed a comparison-first product page, rebuilt collection filtering and simplified checkout to a single guided flow.",
    metrics: [
      { value: "3", label: "Checkout steps (from 6)" },
      { value: "2x", label: "Faster collection pages" },
      { value: "1", label: "Unified product system" },
    ],
  },
  {
    slug: "pulse-operations",
    title: "Pulse Operations",
    client: "Pulse",
    category: "Custom Software",
    filters: ["Software", "UI/UX"],
    description: "An operations dashboard that replaced five spreadsheets and two legacy tools.",
    result: "One source of truth for a 40-person operations team.",
    visual: "dashboard",
    technologies: ["React", "Node.js", "PostgreSQL"],
    year: "2024",
    href: "/work/pulse-operations",
    challenge: "Critical data lived across disconnected spreadsheets, so reporting took days and errors were common.",
    solution:
      "We mapped the team's workflows, designed a role-based dashboard and built integrations that sync data in real time.",
    metrics: [
      { value: "5 → 1", label: "Tools consolidated" },
      { value: "Live", label: "Real-time reporting" },
      { value: "4", label: "User roles" },
    ],
  },
  {
    slug: "halo-health",
    title: "Halo Health",
    client: "Halo",
    category: "UI/UX Design",
    filters: ["UI/UX", "Software"],
    description: "A calm, accessible patient app designed around daily routines.",
    result: "A design system ready for web and native teams.",
    visual: "mobile",
    technologies: ["Figma", "React Native", "Design tokens"],
    year: "2024",
    href: "/work/halo-health",
    challenge: "Patients found the existing app confusing, and the product team had no shared design language.",
    solution:
      "We ran interviews, simplified the core journeys and delivered a tokenised design system with accessible components.",
    metrics: [
      { value: "60+", label: "Documented components" },
      { value: "AA", label: "WCAG contrast" },
      { value: "12", label: "Usability sessions" },
    ],
  },
  {
    slug: "meridian-studio",
    title: "Meridian Studio",
    client: "Meridian",
    category: "Branding & Web",
    filters: ["Branding", "Web"],
    description: "A new identity and editorial website for an architecture practice.",
    result: "A brand that finally matches the quality of the work.",
    visual: "brand",
    technologies: ["Next.js", "Sanity", "Motion"],
    year: "2023",
    href: "/work/meridian-studio",
    challenge: "The studio's award-winning projects were presented through a dated template that undersold them.",
    solution:
      "We created a restrained identity system and an image-led website where each project reads like a magazine feature.",
    metrics: [
      { value: "1", label: "Identity system" },
      { value: "30+", label: "Projects migrated" },
      { value: "CMS", label: "Fully editable" },
    ],
  },
];

export const projectFilters: Array<"All" | ProjectCategory> = [
  "All",
  "Web",
  "Ecommerce",
  "Software",
  "Branding",
  "UI/UX",
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
