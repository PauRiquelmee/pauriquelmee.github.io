import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/paths';

export const dynamic = 'force-static';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: new URL('sitemap.xml', siteUrl).toString(),
    host: siteUrl.origin,
  };
};

export default robots;
