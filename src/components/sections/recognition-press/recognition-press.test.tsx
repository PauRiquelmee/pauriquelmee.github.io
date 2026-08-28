import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import RecognitionPress from ".";

describe("RecognitionPress", () => {
  it("renders OPTIMA, methodology, and all five press links", () => {
    render(<RecognitionPress />);

    expect(
      screen.getByRole("link", { name: "Best Undergraduate Paper | OPTIMA 2017" }),
    ).toBeVisible();
    expect(
      screen.getByRole("link", { name: /Carlos Osorio's \(defi\)2/ }),
    ).toBeVisible();
    expect(
      screen.getAllByText("El Mercurio Innovation", { selector: "span" }),
    ).toHaveLength(5);
  });
});
