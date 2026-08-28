import { describe, expect, it } from "vitest";
import { directionContract, injectDirectionContract } from "./postbuild.lib.mjs";

describe("postbuild direction contract", () => {
  it("injects the auditable contract as the first child of body", () => {
    const html = "<!doctype html><html><body><main>Portfolio</main></body></html>";
    const result = injectDirectionContract(html);

    expect(result).toContain(`<body>${directionContract}<main>`);
    expect(directionContract).toContain("portfolio-dossier-v1");
    expect(directionContract).toContain(
      "FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md",
    );
  });
});
