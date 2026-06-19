import Image from "next/image";
import Link from "next/link";

const items = [
  {
    key: "cableado",
    titulo: "Cableado estructurado",
    desc: "Infraestructura de red organizada y lista para crecer con tu empresa.",
    icon: "/icons/cableado.png",
    color: "#38bdf8",
  },
  {
    key: "paneles-solares",
    titulo: "Paneles solares",
    desc: "Soluciones energéticas para eficiencia y ahorro a largo plazo.",
    icon: "/icons/paneles-solares.png",
    color: "#facc15",
  },
  {
    key: "incendios",
    titulo: "Sistemas contra incendios",
    desc: "Prevención, instalación y soporte de sistemas de seguridad contra fuego.",
    icon: "/icons/incendios.png",
    color: "#f87171",
  },
  {
    key: "papeleria",
    titulo: "Papelería y equipo de oficina",
    desc: "Todo lo necesario para tu oficina: insumos, papelería y equipos.",
    icon: "/icons/papeleria.png",
    color: "#a78bfa",
  },
];

export default function OtrosServicios() {
  return (
    <section
      id="otros"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #060b14 0%, #0a1525 55%, #060b14 100%)" }}
    >
      {/* Accent top */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.2) 40%, rgba(56,189,248,0.2) 60%, transparent)" }} />

      {/* Orb */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 400, background: "radial-gradient(ellipse, rgba(56,189,248,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-sky-300/20 bg-white/5 backdrop-blur">
            <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sm font-semibold text-slate-200 uppercase tracking-widest">
              Servicios adicionales
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Otros servicios
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Complementamos tu proyecto con soluciones tecnológicas integrales.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <Link
              key={it.key}
              href={`/otros/${it.key}`}
              className="group relative block rounded-2xl border border-white/8 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)" }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${it.color}18 0%, transparent 65%)` }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${it.color}80, transparent)` }}
              />

              <div className="relative p-6">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 border transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${it.color}14`,
                    borderColor: `${it.color}30`,
                    boxShadow: `0 0 0 0 ${it.color}00`,
                  }}
                >
                  <Image src={it.icon} alt={it.titulo} width={28} height={28} className="object-contain" />
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-tight">
                  {it.titulo}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {it.desc}
                </p>

                <div
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 group-hover:gap-3"
                  style={{ color: it.color }}
                >
                  Ver más
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
