import type { Metadata } from 'next';
import TrustPage from '@/components/patterns/trust-page';
import { trustPages } from '@/content/portfolio';

export const metadata: Metadata = {
  title: 'About Paula Riquelme | Paula Riquelme Portfolio',
  description:
    "Verified background, selected product record, and primary evidence for Paula Riquelme's product leadership, design, and frontend work.",
  alternates: { canonical: '/about/' },
};

const AboutPage = () => <TrustPage content={trustPages.about} />;

export default AboutPage;
