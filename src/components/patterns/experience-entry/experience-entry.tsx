import { createElement } from "react";
import type { ExperienceItem } from "@/content/portfolio";

export type ExperienceEntryProps = {
  item: ExperienceItem;
};

export default function ExperienceEntry({ item }: ExperienceEntryProps) {
  return (
    <article className="experience-entry">
      <div className="experience-primary">
        <h3>{item.role}</h3>
        <p className="experience-company">{item.company}</p>
      </div>
      <div className="experience-meta">
        <p>{item.dates}</p>
        {item.location ? <p>{item.location}</p> : null}
      </div>
      <ul className="experience-responsibilities">
        {item.responsibilities.map((responsibility) =>
          createElement("li", { key: responsibility }, responsibility),
        )}
      </ul>
    </article>
  );
}
