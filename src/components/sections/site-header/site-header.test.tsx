import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SiteHeader from ".";

describe("SiteHeader", () => {
  it("provides section navigation, resume download, and contact access", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "Paula Riquelme home" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Selected work" })).toHaveAttribute(
      "href",
      "#work",
    );
    expect(screen.getByRole("link", { name: "English resume" })).toHaveAttribute(
      "download",
    );
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "#contact",
    );
    expect(screen.queryByText(/language/i)).toBeNull();
  });
});
