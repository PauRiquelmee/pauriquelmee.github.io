import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import type { PressFeature as PressFeatureData } from '@/content/portfolio';
import { withBasePath } from '@/lib/paths';

export type PressFeatureProps = {
  feature: PressFeatureData;
};

const PressFeature = ({ feature }: PressFeatureProps) => {
  return (
    <article className="press-feature col-span-12 flex min-w-0 flex-col bg-paper p-5 sm:col-span-6 lg:col-span-4 lg:[&:nth-child(4)]:col-span-6 lg:[&:nth-child(5)]:col-span-6">
      <div className="press-media mb-5 grid aspect-[5/3] auto-cols-fr grid-flow-col overflow-hidden border border-line bg-paper-bright">
        {feature.images.map((image) => (
          <Image
            key={image.src}
            src={withBasePath(image.src)}
            alt={image.alt}
            width={800}
            height={640}
            className="h-full min-w-0 w-full object-cover object-top"
          />
        ))}
      </div>
      <span className="press-source text-xs font-bold tracking-[0.13em] text-accent uppercase">
        {feature.source}
      </span>
      <a
        className="press-title mt-3 inline-flex items-start gap-2 text-sm font-bold leading-[1.28] hover:text-accent"
        href={feature.href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {feature.title}
        <ExternalLink aria-hidden="true" size={16} strokeWidth={1.7} />
      </a>
    </article>
  );
};

export default PressFeature;
