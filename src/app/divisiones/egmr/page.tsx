import Link from "next/link";
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
      <section className="relative overflow-hidden pt-20 pb-32">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #0f2d3a 0%, #1f6b86 50%, #0f2d3a 100%)",
          }}
        />

        <div className="absolute top-0 right-0 w-96 h-96 bg-[color:var(--egmr-teal)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Soluciones de Seguridad
                </span>
              </div>

              <h1 className="text-6xl sm:text-7xl font-black mb-6 leading-tight">
                SISTEMAS DE
                <span className="block text-[color:var(--egmr-teal)]">SEGURIDAD</span>
              </h1>

              <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
                Protegemos lo que más te importa. Soluciones integrales de seguridad y
                telecomunicaciones diseñadas para empresas que valoran la confianza y la
                excelencia.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="#servicios"
                  className="px-8 py-4 rounded-lg bg-white text-[color:var(--egmr-ink)] font-bold text-lg hover:bg-white/90 transition transform hover:scale-105"
                >
                  Conocer servicios
                </Link>
              </div>

              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-black text-[color:var(--egmr-teal)]">
                    24/7
                  </div>
                  <p className="text-sm text-white/60">Soporte continuo</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-[color:var(--egmr-teal)]">
                    +100
                  </div>
                  <p className="text-sm text-white/60">Clientes satisfechos</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-[color:var(--egmr-teal)]">
                    2020
                  </div>
                  <p className="text-sm text-white/60">Desde Tijuana</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--egmr-teal)]/30 to-blue-600/30 rounded-3xl border border-white/10 backdrop-blur-xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">🔒</div>
                  <p className="text-white/80 text-lg font-semibold">
                    PROTECCIÓN INTEGRAL
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    Sistemas confiables de última generación
                  </p>
                </div>
              </div>
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