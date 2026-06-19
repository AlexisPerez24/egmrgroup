import Navbar from "../../../../components/Navbar";
import Contacto from "../../../../components/Contacto";
import Footer from "../../../../components/Footer";
import WhatsappFloat from "../../../../components/WhatsappFloat";
import EVTAHero from "../../../../components/EVTAHero";
import EvtaProductos from "../../../../components/EvtaProductos";
import BeneficiosAnimados from "../../../../components/BeneficiosAnimados";
import CatalogoSection from "../../../../components/CatalogoSection";

const beneficiosEvta = [
  { numero: "01", titulo: "Experiencia", descripcion: "Equipo experto en soluciones para oficina y negocio con años de trayectoria." },
  { numero: "02", titulo: "Calidad", descripcion: "Equipos y materiales de las mejores marcas del mercado." },
  { numero: "03", titulo: "Servicio Integral", descripcion: "Desde la venta hasta la entrega e instalación en tu oficina." },
  { numero: "04", titulo: "Atención Personalizada", descripcion: "Soluciones adaptadas a las necesidades específicas de tu negocio." },
];

export const metadata = {
  title: "EVTA - Soluciones para tu Oficina y Negocio",
  description:
    "Venta y renta de equipos de cómputo, papelería, accesorios, consumibles e impresoras para tu oficina y negocio.",
};


export default function PageEVTA() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <EVTAHero />

      <EvtaProductos />

      {/* ══════════════════════════════════════════
          CONTACTO
          ══════════════════════════════════════════ */}
      <BeneficiosAnimados beneficios={beneficiosEvta} accentColor="#f97316" />

      <CatalogoSection
        empresa="EVTA"
        descripcion="Consulta nuestro catálogo de equipos de cómputo, papelería, accesorios, consumibles e impresoras."
        pdfPath="/catalogos/evta.pdf"
        color="#f97316"
        colorGlow="rgba(249,115,22,"
        theme="light"
      />

      <Contacto />
      <Footer />
      <WhatsappFloat />
    </main>
  );
}
