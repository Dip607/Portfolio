import AnimatedGrid from '@/components/AnimatedGrid';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkFlow from '@/components/WorkFlow';
import Testimonials from '@/components/Testimonials';
import Skills from '@/components/Skills';
import Statistics from '@/components/Statistics';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative">
      <AnimatedGrid />
      <Navigation />
      <Hero />
      <About />
      <WorkFlow />
      <Testimonials />
      <Skills />
      <Statistics />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
