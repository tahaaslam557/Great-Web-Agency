import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy."
      sections={[
        {
          heading: "What we collect",
          body: "When you contact us we collect the details you share, such as your name, email, company and project information.",
        },
        {
          heading: "How we use it",
          body: "We use this information only to respond to your inquiry and, if we work together, to deliver the project.",
        },
        {
          heading: "Your choices",
          body: `You can ask us to access, correct or delete your information at any time by emailing ${site.email}.`,
        },
      ]}
    />
  );
}
