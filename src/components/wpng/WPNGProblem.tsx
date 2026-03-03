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
                className={`scroll-reveal scroll-reveal-delay-${index + 1} flex items-center gap-6 p-6 rounded-xl bg-purple-dark/30 border border-purple-deep/30`}
              >
                <div className="p-3 rounded-lg bg-purple-deep/50">
                  <Icon className="w-6 h-6 text-purple-medium" strokeWidth={1.5} />
                </div>
                <p className="text-xl md:text-2xl text-muted-foreground">
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
