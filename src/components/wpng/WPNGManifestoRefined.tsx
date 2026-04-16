import manifestoImage from '@/assets/wpng-manifesto-victory.jpg';

const WPNGManifestoRefined = () => {
  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${manifestoImage})` }}
      >
        <div className="absolute inset-0 bg-yellow-vibrant/80" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,9,102,0.12)_0%,rgba(255,214,10,0.08)_24%,rgba(62,9,102,0.12)_100%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center text-[hsl(280,80%,10%)]">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-[hsl(280,80%,18%)]/10 bg-white/10 px-6 py-10 shadow-[0_24px_80px_rgba(76,29,149,0.12)] backdrop-blur-[2px] md:px-12 md:py-14">
            <p className="scroll-reveal font-wpng text-xl font-medium tracking-[0.01em] md:text-2xl lg:text-[2rem]">
              Aqui, a dor não te define.
            </p>

            <h2 className="scroll-reveal scroll-reveal-delay-1 font-wpng mt-5 text-4xl font-bold leading-[0.95] tracking-[-0.03em] md:text-5xl lg:text-6xl">
              O conhecimento sim.
            </h2>

            <div className="scroll-reveal scroll-reveal-delay-2 mx-auto mt-10 max-w-2xl space-y-5 text-lg font-normal leading-relaxed text-[hsl(280,55%,20%)] md:text-[1.75rem]">
              <p>Não é sobre eliminar a dor da noite para o dia.</p>
              <p>É sobre mudar sua relação com ela.</p>
            </div>

            <p className="scroll-reveal scroll-reveal-delay-3 font-wpng mt-14 text-3xl font-bold leading-tight tracking-[-0.03em] md:text-4xl lg:text-5xl">
              Viver acima da dor é possível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WPNGManifestoRefined;
