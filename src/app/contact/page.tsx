import type { Metadata } from 'next';
import TrustPage from '@/components/patterns/trust-page';
import { trustPages } from '@/content/portfolio';

export const metadata: Metadata = {
  title: 'Contact Paula Riquelme | Paula Riquelme Portfolio',
  description:
    'Direct and verifiable contact routes for product leadership, product design, strategy, UX/UI, and frontend conversations with Paula Riquelme.',
  alternates: { canonical: '/contact/' },
};

const ContactPage = () => <TrustPage content={trustPages.contact} />;

export default ContactPage;
