"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"

export function Experience({ isMobile }: { isMobile: boolean }) {
  const [activeTab, setActiveTab] = useState(0)

  const experiences = [
    {
      company: "NASRDA",
      position: "AI/ML Intern",
      duration: "2024 - Present",
      description: "Developing machine learning models for health prediction systems. Working with Python, Scikit-learn, and data science workflows.",
      highlights: [
        "Built AI Typhoid Checker achieving 98% prediction accuracy",
        "Developed data preprocessing pipelines with 10,000+ health records",
        "Implemented classification models using Scikit-learn and NumPy",
        "Collaborated on research papers in AI applications"
      ],
      link: "#"
    },
    {
      company: "Freelance",
      position: "Full-Stack Developer",
      duration: "2023 - Present",
      description: "Building full-stack web applications for clients with Next.js, Node.js, and modern technologies.",
      highlights: [
        "Developed AmyFabric ecommerce template with 50k+ product support",
        "Created FitTrack fitness platform with analytics dashboard",
        "Built Acadexpub academic journal publishing system",
        "Implemented secure payment integrations with Stripe"
      ],
      link: "#"
    },
    {
      company: "Open Source",
      position: "Contributor",
      duration: "2023 - Present",
      description: "Active contributor to open source projects in AI, web development, and automation workflows.",
      highlights: [
        "Contributed to ML model optimization projects",
        "Enhanced documentation for developer tools",
        "Built automation workflows using n8n and Zapier",
        "Created code samples for technical communities"
      ],
      link: "#"
    }
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-white dark:bg-[hsl(222,84%,4%)]">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>Work Experience</span>
          </div>
          <h2 className="section-title gradient-navie-text">
            Where I&apos;ve Worked
          </h2>
          <p className="section-subtitle">
            Building innovative solutions across AI/ML, full-stack development, and open source.
          </p>
        </div>

        {/* Tabbed Experience Layout */}
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                  activeTab === idx
                    ? "bg-gradient-teal-primary text-black shadow-lg glow-teal"
                    : "bg-slate-200 dark:bg-slate-800 text-foreground hover:bg-slate-300 dark:hover:bg-slate-700"
                }`}
                aria-pressed={activeTab === idx}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Experience Content */}
          <div className="animate-fade-in-up">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`transition-all duration-300 ${
                  activeTab === idx ? "opacity-100 block" : "opacity-0 hidden"
                }`}
              >
                <div className="card-navie p-8 md:p-10 lg:p-12">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-teal-600 dark:text-teal-400 text-lg font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground text-sm md:text-base">
                        {exp.duration}
                      </p>
                    </div>
                    {exp.link !== "#" && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 md:mt-0 inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                      >
                        Visit <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-foreground text-base md:text-lg mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Key Achievements
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex gap-3 text-foreground">
                          <span className="text-teal-500 dark:text-teal-400 font-bold mt-1">
                            ▸
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
