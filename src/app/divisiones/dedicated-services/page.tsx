import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import DedicatedHero from "../../../components/DedicatedHero";
import DedicatedServicios from "../../../components/DedicatedServicios";
import DedicatedBeneficios from "../../../components/DedicatedBeneficios";
import DedicatedContacto from "../../../components/DedicatedContacto";
import CatalogoSection from "../../../components/CatalogoSection";

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

      <CatalogoSection
        empresa="dEdicaTEd Services"
        descripcion="Consulta nuestros planes y servicios de internet dedicado empresarial."
        pdfPath="/catalogos/dedicated.pdf"
        color="#a855f7"
        colorGlow="rgba(168,85,247,"
      />

      {/* ════════════════════════════════════════════════════════════
          CONTACTO
          ════════════════════════════════════════════════════════════ */}
      <DedicatedContacto />
      <Footer />
      <WhatsappFloat />
    </main>
  );
}
