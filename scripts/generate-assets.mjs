import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PDFDocument, PDFName, PDFString, StandardFonts, rgb } from 'pdf-lib';
import pngToIco from 'png-to-ico';
import sharp from 'sharp';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, '..');
const sourceDirectory = path.join(projectRoot, 'assets', 'source');
const publicDirectory = path.join(projectRoot, 'public');
const temporaryDirectory = path.join(projectRoot, '.asset-generation-temp');

const colors = {
  background: '#f3f0e8',
  foreground: '#11110f',
  accent: '#4338a8',
  muted: '#68665f',
};

await Promise.all([
  mkdir(path.join(publicDirectory, 'brand'), { recursive: true }),
  mkdir(path.join(publicDirectory, 'documents'), { recursive: true }),
  mkdir(path.join(publicDirectory, 'icons'), { recursive: true }),
  mkdir(path.join(publicDirectory, 'media'), { recursive: true }),
  mkdir(path.join(publicDirectory, 'social'), { recursive: true }),
  mkdir(temporaryDirectory, { recursive: true }),
]);

const monogramSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-labelledby="title">
  <title id="title">PR monogram</title>
  <rect width="64" height="64" fill="${colors.foreground}"/>
  <text x="32" y="40" fill="${colors.background}" font-family="Arial, Helvetica, sans-serif" font-size="27" font-weight="700" text-anchor="middle" letter-spacing="-2">PR</text>
</svg>
`.trim();

const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-labelledby="title">
  <title id="title">Paula Riquelme favicon</title>
  <rect width="64" height="64" fill="${colors.accent}"/>
  <text x="32" y="45" fill="#ffffff" font-family="Arial Narrow, Arial, Helvetica, sans-serif" font-size="44" font-weight="700" text-anchor="middle">P</text>
</svg>
`.trim();

const socialCardSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
  <title id="title">Paula Riquelme portfolio social card</title>
  <desc id="desc">Product Lead, Product Designer, and Frontend Developer</desc>
  <rect width="1200" height="630" fill="${colors.background}"/>
  <line x1="54" y1="82" x2="1146" y2="82" stroke="${colors.foreground}" stroke-width="2"/>
  <line x1="54" y1="548" x2="1146" y2="548" stroke="${colors.foreground}" stroke-width="2"/>
  <rect x="54" y="30" width="52" height="52" fill="${colors.foreground}"/>
  <text x="80" y="66" fill="${colors.background}" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700" text-anchor="middle" letter-spacing="-1">PR</text>
  <text x="130" y="65" fill="${colors.foreground}" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="700">Paula Riquelme</text>
  <text x="54" y="220" fill="${colors.foreground}" font-family="Arial Narrow, Arial, Helvetica, sans-serif" font-size="92" font-weight="900" letter-spacing="-3">PRODUCT TO MARKET.</text>
  <text x="54" y="310" fill="${colors.foreground}" font-family="Arial Narrow, Arial, Helvetica, sans-serif" font-size="92" font-weight="900" letter-spacing="-3">DESIGN TO CODE.</text>
  <rect x="54" y="385" width="350" height="6" fill="${colors.accent}"/>
  <text x="54" y="459" fill="${colors.foreground}" font-family="Arial, Helvetica, sans-serif" font-size="34">Product Lead · Product Designer · Frontend Developer</text>
  <text x="54" y="590" fill="${colors.muted}" font-family="Arial, Helvetica, sans-serif" font-size="24">Concepción, Chile</text>
  <text x="1146" y="590" fill="${colors.accent}" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700" text-anchor="end">pauriquelmee.github.io</text>
</svg>
`.trim();

await Promise.all([
  writeFile(
    path.join(publicDirectory, 'brand', 'pr-monogram.svg'),
    monogramSvg,
  ),
  writeFile(
    path.join(publicDirectory, 'brand', 'social-card.svg'),
    socialCardSvg,
  ),
]);

const renderFavicon = async (size, outputPath) => {
  await sharp(Buffer.from(faviconSvg))
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(outputPath);
};

const faviconSizes = [16, 32, 48];
const faviconPaths = [];

for (const size of faviconSizes) {
  const outputPath = path.join(temporaryDirectory, `favicon-${size}.png`);
  faviconPaths.push(outputPath);
  await renderFavicon(size, outputPath);
}

await Promise.all([
  writeFile(path.join(publicDirectory, 'brand', 'favicon.svg'), faviconSvg),
  renderFavicon(192, path.join(publicDirectory, 'icons', 'icon-192.png')),
  renderFavicon(512, path.join(publicDirectory, 'icons', 'icon-512.png')),
  renderFavicon(180, path.join(publicDirectory, 'apple-touch-icon.png')),
  sharp(Buffer.from(socialCardSvg))
    .png({ compressionLevel: 9 })
    .toFile(path.join(publicDirectory, 'social', 'paula-riquelme.png')),
]);

await writeFile(
  path.join(publicDirectory, 'favicon.ico'),
  await pngToIco(faviconPaths),
);

const imageJobs = [
  {
    input: 'woku-site.png',
    output: 'woku-project.webp',
    transform: (image) =>
      image.resize(1600, 900, { fit: 'cover', position: 'top' }),
  },
  {
    input: 'woku.png',
    output: 'woku-evidence.webp',
    transform: (image) =>
      image.extract({ left: 20, top: 18, width: 540, height: 460 }),
  },
  {
    input: 'inpla.png',
    output: 'inpla-project.webp',
    transform: (image) =>
      image.extract({ left: 32, top: 28, width: 1088, height: 720 }),
  },
  {
    input: 'inpla-hero-official.webp',
    output: 'inpla-website.webp',
    transform: (image) =>
      image.resize({ width: 1600, withoutEnlargement: true }),
  },
  {
    input: 'verano1.png',
    output: 'summer-recommendations-01.webp',
    transform: (image) =>
      image.resize({ width: 1200, withoutEnlargement: true }),
  },
  {
    input: 'verano2.png',
    output: 'summer-recommendations-02.webp',
    transform: (image) =>
      image.resize({ width: 1080, withoutEnlargement: true }),
  },
  {
    input: 'fracaso.png',
    output: 'startup-closure-feature.webp',
    transform: (image) =>
      image.extract({ left: 0, top: 0, width: 1103, height: 1240 }),
  },
  {
    input: 'madeinnconce.png',
    output: 'made-inn-conce-2024.webp',
    transform: (image) =>
      image.resize({ width: 1200, withoutEnlargement: true }),
  },
  {
    input: 'optima2017.jpeg',
    output: 'optima-2017.webp',
    transform: (image) =>
      image.resize({ width: 549, withoutEnlargement: true }),
  },
];

for (const job of imageJobs) {
  const image = sharp(path.join(sourceDirectory, job.input)).flatten({
    background: '#ffffff',
  });
  await job
    .transform(image)
    .webp({ quality: 88, smartSubsample: true })
    .toFile(path.join(publicDirectory, 'media', job.output));
}

const pdf = await PDFDocument.create();
pdf.setTitle('Paula Riquelme - English Resume');
pdf.setAuthor('Paula Riquelme');
pdf.setSubject('Product Lead, Product Designer, and Frontend Developer');
pdf.setKeywords([
  'product leadership',
  'product design',
  'frontend development',
]);
pdf.setLanguage('en-US');
pdf.catalog.set(PDFName.of('Lang'), PDFString.of('en-US'));

const regularFont = await pdf.embedFont(StandardFonts.Helvetica);
const boldFont = await pdf.embedFont(StandardFonts.HelveticaBold);
const pageSize = [595.28, 841.89];
const margin = 44;
const contentWidth = pageSize[0] - margin * 2;

const wrapText = (text, font, size, maxWidth) => {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) <= maxWidth) {
      line = candidate;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }

  if (line) lines.push(line);
  return lines;
};

const createPage = () => {
  const page = pdf.addPage(pageSize);
  page.drawLine({
    start: { x: margin, y: pageSize[1] - 34 },
    end: { x: pageSize[0] - margin, y: pageSize[1] - 34 },
    thickness: 1,
    color: rgb(0.07, 0.07, 0.06),
  });
  return page;
};

const drawWrapped = (page, text, options) => {
  const {
    x = margin,
    y,
    size = 9,
    font = regularFont,
    color = rgb(0.07, 0.07, 0.06),
    lineHeight = size * 1.35,
    maxWidth = contentWidth,
  } = options;
  const lines = wrapText(text, font, size, maxWidth);
  lines.forEach((line, index) => {
    page.drawText(line, { x, y: y - index * lineHeight, size, font, color });
  });
  return y - lines.length * lineHeight;
};

const drawSectionTitle = (page, title, y) => {
  page.drawText(title.toUpperCase(), {
    x: margin,
    y,
    size: 8,
    font: boldFont,
    color: rgb(0.26, 0.22, 0.66),
    characterSpacing: 1.2,
  });
  return y - 17;
};

const drawRole = (page, role, company, dates, location, bullets, y) => {
  y = drawWrapped(page, `${role} | ${company}`, {
    y,
    size: 11,
    font: boldFont,
    lineHeight: 13,
  });
  y = drawWrapped(page, `${dates} | ${location}`, {
    y: y + 1,
    size: 8.3,
    color: rgb(0.4, 0.39, 0.36),
    lineHeight: 11,
  });
  for (const bullet of bullets) {
    y = drawWrapped(page, `• ${bullet}`, {
      x: margin + 8,
      y: y - 1,
      size: 8.4,
      lineHeight: 10.8,
      maxWidth: contentWidth - 8,
    });
  }
  return y - 8;
};

let page = createPage();
page.drawText('PAULA RIQUELME', {
  x: margin,
  y: 770,
  size: 27,
  font: boldFont,
  color: rgb(0.07, 0.07, 0.06),
});
page.drawText('PRODUCT LEAD · PRODUCT DESIGNER · FRONTEND DEVELOPER', {
  x: margin,
  y: 746,
  size: 10.5,
  font: boldFont,
  color: rgb(0.26, 0.22, 0.66),
});
page.drawText(
  'Concepción, Biobío, Chile  |  paula.riq.esco@gmail.com  |  linkedin.com/in/pauriquelme',
  {
    x: margin,
    y: 727,
    size: 8.3,
    font: regularFont,
    color: rgb(0.4, 0.39, 0.36),
  },
);

let y = drawSectionTitle(page, 'Profile', 697);
y =
  drawWrapped(
    page,
    "Product Lead, product designer, and tech entrepreneur with 8+ years building and leading digital products. Industrial Engineer with a master's degree in Innovation and Technology Entrepreneurship. Bridges discovery, product strategy, UX/UI, and frontend implementation to turn real customer problems into useful, market-ready products.",
    { y, size: 9.1, lineHeight: 12.3 },
  ) - 10;

y = drawSectionTitle(page, 'Core skills', y);
y = drawWrapped(
  page,
  'Product: Product strategy, product discovery, customer research, roadmaps, UX/UI, prototyping, go-to-market, and agile delivery.',
  { y, size: 8.6, lineHeight: 11.3 },
);
y = drawWrapped(
  page,
  'Design: Figma, Adobe Illustrator, and Adobe Premiere Pro at advanced proficiency.',
  { y: y - 2, size: 8.6, lineHeight: 11.3 },
);
y =
  drawWrapped(
    page,
    'Development: TypeScript, Tailwind CSS, Next.js, Vite, and AI-assisted development with Claude Code, Codex, and Kimi. Working knowledge of MongoDB, NestJS, AWS, and Azure.',
    { y: y - 2, size: 8.6, lineHeight: 11.3 },
  ) - 10;

y = drawSectionTitle(page, 'Selected experience', y);
y = drawRole(
  page,
  'CEO & Co-founder / Product Lead',
  'woku',
  'September 2023 - August 2026',
  'Chile',
  [
    'Leads end-to-end strategy and execution for an AI-powered customer feedback platform, from discovery and workflow design through frontend implementation and launch.',
    'Translates customer needs into rapid feedback capture, NPS and forms, AI-assisted analysis, alerts, and WhatsApp and API integrations.',
    'Connects product, UX/UI, growth, sales, and implementation to align the roadmap with real workflows and business outcomes.',
    'Won more than 50 customers across Chile, Peru, and Colombia, and secured USD 70,000 in non-dilutive, equity-free funding from CORFO.',
  ],
  y,
);
y = drawRole(
  page,
  'Co-founder & Brand Artisan, Product Design',
  'Inpla',
  'May 2025 - January 2026',
  'Chile',
  [
    'Won the first customer, Puerto Coronel, before a product existed by selling the vision alone.',
    'Co-created the product, user experience, brand, and positioning for a platform that allows companies to chat with their data.',
  ],
  y,
);
y = drawRole(
  page,
  'CEO & Co-founder',
  'stow SpA',
  'October 2020 - December 2022',
  'Concepción, Chile',
  [
    'Built a Chilean technology startup from concept to market across product strategy, design, development, sales, and operations.',
    'Selected for Start-Up Chile BUILD in 2022 and received USD 10,000 in non-dilutive, equity-free funding.',
  ],
  y,
);

page = createPage();
page.drawText('PAULA RIQUELME', {
  x: margin,
  y: 770,
  size: 18,
  font: boldFont,
});
page.drawText('EXPERIENCE, EDUCATION & RECOGNITION', {
  x: margin,
  y: 748,
  size: 9.5,
  font: boldFont,
  color: rgb(0.26, 0.22, 0.66),
});
y = drawRole(
  page,
  'Maintenance Planning Engineer',
  'Essbio',
  'May 2019 - July 2021',
  'Concepción, Chile',
  [
    "Led an innovation process with 30 technicians to improve maintenance processes using Carlos Osorio's (defi)2 methodology.",
    'Created data models and decision-support visualizations for maintenance planning.',
  ],
  714,
);
y = drawSectionTitle(page, 'Additional experience', y);
y = drawRole(
  page,
  'Lecturer',
  'Universidad de Concepción',
  '2023',
  'Chile',
  [
    'Taught Business Management and coached students in Project Formulation and Evaluation.',
  ],
  y,
);
y = drawRole(
  page,
  'CEO',
  'Orvita',
  '2018 - 2019',
  'Chile',
  [
    'Led strategy and product development for a digital tourism venture using funding obtained after the OPTIMA 2017 recognition.',
  ],
  y,
);
y = drawSectionTitle(page, 'Education', y);
y = drawWrapped(
  page,
  "Master's in Innovation and Technology Entrepreneurship | Universidad de Concepción, 2023",
  { y, size: 9.2, font: boldFont, lineHeight: 12 },
);
y =
  drawWrapped(
    page,
    'Industrial Engineering | Universidad de Concepción, 2018',
    { y: y - 3, size: 9.2, font: boldFont, lineHeight: 12 },
  ) - 10;
y = drawSectionTitle(page, 'Recognition', y);
y = drawWrapped(page, 'Best Undergraduate Paper | OPTIMA 2017', {
  y,
  size: 10.5,
  font: boldFont,
  lineHeight: 13,
});
y =
  drawWrapped(
    page,
    "Developed an algorithm based on the traveling salesperson problem to recommend tourist routes according to a visitor's interests, available time, and budget. The work received the Best Undergraduate Paper award at the OPTIMA 2017 Congress and made it possible to obtain USD 7,000 from the Chilean Institute for Operations Research, ICHIO, to develop Orvita.",
    { y: y - 1, size: 8.7, lineHeight: 11.5 },
  ) - 10;
y = drawSectionTitle(page, 'Press', y);
y = drawWrapped(
  page,
  'Featured five times in El Mercurio Innovation for Woku, Inpla, entrepreneurship, startup closure, and Made Inn Conce 2024. Diario Concepción also covered the OPTIMA 2017 recognition.',
  { y, size: 8.7, lineHeight: 11.5 },
);
y = drawWrapped(page, 'Portfolio: https://PauRiquelmee.github.io/', {
  y: y - 5,
  size: 8.5,
  font: boldFont,
  lineHeight: 11,
});
y =
  drawWrapped(
    page,
    'Woku: https://woku.app  |  Inpla: https://inpla.ai/en/  |  Methodology: https://defi2.cc/',
    { y: y - 2, size: 8.5, lineHeight: 11 },
  ) - 10;
y = drawSectionTitle(page, 'Languages', y);
drawWrapped(page, 'English: full professional proficiency.', {
  y,
  size: 8.8,
  lineHeight: 11,
});

for (const [index, resumePage] of pdf.getPages().entries()) {
  resumePage.drawText(`${index + 1} / ${pdf.getPageCount()}`, {
    x: pageSize[0] - margin - 24,
    y: 22,
    size: 7.5,
    font: regularFont,
    color: rgb(0.4, 0.39, 0.36),
  });
}

await writeFile(
  path.join(publicDirectory, 'documents', 'paula-riquelme-resume-en.pdf'),
  await pdf.save({ useObjectStreams: true }),
);

await rm(temporaryDirectory, { recursive: true, force: true });
console.log(`Generated ${imageJobs.length + 8} production assets.`);
