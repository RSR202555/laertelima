import { useScrollReveal } from '@/hooks/useScrollReveal';
import Header from '@/components/main/Header';
import HeroSection from '@/components/main/HeroSectionRefined';
import AboutSection from '@/components/main/AboutSection';
import PhilosophySection from '@/components/main/PhilosophySection';
import MissionSection from '@/components/main/MissionSection';
import WPNGTransition from '@/components/main/WPNGTransition';
import Footer from '@/components/main/Footer';

const Index = () => {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <MissionSection />
      <WPNGTransition />
      <Footer />
    </div>
  );
};

export default Index;
