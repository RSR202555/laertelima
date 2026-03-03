import transformationImage from '@/assets/wpng-transformation.jpg';

const WPNGTurningPoint = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient Background - Purple to Yellow */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${transformationImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(280,80%,6%)] via-[hsl(280,60%,15%)] to-[hsl(45,80%,20%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="scroll-reveal text-xl md:text-2xl text-muted-foreground mb-8">
            Mas existe um ponto de virada:
          </p>

          {/* Main Word with Glow Effect */}
          <div className="scroll-reveal scroll-reveal-delay-1 relative py-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-yellow-vibrant/20 blur-3xl" />
            </div>
            <h2 className="relative text-5xl md:text-7xl lg:text-8xl font-bold text-yellow-vibrant text-glow-yellow tracking-wider">
              CONSCIÊNCIA.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WPNGTurningPoint;
