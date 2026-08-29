import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import MotionProvider from "@/components/foundations/motion-provider";
import { siteUrl } from "@/lib/paths";
import "./globals.css";

const title = "Paula Riquelme | Product Lead & Product Designer";
const description =
  "Product Lead, product designer, and frontend developer building digital products from customer discovery and strategy through implementation.";
const socialImage = new URL("social/paula-riquelme.png", siteUrl);
const barlow = localFont({
  variable: "--font-barlow",
  display: "swap",
  preload: true,
  fallback: ["Arial"],
  src: [
    {
      path: "../../node_modules/@fontsource/barlow/files/barlow-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});
const barlowCondensed = localFont({
  variable: "--font-barlow-condensed",
  display: "swap",
  preload: true,
  fallback: ["Arial Narrow", "Arial"],
  src: [
    {
      path: "../../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  applicationName: "Paula Riquelme Portfolio",
  authors: [{ name: "Paula Riquelme", url: siteUrl }],
  creator: "Paula Riquelme",
  publisher: "Paula Riquelme",
  keywords: [
    "Product Lead",
    "Product Designer",
    "Frontend Developer",
    "Product Strategy",
    "UX/UI",
    "Concepción",
    "Chile",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Paula Riquelme Portfolio",
    title,
    description,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Paula Riquelme, Product Lead, Product Designer, and Frontend Developer.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
  icons: {
    icon: [
      { url: new URL("favicon.ico", siteUrl) },
      {
        url: new URL("icons/icon-192.png", siteUrl),
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: new URL("apple-touch-icon.png", siteUrl),
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: new URL("manifest.webmanifest", siteUrl).toString(),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3f0e8",
  colorScheme: "light",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <link rel="describedby" href={new URL("llms.txt", siteUrl).toString()} />
      </head>
      <body>
        {/* Impeccable direction contract: portfolio-dossier-v1. The emitted static comment is injected during postbuild. */}
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
