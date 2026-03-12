import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://garethpitthart.com",
      lastModified: new Date(),
    },
    {
      url: "https://garethpitthart.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://garethpitthart.com/studio",
      lastModified: new Date(),
    },
    {
      url: "https://garethpitthart.com/work/totem",
      lastModified: new Date(),
    },
    {
      url: "https://garethpitthart.com/work/transmission",
      lastModified: new Date(),
    },
  ];
}