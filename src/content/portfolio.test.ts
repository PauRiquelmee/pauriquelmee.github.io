import { describe, expect, it } from "vitest";
import {
  contactLinks,
  education,
  experience,
  pressFeatures,
  projects,
  recognition,
  skillGroups,
} from "@/content/portfolio";

describe("canonical portfolio content", () => {
  it("includes every resume role and education record", () => {
    expect(experience.map((item) => item.company)).toEqual([
      "woku",
      "Inpla",
      "stow SpA",
      "Essbio",
      "Universidad de Concepción",
      "Orvita",
    ]);
    expect(education).toHaveLength(2);
  });

  it("preserves the selected-work outcomes", () => {
    expect(projects[0].metrics.map((metric) => metric.value)).toEqual([
      "50+",
      "3",
      "USD 70K",
    ]);
    expect(projects[1].outcomes.join(" ")).toContain("Puerto Coronel");
    expect(projects[1]).toMatchObject({
      href: "https://inpla.ai/en/",
      image: "/media/inpla-website.webp",
      previewStatus: "blocked",
    });
  });

  it("contains all skill groups and five El Mercurio Innovation features", () => {
    expect(skillGroups.map((group) => group.name)).toEqual([
      "Product",
      "Design",
      "Development",
    ]);
    expect(pressFeatures).toHaveLength(5);
  });

  it("provides safe public links and an English resume", () => {
    expect(contactLinks.every((link) => link.href.length > 0)).toBe(true);
    expect(
      contactLinks.find((link) => link.label === "English resume")?.href,
    ).toContain("paula-riquelme-resume-en.pdf");
    expect(contactLinks.find((link) => link.label === "Inpla")?.href).toBe(
      "https://inpla.ai/en/",
    );
    expect(contactLinks.find((link) => link.label === "llms.txt")?.href).toBe(
      "/llms.txt",
    );
    expect(recognition.title).toBe("Best Undergraduate Paper | OPTIMA 2017");
  });
});
