import Image from "next/image";
import Link from "next/link";

export default function ServiciosCotizacion() {
  const services = [
    {
      key: "internet",
      titulo: "Internet",
      badge: "Conexión dedicada / simétrica",
      resumen:
        "Internet de alta velocidad para optimizar operaciones y productividad.",
      icon: "/icons/internet.png",
    },
    {
      key: "camaras",
      titulo: "Cámaras",
      badge: "Videovigilancia + instalación",
      resumen:
        "Monitoreo y protección de instalaciones con sistemas de vigilancia.",
      icon: "/icons/camaras.png",
    },
    {
      key: "acceso",
      titulo: "Control de acceso",
      badge: "Seguridad por áreas",
      resumen: "Autoriza, restringe y protege accesos a tu negocio.",
      icon: "/icons/control-acceso.png",
    },
    {
      key: "soporte",
      titulo: "Soporte y mantenimiento",
      badge: "Remoto + visitas programadas",
      resumen:
        "Soporte técnico dedicado para resolver problemas con mayor velocidad.",
      icon: "/icons/soporte.png",
    },
  ];

  return (
    <section id="servicios" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Nuestros servicios
          </h2>
          <p className="text-slate-600 mt-2">
            Explora nuestros servicios para ver toda la información y cotizar
            directamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link
              key={s.key}
              href={`/servicios/${s.key}`}
              className="group block rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-200 bg-slate-50 overflow-hidden shrink-0">
                  <Image
                    src={s.icon}
                    alt={s.titulo}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                    {s.titulo}
                  </h3>

                  <div className="mt-3">
                    <span className="inline-flex max-w-full rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs sm:text-sm font-semibold text-slate-700">
                      {s.badge}
                    </span>
                  </div>

                  <p className="text-slate-700 mt-4 text-base sm:text-lg leading-relaxed max-w-[30rem]">
                    {s.resumen}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 flex justify-end">
                <span className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[color:var(--egmr-teal)]">
                  Ver más
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}