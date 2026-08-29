import { describe, expect, it } from "vitest";
import manifest from "./manifest";
import robots from "./robots";
import sitemap from "./sitemap";
import { metadata, viewport } from "./layout";
import { siteUrl } from "@/lib/paths";

describe("portfolio metadata", () => {
  it("uses English canonical, Open Graph, and Twitter metadata", () => {
    expect(metadata.title).toBe("Paula Riquelme | Product Lead & Product Designer");
    expect(metadata.description).toBe(
      "Product Lead, product designer, and frontend developer building digital products from customer discovery and strategy through implementation.",
    );
    expect(metadata.metadataBase).toEqual(siteUrl);
    expect(metadata.alternates).toEqual({ canonical: "/" });
    expect(metadata.openGraph).toMatchObject({
      locale: "en_US",
      type: "website",
      url: "/",
    });
    expect(metadata.twitter).toMatchObject({ card: "summary_large_image" });
    expect(metadata.robots).toMatchObject({ index: true, follow: true });
    expect(viewport).toMatchObject({ themeColor: "#f3f0e8" });
  });

  it("publishes a production-aware manifest, robots policy, and sitemap", () => {
    expect(manifest().lang).toBe("en");
    expect(manifest().start_url).toBe("/");
    expect(robots().sitemap).toBe(
      "https://pauriquelmee.github.io/sitemap.xml",
    );
    expect(sitemap()).toEqual([
      expect.objectContaining({
        url: "https://pauriquelmee.github.io/",
      }),
    ]);
  });
});
