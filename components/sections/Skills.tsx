import { MobileOptimizedSection } from "../animations/mobile-optimized-section";
import { TouchOptimizedList } from "../animations/touch-optimized-list";
import { 
  Code, 
  Palette, 
  Zap, 
  Cpu, 
  Globe, 
  Smartphone, 
  Database, 
  Shield,
  Rocket,
  Sparkles,
  Layers,
  Server,
  Cloud,
  Smartphone as Mobile,
  Monitor,
  Terminal,
  GitBranch,
  Package,
  Wifi,
  Lock,
  Cpu as Microchip
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface TechOrbit {
  id: string;
  name: string;
  category: string;
  icon?: React.ComponentType<{ className?: string }>;
  logo?: string;
  color: string;
  gradient: string;
  orbitRadius: number;
  orbitSpeed: number;
  technologies: string[];
  description: string;
  proficiency: number;
  size: number;
}

interface SkillsProps {
  isMobile: boolean;
  skills: {
    frontend: any[];
    design: any[];
  };
}

export function Skills({ isMobile, skills }: SkillsProps) {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [time, setTime] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Golden ratio constants - Decompressed solar system
  const PHI = 1.618033988749895;
  const BASE_SIZE = isMobile ? 60 : 80; // Restore original base size
  const BASE_ORBIT = isMobile ? 90 : 130; // Restore original orbit size

  // Comprehensive tech stack with solar system design and real logos
  const techOrbits: TechOrbit[] = [
    // Core Frontend (Sun - Center)
    {
      id: "react",
      name: "React",
      category: "frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "cyan",
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
      orbitRadius: 0,
      orbitSpeed: 0,
      technologies: ["React 18", "Hooks", "Context", "Suspense", "Concurrent Features"],
      description: "Modern React with latest features",
      proficiency: 95,
      size: BASE_SIZE * PHI
    },
    // Frontend Framework (Inner Orbit)
    {
      id: "nextjs",
      name: "Next.js",
      category: "frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "slate",
      gradient: "from-slate-600 via-gray-700 to-black",
      orbitRadius: BASE_ORBIT,
      orbitSpeed: 0.5,
      technologies: ["App Router", "Server Components", "SSR", "ISR", "API Routes"],
      description: "Full-stack React framework",
      proficiency: 92,
      size: BASE_SIZE * 0.9
    },
    // Styling (Inner Orbit)
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      color: "teal",
      gradient: "from-teal-400 via-cyan-500 to-blue-600",
      orbitRadius: BASE_ORBIT,
      orbitSpeed: 0.7,
      technologies: ["Utility-First", "Custom Config", "Dark Mode", "Responsive"],
      description: "Utility-first CSS framework",
      proficiency: 90,
      size: BASE_SIZE * 0.85
    },
    // Animation (Outer Orbit)
    {
      id: "framer",
      name: "Framer Motion",
      category: "frontend",
      logo: "https://cdn.worldvectorlogo.com/logos/framer-1.svg",
      color: "pink",
      gradient: "from-pink-400 via-rose-500 to-red-600",
      orbitRadius: BASE_ORBIT * PHI * 1.3,
      orbitSpeed: 0.9,
      technologies: ["Animations", "Gestures", "Variants", "Layout Animations"],
      description: "Production-ready motion library",
      proficiency: 88,
      size: BASE_SIZE * 0.75
    },
    // Type Safety (Outer Orbit)
    {
      id: "typescript",
      name: "TypeScript",
      category: "frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "blue",
      gradient: "from-blue-400 via-indigo-500 to-purple-600",
      orbitRadius: BASE_ORBIT * PHI * 1.3,
      orbitSpeed: 0.5,
      technologies: ["Type Safety", "Interfaces", "Generics", "Advanced Types"],
      description: "Typed JavaScript at scale",
      proficiency: 90,
      size: BASE_SIZE * 0.85
    },
    // Version Control (Outer Orbit)
    {
      id: "git",
      name: "Git & GitHub",
      category: "tools",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "orange",
      gradient: "from-orange-400 via-red-500 to-pink-600",
      orbitRadius: BASE_ORBIT * PHI * 1.6,
      orbitSpeed: 0.6,
      technologies: ["Version Control", "CI/CD", "Actions", "Collaboration"],
      description: "Version control and collaboration",
      proficiency: 92,
      size: BASE_SIZE * 0.75
    },
    // Backend (Middle Orbit)
    {
      id: "nodejs",
      name: "Node.js",
      category: "backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "green",
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      orbitRadius: BASE_ORBIT * PHI,
      orbitSpeed: 0.4,
      technologies: ["Express.js", "REST APIs", "Middleware", "File System"],
      description: "JavaScript runtime environment",
      proficiency: 88,
      size: BASE_SIZE * 0.95
    },
    // Database (Middle Orbit)
    {
      id: "mongodb",
      name: "MongoDB",
      category: "backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "green",
      gradient: "from-green-500 via-emerald-600 to-teal-700",
      orbitRadius: BASE_ORBIT * PHI,
      orbitSpeed: 0.3,
      technologies: ["NoSQL", "Aggregation", "Indexing", "Atlas", "Compass"],
      description: "Document-based database",
      proficiency: 85,
      size: BASE_SIZE * 0.8
    },
    // AI/ML (Outer Orbit)
    {
      id: "python",
      name: "Python",
      category: "aiml",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "blue",
      gradient: "from-yellow-400 via-blue-500 to-indigo-600",
      orbitRadius: BASE_ORBIT * PHI * 1.9,
      orbitSpeed: 0.7,
      technologies: ["Data Science", "Machine Learning", "Automation", "NumPy"],
      description: "Python for data science and machine learning",
      proficiency: 85,
      size: BASE_SIZE * 0.7
    },
    {
      id: "sklearn",
      name: "Scikit-learn",
      category: "aiml",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sklearn/sklearn-original.svg",
      color: "orange",
      gradient: "from-orange-400 via-red-500 to-pink-600",
      orbitRadius: BASE_ORBIT * PHI * 2.1,
      orbitSpeed: 0.8,
      technologies: ["Classification", "Regression", "Data Cleaning", "Feature Engineering"],
      description: "Machine learning library for Python",
      proficiency: 82,
      size: BASE_SIZE * 0.7
    },
    // Automation Tools (Outer Orbit)
    {
      id: "n8n",
      name: "n8n",
      category: "automation",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/n8n/n8n-original.svg",
      color: "red",
      gradient: "from-red-400 via-pink-500 to-purple-600",
      orbitRadius: BASE_ORBIT * PHI * 2.3,
      orbitSpeed: 0.6,
      technologies: ["Workflow Automation", "API Integration", "Data Processing", "Scheduling"],
      description: "Open-source workflow automation platform",
      proficiency: 80,
      size: BASE_SIZE * 0.7
    },
    {
      id: "zapier",
      name: "Zapier",
      category: "automation",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zapier/zapier-original.svg",
      color: "orange",
      gradient: "from-orange-400 via-yellow-500 to-red-600",
      orbitRadius: BASE_ORBIT * PHI * 2.5,
      orbitSpeed: 0.5,
      technologies: ["No-code Automation", "Integrations", "Webhooks", "Scheduling"],
      description: "Integration and automation platform",
      proficiency: 80,
      size: BASE_SIZE * 0.7
    }
  ];

  const categories = [
    { id: "all", name: "All Technologies", count: techOrbits.length },
    { id: "frontend", name: "Frontend", count: techOrbits.filter(t => t.category === "frontend").length },
    { id: "backend", name: "Backend", count: techOrbits.filter(t => t.category === "backend").length },
    { id: "aiml", name: "AI/ML", count: techOrbits.filter(t => t.category === "aiml").length },
    { id: "automation", name: "Automation", count: techOrbits.filter(t => t.category === "automation").length },
    { id: "tools", name: "Tools", count: techOrbits.filter(t => t.category === "tools").length }
  ];

  const filteredOrbits = activeCategory === "all" 
    ? techOrbits 
    : techOrbits.filter(orbit => orbit.category === activeCategory);

  // Animation loop (use requestAnimationFrame for performance)
  useEffect(() => {
    if (paused) return;
    let frameId: number;
    const animate = () => {
      setTime(prev => prev + 0.02);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [paused]);

  const getOrbitPosition = (orbit: TechOrbit) => {
    if (orbit.orbitRadius === 0) return { x: 0, y: 0 };
    
    const angle = time * orbit.orbitSpeed;
    const x = Math.cos(angle) * orbit.orbitRadius;
    const y = Math.sin(angle) * orbit.orbitRadius;
    
    return { x, y };
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-[hsl(222,84%,4%)]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/60 to-white/40 dark:from-slate-900/20 dark:via-purple-900/10 dark:to-cyan-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <MobileOptimizedSection
          animation="fade-up"
          delay={100}
          mobileAnimation="fade-up"
        >
          <div className="section-header mb-8 md:mb-10">
            <div className="section-badge">
              <Code className="w-4 h-4 mr-2" />
              Technical Expertise
            </div>
            <h2 className="section-title gradient-navie-text text-[hsl(var(--foreground))] dark:gradient-navie-text">
              Skills & Technologies
            </h2>
            <p className="section-subtitle text-[hsl(var(--foreground))] dark:text-muted-foreground">
              Full-stack development, AI/ML, automation workflows, and modern backend architecture
            </p>
          </div>
        </MobileOptimizedSection>

        {/* Category Navigation - Improved spacing and mobile responsiveness */}
        <MobileOptimizedSection
          animation="fade-up"
          delay={300}
          mobileAnimation="fade-up"
        >
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="flex flex-wrap justify-center gap-2 bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl rounded-2xl p-2 border border-[hsl(var(--border))] dark:border-slate-700/50 shadow-2xl">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 text-sm md:text-base ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-700 dark:text-white shadow-lg border border-cyan-200/60 dark:border-cyan-500/30"
                      : "text-slate-500 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-white hover:bg-cyan-100/40 dark:hover:bg-slate-800/50"
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="bg-slate-200/80 dark:bg-slate-700/50 px-2 py-1 rounded-full text-xs font-bold min-w-[20px] text-center">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </MobileOptimizedSection>

        {/* Pause/Resume Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setPaused(p => !p)}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md border border-cyan-500 bg-slate-900/70 hover:bg-cyan-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 ${paused ? 'text-cyan-400' : 'text-white'}`}
            aria-label={paused ? 'Resume animation' : 'Pause animation'}
          >
            {paused ? 'Resume Animation' : 'Pause Animation'}
          </button>
        </div>

        {/* Solar System Container - Decompressed with better spacing */}
        <MobileOptimizedSection
          animation="scale-in"
          delay={400}
          mobileAnimation="fade-up"
        >
          <div 
            ref={containerRef}
            className="relative w-full max-w-5xl lg:max-w-6xl mx-auto aspect-square rounded-full"
          >
            {/* Orbit Rings */}
            {Array.from(new Set(filteredOrbits.map(o => o.orbitRadius))).map((radius, index) => (
              radius > 0 && (
                <div
                  key={radius}
                  className="absolute inset-0 border border-slate-700/20 rounded-full animate-pulse"
                  style={{
                    width: radius * 2,
                    height: radius * 2,
                    left: `calc(50% - ${radius}px)`,
                    top: `calc(50% - ${radius}px)`,
                    animationDelay: `${index * 0.5}s`,
                    animationDuration: `${3 + index}s`
                  }}
                />
              )
            ))}

            {/* Tech Planets */}
            {filteredOrbits.map((orbit, index) => {
              const position = getOrbitPosition(orbit);
              const isHovered = hoveredTech === orbit.id;
              
              return (
                <div
                  key={orbit.id}
                  className={`absolute transition-all duration-1000 ease-out ${
                    isMobile ? 'cursor-pointer' : ''
                  }`}
                  style={{
                    left: `calc(50% + ${position.x}px - ${orbit.size / 2}px)`,
                    top: `calc(50% + ${position.y}px - ${orbit.size / 2}px)`,
                    zIndex: isHovered ? 50 : 10
                  }}
                  onMouseEnter={() => !isMobile && setHoveredTech(orbit.id)}
                  onMouseLeave={() => !isMobile && setHoveredTech(null)}
                  onClick={() => isMobile && setHoveredTech(hoveredTech === orbit.id ? null : orbit.id)}
                >
                  {/* Planet */}
                  <div
                    className={`relative group transition-all duration-500 ${
                      isHovered ? 'scale-150' : 'scale-100'
                    }`}
                  >
                    {/* Planet Glow */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${orbit.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                      style={{ width: orbit.size * 1.5, height: orbit.size * 1.5, left: '-25%', top: '-25%' }}
                    />
                    
                    {/* Planet Body */}
                    <div
                      className={`relative bg-gradient-to-br ${orbit.gradient} rounded-full shadow-2xl border-2 border-white/20 flex items-center justify-center transition-all duration-500 group-hover:shadow-cyan-500/25 group-hover:border-cyan-400/40 overflow-hidden`}
                      style={{ width: orbit.size, height: orbit.size }}
                    >
                      {/* Technology Logo - Bigger on hover */}
                      {orbit.logo ? (
                        <div className={`relative flex items-center justify-center transition-all duration-500 ${
                          isHovered ? 'w-4/5 h-4/5' : 'w-3/5 h-3/5'
                        }`}>
                          <Image
                            src={orbit.logo}
                            alt={orbit.name}
                            width={orbit.size * (isHovered ? 0.8 : 0.6)}
                            height={orbit.size * (isHovered ? 0.8 : 0.6)}
                            className="w-full h-full object-contain filter brightness-0 invert"
                          />
                        </div>
                      ) : orbit.icon ? (
                        <orbit.icon className={`text-white transition-all duration-500 ${
                          isHovered ? 'w-2/3 h-2/3' : 'w-1/2 h-1/2'
                        }`} />
                      ) : null}
                      
                      {/* Orbital Ring */}
                      <div className="absolute inset-0 border border-white/20 rounded-full animate-spin" style={{ animationDuration: `${10 + index * 2}s` }} />
                      
                      {/* Floating Particles */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/40 rounded-full animate-pulse" />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>

                    {/* Planet Label */}
                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 transition-all duration-500 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}>
                      <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-lg px-3 py-2 shadow-2xl">
                        <div className="text-white font-bold text-sm text-center">{orbit.name}</div>
                        <div className="text-cyan-400 text-xs text-center">{orbit.proficiency}%</div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Info Panel - Technology information only */}
                  {isHovered && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-8 w-80 md:w-96 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 shadow-2xl z-[9999]">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 bg-gradient-to-br ${orbit.gradient} rounded-lg flex items-center justify-center overflow-hidden`}>
                            {orbit.logo ? (
                              <Image
                                src={orbit.logo}
                                alt={orbit.name}
                                width={48}
                                height={48}
                                className="w-8 h-8 object-contain filter brightness-0 invert"
                              />
                            ) : orbit.icon ? (
                              <orbit.icon className="w-6 h-6 text-white" />
                            ) : null}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-white font-bold text-sm md:text-base truncate">{orbit.name}</h3>
                            <p className="text-slate-400 text-xs md:text-sm line-clamp-2">{orbit.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400 text-xs">Proficiency</span>
                            <span className="text-cyan-400 font-bold text-sm">{orbit.proficiency}%</span>
                          </div>
                          <div className="w-full bg-slate-800 rounded-full h-2">
                            <div 
                              className={`bg-gradient-to-r ${orbit.gradient} h-2 rounded-full transition-all duration-1000`}
                              style={{ width: `${orbit.proficiency}%` }}
                            />
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold text-sm mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-1">
                            {orbit.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded border border-slate-700/50"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Center Sun (React) - Bigger logo on hover */}
            {filteredOrbits.find(o => o.id === "react") && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-full blur-2xl animate-pulse" />
                  <div className="relative w-36 h-36 md:w-40 md:h-40 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full shadow-2xl border-4 border-white/20 flex items-center justify-center animate-pulse overflow-hidden">
                    <div className={`transition-all duration-500 ${
                      hoveredTech === "react" ? 'w-24 h-24 md:w-28 md:h-28' : 'w-20 h-20 md:w-24 md:h-24'
                    }`}>
                      <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        alt="React"
                        width={112}
                        height={112}
                        className="w-full h-full object-contain filter brightness-0 invert"
                      />
                    </div>
                    <div className="absolute inset-0 border border-white/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </MobileOptimizedSection>

      </div>
    </section>
  );
} 
