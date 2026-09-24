import type { Metadata } from "next";
import { Cta } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { WorkGrid } from "@/components/sections/work-grid";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected websites, ecommerce stores, software and brand projects by Great Web Agency.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Work"
        title="Work that moves the needle."
        accent={["needle"]}
        description="Websites, stores, platforms and brands — each designed around a clear business goal and built to last."
      />
      <section className="section-y bg-white">
        <div className="container-x">
          <WorkGrid />
        </div>
      </section>
      <Cta />
    </>
  );
}
