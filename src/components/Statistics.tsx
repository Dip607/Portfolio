import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useCounter } from '@/hooks/use-counter';
import { Award, Code, Coffee, Users } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const StatCard = ({ icon: Icon, value, label, suffix = '' }: { 
  icon: any; 
  value: number; 
  label: string; 
  suffix?: string;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const count = useCounter({ end: value, duration: 2500, isVisible });

  return (
    <div ref={ref} className="text-center group">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 mb-4">
        <Icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
      </div>
      <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

const Statistics = () => {
  const stats = [
    { icon: Code, value: 150, label: 'Projects Completed', suffix: '+' },
    { icon: Users, value: 50, label: 'Happy Clients', suffix: '+' },
    { icon: Award, value: 12, label: 'Awards Won', suffix: '' },
    { icon: Coffee, value: 1000, label: 'Cups of Coffee', suffix: '+' }
  ];

  return (
    // ✨ MODIFIED: Added font-mono class here to match the desired font style.
    // Replace 'font-mono' with 'font-cyberpunk' if you configured a custom font.
    <section className="section-padding bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 font-mono">
      <div className="section-container">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Achievements & Statistics</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Numbers that reflect my journey and dedication to excellence
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} animation="scale-up" delay={index * 0.1}>
              <StatCard {...stat} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;