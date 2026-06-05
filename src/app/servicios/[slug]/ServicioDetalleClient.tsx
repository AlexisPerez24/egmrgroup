"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect, useRef } from "react";

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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const whatsappNumber = "526645601401";

  const [form, setForm] = useState<FormState>({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  // Canvas particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }[] = [];

    const colors = [
      "rgba(125,211,252,",
      "rgba(56,189,248,",
      "rgba(186,230,253,",
      "rgba(255,255,255,",
    ];

    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let raf: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ")";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {/* Canvas de partículas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ opacity: 0.6, zIndex: 0 }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden z-10">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #0f2d3a 0%, #1f6b86 50%, #0f2d3a 100%)",
          }}
        />

        <div className="absolute top-0 right-0 w-96 h-96 bg-[color:var(--egmr-teal)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24 text-white">
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
          >
            ← Volver a servicios
          </Link>

          <div className="mt-8 flex flex-col md:flex-row md:items-center gap-8">
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center border border-white/20 bg-white/10 backdrop-blur shadow-lg flex-shrink-0">
              <Image
                src={service.icon}
                alt={service.titulo}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur mb-4">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  {service.badge}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 leading-tight">
                {service.titulo}
              </h1>

              <p className="text-white/80 leading-relaxed text-lg max-w-2xl">
                {service.descripcion}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido - FONDO OSCURO */}
      <section
        className="relative z-10 py-20 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0b1622 0%, #0d1f2d 55%, #071318 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {/* Información principal */}
          <div className="rounded-3xl border bg-white/10 backdrop-blur-sm p-10 shadow-lg border-blue-300/30">
            <h2 className="text-3xl font-black text-white mb-6">
              ¿Qué incluye este servicio?
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {service.resumen}
            </p>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">
                Beneficios principales
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.bullets.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 border border-blue-300/30 hover:bg-white/15 transition"
                  >
                    <div className="w-6 h-6 rounded-full bg-[color:var(--egmr-teal)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-white/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                Ideal para
              </h3>

              <p className="text-white/80 leading-relaxed text-lg">
                Empresas, oficinas, negocios y espacios que buscan soluciones
                tecnológicas confiables, soporte profesional y una implementación
                orientada a seguridad, conectividad y eficiencia.
              </p>
            </div>
          </div>

          {/* Cotización del servicio */}
          <div className="rounded-3xl border bg-white/10 backdrop-blur-sm p-10 shadow-lg border-blue-300/30">
            <h2 className="text-3xl font-black text-white mb-2">
              Solicitar Cotización
            </h2>

            <p className="text-white/70 mb-8">
              Servicio:{" "}
              <span className="font-bold text-white">
                {service.titulo}
              </span>{" "}
              • <span className="font-semibold text-white/80">{service.badge}</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold mb-2 text-white uppercase tracking-wide">
                    Nombre
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[color:var(--egmr-teal)]"
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={(e) =>
                      setForm({ ...form, nombre: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-white uppercase tracking-wide">
                    Teléfono
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[color:var(--egmr-teal)]"
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
                <label className="block text-sm font-bold mb-2 text-white uppercase tracking-wide">
                  Correo (opcional)
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[color:var(--egmr-teal)]"
                  placeholder="tucorreo@email.com"
                  value={form.correo}
                  onChange={(e) =>
                    setForm({ ...form, correo: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-white uppercase tracking-wide">
                  Detalles
                </label>
                <textarea
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 min-h-[140px] outline-none transition focus:ring-2 focus:ring-[color:var(--egmr-teal)]"
                  placeholder={`Ej: necesito información sobre ${service.titulo.toLowerCase()}, instalación, cobertura, tiempos...`}
                  value={form.mensaje}
                  onChange={(e) =>
                    setForm({ ...form, mensaje: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-xl font-bold px-6 py-4 bg-[color:var(--egmr-teal)] text-white hover:brightness-110 transition uppercase tracking-wide text-lg"
              >
                Enviar por WhatsApp
              </button>

              <p className="text-xs text-white/60 text-center">
                Esta cotización ya identifica automáticamente el servicio de{" "}
                <span className="font-semibold">{service.titulo}</span>
              </p>
            </form>
          </div>

          {/* Otros servicios */}
          <div className="rounded-3xl border bg-white/10 backdrop-blur-sm p-10 shadow-lg border-blue-300/30">
            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-wide">
              Otros servicios
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherServices.map((item) => (
                <Link
                  key={item.key}
                  href={`/servicios/${item.key}`}
                  className="rounded-2xl border-2 border-[color:var(--egmr-teal)] px-6 py-4 text-white hover:bg-[color:var(--egmr-teal)]/20 transition font-bold text-center uppercase tracking-wide"
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