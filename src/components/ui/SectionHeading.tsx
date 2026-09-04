import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : ""} max-w-2xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <span
            className={`mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] ${
              light ? "text-primary" : "text-primary-dark"
            }`}
          >
            <span className="h-px w-8 bg-current" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`text-balance font-display text-[clamp(1.9rem,4vw,3.25rem)] font-semibold leading-[1.05] ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className={`mt-5 text-base leading-relaxed ${light ? "text-white/70" : "text-ink-muted"}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
