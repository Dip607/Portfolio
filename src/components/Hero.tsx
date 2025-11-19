import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code, Lightbulb, Rocket } from 'lucide-react';

// --- Simplified Component Definitions for ScrollReveal and Card ---

// Simple Card component definition (using Tailwind classes for structure and context)
const Card = ({ children, className = "" }) => (
    <div className={`p-6 border border-gray-200 bg-white rounded-lg shadow-sm ${className}`}>
        {children}
    </div>
);

// Simplified ScrollReveal (mimics initial state and fade-up animation)
const ScrollReveal = ({ children, animation, delay, className = "" }) => (
    <div 
        // Applying animation classes relevant to the "fade-up" effect used in the About section
        className={`opacity-100 transform translate-y-0 transition-all duration-700 ease-out ${className}`} 
        style={{ transitionDelay: `${delay || 0}s` }}
    >
        {children}
    </div>
);

// --- NEW MATRIX RAIN CANVAS COMPONENT ---
const MatrixRainCanvas = () => {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let width, height;

        const resizeCanvas = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas(); // Initial size setup

        // Character set for the rain (Katana/digital characters)
        const charSet = 'アァカサタナハマヤラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const fontSize = 16;
        const columns = width / fontSize;

        // Tracks the Y-position for each column
        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const draw = () => {
            // Semi-transparent black rectangle to fade out old characters
            ctx.fillStyle = 'rgba(245, 245, 245, 0.05)'; // Using light gray matching the background
            ctx.fillRect(0, 0, width, height);

            ctx.font = `${fontSize}px monospace`;
            
            for (let i = 0; i < drops.length; i++) {
                const text = charSet[Math.floor(Math.random() * charSet.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                // Color the character (subtle blue/cyan glow)
                ctx.fillStyle = `rgba(59, 130, 246, ${Math.random() * 0.4 + 0.3})`; // Blue, varying opacity

                ctx.fillText(text, x, y);

                // Send the drop back to the top randomly once it exceeds the height
                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Increment the drop y position
                drops[i]++;
            }
        };

        let animationFrameId;
        const render = () => {
            draw();
            animationFrameId = window.requestAnimationFrame(render);
        };

        render();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []); // Empty dependency array means this runs once on mount

    return (
        <canvas 
            ref={canvasRef} 
            className="fixed inset-0 pointer-events-none z-10" 
            style={{ opacity: 0.1 }} // Low opacity for subtlety
        />
    );
};

// --- Loading Screen Component (Kept for completeness) ---
const LoadingScreen = ({ onLoaded }) => {
    // State for the terminal log lines
    const [logLines, setLogLines] = useState([
        "Connecting to Dipan's Portfolio Server...",
        "Accessing developer data stream...",
    ]);
    const [isComplete, setIsComplete] = useState(false);
    
    // Simulate data loading and status updates
    useEffect(() => {
        let timer = 0;
        
        const sequence = [
            { delay: 800, line: "[STATUS] Initializing core dependencies... [OK]" },
            { delay: 500, line: "[PROGRESS] Assembling UI components..." },
            { delay: 1000, line: "[ASSET] Loading dynamic assets... (100%)" },
            { delay: 300, line: "[RENDER] Calculating perspective grid parallax..." },
            { delay: 1200, line: "Data stream connection secured. Access granted." },
        ];

        sequence.forEach((item, index) => {
            timer += item.delay;
            window.setTimeout(() => {
                setLogLines(prev => [...prev, item.line]);
            }, timer);
        });

        // Final transition trigger
        timer += 500;
        window.setTimeout(() => {
            setIsComplete(true);
        }, timer);
        
        // Final screen unmount trigger
        timer += 500;
        window.setTimeout(() => {
            onLoaded(); // Call the function to switch to the main App
        }, timer);

        // Cleanup
        return () => {
            sequence.forEach((_, index) => {
                // Clear any pending timeouts if component unmounts early (unlikely here)
            });
        };
    }, [onLoaded]);


    return (
        <div className={`fixed inset-0 bg-gray-900 flex items-center justify-center font-mono transition-opacity duration-500 z-[100] ${isComplete ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-11/12 max-w-2xl bg-black/80 p-8 border border-cyan-500 shadow-cyber-terminal backdrop-blur-sm">
                <div className="flex justify-between text-cyan-400 mb-4">
                    <span className="font-bold">&gt; PORTFOLIO_V1.0</span>
                    <span className="text-sm">STATUS: {isComplete ? 'READY' : 'LOADING...'}</span>
                </div>
                <div className="h-64 overflow-y-auto text-green-400 text-sm">
                    {logLines.map((line, index) => (
                        <p 
                            key={index} 
                            className="whitespace-pre-wrap animate-terminal-line"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {line}
                        </p>
                    ))}
                    {!isComplete && (
                        <p className="text-cyan-400 mt-2 flex">
                            &gt; Awaiting connection 
                            <span className="animate-pulse ml-1">...</span>
                            <span className="terminal-cursor !border-cyan-400 !h-3"></span>
                        </p>
                    )}
                </div>
                {isComplete && (
                    <div className="text-center mt-6 text-xl font-bold text-blue-400 animate-pulse">
                        &gt; **ENTRY SEQUENCE COMPLETE**
                    </div>
                )}
            </div>
             <style>{`
                @keyframes terminal-line {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-terminal-line {
                    animation: terminal-line 0.3s ease-out forwards;
                    opacity: 0;
                }
                .shadow-cyber-terminal {
                    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3);
                }
            `}</style>
        </div>
    );
};


// --- Main Application Component ---

export default function App() {
  // --- NEW STATE FOR LOADING ---
  const [isLoading, setIsLoading] = useState(true);
  
  // --- NEW STATES FOR GLITCH EFFECT ---
  const [isWorkGlitching, setIsWorkGlitching] = useState(false);
  const [isContactGlitching, setIsContactGlitching] = useState(false);
  
  // 1. STATE: Track the cursor position (Used for Orb and Perspective Grid)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // 2. EFFECT: Attach and clean up the mousemove listener & window resize listener
  useEffect(() => {
    // Initialize window size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);


    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // --- NEW TYPING EFFECT LOGIC ---
  const TARGET_TEXT = "Full Stack Developer & Creative Problem Solver | Transforming ideas into elegant solutions";
  const TYPING_SPEED = 60; // ms per character
  const START_DELAY = 500; 

  const [typedText, setTypedText] = useState("");
  
  useEffect(() => {
    // Only run typing effect after loading is complete
    if (isLoading) return;
    
    let index = 0;
    let intervalId: number | undefined;

    const startTyping = () => {
        intervalId = window.setInterval(() => {
            if (index < TARGET_TEXT.length) {
                setTypedText(prev => prev + TARGET_TEXT[index]);
                index++;
            } else {
                window.clearInterval(intervalId);
            }
        }, TYPING_SPEED);
    };

    // Delay start of typing after the App component is rendered
    const timeoutId = window.setTimeout(startTyping, START_DELAY);

    return () => {
        window.clearTimeout(timeoutId);
        if (intervalId) window.clearInterval(intervalId);
    };
  }, [isLoading]); // Rerun when loading state changes

  // Calculate parallax transform values for the grid
  const maxTilt = 4; // Max rotation angle in degrees
  const mouseX = cursorPos.x / windowSize.width; // Normalized X (0 to 1)
  const mouseY = cursorPos.y / windowSize.height; // Normalized Y (0 to 1)

  // Calculate rotation based on cursor position (Center is 0 rotation)
  const rotateY = (mouseX - 0.5) * maxTilt * 2; // -maxTilt to +maxTilt
  const rotateX = (mouseY - 0.5) * maxTilt * -2; // -maxTilt to +maxTilt (inverted for natural feel)
  
  // Calculate slight shift for translation (center is 0 shift)
  const translateX = (mouseX - 0.5) * 10; // -5px to +5px
  const translateY = (mouseY - 0.5) * 10; // -5px to +5px

  const perspectiveGridStyle = {
    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(-100px) translateX(${translateX}px) translateY(${translateY}px)`,
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // 5. CONDITIONAL RENDER: Show LoadingScreen or main content
  if (isLoading) {
    return <LoadingScreen onLoaded={() => setIsLoading(false)} />;
  }

  // 6. MAIN APP RENDER
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* --- CSS STYLES --- */}
      <style>{`
        @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animation-delay-1s { animation-delay: 0.2s; }

        /* --- GLITCH ANIMATION KEYFRAMES --- */
        @keyframes glitch-flicker {
          0%, 19.9%, 22%, 62.9%, 64%, 69.9%, 72%, 77.9%, 78% { text-shadow: 0 0 0 transparent; }
          20%, 21.9%, 63%, 63.9%, 70%, 71.9%, 75% { text-shadow: 1px 0 0 rgba(255, 0, 0, 0.7), -1px 0 0 rgba(0, 0, 255, 0.7); }
          72.5% { text-shadow: 1px 0 0 rgba(0, 255, 0, 0.7), -1px 0 0 rgba(255, 0, 255, 0.7); }
        }
        @keyframes glitch-shift {
          0% { transform: translate(0); }
          1% { transform: translate(-2px, -2px) skew(-5deg); }
          2% { transform: translate(1px, 1px) skew(2deg); }
          3% { transform: translate(0); }
          100% { transform: translate(0); }
        }
        .glitch-text {
          animation: glitch-flicker 0.5s infinite step-end alternate, glitch-shift 0.5s infinite;
          position: relative;
        }
        
        /* --- ORB ANIMATION KEYFRAMES --- */
        @keyframes orb-pulse {
          0% { opacity: 0.4; }
          50% { opacity: 0.6; }
          100% { opacity: 0.4; }
        }
        .neon-orb {
          top: 0; left: 0;
          width: 60px; height: 60px;
          background-color: rgba(0, 255, 255, 0.5);
          border-radius: 50%;
          filter: blur(30px);
          pointer-events: none;
          transition: transform 0.12s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: 5;
          animation: orb-pulse 4s infinite alternate;
        }

        /* --- SOCIAL ICON GLOW EFFECT --- */
        .social-neon-link {
          transition: all 0.3s ease-out;
          box-shadow: 0 0 0 rgba(0, 0, 0, 0);
        }
        .social-neon-link:hover {
          transform: scale(1.1);
          box-shadow: 
            0 0 5px rgba(0, 255, 255, 0.6), 
            0 0 15px rgba(59, 130, 246, 0.8),
            0 0 25px rgba(0, 255, 255, 0.4);
        }

        /* --- PERSPECTIVE GRID CSS --- */
        .perspective-container {
            perspective: 1000px;
            overflow: hidden;
            z-index: 1;
        }
        .perspective-grid {
            position: absolute;
            width: 200%;
            height: 200%;
            top: -50%;
            left: -50%;
            transform-origin: 50% 50%; 
            transform: rotateX(70deg) translateZ(-100px);
            transition: transform 0.2s ease-out;
            background-image: 
                repeating-linear-gradient(0deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.1) 1px, transparent 1px, transparent 100px),
                repeating-linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.1) 1px, transparent 1px, transparent 100px);
            background-size: 100px 100px;
            animation: grid-scroll 60s linear infinite;
        }
        @keyframes grid-scroll {
            from { background-position: 0 0; }
            to { background-position: 100px 100px; }
        }

        /* --- NEW TERMINAL CURSOR CSS --- */
        @keyframes blink {
            0%, 100% { border-color: rgba(59, 130, 246, 1); } /* Blue cursor visible */
            50% { border-color: transparent; } /* Cursor invisible */
        }
        .terminal-cursor {
            /* Simulates a vertical line cursor */
            border-right: 2px solid; 
            animation: blink 0.7s step-end infinite;
            display: inline-block;
            height: 1.2em; /* Height should match line height */
            vertical-align: middle;
            margin-left: 2px;
            margin-right: -2px; /* Prevent layout shift */
        }
      `}</style>

      {/* 3. CURSOR ORB ELEMENT - RENDERED ABSOLUTELY */}
      <div
        className="fixed neon-orb"
        style={{
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
        }}
      />

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden font-mono">
        
        {/* 7. MATRIX RAIN OVERLAY (New Component) */}
        <MatrixRainCanvas />

        {/* 4. PERSPECTIVE GRID BACKGROUND */}
        <div className="perspective-container absolute inset-0 pointer-events-none">
          <div 
            className="perspective-grid" 
            style={perspectiveGridStyle}
          />
        </div>

        {/* Retro Background Components (blobs) */}
        {/* Note: The Z-index of these is lower than the main content (z-30) but higher than the grid/rain */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob z-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2s z-20"></div> 
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4s z-20"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-30">
          <div className="text-center animate-fade-in">

            <div className="mb-8 inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-full text-sm font-semibold text-blue-700 backdrop-blur-sm hover:border-blue-300 transition-all duration-300">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-slide-down">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient glitch-text">Dipan</span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 max-w-2xl mx-auto animate-slide-up">
              A passionate developer crafting beautiful digital experiences with modern web technologies
            </p>

            {/* !!! TYPING EFFECT DISPLAY !!! */}
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed h-[3.5rem]"> 
              {/* h-[3.5rem] ensures height is reserved for two lines */}
              {typedText}
              {typedText.length < TARGET_TEXT.length && (
                  <span className="terminal-cursor" />
              )}
            </p>
            
            {/* VISUAL SEPARATOR COMPONENT */}
            <div className="flex items-center justify-center my-12 animate-fade-in animation-delay-1s">
              <div className="h-0.5 w-24 bg-gradient-to-r from-transparent to-blue-400 opacity-80 blur-sm"></div>
              <div className="relative w-5 h-5 transform rotate-45 mx-4">
                  <div className="absolute inset-0 bg-blue-600/80 shadow-[0_0_8px_3px_rgba(59,130,246,0.7)]"></div>
                  <div className="absolute inset-0 border border-blue-200/50 shadow-[0_0_5px_1px_rgba(147,197,253,0.9)] animate-pulse"></div>
              </div>
              <div className="h-0.5 w-24 bg-gradient-to-l from-transparent to-blue-400 opacity-80 blur-sm"></div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-slide-up animation-delay-2s">
              {/* CYBERPUNK BUTTON 1: View My Work - GLITCH HANDLERS */}
              <button
                onClick={() => scrollToSection('projects')}
                onMouseEnter={() => setIsWorkGlitching(true)}
                onMouseLeave={() => setIsWorkGlitching(false)}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold shadow-cyber-btn overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-300 transition-colors duration-300 animate-pulse-border"></span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 animate-digital-flicker"></span>

                {/* APPLY GLITCH CLASS HERE */}
                <span className={`relative flex items-center gap-2 ${isWorkGlitching ? 'glitch-text' : ''}`}>
                  View My Work
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
              </button>

              {/* CYBERPUNK BUTTON 2: Get In Touch - GLITCH HANDLERS */}
              <button
                onClick={() => scrollToSection('contact')}
                onMouseEnter={() => setIsContactGlitching(true)}
                onMouseLeave={() => setIsContactGlitching(false)}
                className="group relative px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 rounded-full font-semibold shadow-cyber-outline-btn hover:text-cyan-600 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-cyan-400 transition-colors duration-300 animate-pulse-border-reverse"></span>
                <span className="absolute inset-0 bg-blue-200/10 opacity-0 group-hover:opacity-100 animate-digital-flicker animation-delay-1s"></span>

                {/* APPLY GLITCH CLASS HERE */}
                <span className={`relative flex items-center gap-2 ${isContactGlitching ? 'glitch-text' : ''}`}>
                  Get In Touch
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
                className="group p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-full hover:from-blue-600 hover:to-blue-500 hover:text-white transition-all duration-300 backdrop-blur-sm social-neon-link"
              >
                <Github size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/dipan-mandal-/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-full hover:from-blue-600 hover:to-blue-500 hover:text-white transition-all duration-300 backdrop-blur-sm social-neon-link"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="mailto:dipanmandal111@gmail.com"
                className="group p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-full hover:from-blue-600 hover:to-blue-500 hover:text-white transition-all duration-300 backdrop-blur-sm social-neon-link"
              >
                <Mail size={24} />
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

      
    </div>
  );
};