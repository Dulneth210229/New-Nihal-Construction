import { useMemo, useState } from "react";
import { PageHeader } from "../components/ui/PageHeader";
import { ProjectCard } from "../components/projects/ProjectCard";
import { Reveal } from "../components/ui/Reveal";
import { CTA } from "../components/home/CTA";
import { projects } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";
import { company } from "../config/company";

export default function Projects() {
  usePageMeta({
    title: `Projects | ${company.legalName}`,
    description: "Browse Nihal Construction's portfolio of commercial, residential and infrastructure projects across Sri Lanka.",
  });

  const categories = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], []);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Our Projects"
        title="A portfolio built on precision."
        description="A selection of completed, ongoing and upcoming work across commercial, residential and infrastructure sectors."
        image="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="container-px">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                  filter === category
                    ? "border-primary bg-primary text-secondary"
                    : "border-border bg-surface text-ink-muted hover:border-primary-dark hover:text-ink"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 0.08}>
                <ProjectCard project={project} imageAspect="aspect-[4/5]" />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-ink-muted">No projects found in this category yet.</p>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
