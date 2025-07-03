"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
    dataLayer: any[]
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX"

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return

    // Load Google Analytics
    const script1 = document.createElement("script")
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script1)

    const script2 = document.createElement("script")
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
    `
    document.head.appendChild(script2)

    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag) return

    const url = pathname + searchParams.toString()

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    })
  }, [pathname, searchParams])

  return null
}

// Custom event tracking
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      event_category: "engagement",
      event_label: eventName,
      ...parameters,
    })
  }
}

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent("form_submit", {
    form_name: formName,
    success: success,
    event_category: "form",
  })
}

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent("scroll_depth", {
    scroll_depth: depth,
    event_category: "engagement",
  })
}

// Track page timing
export const trackPageTiming = (timingCategory: string, timingVar: string, timingValue: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "timing_complete", {
      name: timingVar,
      value: timingValue,
      event_category: timingCategory,
    })
  }
}
