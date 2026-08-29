import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: 'Paula Riquelme Portfolio',
    short_name: 'Paula Riquelme',
    description:
      'Portfolio of Paula Riquelme, Product Lead, Product Designer, and Frontend Developer.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#f3f0e8',
    theme_color: '#f3f0e8',
    lang: 'en',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
};

export default manifest;
