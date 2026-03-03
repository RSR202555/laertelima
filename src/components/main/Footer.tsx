import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-gradient-to-b from-background to-[hsl(220,50%,4%)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* CTA */}
          <div className="text-center mb-12">
            <p className="text-2xl md:text-3xl text-foreground font-light mb-6">
              Vamos conversar?
            </p>
            <a 
              href="mailto:contato@laertelima.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/20 hover:bg-primary/30 text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              Entre em contato
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="#" 
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © 2025 Laerte Lima. Todos os direitos reservados.
            </p>
            <Link 
              to="/with-pain-no-gain"
              className="text-sm text-accent hover:text-accent/80 transition-colors"
            >
              With Pain No Gain →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
