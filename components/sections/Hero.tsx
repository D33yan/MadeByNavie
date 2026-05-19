import { MobileOptimizedSection } from "@/components/animations/mobile-optimized-section";
import { AnimatedLogo } from "@/components/logo/animated-logo";
import { TouchOptimizedList } from "@/components/animations/touch-optimized-list";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Sparkles, Rocket, Zap } from "lucide-react";
import { ParticleSystem } from "@/components/animations/particle-system";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Dribbble, Twitter } from "lucide-react";

interface HeroProps {
  isMobile: boolean;
  isVisible: boolean;
  mousePosition: { x: number; y: number };
  shouldReduceAnimations: boolean;
  scrollToSection: (sectionId: string) => void;
}

export function Hero({
  isMobile,
  isVisible,
  mousePosition,
  shouldReduceAnimations,
  scrollToSection,
}: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen py-6 flex items-center justify-center relative overflow-hidden bg-white dark:bg-[hsl(222,84%,4%)]"
    >
      {/* Subtle Particle Background Effect */}
      <ParticleSystem className="absolute inset-0 z-0" particleCount={60} />
      {/* Existing gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/60 to-white/40 dark:from-slate-900/20 dark:via-purple-900/10 dark:to-cyan-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="content-container relative z-10 flex flex-col items-center justify-center min-h-[50vh] py-4 md:py-8">
        {/* Starry/Particle Background */}
        {(!isMobile && !shouldReduceAnimations) && (
          <ParticleSystem className="absolute inset-0 z-0" particleCount={20} />
        )}
        {/* Decorative SVG Blobs/Shapes */}
        <svg className="absolute top-[-80px] left-[-60px] w-72 h-72 opacity-20 blur-2xl -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="#c7d2fe" d="M44.8,-67.2C58.2,-59.7,68.7,-48.2,74.2,-34.9C79.7,-21.6,80.2,-6.5,77.2,7.7C74.2,21.9,67.7,35.2,57.2,45.2C46.7,55.2,32.2,61.9,17.2,66.2C2.2,70.5,-13.3,72.4,-27.2,67.2C-41.1,62,-53.3,49.7,-62.2,35.2C-71.1,20.7,-76.7,4,-74.7,-11.2C-72.7,-26.4,-63.1,-40.1,-50.7,-48.7C-38.3,-57.3,-23.1,-60.8,-7.1,-62.7C8.9,-64.6,17.8,-64.8,44.8,-67.2Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute bottom-[-60px] right-[-60px] w-80 h-80 opacity-10 blur-2xl -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="#bae6fd" d="M38.2,-62.7C51.2,-54.2,62.2,-43.2,67.2,-30.7C72.2,-18.2,71.2,-4.1,67.2,8.7C63.2,21.5,56.2,33,46.2,41.2C36.2,49.4,23.2,54.3,9.2,59.2C-4.8,64.1,-19.8,68.9,-32.2,64.2C-44.6,59.5,-54.4,45.3,-60.2,30.2C-66,15.1,-67.8,-0.9,-62.2,-13.7C-56.6,-26.5,-43.6,-36.1,-30.2,-44.2C-16.8,-52.3,-2.9,-58.9,12.2,-63.2C27.3,-67.5,54.6,-69.2,38.2,-62.7Z" transform="translate(100 100)" />
        </svg>
        {/* Animated Logo with animated border/shadow */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 blur-xl opacity-40 group-hover:opacity-60 transition-all animate-navie-glow" aria-hidden="true"></span>
            <div className="transition-transform duration-300 hover:scale-110 active:scale-105 relative z-10">
              <AnimatedLogo size={isMobile ? "lg" : "xl"} autoPlay={true} />
            </div>
          </div>
        </div>
        {/* Name with fade-in/floating animation */}
        <div className="text-center mb-3 animate-fade-in-up">
          <span className="text-display-2xl font-bold gradient-navie-text block font-sans">Divine Nnaji</span>
        </div>
        {/* Main Title with fade-in/floating animation */}
        <h1 className="text-display-xl font-sans text-center mb-4 text-[hsl(var(--foreground))] dark:text-white animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Full-Stack Software Engineer
        </h1>
        {/* Tagline with accent font */}
        <div className="text-center text-lg md:text-2xl text-cyan-700 dark:text-cyan-300 font-medium mb-6 font-display animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Building scalable applications with AI/ML integration and modern backend architecture.
        </div>
        {/* Summary */}
        <p className="text-center text-base md:text-lg text-[hsl(var(--foreground))] dark:text-muted-foreground font-medium max-w-prose mx-auto mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Specializing in Next.js, Node.js, Python, and AI integration | Expertise in full-stack development, automation workflows, and data science.
        </p>
        {/* Decorative Divider */}
        <div className="flex justify-center mb-5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-navie-gradient" />
        </div>
        {/* CTA Button */}
        <div className="flex justify-center items-center mb-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Button
            onClick={() => scrollToSection("about")}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 w-full sm:w-auto transform hover:scale-105 focus:scale-105"
            aria-label="About Divine Nnaji"
          >
            About Me
          </Button>
        </div>
        {/* Animated Scroll Down Indicator */}
        <div className="flex justify-center mt-2 mb-1 animate-bounce" aria-hidden="true">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-cyan-400">
            <path d="M12 5v14m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
} 
