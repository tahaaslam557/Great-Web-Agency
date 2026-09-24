import type { Technology } from "@/types";

export const technologies: Technology[] = [
  { name: "Next.js", category: "Frontend", note: "Server-rendered React for fast, SEO-friendly sites.", x: 22, y: 20 },
  {
    name: "React",
    category: "Frontend",
    note: "Component-driven interfaces that scale with your product.",
    x: 50,
    y: 10,
  },
  { name: "TypeScript", category: "Frontend", note: "Typed code that stays maintainable as teams grow.", x: 78, y: 22 },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    note: "A token-based styling system that keeps design consistent.",
    x: 12,
    y: 50,
  },
  { name: "Node.js", category: "Backend", note: "APIs, integrations and server logic in one language.", x: 88, y: 50 },
  { name: "WordPress", category: "Platform", note: "Familiar, editor-friendly content management.", x: 20, y: 80 },
  {
    name: "Shopify",
    category: "Platform",
    note: "Reliable commerce with custom storefront experiences.",
    x: 44,
    y: 90,
  },
  { name: "PostgreSQL", category: "Data", note: "A proven relational database for serious data.", x: 68, y: 86 },
  { name: "Supabase", category: "Data", note: "Auth, storage and realtime on top of Postgres.", x: 84, y: 74 },
  { name: "REST APIs", category: "Backend", note: "Clean, documented interfaces between your systems.", x: 70, y: 36 },
];
