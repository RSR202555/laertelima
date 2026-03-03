import { Heart, Brain, HandHeart } from 'lucide-react';
import neuralImage from '@/assets/philosophy-neural.jpg';

const PhilosophySection = () => {
  const icons = [
    { Icon: Heart, label: 'Empatia' },
    { Icon: Brain, label: 'Consciência' },
    { Icon: HandHeart, label: 'Cuidado' },
  ];

  return (
    <section id="filosofia" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${neuralImage})` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Icons */}
        <div className="scroll-reveal flex justify-center gap-12 md:gap-20 mb-16">
          {icons.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3 group">
              <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
              </div>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>

        {/* Main Quote */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <blockquote className="scroll-reveal scroll-reveal-delay-1">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed">
              "Não quero ser apenas mais um médico."
            </p>
          </blockquote>

          <blockquote className="scroll-reveal scroll-reveal-delay-2">
            <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-accent text-glow-amber">
              "Quero ser o <span className="underline decoration-accent/50 underline-offset-8">seu</span> médico."
            </p>
          </blockquote>

          <div className="scroll-reveal scroll-reveal-delay-3 pt-8">
            <p className="text-xl md:text-2xl text-muted-foreground">
              Presente. Comprometido.<br />
              <span className="text-foreground font-medium">Preparado para caminhar ao lado.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
