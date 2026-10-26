import { Services } from '@/components/about/Services';
import { Process } from '@/components/about/Process';
import { Hero } from '@/components/hero/Hero';
import { WorkSection } from '@/components/work/WorkSection';
import { AboutMe } from '@/components/about/AboutMe';
import { ContactSection } from '@/components/contact/ContactSection';

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <WorkSection />
    <AboutMe />
    <Process />
    <ContactSection />
  </>
);

export default HomePage;
