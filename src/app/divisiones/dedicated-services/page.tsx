import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import DedicatedHero from "../../../components/DedicatedHero";
import DedicatedServicios from "../../../components/DedicatedServicios";
import DedicatedBeneficios from "../../../components/DedicatedBeneficios";
import DedicatedContacto from "../../../components/DedicatedContacto";

export const metadata = {
  title: "dEdicaTEd Services - Internet Dedicado Empresarial",
  description:
    "Internet simétrico de alta velocidad para empresas. Conexión estable 24/7 con soporte especializado.",
};


export default function DedicatedServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <DedicatedHero />

      {/* ════════════════════════════════════════════════════════════
          SERVICIOS
          ════════════════════════════════════════════════════════════ */}
      <DedicatedServicios />

      {/* ════════════════════════════════════════════════════════════
          ¿POR QUÉ ELEGIRNOS?
          ════════════════════════════════════════════════════════════ */}
      <DedicatedBeneficios />

      {/* ════════════════════════════════════════════════════════════
          CONTACTO
          ════════════════════════════════════════════════════════════ */}
      <DedicatedContacto />
      <Footer />
      <WhatsappFloat />
    </main>
  );
}
