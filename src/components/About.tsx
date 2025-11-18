import { Code, Lightbulb, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable solutions'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Turning complex challenges into simple solutions'
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Always exploring new technologies and trends'
    }
  ];

  return (
    // ✨ MODIFIED: Added a darker background for the section to better contrast with retro elements
    // and applied the font-mono class.
    <section id="about" className="section-padding relative font-mono bg-gray-50 overflow-hidden">
      
      {/* 🌟 RETRO COMPONENT 1: Fading Vaporwave Gradients */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2s"></div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4s"></div>
      
      <div className="section-container relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="slide-right" delay={0.2}>
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate developer with a love for creating elegant solutions to complex problems. 
                With expertise in modern web technologies, I focus on building responsive, user-friendly applications 
                that make a difference.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying updated with industry trends to deliver 
                cutting-edge solutions that exceed expectations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <ScrollReveal 
                key={index} 
                animation="slide-left" 
                delay={0.3 + index * 0.1}
              >
                {/* 🌟 RETRO COMPONENT 2: Subtle Border Glow on Card */}
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-lg opacity-0 group-hover:opacity-50 transition duration-300 blur-sm"></div>
                    
                    <Card className="relative p-6 card-hover border-border bg-card">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <item.icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;