import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, CalendarDays, Building2, User } from "lucide-react";
import { projects } from "../data/projects";
import { Reveal } from "../components/ui/Reveal";
import { CornerMarks } from "../components/ui/CornerMarks";
import { CTA } from "../components/home/CTA";
import { usePageMeta } from "../hooks/usePageMeta";
import { company } from "../config/company";

const statusStyles: Record<string, string> = {
  Completed: "bg-primary/15 text-primary-dark",
  Ongoing: "bg-secondary/10 text-secondary",
  Upcoming: "bg-ink-muted/10 text-ink-muted",
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  usePageMeta({
    title: project ? `${project.name} | ${company.legalName}` : `Project Not Found | ${company.legalName}`,
    description: project?.summary,
  });

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-secondary pt-32">
        <img
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/30" />

        <CornerMarks corners="top" topOffset={96} className="hidden sm:block" />

        <div className="container-px relative z-10 pb-16">
          <Link
            to="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <span className={`inline-block rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider ${statusStyles[project.status]}`}>
            {project.status}
          </span>
          <h1 className="mt-4 text-balance font-display text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.02] text-white">
            {project.name}
          </h1>
          <p className="mt-4 max-w-xl text-white/70">{project.summary}</p>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="container-px grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr]">
          <div className="space-y-8">
            <dl className="grid grid-cols-2 gap-6 lg:grid-cols-1">
              {[
                { icon: MapPin, label: "Location", value: project.location },
                { icon: Building2, label: "Category", value: project.category },
                { icon: User, label: "Client", value: project.client },
                { icon: CalendarDays, label: "Duration", value: project.duration },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  <dt className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-ink-muted">
                    <Icon size={14} className="text-primary-dark" /> {label}
                  </dt>
                  <dd className="mt-1.5 font-display text-base font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ink">Overview</h2>
              <p className="mt-4 leading-relaxed text-ink-muted">{project.description}</p>
            </Reveal>

            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <Reveal delay={0.1}>
                <h3 className="font-display text-lg font-semibold text-ink">Scope of Work</h3>
                <ul className="mt-4 space-y-2">
                  {project.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.15}>
                <h3 className="font-display text-lg font-semibold text-ink">Key Highlights</h3>
                <ul className="mt-4 space-y-2">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-px">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink">Gallery</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {project.gallery.map((image, i) => (
              <Reveal key={image.src + i} delay={i * 0.08} className={i === 0 ? "sm:col-span-2" : ""}>
                <div className={`overflow-hidden rounded-2xl ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
