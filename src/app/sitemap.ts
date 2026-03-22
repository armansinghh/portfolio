import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/notion";

const baseUrl = "https://armansingh.me";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const routes = ["", "/about", "/projects", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...routes, ...blogRoutes];
}