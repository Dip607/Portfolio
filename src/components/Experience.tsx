import { Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React patterns.',
      achievements: [
        'Improved app performance by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipeline'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupHub',
      period: '2020 - 2022',
      description: 'Developed full-stack web applications using React, Node.js, and PostgreSQL. Collaborated with designers and product managers.',
      achievements: [
        'Built 3 successful products',
        'Reduced API response time by 60%',
        'Mentored 2 interns'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'Digital Solutions',
      period: '2019 - 2020',
      description: 'Started career in web development, working on client projects and learning modern development practices.',
      achievements: [
        'Completed 15+ projects',
        'Learned React and TypeScript',
        'Received Employee of the Month award'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              My professional journey in the world of software development
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollReveal 
                key={index} 
                animation="slide-right" 
                delay={index * 0.15}
              >
                <Card className="p-8 card-hover border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 mt-1">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
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

export default Experience;
