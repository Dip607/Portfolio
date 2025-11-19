import { Code, Database, Layout, Server, Smartphone, Globe, Zap } from 'lucide-react';

export default function App() {
  const skillCategories = [
    {
      icon: Layout,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
      // Muted blue for a clean accent
      accentColor: 'text-blue-600',
      shadowColor: 'shadow-blue-200/50',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'REST APIs', 'GraphQL', 'Microservices'],
      accentColor: 'text-indigo-600',
      shadowColor: 'shadow-indigo-200/50',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'MySQL'],
      accentColor: 'text-green-600',
      shadowColor: 'shadow-green-200/50',
      bgColor: 'bg-green-50',
    },
    {
      icon: Code,
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Webpack'],
      accentColor: 'text-purple-600',
      shadowColor: 'shadow-purple-200/50',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'PWA', 'Responsive Design', 'iOS', 'Android'],
      accentColor: 'text-cyan-600',
      shadowColor: 'shadow-cyan-200/50',
      bgColor: 'bg-cyan-50',
    },
    {
      icon: Globe,
      title: 'Other Skills',
      skills: ['UI/UX Design', 'Agile/Scrum', 'Testing', 'SEO', 'Performance'],
      accentColor: 'text-gray-600',
      shadowColor: 'shadow-gray-200/50',
      bgColor: 'bg-gray-50',
    }
  ];

  return (
    // Base section uses a clean white background and the monospace font for a tech/code aesthetic
    <section id="skills" className="py-24 bg-white relative overflow-hidden font-mono">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          
          {/* Clean Badge - high contrast, simple design */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 border border-gray-300 rounded-full bg-gray-50"> 
            <Zap size={14} className="text-gray-500" />
            <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">My Technical Arsenal</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Skill <span className="text-blue-600">In House</span>
          </h2>

          {/* Simple and clean divider */}
          <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>

          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies I use to build scalable, performant, and beautiful applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                // Clean card with soft shadow and hover elevation
                className={`
                  group relative bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300
                  shadow-lg ${category.shadowColor}
                  hover:shadow-xl hover:-translate-y-1 hover:border-blue-400
                  transform
                `}
              >
                
                {/* Clean Icon Container - Subtle color background */}
                <div className={`w-12 h-12 rounded-full ${category.bgColor} flex items-center justify-center mb-6 border border-gray-100 transition-all duration-300 group-hover:bg-blue-100`}>
                  <IconComponent className={category.accentColor} size={24} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      // Clean skill chip design
                      className={`
                        px-3 py-1 bg-gray-100 text-gray-700 border border-gray-200 rounded-md text-sm font-medium transition-colors duration-200
                        group-hover:bg-blue-50 group-hover:text-blue-700
                      `}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}