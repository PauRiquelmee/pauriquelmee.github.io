import { ExternalLink } from 'lucide-react';
import type { ExperienceItem } from '@/content/portfolio';

export type ExperienceEntryProps = {
  item: ExperienceItem;
};

const ExperienceEntry = ({ item }: ExperienceEntryProps) => {
  return (
    <article className="experience-entry grid gap-4 border-b border-line py-[clamp(1.5rem,3vw,2.5rem)] md:grid-cols-[1fr_0.7fr_1.5fr] md:gap-[clamp(1.25rem,3vw,3rem)] min-[1088px]:grid-cols-[1.15fr_0.8fr_2fr]">
      <div className="experience-primary">
        <h3 className="font-display text-[clamp(1.55rem,2.4vw,2.4rem)] font-bold leading-none uppercase">
          {item.role}
        </h3>
        <p className="experience-company mt-2 font-bold text-accent">
          {item.company}
        </p>
      </div>
      <div className="experience-meta text-sm text-muted [&_p+p]:mt-1.5">
        <p>{item.dates}</p>
        {item.location ? <p>{item.location}</p> : null}
      </div>
      <ul className="experience-responsibilities grid list-none gap-2.5 text-sm text-muted [&_li]:border-l [&_li]:border-line [&_li]:pl-4">
        {item.responsibilities.map((responsibility) => {
          const text =
            typeof responsibility === 'string'
              ? responsibility
              : responsibility.text;
          const finalWordStart = text.lastIndexOf(' ') + 1;

          return (
            <li key={text}>
              {typeof responsibility === 'string' ? (
                responsibility
              ) : (
                <a
                  className="experience-methodology-link hover:!text-accent"
                  href={responsibility.externalLink.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={responsibility.externalLink.ariaLabel}
                >
                  {responsibility.text.slice(0, finalWordStart)}
                  <span className="experience-methodology-link-ending whitespace-nowrap [&_svg]:ml-1 [&_svg]:inline [&_svg]:align-[-0.15em]">
                    {responsibility.text.slice(finalWordStart)}
                    <ExternalLink
                      aria-hidden="true"
                      size={15}
                      strokeWidth={1.7}
                    />
                  </span>
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default ExperienceEntry;
