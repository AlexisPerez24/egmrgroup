import Image from "next/image";
import Link from "next/link";

export default function OtrosServicios() {
  const items = [
    {
      key: "cableado",
      titulo: "Instalación de cableado estructurado",
      desc: "Infraestructura de red organizada y lista para crecer.",
      icon: "/icons/cableado.png",
    },
    {
      key: "paneles-solares",
      titulo: "Paneles solares",
      desc: "Soluciones energéticas para eficiencia y ahorro.",
      icon: "/icons/paneles-solares.png",
    },
    {
      key: "incendios",
      titulo: "Sistemas de incendios",
      desc: "Prevención, instalación y soporte de sistemas de seguridad.",
      icon: "/icons/incendios.png",
    },
    {
      key: "papeleria",
      titulo: "Papelería y equipo de oficina",
      desc: "Todo lo necesario para tu oficina, desde insumos hasta equipos.",
      icon: "/icons/papeleria.png", // Asegúrate de tener este ícono en tu proyecto
    },
  ];

  return (
    <section id="otros" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Otros servicios
          </h2>
          <p className="text-slate-600 mt-2">
            Complementamos tu proyecto con soluciones adicionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <Link
              key={it.key}
              href={`/otros/${it.key}`}
              className="group block rounded-3xl border bg-white p-6 sm:p-8 shadow-sm border-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-50 border border-slate-200 overflow-hidden shrink-0">
                  <Image
                    src={it.icon}
                    alt={it.titulo}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {it.titulo}
                  </h3>
                  <p className="text-slate-700 mt-3 leading-relaxed">
                    {it.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 flex justify-end">
                <span className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[color:var(--egmr-teal)]">
                  Ver más
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}