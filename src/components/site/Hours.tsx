const hours = [
  { day: "Ponedjeljak", time: "08:00 — 20:00" },
  { day: "Utorak", time: "08:00 — 20:00" },
  { day: "Srijeda", time: "08:00 — 20:00" },
  { day: "Četvrtak", time: "08:00 — 20:00" },
  { day: "Petak", time: "08:00 — 16:00" },
  { day: "Subota", time: "09:00 — 13:00" },
  { day: "Nedjelja", time: "Zatvoreno" },
];

export const Hours = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container-luxe grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="eyebrow text-primary-glow mb-5"><span className="gold-line bg-primary-glow mr-3" />Radno vrijeme</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance text-background">
            Tu smo za vas <span className="italic text-primary-glow">kad god trebate</span>
          </h2>
          <p className="mt-6 text-background/70 leading-relaxed max-w-md">
            Termini se zakazuju unaprijed. U hitnim slučajevima nazovite nas — uvijek pronađemo rješenje.
          </p>
        </div>
        <div className="space-y-1">
          {hours.map((h) => (
            <div key={h.day} className="flex items-center justify-between py-4 border-b border-background/15">
              <span className="font-display text-lg">{h.day}</span>
              <span className="text-sm tracking-wider text-background/80">{h.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
