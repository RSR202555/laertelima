import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg-abstract.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 gradient-royal opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground mb-8">
            Saúde não é acaso.
          </h1>
          
          <p className="scroll-reveal scroll-reveal-delay-1 text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            É <span className="text-accent text-glow-amber">construção</span>.
          </p>
          
          <p className="scroll-reveal scroll-reveal-delay-2 text-xl md:text-2xl text-muted-foreground mt-12">
            E toda construção começa com consciência.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a 
          href="#quem-sou"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors scroll-indicator"
        >
          <span className="text-sm">Descubra</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
