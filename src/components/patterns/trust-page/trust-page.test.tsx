import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TrustPage from '.';

describe('TrustPage', () => {
  it('presents a branded, navigable trust document', () => {
    render(
      <TrustPage
        content={{
          title: 'About Paula Riquelme',
          introduction: 'A factual introduction to Paula Riquelme.',
          sections: [
            {
              heading: 'Professional focus',
              paragraphs: ['Product leadership and product design.'],
            },
          ],
        }}
      />,
    );

    expect(screen.getByRole('banner')).toBeVisible();
    expect(screen.getByRole('main')).toHaveAccessibleName(
      'About Paula Riquelme',
    );
    expect(
      screen.getByRole('link', { name: 'Paula Riquelme Portfolio home' }),
    ).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '/about/',
    );
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '/contact/',
    );
    expect(screen.getByRole('link', { name: 'Privacy' })).toHaveAttribute(
      'href',
      '/privacy/',
    );
    expect(
      screen.getByRole('heading', { name: 'Professional focus' }),
    ).toBeVisible();
  });
});
