import { Clock, Frown, Battery, UserX } from 'lucide-react';

const WPNGProblem = () => {
  const problems = [
    {
      Icon: Frown,
      text: 'Ela molda rotinas.',
    },
    {
      Icon: UserX,
      text: 'Limita escolhas.',
    },
    {
      Icon: Battery,
      text: 'Rouba energia.',
    },
    {
      Icon: Clock,
      text: 'Redefine quem você é.',
    },
  ];

  return (
    <section id="problema" className="py-24 md:py-32 gradient-wpng-radial">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <div className="scroll-reveal text-center mb-16">
            <p className="text-2xl md:text-3xl text-foreground font-light leading-relaxed">
              A dor crônica não é apenas sintoma.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="space-y-8">
            {problems.map(({ Icon, text }, index) => (
              <div
                key={index}
                className={`scroll-reveal scroll-reveal-delay-${index + 1} flex items-center gap-6 rounded-xl border border-purple-deep/30 bg-purple-dark/30 p-6`}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-yellow-vibrant/35 bg-[linear-gradient(135deg,rgba(255,214,10,0.22),rgba(168,85,247,0.3))] shadow-[0_0_30px_rgba(255,214,10,0.18)] backdrop-blur-sm">
                  <Icon className="h-8 w-8 text-foreground [filter:drop-shadow(0_0_12px_rgba(255,214,10,0.28))]" strokeWidth={1.8} />
                </div>
                <p className="text-xl text-foreground/88 md:text-2xl">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WPNGProblem;
