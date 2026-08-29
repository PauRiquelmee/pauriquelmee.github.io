import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PrivacyPage, { metadata } from './page';

describe('PrivacyPage', () => {
  it('explains the static portfolio data boundary', () => {
    render(<PrivacyPage />);

    expect(
      screen.getByRole('heading', { name: 'Privacy notice' }),
    ).toBeVisible();
    expect(screen.getByText(/does not include a contact form/)).toBeVisible();
    expect(metadata.alternates).toEqual({ canonical: '/privacy/' });
  });
});
