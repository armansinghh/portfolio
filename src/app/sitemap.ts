import type { MetadataRoute } from "next";

const baseUrl = "https://armansingh.me";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return routes;
}