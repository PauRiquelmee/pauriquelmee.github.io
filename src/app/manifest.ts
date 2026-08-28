import type { MetadataRoute } from "next";
import { productionBasePath } from "@/lib/paths";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Paula Riquelme Portfolio",
    short_name: "Paula Riquelme",
    description:
      "Portfolio of Paula Riquelme, Product Lead, Product Designer, and Frontend Developer.",
    start_url: `${productionBasePath}/`,
    scope: `${productionBasePath}/`,
    display: "standalone",
    background_color: "#f3f0e8",
    theme_color: "#f3f0e8",
    lang: "en",
    icons: [
      {
        src: `${productionBasePath}/icons/icon-192.png`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: `${productionBasePath}/icons/icon-512.png`,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
