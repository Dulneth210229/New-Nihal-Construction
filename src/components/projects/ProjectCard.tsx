import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types";

const statusStyles: Record<Project["status"], string> = {
  Completed: "bg-primary/15 text-primary-dark",
  Ongoing: "bg-secondary/10 text-secondary",
  Upcoming: "bg-ink-muted/10 text-ink-muted",
};

interface ProjectCardProps {
  project: Project;
  className?: string;
  imageAspect?: string;
}

export function ProjectCard({ project, className = "", imageAspect = "aspect-[4/5]" }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group relative block overflow-hidden rounded-2xl bg-secondary ${className}`}
    >
      <div className={`relative w-full overflow-hidden ${imageAspect}`}>
        <img
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <span className={`rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${statusStyles[project.status]}`}>
            {project.status}
          </span>
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-white/60">{project.category}</span>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-white transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-2xl">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-white/60">{project.location}</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-secondary">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>

      <span className="absolute left-0 top-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
    </Link>
  );
}
