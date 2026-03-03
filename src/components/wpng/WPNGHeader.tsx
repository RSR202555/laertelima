import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Instagram } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.52 0 .2 5.3.2 11.82c0 2.08.54 4.1 1.56 5.9L0 24l6.42-1.7a11.86 11.86 0 0 0 5.64 1.43h.01c6.54 0 11.86-5.3 11.86-11.82 0-3.15-1.24-6.12-3.41-8.43Zm-8.46 18.1h-.01c-1.88 0-3.72-.51-5.32-1.47l-.38-.22-3.81 1.01 1.02-3.7-.25-.39a9.7 9.7 0 0 1-1.49-5.09c0-5.34 4.38-9.69 9.77-9.69 2.61 0 5.06 1 6.9 2.82a9.59 9.59 0 0 1 2.87 6.87c0 5.34-4.38 9.86-9.3 9.86Zm5.35-7.27c-.29-.14-1.7-.83-1.97-.93-.27-.1-.46-.14-.66.14-.2.28-.76.93-.93 1.12-.17.19-.35.22-.64.07-.29-.14-1.24-.46-2.36-1.47-.87-.78-1.46-1.75-1.63-2.04-.17-.28-.02-.43.13-.58.13-.13.29-.35.44-.52.15-.17.2-.28.29-.46.1-.19.05-.35-.02-.49-.07-.14-.66-1.58-.9-2.16-.24-.58-.48-.5-.66-.5l-.56-.01c-.2 0-.5.07-.76.35-.26.28-1 1-1 2.44 0 1.43 1.03 2.81 1.18 3 .14.19 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.31.19 1.81.12.55-.08 1.7-.69 1.94-1.36.24-.66.24-1.23.17-1.36-.07-.13-.27-.2-.56-.35Z" />
  </svg>
);

const WPNGHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? 'bg-purple-dark/90 shadow-[0_12px_40px_hsl(var(--purple-deep)/0.35)] border-b border-purple-medium/30'
          : 'bg-gradient-to-b from-purple-dark/65 via-purple-dark/40 to-transparent border-b border-purple-deep/20'
      } backdrop-blur-md`}
    >
      <div className="container mx-auto px-6 py-4 grid grid-cols-[auto,1fr,auto] items-center gap-3">
        <Link
          to="/"
          className="font-wpng inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-deep/20 hover:bg-purple-deep/35 border border-purple-deep/30 text-foreground/90 hover:text-foreground transition-colors"
          aria-label="Voltar para o site principal"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>

        <Link
          to="/with-pain-no-gain"
          className="font-wpng min-w-0 justify-self-center text-xl font-bold tracking-wide text-yellow-vibrant hover:text-yellow-warm transition-colors truncate"
          aria-label="Ir para o início do With Pain No Gain"
        >
          WITH PAIN NO GAIN
        </Link>

        <div className="flex items-center justify-end gap-2">
          <a
            href="https://www.instagram.com/laertelima_?igsh=cHZ3MTM5enI2MnBj&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-deep/20 hover:bg-purple-deep/35 border border-purple-deep/30 text-yellow-vibrant transition-colors"
            aria-label="Abrir Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://chat.whatsapp.com/KlRIEXY323X9N2ncFulc7H"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-deep/20 hover:bg-purple-deep/35 border border-purple-deep/30 text-yellow-vibrant transition-colors"
            aria-label="Abrir WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default WPNGHeader;
