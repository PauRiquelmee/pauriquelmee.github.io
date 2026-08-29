import { createElement } from 'react';
import { ExternalLink } from 'lucide-react';
import type { ExperienceItem } from '@/content/portfolio';

export type ExperienceEntryProps = {
  item: ExperienceItem;
};

const ExperienceEntry = ({ item }: ExperienceEntryProps) => {
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
        {item.responsibilities.map((responsibility) => {
          const text =
            typeof responsibility === 'string'
              ? responsibility
              : responsibility.text;
          const finalWordStart = text.lastIndexOf(' ') + 1;

          return createElement(
            'li',
            { key: text },
            typeof responsibility === 'string'
              ? responsibility
              : createElement(
                  'a',
                  {
                    className: 'experience-methodology-link',
                    href: responsibility.externalLink.href,
                    target: '_blank',
                    rel: 'noreferrer noopener',
                    'aria-label': responsibility.externalLink.ariaLabel,
                  },
                  responsibility.text.slice(0, finalWordStart),
                  createElement(
                    'span',
                    { className: 'experience-methodology-link-ending' },
                    responsibility.text.slice(finalWordStart),
                    createElement(ExternalLink, {
                      'aria-hidden': true,
                      size: 15,
                      strokeWidth: 1.7,
                    }),
                  ),
                ),
          );
        })}
      </ul>
    </article>
  );
};

export default ExperienceEntry;
