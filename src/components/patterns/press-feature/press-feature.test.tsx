import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { pressFeatures } from '@/content/portfolio';
import PressFeature from '.';

describe('PressFeature', () => {
  it('keeps the visible title linked and exposes factual media', () => {
    render(<PressFeature feature={pressFeatures[0]} />);

    const link = screen.getByRole('link', {
      name: /Woku, the Hualpén startup/i,
    });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveClass('press-title');
    expect(
      screen.getByAltText(/El Mercurio Innovation feature about Woku/i),
    ).toBeVisible();
  });
});
