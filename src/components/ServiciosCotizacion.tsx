"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type ServiceKey = "internet" | "camaras" | "acceso" | "soporte";

type Service = {
  key: ServiceKey;
  titulo: string;
  resumen: string;
  descripcion: string;
  bullets: string[];
  badge: string;
  icon: string;
};

export default function ServiciosCotizacion() {
  const services: Service[] = useMemo(
    () => [
      {
        key: "internet",
        titulo: "Internet",
        badge: "Conexión dedicada / simétrica",
        resumen:
          "Internet de alta velocidad para optimizar operaciones y productividad.",
        descripcion:
          "Contrata con nosotros Internet de alta velocidad. Conexión dedicada o simétrica para optimizar tus operaciones, aumentar tu productividad y mejorar la experiencia de navegación.",
        bullets: [
          "Alta velocidad",
          "Dedicado o simétrico",
          "Mejora productividad y navegación",
        ],
        icon: "/icons/internet.png",
      },
      {
        key: "camaras",
        titulo: "Cámaras",
        badge: "Videovigilancia + instalación",
        resumen:
          "Monitoreo y protección de instalaciones con sistemas de vigilancia.",
        descripcion:
          "Monitorea tus instalaciones y protege tus activos. Servicio de instalación y mantenimiento de sistemas de vigilancia.",
        bullets: ["Instalación", "Mantenimiento", "Protección de activos"],
        icon: "/icons/camaras.png",
      },
      {
        key: "acceso",
        titulo: "Control de acceso",
        badge: "Seguridad por áreas",
        resumen: "Autoriza, restringe y protege accesos a tu negocio.",
        descripcion:
          "Autoriza, restringe y protege accesos a empleados, edificio y áreas clave de tu empresa o negocio: inventarios, stock, efectivo, equipo o información.",
        bullets: [
          "Restricción por áreas",
          "Protección de información",
          "Control de accesos",
        ],
        icon: "/icons/control-acceso.png",
      },
      {
        key: "soporte",
        titulo: "Soporte y mantenimiento",
        badge: "Remoto + visitas programadas",
        resumen:
          "Soporte técnico dedicado para resolver problemas con mayor velocidad.",
        descripcion:
          "Contar con un apoyo de soporte técnico dedicado a tu compañía ayuda a resolver los problemas con mayor velocidad, ya sea vía remota o visitas programadas.",
        bullets: ["Soporte remoto", "Visitas programadas", "Respuesta rápida"],
        icon: "/icons/soporte.png",
      },
    ],
    []
  );

  const [selected, setSelected] = useState<ServiceKey>("internet");
  const active = services.find((s) => s.key === selected)!;

  return (
    <section id="servicios" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Nuestros servicios
          </h2>
          <p className="text-slate-600 mt-2">
            Explora nuestros servicios y entra a la página individual para ver
            toda la información y cotizar directamente.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => {
            const isActive = s.key === selected;

            return (
              <div
                key={s.key}
                className={[
                  "group rounded-3xl border bg-white p-7 transition",
                  "hover:-translate-y-0.5 hover:shadow-lg",
                  isActive
                    ? "border-slate-900/25 ring-2 ring-[color:var(--egmr-teal)]/15 shadow-md"
                    : "border-slate-200",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => setSelected(s.key)}
                  className="w-full text-left"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={[
                        "w-12 h-12 rounded-2xl flex items-center justify-center border overflow-hidden",
                        "bg-slate-50 border-slate-200",
                        isActive ? "shadow-sm" : "",
                      ].join(" ")}
                    >
                      <Image
                        src={s.icon}
                        alt={`Icono ${s.titulo}`}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                            {s.titulo}
                          </h3>
                          <p className="text-slate-700 mt-2">{s.resumen}</p>
                        </div>

                        <span
                          className={[
                            "shrink-0 text-xs font-semibold px-3 py-1 rounded-full border",
                            isActive
                              ? "bg-[color:var(--egmr-teal)]/10 text-[color:var(--egmr-teal)] border-[color:var(--egmr-teal)]/20"
                              : "bg-slate-100 text-slate-700 border-slate-200",
                          ].join(" ")}
                        >
                          {s.badge}
                        </span>
                      </div>

                      <div
                        className={[
                          "mt-5 inline-flex items-center gap-2 text-sm font-semibold",
                          isActive
                            ? "text-[color:var(--egmr-teal)]"
                            : "text-[color:var(--egmr-teal)]/90",
                        ].join(" ")}
                      >
                        Ver resumen abajo
                        <span className="transition group-hover:translate-x-0.5">
                          ↓
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                <div className="mt-5 pt-5 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/servicios/${s.key}`}
                    className="inline-flex items-center justify-center rounded-xl font-semibold px-4 py-2 bg-[color:var(--egmr-ink)] text-white hover:brightness-110 transition"
                  >
                    Ver página completa
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSelected(s.key)}
                    className="inline-flex items-center justify-center rounded-xl font-semibold px-4 py-2 border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
                  >
                    Seleccionar aquí
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resumen del servicio seleccionado */}
        <div className="mt-10">
          <div className="rounded-3xl border bg-white p-8 shadow-sm border-slate-200">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border bg-slate-50 border-slate-200 overflow-hidden">
                  <Image
                    src={active.icon}
                    alt={`Icono ${active.titulo}`}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {active.titulo}
                  </h3>

                  <div className="mt-3 inline-flex items-center gap-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {active.badge}
                    </span>
                  </div>

                  <p className="text-slate-700 mt-4 leading-relaxed max-w-3xl">
                    {active.descripcion}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <Link
                  href={`/servicios/${active.key}`}
                  className="inline-flex items-center justify-center rounded-xl font-semibold px-5 py-3 bg-[color:var(--egmr-ink)] text-white hover:brightness-110 transition"
                >
                  Ver página completa
                </Link>

                <Link
                  href={`/servicios/${active.key}`}
                  className="inline-flex items-center justify-center rounded-xl font-semibold px-5 py-3 border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
                >
                  Cotizar este servicio
                </Link>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3">Incluye</h4>
              <ul className="space-y-2 text-slate-700">
                {active.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[color:var(--egmr-teal)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 text-xs text-slate-500">
              La cotización completa de este servicio se realiza en su página
              individual.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}