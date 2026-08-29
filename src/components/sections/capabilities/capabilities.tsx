import SkillGroup from '@/components/patterns/skill-group';
import { language, skillGroups } from '@/content/portfolio';

const Capabilities = () => {
  return (
    <section
      className="section capabilities max-w-none bg-ink text-paper-bright"
      aria-labelledby="capabilities-title"
    >
      <div className="section-heading section-heading-row mx-auto w-full max-w-[calc(var(--max-width)-2*var(--page-gutter))] border-line-dark">
        <h2 id="capabilities-title">Capabilities</h2>
        <p className="!text-[#aaa79e]">
          Strategy, design craft, and implementation in one working practice.
        </p>
      </div>
      <div className="skill-grid mx-auto grid w-full max-w-[calc(var(--max-width)-2*var(--page-gutter))] border-y border-line-dark md:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillGroup key={group.name} group={group} />
        ))}
      </div>
      <p className="language-note mx-auto w-full max-w-[calc(var(--max-width)-2*var(--page-gutter))] pt-4 text-xs tracking-[0.08em] text-[#aaa79e] uppercase">
        {language}
      </p>
    </section>
  );
};

export default Capabilities;
