import Image from "next/image";

const PHONE = "526645601401";

function waLink(servicio: string) {
  const msg = encodeURIComponent(
    `Hola, me gustaría solicitar información y disponibilidad sobre renta de: *${servicio}*.\n\nNombre:\nTeléfono:\nDetalles:`
  );
  return `https://wa.me/${PHONE}?text=${msg}`;
}

const rentas = [
  {
    titulo: "Renta de Impresoras",
    desc: "Impresoras para oficina con mantenimiento, soporte técnico y consumibles incluidos. Sin preocupaciones, solo imprime.",
    icon: "/icons/impresoras.png",
    features: ["Mantenimiento incluido", "Consumibles bajo demanda", "Soporte técnico rápido"],
  },
];

export default function Rentas() {
  return (
    <section
      id="renta"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #060b14 0%, #0a1525 55%, #060b14 100%)" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.15) 40%, rgba(56,189,248,0.15) 60%, transparent)" }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-sky-300/20 bg-white/5 backdrop-blur">
            <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sm font-semibold text-slate-200 uppercase tracking-widest">Renta de equipos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">Renta</h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Equipos para oficina con soporte incluido. Pregunta por disponibilidad y planes.
          </p>
        </div>

        {/* Cards */}
        {rentas.map((r) => (
          <div
            key={r.titulo}
            className="rounded-2xl border border-white/8 p-8 sm:p-10"
            style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}
          >
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              {/* Icon */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-sky-400/20"
                style={{ background: "rgba(56,189,248,0.08)" }}
              >
                <Image src={r.icon} alt={r.titulo} width={44} height={44} className="object-contain" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-black text-white mb-2">{r.titulo}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{r.desc}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {r.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border"
                      style={{ background: "rgba(56,189,248,0.08)", borderColor: "rgba(56,189,248,0.25)", color: "#7dd3fc" }}
                    >
                      <span style={{ color: "#38bdf8" }}>✓</span> {f}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={waLink(r.titulo)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl font-bold px-6 py-3 text-white transition hover:brightness-110"
                    style={{ background: "linear-gradient(135deg, #128C7E, #25D366)" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Solicitar por WhatsApp
                  </a>
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center rounded-xl font-bold px-6 py-3 border transition hover:bg-white/10"
                    style={{ borderColor: "rgba(56,189,248,0.3)", color: "#7dd3fc" }}
                  >
                    Ver contacto
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs text-slate-600 border-t border-white/8 pt-5">
              * La disponibilidad puede variar por temporada. Te confirmamos por WhatsApp.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
