import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://madebynavie.com"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/_next/", "/temp/", "*.json$", "/search?*"],
      },
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
