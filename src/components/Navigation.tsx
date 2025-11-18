import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0.6,
      }
    );

    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-mono ${
        isScrolled
          ? 'py-2'
          : 'py-4'
      }`}
    >
      {/* Floating Container with Glassmorphism */}
      <div className={`section-container transition-all duration-500 ${isScrolled ? 'px-4' : 'px-4'}`}>
        <div
          className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
            isScrolled
              ? 'bg-background/70 backdrop-blur-xl shadow-2xl shadow-gradient-start/10 border border-border/50'
              : 'bg-background/40 backdrop-blur-md border border-border/30'
          }`}
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-gradient-start/5 via-gradient-middle/5 to-gradient-end/5 opacity-50" />
          
          {/* Bottom Gradient Line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gradient-middle to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative flex items-center justify-between px-6 py-4">
            {/* Logo with Gradient */}
            <a
              href="#"
              className="group relative flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="text-gradient-start animate-pulse" size={24} />
              <span className="text-2xl font-extrabold gradient-text hover:scale-105 transition-transform duration-300">
                DIPAN
              </span>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="relative group px-4 py-2"
                    style={{
                      animation: `fade-in 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    {/* Hover Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gradient-start/10 to-gradient-middle/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100" />
                    
                    {/* Link Text */}
                    <span
                      className={`relative text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? 'gradient-text font-bold'
                          : 'text-foreground/70 group-hover:text-foreground'
                      }`}
                    >
                      {link.label}
                    </span>

                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gradient-start to-gradient-middle" />
                    )}

                    {/* Hover Underline */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gradient-middle to-gradient-end scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                  </a>
                );
              })}

              {/* Resume Button with Gradient */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4"
              >
                <Button className="relative overflow-hidden bg-gradient-to-r from-gradient-start to-gradient-middle hover:from-gradient-middle hover:to-gradient-end text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gradient-middle/50 border-0">
                  <span className="relative z-10">Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gradient-middle to-gradient-end opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative p-2 rounded-lg hover:bg-gradient-start/10 transition-colors duration-300 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {/* Button Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              
              {isMobileMenuOpen ? (
                <X size={24} className="relative text-foreground" />
              ) : (
                <Menu size={24} className="relative text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with SOLID Background */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 mt-3 animate-fade-in">
          {/* CHANGED:
            - Replaced 'bg-background/80 backdrop-blur-xl' with 'bg-background' for solid color.
            - Removed the internal gradient div.
          */}
          <div className="relative overflow-hidden rounded-2xl **bg-background** shadow-2xl border border-border/50 p-6">
            {/* The gradient background overlay is removed here for a solid color */}

            <div className="relative flex flex-col gap-2">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="relative group"
                    style={{
                      animation: `fade-in 0.4s ease-out ${index * 0.05}s both`,
                    }}
                  >
                    <div
                      className={`relative px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-gradient-start/20 to-gradient-middle/20 border border-gradient-middle/30'
                          : 'hover:bg-foreground/5 border border-transparent'
                      }`}
                    >
                      <span
                        className={`font-medium transition-colors duration-300 ${
                          isActive ? 'gradient-text' : 'text-foreground/80 group-hover:text-foreground'
                        }`}
                      >
                        {link.label}
                      </span>

                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-gradient-to-b from-gradient-start to-gradient-middle" />
                      )}
                    </div>
                  </a>
                );
              })}

              {/* Mobile Resume Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
              >
                <Button className="w-full bg-gradient-to-r from-gradient-start to-gradient-middle hover:from-gradient-middle hover:to-gradient-end text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gradient-middle/50 border-0">
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;