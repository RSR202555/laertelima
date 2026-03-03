const AboutSection = () => {
  return (
    <section id="quem-sou" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="scroll-reveal order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl" />
              <img
                src="/laerte-portrait.jpg"
                alt="Laerte Lima - Interno de Medicina"
                className="relative rounded-xl w-full max-w-md mx-auto shadow-2xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 space-y-8">
            <div className="scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-2">
                Sou <span className="font-semibold text-accent">Laerte Lima</span>.
              </h2>
              <p className="text-xl text-muted-foreground">
                Interno de medicina.
              </p>
            </div>

            <div className="scroll-reveal scroll-reveal-delay-1 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Minha jornada começou em meio à pandemia — 
                quando a fragilidade humana nunca foi tão visível.
              </p>
              
              <p>
                Ali entendi:<br />
                <span className="text-foreground font-medium">
                  Medicina não é sobre dominar corpos.
                </span><br />
                É sobre compreender vidas.
              </p>
            </div>

            <div className="scroll-reveal scroll-reveal-delay-2 pt-4">
              <p className="text-lg text-muted-foreground">
                Ainda estou aprendendo.<br />
                Mas já sei que quero construir algo diferente.
              </p>
              
              <p className="text-xl text-foreground font-medium mt-6">
                Humano. Consciente. Presente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
