import { createElement } from "react";
import SkillGroup from "@/components/patterns/skill-group";
import { language, skillGroups } from "@/content/portfolio";

export default function Capabilities() {
  return (
    <section className="section capabilities" aria-labelledby="capabilities-title">
      <div className="section-heading section-heading-row">
        <h2 id="capabilities-title">Capabilities</h2>
        <p>Strategy, design craft, and implementation in one working practice.</p>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group) =>
          createElement(SkillGroup, { key: group.name, group }),
        )}
      </div>
      <p className="language-note">{language}</p>
    </section>
  );
}
