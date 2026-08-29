import type { Metadata } from 'next';
import TrustPage from '@/components/patterns/trust-page';
import { trustPages } from '@/content/portfolio';

export const metadata: Metadata = {
  title: 'Privacy notice | Paula Riquelme Portfolio',
  description:
    'Privacy boundary for the static Paula Riquelme Portfolio, including hosting, external links, direct contact, and agent access.',
  alternates: { canonical: '/privacy/' },
};

const PrivacyPage = () => <TrustPage content={trustPages.privacy} />;

export default PrivacyPage;
