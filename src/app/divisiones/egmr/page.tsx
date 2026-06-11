import Link from "next/link";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
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

      {/* ════════════════════════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "92vh" }}>
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #071318 0%, #0f2d3a 45%, #1a5068 100%)",
          }}
        />

        {/* Diagonal accent stripe — like el banner */}
        <div
          className="absolute top-0 right-0 h-full w-1/2 opacity-25 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, transparent 45%, #1f6b86 45%, #0ea5e9 58%, transparent 58%)",
          }}
        />

        {/* Glow orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(14,116,144,0.15) 0%, transparent 70%)" }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex items-center" style={{ minHeight: "92vh" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-20">

            {/* ── LEFT: Texto ── */}
            <div className="text-white">
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur">
                <div className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Soluciones de Seguridad
                </span>
              </div>

              <h1 className="font-black mb-4 leading-tight" style={{ fontSize: "clamp(48px, 9vw, 80px)" }}>
                SISTEMAS DE
                <span className="block" style={{ color: "#38bdf8" }}>SEGURIDAD</span>
              </h1>

              <p className="text-lg font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(186,230,253,0.85)" }}>
                Protegemos lo que más te importa
              </p>

              <p className="text-base mb-10 leading-relaxed max-w-lg" style={{ color: "rgba(186,230,253,0.65)" }}>
                Instalación, mantenimiento y soporte de cámaras, videoporteros,
                control de acceso y grabación. Tecnología confiable para tu negocio o hogar.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="#servicios"
                  className="px-8 py-4 rounded-xl font-bold text-base transition transform hover:scale-105"
                  style={{ background: "#fff", color: "#071318" }}
                >
                  Nuestros servicios →
                </Link>
                <Link
                  href="#contacto"
                  className="px-8 py-4 rounded-xl font-bold text-base border transition hover:bg-white/10"
                  style={{ borderColor: "rgba(56,189,248,0.4)", color: "#bae6fd" }}
                >
                  Cotizar ahora
                </Link>
              </div>

              <div className="flex gap-10">
                <div>
                  <div className="text-3xl font-black" style={{ color: "#38bdf8" }}>24/7</div>
                  <p className="text-sm" style={{ color: "rgba(186,230,253,0.55)" }}>Soporte continuo</p>
                </div>
                <div>
                  <div className="text-3xl font-black" style={{ color: "#38bdf8" }}>+100</div>
                  <p className="text-sm" style={{ color: "rgba(186,230,253,0.55)" }}>Clientes satisfechos</p>
                </div>
                <div>
                  <div className="text-3xl font-black" style={{ color: "#38bdf8" }}>2020</div>
                  <p className="text-sm" style={{ color: "rgba(186,230,253,0.55)" }}>Desde Tijuana</p>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Imagen ── */}
            <div className="flex items-center justify-center">
              <Image
                src="/icons/egmr.png"
                alt="EGMR Sistemas de Seguridad"
                width={600}
                height={700}
                className="w-full object-contain rounded-3xl"
                priority
                style={{
                  boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(56,189,248,0.15)",
                  animation: "float 4s ease-in-out infinite",
                }}
              />
              <style>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-14px); }
                }
              `}</style>
            </div>

          </div>
        </div>
      </section>

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