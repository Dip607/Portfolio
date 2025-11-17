import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="section-container py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <TooltipProvider>
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="mailto:dipan@example.com"
                    className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Email Me</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© 2024 Dipan. Built with</span>
            <Heart size={16} className="text-primary fill-primary animate-pulse" />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
