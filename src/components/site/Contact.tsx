import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", gdpr: false });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.gdpr) {
      toast.error("Molimo prihvatite uvjete obrade osobnih podataka.");
      return;
    }
    if (!form.name || !form.email || !form.message) {
      toast.error("Molimo ispunite sva obavezna polja.");
      return;
    }
    // TODO: spojiti na slanje emaila (Lovable Cloud edge function)
    toast.success("Hvala! Javit ćemo vam se u najkraćem roku.");
    setForm({ name: "", email: "", phone: "", message: "", gdpr: false });
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-background">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5"><span className="gold-line mr-3" />Kontakt</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Zakažite svoj <span className="italic text-primary">termin</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            {[
              { icon: Phone, title: "Telefon", value: "+385 1 234 5678", href: "tel:+38512345678" },
              { icon: Mail, title: "Email", value: "info@dentalis.hr", href: "mailto:info@dentalis.hr" },
              { icon: MapPin, title: "Adresa", value: "Ilica 1, 10000 Zagreb", href: "#mapa" },
            ].map((c) => (
              <a key={c.title} href={c.href} className="flex items-start gap-5 p-6 border border-border hover:border-primary transition-colors">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-gold text-primary-foreground shrink-0">
                  <c.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">{c.title}</div>
                  <div className="font-display text-xl">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Forma */}
          <form onSubmit={onSubmit} className="bg-card border border-border p-8 md:p-10 space-y-5 shadow-soft">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Ime i prezime *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full mt-2 bg-transparent border-b border-border focus:border-primary outline-none py-2.5 text-foreground"
                maxLength={100}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full mt-2 bg-transparent border-b border-border focus:border-primary outline-none py-2.5"
                  maxLength={255}
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Telefon</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full mt-2 bg-transparent border-b border-border focus:border-primary outline-none py-2.5"
                  maxLength={30}
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Poruka *</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full mt-2 bg-transparent border-b border-border focus:border-primary outline-none py-2.5 resize-none"
                maxLength={1000}
              />
            </div>
            <label className="flex items-start gap-3 text-xs text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={form.gdpr}
                onChange={(e) => setForm({ ...form, gdpr: e.target.checked })}
                className="mt-1 accent-primary"
              />
              <span>Slažem se s obradom osobnih podataka u svrhu odgovora na upit (GDPR).</span>
            </label>
            <button type="submit" className="w-full bg-primary text-primary-foreground py-4 text-xs uppercase tracking-[0.25em] hover:bg-foreground transition-colors">
              Pošalji upit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
