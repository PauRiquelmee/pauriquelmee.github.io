import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Experience from '.';

describe('Experience', () => {
  it('includes all roles and education records', () => {
    render(<Experience />);

    expect(screen.getByRole('heading', { name: 'Experience' })).toBeVisible();
    expect(screen.getByText('woku')).toBeVisible();
    expect(screen.getByText('Orvita')).toBeVisible();
    expect(
      screen.getByText(
        "Master's in Innovation and Technology Entrepreneurship",
      ),
    ).toBeVisible();
    expect(screen.getByText('Industrial Engineering')).toBeVisible();
  });
});
