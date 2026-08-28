import { describe, expect, it } from "vitest";
import { normalizeOutputPath } from "./serve-out.lib.mjs";

describe("static preview path normalization", () => {
  it("maps the GitHub Pages project path to the export root", () => {
    expect(normalizeOutputPath("/paula-riquelme-portfolio/")).toBe("index.html");
    expect(
      normalizeOutputPath(
        "/paula-riquelme-portfolio/documents/paula-riquelme-resume-en.pdf",
      ),
    ).toBe("documents/paula-riquelme-resume-en.pdf");
  });

  it("rejects traversal outside the export directory", () => {
    expect(() =>
      normalizeOutputPath("/paula-riquelme-portfolio/../../AGENTS.md"),
    ).toThrow("Invalid output path");
  });
});
