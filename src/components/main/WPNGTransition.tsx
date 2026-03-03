import { Link } from 'react-router-dom';
import { Unlink, ArrowRight } from 'lucide-react';

const WPNGTransition = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient Background - Blue to Purple transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(260,50%,15%)] to-[hsl(280,60%,12%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="scroll-reveal">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-medium to-yellow-vibrant rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
              
              {/* Card */}
              <div className="relative bg-card/90 backdrop-blur-sm border border-purple-medium/30 rounded-2xl p-10 md:p-14 text-center">
                {/* Icon */}
                <div className="mb-8 flex justify-center">
                  <div className="p-5 rounded-full bg-purple-deep/30 pulse-glow-yellow">
                    <Unlink className="w-10 h-10 text-yellow-vibrant" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  WITH PAIN NO GAIN
                </h3>

                {/* Description */}
                <p className="text-xl text-muted-foreground mb-8">
                  Viver com dor não precisa<br />
                  ser seu destino
                </p>

                {/* CTA Button */}
                <Link 
                  to="/with-pain-no-gain"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-purple-medium to-purple-deep text-foreground hover:from-yellow-vibrant hover:to-yellow-warm hover:text-background glow-purple hover:glow-yellow"
                >
                  Descubra como transformar
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WPNGTransition;
