import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when menu opens (reverted to auto since it's no longer fullscreen)
  useEffect(() => {
    // We remove the overflow: hidden property for the new mobile box design
    // as it's not a full page overlay anymore.
    document.body.style.overflow = "auto"; 
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      // ✨ MODIFIED: Added font-mono class
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-gradient">
            Dipan
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="/resume.pdf" // 👈 Set the path to your PDF file here
              target="_blank"                 
              rel="noopener noreferrer"       
            >
             <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Resume
             </Button>
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MODIFIED: BOX Mobile Menu (Dropdown/Popover style) */}
      {isMobileMenuOpen && (
        <div 
          className="absolute top-full right-4 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-2xl p-4 animate-fade-in md:hidden"
        >

          {/* Menu Links */}
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-black/80 hover:text-primary text-base font-medium p-2 rounded-md hover:bg-gray-50 transition-colors"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </a>
            ))}

            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full mt-2"
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