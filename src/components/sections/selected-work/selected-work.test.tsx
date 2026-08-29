import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SelectedWork from '.';

describe('SelectedWork', () => {
  it('features Woku and Inpla with case study and website actions', () => {
    render(<SelectedWork />);

    expect(
      screen.getByRole('heading', { name: 'Selected work' }),
    ).toBeVisible();
    expect(screen.getByRole('heading', { name: 'Woku' })).toBeVisible();
    expect(screen.getByRole('heading', { name: 'Inpla' })).toBeVisible();
    expect(
      screen.getByRole('link', { name: 'View case study: Woku' }),
    ).toHaveAttribute('href', '/work/woku/');
    expect(
      screen.getByRole('link', { name: 'View case study: Inpla' }),
    ).toHaveAttribute('href', '/work/inpla/');
    expect(screen.getAllByText('Visit website')).toHaveLength(2);
    expect(screen.queryByText(/Live preview/i)).not.toBeInTheDocument();
  });
});
