import { PageHeader } from "../components/ui/PageHeader";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { Stats } from "../components/home/Stats";
import { CTA } from "../components/home/CTA";
import { usePageMeta } from "../hooks/usePageMeta";
import { company } from "../config/company";

const pillars = [
  {
    title: "Mission",
    text: "To deliver construction and civil engineering work that clients can rely on — built safely, on schedule, and to a standard that lasts.",
  },
  {
    title: "Vision",
    text: "To be a leading name in Sri Lankan construction, known for engineering discipline and accountable project delivery.",
  },
  {
    title: "Values",
    text: "Safety first, honest communication, and craftsmanship that holds up to scrutiny long after handover.",
  },
];

// TODO: Replace with verified company milestones.
const milestones = [
  { year: "2005", text: "Nihal Construction founded, taking on its first residential contracts." },
  { year: "2012", text: "Expanded into civil engineering and infrastructure works." },
  { year: "2018", text: "Delivered first large-scale commercial development." },
  { year: "2024", text: "Operating across residential, commercial and infrastructure sectors island-wide." },
];

export default function About() {
  usePageMeta({
    title: `About Us | ${company.legalName}`,
    description: "Learn about Nihal Construction's mission, vision, values and history as a construction and civil engineering company in Sri Lanka.",
  });

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={
          <>
            Built on experience.
            <br />
            Driven by progress.
          </>
        }
        description="Two decades of construction and civil engineering work, grounded in accountability and technical discipline."
        image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000&auto=format&fit=crop"
      />

      <Stats />

      <section className="bg-background py-24 sm:py-32">
        <div className="container-px">
          <SectionHeading
            eyebrow="Who We Are"
            title="A team that treats every site like it's our own."
            description={company.description}
          />

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-surface p-8">
                  <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary-dark">
                    {pillar.title}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32">
        <div className="container-px">
          <SectionHeading eyebrow="Our Journey" title="Milestones along the way." align="center" />

          <div className="relative mx-auto mt-16 max-w-2xl border-l border-border pl-8">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08} className="relative pb-12 last:pb-0">
                <div className="absolute -left-[calc(2rem+1px)] flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-surface font-mono text-[11px] font-semibold text-primary-dark">
                  {m.year.slice(2)}
                </div>
                <p className="font-mono text-lg font-semibold text-ink">{m.year}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
