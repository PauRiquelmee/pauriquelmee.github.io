import ExperienceEntry from '@/components/patterns/experience-entry';
import { education, experience } from '@/content/portfolio';

const Experience = () => {
  return (
    <section
      id="experience"
      className="section experience"
      aria-labelledby="experience-title"
    >
      <div className="section-heading section-heading-row">
        <h2 id="experience-title">Experience</h2>
        <p>
          Eight years across products, ventures, infrastructure, and the
          classroom.
        </p>
      </div>
      <div className="experience-list border-t border-ink">
        {experience.map((item) => (
          <ExperienceEntry key={item.id} item={item} />
        ))}
      </div>
      <div className="education-block mt-[var(--section-space)] grid gap-8 border-t border-ink pt-4 md:grid-cols-[1fr_2.8fr]">
        <h2 className="mb-4 font-display text-[clamp(2.6rem,5.4vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.035em] uppercase md:mb-0">
          Education
        </h2>
        <div className="education-list grid gap-px border border-line bg-line md:grid-cols-2">
          {education.map((item) => (
            <article
              className="bg-paper p-[clamp(1.25rem,2vw,2rem)]"
              key={item.degree}
            >
              <h3 className="font-display text-[clamp(1.55rem,2.4vw,2.4rem)] font-bold leading-none uppercase">
                {item.degree}
              </h3>
              <p className="mt-3 text-muted">
                {item.institution}, {item.year}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
