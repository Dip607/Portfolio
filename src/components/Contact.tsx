import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import ScrollReveal from './ScrollReveal';
import RippleButton from './RippleButton';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dipanmandal111@gmail.com',
      href: 'mailto:dipanmandal111@gmail.com',
      description: 'I typically respond within 24 hours'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8388846108',
      href: 'tel:+918388846108',
      description: 'Available for calls during business hours'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kolkata, India',
      href: '#',
      description: 'Open to remote and on-site projects'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Mail size={18} />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              Let's Work Together
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <ScrollReveal animation="slide-right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

              {contactInfo.map((info, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={0.3 + index * 0.1}>
                  <a
                    href={info.href}
                    className="group block"
                  >
                    <Card className="p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <info.icon size={24} className="text-white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                            {info.label}
                          </p>
                          <p className="text-lg font-bold text-gray-900 mb-1 truncate">
                            {info.value}
                          </p>
                          <p className="text-sm text-gray-600">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal animation="slide-left" delay={0.2}>
            <Card className="p-8 border-2 border-blue-200 shadow-xl">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mb-4 animate-bounce">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 text-center max-w-xs">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, ideas, or anything else you'd like to discuss..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      {formData.message.length}/500 characters
                    </p>
                  </div>

                  <RippleButton
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    size="lg"
                    loading={isSubmitting}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {!isSubmitting && <Send size={20} />}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                  </RippleButton>

                  <p className="text-xs text-gray-500 text-center">
                    I'll respond to your message within 24 hours
                  </p>
                </form>
              )}
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-up" delay={0.4}>
          <div className="mt-20 text-center">
            <div className="inline-block p-8 rounded-2xl bg-white border-2 border-blue-200 shadow-lg">
              <p className="text-gray-700 font-medium mb-3">
                Prefer to connect on social media?
              </p>
              <div className="flex items-center justify-center gap-4">
                {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                  <button
                    key={social}
                    className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-semibold hover:bg-blue-100 transition-colors duration-300"
                  >
                    {social}
                  </button>
                ))}
              </div>
              <p className="text-gray-700 font-medium mb-3 mt-4 ">
                See home page for social link              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
