import { createElement } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/content/portfolio";
import AnimatedProjectMedia from "@/components/foundations/animated-project-media";
import ProjectPreviewDialog from "@/components/patterns/project-preview-dialog";
import { withBasePath } from "@/lib/paths";

export type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card" data-project={project.name.toLowerCase()}>
      <div className="project-card-heading">
        <div>
          <h3>{project.name}</h3>
          <p className="project-role">{project.role}</p>
        </div>
        <p className="project-description">{project.description}</p>
      </div>
      <AnimatedProjectMedia>
        <Image
          src={withBasePath(project.image)}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
        />
        <figcaption>{project.imageCaption}</figcaption>
      </AnimatedProjectMedia>
      <dl className="project-metrics">
        {project.metrics.map((metric) =>
          createElement(
            "div",
            { key: `${project.name}-${metric.label}` },
            createElement("dt", null, metric.label),
            createElement("dd", null, metric.value),
          ),
        )}
      </dl>
      <ul className="project-outcomes">
        {project.outcomes.map((outcome) =>
          createElement("li", { key: outcome }, outcome),
        )}
      </ul>
      <div className="project-actions">
        <ProjectPreviewDialog
          projectName={project.name}
          websiteUrl={project.href}
          imageSrc={project.image}
          imageAlt={project.imageAlt}
          fallbackMessage={project.previewMessage}
        />
        <a
          className="external-action"
          href={project.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Open website for ${project.name}`}
        >
          Open website
          <ExternalLink aria-hidden="true" size={17} strokeWidth={1.7} />
        </a>
      </div>
    </article>
  );
}
