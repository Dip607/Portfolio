import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/ScrollReveal';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with forecasts, location search, and detailed weather analytics with interactive charts.',
      tags: ['TypeScript', 'Next.js', 'API Integration'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="section-container">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Some of my recent work that showcases my skills and passion for development
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={index} 
              animation="fade-up" 
              delay={index * 0.1}
            >
              <Card className="overflow-hidden card-hover border-border group h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-background/90 hover:bg-background"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs bg-primary/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
