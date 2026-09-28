export type ServiceVisualKey = "web" | "commerce" | "uiux" | "software" | "seo" | "strategy";

export interface Service {
  slug: string;
  title: string;
  short: string;
  intro: string;
  explanation: string;
  deliverables: string[];
  process: string[];
  technologies: string[];
  visual: ServiceVisualKey;
}

export type ProjectCategory = "Web" | "Ecommerce" | "Software" | "Branding" | "UI/UX";

export type ProjectVisualKey = "browser" | "commerce" | "dashboard" | "mobile" | "brand";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  filters: ProjectCategory[];
  description: string;
  result: string;
  /** Optional real screenshot, e.g. "/projects/project-01.webp". Falls back to the built-in visual if missing or broken. */
  image?: string;
  visual: ProjectVisualKey;
  technologies: string[];
  year: string;
  href: string;
  challenge: string;
  solution: string;
  metrics: { value: string; label: string }[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  /** true while the content is sample copy that must be replaced before launch */
  isPlaceholder: boolean;
}

export interface Technology {
  name: string;
  category: "Frontend" | "Backend" | "Platform" | "Data";
  note: string;
  /** Position inside the desktop constellation, in % of the field */
  x: number;
  y: number;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  /** Rendered verbatim instead of counting up (e.g. "24/7") */
  display?: string;
}

export type Industry =
  | "ecommerce"
  | "fitness"
  | "food"
  | "transport"
  | "technology"
  | "real-estate"
  | "fintech"
  | "construction";

export interface PortfolioItem {
  slug: string;
  name: string;
  industry: Industry;
  tagline: string;
  /** [background, ink, accent] used by the generated site mock */
  palette: [string, string, string];
  /** Which of the four mock page layouts to render */
  layout: 0 | 1 | 2 | 3;
  /** Optional real full-page screenshot, e.g. "/portfolio/maison-vale.webp" */
  image?: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  /** Billing suffix, e.g. "/mo" or "one-time" */
  unit?: string;
  features: string[];
  featured?: boolean;
}

export interface PricingCategory {
  slug: string;
  label: string;
  description: string;
  plans: PricingPlan[];
}
