import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from './page';

describe('Home', () => {
  it('assembles the complete single-page portfolio', () => {
    render(<Home />);

    expect(screen.getByRole('banner')).toBeVisible();
    expect(screen.getByRole('main')).toHaveAttribute('id', 'content');
    expect(
      screen.getByRole('heading', { name: 'Selected work' }),
    ).toBeVisible();
    expect(screen.getByRole('heading', { name: 'Experience' })).toBeVisible();
    expect(screen.getByRole('heading', { name: 'Capabilities' })).toBeVisible();
    expect(
      screen.getByRole('heading', { name: 'Recognition & press' }),
    ).toBeVisible();
    expect(screen.getByRole('contentinfo')).toBeVisible();
  });

  it('provides a keyboard skip link to the primary content', () => {
    render(<Home />);

    expect(
      screen.getByRole('link', { name: 'Skip to content' }),
    ).toHaveAttribute('href', '#content');
  });
});
