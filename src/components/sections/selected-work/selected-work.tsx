import { createElement } from "react";
import ProjectCard from "@/components/patterns/project-card";
import { projects } from "@/content/portfolio";

export default function SelectedWork() {
  return (
    <section id="work" className="section selected-work" aria-labelledby="work-title">
      <div className="section-heading section-heading-row">
        <h2 id="work-title">Selected work</h2>
        <p>Two ventures, from first customer signal to scaled feedback infrastructure.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) =>
          createElement(ProjectCard, { key: project.name, project }),
        )}
      </div>
    </section>
  );
}
