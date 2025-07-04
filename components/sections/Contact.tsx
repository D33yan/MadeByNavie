import { MobileOptimizedSection } from "@/components/animations/mobile-optimized-section";
import { ContactForm } from "@/components/forms/contact-form";
import { TouchOptimizedList } from "@/components/animations/touch-optimized-list";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Instagram, Phone, MapPin, Clock, Linkedin, Github } from "lucide-react";
import { NavieLogo } from "@/components/logo/navie-logo";

interface ContactProps {
  isMobile: boolean;
}

export function Contact({ isMobile }: ContactProps) {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-[hsl(222,84%,4%)]">
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
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/10 to-rose-500/10 text-pink-400 dark:text-pink-300 text-sm font-semibold rounded-full border border-pink-500/20 dark:border-pink-400/20 mb-6">
              Let's Connect
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight text-[hsl(var(--foreground))] dark:text-white">
              Let's <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">create</span> something amazing together
            </h2>
            <p className="text-lg md:text-xl text-[hsl(var(--foreground))] dark:text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed font-medium">
              Ready to elevate your digital presence? Let's collaborate and bring your vision to life with MadeByNavie's unique blend of technology and artistry.
            </p>
          </div>
        </MobileOptimizedSection>
        
        {/* Contact Form */}
        <MobileOptimizedSection
          animation="scale-in"
          delay={400}
          mobileAnimation="fade-up"
        >
          <div className="max-w-4xl mx-auto mb-16 md:mb-20">
            <ContactForm />
          </div>
        </MobileOptimizedSection>

        {/* Contact Information */}

        {/* Alternative Contact Methods */}
        <MobileOptimizedSection
          animation="fade-up"
          delay={800}
          mobileAnimation="fade-up"
        >
          <div className="text-center">
            <p className="text-muted-foreground mb-8 md:mb-12 font-medium text-lg md:text-xl">
              Prefer a different way to connect?
            </p>
            <TouchOptimizedList
              staggerDelay={isMobile ? 80 : 100}
              animation="scale-in"
              mobileAnimation="fade-up"
              className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 md:mb-20"
            >
              {/* Improved outlined social/contact buttons */}
              <Button
                asChild
                variant="outline"
                className="border-green-500/30 text-green-500 hover:bg-green-500/10 hover:border-green-400/50 active:scale-95 transition-all duration-300 font-semibold px-6 py-3 rounded-xl"
              >
                <a href="https://wa.me/2348106890380" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50 active:scale-95 transition-all duration-300 font-semibold px-6 py-3 rounded-xl"
              >
                <a href="mailto:dnnaji26@gmail.com?subject=Project%20Inquiry&body=Hi%20Divine,%0A%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you." target="_blank" rel="noopener noreferrer" aria-label="Email">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-pink-500/30 text-pink-400 hover:bg-pink-500/10 hover:border-pink-400/50 active:scale-95 transition-all duration-300 font-semibold px-6 py-3 rounded-xl"
              >
                <a href="https://www.instagram.com/callmenavie?utm_source=qr&igsh=MTZxdXh6b3doczFuMw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400/50 active:scale-95 transition-all duration-300 font-semibold px-6 py-3 rounded-xl"
              >
                <a href="https://www.linkedin.com/in/divine-nnaji-858a53283" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-500/30 text-slate-400 hover:bg-slate-500/10 hover:border-slate-400/50 active:scale-95 transition-all duration-300 font-semibold px-6 py-3 rounded-xl"
              >
                <a href="https://github.com/D33yan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </TouchOptimizedList>
          </div>
        </MobileOptimizedSection>

        {/* Footer */}
        <MobileOptimizedSection
          animation="fade-up"
          delay={1000}
          mobileAnimation="fade-up"
        >
          <div className="pt-8 md:pt-12 border-t border-slate-700/50 text-center">
            <div className="flex justify-center mb-6 md:mb-8">
              <NavieLogo size="sm" variant="icon" animated={false} />
            </div>
            <p className="text-muted-foreground text-sm md:text-base font-medium mb-4 font-sans">
              © 2024 MadeByNavie - Divine Nnaji. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 text-xs md:text-sm text-slate-500 mb-4 font-sans">
              <a href="#" className="hover:text-slate-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-slate-400 transition-colors duration-300">Cookie Policy</a>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="#home"
                aria-label="Back to top"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold text-base md:text-lg shadow-lg hover:from-cyan-600 hover:to-purple-600 hover:shadow-2xl hover:scale-105 active:scale-100 transition-all duration-300 font-sans focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="-ml-1">
                  <path d="M12 19V5m0 0l-7 7m7-7l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to top
              </a>
            </div>
          </div>
        </MobileOptimizedSection>
      </div>
    </section>
  );
} 