import { Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anup",
      role: "CEO at TechStart",
      avatar: "A",
      rating: 5,
      feedback: "The workflow was incredibly efficient. From our initial idea to a fully functional website, everything was delivered with exceptional quality and attention to detail.",
      color: "from-primary to-primary-glow"
    },
    {
      name: "Rohit Agarwal",
      role: "Founder of DesignHub",
      avatar: "RA",
      rating: 5,
      feedback: "Working together felt seamless. The process was transparent, communication was excellent, and the final product exceeded our expectations in both design and functionality.",
      color: "from-accent to-accent-glow"
    },
    {
      name: "Satym",
      role: "Marketing Director",
      avatar: "S",
      rating: 5,
      feedback: "Fast turnaround without compromising quality. The clean code and beautiful design have made our website a powerful tool for our business. Highly recommended!",
      color: "from-primary-glow to-accent"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            <span className=" text-black">Client Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            What clients say about working with me
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 0.1}>
              <div className="glass-card p-6 h-full hover-lift group relative">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={48} className="text-primary" />
                </div>

                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} 
                    flex items-center justify-center shadow-glow-primary`}>
                    <span className="text-primary-foreground font-bold text-lg">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className="text-accent fill-accent"
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  "{testimonial.feedback}"
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="scale-up" delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg">
              Join <span className="text-gradient-static font-semibold">50+ satisfied clients</span> who trust my work
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
