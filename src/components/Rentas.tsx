import Image from "next/image";

export default function Rentas() {
  const whatsappNumber = "526645601401";

  const rentas = [
    {
      titulo: "Impresoras",
      desc: "Renta para oficina con soporte y acompañamiento.",
      icon: "/icons/impresoras.png",
    },
  ];

  function waLink(servicio: string) {
    const msg = encodeURIComponent(
      `Hola, me gustaría solicitar información y disponibilidad sobre renta de: *${servicio}*.\n\nSoy:\nTeléfono:\nCorreo (opcional):\nDetalles:`
    );
    return `https://wa.me/${whatsappNumber}?text=${msg}`;
  }

  return (
    <section id="renta" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-10 shadow-sm"
          style={{
            background:
              "radial-gradient(700px 350px at 15% 20%, rgba(123,183,216,.25), transparent 55%)," +
              "radial-gradient(700px 350px at 85% 40%, rgba(31,107,134,.18), transparent 55%)," +
              "linear-gradient(135deg, rgba(15,45,58,.05), rgba(255,255,255,1))",
          }}
        >
          {/* decor */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-[color:var(--egmr-sky)]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-[320px] h-[320px] rounded-full bg-[color:var(--egmr-teal)]/10 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
              Renta
            </h2>
            <p className="text-slate-600 mb-8">
              Equipos para oficina y más. Pregunta por disponibilidad.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rentas.map((r, idx) => (
                <div
                  key={idx}
                  className={[
                    "group rounded-3xl border border-slate-200 bg-white p-8 transition",
                    "hover:-translate-y-0.5 hover:shadow-lg",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 border border-slate-200 overflow-hidden">
                      <Image
                        src={r.icon}
                        alt={r.titulo}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {r.titulo}
                      </h3>
                      <p className="text-slate-700">{r.desc}</p>

                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <a
                          href={waLink(r.titulo)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-xl font-semibold px-4 py-2 bg-[color:var(--egmr-ink)] text-white hover:brightness-110 transition"
                        >
                          Solicitar por WhatsApp
                        </a>

                        <a
                          href="#contacto"
                          className="inline-flex items-center justify-center rounded-xl font-semibold px-4 py-2 border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
                        >
                          Ver contacto
                        </a>
                      </div>

                      <div className="mt-4 text-sm font-semibold text-[color:var(--egmr-teal)]">
                        Respuesta rápida <span className="inline-block transition group-hover:translate-x-0.5">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* mini note */}
            <div className="mt-8 text-xs text-slate-500">
              *La disponibilidad puede variar por temporada. Te confirmamos por WhatsApp.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}