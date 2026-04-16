import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

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

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl transition-all ${
        scrolled
          ? 'border-border/60 bg-background/90 shadow-[0_10px_30px_hsl(var(--foreground)/0.06)]'
          : 'border-border/40 bg-background/70'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <Link to="/" className="text-lg font-semibold tracking-[-0.03em] text-foreground transition-colors hover:text-accent sm:text-xl">
          Laerte Lima
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#quem-sou" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre
          </a>
          <a 
            href="#filosofia" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Filosofia
          </a>
          <a 
            href="#missao" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Missão
          </a>
          <Link 
            to="/with-pain-no-gain" 
            className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            With Pain No Gain
          </Link>
          <div className="flex items-center gap-2">
            <a
              href="https://instagram.com/seuusuario"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-muted/20 hover:bg-muted/35 border border-border/50 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Abrir Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/55SEUNUMERO"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-muted/20 hover:bg-muted/35 border border-border/50 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Abrir WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-foreground shadow-[0_12px_24px_rgba(3,8,24,0.18)] transition-colors hover:bg-white/10"
                aria-label="Abrir menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-[360px] border-l border-white/10 bg-[hsl(224,55%,12%)]/96 px-6 backdrop-blur-xl">
              <SheetHeader>
                <SheetTitle className="text-left text-lg font-semibold tracking-[-0.03em] text-foreground">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="#quem-sou"
                  className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-base text-foreground/90 transition-colors hover:bg-white/10 hover:text-foreground"
                >
                  Sobre
                </a>
                <a
                  href="#filosofia"
                  className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-base text-foreground/90 transition-colors hover:bg-white/10 hover:text-foreground"
                >
                  Filosofia
                </a>
                <a
                  href="#missao"
                  className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-base text-foreground/90 transition-colors hover:bg-white/10 hover:text-foreground"
                >
                  Missão
                </a>
                <Link
                  to="/with-pain-no-gain"
                  className="rounded-2xl border border-accent/20 bg-accent/10 px-4 py-3 text-base font-medium text-accent transition-colors hover:bg-accent/15 hover:text-accent/80"
                >
                  With Pain No Gain
                </Link>
                <div className="pt-4 flex items-center gap-3">
                  <a
                    href="https://instagram.com/seuusuario"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                    aria-label="Abrir Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/55SEUNUMERO"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                    aria-label="Abrir WhatsApp"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
