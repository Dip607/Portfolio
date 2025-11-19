import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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

  // (Scroll detection and IntersectionObserver logic remains unchanged)
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
  }, [navLinks]); // Depend on navLinks for completeness

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">

          {/* Logo (Cyberpunk Styling Remains) */}
          <a href="#" 
            className={`
              text-3xl font-extrabold relative inline-block cursor-pointer hover:cursor-crosshair // ✨ ADDED cursor
              bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
              text-transparent bg-clip-text 
              animate-flicker-animation 
              transition-colors duration-300
              hover:text-pink-400 hover:scale-105
            `}
            style={{ 
                fontFamily: '"Press Start 2P", cursive',
                textShadow: '0 0 8px rgba(255, 0, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5), 0 0 30px rgba(255, 0, 255, 0.3)'
            }}
          >
            DIPAN
          </a>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`
                  text-foreground/70 transition-all duration-200 relative
                  hover:text-primary 
                  hover:-translate-y-[1px]
                  hover:cursor-crosshair // ✨ ADDED cursor
                  hover:text-shadow-neon-blue // ✨ ADDED GLOW EFFECT
                  ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary font-bold border-b-2 border-primary text-shadow-neon-pink' // Active Styling + GLOW
                      : 'font-medium'
                  }
                `}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="/resume.pdf"
              target="_blank"                 
              rel="noopener noreferrer"
              className="hover:cursor-crosshair" // ✨ ADDED cursor to the container
            >
             <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 hover:scale-[1.03] hover:shadow-neon-blue">
              Resume
             </Button>
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-foreground hover:cursor-crosshair" // ✨ ADDED cursor
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-dropdown" 
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div 
          id="mobile-menu-dropdown" 
          role="menu"               
          className="absolute top-full right-4 mt-2 w-64 bg-background border border-gray-200 rounded-lg shadow-2xl p-4 animate-fade-in md:hidden"
        >

          {/* Mobile Menu Links */}
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`
                  p-2 rounded-md transition-colors font-medium hover:cursor-crosshair // ✨ ADDED cursor
                  ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary bg-primary/10' 
                      : 'text-foreground/80 hover:bg-foreground/5'
                  }
                `}
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </a>
            ))}

            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full mt-2 hover:cursor-crosshair" // ✨ ADDED cursor to the container
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                Resume
              </Button>
            </a>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navigation;