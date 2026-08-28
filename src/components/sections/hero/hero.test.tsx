import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Hero from ".";

describe("Hero", () => {
  it("states Paula's positioning, location, actions, and evidence", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: "I design products, bring them to market, and can build them too.",
      }),
    ).toBeVisible();
    expect(screen.getByText("Concepción, Chile")).toBeVisible();
    expect(screen.getByRole("link", { name: "View selected work" })).toHaveAttribute(
      "href",
      "#work",
    );
    expect(screen.getByRole("link", { name: "Get in touch" })).toHaveAttribute(
      "href",
      "#contact",
    );
    expect(screen.getByText("50+")).toBeVisible();
    expect(screen.getByText("USD 70K")).toBeVisible();
  });
});
