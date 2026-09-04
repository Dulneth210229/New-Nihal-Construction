import { projects } from "../../data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../projects/ProjectCard";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export function FeaturedProjects() {
  const featured = projects.slice(0, 5);

  return (
    <section className="bg-background py-24 sm:py-32" id="projects">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured Work"
            title={
              <>
                A showcase of what
                <br />
                we've built.
              </>
            }
          />
          <Reveal delay={0.2}>
            <Button to="/projects" variant="secondary">
              View All Projects
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal className="md:col-span-2">
            <ProjectCard project={featured[0]} imageAspect="aspect-[16/10] md:aspect-[21/9]" />
          </Reveal>
          {featured.slice(1, 3).map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} imageAspect="aspect-[4/5]" />
            </Reveal>
          ))}
          {featured.slice(3, 5).map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} imageAspect="aspect-[4/5]" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
