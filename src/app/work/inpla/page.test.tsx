import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import InplaCaseStudyPage, { metadata } from './page';

describe('InplaCaseStudyPage', () => {
  it("distinguishes Paula's contribution from the company outcome", () => {
    render(<InplaCaseStudyPage />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Inpla' }),
    ).toBeVisible();
    expect(screen.getByText('May 2025 - January 2026')).toBeVisible();
    expect(
      screen.getAllByText(/before a product existed/i).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText(
        'Co-created the product, user experience, brand, and positioning.',
      ).length,
    ).toBeGreaterThan(0);
    expect(screen.getByText(/documented contributions/i)).toBeVisible();
    expect(
      screen.getByRole('link', { name: 'Visit Inpla website' }),
    ).toHaveAttribute('href', 'https://inpla.ai/en/');
    expect(metadata.alternates).toEqual({ canonical: '/work/inpla/' });
    expect(metadata.openGraph).toMatchObject({ url: '/work/inpla/' });
  });
});
