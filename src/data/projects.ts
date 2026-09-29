import type { Project, ProjectCategory } from "@/types";

/**
 * Featured case studies. `image` points to a screenshot in /public/projects;
 * if it is missing, the built-in visual renders instead.
 */
export const projects: Project[] = [
  {
    slug: "northwind-finance",
    title: "Northwind Finance",
    client: "Northwind",
    category: "Web Design & Development",
    filters: ["Web", "UI/UX"],
    description: "A fast, trust-first marketing platform for a growing fintech brand.",
    image: "/projects/northwind-finance.webp",
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
    slug: "atlas-auto-parts",
    title: "Atlas Auto Parts",
    client: "Atlas",
    category: "Ecommerce",
    filters: ["Ecommerce", "Web"],
    description: "A headless storefront for a performance auto-parts retailer.",
    result: "A smoother journey from finding the right part to checkout.",
    image: "/projects/atlas-auto-parts.webp",
    visual: "commerce",
    technologies: ["Shopify", "Next.js", "Stripe"],
    year: "2025",
    href: "/work/atlas-auto-parts",
    challenge:
      "Customers struggled to find parts that fit their vehicle on mobile, and the checkout lost buyers at the shipping step.",
    solution:
      "We designed a fitment-first product search, rebuilt collection filtering and simplified checkout to a single guided flow.",
    metrics: [
      { value: "3", label: "Checkout steps (from 6)" },
      { value: "2x", label: "Faster collection pages" },
      { value: "1", label: "Unified product system" },
    ],
  },
  {
    slug: "pulse-reviews",
    title: "Pulse Reviews",
    client: "Pulse",
    category: "Custom Software",
    filters: ["Software", "UI/UX"],
    description: "A review-management platform that turns customer feedback into growth.",
    result: "Every review, from every channel, in one place.",
    image: "/projects/pulse-reviews.webp",
    visual: "dashboard",
    technologies: ["React", "Node.js", "PostgreSQL"],
    year: "2024",
    href: "/work/pulse-reviews",
    challenge: "Reviews lived across disconnected platforms, so responding took days and insights were lost.",
    solution:
      "We mapped how teams handle feedback, designed a role-based dashboard and built integrations that sync reviews in real time.",
    metrics: [
      { value: "5 → 1", label: "Review sources unified" },
      { value: "Live", label: "Real-time reporting" },
      { value: "4", label: "User roles" },
    ],
  },
  {
    slug: "halo-dental",
    title: "Halo Dental",
    client: "Halo",
    category: "UI/UX Design",
    filters: ["UI/UX", "Software"],
    description: "A calm, accessible website for a family dental practice.",
    result: "A design system ready for web and booking teams.",
    image: "/projects/halo-dental.webp",
    visual: "mobile",
    technologies: ["Figma", "Next.js", "Design tokens"],
    year: "2024",
    href: "/work/halo-dental",
    challenge: "Patients found the existing site confusing, and the practice had no shared design language.",
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
    image: "/projects/meridian-studio.webp",
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
