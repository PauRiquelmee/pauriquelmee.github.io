import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { profile, site, type TrustPageContent } from '@/content/portfolio';
import { withBasePath } from '@/lib/paths';

type TrustPageProps = {
  content: TrustPageContent;
};

const TrustPage = ({ content }: TrustPageProps) => {
  return (
    <div className="trust-page-shell min-h-svh">
      <header className="trust-page-header flex items-start justify-between border-b border-ink bg-[rgb(243_240_232/94%)] p-4 backdrop-blur-[14px] md:sticky md:top-0 md:z-40 md:min-h-18 md:items-center md:px-[var(--page-gutter)] md:py-0">
        <a
          className="site-brand"
          href={withBasePath('/')}
          aria-label="Paula Riquelme Portfolio home"
        >
          <Image
            src={withBasePath('/brand/pr-monogram.svg')}
            alt=""
            width={32}
            height={32}
          />
          <span>{profile.name}</span>
        </a>
        <nav
          className="trust-page-navigation grid self-auto md:flex md:self-stretch"
          aria-label="Trust pages"
        >
          <a
            className="inline-flex min-h-12 items-center border-l border-line pl-4 text-xs font-semibold tracking-[0.055em] uppercase no-underline hover:bg-ink hover:text-paper-bright md:px-4"
            href={withBasePath('/about/')}
          >
            About
          </a>
          <a
            className="inline-flex min-h-12 items-center border-l border-line pl-4 text-xs font-semibold tracking-[0.055em] uppercase no-underline hover:bg-ink hover:text-paper-bright md:px-4"
            href={withBasePath('/contact/')}
          >
            Contact
          </a>
          <a
            className="inline-flex min-h-12 items-center border-l border-line pl-4 text-xs font-semibold tracking-[0.055em] uppercase no-underline hover:bg-ink hover:text-paper-bright md:px-4"
            href={withBasePath('/privacy/')}
          >
            Privacy
          </a>
        </nav>
      </header>
      <main
        className="trust-page-main mx-auto w-full max-w-[var(--max-width)] px-[var(--page-gutter)] pt-12 pb-[var(--section-space)] md:pt-[clamp(3rem,7vw,7rem)]"
        aria-labelledby="trust-page-title"
      >
        <div className="trust-page-introduction grid gap-5 border-t border-ink pt-4 pb-12 md:grid-cols-[minmax(18rem,0.85fr)_minmax(0,1.15fr)] md:items-end md:gap-[clamp(2rem,6vw,7rem)] md:pb-[clamp(3rem,7vw,7rem)]">
          <h1
            className="max-w-[12ch] font-display text-[clamp(2.6rem,5.4vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.035em] uppercase text-balance"
            id="trust-page-title"
          >
            {content.title}
          </h1>
          <p className="max-w-[68ch] text-base text-muted">
            {content.introduction}
          </p>
        </div>
        <article className="trust-page-record border-t border-ink">
          {content.sections.map((section) => (
            <section
              className="grid gap-5 border-b border-line py-[clamp(2rem,5vw,4.5rem)] md:grid-cols-[minmax(14rem,0.85fr)_minmax(0,1.15fr)] md:gap-x-[clamp(2rem,6vw,7rem)]"
              key={section.heading}
            >
              <h2 className="font-display text-[clamp(1.55rem,2.4vw,2.4rem)] font-bold leading-none uppercase text-balance md:row-span-8">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  className="max-w-[68ch] text-base text-muted md:col-start-2"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>
        {content.links ? (
          <nav
            className="trust-page-actions mt-[clamp(2rem,5vw,4.5rem)] grid border-y border-ink md:flex md:flex-wrap"
            aria-label={`${content.title} resources`}
          >
            {content.links.map((link) => (
              <a
                className="inline-flex min-h-12 items-center gap-2 border-b border-ink px-4 py-3 text-xs font-semibold tracking-[0.055em] uppercase hover:bg-ink hover:text-white first:bg-accent first:text-white last:border-b-0 md:border-r md:border-b-0"
                key={link.label}
                href={
                  link.href.startsWith('/')
                    ? withBasePath(link.href)
                    : link.href
                }
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer noopener' : undefined}
                download={link.label === 'English resume' ? true : undefined}
                aria-label={link.ariaLabel}
              >
                {link.label}
                {link.external ? (
                  <ExternalLink
                    aria-hidden="true"
                    size={15}
                    strokeWidth={1.7}
                  />
                ) : null}
              </a>
            ))}
          </nav>
        ) : null}
      </main>
      <footer className="trust-page-footer border-t border-ink bg-ink px-[var(--page-gutter)] py-4 text-paper-bright">
        <p className="mx-auto w-full max-w-[var(--max-width)] text-xs font-bold tracking-[0.13em] uppercase">
          {site.name} · {profile.location}
        </p>
      </footer>
    </div>
  );
};

export default TrustPage;
