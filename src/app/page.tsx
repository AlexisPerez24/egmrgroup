import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiciosCotizacion from "../components/ServiciosCotizacion";
import OtrosServicios from "../components/OtrosServicios";
import Rentas from "../components/Rentas";
import QuienesSomos from "../components/QuienesSomos";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

import Reveal from "../components/Reveal";
import WhatsappFloat from "../components/WhatsappFloat";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Reveal>
        <Hero />
      </Reveal>

      <Reveal>
        <ServiciosCotizacion />
      </Reveal>

      <Reveal>
        <OtrosServicios />
      </Reveal>

      <Reveal>
        <Rentas />
      </Reveal>

      <Reveal>
        <QuienesSomos />
      </Reveal>

      <Reveal>
        <Contacto />
      </Reveal>

      <Reveal>
        <Footer />
      </Reveal>

      <WhatsappFloat />
    </main>
  );
}