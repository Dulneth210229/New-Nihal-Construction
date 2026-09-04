import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { CornerMarks } from "../ui/CornerMarks";

const values = [
  { title: "Engineering-first", text: "Every build starts with sound engineering, not just design intent." },
  { title: "Accountable delivery", text: "One team, one schedule, one point of contact from start to finish." },
  { title: "Built to last", text: "Materials and methods chosen for durability, not shortcuts." },
];

export function About() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="container-px grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop"
                alt="Architectural detail of a modern building under natural light"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <CornerMarks topOffset={16} edgeOffset={16} />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="absolute -bottom-10 -right-4 w-2/3 max-w-xs sm:-right-10">
            <div className="overflow-hidden rounded-2xl border-4 border-background shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=900&auto=format&fit=crop"
                alt="Construction worker reviewing plans on site"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.25} className="absolute -left-4 top-6 hidden rounded-xl bg-secondary px-5 py-4 text-white shadow-xl sm:block">
            <p className="font-display text-2xl font-semibold text-primary">20+</p>
            <p className="text-xs uppercase tracking-wider text-white/70">Years building</p>
          </Reveal>
        </div>

        <div>
          <SectionHeading
            eyebrow="About Nihal Construction"
            title={
              <>
                Built on experience.
                <br />
                Driven by progress.
              </>
            }
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted">
              Nihal Construction (Pvt) Ltd. brings engineering discipline to every project we
              take on. We plan carefully, build precisely, and stay accountable to our clients
              from the first site visit to final handover.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.2 + i * 0.08}>
                <div className="border-t-2 border-primary pt-4">
                  <h3 className="font-display text-sm font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4} className="mt-10">
            <Button to="/about" variant="secondary">
              Our Story
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
