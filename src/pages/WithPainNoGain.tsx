import { useScrollReveal } from '@/hooks/useScrollReveal';
import WPNGHeader from '@/components/wpng/WPNGHeader';
import WPNGHero from '@/components/wpng/WPNGHeroEnhanced';
import WPNGProblem from '@/components/wpng/WPNGProblem';
import WPNGTurningPoint from '@/components/wpng/WPNGTurningPoint';
import WPNGTransformation from '@/components/wpng/WPNGTransformation';
import WPNGManifesto from '@/components/wpng/WPNGManifestoRefined';
import WPNGCTA from '@/components/wpng/WPNGCTA';
import WPNGFooter from '@/components/wpng/WPNGFooter';

const WithPainNoGain = () => {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef} className="min-h-screen wpng-theme bg-background">
      <WPNGHeader />
      <WPNGHero />
      <WPNGProblem />
      <WPNGTurningPoint />
      <WPNGTransformation />
      <WPNGManifesto />
      <WPNGCTA />
      <WPNGFooter />
    </div>
  );
};

export default WithPainNoGain;
