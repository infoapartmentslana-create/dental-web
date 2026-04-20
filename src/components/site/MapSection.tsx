export const MapSection = () => {
  return (
    <section id="mapa" className="bg-gradient-cream">
      <div className="container-luxe py-16">
        <div className="text-center mb-10">
          <p className="eyebrow mb-4"><span className="gold-line mr-3" />Lokacija</p>
          <h2 className="font-display text-3xl md:text-4xl">Pronađite nas</h2>
        </div>
        <div className="overflow-hidden shadow-elegant border border-border">
          {/* Zamijeni src svojom lokacijom (Google Maps embed) */}
          <iframe
            title="Lokacija ordinacije"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.748973!2d15.9742!3d45.8131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d701b1ea8839%3A0x3a45249628fbc28a!2sIlica%201%2C%2010000%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1700000000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};
