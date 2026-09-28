import type { Metadata } from "next";
import { Cta } from "@/components/sections/cta";
import { PortfolioExplorer } from "@/components/sections/portfolio-explorer";
import { PortfolioHero } from "@/components/sections/portfolio-hero";
import { industries } from "@/data/portfolio";
import type { Industry } from "@/types";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Websites designed and built by Great Web Agency for ecommerce, fitness, food, transport, technology, real estate, fintech and construction brands.",
  alternates: { canonical: "/portfolio" },
};

export default async function PortfolioPage({ searchParams }: PageProps<"/portfolio">) {
  const { industry } = await searchParams;
  const initial = industries.find((i) => i.key === industry)?.key ?? "all";

  return (
    <>
      <PortfolioHero />
      <PortfolioExplorer key={initial} initialIndustry={initial as Industry | "all"} />
      <Cta title="Your industry could be next." text="Tell us who you're building for — we'll design around them." button="Start your project" />
    </>
  );
}
