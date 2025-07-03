import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { SEOHead } from "@/components/seo/seo-head"
import { StructuredData } from "@/components/seo/structured-data"
import { GoogleAnalytics } from "@/components/seo/analytics"
import { ScrollDepthTracker } from "@/components/seo/scroll-depth-tracker"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://madebynavie.com"),
  title: {
    default: "Divine Nnaji - Frontend Developer & Brand Designer | MadeByNavie",
    template: "%s | MadeByNavie",
  },
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
  authors: [{ name: "Divine Nnaji", url: "https://madebynavie.com" }],
  creator: "Divine Nnaji",
  publisher: "MadeByNavie",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://madebynavie.com",
    siteName: "MadeByNavie",
    title: "Divine Nnaji - Frontend Developer & Brand Designer | MadeByNavie",
    description:
      "Professional frontend development and brand design services. Creating digital experiences that blend technology with creativity.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Divine Nnaji - Frontend Developer & Brand Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Nnaji - Frontend Developer & Brand Designer | MadeByNavie",
    description:
      "Professional frontend development and brand design services. Creating digital experiences that blend technology with creativity.",
    creator: "@madebynavie",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://madebynavie.com",
  },
  category: "technology",
    generator: 'v0.dev'
}

// Loading component for Suspense fallback
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <SEOHead />
        <StructuredData type="person" />
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <StructuredData type="service" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider defaultTheme="dark" storageKey="madebynavie-theme">
          <Suspense fallback={<LoadingFallback />}>
            {children}
            <GoogleAnalytics />
            <ScrollDepthTracker />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
