import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contact from ".";

describe("Contact", () => {
  it("offers email, professional links, and the English resume", () => {
    render(<Contact />);

    expect(
      screen.getByRole("heading", {
        name: "Have a difficult product problem to solve? Let's talk.",
      }),
    ).toBeVisible();
    expect(screen.getByRole("link", { name: "Email Paula Riquelme" })).toHaveAttribute(
      "href",
      "mailto:paula.riq.esco@gmail.com",
    );
    expect(
      screen.getByRole("link", { name: /LinkedIn in a new tab/ }),
    ).toHaveAttribute("target", "_blank");
    expect(
      screen.getByRole("link", { name: /Download Paula Riquelme's English resume/ }),
    ).toHaveAttribute("download");
  });
});
