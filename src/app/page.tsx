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
      {/* HERO */}
      <Reveal>
        <Hero />
      </Reveal>

      {/* SECCIÓN DE SERVICIOS */}
      <Reveal>
        <ServiciosCotizacion />
      </Reveal>

      {/* OTROS SERVICIOS */}
      <Reveal>
        <OtrosServicios />
      </Reveal>

      {/* RENTA */}
      <Reveal>
        <Rentas />
      </Reveal>

      {/* QUIENES SOMOS */}
      <Reveal>
        <QuienesSomos />
      </Reveal>

      {/* CONTACTO */}
      <Reveal>
        <Contacto />
      </Reveal>

      {/* FOOTER */}
      <Reveal>
        <Footer />
      </Reveal>

      {/* WHATSAPP FLOAT */}
      <WhatsappFloat />
    </main>
  );
}