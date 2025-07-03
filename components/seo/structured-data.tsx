"use client"

import { usePathname } from "next/navigation"

interface StructuredDataProps {
  type?: "person" | "organization" | "website" | "article" | "service"
  data?: Record<string, any>
}

const baseUrl = "https://madebynavie.com"

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Divine Nnaji",
  alternateName: "MadeByNavie",
  description:
    "Frontend Developer and Brand Designer specializing in modern web development and creative digital solutions",
  url: baseUrl,
  image: `${baseUrl}/images/divine-nnaji-profile.jpg`,
  sameAs: [
    "https://github.com/madebynavie",
    "https://linkedin.com/in/divine-nnaji",
    "https://dribbble.com/madebynavie",
    "https://twitter.com/madebynavie",
  ],
  jobTitle: "Frontend Developer & Brand Designer",
  worksFor: {
    "@type": "Organization",
    name: "MadeByNavie",
    url: baseUrl,
  },
  knowsAbout: [
    "Frontend Development",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Brand Design",
    "UI/UX Design",
    "Web Development",
    "Responsive Design",
    "Modern Web Technologies",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Frontend Developer",
    occupationLocation: {
      "@type": "Place",
      name: "Remote",
    },
    skills: [
      "React Development",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Brand Design",
      "UI/UX Design",
    ],
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MadeByNavie",
  alternateName: "Made By Navie",
  url: baseUrl,
  logo: `${baseUrl}/images/madebynavie-logo.png`,
  image: `${baseUrl}/images/madebynavie-banner.jpg`,
  description:
    "Professional frontend development and brand design services, creating digital experiences that blend technology with creativity",
  founder: {
    "@type": "Person",
    name: "Divine Nnaji",
  },
  foundingDate: "2020",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-XXX-XXX-XXXX",
    contactType: "customer service",
    email: "hello@madebynavie.com",
    availableLanguage: ["English"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressRegion: "Remote",
  },
  sameAs: [
    "https://github.com/madebynavie",
    "https://linkedin.com/company/madebynavie",
    "https://dribbble.com/madebynavie",
    "https://twitter.com/madebynavie",
  ],
  serviceArea: {
    "@type": "Place",
    name: "Worldwide",
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MadeByNavie - Divine Nnaji Portfolio",
  alternateName: "MadeByNavie",
  url: baseUrl,
  description: "Professional portfolio showcasing frontend development and brand design services",
  inLanguage: "en-US",
  isAccessibleForFree: true,
  creator: {
    "@type": "Person",
    name: "Divine Nnaji",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Frontend Development",
    description: "Professional frontend development services using React, Next.js, and modern web technologies",
    provider: {
      "@type": "Person",
      name: "Divine Nnaji",
    },
    serviceType: "Web Development",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Frontend Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "React Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Next.js Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Responsive Web Design",
          },
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Brand Design",
    description: "Professional brand design services including logo design, brand identity, and visual systems",
    provider: {
      "@type": "Person",
      name: "Divine Nnaji",
    },
    serviceType: "Design",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Brand Design Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Logo Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brand Identity",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Visual Systems",
          },
        },
      ],
    },
  },
]

export function StructuredData({ type = "person", data }: StructuredDataProps) {
  const pathname = usePathname()

  const getSchema = () => {
    switch (type) {
      case "person":
        return personSchema
      case "organization":
        return organizationSchema
      case "website":
        return websiteSchema
      case "service":
        return serviceSchemas
      default:
        return personSchema
    }
  }

  const schema = data ? { ...getSchema(), ...data } : getSchema()
  const schemaArray = Array.isArray(schema) ? schema : [schema]

  return (
    <>
      {schemaArray.map((schemaItem, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaItem, null, 2),
          }}
        />
      ))}
    </>
  )
}
