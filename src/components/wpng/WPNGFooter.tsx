import { Link } from 'react-router-dom';
import { Instagram, Linkedin, ArrowLeft } from 'lucide-react';

const WPNGFooter = () => {
  return (
    <footer className="py-16 bg-purple-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Return Link */}
          <div className="text-center mb-12">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-deep/30 hover:bg-purple-deep/50 text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar para site principal
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="#" 
              className="p-3 rounded-full bg-purple-deep/30 hover:bg-purple-deep/50 text-yellow-vibrant transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-purple-deep/30 hover:bg-purple-deep/50 text-yellow-vibrant transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Bottom */}
          <div className="text-center pt-8 border-t border-purple-deep/30">
            <p className="text-sm text-muted-foreground">
              © 2025 With Pain No Gain. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WPNGFooter;
