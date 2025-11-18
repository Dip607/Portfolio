import { ArrowRight, Github, Linkedin, Mail, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden font-mono">
      {/* Add Custom Styles for Animation and Shadows here if needed for existing components */}
      <style>{`
        @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animation-delay-1s { animation-delay: 0.2s; }

        /* Existing Animations for Buttons (Placeholder) */
        /* @keyframes digital-flicker { ... } */
        /* @keyframes pulse-border { ... } */
        /* ... other animations ... */
      `}</style>

      <div className="animated-grid absolute inset-0"></div>

      {/* Retro Background Components (from previous iteration) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2s"></div> 
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4s"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">

          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-full text-sm font-semibold text-blue-700 backdrop-blur-sm hover:border-blue-300 transition-all duration-300">
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-slide-down">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">Dipan</span>
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 max-w-2xl mx-auto animate-slide-up">
            A passionate developer crafting beautiful digital experiences with modern web technologies
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-1s">
            Full Stack Developer & Creative Problem Solver | Transforming ideas into elegant solutions
          </p>
          
          {/* 🔥 NEW VISUAL SEPARATOR COMPONENT (Matches attached image) 🔥 */}
          <div className="flex items-center justify-center my-12 animate-fade-in animation-delay-1s">
            
            {/* Left Fading Line */}
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent to-blue-400 opacity-80 blur-sm"></div>

            {/* Central Diamond (Rhombus) */}
            <div className="relative w-5 h-5 transform rotate-45 mx-4">
                {/* Inner Blue Diamond */}
                <div className="absolute inset-0 bg-blue-600/80 shadow-[0_0_8px_3px_rgba(59,130,246,0.7)]"></div>
                {/* Lighter/Glow Outline */}
                <div className="absolute inset-0 border border-blue-200/50 shadow-[0_0_5px_1px_rgba(147,197,253,0.9)] animate-pulse"></div>
            </div>

            {/* Right Fading Line */}
            <div className="h-0.5 w-24 bg-gradient-to-l from-transparent to-blue-400 opacity-80 blur-sm"></div>

          </div>
          {/* END NEW SEPARATOR */}

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-slide-up animation-delay-2s">
            {/* 🌟 CYBERPUNK BUTTON 1: View My Work */}
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold shadow-cyber-btn overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Animated Border/Line */}
              <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-300 transition-colors duration-300 animate-pulse-border"></span>
              {/* Optional: Cyberpunk inner glow effect */}
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 animate-digital-flicker"></span>

              <span className="relative flex items-center gap-2">
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </span>
            </button>

            {/* 🌟 CYBERPUNK BUTTON 2: Get In Touch */}
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 rounded-full font-semibold shadow-cyber-outline-btn hover:text-cyan-600 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Animated Border/Line */}
              <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-cyan-400 transition-colors duration-300 animate-pulse-border-reverse"></span>
              {/* Optional: Cyberpunk inner glow effect */}
              <span className="absolute inset-0 bg-blue-200/10 opacity-0 group-hover:opacity-100 animate-digital-flicker animation-delay-1s"></span>

              <span className="relative flex items-center gap-2">
                Get In Touch
                {/* Updated ping animation */}
                <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full relative">
                    <span className="absolute inset-0 bg-blue-600 rounded-full animate-ping-cyberpunk"></span>
                    <span className="relative block w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                </span>
              </span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-slide-up animation-delay-3s">
            <a
              href="https://github.com/Dip607"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-full hover:from-blue-600 hover:to-blue-500 hover:text-white hover:shadow-lg hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <Github size={24} className="group-hover:animate-bounce" />
            </a>

            <a
              href="https://www.linkedin.com/in/dipan-mandal-/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-full hover:from-blue-600 hover:to-blue-500 hover:text-white hover:shadow-lg hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <Linkedin size={24} className="group-hover:animate-bounce" />
            </a>

            <a
              href="mailto:dipanmandal111@gmail.com"
              className="group p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-full hover:from-blue-600 hover:to-blue-500 hover:text-white hover:shadow-lg hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <Mail size={24} className="group-hover:animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-gradient-to-b from-blue-600 to-blue-400 rounded-full flex items-start justify-center p-2 bg-white/50 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}