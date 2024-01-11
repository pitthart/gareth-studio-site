import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://garethpitthart.com/sitemap.xml",
    host: "https://garethpitthart.com",
  };
}