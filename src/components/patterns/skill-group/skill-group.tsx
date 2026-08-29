import type { SkillGroup as SkillGroupData } from '@/content/portfolio';

export type SkillGroupProps = {
  group: SkillGroupData;
};

const SkillGroup = ({ group }: SkillGroupProps) => {
  return (
    <article className="skill-group border-b border-line-dark py-7 last:border-b-0 md:border-r md:border-b-0 md:p-[clamp(1.5rem,3vw,3rem)] md:first:pl-0 md:last:border-r-0">
      <h3 className="font-display text-[clamp(1.55rem,2.4vw,2.4rem)] font-bold leading-none text-accent-light uppercase">
        {group.name}
      </h3>
      <ul className="mt-7 grid list-none gap-3">
        {group.items.map((item) => (
          <li
            className="border-b border-line-dark pb-2.5 text-sm text-[#d1cec5]"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default SkillGroup;
