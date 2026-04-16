import { ChevronDown } from 'lucide-react';

import heroImage from '@/assets/wpng-hero-liberation.jpg';

const WPNGHeroEnhanced = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(280,80%,8%)]/78 via-[hsl(280,80%,8%)]/26 to-[hsl(280,80%,8%)]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(280_80%_8%_/_0.08)_0%,_hsl(280_80%_8%_/_0.52)_38%,_hsl(280_80%_8%_/_0.86)_76%,_hsl(280_80%_8%_/_0.96)_100%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="float absolute h-2 w-2 rounded-full bg-yellow-vibrant/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="scroll-reveal mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-[hsl(280,80%,8%)]/42 px-6 py-8 shadow-[0_20px_80px_rgba(0,0,0,0.5)] backdrop-blur-[3px] md:px-10 md:py-10">
            <h1 className="mb-6 text-5xl font-bold leading-[0.95] tracking-tight text-foreground [text-shadow:0_8px_30px_rgba(0,0,0,0.82)] md:text-6xl lg:text-7xl">
              WITH PAIN{' '}
              <span className="text-yellow-vibrant [text-shadow:0_0_26px_rgba(255,214,10,0.5),0_8px_24px_rgba(0,0,0,0.7)]">
                NO GAIN
              </span>
            </h1>

            <p className="scroll-reveal scroll-reveal-delay-1 mx-auto max-w-2xl text-xl leading-relaxed text-foreground/90 [text-shadow:0_4px_18px_rgba(0,0,0,0.8)] md:text-2xl lg:text-[2rem]">
              Porque viver com dor não pode ser regra, nem destino.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a
          href="#problema"
          className="scroll-indicator flex flex-col items-center gap-2 text-yellow-vibrant transition-colors hover:text-yellow-warm"
        >
          <span className="text-sm">Explore</span>
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default WPNGHeroEnhanced;
