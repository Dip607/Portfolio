import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code, Lightbulb, Rocket } from 'lucide-react';

// --- Utility Components ---

const Card = ({ children, className = "" }) => (
    <div className={`p-6 border border-gray-200 bg-white rounded-lg shadow-sm ${className}`}>
        {children}
    </div>
);

const ScrollReveal = ({ children, animation, delay, className = "" }) => (
    <div
        className={`opacity-100 transform translate-y-0 transition-all duration-700 ease-out ${className}`}
        style={{ transitionDelay: `${delay || 0}s` }}
    >
        {children}
    </div>
);

// --- Matrix Rain Background Component ---

const MatrixRainCanvas = () => {
// ... (MatrixRainCanvas remains unchanged)
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
        resizeCanvas();

        const charSet = 'アァカサタナハマヤラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const fontSize = 16;
        const columns = width / fontSize;

        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(245, 245, 245, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = charSet[Math.floor(Math.random() * charSet.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                ctx.fillStyle = `rgba(59, 130, 246, ${Math.random() * 0.4 + 0.3})`;

                ctx.fillText(text, x, y);

                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        let animationFrameId;
        const render = () => {
            draw();
            animationFrameId = window.requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-10"
            style={{ opacity: 0.08 }}
        />
    );
};

// --- MODERNIZED Loading Screen Component ---

const LoadingScreen = ({ onLoaded }) => {
// ... (LoadingScreen remains unchanged)
    const [progress, setProgress] = useState(0);
    const [statusMessage, setStatusMessage] = useState("Initializing connection...");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timer = 0;

        const sequence = [
            { delay: 800, message: "Connecting to server..." , progress: 20 },
            { delay: 500, message: "Fetching core assets..." , progress: 40 },
            { delay: 1000, message: "Compiling UI modules..." , progress: 70 },
            { delay: 300, message: "Optimizing render pipeline..." , progress: 90 },
            { delay: 1200, message: "Access secured. Ready for deployment.", progress: 100 },
        ];

        sequence.forEach((item, index) => {
            timer += item.delay;
            window.setTimeout(() => {
                setStatusMessage(item.message);
                setProgress(item.progress);
            }, timer);
        });

        timer += 500;
        window.setTimeout(() => {
            setIsComplete(true);
        }, timer);

        timer += 500;
        window.setTimeout(() => {
            onLoaded();
        }, timer);

    }, [onLoaded]);


    return (
        // Transition opacity is based on 'isComplete' for a smooth fade-out
        <div className={`fixed inset-0 bg-gray-900 flex items-center justify-center font-sans transition-opacity duration-700 ease-out z-[100] ${isComplete ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-11/12 max-w-xl p-8 rounded-lg text-center transform transition-transform duration-500 ease-out"
                 style={{ transform: isComplete ? 'scale(1.05)' : 'scale(1)' }}>
                
                <p className="text-xl font-light text-white mb-3 tracking-wider animate-pulse-slow">
                    Dipan Mandal
                </p>
                
                {/* Main Status Message */}
                <h1 className="text-3xl font-bold text-blue-400 mb-8 transition-colors duration-300">
                    {statusMessage}
                </h1>
                
                {/* Modern Progress Bar */}
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden shadow-inner-progress">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-700 ease-out animate-progress-glow"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                
                {/* Progress Percentage */}
                <p className="text-sm font-medium text-gray-400 mt-3">
                    {progress < 100 ? `LOADING... ${progress}%` : "COMPLETE!"}
                </p>

                {/* Glitch effect on name for final touch */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <span className="text-[10rem] font-extrabold text-blue-500 opacity-5 blur-sm select-none">
                        DIPAN
                    </span>
                </div>
            </div>
             {/* Note: All necessary CSS for this component is included in the main App's style block below. */}
        </div>
    );
};


// --- Main App Component ---

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isWorkGlitching, setIsWorkGlitching] = useState(false);
  const [isContactGlitching, setIsContactGlitching] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    // Use MouseEvent type if you are using TypeScript, otherwise remove it
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const TARGET_TEXT = "Full Stack Developer & Creative Problem Solver | Transforming ideas into elegant solutions";
  const TYPING_SPEED = 90;
  const START_DELAY = 700;

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (isLoading) return;

    let index = 0;
    let intervalId;

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

    const timeoutId = window.setTimeout(startTyping, START_DELAY);

    return () => {
        window.clearTimeout(timeoutId);
        if (intervalId) window.clearInterval(intervalId);
    };
  }, [isLoading]);

  const maxTilt = 3;
  // Prevent division by zero if windowSize is not yet set
  const mouseX = windowSize.width ? cursorPos.x / windowSize.width : 0.5;
  const mouseY = windowSize.height ? cursorPos.y / windowSize.height : 0.5;

  const rotateY = (mouseX - 0.5) * maxTilt * 2;
  const rotateX = (mouseY - 0.5) * maxTilt * -2;
  const translateX = (mouseX - 0.5) * 10;
  const translateY = (mouseY - 0.5) * 10;

  const perspectiveGridStyle = {
    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(-100px) translateX(${translateX}px) translateY(${translateY}px)`,
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return <LoadingScreen onLoaded={() => setIsLoading(false)} />;
  }
    
  // Removed the globalFontStyle object here
    

  return (
    // REMOVED font-mercy from the main div. It will now only rely on the default font (font-sans/font-mono).
    <div className="min-h-screen bg-gray-50">

      {/* --- Global Styles & Animations --- */}
      <style>{`
        /* * 1. @FONT-FACE DEFINITION 
         * This block loads the font file from the public folder.
         * The path is relative to the site root (/).
         */
        @font-face {
          font-family: 'Mercy Christole';
          src: url('/Mercy Christole.ttf') format('truetype');
          font-weight: 400;
          font-style: normal;
        }
        
        /* Global & Existing Styles */
        @keyframes fade-in { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animation-delay-1s { animation-delay: 0.2s; }

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

        @keyframes orb-pulse {
          0% { opacity: 0.3; }
          50% { opacity: 0.5; }
          100% { opacity: 0.3; }
        }
        .neon-orb {
          top: 0; left: 0;
          width: 50px; height: 50px;
          background-color: rgba(59, 130, 246, 0.4);
          border-radius: 50%;
          filter: blur(25px);
          pointer-events: none;
          transition: transform 0.15s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: 5;
          animation: orb-pulse 4s infinite alternate;
        }

        .social-neon-link {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 0 rgba(0, 0, 0, 0);
        }
        .social-neon-link:hover {
          transform: translateY(-4px);
          box-shadow:
            0 4px 12px rgba(59, 130, 246, 0.3),
            0 0 20px rgba(59, 130, 246, 0.2);
        }

        .perspective-container {
            perspective: 1200px;
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
            transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            background-image:
                repeating-linear-gradient(0deg, rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0.08) 1px, transparent 1px, transparent 100px),
                repeating-linear-gradient(90deg, rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0.08) 1px, transparent 1px, transparent 100px);
            background-size: 100px 100px;
            animation: grid-scroll 60s linear infinite;
        }
        @keyframes grid-scroll {
            from { background-position: 0 0; }
            to { background-position: 100px 100px; }
        }

        @keyframes blink {
            0%, 100% { border-color: rgba(59, 130, 246, 1); }
            50% { border-color: transparent; }
        }
        .terminal-cursor {
            border-right: 2px solid;
            animation: blink 0.7s step-end infinite;
            display: inline-block;
            height: 1.2em;
            vertical-align: middle;
            margin-left: 2px;
            margin-right: -2px;
        }

        @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        .animate-gradient {
            background-size: 200% 200%;
            animation: gradient-shift 4s ease infinite;
        }

        .cta-button {
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cta-button::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 2px;
            background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.4s;
        }
        .cta-button:hover::before {
            opacity: 1;
        }
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }

        .outline-button {
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .outline-button::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1));
            opacity: 0;
            transition: opacity 0.4s;
        }
        .outline-button:hover::after {
            opacity: 1;
        }
        .outline-button:hover {
            transform: translateY(-2px);
            border-color: rgba(6, 182, 212, 0.8);
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.2);
        }
        
        /* --- Styles for Modern LoadingScreen --- */
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
        }
        .animate-pulse-slow {
            animation: pulse-slow 3s infinite ease-in-out;
        }

        @keyframes progress-glow {
            0% { filter: brightness(1); }
            50% { filter: brightness(1.2); }
            100% { filter: brightness(1); }
        }
        .animate-progress-glow {
            animation: progress-glow 2s infinite alternate;
        }

        .shadow-inner-progress {
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.6);
        }
      `}</style>
      {/* --- End Global Styles --- */}

      <div
        className="fixed neon-orb"
        style={{
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
        }}
      />

      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">

        <MatrixRainCanvas />

        <div className="perspective-container absolute inset-0 pointer-events-none">
          <div
            className="perspective-grid"
            style={perspectiveGridStyle}
          />
        </div>

        {/* Decorative Blobs - ensure 'animate-blob' class is defined in your Tailwind config or custom CSS */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob z-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2s z-20"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4s z-20"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-30">
          <div className="text-center animate-fade-in">

            <div className="mb-8 inline-block">
              {/* THIS IS THE ELEMENT YOU WANT TO EXCLUDE - NO font-mercy CLASS APPLIED HERE */}
              <span className="px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full text-sm font-medium text-blue-700 hover:bg-white hover:border-blue-300 transition-all duration-300 shadow-sm">
                👋 Welcome to my portfolio
              </span>
            </div>

            {/* FONT APPLIED HERE */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-slide-down tracking-tight font-mercy">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient glitch-text">Dipan</span>
            </h1>

            {/* FONT APPLIED HERE */}
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-slide-up leading-relaxed font-medium font-mercy">
              A passionate developer crafting beautiful digital experiences with modern web technologies
            </p>
            
            {/* THE FIX IS HERE: 
              We wrap the text and cursor in a dedicated <span> to ensure the 
              glitch effect from the buttons cannot accidentally affect this paragraph's typography.
            */}
            

            <div className="flex items-center justify-center my-12 animate-fade-in animation-delay-1s">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60"></div>
              <div className="relative w-2 h-2 mx-4">
                  <div className="absolute inset-0 bg-blue-500 rounded-full"></div>
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent via-blue-400 to-transparent opacity-60"></div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-slide-up animation-delay-2s">
              <button
                onClick={() => scrollToSection('projects')}
                onMouseEnter={() => setIsWorkGlitching(true)}
                onMouseLeave={() => setIsWorkGlitching(false)}
                className="cta-button group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold shadow-lg font-mercy" // FONT APPLIED HERE
              >
                <span className={`relative flex items-center gap-2 ${isWorkGlitching ? 'glitch-text' : ''}`}>
                  View My Work
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                onMouseEnter={() => setIsContactGlitching(true)}
                onMouseLeave={() => setIsContactGlitching(false)}
                className="outline-button group px-8 py-4 bg-white/50 backdrop-blur-sm border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:text-cyan-600 font-mercy" // FONT APPLIED HERE
              >
                <span className={`relative flex items-center gap-2 z-10 ${isContactGlitching ? 'glitch-text' : ''}`}>
                  Get In Touch
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full relative">
                      <span className="absolute inset-0 bg-blue-600 rounded-full animate-ping"></span>
                  </span>
                </span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 animate-slide-up animation-delay-3s">
              <a
                href="https://github.com/Dip607"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-500 hover:text-white transition-all duration-300 social-neon-link shadow-sm"
              >
                <Github size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/dipan-mandal-/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-500 hover:text-white transition-all duration-300 social-neon-link shadow-sm"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="mailto:dipanmandal111@gmail.com"
                className="group p-4 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-500 hover:text-white transition-all duration-300 social-neon-link shadow-sm"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex items-start justify-center p-2 bg-white/50 backdrop-blur-sm">
            <div className="w-1.5 h-3 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>
      
      {/* You would place your other sections (Projects, About, Contact) here */}

    </div>
  );
}