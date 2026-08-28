import { createElement } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import PressFeature from "@/components/patterns/press-feature";
import {
  methodologyLink,
  pressFeatures,
  recognition,
} from "@/content/portfolio";
import { withBasePath } from "@/lib/paths";

export default function RecognitionPress() {
  return (
    <section
      id="recognition"
      className="section recognition-press"
      aria-labelledby="recognition-title"
    >
      <div className="section-heading section-heading-row">
        <h2 id="recognition-title">Recognition & press</h2>
        <p>Published evidence of product work, entrepreneurship, and regional impact.</p>
      </div>
      <article className="recognition-feature">
        <div className="recognition-copy">
          <a
            className="recognition-title"
            href={recognition.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {recognition.title}
            <ExternalLink aria-hidden="true" size={17} strokeWidth={1.7} />
          </a>
          <p>{recognition.description}</p>
          <p>{recognition.outcome}</p>
          <a
            className="methodology-link"
            href={methodologyLink.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${methodologyLink.label}. Opens in a new tab`}
          >
            {methodologyLink.label}
            <ExternalLink aria-hidden="true" size={16} strokeWidth={1.7} />
          </a>
        </div>
        <Image
          src={withBasePath(recognition.image)}
          alt={recognition.imageAlt}
          width={549}
          height={800}
        />
      </article>
      <div className="press-introduction">
        <h3>Five El Mercurio Innovation features</h3>
        <p>
          {"El Mercurio is one of Chile's leading newspapers. These links open the publication's LinkedIn posts, where each paywalled article reference and preview can be seen."}
        </p>
      </div>
      <div className="press-grid">
        {pressFeatures.map((feature) =>
          createElement(PressFeature, { key: feature.title, feature }),
        )}
      </div>
    </section>
  );
}
