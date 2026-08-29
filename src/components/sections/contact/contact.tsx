import { createElement } from "react";
import { ExternalLink } from "lucide-react";
import Button from "@/components/foundations/button";
import { contactLinks } from "@/content/portfolio";
import { withBasePath } from "@/lib/paths";

const Contact = () => {
  const emailLink = contactLinks[0];
  const secondaryLinks = contactLinks.slice(1);

  return (
    <footer id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact-lead">
        <h2 id="contact-title">
          {"Have a difficult product problem to solve? Let's talk."}
        </h2>
        <Button render={<a href={emailLink.href} />}>
          paula.riq.esco@gmail.com
        </Button>
      </div>
      <nav className="contact-links" aria-label="Contact and project links">
        {secondaryLinks.map((link) =>
          createElement(
            "a",
            {
              key: link.label,
              href: link.href.startsWith("/") ? withBasePath(link.href) : link.href,
              target: link.external ? "_blank" : undefined,
              rel: link.external ? "noreferrer noopener" : undefined,
              download: link.label === "English resume" ? true : undefined,
              "aria-label": link.ariaLabel,
            },
            link.label,
            link.external
              ? createElement(ExternalLink, {
                  "aria-hidden": true,
                  size: 15,
                  strokeWidth: 1.7,
                })
              : null,
          ),
        )}
      </nav>
      <p className="contact-signoff">Paula Riquelme · Concepción, Chile</p>
    </footer>
  );
};

export default Contact;
