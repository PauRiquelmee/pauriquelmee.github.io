import TrustPage from '@/components/patterns/trust-page';
import type { TrustPageContent } from '@/content/portfolio';

const notFoundContent = {
  title: 'Page not found',
  introduction:
    'The requested path does not exist in the Paula Riquelme Portfolio. Use the canonical indexes below to recover without guessing another URL.',
  sections: [
    {
      heading: 'Where to look next',
      paragraphs: [
        'The portfolio home presents selected work, experience, capabilities, education, recognition, press, and contact routes. The sitemap lists every public page. The llms.txt file tells agents which sources to use and how to preserve factual claims.',
      ],
    },
  ],
  links: [
    { label: 'Portfolio home', href: '/' },
    { label: 'Sitemap', href: '/sitemap.xml' },
    { label: 'Agent instructions', href: '/llms.txt' },
    { label: 'Markdown recovery guide', href: '/404.md' },
  ],
} satisfies TrustPageContent;

const NotFound = () => <TrustPage content={notFoundContent} />;

export default NotFound;
