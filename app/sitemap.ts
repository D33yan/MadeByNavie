import type { MetadataRoute } from "next"

const baseUrl = "https://madebynavie.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/portfolio", "/contact", "/blog", "/privacy-policy", "/terms-of-service"]

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }))

  // Add blog posts (if you have a blog)
  const blogPosts = [
    // Example blog posts - replace with actual blog data
    {
      url: `${baseUrl}/blog/modern-web-development-trends-2024`,
      lastModified: new Date("2024-01-15"),
      changeFrequency: "never" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/react-performance-optimization-tips`,
      lastModified: new Date("2024-01-10"),
      changeFrequency: "never" as const,
      priority: 0.7,
    },
  ]

  // Add portfolio projects
  const portfolioProjects = [
    {
      url: `${baseUrl}/portfolio/ecommerce-platform`,
      lastModified: new Date("2024-01-20"),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/saas-dashboard`,
      lastModified: new Date("2024-01-18"),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    },
  ]

  return [...staticPages, ...blogPosts, ...portfolioProjects]
}
