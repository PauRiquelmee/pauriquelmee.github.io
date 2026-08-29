import { ExternalLink } from 'lucide-react';
import { contactLinks, profile, site } from '@/content/portfolio';
import { withBasePath } from '@/lib/paths';

const Contact = () => {
  const emailLink = contactLinks[0];
  const secondaryLinks = contactLinks.slice(1);

  return (
    <footer
      id="contact"
      className="contact bg-accent px-[var(--page-gutter)] pt-[var(--section-space)] pb-8 text-white"
      aria-labelledby="contact-title"
    >
      <div className="contact-lead grid items-end gap-8 md:grid-cols-[minmax(0,3fr)_minmax(15rem,1fr)]">
        <h2
          className="max-w-[12ch] font-display text-[clamp(3.7rem,17vw,6rem)] font-bold leading-[0.8] tracking-[-0.04em] uppercase md:text-[clamp(4rem,9vw,9.5rem)]"
          id="contact-title"
        >
          {"Have a difficult product problem to solve? Let's talk."}
        </h2>
        <a
          className="button w-full !border-white !bg-white !text-accent hover:!bg-ink hover:!text-white md:w-auto"
          href={emailLink.href}
        >
          {site.email}
        </a>
      </div>
      <nav
        className="contact-links mt-[clamp(4rem,9vw,9rem)] grid border-y border-white/45 py-4 md:flex md:flex-wrap"
        aria-label="Contact and project links"
      >
        {secondaryLinks.map((link) => (
          <a
            className="inline-flex min-h-12 items-center gap-1.5 border-b border-white/25 py-3 text-xs font-bold tracking-[0.06em] text-white uppercase hover:text-accent-light last:border-b-0 md:border-r md:border-b-0 md:px-5 md:first:pl-0"
            key={link.label}
            href={
              link.href.startsWith('/') ? withBasePath(link.href) : link.href
            }
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer noopener' : undefined}
            download={link.label === 'English resume' ? true : undefined}
            aria-label={link.ariaLabel}
          >
            {link.label}
            {link.external ? (
              <ExternalLink aria-hidden="true" size={15} strokeWidth={1.7} />
            ) : null}
          </a>
        ))}
      </nav>
      <p className="contact-signoff mt-4 text-xs tracking-[0.06em] text-[#dcd8ff] uppercase">
        {profile.name} · {profile.location}
      </p>
    </footer>
  );
};

export default Contact;
