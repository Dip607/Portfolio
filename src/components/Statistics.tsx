import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useCounter } from '@/hooks/use-counter';
import { Award, Code, Coffee, Users } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

// NOTE: Functionality remains untouched. Styling for modern look is applied.
const StatCard = ({ icon: Icon, value, label, suffix = '' }: { 
  icon: any; 
  value: number; 
  label: string; 
  suffix?: string;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const count = useCounter({ end: value, duration: 2500, isVisible });

  return (
    // ✨ MODIFIED: Added subtle dark background, defined border, and a strong hover effect.
    // The background is now semi-transparent dark, which works well over the existing light gradient section background.
    <div 
      ref={ref} 
      className="text-center group p-6 rounded-lg border border-gray-200 shadow-md transition-all duration-500 
                 hover:shadow-xl hover:border-primary-light hover:scale-[1.03] bg-white/70 backdrop-blur-sm"
    >
      
      {/* ✨ MODIFIED: Changed to a rounded-square (or large rounded-full if preferred), 
                     using strong primary color for contrast and a sharp hover transition. */}
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary group-hover:bg-primary-dark transition-all duration-300 mb-4 shadow-lg shadow-primary/30">
        {/* ✨ MODIFIED: Icon color changed to white/foreground for maximum contrast. */}
        <Icon className="text-primary-foreground group-hover:text-white transition-colors" size={24} />
      </div>
      
      {/* ✨ MODIFIED: Increased size, used a strong text gradient (assuming 'text-gradient' is vibrant) 
                     and added tracking for a cleaner, digital look. */}
      <div className="text-5xl lg:text-6xl font-extrabold text-gradient mb-2 tracking-tighter">
        {count}{suffix}
      </div>
      
      {/* ✨ MODIFIED: Subtler, slightly muted label with tracking and small text. */}
      <div className="text-gray-600 font-medium uppercase tracking-wider text-sm">{label}</div>
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
    // ✨ ORIGINAL BACKGROUND/FONT KEPT: font-mono and the original gradient are retained.
    <section className="section-padding bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 font-mono">
      <div className="section-container">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Achievements & Statistics</h2>
            {/* ✨ MODIFIED: Sharper, thinner separator line for a cleaner look. */}
            <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Numbers that reflect my journey and dedication to excellence
            </p>
          </div>
        </ScrollReveal>

        {/* ✨ MODIFIED: Slight adjustment to max width/gap for a more spacious, modern grid. */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
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