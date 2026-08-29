export const directionContract = `<!--
THESIS: Paula's portfolio works as a product launch dossier and refuses the generic centered introduction followed by interchangeable cards.
OWN-WORLD: Warm paper, near-black ink, committed indigo fields, compressed grotesk type, square controls, thin rules, and evidence treated as editorial artifacts.
STORY: Visitors understand Paula's product leadership, believe it through shipped ventures and published proof, then open selected work, download the resume, or make contact.
FIRST VIEWPORT: A narrow role register frames an oversized left-aligned statement; summary and actions sit below a hard rule; customer, country, and funding evidence closes the viewport.
FORM: Product launch dossier, first approved composition, seed portfolio-dossier-v1.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export const injectDirectionContract = (html) => {
  if (html.includes('portfolio-dossier-v1')) return html;
  return html.replace(
    /<body([^>]*)>/i,
    (openingBody) => `${openingBody}${directionContract}`,
  );
};
