import manifestoImage from '@/assets/wpng-manifesto-victory.jpg';

const WPNGManifesto = () => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${manifestoImage})` }}
      >
        <div className="absolute inset-0 bg-yellow-vibrant/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="scroll-reveal text-2xl md:text-3xl text-[hsl(280,80%,15%)] font-medium mb-6">
            Aqui, a dor não te define.
          </p>

          <h2 className="scroll-reveal scroll-reveal-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(280,80%,8%)] mb-12">
            O conhecimento sim.
          </h2>

          <div className="scroll-reveal scroll-reveal-delay-2 space-y-6 text-lg md:text-xl text-[hsl(280,60%,20%)]">
            <p>
              Não é sobre eliminar a dor da noite para o dia.
            </p>
            <p>
              É sobre mudar sua relação com ela.
            </p>
          </div>

          <p className="scroll-reveal scroll-reveal-delay-3 text-3xl md:text-4xl font-bold text-[hsl(280,80%,8%)] mt-16">
            Viver acima da dor é possível.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WPNGManifesto;
