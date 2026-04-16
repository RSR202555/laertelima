import { ArrowDownRight, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroBg from '@/assets/hero-bg-abstract.jpg';

const principles = ['Consciência clínica', 'Presença humana', 'Saúde sustentável'];

const mobileHighlights = [
  {
    eyebrow: 'Manifesto',
    title: 'Cuidado sem pressa.',
    text: 'Presenca com direcao.',
  },
  {
    eyebrow: 'Base',
    title: 'Construcao diaria',
    text: 'Pequenas escolhas sustentam grandes mudancas.',
  },
];

const HeroSectionRefined = () => {
  return (
    <section className="relative overflow-hidden bg-[hsl(220,60%,12%)] pt-20 sm:pt-24 lg:pt-28">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(49,92,255,0.34),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(255,190,11,0.16),transparent_18%),linear-gradient(145deg,rgba(7,18,62,0.96),rgba(17,37,114,0.9)_42%,rgba(8,24,84,0.98))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.95))]" />

      <div className="pointer-events-none absolute left-[-6rem] top-20 h-52 w-52 rounded-full bg-accent/12 blur-3xl sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute bottom-12 right-[-4rem] h-48 w-48 rounded-full bg-primary/20 blur-3xl sm:h-64 sm:w-64" />

      <div className="container relative z-10 mx-auto px-4 pb-12 sm:px-6 sm:pb-16 md:pb-24">
        <div className="grid min-h-[calc(100svh-5rem)] items-center gap-10 sm:gap-12 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:gap-10">
          <div className="max-w-3xl">
            <div className="scroll-reveal inline-flex max-w-full items-start gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-left text-[0.78rem] leading-tight text-foreground/78 backdrop-blur-sm sm:items-center sm:text-sm">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent sm:mt-0" />
              Medicina, consciência e construção cotidiana
            </div>

            <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              <h1 className="scroll-reveal max-w-[11ch] text-[clamp(3.1rem,14vw,5.5rem)] font-light leading-[0.92] tracking-[-0.06em] text-foreground">
                Saúde não nasce
                <span className="block font-medium text-foreground">de acaso.</span>
                <span className="mt-2 block font-semibold text-accent">Ela é direção.</span>
              </h1>

              <p className="scroll-reveal scroll-reveal-delay-1 max-w-[30rem] text-base leading-relaxed text-foreground/74 sm:text-lg md:text-xl">
                Um cuidado mais lúcido, mais humano e mais sustentável começa quando você troca urgência cega por entendimento.
              </p>
            </div>

            <div className="scroll-reveal scroll-reveal-delay-2 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href="#quem-sou"
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl border border-accent/30 bg-accent px-6 py-4 text-base font-semibold text-[hsl(220,60%,12%)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[hsl(var(--amber-gold))] sm:w-auto"
              >
                Conheça minha jornada
                <ArrowDownRight className="h-5 w-5" />
              </a>

              <Link
                to="/with-pain-no-gain"
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/6 px-6 py-4 text-base font-medium text-foreground/88 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-foreground sm:w-auto"
              >
                Explorar With Pain No Gain
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="scroll-reveal scroll-reveal-delay-3 mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 lg:hidden">
              {mobileHighlights.map(({ eyebrow, title, text }) => (
                <div
                  key={title}
                  className="rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.06)] p-4 shadow-[0_20px_40px_rgba(3,8,30,0.22)] backdrop-blur-md"
                >
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-accent/88">{eyebrow}</p>
                  <p className="mt-3 text-lg font-semibold leading-tight text-foreground">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{text}</p>
                </div>
              ))}
            </div>

            <div className="scroll-reveal scroll-reveal-delay-3 mt-10 hidden flex-wrap gap-3 lg:flex">
              {principles.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-[rgba(255,255,255,0.05)] px-4 py-2 text-sm text-foreground/74 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="scroll-reveal scroll-reveal-delay-2 relative mx-auto hidden w-full max-w-[30rem] lg:ml-auto lg:block">
            <div className="absolute -inset-6 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,190,11,0.18),rgba(49,92,255,0.14),rgba(255,255,255,0.03))] blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(8,20,68,0.72)] p-4 shadow-[0_30px_90px_rgba(2,8,30,0.55)] backdrop-blur-md">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_40%)]" />

              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/8 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
                <div className="absolute left-5 top-5 z-10 rounded-full border border-white/12 bg-[rgba(7,18,62,0.55)] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground/74 backdrop-blur-sm">
                  Laerte Lima
                </div>

                <img
                  src="/laerte-portrait.jpg"
                  alt="Laerte Lima"
                  className="h-[32rem] w-full object-cover object-center xl:h-[35rem]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,17,60,0.06),rgba(5,17,60,0.24)_50%,rgba(5,17,60,0.78)_100%)]" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-[1.4rem] border border-white/10 bg-[rgba(9,19,56,0.72)] p-5 backdrop-blur-md">
                    <p className="text-sm uppercase tracking-[0.22em] text-accent/90">Manifesto</p>
                    <p className="mt-3 text-2xl font-semibold leading-tight text-foreground">
                      Cuidado não é pressa.
                      <span className="block text-foreground/72">É presença com direção.</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 top-16 rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.08)] px-4 py-3 text-sm text-foreground/82 shadow-[0_20px_40px_rgba(0,0,0,0.2)] backdrop-blur-md">
                Construção diária
              </div>
              <div className="absolute -right-4 bottom-28 rounded-2xl border border-accent/24 bg-[rgba(255,190,11,0.14)] px-4 py-3 text-sm font-medium text-foreground shadow-[0_18px_40px_rgba(255,190,11,0.14)] backdrop-blur-md">
                Consciência antes da correria
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 hidden justify-center lg:mt-0 md:flex">
          <a
            href="#quem-sou"
            className="scroll-indicator flex flex-col items-center gap-2 text-foreground/48 transition-colors hover:text-foreground/78"
          >
            <span className="text-sm">Descubra</span>
            <ArrowDownRight className="h-5 w-5 rotate-45" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionRefined;
