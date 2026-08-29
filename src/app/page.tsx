import Capabilities from '@/components/sections/capabilities';
import Contact from '@/components/sections/contact';
import Experience from '@/components/sections/experience';
import Hero from '@/components/sections/hero';
import RecognitionPress from '@/components/sections/recognition-press';
import SelectedWork from '@/components/sections/selected-work';
import SiteHeader from '@/components/sections/site-header';
import { profile } from '@/content/portfolio';
import { siteUrl } from '@/lib/paths';

const personStructuredData = {
  '@type': 'Person',
  '@id': new URL('#paula-riquelme', siteUrl).toString(),
  name: profile.name,
  jobTitle: 'Product Lead, Product Designer, and Frontend Developer',
  description: profile.summary,
  email: 'mailto:paula.riq.esco@gmail.com',
  homeLocation: {
    '@type': 'Place',
    name: 'Concepción, Biobío, Chile',
  },
  url: siteUrl.toString(),
  sameAs: [
    'https://www.linkedin.com/in/pauriquelme',
    'https://woku.app',
    'https://inpla.ai/en/',
  ],
};

const websiteStructuredData = {
  '@type': 'WebSite',
  '@id': new URL('#website', siteUrl).toString(),
  name: 'Paula Riquelme Portfolio',
  alternateName: 'Paula Riquelme Product Portfolio',
  description:
    "Official evidence-led portfolio for Paula Riquelme's product leadership, product design, and frontend work.",
  url: siteUrl.toString(),
  inLanguage: 'en',
  author: { '@id': new URL('#paula-riquelme', siteUrl).toString() },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [websiteStructuredData, personStructuredData],
};

const Home = () => {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div id="top">
        <SiteHeader />
        <main id="content">
          <Hero />
          <SelectedWork />
          <Experience />
          <Capabilities />
          <RecognitionPress />
        </main>
        <Contact />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
};

export default Home;
