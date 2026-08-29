import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("motion/react", async (importOriginal) => {
  const original = await importOriginal<typeof import("motion/react")>();

  return {
    ...original,
    useReducedMotion: () => true,
  };
});

import AnimatedProjectMedia from ".";

describe("AnimatedProjectMedia with reduced motion", () => {
  it("renders without an entrance transform", () => {
    const { container } = render(
      <AnimatedProjectMedia>
        <span>Reduced-motion evidence</span>
      </AnimatedProjectMedia>,
    );

    expect(container.querySelector("figure")).not.toHaveStyle({
      transform: "translateY(24px)",
    });
  });
});
