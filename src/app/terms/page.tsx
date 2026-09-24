import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal";

export const metadata: Metadata = { title: "Terms of Use", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use."
      sections={[
        {
          heading: "Using this site",
          body: "The content on this website is provided for general information about Great Web Agency and our services.",
        },
        {
          heading: "Intellectual property",
          body: "All brand assets, text and visuals on this site belong to Great Web Agency unless stated otherwise.",
        },
        {
          heading: "Project agreements",
          body: "Client work is governed by a separate written agreement that sets out scope, timelines and payment terms.",
        },
      ]}
    />
  );
}
