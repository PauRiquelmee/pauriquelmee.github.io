import { describe, expect, it } from 'vitest';
import { siteUrl, withBasePath } from '@/lib/paths';

describe('withBasePath', () => {
  it('keeps assets at the user-site root', () => {
    expect(withBasePath('/media/woku.webp')).toBe('/media/woku.webp');
  });

  it('normalizes a missing leading slash', () => {
    expect(withBasePath('resume.pdf')).toBe('/resume.pdf');
  });
});

describe('siteUrl', () => {
  it('uses the authenticated GitHub Pages user-site URL', () => {
    expect(siteUrl.toString()).toBe('https://pauriquelmee.github.io/');
  });
});
