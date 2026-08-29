import { site } from '@/content/portfolio';

export const siteUrl = new URL(site.origin);

export const withBasePath = (pathname: string) => {
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
};
