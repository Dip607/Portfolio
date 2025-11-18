import { Mail, MapPin, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';
import RippleButton from '@/components/RippleButton';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dipanmandal111@gmail.com',
      href: 'mailto:dipan@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8388846108',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kolkata,India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Let's create something amazing together!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal animation="slide-right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={0.3 + index * 0.1}>
                  <a
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal animation="slide-left" delay={0.2}>
            <Card className="p-8 border-border">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-background transition-all focus:scale-[1.01]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background transition-all focus:scale-[1.01]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-background resize-none transition-all focus:scale-[1.01]"
                    required
                  />
                </div>
                <RippleButton
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                  loading={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </RippleButton>
              </form>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
