import { Hero } from '@/components/hero/Hero';
import { WorkSection } from '@/components/work/WorkSection';
import { AboutSection } from '@/components/about/AboutSection';
import { ServicesSection } from '@/components/services/ServicesSection';
import { ContactSection } from '@/components/contact/ContactSection';

const HomePage = () => (
  <>
    <Hero />
    <WorkSection />
    <AboutSection />
    <ServicesSection />
    <ContactSection />
  </>
);

export default HomePage;
