import Navbar from "../../../components/Navbar";
import EGMRHero from "../../../components/EGMRHero";
import BeneficiosAnimados from "../../../components/BeneficiosAnimados";
import Reveal from "../../../components/Reveal";
import Contacto from "../../../components/Contacto";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import ServiciosCotizacionLimpio from "../../../components/ServiciosCotizacion";
import CatalogoSection from "../../../components/CatalogoSection";
import EGMRBackground from "../../../components/EGMRBackground";

export const metadata = {
  title: "EGMR - Sistemas de Seguridad",
  description:
    "Soluciones integrales de seguridad: cámaras, control de acceso y soporte técnico especializado",
};

export default function DivisionEGMR() {
  const beneficios = [
    { numero: "01", titulo: "EXPERIENCIA", descripcion: "Equipo experto en soluciones de seguridad con años de trayectoria" },
    { numero: "02", titulo: "CALIDAD", descripcion: "Equipos de alta tecnología y marcas confiables en el mercado" },
    { numero: "03", titulo: "SERVICIO INTEGRAL", descripcion: "Desde asesoría hasta instalación, mantenimiento y soporte técnico" },
    { numero: "04", titulo: "ATENCIÓN PERSONALIZADA", descripcion: "Soluciones adaptadas a las necesidades específicas de tu negocio" },
  ];

  return (
    <EGMRBackground>
      <Navbar />
      <EGMRHero />
      <Reveal><ServiciosCotizacionLimpio /></Reveal>
      <BeneficiosAnimados beneficios={beneficios} accentColor="var(--egmr-teal)" />
      <CatalogoSection
        empresa="EGMR"
        descripcion="Consulta nuestro catálogo completo de sistemas de seguridad, cámaras, videoporteros, control de acceso y más."
        pdfPath="/catalogos/egmr.pdf"
        color="#38bdf8"
        colorGlow="rgba(56,189,248,"
      />
      <Reveal><Contacto /></Reveal>
      <Reveal><Footer /></Reveal>
      <WhatsappFloat />
    </EGMRBackground>
  );
}
