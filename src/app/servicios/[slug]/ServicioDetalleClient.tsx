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
};

type FormState = {
  nombre: string;
  telefono: string;
  correo: string;
  mensaje: string;
};

export default function ServicioDetalleClient({
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
      "📌 *Solicitud de Cotización - EGMR GROUP*",
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
      {/* Hero */}
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

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24 text-white">
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
          >
            ← Volver a servicios
          </Link>

          <div className="mt-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/15 bg-white/10 overflow-hidden">
              <Image
                src={service.icon}
                alt={service.titulo}
                width={36}
                height={36}
                className="object-contain"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-sm text-white/80 bg-white/5">
                {service.badge}
              </div>

              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
                {service.titulo}
              </h1>

              <p className="text-white/75 mt-4 max-w-3xl leading-relaxed text-lg">
                {service.descripcion}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 bg-[color:var(--egmr-bg)]">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          {/* Información principal */}
          <div className="rounded-3xl border bg-white p-8 shadow-sm border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              ¿Qué incluye este servicio?
            </h2>

            <p className="text-slate-700 mt-4 leading-relaxed">
              {service.resumen}
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Beneficios principales
              </h3>

              <ul className="space-y-3 text-slate-700">
                {service.bullets.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[color:var(--egmr-teal)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Ideal para
              </h3>

              <p className="text-slate-700 leading-relaxed">
                Empresas, oficinas, negocios y espacios que buscan soluciones
                tecnológicas confiables, soporte profesional y una implementación
                orientada a seguridad, conectividad y eficiencia.
              </p>
            </div>
          </div>

          {/* Cotización del servicio */}
          <div className="rounded-3xl border bg-white p-8 shadow-sm border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Cotización
            </h2>

            <p className="text-slate-600 mt-2 mb-6">
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
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none transition focus:ring-4 focus:ring-black/10"
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
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none transition focus:ring-4 focus:ring-black/10"
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
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none transition focus:ring-4 focus:ring-black/10"
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
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 min-h-[140px] outline-none transition focus:ring-4 focus:ring-black/10"
                  placeholder={`Ej: necesito información sobre ${service.titulo.toLowerCase()}, instalación, cobertura, tiempos...`}
                  value={form.mensaje}
                  onChange={(e) =>
                    setForm({ ...form, mensaje: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-xl font-semibold px-4 py-3 bg-[color:var(--egmr-ink)] text-white hover:brightness-110 transition"
              >
                Enviar por WhatsApp
              </button>

              <p className="text-xs text-slate-500">
                Esta cotización ya identifica automáticamente el servicio de{" "}
                {service.titulo}.
              </p>
            </form>
          </div>

          {/* Otros servicios - ahora abajo de cotización */}
          <div className="rounded-3xl border bg-white p-8 shadow-sm border-slate-200">
            <h3 className="text-xl font-bold text-slate-900">
              Otros servicios
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {otherServices.map((item) => (
                <Link
                  key={item.key}
                  href={`/servicios/${item.key}`}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-700 hover:bg-slate-50 transition"
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