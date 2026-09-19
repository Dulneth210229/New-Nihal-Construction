import { PageHeader } from "../components/ui/PageHeader";
import { Services as ServicesSection } from "../components/home/Services";
import { Process } from "../components/home/Process";
import { CTA } from "../components/home/CTA";
import { usePageMeta } from "../hooks/usePageMeta";
import { company } from "../config/company";

export default function ServicesPage() {
  usePageMeta({
    title: `Services | ${company.legalName}`,
    description: "Explore Nihal Construction's services: building construction, civil engineering, infrastructure development, commercial development, renovations and project management.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title={
          <>
            Capability across the
            <br />
            full construction lifecycle.
          </>
        }
        description="Every discipline a build requires, coordinated under one accountable team."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
      />
      <ServicesSection />
      <Process />
      <CTA />
    </>
  );
}
