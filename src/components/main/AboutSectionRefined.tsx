const AboutSectionRefined = () => {
  return (
    <section id="quem-sou" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="scroll-reveal order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-primary/20 blur-2xl" />
              <img
                src="/laerte-portrait.jpg"
                alt="Laerte Lima, interno de medicina"
                className="relative mx-auto w-full max-w-md rounded-xl shadow-2xl"
              />
            </div>
          </div>

          <div className="order-1 space-y-8 md:order-2">
            <div className="scroll-reveal">
              <h2 className="mb-2 text-3xl font-light text-foreground md:text-4xl">
                Sou <span className="font-semibold text-accent">Laerte Lima</span>.
              </h2>
              <p className="text-xl text-muted-foreground">Interno de medicina.</p>
            </div>

            <div className="scroll-reveal scroll-reveal-delay-1 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Minha jornada começou em meio à pandemia, quando a fragilidade humana nunca foi tão visível.
              </p>

              <p>
                Ali entendi:
                <br />
                <span className="font-medium text-foreground">Medicina não é sobre dominar corpos.</span>
                <br />
                É sobre compreender vidas.
              </p>
            </div>

            <div className="scroll-reveal scroll-reveal-delay-2 pt-4">
              <p className="text-lg text-muted-foreground">
                Ainda estou aprendendo.
                <br />
                Mas já sei que quero construir algo diferente.
              </p>

              <p className="mt-6 text-xl font-medium text-foreground">Humano. Consciente. Presente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionRefined;
