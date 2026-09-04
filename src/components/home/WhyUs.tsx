import { ShieldCheck, Gauge, Users, HardHat, Wrench, Award } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const reasons = [
  { icon: HardHat, title: "Experience", text: "Two decades of hands-on construction and engineering delivery." },
  { icon: ShieldCheck, title: "Safety", text: "Rigorous on-site safety standards protecting every worker, every day." },
  { icon: Gauge, title: "Reliability", text: "Projects delivered on schedule, with transparent progress reporting." },
  { icon: Wrench, title: "Engineering Excellence", text: "Technical precision applied from design review through to build." },
  { icon: Users, title: "Professional Management", text: "A single accountable team managing budget, quality and timeline." },
  { icon: Award, title: "Quality", text: "Materials and workmanship inspected against strict internal standards." },
];

export function WhyUs() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Nihal Construction"
          title={
            <>
              Reasons clients trust us
              <br />
              with what matters most.
            </>
          }
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.06} className="group bg-surface p-8 transition-colors hover:bg-secondary">
              <reason.icon className="text-primary-dark transition-colors group-hover:text-primary" size={28} />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink transition-colors group-hover:text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted transition-colors group-hover:text-white/70">
                {reason.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
