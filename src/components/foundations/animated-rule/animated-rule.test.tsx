import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AnimatedRule from '.';

describe('AnimatedRule', () => {
  it('renders a decorative rule without hiding adjacent content', () => {
    const { container } = render(<AnimatedRule />);

    expect(container.firstElementChild).toHaveClass('hero-rule');
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true');
  });
});
