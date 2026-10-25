import { Hero } from '@/components/hero/Hero';
import { WorkSection } from '@/components/work/WorkSection';
import { AboutMe } from '@/components/about/AboutMe';
import { ContactSection } from '@/components/contact/ContactSection';

const HomePage = () => (
  <>
    <Hero />
    <WorkSection />
    <AboutMe />
    <ContactSection />
  </>
);

export default HomePage;
