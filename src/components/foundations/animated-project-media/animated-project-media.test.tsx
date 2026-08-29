import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AnimatedProjectMedia from ".";

describe("AnimatedProjectMedia", () => {
  it("keeps project evidence inside its semantic figure", () => {
    const { container } = render(
      <AnimatedProjectMedia>
        <span>Product evidence</span>
      </AnimatedProjectMedia>,
    );

    expect(container.querySelector("figure")).toHaveClass("project-media");
    expect(screen.getByText("Product evidence")).toBeVisible();
  });
});
