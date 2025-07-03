"use client"

import Head from "next/head"
import { usePathname } from "next/navigation"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  type?: "website" | "article" | "profile"
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  noIndex?: boolean
  canonical?: string
}

const defaultSEO = {
  title: "Divine Nnaji - Frontend Developer & Brand Designer | MadeByNavie",
  description:
    "Professional frontend development and brand design services. Creating digital experiences that blend technology with creativity. Specializing in React, Next.js, and modern web development.",
  keywords: [
    "frontend developer",
    "brand designer",
    "web developer",
    "React developer",
    "Next.js developer",
    "UI/UX designer",
    "brand identity",
    "web design",
    "responsive design",
    "JavaScript developer",
    "TypeScript developer",
    "Tailwind CSS",
    "modern web development",
    "creative developer",
    "digital experiences",
    "MadeByNavie",
    "Divine Nnaji",
  ],
  image: "/images/og-image.jpg",
  author: "Divine Nnaji",
  siteUrl: "https://madebynavie.com",
}

export function SEOHead({
  title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  type = "website",
  publishedTime,
  modifiedTime,
  author = defaultSEO.author,
  section,
  noIndex = false,
  canonical,
}: SEOProps) {
  const pathname = usePathname()
  const fullTitle = title ? `${title} | MadeByNavie` : defaultSEO.title
  const fullUrl = `${defaultSEO.siteUrl}${pathname}`
  const fullImageUrl = image.startsWith("http") ? image : `${defaultSEO.siteUrl}${image}`
  const canonicalUrl = canonical || fullUrl

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <meta name="googlebot" content={noIndex ? "noindex,nofollow" : "index,follow"} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={`${author} - Frontend Developer & Brand Designer`} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="MadeByNavie" />
      <meta property="og:locale" content="en_US" />

      {/* Article specific Open Graph tags */}
      {type === "article" && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {keywords.map((keyword, index) => (
            <meta key={index} property="article:tag" content={keyword} />
          ))}
        </>
      )}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={`${author} - Frontend Developer & Brand Designer`} />
      <meta name="twitter:creator" content="@madebynavie" />
      <meta name="twitter:site" content="@madebynavie" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
      <meta name="application-name" content="MadeByNavie" />
      <meta name="apple-mobile-web-app-title" content="MadeByNavie" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    </Head>
  )
}
