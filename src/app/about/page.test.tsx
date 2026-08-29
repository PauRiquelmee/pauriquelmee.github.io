import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AboutPage, { metadata } from './page';

describe('AboutPage', () => {
  it('publishes factual background with canonical metadata', () => {
    render(<AboutPage />);

    expect(
      screen.getByRole('heading', { name: 'About Paula Riquelme' }),
    ).toBeVisible();
    expect(screen.getByText(/8\+ years building and leading/)).toBeVisible();
    expect(
      screen.getByRole('link', {
        name: "Download Paula Riquelme's English resume",
      }),
    ).toHaveAttribute('download');
    expect(metadata.alternates).toEqual({ canonical: '/about/' });
  });
});
