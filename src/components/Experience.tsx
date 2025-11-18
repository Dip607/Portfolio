import { Briefcase, GraduationCap } from 'lucide-react'; 
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';

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
      title: 'High School', 
      company: 'Taranagar Jogendra Nath High School',
      period: 'Jan 2015 – Feb 2021',
      description: 'Grade: A+',
      achievements: [],
    }
  ];

  // Helper function to determine card properties based on item type
  const getItemProps = (item) => {
    // Now all items are 'education', so we apply the desired blue styling directly
    return {
      icon: <GraduationCap className="text-primary" size={24} />, // Changed icon color to primary
      iconBg: 'bg-primary/10', // Changed icon background to primary/10
      border: 'border-l-4 border-l-primary', // Changed border color to primary
      titleColor: 'text-primary', // Changed title color to primary
    };
  };

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              My academic journey
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {items.map((item, index) => {
              const { icon, iconBg, border, titleColor } = getItemProps(item);
              // Since all items are now education, 'isWork' is always false,
              // and achievements array is empty, so no need to explicitly check 'isWork'
              
              return (
                <ScrollReveal 
                  key={index} 
                  animation="slide-right" 
                  delay={index * 0.15}
                >
                  <Card className={`p-8 card-hover ${border}`}> 
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${iconBg} mt-1`}> 
                        {icon} 
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
                            <p className={`${titleColor} font-medium`}>{item.company}</p> 
                          </div>
                          <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                            {item.period}
                          </span>
                        </div>
                        
                        {item.description && (
                            <p className="text-muted-foreground mb-4">{item.description}</p>
                        )}
                        
                        {/* If you add 'achievements' to education items in the future,
                            you might re-enable a check here. For now, it's not needed. */}
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;