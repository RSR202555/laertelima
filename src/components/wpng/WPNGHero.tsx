import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/wpng-hero-liberation.jpg';

const WPNGHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(280,80%,8%)]/70 via-transparent to-[hsl(280,80%,8%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-yellow-vibrant/60 float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="scroll-reveal text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight">
            WITH PAIN <span className="text-yellow-vibrant text-glow-yellow">NO GAIN</span>
          </h1>
          
          <p className="scroll-reveal scroll-reveal-delay-1 text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed">
            Porque viver com dor não pode ser regra, nem destino.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a 
          href="#problema"
          className="flex flex-col items-center gap-2 text-yellow-vibrant hover:text-yellow-warm transition-colors scroll-indicator"
        >
          <span className="text-sm">Explore</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default WPNGHero;
