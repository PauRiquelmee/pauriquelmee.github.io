import { createElement } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import type { TrustPageContent } from '@/content/portfolio';
import { withBasePath } from '@/lib/paths';

type TrustPageProps = {
  content: TrustPageContent;
};

const TrustPage = ({ content }: TrustPageProps) => {
  return (
    <div className="trust-page-shell">
      <header className="trust-page-header">
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
          <span>Paula Riquelme</span>
        </a>
        <nav className="trust-page-navigation" aria-label="Trust pages">
          <a href={withBasePath('/about/')}>About</a>
          <a href={withBasePath('/contact/')}>Contact</a>
          <a href={withBasePath('/privacy/')}>Privacy</a>
        </nav>
      </header>
      <main className="trust-page-main" aria-labelledby="trust-page-title">
        <div className="trust-page-introduction">
          <h1 id="trust-page-title">{content.title}</h1>
          <p>{content.introduction}</p>
        </div>
        <article className="trust-page-record">
          {content.sections.map((section) =>
            createElement(
              'section',
              { key: section.heading },
              createElement('h2', null, section.heading),
              ...section.paragraphs.map((paragraph) =>
                createElement('p', { key: paragraph }, paragraph),
              ),
            ),
          )}
        </article>
        {content.links
          ? createElement(
              'nav',
              {
                className: 'trust-page-actions',
                'aria-label': `${content.title} resources`,
              },
              ...content.links.map((link) =>
                createElement(
                  'a',
                  {
                    key: link.label,
                    href: link.href.startsWith('/')
                      ? withBasePath(link.href)
                      : link.href,
                    target: link.external ? '_blank' : undefined,
                    rel: link.external ? 'noreferrer noopener' : undefined,
                    download:
                      link.label === 'English resume' ? true : undefined,
                    'aria-label': link.ariaLabel,
                  },
                  link.label,
                  link.external
                    ? createElement(ExternalLink, {
                        'aria-hidden': true,
                        size: 15,
                        strokeWidth: 1.7,
                      })
                    : null,
                ),
              ),
            )
          : null}
      </main>
      <footer className="trust-page-footer">
        <p>Paula Riquelme Portfolio · Concepción, Chile</p>
      </footer>
    </div>
  );
};

export default TrustPage;
