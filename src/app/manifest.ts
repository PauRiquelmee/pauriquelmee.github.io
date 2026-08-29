import type { MetadataRoute } from 'next';
import { profile, site } from '@/content/portfolio';

export const dynamic = 'force-static';

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: site.name,
    short_name: profile.name,
    description: site.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: site.themeColor,
    theme_color: site.themeColor,
    lang: site.language,
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
