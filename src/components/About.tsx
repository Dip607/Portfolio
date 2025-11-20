import { Code, Lightbulb, Rocket } from 'lucide-react';
import { Card } from './ui/card';
import ScrollReveal from './ScrollReveal';

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
    <section id="about" className="relative font-mono py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 overflow-hidden">

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-black">
              About Me
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 mx-auto rounded-full shadow-lg shadow-blue-200" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="slide-right" delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                I'm a passionate developer with a love for creating elegant solutions to complex problems.
                With expertise in modern web technologies, I focus on building responsive, user-friendly applications
                that make a difference.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
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
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-70 transition-all duration-300 blur"></div>

                  <Card className="relative p-6 rounded-xl bg-white border border-blue-100 shadow-lg shadow-blue-100/50 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-300/50">
                        <item.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
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
