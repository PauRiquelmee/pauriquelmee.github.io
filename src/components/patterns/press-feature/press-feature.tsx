import { createElement } from "react";
import { ExternalLink } from "lucide-react";
import type { PressFeature as PressFeatureData } from "@/content/portfolio";
import { withBasePath } from "@/lib/paths";

export type PressFeatureProps = {
  feature: PressFeatureData;
};

const PressFeature = ({ feature }: PressFeatureProps) => {
  return (
    <article className="press-feature">
      <div className="press-media">
        {feature.images.map((image) =>
          createElement("img", {
            key: image.src,
            src: withBasePath(image.src),
            alt: image.alt,
            width: 800,
            height: 640,
            loading: "lazy",
          }),
        )}
      </div>
      <span className="press-source">{feature.source}</span>
      <a
        className="press-title"
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
