"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type ServiceKey = "internet" | "camaras" | "acceso" | "soporte";

type Service = {
  key: ServiceKey;
  titulo: string;
  resumen: string;
  descripcion: string;
  bullets: string[];
  badge: string;
  icon: string; // PNG en /public/icons
};

type FormState = {
  nombre: string;
  telefono: string;
  correo: string;
  mensaje: string;
};

export default function ServiciosCotizacion() {
  const services: Service[] = useMemo(
    () => [
      {
        key: "internet",
        titulo: "Internet",
        badge: "Conexión dedicada / simétrica",
        resumen: "Internet de alta velocidad para optimizar operaciones y productividad.",
        descripcion:
          "Contrata con nosotros Internet de alta velocidad. Conexión dedicada o simétrica para optimizar tus operaciones, aumentar tu productividad y mejorar la experiencia de navegación.",
        bullets: ["Alta velocidad", "Dedicado o simétrico", "Mejora productividad y navegación"],
        icon: "/icons/internet.png",
      },
      {
        key: "camaras",
        titulo: "Cámaras",
        badge: "Videovigilancia + instalación",
        resumen: "Monitoreo y protección de instalaciones con sistemas de vigilancia.",
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
          "Autorice, restrinja y proteja accesos a empleados, edificio y áreas clave de su empresa o negocio: inventarios, stock, efectivo, equipo o información.",
        bullets: ["Restricción por áreas", "Protección de información", "Control de accesos"],
        icon: "/icons/control-acceso.png",
      },
      {
        key: "soporte",
        titulo: "Soporte y mantenimiento",
        badge: "Remoto + visitas programadas",
        resumen: "Soporte técnico dedicado para resolver problemas con mayor velocidad.",
        descripcion:
          "Contar con un apoyo de soporte técnico dedicado a su compañía ayuda a resolver los problemas con mayor velocidad, ya sea vía remota o visitas programadas.",
        bullets: ["Soporte remoto", "Visitas programadas", "Respuesta rápida"],
        icon: "/icons/soporte.png",
      },
    ],
    []
  );

  const [selected, setSelected] = useState<ServiceKey>("internet");
  const active = services.find((s) => s.key === selected)!;

  const [form, setForm] = useState<FormState>({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  const whatsappNumber = "526645601401";

  function buildWhatsappMessage() {
    const lines = [
      "📌 *Solicitud de Cotización - EGMR GROUP*",
      "",
      `🧩 *Servicio:* ${active.titulo}`,
      `🏷️ *Tipo:* ${active.badge}`,
      "",
      `👤 *Nombre:* ${form.nombre}`,
      `📞 *Teléfono:* ${form.telefono}`,
      form.correo ? `📧 *Correo:* ${form.correo}` : "",
      "",
      "📝 *Detalles:*",
      form.mensaje || "N/A",
    ].filter(Boolean);

    return encodeURIComponent(lines.join("\n"));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = buildWhatsappMessage();
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  }

  return (
    <section id="servicios" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Nuestros servicios
          </h2>
          <p className="text-slate-600 mt-2">
            Selecciona un servicio. Verás su información y podrás cotizarlo al instante.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => {
            const isActive = s.key === selected;

            return (
              <button
                key={s.key}
                type="button"
                onClick={() => setSelected(s.key)}
                className={[
                  "group text-left rounded-3xl border bg-white p-7 transition",
                  "hover:-translate-y-0.5 hover:shadow-lg",
                  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/10",
                  isActive
                    ? "border-slate-900/25 ring-2 ring-[color:var(--egmr-teal)]/15 shadow-md"
                    : "border-slate-200",
                ].join(" ")}
              >
                {/* mini glow */}
                <div
                  className={[
                    "pointer-events-none absolute opacity-0 group-hover:opacity-100 transition",
                    "inset-0 rounded-3xl",
                  ].join(" ")}
                />

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
                      Ver detalles <span className="transition group-hover:translate-x-0.5">→</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detalle + Cotización */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Detalle */}
          <div className="rounded-3xl border bg-white p-8 shadow-sm border-slate-200">
            <div className="flex items-start justify-between gap-4">
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
                  <h3 className="text-2xl font-bold text-slate-900">{active.titulo}</h3>

                  <div className="mt-3 inline-flex items-center gap-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {active.badge}
                    </span>
                  </div>

                  <p className="text-slate-700 mt-4 leading-relaxed">
                    {active.descripcion}
                  </p>
                </div>
              </div>

              <a
                href="#cotizacion"
                className="shrink-0 inline-flex items-center justify-center rounded-xl font-semibold px-4 py-2 bg-[color:var(--egmr-ink)] text-white hover:brightness-110 transition"
              >
                Cotizar
              </a>
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
          </div>

          {/* Cotización */}
          <div
            id="cotizacion"
            className="rounded-3xl border bg-white p-8 shadow-sm border-slate-200"
          >
            <h3 className="text-2xl font-bold text-slate-900">Cotización</h3>
            <p className="text-slate-600 mt-1 mb-6">
              Servicio: <span className="font-semibold text-slate-900">{active.titulo}</span>
              {"  "}•{" "}
              <span className="text-slate-700">{active.badge}</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-slate-800">
                    Nombre
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none transition focus:ring-4 focus:ring-black/10"
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-slate-800">
                    Teléfono
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none transition focus:ring-4 focus:ring-black/10"
                    placeholder="WhatsApp / teléfono"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-slate-800">
                  Correo (opcional)
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none transition focus:ring-4 focus:ring-black/10"
                  placeholder="tucorreo@email.com"
                  value={form.correo}
                  onChange={(e) => setForm({ ...form, correo: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-slate-800">
                  Detalles
                </label>
                <textarea
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 min-h-[120px] outline-none transition focus:ring-4 focus:ring-black/10"
                  placeholder="Ej: necesito 6 cámaras en oficina, instalación y acceso remoto..."
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-xl font-semibold px-4 py-3 bg-[color:var(--egmr-ink)] text-white hover:brightness-110 transition"
              >
                Enviar por WhatsApp
              </button>

              <p className="text-xs text-slate-500">
                El mensaje incluye el servicio para identificar tu solicitud.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}