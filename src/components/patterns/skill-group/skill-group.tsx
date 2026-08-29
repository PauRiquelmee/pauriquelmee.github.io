import { createElement } from 'react';
import type { SkillGroup as SkillGroupData } from '@/content/portfolio';

export type SkillGroupProps = {
  group: SkillGroupData;
};

const SkillGroup = ({ group }: SkillGroupProps) => {
  return (
    <article className="skill-group">
      <h3>{group.name}</h3>
      <ul>
        {group.items.map((item) => createElement('li', { key: item }, item))}
      </ul>
    </article>
  );
};

export default SkillGroup;
