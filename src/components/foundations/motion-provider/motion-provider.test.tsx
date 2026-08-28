import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import MotionProvider from ".";

vi.mock("motion/react", () => ({
  domAnimation: {},
  LazyMotion: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="lazy-motion">{children}</div>
  ),
  MotionConfig: ({
    children,
    reducedMotion,
  }: {
    children: React.ReactNode;
    reducedMotion: string;
  }) => <div data-reduced-motion={reducedMotion}>{children}</div>,
}));

describe("MotionProvider", () => {
  it("loads motion features lazily and respects the user's reduced-motion preference", () => {
    render(
      <MotionProvider>
        <p>Portfolio content</p>
      </MotionProvider>,
    );

    expect(screen.getByTestId("lazy-motion")).toBeInTheDocument();
    expect(screen.getByText("Portfolio content").parentElement).toHaveAttribute(
      "data-reduced-motion",
      "user",
    );
  });
});
