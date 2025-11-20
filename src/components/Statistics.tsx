import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useCounter } from '@/hooks/use-counter';
import { Award, Code, Users, Rocket } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const StatCard = ({ icon: Icon, value, label, suffix = '', gradient }: {
  icon: any;
  value: number;
  label: string;
  suffix?: string;
  gradient: string;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const count = useCounter({ end: value, duration: 2500, isVisible });

  return (
    <div ref={ref} className="relative group">
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-60 transition-all duration-500 blur`}></div>

      <div className="relative bg-white rounded-2xl p-8 shadow-lg shadow-blue-100/50 hover:shadow-xl hover:shadow-blue-200/70 transition-all duration-300 hover:-translate-y-2">
        <div className="text-center">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br ${gradient} shadow-lg mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
            <Icon className="text-white" size={32} strokeWidth={1.5} />
          </div>

          <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            {count}{suffix}
          </div>

          <p className="text-slate-600 font-medium text-base">{label}</p>
        </div>
      </div>
    </div>
  );
};

const Statistics = () => {
  const stats = [
    {
      icon: Code,
      value: 150,
      label: 'Projects Completed',
      suffix: '+',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      value: 50,
      label: 'Happy Clients',
      suffix: '+',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Award,
      value: 5,
      label: 'Years Experience',
      suffix: '+',
      gradient: 'from-blue-600 to-sky-500'
    },
    {
      icon: Rocket,
      value: 98,
      label: 'Client Satisfaction',
      suffix: '%',
      gradient: 'from-sky-500 to-cyan-500'
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 overflow-hidden font-mono">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-black">
              Achievements & Impact
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Numbers that reflect my journey and dedication to excellence
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} animation="slide-up" delay={index * 0.1}>
              <StatCard {...stat} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
