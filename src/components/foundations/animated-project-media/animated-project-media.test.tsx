import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

const motionPreference = vi.hoisted(() => ({ reduce: false }));

vi.mock('motion/react', async (importOriginal) => {
  const original = await importOriginal<typeof import('motion/react')>();

  return {
    ...original,
    useReducedMotion: () => motionPreference.reduce,
  };
});

import AnimatedProjectMedia from '.';

describe('AnimatedProjectMedia', () => {
  afterEach(() => {
    motionPreference.reduce = false;
  });

  it('keeps project evidence inside its semantic figure', () => {
    const { container } = render(
      <AnimatedProjectMedia>
        <span>Product evidence</span>
      </AnimatedProjectMedia>,
    );

    expect(container.querySelector('figure')).toHaveClass('project-media');
    expect(screen.getByText('Product evidence')).toBeVisible();
  });

  it('renders without a spatial start when reduced motion is requested', () => {
    motionPreference.reduce = true;
    const { container } = render(
      <AnimatedProjectMedia>
        <span>Reduced-motion evidence</span>
      </AnimatedProjectMedia>,
    );

    expect(container.querySelector('figure')).not.toHaveStyle({
      transform: 'translateY(24px)',
    });
  });
});
