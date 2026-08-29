export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
  ariaLabel?: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  name: string;
  role: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  imageWidth: number;
  imageHeight: number;
  outcomes: string[];
  metrics: Metric[];
  previewStatus: "blocked" | "unavailable";
  previewMessage: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  dates: string;
  location?: string;
  href?: string;
  responsibilities: string[];
};

export type SkillGroup = {
  name: string;
  items: string[];
};

export type PressFeature = {
  title: string;
  source: string;
  href: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
};

export const profile = {
  name: "Paula Riquelme",
  roles: ["Product Lead", "Product Designer", "Frontend Developer"],
  location: "Concepción, Biobío, Chile",
  headline: "I design products, bring them to market, and can build them too.",
  summary:
    "Product Lead, product designer, and frontend developer. I connect customer discovery, strategy, UX/UI, and implementation to turn real problems into useful, market-ready products.",
  longSummary:
    "Product Lead, product designer, and tech entrepreneur with 8+ years building and leading digital products. Industrial Engineer with a master's degree in Innovation and Technology Entrepreneurship.",
};

export const contactLinks: LinkItem[] = [
  {
    label: "Email",
    href: "mailto:paula.riq.esco@gmail.com",
    ariaLabel: "Email Paula Riquelme",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pauriquelme",
    external: true,
    ariaLabel: "Open Paula Riquelme on LinkedIn in a new tab",
  },
  {
    label: "Woku",
    href: "https://woku.app",
    external: true,
    ariaLabel: "Open Woku in a new tab",
  },
  {
    label: "Inpla",
    href: "https://inpla.ai/en/",
    external: true,
    ariaLabel: "Open Inpla in a new tab",
  },
  {
    label: "English resume",
    href: "/documents/paula-riquelme-resume-en.pdf",
    ariaLabel: "Download Paula Riquelme's English resume as a PDF",
  },
  {
    label: "llms.txt",
    href: "/llms.txt",
    ariaLabel: "Read the portfolio llms.txt file",
  },
];

export const projects: Project[] = [
  {
    name: "Woku",
    role: "CEO & Co-founder / Product Lead",
    description: "AI-powered customer-feedback platform",
    href: "https://woku.app",
    image: "/media/woku-project.webp",
    imageAlt:
      "Woku website showing its customer-feedback proposition and an audio feedback interface.",
    imageCaption: "Current Woku website, captured in English in August 2026.",
    imageWidth: 1600,
    imageHeight: 900,
    outcomes: [
      "Leads the product from discovery and workflow design through frontend implementation and launch.",
      "Translates customer needs into rapid feedback capture, NPS and forms, AI-assisted analysis, alerts, and WhatsApp and API integrations.",
      "Connects product, UX/UI, growth, sales, and implementation to real business outcomes.",
    ],
    metrics: [
      { value: "50+", label: "customers" },
      { value: "3", label: "countries: Chile, Peru, and Colombia" },
      { value: "USD 70K", label: "non-dilutive CORFO funding" },
    ],
    previewStatus: "blocked",
    previewMessage:
      "Woku prevents third-party embedding through X-Frame-Options. The current website screenshot remains available here, and the live website opens in a new tab.",
  },
  {
    name: "Inpla",
    role: "Co-founder & Brand Artisan, Product Design",
    description: "Platform for chatting with company data",
    href: "https://inpla.ai/en/",
    image: "/media/inpla-website.webp",
    imageAlt:
      "Inpla product interface showing an AI conversation beside a monthly revenue dashboard.",
    imageCaption:
      "Official Inpla product interface from inpla.ai, accessed in August 2026.",
    imageWidth: 1600,
    imageHeight: 1370,
    outcomes: [
      "Won Puerto Coronel as the first customer before a product existed by selling the vision alone.",
      "Co-created the product, user experience, brand, and positioning.",
      "Helped shape a platform that allows companies to chat with their data.",
    ],
    metrics: [
      { value: "01", label: "first customer: Puerto Coronel" },
      { value: "Pre-product", label: "commercial validation" },
    ],
    previewStatus: "blocked",
    previewMessage:
      "Inpla prevents third-party embedding through X-Frame-Options. The official product image remains available here, and the live website opens in a new tab.",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "CEO & Co-founder / Product Lead",
    company: "woku",
    dates: "September 2023 - August 2026",
    location: "Chile",
    href: "https://woku.app",
    responsibilities: [
      "Leads end-to-end strategy and execution for an AI-powered customer feedback platform, from discovery and workflow design through frontend implementation and launch.",
      "Translates customer needs into features for rapid feedback capture, NPS and forms, AI-assisted analysis, alerts, and WhatsApp and API integrations.",
      "Connects product, UX/UI, growth, sales, and implementation to keep the roadmap aligned with business outcomes and real customer workflows.",
      "Won more than 50 customers across Chile, Peru, and Colombia.",
      "Secured USD 70,000 in non-dilutive, equity-free funding from CORFO.",
    ],
  },
  {
    role: "Co-founder & Brand Artisan, Product Design",
    company: "Inpla",
    dates: "May 2025 - January 2026",
    location: "Chile",
    href: "https://inpla.ai/en/",
    responsibilities: [
      "Won the first customer, Puerto Coronel, before a product existed by selling the vision alone.",
      "Co-created the product, user experience, brand, and positioning.",
      "Helped shape a platform that allows companies to chat with their data.",
    ],
  },
  {
    role: "CEO & Co-founder",
    company: "stow SpA",
    dates: "October 2020 - December 2022",
    location: "Concepción, Chile",
    responsibilities: [
      "Built a Chilean technology startup from concept to market.",
      "Contributed directly across product strategy, design, development, sales, and operations.",
      "Selected for the third cohort of Start-Up Chile's BUILD program in 2022.",
      "Received USD 10,000 in non-dilutive, equity-free funding from Start-Up Chile.",
    ],
  },
  {
    role: "Maintenance Planning Engineer",
    company: "Essbio",
    dates: "May 2019 - July 2021",
    location: "Concepción, Chile",
    responsibilities: [
      "Led an innovation process with 30 technicians to improve the company's maintenance processes.",
      "Used Carlos Osorio's (defi)2 innovation methodology.",
      "Created data models and decision-support visualizations for maintenance planning.",
    ],
  },
  {
    role: "Lecturer",
    company: "Universidad de Concepción",
    dates: "2023",
    responsibilities: [
      "Taught Business Management.",
      "Coached students in Project Formulation and Evaluation.",
    ],
  },
  {
    role: "CEO",
    company: "Orvita",
    dates: "2018 - 2019",
    responsibilities: [
      "Led strategy and product development for a digital tourism venture.",
      "Developed the venture using funding obtained after the OPTIMA 2017 recognition.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Product",
    items: [
      "Product strategy",
      "Product discovery",
      "Customer research",
      "Roadmaps",
      "UX/UI",
      "Prototyping",
      "Go-to-market",
      "Agile delivery",
    ],
  },
  {
    name: "Design",
    items: [
      "Figma: advanced",
      "Adobe Illustrator: advanced",
      "Adobe Premiere Pro: advanced",
    ],
  },
  {
    name: "Development",
    items: [
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Vite",
      "AI-assisted development with Claude Code, Codex, and Kimi",
      "Working knowledge of MongoDB, NestJS, AWS, and Azure",
    ],
  },
];

export const education = [
  {
    degree: "Master's in Innovation and Technology Entrepreneurship",
    institution: "Universidad de Concepción",
    year: "2023",
  },
  {
    degree: "Industrial Engineering",
    institution: "Universidad de Concepción",
    year: "2018",
  },
];

export const recognition = {
  title: "Best Undergraduate Paper | OPTIMA 2017",
  description:
    "Developed an algorithm based on the traveling salesperson problem to recommend tourist routes according to a visitor's interests, available time, and budget. The work received the Best Undergraduate Paper award at the OPTIMA 2017 Congress.",
  outcome:
    "The recognition made it possible to obtain USD 7,000 in funding from the Chilean Institute for Operations Research, ICHIO, to develop Orvita.",
  href: "https://assets.diarioconcepcion.cl/2017/12/Diario-Concepci%C3%B3n-10-12-2017.pdf",
  image: "/media/optima-2017.webp",
  imageAlt:
    "Diario Concepción article about Paula Riquelme's award-winning tourism route model at OPTIMA 2017.",
};

export const methodologyLink: LinkItem = {
  label: "Carlos Osorio's (defi)2 innovation methodology",
  href: "https://defi2.cc/",
  external: true,
  ariaLabel: "Open the (defi)2 innovation methodology in a new tab",
};

export const pressFeatures: PressFeature[] = [
  {
    title:
      "Woku, the Hualpén startup seeking to make rapid customer feedback easier",
    source: "El Mercurio Innovation",
    href: "https://www.linkedin.com/posts/juevesdeinnovaciaejn-internacionalizacion-ugcPost-7242352081439735809-5dJQ/",
    images: [
      {
        src: "/media/woku-evidence.webp",
        alt: "El Mercurio Innovation feature about Woku, with Paula Riquelme and Diego Orrego above the article headline.",
      },
    ],
  },
  {
    title: "From podcasts to books: 10 entrepreneurs recommend content for the summer",
    source: "El Mercurio Innovation",
    href: "https://www.linkedin.com/posts/juevesdeinnovaciaejn-congresofuturo-arte-ugcPost-7282839605878358017-dJf1/",
    images: [
      {
        src: "/media/summer-recommendations-01.webp",
        alt: "Opening page of El Mercurio Innovation's summer recommendations feature with contributions from Chilean entrepreneurs.",
      },
      {
        src: "/media/summer-recommendations-02.webp",
        alt: "Second page of the summer recommendations feature, including Paula Riquelme's recommendation of Building a StoryBrand.",
      },
    ],
  },
  {
    title: "New startup that lets companies chat with their data signs Puerto Coronel",
    source: "El Mercurio Innovation",
    href: "https://www.linkedin.com/posts/innovaciaejn-emprendedores-tecnologaeda-ugcPost-7348780238723538946-WB-M/",
    images: [
      {
        src: "/media/inpla-project.webp",
        alt: "El Mercurio Innovation feature announcing Inpla's Puerto Coronel customer, with the founding team.",
      },
    ],
  },
  {
    title: "What is it like to shut down a startup?",
    source: "El Mercurio Innovation",
    href: "https://www.linkedin.com/posts/juevesdeinnovaciaejn-startup-emprender-ugcPost-7211913946209886208-nLoJ/",
    images: [
      {
        src: "/media/startup-closure-feature.webp",
        alt: "El Mercurio Innovation feature about startup closures, including a quote from Paula Riquelme.",
      },
    ],
  },
  {
    title: "Made Inn Conce 2024: Four new startups from Biobío to watch",
    source: "El Mercurio Innovation",
    href: "https://www.linkedin.com/posts/juevesdeinnovacion-puertovaras-salmoneras-ugcPost-7196553065276080130-T_3e/",
    images: [
      {
        src: "/media/made-inn-conce-2024.webp",
        alt: "El Mercurio Innovation feature on four Biobío startups, with Paula Riquelme and other founders at Made Inn Conce 2024.",
      },
    ],
  },
];

export const language = "English: full professional proficiency.";
