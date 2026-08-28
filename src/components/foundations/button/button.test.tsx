import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Button from ".";

describe("Button", () => {
  it("renders an accessible button and handles activation", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick}>Open preview</Button>);

    await user.click(screen.getByRole("button", { name: "Open preview" }));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it("supports disabled behavior", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(
      <Button disabled onClick={handleClick}>
        Unavailable
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Unavailable" });
    expect(button).toBeDisabled();
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("uses Base UI composition to render a link", () => {
    render(
      <Button render={<a href="#work" />}>
        View selected work
      </Button>,
    );

    expect(
      screen.getByRole("link", { name: "View selected work" }),
    ).toHaveAttribute("href", "#work");
  });
});
