"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

export function Breadcrumbs() {
  const pathname = usePathname()

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = pathname.split("/").filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }]

    let currentPath = ""
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const isLast = index === segments.length - 1

      // Convert segment to readable label
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      breadcrumbs.push({
        label,
        href: currentPath,
        current: isLast,
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  if (breadcrumbs.length <= 1) return null

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://madebynavie.com${item.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground/50" />}
              {item.current ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors duration-200 flex items-center"
                >
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
