import { describe, expect, it } from "vitest";
import { siteUrl, withBasePath } from "@/lib/paths";

describe("withBasePath", () => {
  it("keeps local assets at the site root", () => {
    expect(withBasePath("/media/woku.webp", "")).toBe("/media/woku.webp");
  });

  it("prefixes production assets with the GitHub Pages project path", () => {
    expect(
      withBasePath("/media/woku.webp", "/paula-riquelme-portfolio"),
    ).toBe("/paula-riquelme-portfolio/media/woku.webp");
  });

  it("normalizes leading and trailing slashes", () => {
    expect(withBasePath("resume.pdf", "/paula-riquelme-portfolio/"))
      .toBe("/paula-riquelme-portfolio/resume.pdf");
  });
});

describe("siteUrl", () => {
  it("uses the authenticated GitHub Pages project URL", () => {
    expect(siteUrl.toString()).toBe(
      "https://pauriquelmee.github.io/paula-riquelme-portfolio/",
    );
  });
});
