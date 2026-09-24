import { AboutPreview } from "@/components/sections/about-preview";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Technology } from "@/components/sections/technology";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { WorkShowcase } from "@/components/sections/work-showcase";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <Intro />
      <Services />
      <WorkShowcase />
      <Process />
      <Technology />
      <AboutPreview />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
