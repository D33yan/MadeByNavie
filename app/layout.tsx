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
    default: "Divine Nnaji - Full-Stack Software Engineer | AI/ML Developer",
    template: "%s | Divine Nnaji",
  },
  description:
    "Full-stack software engineer specializing in AI/ML integration, backend development, and automation workflows. Experienced with Next.js, Node.js, Python, Scikit-learn, and modern web development.",
  keywords: [
    "full-stack developer",
    "software engineer",
    "backend developer",
    "AI/ML developer",
    "machine learning engineer",
    "Python developer",
    "Node.js developer",
    "React developer",
    "Next.js developer",
    "web developer",
    "automation workflows",
    "TypeScript developer",
    "data science",
    "web development",
    "API development",
    "database design",
    "D33yan",
    "Divine Nnaji",
  ],
  authors: [{ name: "Divine Nnaji", url: "https://madebynavie.com" }],
  creator: "Divine Nnaji",
  publisher: "Divine Nnaji",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://madebynavie.com",
    siteName: "Divine Nnaji - Full-Stack Engineer",
    title: "Divine Nnaji - Full-Stack Software Engineer | AI/ML Developer",
    description:
      "Full-stack software engineer with expertise in AI/ML integration, backend development, and automation workflows. Specializing in Next.js, Node.js, and Python.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Divine Nnaji - Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Nnaji - Full-Stack Software Engineer | AI/ML Developer",
    description:
      "Full-stack software engineer specializing in AI/ML, backend development, and automation. Next.js, Node.js, Python, Scikit-learn.",
    creator: "@D33yan",
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
