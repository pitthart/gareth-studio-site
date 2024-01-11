// app/sitemap.ts
import type { MetadataRoute } from "next";

const baseUrl = "https://garethpitthart.com";

type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency: "monthly" | "yearly";
};

const routes: SitemapRoute[] = [
  {
    path: "",
    priority: 1,
    changeFrequency: "monthly",
  },
  {
    path: "/new-work",
    priority: 0.95,
    changeFrequency: "monthly",
  },
  {
    path: "/work",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/work/totem",
    priority: 0.8,
    changeFrequency: "yearly",
  },
  {
    path: "/work/transmission",
    priority: 0.8,
    changeFrequency: "yearly",
  },
  {
    path: "/studio",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  {
    path: "/about",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  {
    path: "/contact",
    priority: 0.6,
    changeFrequency: "yearly",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}