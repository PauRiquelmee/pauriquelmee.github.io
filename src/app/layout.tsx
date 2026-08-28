import type { Metadata, Viewport } from "next";
import MotionProvider from "@/components/foundations/motion-provider";
import { siteUrl } from "@/lib/paths";
import "./globals.css";

const title = "Paula Riquelme | Product Lead & Product Designer";
const description =
  "Product Lead, product designer, and frontend developer building digital products from customer discovery and strategy through implementation.";
const socialImage = new URL("social/paula-riquelme.png", siteUrl);

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* Impeccable direction contract: portfolio-dossier-v1. The emitted static comment is injected during postbuild. */}
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
