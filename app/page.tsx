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
import { Services } from "@/components/sections/Services";
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
        "skills",
        "services",
        "work",
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
      { name: "JavaScript", level: 90 },
      { name: "React", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "TypeScript", level: 82 },
      { name: "Framer Motion", level: 80 },
      { name: "Git/GitHub", level: 85 },
    ],
    design: [
      { name: "Logo Design", level: 95 },
      { name: "Typography", level: 90 },
      { name: "Color Theory", level: 88 },
      { name: "Brand Strategy", level: 85 },
      { name: "Adobe Illustrator", level: 92 },
      { name: "Figma", level: 90 },
      { name: "Style Guides", level: 90 },
      { name: "UI/UX Design", level: 85 },
    ],
  };

  const services = [
    {
      title: "Frontend Development",
      description:
        "Modern, responsive web applications built with cutting-edge technologies and best practices",
      features: [
        "React & Next.js",
        "TypeScript",
        "Performance Optimization",
        "Mobile-First Design",
      ],
      icon: Code,
      gradient: "from-navie-secondary-400 to-navie-secondary-600",
      shadowColor: "navie-secondary-500/20",
      delay: "0ms",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design solutions that create intuitive and engaging digital experiences",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      icon: Layers,
      gradient: "from-navie-accent-400 to-navie-accent-600",
      shadowColor: "navie-accent-500/20",
      delay: "200ms",
    },
    {
      title: "Brand Identity",
      description:
        "Comprehensive brand strategies that tell your story and connect with your audience",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Systems",
        "Brand Strategy",
      ],
      icon: Brush,
      gradient: "from-navie-primary-400 to-navie-primary-600",
      shadowColor: "navie-primary-500/20",
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
        { service: "Frontend Development", price: "$75-95/hour" },
        { service: "Full-Stack Development", price: "$85-105/hour" },
        { service: "Landing Page", price: "$1,500-3,000" },
        { service: "Web Application", price: "$5,000-15,000" },
      ],
    },
    {
      category: "Design Services",
      items: [
        { service: "UI/UX Design", price: "$65-85/hour" },
        { service: "Brand Identity", price: "$2,500-5,000" },
        { service: "Logo Design", price: "$800-1,500" },
        { service: "Design System", price: "$3,000-8,000" },
      ],
    },
    {
      category: "Package Deals",
      items: [
        { service: "Startup Package", price: "$5,000-12,000" },
        { service: "Enterprise Solution", price: "$15,000+" },
        { service: "Brand + Website", price: "$8,000-20,000" },
        { service: "Consultation", price: "$150/hour" },
      ],
    },
  ];

  const projects = [
    {
      title: "E-commerce Website",
      type: "Frontend Development",
      tech: "React, Next.js, Stripe",
      description: "A modern e-commerce platform with seamless payment integration and responsive design",
      gradient: "from-cyan-500 to-blue-600",
      icon: Code,
      liveDemo: "https://example-ecommerce.com",
      githubCode: "https://github.com/madebynavie/ecommerce-website",
      date: "2024"
    },
    {
      title: "Fitness Tracker",
      type: "Frontend Development",
      tech: "React, Next.js, Supabase",
      description: "A comprehensive fitness tracking application with workout planning and progress analytics",
      gradient: "from-emerald-500 to-teal-600",
      icon: Code,
      liveDemo: "https://fitness-tracker-one-xi.vercel.app/",
      githubCode: "https://github.com/madebynavie/fitness-tracker",
      date: "2024"
    },
    {
      title: "SaaS Dashboard",
      type: "UI/UX + Development",
      tech: "Figma, React, TypeScript",
      description: "A powerful SaaS dashboard with advanced analytics and user management features",
      gradient: "from-purple-500 to-pink-600",
      icon: Layers,
      liveDemo: "https://example-saas.com",
      githubCode: "https://github.com/madebynavie/saas-dashboard",
      date: "2024"
    },
    {
      title: "Restaurant Website",
      type: "Full-Stack Development",
      tech: "Next.js, CMS, Animations",
      description: "A beautiful restaurant website with online ordering and reservation system",
      gradient: "from-orange-500 to-red-600",
      icon: Code,
      liveDemo: "https://example-restaurant.com",
      githubCode: "https://github.com/madebynavie/restaurant-website",
      date: "2023"
    },
    {
      title: "Fitness Brand Package",
      type: "Complete Brand Identity",
      tech: "Logo, Social Kit, Guidelines",
      description: "Complete brand identity package including logo design, social media kit, and brand guidelines",
      gradient: "from-indigo-500 to-purple-600",
      icon: Brush,
      liveDemo: "https://example-fitness.com",
      githubCode: undefined,
      date: "2023"
    },
    {
      title: "Portfolio Website",
      type: "Frontend Development",
      tech: "Next.js, TypeScript, Tailwind",
      description: "This portfolio website showcasing MadeByNavie's work and capabilities",
      gradient: "from-slate-500 to-gray-600",
      icon: Code,
      liveDemo: "https://madebynavie.com",
      githubCode: "https://github.com/madebynavie/portfolio",
      date: "2024"
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
      <Skills isMobile={isMobile} skills={skills} />
      <Services isMobile={isMobile} services={services} />
      <Work isMobile={isMobile} projects={projects} />
      <Resume isMobile={isMobile} />
      <Contact isMobile={isMobile} />
    </div>
  );
}
