import { createElement } from "react";
import ExperienceEntry from "@/components/patterns/experience-entry";
import { education, experience } from "@/content/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section experience"
      aria-labelledby="experience-title"
    >
      <div className="section-heading section-heading-row">
        <h2 id="experience-title">Experience</h2>
        <p>Eight years across products, ventures, infrastructure, and the classroom.</p>
      </div>
      <div className="experience-list">
        {experience.map((item) =>
          createElement(ExperienceEntry, {
            key: `${item.company}-${item.role}`,
            item,
          }),
        )}
      </div>
      <div className="education-block">
        <h2>Education</h2>
        <div className="education-list">
          {education.map((item) =>
            createElement(
              "article",
              { key: item.degree },
              createElement("h3", null, item.degree),
              createElement("p", null, `${item.institution}, ${item.year}`),
            ),
          )}
        </div>
      </div>
    </section>
  );
}
