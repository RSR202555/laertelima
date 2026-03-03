import missionHorizon from '@/assets/mission-horizon.jpg';

const MissionSection = () => {
  return (
    <section id="missao" className="relative py-32 md:py-48 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${missionHorizon})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="scroll-reveal text-2xl md:text-3xl text-muted-foreground mb-8">
            Minha missão é ajudar você a construir
          </h2>

          <p className="scroll-reveal scroll-reveal-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-accent text-glow-amber mb-12">
            saúde sustentável.
          </p>

          <div className="scroll-reveal scroll-reveal-delay-2 space-y-4">
            <p className="text-xl md:text-2xl text-foreground/90">
              Não perfeita.
            </p>
            <p className="text-xl md:text-2xl text-foreground">
              <span className="font-medium">Possível.</span>
            </p>
            <p className="text-xl md:text-2xl text-foreground">
              <span className="font-medium">Duradoura.</span>
            </p>
            <p className="text-2xl md:text-3xl text-accent font-semibold mt-6">
              Real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
