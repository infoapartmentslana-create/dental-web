import { Quote } from "lucide-react";

const reviews = [
  { name: "Ana M.", text: "Najbolja ordinacija u kojoj sam ikad bila. Profesionalnost, ljubaznost i potpuno bezbolan tretman." },
  { name: "Marko P.", text: "Konačno sam pronašao stomatologa kojemu vjerujem. Tim je izvanredan, a prostor predivan." },
  { name: "Ivana K.", text: "Estetski tretman je nadmašio sva očekivanja. Topla preporuka svima!" },
];

export const Reviews = () => {
  return (
    <section id="recenzije" className="py-24 md:py-32 bg-background">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5"><span className="gold-line mr-3" />Recenzije</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Riječi naših <span className="italic text-primary">pacijenata</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <article key={r.name} className="bg-card p-10 shadow-soft hover-lift border border-border/60">
              <Quote className="text-primary mb-6" size={32} strokeWidth={1} />
              <p className="font-display text-xl leading-relaxed text-foreground/90 italic mb-8">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-display">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Pacijent</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
