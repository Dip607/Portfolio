import { GraduationCap, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import ScrollReveal from './ScrollReveal';

const Experience = () => {
  const items = [
    {
      type: 'education',
      title: 'Bachelor of Technology - BTech, Mechanical Engineering',
      company: 'Motilal Nehru National Institute Of Technology',
      period: 'Aug 2024 – Jul 2028',
      description: 'Skills: Problem Solving, Design, +2 skills',
      achievements: [],
    },
    {
      type: 'education',
      title: 'Class 12, Science',
      company: 'Rajpur Vidyanidhi High School',
      period: 'Jan 2021 – May 2023',
      description: '',
      achievements: [],
    },
    {
      type: 'education',
      title: 'Class 10',
      company: 'Taranagar Jogendra Nath High School',
      period: 'Jan 2015 – Feb 2021',
      description: 'Grade: A+',
      achievements: [],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100 font-mono">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <GraduationCap size={18} />
              <span>Academic Journey</span>
            </div>
            <h2 className="text-5xl font-bold mb-4 text-gray-900">Education</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
              My academic journey and educational milestones
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-transparent hidden md:block" />

            <div className="space-y-12">
              {items.map((item, index) => (
                <ScrollReveal
                  key={index}
                  animation="slide-right"
                  delay={index * 0.15}
                >
                  <div className="relative">
                    <div className="hidden md:block absolute left-8 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg -translate-x-[7px]" />

                    <Card className="ml-0 md:ml-20 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                      <div className="relative">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-cyan-500" />

                        <div className="p-8">
                          <div className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-50 shadow-inner">
                                <GraduationCap className="text-blue-600" size={28} />
                              </div>
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                <div className="flex-1">
                                  <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                                    {item.title}
                                  </h3>
                                  <p className="text-blue-600 font-semibold text-lg">
                                    {item.company}
                                  </p>
                                </div>

                                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 rounded-lg border border-blue-200 flex-shrink-0">
                                  <Calendar size={16} className="text-blue-600" />
                                  <span className="text-sm font-medium text-blue-700 whitespace-nowrap">
                                    {item.period}
                                  </span>
                                </div>
                              </div>

                              {item.description && (
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                  <p className="text-gray-700 text-base leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
