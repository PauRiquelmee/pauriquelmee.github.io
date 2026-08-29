import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import MotionProvider from '@/components/foundations/motion-provider';
import { profile, site } from '@/content/portfolio';
import { siteUrl } from '@/lib/paths';
import './globals.css';

const socialImage = new URL(site.socialImage.slice(1), siteUrl);
const barlow = localFont({
  variable: '--font-barlow',
  display: 'optional',
  preload: true,
  fallback: ['Arial'],
  src: [
    {
      path: '../../node_modules/@fontsource/barlow/files/barlow-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});
const barlowCondensed = localFont({
  variable: '--font-barlow-condensed',
  display: 'optional',
  preload: true,
  fallback: ['Arial Narrow', 'Arial'],
  src: [
    {
      path: '../../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-700-normal.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  keywords: [
    site.name,
    profile.name,
    ...profile.roles,
    'Product Strategy',
    'UX/UI',
    'Concepción',
    'Chile',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: '/',
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: `${profile.name}, ${profile.roles.join(', ')}.`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [socialImage],
  },
  icons: {
    icon: [
      {
        url: new URL('icons/icon-192.png', siteUrl),
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: new URL('apple-touch-icon.png', siteUrl),
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: new URL('manifest.webmanifest', siteUrl).toString(),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: site.themeColor,
  colorScheme: 'light',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <head>
        <link
          rel="describedby"
          href={new URL('llms.txt', siteUrl).toString()}
        />
        <link
          rel="alternate"
          type="text/markdown"
          title="Paula Riquelme Portfolio in Markdown"
          href={new URL('index.md', siteUrl).toString()}
        />
      </head>
      <body>
        {/* Impeccable direction contract: portfolio-dossier-v1. The emitted static comment is injected during postbuild. */}
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
