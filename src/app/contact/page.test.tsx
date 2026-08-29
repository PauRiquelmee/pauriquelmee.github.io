import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContactPage, { metadata } from './page';

describe('ContactPage', () => {
  it('publishes direct, verifiable contact routes', () => {
    render(<ContactPage />);

    expect(
      screen.getByRole('heading', { name: 'Contact Paula Riquelme' }),
    ).toBeVisible();
    expect(
      screen.getByRole('link', { name: 'Email Paula Riquelme' }),
    ).toHaveAttribute('href', 'mailto:paula.riq.esco@gmail.com');
    expect(
      screen.getByRole('link', { name: 'Paula Riquelme on LinkedIn' }),
    ).toHaveAttribute('href', 'https://www.linkedin.com/in/pauriquelme');
    expect(metadata.alternates).toEqual({ canonical: '/contact/' });
  });
});
