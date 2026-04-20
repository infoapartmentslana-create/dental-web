import doctor from "@/assets/doctor.jpg";

export const About = () => {
  return (
    <section id="o-nama" className="py-24 md:py-32 bg-background">
      <div className="container-luxe grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={doctor}
            alt="Vlasnica ordinacije"
            loading="lazy"
            className="w-full aspect-[4/5] object-cover shadow-elegant"
          />
          <div className="hidden md:block absolute -bottom-8 -right-8 w-40 h-40 border border-primary -z-0" />
        </div>
        <div>
          <p className="eyebrow mb-5"><span className="gold-line mr-3" />O nama</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance mb-6">
            Spoj <span className="italic text-primary">tradicije</span> i moderne stomatologije
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            [Ovdje unesite kratki opis ordinacije — tko ste, kada ste osnovani, koja je vaša filozofija
            rada. 3–5 rečenica koje pacijentima daju osjećaj povjerenja i topline.]
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Naš pristup spaja vrhunsku tehnologiju s individualnom skrbi. Svaki pacijent zaslužuje
            vrijeme, pažnju i tretman izrađen baš za njega.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            {[
              { num: "15+", label: "Godina iskustva" },
              { num: "5000+", label: "Zadovoljnih pacijenata" },
              { num: "100%", label: "Posvećenost" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl text-primary">{s.num}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
