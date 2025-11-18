import { Code, Database, Layout, Server, Smartphone, Globe, Zap } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Layout,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
      color: 'from-blue-600 via-blue-500 to-cyan-400',
      gradient: 'from-blue-500/20 to-cyan-400/20'
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'REST APIs', 'GraphQL', 'Microservices'],
      color: 'from-blue-500 via-blue-600 to-indigo-500',
      gradient: 'from-indigo-500/20 to-blue-400/20'
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'MySQL'],
      color: 'from-blue-600 via-cyan-500 to-blue-400',
      gradient: 'from-cyan-500/20 to-blue-400/20'
    },
    {
      icon: Code,
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Webpack'],
      color: 'from-blue-500 to-purple-500',
      gradient: 'from-purple-500/20 to-blue-400/20'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'PWA', 'Responsive Design', 'iOS', 'Android'],
      color: 'from-cyan-400 via-blue-500 to-blue-600',
      gradient: 'from-cyan-400/20 to-blue-500/20'
    },
    {
      icon: Globe,
      title: 'Other Skills',
      skills: ['UI/UX Design', 'Agile/Scrum', 'Testing', 'SEO', 'Performance'],
      color: 'from-blue-600 to-cyan-400',
      gradient: 'from-blue-500/20 to-cyan-400/20'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <div className="animated-grid absolute inset-0"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-0s"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2s"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4s"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-slide-down">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 rounded-full backdrop-blur-sm">
            <Zap size={16} className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">My Technical Arsenal</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Skills & <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">Technologies</span>
          </h2>

          <div className="flex justify-center gap-2 mb-8">
            <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to build scalable, performant, and beautiful applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                <div className={`relative bg-gradient-to-br ${category.gradient} backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8 hover:border-blue-300 transition-all duration-500 hover:-translate-y-3 overflow-hidden group`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
                  </div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6`}>
                      <IconComponent className="text-white" size={32} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {category.title}
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-2 bg-white/60 backdrop-blur-md text-gray-700 border border-blue-200/50 rounded-full text-sm font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-tl from-blue-400/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
