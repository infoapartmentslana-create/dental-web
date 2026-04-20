import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Team } from "@/components/site/Team";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { Hours } from "@/components/site/Hours";
import { Contact } from "@/components/site/Contact";
import { MapSection } from "@/components/site/MapSection";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Gallery />
      <Reviews />
      <Hours />
      <Contact />
      <MapSection />
      <Footer />
    </main>
  );
};

export default Index;
