import { processSteps } from "../../data/process";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function Process() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Process"
          title={
            <>
              A disciplined path
              <br />
              from idea to handover.
            </>
          }
          align="center"
        />

        {/* Desktop horizontal timeline */}
        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-0 right-0 top-6 h-px bg-border" />
          <div className="grid grid-cols-6 gap-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.08} className="relative">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-surface font-mono text-sm font-semibold text-primary-dark">
                  {step.index}
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="relative mt-14 space-y-10 border-l border-border pl-8 lg:hidden">
          {processSteps.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.06} className="relative">
              <div className="absolute -left-[calc(2rem+1px)] flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-surface font-mono text-xs font-semibold text-primary-dark">
                {step.index}
              </div>
              <h3 className="font-display text-base font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
