import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiciosCotizacion from "../components/ServiciosCotizacion";
import OtrosServicios from "../components/OtrosServicios";
import Rentas from "../components/Rentas";
import QuienesSomos from "../components/QuienesSomos";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      <ServiciosCotizacion />
      <OtrosServicios />
      <Rentas />
      <QuienesSomos />
      <Contacto />

      <Footer />
    </main>
  );
}