import Navbar from "../../../components/Navbar";
import EGMRHero from "../../../components/EGMRHero";
import BeneficiosAnimados from "../../../components/BeneficiosAnimados";
import Reveal from "../../../components/Reveal";
import Contacto from "../../../components/Contacto";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import ServiciosCotizacionLimpio from "../../../components/ServiciosCotizacion";

export const metadata = {
  title: "EGMR - Sistemas de Seguridad",
  description:
    "Soluciones integrales de seguridad: cámaras, control de acceso y soporte técnico especializado",
};

export default function DivisionEGMR() {
  const beneficios = [
    {
      numero: "01",
      titulo: "EXPERIENCIA",
      descripcion: "Equipo experto en soluciones de seguridad con años de trayectoria",
    },
    {
      numero: "02",
      titulo: "CALIDAD",
      descripcion:
        "Equipos de alta tecnología y marcas confiables en el mercado",
    },
    {
      numero: "03",
      titulo: "SERVICIO INTEGRAL",
      descripcion: "Desde asesoría hasta instalación, mantenimiento y soporte técnico",
    },
    {
      numero: "04",
      titulo: "ATENCIÓN PERSONALIZADA",
      descripcion: "Soluciones adaptadas a las necesidades específicas de tu negocio",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <EGMRHero />

      {/* ════════════════════════════════════════════════════════════
          SERVICIOS PRINCIPALES
          ════════════════════════════════════════════════════════════ */}
      <Reveal>
        <ServiciosCotizacionLimpio />
      </Reveal>

      {/* ════════════════════════════════════════════════════════════
          ¿POR QUÉ ELEGIRNOS?
          ════════════════════════════════════════════════════════════ */}
      <BeneficiosAnimados beneficios={beneficios} accentColor="var(--egmr-teal)" />

      {/* ════════════════════════════════════════════════════════════
          BENEFICIOS DETALLADOS — comentado
          ════════════════════════════════════════════════════════════ */}
      {/* <section className="py-24 bg-gradient-to-br from-[color:var(--egmr-ink)] to-[color:var(--egmr-navy)] text-white">
        ...
      </section> */}

      {/* ════════════════════════════════════════════════════════════
          CONTACTO
          ════════════════════════════════════════════════════════════ */}
      <Reveal>
        <Contacto />
      </Reveal>

      {/* ════════════════════════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════════════════════════ */}
      <Reveal>
        <Footer />
      </Reveal>

      {/* WhatsApp */}
      <WhatsappFloat />
    </main>
  );
}