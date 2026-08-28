import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { experience } from "@/content/portfolio";
import ExperienceEntry from ".";

describe("ExperienceEntry", () => {
  it("renders role, company, dates, location, and outcomes", () => {
    render(<ExperienceEntry item={experience[3]} />);

    expect(
      screen.getByRole("heading", { name: "Maintenance Planning Engineer" }),
    ).toBeVisible();
    expect(screen.getByText("Essbio")).toBeVisible();
    expect(screen.getByText("May 2019 - July 2021")).toBeVisible();
    expect(screen.getByText("Concepción, Chile")).toBeVisible();
    expect(screen.getByText(/30 technicians/)).toBeVisible();
  });
});
