import { stats } from "../../data/stats";
import { Reveal } from "../ui/Reveal";
import { AnimatedCounter } from "../ui/AnimatedCounter";

export function Stats() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-px grid grid-cols-2 divide-x divide-border lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.id} delay={i * 0.08} className="px-2 py-12 text-center sm:px-6">
            <div className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold text-ink">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 font-mono text-xs font-medium uppercase tracking-[0.15em] text-ink-muted sm:text-sm">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
