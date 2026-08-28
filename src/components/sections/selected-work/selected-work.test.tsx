import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SelectedWork from ".";

describe("SelectedWork", () => {
  it("features Woku and Inpla with preview actions", () => {
    render(<SelectedWork />);

    expect(screen.getByRole("heading", { name: "Selected work" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Woku" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Inpla" })).toBeVisible();
    expect(screen.getAllByRole("button", { name: /Live preview/ })).toHaveLength(2);
  });
});
