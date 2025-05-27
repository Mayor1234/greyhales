import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectGallery';
import ServicesSection from './components/ServiceSection';
import Layout from './pages/Layout';

function App() {
  return (
    <Layout>
      <section id="hero" className="snap-start min-h-screen">
        <HeroSection />
      </section>
      <section id="about" className="snap-start min-h-screen">
        <AboutSection />
      </section>

      <section id="projects" className="snap-start min-h-screen">
        <ProjectsSection />
      </section>

      <section id="services" className="snap-start min-h-screen">
        <ServicesSection />
      </section>

      <section id="contact" className="snap-start min-h-screen">
        <ContactSection />
      </section>
    </Layout>
  );
}

export default App;
