import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import WokuCaseStudyPage, { metadata } from './page';

describe('WokuCaseStudyPage', () => {
  it('presents a factual, navigable case study with canonical metadata', () => {
    render(<WokuCaseStudyPage />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Woku' }),
    ).toBeVisible();
    for (const heading of [
      'Project overview',
      'Context and problem',
      "Paula's role and responsibilities",
      'Constraints and initial conditions',
      'Customer and market signal',
      'Product and design decisions',
      'Implementation and delivery',
      'Outcomes and measurable evidence',
      'Supporting media and external evidence',
      'Reflection and key lesson',
    ]) {
      expect(screen.getByRole('heading', { name: heading })).toBeVisible();
    }
    expect(screen.getByText('September 2023 - August 2026')).toBeVisible();
    expect(
      screen.getByRole('link', { name: 'Visit Woku website' }),
    ).toHaveAttribute('rel', 'noreferrer noopener');
    expect(
      screen.getByRole('link', { name: 'Return to selected work' }),
    ).toHaveAttribute('href', '/#work');
    expect(screen.getByRole('link', { name: 'Contact Paula' })).toHaveAttribute(
      'href',
      '/#contact',
    );
    expect(metadata.alternates).toEqual({ canonical: '/work/woku/' });
    expect(metadata.openGraph).toMatchObject({ url: '/work/woku/' });
  });
});
