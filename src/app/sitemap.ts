import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/paths";

export const dynamic = "force-static";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: siteUrl.toString(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
};

export default sitemap;
