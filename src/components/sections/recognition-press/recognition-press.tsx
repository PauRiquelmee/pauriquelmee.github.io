import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import PressFeature from '@/components/patterns/press-feature';
import { pressFeatures, recognition } from '@/content/portfolio';
import { withBasePath } from '@/lib/paths';

const RecognitionPress = () => {
  return (
    <section
      id="recognition"
      className="section recognition-press"
      aria-labelledby="recognition-title"
    >
      <div className="section-heading section-heading-row">
        <h2 id="recognition-title">Recognition & press</h2>
        <p>
          Published evidence of product work, entrepreneurship, and regional
          impact.
        </p>
      </div>
      <article className="recognition-feature grid min-h-[28rem] min-w-0 border border-ink bg-accent text-white md:grid-cols-[1.6fr_minmax(15rem,0.8fr)]">
        <div className="recognition-copy flex min-w-0 flex-col justify-center p-[clamp(1.5rem,4vw,4rem)]">
          <a
            className="recognition-title inline-flex max-w-full min-w-0 flex-wrap items-center gap-2 font-display text-[clamp(2.5rem,14vw,3.2rem)] font-bold leading-[0.88] tracking-[-0.035em] text-white uppercase decoration-2 hover:text-accent-light md:max-w-[12ch] md:text-[clamp(3rem,6vw,6.5rem)]"
            href={recognition.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {recognition.title}
            <ExternalLink aria-hidden="true" size={17} strokeWidth={1.7} />
          </a>
          <p className="mt-5 max-w-[45rem] text-[#e9e7ff]">
            {recognition.description}
          </p>
          <p className="mt-5 max-w-[45rem] text-[#e9e7ff]">
            {recognition.outcome}
          </p>
        </div>
        <Image
          src={withBasePath(recognition.image)}
          alt={recognition.imageAlt}
          width={549}
          height={800}
          className="h-96 w-full min-w-0 border-t border-ink object-cover object-top md:h-full md:border-t-0 md:border-l"
        />
      </article>
      <div className="press-introduction my-[var(--section-space)] mb-8 grid items-end gap-8 md:grid-cols-2">
        <h3 className="font-display text-[clamp(1.55rem,2.4vw,2.4rem)] font-bold leading-none uppercase">
          Five El Mercurio Innovation features
        </h3>
        <p className="max-w-[36rem] text-muted md:justify-self-end">
          {
            "El Mercurio is one of Chile's leading newspapers. These links open the publication's LinkedIn posts, where each paywalled article reference and preview can be seen."
          }
        </p>
      </div>
      <div className="press-grid grid grid-cols-12 gap-px border border-ink bg-ink">
        {pressFeatures.map((feature) => (
          <PressFeature key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default RecognitionPress;
