import Link from "next/link";
import Image from "next/image";
import Navbar from "../../../../components/Navbar";
import Contacto from "../../../../components/Contacto";
import Footer from "../../../../components/Footer";
import WhatsappFloat from "../../../../components/WhatsappFloat";
import EvtaProductos from "../../../../components/EvtaProductos";
import BeneficiosAnimados from "../../../../components/BeneficiosAnimados";

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

      {/* ══════════════════════════════════════════
          HERO
          ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "80vh" }}>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #071318 0%, #0f2d3a 45%, #1a5068 100%)",
          }}
        />
        {/* Diagonal accent */}
        <div
          className="absolute top-0 right-0 h-full w-1/2 opacity-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, transparent 45%, #1f6b86 45%, #0ea5e9 58%, transparent 58%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)" }}
        />

        <div
          className="relative max-w-6xl mx-auto px-4 sm:px-6 flex items-center"
          style={{ minHeight: "80vh" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-20">
            {/* LEFT */}
            <div className="text-white">
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur">
                <div className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Soluciones para tu Oficina y Negocio
                </span>
              </div>

              <h1
                className="font-black mb-4 leading-tight"
                style={{ fontSize: "clamp(48px, 9vw, 80px)" }}
              >
                EVTA
                <span className="block" style={{ color: "#38bdf8" }}>
                  SOLUCIONES
                </span>
              </h1>

              <p
                className="text-lg font-bold uppercase tracking-widest mb-4"
                style={{ color: "rgba(186,230,253,0.85)" }}
              >
                Equipa tu oficina y negocio
              </p>

              <p
                className="text-base mb-10 leading-relaxed max-w-lg"
                style={{ color: "rgba(186,230,253,0.65)" }}
              >
                Venta de equipos de cómputo, papelería y accesorios. Renta de impresoras con
                mantenimiento incluido. Todo lo que necesitas en un solo lugar.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#venta"
                  className="px-8 py-4 rounded-xl font-bold text-base transition transform hover:scale-105"
                  style={{ background: "#fff", color: "#071318" }}
                >
                  Ver productos →
                </Link>
                <Link
                  href="#contacto"
                  className="px-8 py-4 rounded-xl font-bold text-base border transition hover:bg-white/10"
                  style={{ borderColor: "rgba(56,189,248,0.4)", color: "#bae6fd" }}
                >
                  Cotizar ahora
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center justify-center">
              <Image
                src="/icons/evta.png"
                alt="EVTA Soluciones"
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

      <EvtaProductos />

      {/* ══════════════════════════════════════════
          CONTACTO
          ══════════════════════════════════════════ */}
      <BeneficiosAnimados beneficios={beneficiosEvta} accentColor="#f97316" />
      <Contacto />
      <Footer />
      <WhatsappFloat />
    </main>
  );
}
