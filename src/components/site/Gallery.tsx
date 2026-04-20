import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const items = [
  { src: g1, alt: "Recepcija", span: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "Ordinacija" },
  { src: g3, alt: "Instrumenti" },
  { src: g4, alt: "Čekaonica", span: "md:col-span-2" },
];

export const Gallery = () => {
  return (
    <section id="galerija" className="py-24 md:py-32 bg-gradient-cream">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5"><span className="gold-line mr-3" />Galerija</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Prostor osmišljen za vaš <span className="italic text-primary">mir</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {items.map((it) => (
            <div key={it.alt} className={`overflow-hidden shadow-soft ${it.span ?? ""}`}>
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
