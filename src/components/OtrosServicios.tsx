import Image from "next/image";

export default function OtrosServicios() {
  const whatsappNumber = "526645601401";

  const items = [
    {
      titulo: "Instalación de cableado estructurado",
      desc: "Infraestructura de red organizada y lista para crecer.",
      icon: "/icons/cableado.png",
    },
    {
      titulo: "Paneles solares",
      desc: "Soluciones energéticas para eficiencia y ahorro.",
      icon: "/icons/paneles-solares.png",
    },
    {
      titulo: "Sistemas de incendios",
      desc: "Prevención, instalación y soporte de sistemas de seguridad.",
      icon: "/icons/incendios.png",
    },
  ];

  function waLink(servicio: string) {
    const msg = encodeURIComponent(
      `Hola, me gustaría solicitar información y disponibilidad sobre: *${servicio}*.\n\nSoy:\nTeléfono:\nCorreo (opcional):\nDetalles:`
    );
    return `https://wa.me/${whatsappNumber}?text=${msg}`;
  }

  return (
    <section id="otros" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Otros servicios
          </h2>
          <p className="text-slate-600 mt-2">
            Complementamos tu proyecto con soluciones adicionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div
              key={idx}
              className={[
                "group rounded-3xl border bg-white p-8 shadow-sm border-slate-200 transition",
                "hover:-translate-y-0.5 hover:shadow-lg",
              ].join(" ")}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 border border-slate-200 overflow-hidden">
                  <Image
                    src={it.icon}
                    alt={it.titulo}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {it.titulo}
                  </h3>
                  <p className="text-slate-700 mt-2">{it.desc}</p>

                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href={waLink(it.titulo)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl font-semibold px-4 py-2 bg-[color:var(--egmr-ink)] text-white hover:brightness-110 transition"
                    >
                      Preguntar por WhatsApp
                    </a>

                    <a
                      href="#contacto"
                      className="inline-flex items-center justify-center rounded-xl font-semibold px-4 py-2 border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
                    >
                      Ver contacto
                    </a>
                  </div>

                  <div className="mt-4 text-sm font-semibold text-[color:var(--egmr-teal)]">
                    Preguntar disponibilidad{" "}
                    <span className="inline-block transition group-hover:translate-x-0.5">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-xs text-slate-500">
          *Si ya tienes un proyecto, cuéntanos los detalles y te recomendamos la mejor opción.
        </div>
      </div>
    </section>
  );
}