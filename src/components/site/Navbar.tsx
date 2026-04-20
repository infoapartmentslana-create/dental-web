import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#o-nama", label: "O nama" },
  { href: "#usluge", label: "Usluge" },
  { href: "#tim", label: "Tim" },
  { href: "#galerija", label: "Galerija" },
  { href: "#recenzije", label: "Recenzije" },
  { href: "#kontakt", label: "Kontakt" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="container-luxe flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="font-display text-xl md:text-2xl tracking-wide">
          <span className="text-primary">D</span>entalis
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#kontakt" className="hidden md:inline-flex text-xs uppercase tracking-[0.25em] border border-primary text-primary px-5 py-2.5 hover:bg-primary hover:text-primary-foreground transition-colors">
          Naruči se
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container-luxe py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80 hover:text-primary">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
