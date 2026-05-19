"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  Github,
  Code,
  Palette,
  Layers,
  Brush,
  Star,
  Award,
  Users,
  Sparkles,
  Zap,
} from "lucide-react";
import { MobileOptimizedSection } from "@/components/animations/mobile-optimized-section";
import { TouchOptimizedList } from "@/components/animations/touch-optimized-list";
import { MobileParallax } from "@/components/animations/mobile-parallax";
import { TouchInteractionCard } from "@/components/animations/touch-interaction-card";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { ParticleSystem } from "@/components/animations/particle-system";
import { NavieLogo } from "@/components/logo/navie-logo";
import { AnimatedLogo } from "@/components/logo/animated-logo";
import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Work } from "@/components/sections/Work";
import { Contact } from "@/components/sections/Contact";
import { Resume } from "@/components/sections/Resume";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  const { isMobile, shouldReduceAnimations } = useMobilePerformance();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsVisible(true);

    /**
     * Handle the scroll event on the window.
     *
     * This function gets the current scroll position and checks which section
     * is currently in view. It then updates the `activeSection` state with the
     * corresponding section ID.
     */
    const handleScroll = () => {
      setScrollY(window.scrollY);

      /**
       * List of section IDs to check against the current scroll position.
       */
      const sections = [
        "home",
        "about",
        "experience",
        "work",
        "skills",
        "resume",
        "contact",
      ];

      /**
       * The current scroll position, plus a 100px offset to account for the
       * navigation bar.
       */
      const scrollPosition = window.scrollY + 100;

      /**
       * Loop through the list of sections and check if the current scroll
       * position is within the bounds of each section.
       */
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          /**
           * The offset top of the section element.
           */
          const offsetTop = element.offsetTop;

          /**
           * The height of the section element.
           */
          const offsetHeight = element.offsetHeight;

          /**
           * If the current scroll position is within the bounds of the section,
           * update the `activeSection` state with the corresponding section ID.
           */
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isMobile, mounted]);

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const skills = {
    frontend: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 92 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Framer Motion", level: 80 },
      { name: "Git/GitHub", level: 90 },
    ],
    backend: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 87 },
      { name: "Python", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "Database Design", level: 82 },
      { name: "Supabase", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "Authentication", level: 85 },
    ],
  };

  const services = [
    {
      title: "Full-Stack Development",
      description:
        "End-to-end web application development combining robust backend architecture with modern frontend interfaces",
      features: [
        "Next.js & React",
        "Node.js & Express",
        "Database Design",
        "API Development",
      ],
      icon: Code,
      gradient: "from-cyan-400 to-blue-600",
      shadowColor: "cyan-500/20",
      delay: "0ms",
    },
    {
      title: "AI/ML Integration",
      description:
        "Integrating machine learning models and AI capabilities into production applications with Python and modern frameworks",
      features: [
        "Model Training",
        "Data Science",
        "Feature Engineering",
        "Scikit-learn & NumPy",
      ],
      icon: Sparkles,
      gradient: "from-purple-400 to-pink-600",
      shadowColor: "purple-500/20",
      delay: "200ms",
    },
    {
      title: "Automation Workflows",
      description:
        "Building intelligent automation solutions using n8n, Zapier, and custom integrations to streamline business processes",
      features: [
        "Workflow Design",
        "API Integrations",
        "n8n & Zapier",
        "Process Optimization",
      ],
      icon: Zap,
      gradient: "from-green-400 to-emerald-600",
      shadowColor: "green-500/20",
      delay: "400ms",
    },
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Happy Clients", delay: "0ms" },
    { icon: Award, value: "100+", label: "Projects Completed", delay: "100ms" },
    { icon: Star, value: "5.0", label: "Average Rating", delay: "200ms" },
  ];

  const pricing = [
    {
      category: "Development Services",
      items: [
        { service: "Full-Stack Development", price: "$80-110/hour" },
        { service: "Backend Development", price: "$75-100/hour" },
        { service: "Web Application", price: "$6,000-18,000" },
        { service: "API Integration", price: "$50-80/hour" },
      ],
    },
    {
      category: "AI/ML & Automation",
      items: [
        { service: "ML Model Development", price: "$100-150/hour" },
        { service: "Automation Workflows", price: "$60-90/hour" },
        { service: "Data Analysis & Visualization", price: "$80-120/hour" },
        { service: "AI Integration", price: "$90-130/hour" },
      ],
    },
    {
      category: "Package Deals",
      items: [
        { service: "Startup Full-Stack", price: "$8,000-15,000" },
        { service: "Enterprise Solution", price: "$20,000+" },
        { service: "AI-Powered Application", price: "$12,000-25,000" },
        { service: "Technical Consultation", price: "$120/hour" },
      ],
    },
  ];

  const projects = [
    {
      title: "AmyFabric",
      type: "Website Template",
      tech: "Next.js, React, Tailwind CSS",
      description: "A modern, responsive website template with sleek design and smooth interactions",
      gradient: "from-cyan-500 to-blue-600",
      icon: Code,
      liveDemo: "#",
      githubCode: "#",
      date: "2024"
    },
    {
      title: "FitTrack",
      type: "Fitness Application",
      tech: "Next.js, Supabase, Python",
      description: "Comprehensive fitness tracking platform with workout planning and AI-powered progress analytics",
      gradient: "from-emerald-500 to-teal-600",
      icon: Code,
      liveDemo: "#",
      githubCode: "#",
      date: "2024"
    },
    {
      title: "TyphoidGuard",
      type: "AI/ML Application",
      tech: "Python, Scikit-learn, Machine Learning",
      description: "AI-powered typhoid prediction system achieving 98% accuracy using advanced machine learning models",
      gradient: "from-purple-500 to-pink-600",
      icon: Sparkles,
      liveDemo: "#",
      githubCode: "#",
      date: "2024"
    },
    {
      title: "Acadexpub",
      type: "Academic Journal Platform",
      tech: "Next.js, Node.js, MongoDB",
      description: "School website journal platform for publishing academic research and student publications",
      gradient: "from-orange-500 to-red-600",
      icon: Code,
      liveDemo: "#",
      githubCode: "#",
      date: "2023"
    }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navie-secondary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative transition-colors duration-300">
      {/* Particle System Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <ParticleSystem
          particleCount={isMobile ? 25 : 60}
          colors={[
            "rgba(255, 107, 53, 0.4)", // MadeByNavie Coral
            "rgba(6, 182, 212, 0.4)", // MadeByNavie Teal
            "rgba(30, 41, 59, 0.3)", // MadeByNavie Navy
            "rgba(234, 88, 12, 0.3)", // Darker Coral
            "rgba(8, 145, 178, 0.3)", // Darker Teal
          ]}
          interactive={!isMobile}
        />
      </div>

      {/* Enhanced Background Gradients */}
      {!shouldReduceAnimations && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <MobileParallax speed={0.1} direction="up" disableOnMobile={true}>
            <div
              className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-navie-secondary-500/10 via-navie-accent-500/10 to-navie-primary-500/10 rounded-full blur-3xl animate-pulse"
              style={{
                left: `${10 + (isMobile ? 0 : mousePosition.x * 0.005)}%`,
                top: `${5 + (isMobile ? 0 : mousePosition.y * 0.005)}%`,
                transform: `translate(-50%, -50%) ${
                  isMobile
                    ? ""
                    : `scale(${1 + Math.sin(Date.now() * 0.0008) * 0.1})`
                }`,
              }}
            />
          </MobileParallax>

          <MobileParallax speed={0.08} direction="down" disableOnMobile={true}>
            <div
              className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-navie-primary-500/10 via-navie-secondary-500/10 to-navie-accent-500/10 rounded-full blur-3xl animate-pulse"
              style={{
                right: `${5 + (isMobile ? 0 : mousePosition.x * 0.004)}%`,
                bottom: `${10 + (isMobile ? 0 : mousePosition.y * 0.004)}%`,
                transform: `translate(50%, 50%) ${
                  isMobile
                    ? ""
                    : `scale(${1 + Math.cos(Date.now() * 0.001) * 0.1})`
                }`,
                animationDelay: "2s",
              }}
            />
          </MobileParallax>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div
          className="h-full bg-gradient-to-r from-navie-secondary-500 via-navie-accent-500 to-navie-primary-500 transition-all duration-300 ease-out"
          style={{
            width: `${
              (scrollY / (document.body.scrollHeight - window.innerHeight)) *
              100
            }%`,
          }}
        />
      </div>

      <Navigation
        scrollToSection={scrollToSection}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isMobile={isMobile}
        shouldReduceAnimations={shouldReduceAnimations}
      />
      <Hero
        isMobile={isMobile}
        isVisible={isVisible}
        mousePosition={mousePosition}
        shouldReduceAnimations={shouldReduceAnimations}
        scrollToSection={scrollToSection}
      />
      <About isMobile={isMobile} scrollToSection={scrollToSection} />
      <Experience isMobile={isMobile} />
      <Work isMobile={isMobile} projects={projects} />
      <Skills isMobile={isMobile} skills={skills} />
      <Resume isMobile={isMobile} />
      <Contact isMobile={isMobile} />
    </div>
  );
}
