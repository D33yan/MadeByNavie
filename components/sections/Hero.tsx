import { Button } from "@/components/ui/button";

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
      className="py-16 md:py-24 flex items-center justify-center bg-white dark:bg-[hsl(222,84%,4%)]"
    >
      <div className="content-container flex flex-col items-center text-center">
        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] dark:text-white mb-2 font-sans">
          Divine Nnaji
        </h1>
        {/* Title */}
        <p className="text-lg md:text-xl text-muted-foreground mb-6">
          Full-Stack Software Engineer & AI/ML Developer
        </p>
        {/* Brief Description */}
        <p className="text-base text-muted-foreground max-w-2xl mb-8">
          Specializing in building scalable full-stack applications with Next.js, Node.js, and Python. Experience in AI/ML integration and automation workflows.
        </p>
        {/* CTA Button */}
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <Button
            onClick={() => scrollToSection("work")}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
            aria-label="View work"
          >
            View Work
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="px-6 py-2 rounded-lg"
            aria-label="Get in touch"
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
} 
