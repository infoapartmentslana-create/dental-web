import { Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container-luxe grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-background mb-4">
            <span className="text-primary-glow">D</span>entalis
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Vrhunska stomatološka skrb u atmosferi mira i povjerenja. Vaš osmijeh — naša najveća umjetnost.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="w-10 h-10 border border-background/20 flex items-center justify-center hover:border-primary-glow hover:text-primary-glow transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 border border-background/20 flex items-center justify-center hover:border-primary-glow hover:text-primary-glow transition-colors">
              <Facebook size={16} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-primary-glow mb-4">Kontakt</h4>
          <ul className="space-y-2 text-sm">
            <li>Ilica 1, 10000 Zagreb</li>
            <li>+385 1 234 5678</li>
            <li>info@dentalis.hr</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-primary-glow mb-4">Pravno</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary-glow">Politika privatnosti</a></li>
            <li><a href="#" className="hover:text-primary-glow">Uvjeti korištenja</a></li>
            <li><a href="#" className="hover:text-primary-glow">Kolačići</a></li>
          </ul>
        </div>
      </div>
      <div className="container-luxe pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-background/50">
        <div>© {new Date().getFullYear()} Dentalis d.o.o. — Sva prava pridržana.</div>
        <div>OIB: 00000000000 · Ilica 1, 10000 Zagreb</div>
      </div>
    </footer>
  );
};
