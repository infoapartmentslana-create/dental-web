const services = [
  { title: "Estetska stomatologija", desc: "Bjeljenje zubi, ljuskice i kompozitne nadogradnje za savršen osmijeh." },
  { title: "Implantologija", desc: "Trajna i prirodna zamjena izgubljenih zubi vrhunskim implantatima." },
  { title: "Protetika", desc: "Krunice, mostovi i proteze izrađeni s preciznošću i pažnjom." },
  { title: "Ortodoncija", desc: "Klasične i nevidljive (Invisalign) opcije za savršeno poravnanje." },
  { title: "Konzervativna stomatologija", desc: "Bezbolno liječenje karijesa i estetske ispune." },
  { title: "Dječja stomatologija", desc: "Posebna briga i prilagođen pristup najmlađim pacijentima." },
  { title: "Parodontologija", desc: "Liječenje zubnog mesa i prevencija parodontoze." },
  { title: "Profesionalna higijena", desc: "Uklanjanje kamenca i poliranje za zdrave zube i desni." },
];

export const Services = () => {
  return (
    <section id="usluge" className="py-24 md:py-32 bg-gradient-cream">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5"><span className="gold-line mr-3" />Naše usluge</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Cjelokupna stomatološka <span className="italic text-primary">skrb</span> na jednom mjestu
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map((s, i) => (
            <div key={s.title} className="bg-background p-8 hover-lift group cursor-default">
              <div className="font-display text-5xl text-primary/20 group-hover:text-primary/60 transition-colors mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
