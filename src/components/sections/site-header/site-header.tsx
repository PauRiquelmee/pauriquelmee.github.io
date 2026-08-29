import Image from 'next/image';
import MobileNavigation from '@/components/patterns/mobile-navigation';
import { profile } from '@/content/portfolio';
import { withBasePath } from '@/lib/paths';

const SiteHeader = () => {
  return (
    <header className="site-header sticky top-0 z-40 flex min-h-16 items-center justify-between border-b border-ink bg-[rgb(243_240_232/94%)] px-[var(--page-gutter)] backdrop-blur-[14px] md:min-h-18">
      <a className="site-brand" href="#top" aria-label="Paula Riquelme home">
        <Image
          src={withBasePath('/brand/pr-monogram.svg')}
          alt=""
          width={32}
          height={32}
        />
        <span>{profile.name}</span>
      </a>
      <nav
        className="desktop-navigation hidden items-center gap-[clamp(1rem,2.2vw,2.4rem)] text-xs font-semibold tracking-[0.06em] uppercase min-[1088px]:flex [&_a]:no-underline [&_a]:hover:text-accent [&_a:last-child]:bg-ink [&_a:last-child]:px-3.5 [&_a:last-child]:py-2.5 [&_a:last-child]:text-paper-bright [&_a:last-child]:hover:bg-accent [&_a:last-child]:hover:text-white"
        aria-label="Primary navigation"
      >
        <a href="#work">Selected work</a>
        <a href="#experience">Experience</a>
        <a href="#recognition">Recognition</a>
        <a
          href={withBasePath('/documents/paula-riquelme-resume-en.pdf')}
          download
        >
          English resume
        </a>
        <a href="#contact">Contact</a>
      </nav>
      <MobileNavigation />
    </header>
  );
};

export default SiteHeader;
