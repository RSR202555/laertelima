import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const WPNGCTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Visual only - no actual submission
    alert('Obrigado pelo interesse! Em breve entraremos em contato.');
    setEmail('');
  };

  return (
    <section className="py-24 md:py-32 gradient-wpng">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="scroll-reveal text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-vibrant/10 text-yellow-vibrant text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Faça parte desse movimento
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              FAÇA PARTE DESSE MOVIMENTO
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="scroll-reveal scroll-reveal-delay-1">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-medium to-yellow-vibrant rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
              
              <div className="relative bg-card/90 backdrop-blur-sm border border-purple-medium/30 rounded-2xl p-8 md:p-10">
                <div className="space-y-6">
                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor e-mail"
                      required
                      className="w-full px-6 py-4 rounded-xl bg-background/50 border border-purple-deep/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-yellow-vibrant focus:ring-2 focus:ring-yellow-vibrant/20 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-yellow-vibrant to-yellow-warm text-[hsl(280,80%,8%)] hover:from-yellow-warm hover:to-yellow-vibrant pulse-glow-yellow"
                  >
                    Quero entender minha dor
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  Receba conteúdo semanal sobre consciência e dor.<br />
                  Zero spam. Apenas conhecimento que liberta.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WPNGCTA;
