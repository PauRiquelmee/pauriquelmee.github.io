import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import MotionProvider from '.';

const motionMock = vi.hoisted(() => ({
  featureBundle: { animations: true },
  featureLoader: {
    current: null as null | (() => Promise<unknown>),
  },
}));

vi.mock('motion/react', () => ({
  domAnimation: motionMock.featureBundle,
  LazyMotion: ({
    children,
    features,
  }: {
    children: React.ReactNode;
    features: unknown;
  }) => {
    motionMock.featureLoader.current = features as () => Promise<unknown>;
    return (
      <div data-features={typeof features} data-testid="lazy-motion">
        {children}
      </div>
    );
  },
  MotionConfig: ({
    children,
    reducedMotion,
  }: {
    children: React.ReactNode;
    reducedMotion: string;
  }) => <div data-reduced-motion={reducedMotion}>{children}</div>,
}));

describe('MotionProvider', () => {
  it("loads motion features lazily and respects the user's reduced-motion preference", async () => {
    render(
      <MotionProvider>
        <p>Portfolio content</p>
      </MotionProvider>,
    );

    expect(screen.getByTestId('lazy-motion')).toBeInTheDocument();
    expect(screen.getByTestId('lazy-motion')).toHaveAttribute(
      'data-features',
      'function',
    );
    expect(screen.getByText('Portfolio content').parentElement).toHaveAttribute(
      'data-reduced-motion',
      'user',
    );
    expect(motionMock.featureLoader.current).toBeTypeOf('function');
    await expect(motionMock.featureLoader.current?.()).resolves.toBe(
      motionMock.featureBundle,
    );
  });
});
