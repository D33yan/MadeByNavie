"use client";

import { useState } from "react";
import { Download, FileText, Calendar, MapPin, Briefcase, GraduationCap, Award, Code, Palette, Users } from "lucide-react";
import { MobileOptimizedSection } from "../animations/mobile-optimized-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ResumeProps {
  isMobile: boolean;
}

export function Resume({ isMobile }: ResumeProps) {
  const [activeTab, setActiveTab] = useState("experience");

  const experience = [
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2023 - Present",
      location: "Remote",
      description: "Building modern web applications with React, Next.js, and TypeScript. Specializing in responsive design and performance optimization.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      achievements: [
        "Delivered 50+ client projects with 100% satisfaction rate",
        "Improved website performance by 60% on average",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "UI/UX Designer",
      company: "Freelance",
      period: "2022 - Present",
      location: "Remote",
      description: "Creating user-centered design solutions with focus on accessibility and modern design principles.",
      technologies: ["Figma", "Adobe Illustrator", "Design Systems", "Prototyping"],
      achievements: [
        "Designed 30+ brand identities and style guides",
        "Created comprehensive design systems for web applications",
        "Achieved 95% client satisfaction rate"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "University Name",
      period: "2019 - 2023",
      location: "City, Country",
      description: "Focused on software engineering, web development, and user interface design.",
      achievements: ["Dean's List", "Graduated with Honors", "Capstone Project Award"]
    }
  ];

  const skills = {
    technical: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 82 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Node.js", level: 78 },
      { name: "Git/GitHub", level: 85 }
    ],
    design: [
      { name: "Figma", level: 90 },
      { name: "Adobe Illustrator", level: 85 },
      { name: "UI/UX Design", level: 88 },
      { name: "Brand Strategy", level: 82 },
      { name: "Prototyping", level: 85 },
      { name: "Design Systems", level: 80 }
    ],
    soft: [
      "Project Management",
      "Client Communication",
      "Problem Solving",
      "Team Collaboration",
      "Time Management",
      "Creative Thinking"
    ]
  };

  const certifications = [
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      credential: "Meta React Developer"
    },
    {
      name: "UI/UX Design Professional",
      issuer: "Google",
      date: "2023",
      credential: "Google UX Design"
    },
    {
      name: "Early Code App Development Certification",
      issuer: "Early Code Academy",
      date: "2022",
      credential: "App Development"
    },
    {
      name: "Google Associate Android Developer",
      issuer: "Google",
      date: "2022",
      credential: "Associate Android Developer"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2022",
      credential: "AWS Cloud Practitioner"
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "2022",
      credential: "Azure Fundamentals"
    },
    {
      name: "Coursera Full-Stack Web Development",
      issuer: "Coursera / The Hong Kong University of Science and Technology",
      date: "2021",
      credential: "Full-Stack Web Development"
    }
  ];

  const projects = [
    {
      name: "Auction App",
      type: "Personal Project",
      description: "Developed a mobile auction app using React Native and JavaScript. Designed an intuitive interface for managing auction plans and tasks, with persistent async data storage.",
      github: "https://github.com/D33yan/rebid-app"
    },
    {
      name: "Typhoid Checker",
      type: "Personal Project",
      description: "Built a health diagnostic app to help users assess typhoid symptoms using React Native. Integrated user-friendly forms and provided actionable health recommendations.",
      github: "https://github.com/D33yan/typhoid-checker"
    },
    {
      name: "Fitness Tracker",
      type: "Personal Project",
      description: "Created a cross-platform fitness tracking app with React Native. Enabled users to log workouts, track progress, and visualize fitness data with engaging UI components.",
      github: "https://github.com/D33yan/fitnesstracker"
    },
    {
      name: "E-commerce Website",
      type: "Personal Project",
      description: "Built a shopping and blog-integrated website with React and Supabase. Implemented product management and cart functionality using React Context.",
      github: "https://github.com/D33yan/afabric-ecommercestore"
    },
    {
      name: "Academic Journal Website",
      type: "Paid Project",
      description: "Designed and developed an academic journal and trading portfolio site using Next.js, Tailwind CSS, and Shadcn UI. Built interfaces for displaying research articles, trades, and services, with integrated contact features.",
      github: "https://github.com/D33yan/firebase-blog"
    }
  ];

  const tabs = [
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Code },
    { id: "certifications", label: "Certifications", icon: Award }
  ];

  return (
    <section id="resume" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="content-container">
        {/* Section Header */}
        <MobileOptimizedSection
          animation="fade-up"
          delay={100}
          mobileAnimation="fade-up"
        >
          <div className="section-header">
            <div className="section-badge">
              <FileText className="w-4 h-4 mr-2" />
              Professional Resume
            </div>
            <h2 className="section-title gradient-navie-text">
              My Professional Journey
            </h2>
            <p className="section-subtitle">
              A comprehensive overview of my experience, education, and expertise in frontend development and design
            </p>
          </div>
        </MobileOptimizedSection>

        {/* Download Resume Button */}
        <MobileOptimizedSection
          animation="fade-up"
          delay={200}
          mobileAnimation="fade-up"
        >
          <div className="flex justify-center mb-12">
            <a
              href="/Divine_Nnaji_CV.docx"
              download
              className="btn-navie-primary group flex items-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navie-accent-500"
            >
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download Resume (DOCX)
            </a>
          </div>
        </MobileOptimizedSection>

        {/* Tab Navigation */}
        <MobileOptimizedSection
          animation="fade-up"
          delay={300}
          mobileAnimation="fade-up"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-navie-secondary-500 to-navie-accent-500 text-white shadow-navie-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </MobileOptimizedSection>

        {/* Tab Content */}
        <MobileOptimizedSection
          animation="fade-up"
          delay={400}
          mobileAnimation="fade-up"
        >
          <div className="max-w-4xl mx-auto">
            {/* Experience Tab */}
            {activeTab === "experience" && (
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <Card key={index} className="group relative bg-[hsl(var(--card))] border border-[hsl(var(--border))] backdrop-blur-xl shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-blue-200/80 dark:bg-slate-900/50 dark:border-slate-700/50 hover-navie-lift">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl md:text-2xl mb-2">
                            {job.title}
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                            <div className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-2" />
                              {job.company}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              {job.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              {job.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-navie-secondary-500/10 text-navie-secondary-600 dark:text-navie-secondary-400 border-navie-secondary-500/20">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Key Achievements</h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-navie-accent-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Education Tab */}
            {activeTab === "education" && (
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <Card key={index} className="group relative bg-[hsl(var(--card))] border border-[hsl(var(--border))] backdrop-blur-xl shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-blue-200/80 dark:bg-slate-900/50 dark:border-slate-700/50 hover-navie-lift">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl md:text-2xl mb-2">
                            {edu.degree}
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                            <div className="flex items-center">
                              <GraduationCap className="w-4 h-4 mr-2" />
                              {edu.institution}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              {edu.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              {edu.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Achievements</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement) => (
                            <Badge key={achievement} variant="outline" className="bg-navie-accent-500/10 text-navie-accent-600 dark:text-navie-accent-400 border-navie-accent-500/20">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === "skills" && (
              <div className="grid md:grid-cols-2 gap-8">
                {/* Technical Skills */}
                <Card className="group relative bg-[hsl(var(--card))] border border-[hsl(var(--border))] backdrop-blur-xl shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-blue-200/80 dark:bg-slate-900/50 dark:border-slate-700/50 hover-navie-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="w-5 h-5 mr-2" />
                      Technical Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {skills.technical.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-navie-secondary-500 to-navie-accent-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Design Skills */}
                <Card className="group relative bg-[hsl(var(--card))] border border-[hsl(var(--border))] backdrop-blur-xl shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-blue-200/80 dark:bg-slate-900/50 dark:border-slate-700/50 hover-navie-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Palette className="w-5 h-5 mr-2" />
                      Design Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {skills.design.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-navie-accent-500 to-navie-secondary-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Soft Skills */}
                <Card className="group relative bg-[hsl(var(--card))] border border-[hsl(var(--border))] backdrop-blur-xl shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-blue-200/80 dark:bg-slate-900/50 dark:border-slate-700/50 hover-navie-lift md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Soft Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {skills.soft.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-muted/50 text-foreground border-border">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Certifications Tab */}
            {activeTab === "certifications" && (
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="group relative bg-[hsl(var(--card))] border border-[hsl(var(--border))] backdrop-blur-xl shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-blue-200/80 dark:bg-slate-900/50 dark:border-slate-700/50 hover-navie-lift">
                    <CardHeader>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <div className="flex items-center text-muted-foreground">
                        <Award className="w-4 h-4 mr-2" />
                        {cert.issuer}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          {cert.date}
                        </div>
                        <Badge variant="secondary" className="bg-navie-secondary-500/10 text-navie-secondary-600 dark:text-navie-secondary-400">
                          {cert.credential}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </MobileOptimizedSection>
      </div>
    </section>
  );
} 