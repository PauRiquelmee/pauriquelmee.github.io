import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Capabilities from ".";

describe("Capabilities", () => {
  it("renders the complete Product, Design, and Development groups", () => {
    render(<Capabilities />);

    expect(screen.getByRole("heading", { name: "Capabilities" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Product" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Design" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Development" })).toBeVisible();
    expect(screen.getByText(/MongoDB, NestJS, AWS, and Azure/)).toBeVisible();
  });
});
