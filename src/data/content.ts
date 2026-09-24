import type { Faq, ProcessStep } from "@/types";

export const marqueeItems = ["Web Development", "UI/UX Design", "Ecommerce", "Software", "SEO", "Digital Products"];

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description: "We learn your business, audience and goals, then audit what already exists.",
  },
  {
    title: "Define",
    description: "Scope, priorities and success metrics are agreed before a single pixel is drawn.",
  },
  {
    title: "Design",
    description: "Structure, interface and motion come together in a prototype you can click through.",
  },
  {
    title: "Develop",
    description: "Clean, typed, tested code shipped in small releases you can review every week.",
  },
  {
    title: "Launch",
    description: "Performance, SEO and QA checks, then a calm, well-rehearsed go-live.",
  },
  {
    title: "Evolve",
    description: "We measure real usage and keep improving what moves the numbers.",
  },
];

export const faqs: Faq[] = [
  {
    question: "What type of websites do you build?",
    answer:
      "Marketing sites, ecommerce stores, content platforms, web applications and product dashboards. Most projects are built on Next.js, Shopify or WordPress depending on how your team needs to work.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We start with an audit of your current site, analytics and content, keep what works, and redesign the rest. We also handle redirects and SEO so you don't lose existing rankings.",
  },
  {
    question: "Do you build custom software?",
    answer:
      "We do. From internal tools and client portals to full SaaS products, we cover discovery, UX, architecture, development and ongoing support.",
  },
  {
    question: "Can you help with ecommerce?",
    answer:
      "Absolutely. We design and build Shopify and headless storefronts, integrate payments and fulfilment, and optimise the journey from product page to checkout.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. After launch we offer maintenance, performance monitoring and continuous improvement plans, so your site or product keeps getting better.",
  },
  {
    question: "How does the process work?",
    answer:
      "Discover, define, design, develop, launch and evolve. You get a clear plan up front, regular demos during the build and a single point of contact throughout.",
  },
];

export const values = [
  {
    title: "Clarity over noise",
    text: "Every section, animation and word has to earn its place.",
  },
  {
    title: "Performance is design",
    text: "A beautiful page that loads slowly is not a beautiful page.",
  },
  {
    title: "Build to be changed",
    text: "Clean systems your team can extend long after launch.",
  },
  {
    title: "Measure what matters",
    text: "We track outcomes, not just deliverables.",
  },
];

export const pillars = ["Design", "Engineering", "Strategy", "Performance", "Business thinking"];
