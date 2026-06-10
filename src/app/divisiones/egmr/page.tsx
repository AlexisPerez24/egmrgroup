import Link from "next/link";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
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
                height={460}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          ¿POR QUÉ ELEGIRNOS?
          ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-[color:var(--egmr-ink)] mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Somos el equipo mejor actualizado en seguridad y telecomunicaciones,
              transformando a EGMR en el mejor proveedor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-5xl font-black text-[color:var(--egmr-teal)] mb-4">
                  {benefit.numero}
                </div>
                <h3 className="text-xl font-bold text-[color:var(--egmr-ink)] mb-2 uppercase tracking-wide">
                  {benefit.titulo}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.descripcion}
                </p>
              </div>
            ))}
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
          BENEFICIOS DETALLADOS
          ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-[color:var(--egmr-ink)] to-[color:var(--egmr-navy)] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              Beneficios de nuestros servicios
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Protección profesional que te da tranquilidad y control total
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6 p-6 rounded-xl border border-white/10 hover:bg-white/5 transition">
              <div className="text-5xl flex-shrink-0">🔐</div>
              <div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">
                  Seguridad Total
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Protege tus instalaciones, colaboradores y activos con tecnología
                  confiable 24/7
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-xl border border-white/10 hover:bg-white/5 transition">
              <div className="text-5xl flex-shrink-0">📊</div>
              <div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">
                  Monitoreo en Tiempo Real
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Visualiza desde cualquier lugar y en cualquier momento lo que ocurre
                  en tu negocio
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-xl border border-white/10 hover:bg-white/5 transition">
              <div className="text-5xl flex-shrink-0">🔔</div>
              <div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">
                  Alertas Inteligentes
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Notificaciones inmediatas ante cualquier evento o situación anómala
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-xl border border-white/10 hover:bg-white/5 transition">
              <div className="text-5xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">
                  Tranquilidad y Control
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Toma decisiones informadas con información confiable y acceso remoto
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-xl border border-white/10 hover:bg-white/5 transition">
              <div className="text-5xl flex-shrink-0">⚙</div>
              <div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">
                  Instalación Profesional
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Instalación y mantenimiento preventivo y correctivo especializado
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-xl border border-white/10 hover:bg-white/5 transition">
              <div className="text-5xl flex-shrink-0">📞</div>
              <div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">
                  Soporte Especializado
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Equipo técnico disponible para resolver problemas con mayor velocidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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