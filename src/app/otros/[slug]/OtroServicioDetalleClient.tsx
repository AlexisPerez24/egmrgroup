"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Service = {
  key: string;
  titulo: string;
  badge: string;
  resumen: string;
  descripcion: string;
  bullets: string[];
  icon: string;
  catalogLink?: string; // ¡NUEVO! La propiedad es opcional con '?'
};

type FormState = {
  nombre: string;
  telefono: string;
  correo: string;
  mensaje: string;
};

export default function OtroServicioDetalleClient({
  service,
  services,
}: {
  service: Service;
  services: Service[];
}) {
  const whatsappNumber = "526645601401";

  const [form, setForm] = useState<FormState>({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  const otherServices = useMemo(
    () => services.filter((item) => item.key !== service.key),
    [service.key, services]
  );

  function buildWhatsappMessage() {
    const lines = [
      "📌 *Solicitud de Información - EGMR GROUP*",
      "",
      `🧩 *Servicio:* ${service.titulo}`,
      `🏷️ *Tipo:* ${service.badge}`,
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
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 420px at 20% 20%, rgba(123,183,216,.35), transparent 60%)," +
              "radial-gradient(800px 420px at 80% 30%, rgba(31,107,134,.28), transparent 60%)," +
              "linear-gradient(135deg, var(--egmr-ink), var(--egmr-navy))",
          }}
        />

        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-[color:var(--egmr-sky)]/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-white">
          <Link
            href="/#otros"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
          >
            ← Volver a otros servicios
          </Link>

          <div className="mt-8 flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/15 bg-white/10 overflow-hidden shrink-0 shadow-sm">
              <Image
                src={service.icon}
                alt={service.titulo}
                width={34}
                height={34}
                className="object-contain"
              />
            </div>

            <div className="min-w-0 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-xs sm:text-sm text-white/80 bg-white/5">
                {service.badge}
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                {service.titulo}
              </h1>

              <p className="text-white/75 mt-4 leading-relaxed text-sm sm:text-base md:text-lg max-w-3xl">
                {service.descripcion}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-12 sm:py-16 bg-[color:var(--egmr-bg)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
          {/* Bloque para el catálogo de Papelería, solo si el servicio es 'papeleria' */}
          {service.key === "papeleria" && service.catalogLink && (
            <div className="rounded-3xl border bg-white p-5 sm:p-8 shadow-sm border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Ver Catálogo de Productos
              </h2>
              <p className="text-slate-600 mt-2 mb-4 text-sm sm:text-base leading-relaxed">
                Explora nuestro amplio surtido de papelería y equipos de oficina.
              </p>
              <Link
                href={service.catalogLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl font-semibold px-4 py-3 bg-[color:var(--egmr-teal)] text-white hover:brightness-110 transition text-sm sm:text-base"
              >
                Abrir Catálogo
              </Link>
            </div>
          )}

          <div className="rounded-3xl border bg-white p-5 sm:p-8 shadow-sm border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              ¿Qué incluye este servicio?
            </h2>

            <p className="text-slate-700 mt-4 leading-relaxed text-sm sm:text-base">
              {service.resumen}
            </p>

            <div className="mt-8">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">
                Beneficios principales
              </h3>

              <ul className="space-y-3 text-slate-700">
                {service.bullets.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[color:var(--egmr-teal)] shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-5 sm:p-8 shadow-sm border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Solicita información
            </h2>

            <p className="text-slate-600 mt-2 mb-6 text-sm sm:text-base leading-relaxed">
              Servicio:{" "}
              <span className="font-semibold text-slate-900">
                {service.titulo}
              </span>{" "}
              • <span>{service.badge}</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-slate-800">
                    Nombre
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 outline-none transition focus:ring-4 focus:ring-black/10 text-sm sm:text-base"
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={(e) =>
                      setForm({ ...form, nombre: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-slate-800">
                    Teléfono
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 outline-none transition focus:ring-4 focus:ring-black/10 text-sm sm:text-base"
                    placeholder="WhatsApp / teléfono"
                    value={form.telefono}
                    onChange={(e) =>
                      setForm({ ...form, telefono: e.target.value })
                    }
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
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 outline-none transition focus:ring-4 focus:ring-black/10 text-sm sm:text-base"
                  placeholder="tucorreo@email.com"
                  value={form.correo}
                  onChange={(e) =>
                    setForm({ ...form, correo: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-slate-800">
                  Detalles
                </label>
                <textarea
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 min-h-[140px] outline-none transition focus:ring-4 focus:ring-black/10 text-sm sm:text-base"
                  placeholder={`Ej: necesito información sobre ${service.titulo.toLowerCase()}, instalación, tiempos, costos...`}
                  value={form.mensaje}
                  onChange={(e) =>
                    setForm({ ...form, mensaje: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-xl font-semibold px-4 py-3 bg-[color:var(--egmr-ink)] text-white hover:brightness-110 transition text-sm sm:text-base"
              >
                Enviar por WhatsApp
              </button>
            </form>
          </div>

          <div className="rounded-3xl border bg-white p-5 sm:p-8 shadow-sm border-slate-200">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Otros servicios
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {otherServices.map((item) => (
                <Link
                  key={item.key}
                  href={`/otros/${item.key}`}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-700 hover:bg-slate-50 transition text-sm sm:text-base"
                >
                  {item.titulo}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}