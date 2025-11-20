import { ArrowRight, Lightbulb, Code2, Globe } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const WorkFlow = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Customer Ideas",
      description: "Understanding your vision and requirements",
      color: "from-accent-glow to-accent"
    },
    {
      icon: Code2,
      title: "Clean Code",
      description: "Transforming ideas into efficient, maintainable code",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Globe,
      title: "Live Website",
      description: "Delivering a polished, production-ready solution",
      color: "from-accent to-primary"
    }
  ];

  return (
    <section id="workflow" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            <span className="text-black">My Work Flow</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            From concept to reality in three seamless steps
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Flow arrows for desktop */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 z-0">
            <div className="flex justify-center items-center gap-4 px-4">
              <div className="flex-1 h-1 bg-gradient-to-r from-accent-glow to-primary-glow rounded-full opacity-30" />
              <ArrowRight className="text-primary-glow animate-pulse" size={32} />
              <div className="flex-1 h-1 bg-gradient-to-r from-primary-glow to-accent rounded-full opacity-30" />
              <ArrowRight className="text-accent animate-pulse" size={32} />
              <div className="flex-1" />
            </div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <ScrollReveal animation="fade-up" delay={index * 0.2}>
                <div className="glass-card p-8 h-full hover-lift group">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-4 mb-6 
                    shadow-glow-primary group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-full h-full text-primary-foreground" />
                  </div>
                  
                  <div className="relative">
                    <div className={`absolute -top-12 -left-4 text-8xl font-display font-bold 
                      bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-10`}>
                      {index + 1}
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold mb-3 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile arrow */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-6">
                      <ArrowRight className="text-primary animate-bounce-subtle" size={24} />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        <ScrollReveal animation="scale-up" delay={0.6}>
          <div className="mt-16 text-center">
            <div className="glass-card inline-block px-8 py-4">
              <p className="text-lg font-display">
                <span className="text-gradient-static font-semibold">Result:</span>{" "}
                <span className="text-foreground">Fast, efficient delivery with exceptional quality</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WorkFlow;
