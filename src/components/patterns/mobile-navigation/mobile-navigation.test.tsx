import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import MobileNavigation from ".";

describe("MobileNavigation", () => {
  it("opens, closes with Escape, and restores focus", async () => {
    const user = userEvent.setup();
    render(<MobileNavigation />);

    const trigger = screen.getByRole("button", { name: "Open navigation" });
    await user.click(trigger);
    expect(screen.getByRole("dialog", { name: "Navigation" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Selected work" })).toBeVisible();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog", { name: "Navigation" })).toBeNull();
    expect(trigger).toHaveFocus();
  });
});
