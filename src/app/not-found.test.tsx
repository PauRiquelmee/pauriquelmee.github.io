import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NotFound from './not-found';

describe('NotFound', () => {
  it('helps people and agents recover through canonical indexes', () => {
    render(<NotFound />);

    expect(
      screen.getByRole('heading', { name: 'Page not found' }),
    ).toBeVisible();
    expect(
      screen.getByRole('link', { name: 'Portfolio home' }),
    ).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Sitemap' })).toHaveAttribute(
      'href',
      '/sitemap.xml',
    );
    expect(
      screen.getByRole('link', { name: 'Agent instructions' }),
    ).toHaveAttribute('href', '/llms.txt');
    expect(
      screen.getByRole('link', { name: 'Markdown recovery guide' }),
    ).toHaveAttribute('href', '/404.md');
  });
});
