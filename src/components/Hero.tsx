import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import ParallaxSection from '@/components/ParallaxSection';
import RippleButton from '@/components/RippleButton';
import FloatingShapes from '@/components/FloatingShapes';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <FloatingShapes />
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-primary mb-4">
              👋 Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="heading-xl mb-6">
            Hi, I'm <span className="text-gradient">Dipan</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A passionate developer crafting beautiful digital experiences with modern web technologies
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <RippleButton size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </RippleButton>
            <RippleButton 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              rippleColor="rgba(59, 130, 246, 0.3)"
            >
              Get In Touch
            </RippleButton>
          </div>

          {/* Social Links */}
          <TooltipProvider>
            <div className="flex items-center justify-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
                  >
                    <Github size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View GitHub Profile</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Connect on LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="mailto:dipan@example.com"
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
                  >
                    <Mail size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Send Email</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ParallaxSection speed={0.3}>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
};

export default Hero;
