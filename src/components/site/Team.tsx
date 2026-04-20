import doctor from "@/assets/doctor.jpg";

const team = [
  { name: "Dr. Ime Prezime", role: "Doktor dentalne medicine — Vlasnik", img: doctor },
  { name: "Dr. Ime Prezime", role: "Specijalist ortodoncije", img: doctor },
  { name: "Ime Prezime", role: "Dentalna asistentica", img: doctor },
];

export const Team = () => {
  return (
    <section id="tim" className="py-24 md:py-32 bg-background">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5"><span className="gold-line mr-3" />Naš tim</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Stručnjaci kojima možete <span className="italic text-primary">vjerovati</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((m) => (
            <div key={m.name + m.role} className="text-center group">
              <div className="overflow-hidden mb-6 shadow-soft">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-2xl">{m.name}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-primary mt-2">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
