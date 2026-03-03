import { Brain, Flame, Unlink } from 'lucide-react';

const WPNGTransformation = () => {
  const cards = [
    {
      Icon: Brain,
      title: 'ENTENDER',
      description: 'Quando você entende de onde vem, como funciona, o que perpetua.',
    },
    {
      Icon: Flame,
      title: 'EMPODERAR',
      description: 'Você deixa de ser refém e passa a ser protagonista.',
    },
    {
      Icon: Unlink,
      title: 'LIBERTAR',
      description: 'Educação em dor é autonomia. É clareza. É liberdade.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[hsl(45,70%,12%)]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map(({ Icon, title, description }, index) => (
              <div 
                key={title}
                className={`scroll-reveal scroll-reveal-delay-${index + 1} group`}
              >
                <div className="relative h-full">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-yellow-vibrant/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Card */}
                  <div className="relative h-full bg-purple-dark border border-yellow-vibrant/20 rounded-2xl p-8 hover:border-yellow-vibrant/50 transition-colors">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-block p-4 rounded-xl bg-yellow-vibrant/10 group-hover:bg-yellow-vibrant/20 transition-colors">
                        <Icon className="w-8 h-8 text-yellow-vibrant" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-yellow-vibrant mb-4">
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WPNGTransformation;
