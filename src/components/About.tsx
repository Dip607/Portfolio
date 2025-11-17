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
    <section id="about" className="section-padding relative">
      <div className="section-container">
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
                <Card className="p-6 card-hover border-border bg-card">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
