import heroPoster from "@/assets/hero-poster.jpg";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video pozadina - zamijeni src svojim videom u /public/videos/ordinacija.mp4 */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Tamni gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Sadržaj */}
      <div className="relative z-10 container-luxe text-center animate-fade-up">
        <div className="inline-block px-8 py-10 md:px-14 md:py-14 bg-background/15 backdrop-blur-md border border-primary-foreground/20 rounded-sm">
          <p className="eyebrow text-primary-foreground/90 mb-6">
            <span className="gold-line bg-primary-foreground/60 mr-3" />
            Stomatološka ordinacija
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[1.05] text-balance">
            Dobrodošli u<br />
            <span className="italic text-primary-glow">Dentalis</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-primary-foreground/85 text-base md:text-lg font-light leading-relaxed">
            Vrhunska stomatološka skrb u atmosferi mira i povjerenja.
            Vaš osmijeh — naša najveća umjetnost.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#kontakt" className="bg-primary text-primary-foreground px-8 py-3.5 text-xs uppercase tracking-[0.25em] hover:bg-primary-glow transition-colors">
              Zakaži pregled
            </a>
            <a href="#usluge" className="text-primary-foreground border border-primary-foreground/40 px-8 py-3.5 text-xs uppercase tracking-[0.25em] hover:bg-primary-foreground/10 transition-colors">
              Naše usluge
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary-foreground/60 animate-pulse" />
      </div>
    </section>
  );
};
