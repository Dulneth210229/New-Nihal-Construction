import { Hero } from "../components/home/Hero";
import { Stats } from "../components/home/Stats";
import { About } from "../components/home/About";
import { Services } from "../components/home/Services";
import { FeaturedProjects } from "../components/home/FeaturedProjects";
import { Process } from "../components/home/Process";
import { WhyUs } from "../components/home/WhyUs";
import { PartnersSlider } from "../components/home/PartnersSlider";
import { Testimonials } from "../components/home/Testimonials";
import { FAQ } from "../components/home/FAQ";
import { CTA } from "../components/home/CTA";
import { MapSection } from "../components/contact/MapSection";
import { usePageMeta } from "../hooks/usePageMeta";
import { company } from "../config/company";

export default function Home() {
  usePageMeta({
    title: `${company.legalName} | Building What's Next`,
    description: company.description,
  });

  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <FeaturedProjects />
      <Process />
      <WhyUs />
      <PartnersSlider />
      <Testimonials />
      <FAQ />
      <CTA />
      <MapSection />
    </>
  );
}
