const valores = [
  {
    titulo: "Calidad",
    icon: "⚡",
    color: "#38bdf8",
    desc: "Garantizamos que nuestros servicios y productos cumplan con los más altos estándares para cada proyecto.",
  },
  {
    titulo: "Comunicación",
    icon: "🤝",
    color: "#a78bfa",
    bullets: ["Capacidad de reacción", "Honestidad", "Trabajo en equipo", "Empatía", "Creatividad"],
  },
  {
    titulo: "Innovación",
    icon: "🚀",
    color: "#34d399",
    desc: "Formamos a nuestro equipo continuamente para mantenernos vigentes en procesos, sistemas y servicios.",
  },
];

export default function QuienesSomos() {
  return (
    <section
      id="nosotros"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0b1622 0%, #0d1f2d 55%, #071318 100%)" }}
    >
      {/* Accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.2) 40%, rgba(56,189,248,0.2) 60%, transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.1) 40%, rgba(56,189,248,0.1) 60%, transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-sky-300/20 bg-white/5 backdrop-blur">
            <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sm font-semibold text-slate-200 uppercase tracking-widest">
              Nuestra empresa
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            ¿Quiénes somos?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Empresa 100% mexicana nacida en Tijuana con pasión por la tecnología y el servicio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Historia */}
          <div
            className="rounded-2xl border border-white/8 p-8"
            style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-400/25 bg-sky-400/8 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-sky-300">EGMR GROUP · Tijuana, B.C.</span>
            </div>

            <h3 className="text-2xl font-black text-white mb-4">Nuestra historia</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              EGMR Soluciones Tecnológicas es una empresa 100% mexicana que nació en 2020 en Tijuana,
              Baja California. Fundada por emprendedores apasionados por la tecnología, iniciamos con un
              enfoque claro: brindar servicios de alta calidad en cableado estructurado, soporte técnico
              e instalación y mantenimiento de equipos de vigilancia.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-xl border border-white/8 p-5"
                style={{ background: "rgba(56,189,248,0.06)" }}
              >
                <div className="text-sky-400 font-black text-xl mb-1">Misión</div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Asegurar que cada servicio cumpla con las necesidades y calidad requerida, brindando seguridad de estar con los mejores.
                </p>
              </div>
              <div
                className="rounded-xl border border-white/8 p-5"
                style={{ background: "rgba(56,189,248,0.06)" }}
              >
                <div className="text-sky-400 font-black text-xl mb-1">Visión</div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Convertirnos en el equipo mejor actualizado en seguridad y telecomunicaciones de la región.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/8 pt-6">
              {[
                { num: "2020", label: "Fundación" },
                { num: "+100", label: "Clientes" },
                { num: "24/7", label: "Soporte" },
              ].map((s) => (
                <div key={s.num} className="text-center">
                  <div className="text-2xl font-black text-white">{s.num}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Valores */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-black text-white mb-2">Nuestros valores</h3>
            {valores.map((v) => (
              <div
                key={v.titulo}
                className="rounded-2xl border border-white/8 p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${v.color}18`, border: `1px solid ${v.color}30` }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1" style={{ color: v.color }}>{v.titulo}</h4>
                    {v.desc && <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>}
                    {v.bullets && (
                      <ul className="text-sm text-slate-400 space-y-1 mt-1">
                        {v.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2">
                            <span style={{ color: v.color, fontSize: 10 }}>●</span> {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
