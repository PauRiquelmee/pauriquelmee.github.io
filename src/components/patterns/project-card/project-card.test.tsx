import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projects } from "@/content/portfolio";
import ProjectCard from ".";

describe("ProjectCard", () => {
  it("presents the project role, metrics, media, and safe external link", () => {
    render(<ProjectCard project={projects[0]} />);

    expect(screen.getByRole("heading", { name: "Woku" })).toBeVisible();
    expect(screen.getByText("CEO & Co-founder / Product Lead")).toBeVisible();
    expect(screen.getByText("50+")).toBeVisible();
    expect(screen.getByAltText(/Woku website showing/i)).toBeVisible();
    expect(screen.getByRole("link", { name: "Open Woku website" })).toHaveAttribute(
      "rel",
      "noreferrer noopener",
    );
    expect(screen.getByRole("button", { name: "Live preview Woku" })).toBeEnabled();
  });
});
