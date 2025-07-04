import { MobileOptimizedSection } from "../animations/mobile-optimized-section";
import { TouchOptimizedList } from "../animations/touch-optimized-list";
import { TouchInteractionCard } from "../animations/touch-interaction-card";
import { CardContent } from "@/components/ui/card";
import { ArrowUpRight, ExternalLink, Github, Eye, Code, Calendar, ShoppingCart, Book, Brain, BarChart2, Briefcase } from "lucide-react";

interface Project {
  title: string;
  type: string;
  tech: string;
  description: string;
  gradient: string;
  icon: any;
  liveDemo?: string;
  githubCode?: string;
  date: string;
}

interface WorkProps {
  isMobile: boolean;
  projects: Project[];
}

export function Work({ isMobile, projects }: WorkProps) {
  // Only use the five recently updated projects, with icons and recruiter-friendly order
  const allProjects = [
    {
      title: 'E-commerce Website Template',
      type: 'Fullstack Template',
      liveDemo: 'https://afabric-ecommercestore.vercel.app/',
      github: 'https://github.com/D33yan/afabric-ecommercestore',
      description: 'A robust, fullstack e-commerce template featuring product listings, shopping cart, and secure checkout. Built with scalability and performance in mind, this template is ideal for launching modern online stores quickly and efficiently.',
      icon: ShoppingCart
    },
    {
      title: 'School Academic Journal Website',
      type: 'Academic/School Platform',
      liveDemo: 'https://next-academic-journal.vercel.app/',
      github: 'https://github.com/D33yan/next-academic-journal',
      description: 'A digital platform for managing and publishing academic journals. Supports article submissions, peer review, and editorial workflows. Designed for educational institutions seeking a streamlined, user-friendly journal management system.',
      icon: Book
    },
    {
      title: 'AI Typhoid Checker',
      type: 'AI/Health Tool',
      liveDemo: 'https://typhoidchecker.vercel.app',
      github: 'https://github.com/D33yan/typhoidchecker',
      description: 'An AI-powered web tool that helps users assess their risk of typhoid fever based on symptoms and risk factors. Utilizes intelligent algorithms to provide instant, user-friendly health guidance and recommendations. Built for accessibility and ease of use.',
      icon: Brain
    },
    {
      title: 'Fitness Tracker',
      type: 'Frontend Web App',
      liveDemo: 'https://fitness-tracker-one-xi.vercel.app/',
      github: 'https://github.com/D33yan/fitness-tracker',
      description: 'A modern fitness tracking application designed to help users monitor workouts, set goals, and visualize progress. Features an intuitive UI, responsive design, and interactive charts for a seamless fitness experience.',
      icon: BarChart2
    },
    {
      title: 'Business Landing Page',
      type: 'Landing Page',
      liveDemo: 'https://bigfx-tradingacademy.vercel.app/',
      github: 'https://github.com/D33yan/bigfx-tradingacademy',
      description: 'A high-converting business landing page for Big FX Trading Academy. Showcases services, testimonials, and calls-to-action with a clean, professional design. Optimized for lead generation and brand credibility.',
      icon: Briefcase
    }
  ];

  return (
    <section id="work" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-[hsl(222,84%,4%)]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/60 to-white/40 dark:from-slate-900/20 dark:via-purple-900/10 dark:to-cyan-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MobileOptimizedSection
          animation="fade-up"
          delay={200}
          mobileAnimation="fade-up"
        >
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 text-emerald-400 dark:text-emerald-300 text-sm font-semibold rounded-full border border-emerald-500/20 dark:border-emerald-400/20 mb-6">
              Portfolio
            </span>
            <h2 className="section-title gradient-navie-text bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Selected Works
            </h2>
            <p className="text-lg md:text-xl text-[hsl(var(--foreground))] dark:text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              A showcase of recent projects that demonstrate creativity and technical excellence
            </p>
          </div>
        </MobileOptimizedSection>
        
        <TouchOptimizedList
          staggerDelay={isMobile ? 120 : 150}
          animation="slide-left"
          mobileAnimation="fade-up"
          className="space-y-6 md:space-y-8"
        >
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <TouchInteractionCard
                className="group relative bg-[hsl(var(--card))] border border-[hsl(var(--border))] backdrop-blur-xl shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-blue-200/80 dark:bg-gradient-to-br dark:from-slate-900/50 dark:to-slate-800/30 dark:border-slate-700/50 hover:scale-[1.02] overflow-hidden"
                touchFeedback={true}
                scaleOnTouch={true}
              >
                <CardContent className="relative p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4 md:space-x-6 mb-4 md:mb-0">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-900/60 rounded-xl flex items-center justify-center shadow-lg border border-white/20 flex-shrink-0">
                        <project.icon className="w-7 h-7 md:w-8 md:h-8 text-cyan-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-bold text-[hsl(var(--foreground))] dark:text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base mb-1 font-medium">
                          {project.type}
                        </p>
                        <p className="text-muted-foreground/80 text-sm md:text-base line-clamp-2 mb-2">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {/* Project Links */}
                      <div className="flex flex-row gap-2">
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-cyan-400 hover:text-cyan-300 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 text-sm font-medium hover:scale-105 whitespace-nowrap"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Eye className="w-4 h-4 group-hover/link:animate-pulse" />
                            <span>Live Demo</span>
                          </a>
                        )}
                        {'github' in project && project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-slate-500/20 to-gray-500/20 hover:from-slate-500/30 hover:to-gray-500/30 text-slate-300 hover:text-white rounded-lg border border-slate-500/30 hover:border-slate-400/50 transition-all duration-300 text-sm font-medium hover:scale-105 whitespace-nowrap"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-4 h-4 group-hover/link:animate-pulse" />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>
                      <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-cyan-400 group-hover:scale-110 group-active:scale-105 transition-all duration-300" />
                    </div>
                  </div>
                </CardContent>
              </TouchInteractionCard>
            </div>
          ))}
        </TouchOptimizedList>

        {/* Portfolio Stats */}
   
      </div>
    </section>
  );
} 