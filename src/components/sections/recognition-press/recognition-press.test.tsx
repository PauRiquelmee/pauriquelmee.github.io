import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import RecognitionPress from '.';

describe('RecognitionPress', () => {
  it('renders OPTIMA and all five press links without unrelated methodology', () => {
    render(<RecognitionPress />);

    expect(
      screen.getByRole('link', {
        name: 'Best Undergraduate Paper | OPTIMA 2017',
      }),
    ).toBeVisible();
    expect(screen.queryByRole('link', { name: /\(defi\)2/ })).toBeNull();
    expect(
      screen.getAllByText('El Mercurio Innovation', { selector: 'span' }),
    ).toHaveLength(5);
  });
});
