"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect, useRef } from "react";
import Navbar from "../../../../components/Navbar";
import WhatsappFloat from "../../../../components/WhatsappFloat";
import DedicatedContacto from "../../../../components/DedicatedContacto";
import Footer from "../../../../components/Footer";

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

function useParticleCanvas(ref: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [
      "rgba(168,85,247,",
      "rgba(192,132,252,",
      "rgba(216,180,254,",
      "rgba(255,255,255,",
    ];

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.15,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let raf: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
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

    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", handleResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", handleResize); };
  }, [ref]);
}

export default function DedicatedDetalleClient({
  service,
  services,
}: {
  service: Service;
  services: Service[];
}) {
  const heroCanvasRef = useRef<HTMLCanvasElement>(null);
  const contentCanvasRef = useRef<HTMLCanvasElement>(null);
  const whatsappNumber = "526645601401";

  useParticleCanvas(heroCanvasRef);
  useParticleCanvas(contentCanvasRef);

  const [form, setForm] = useState<FormState>({
    nombre: "", telefono: "", correo: "", mensaje: "",
  });

  const otherServices = useMemo(
    () => services.filter((item) => item.key !== service.key),
    [service.key, services]
  );

  function buildWhatsappMessage() {
    const lines = [
      "📌 *Solicitud de Cotización - dEdicaTEd Services*",
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
    window.open(`https://wa.me/${whatsappNumber}?text=${buildWhatsappMessage()}`, "_blank");
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <WhatsappFloat />

      {/* ══ HERO ══ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0d0a1a 0%, #1a0a2e 55%, #0d0a1a 100%)",
          minHeight: "55vh",
        }}
      >
        <canvas
          ref={heroCanvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: 0.7 }}
        />

        {/* Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 text-white">
          <Link
            href="/divisiones/dedicated-services#servicios"
            className="inline-flex items-center gap-2 text-sm transition hover:text-white"
            style={{ color: "rgba(216,180,254,0.75)" }}
          >
            ← Volver a Dedicated Services
          </Link>

          <div className="mt-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center border backdrop-blur shadow-lg flex-shrink-0"
              style={{ borderColor: "rgba(168,85,247,0.35)", background: "rgba(168,85,247,0.15)" }}
            >
              <Image src={service.icon} alt={service.titulo} width={48} height={48} className="object-contain" />
            </div>

            <div className="flex-1">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur mb-4"
                style={{ borderColor: "rgba(168,85,247,0.35)", background: "rgba(168,85,247,0.15)" }}
              >
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-widest text-purple-200">
                  {service.badge}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 leading-tight text-white">
                {service.titulo}
              </h1>

              <p className="leading-relaxed text-lg max-w-2xl" style={{ color: "rgba(216,180,254,0.8)" }}>
                {service.descripcion}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTENIDO ══ */}
      <section
        className="relative overflow-hidden py-20"
        style={{
          background: "linear-gradient(160deg, #0d0a1a 0%, #1a0a2e 55%, #0d0a1a 100%)",
        }}
      >
        <canvas
          ref={contentCanvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: 0.7 }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-8">
          {/* Información */}
          <div
            className="rounded-3xl border bg-white/10 backdrop-blur-sm p-10 shadow-lg"
            style={{ borderColor: "rgba(168,85,247,0.3)" }}
          >
            <h2 className="text-3xl font-black text-white mb-6">¿Qué incluye este servicio?</h2>

            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(216,180,254,0.8)" }}>
              {service.resumen}
            </p>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Beneficios principales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.bullets.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-2xl border transition hover:bg-white/15"
                    style={{ background: "rgba(168,85,247,0.1)", borderColor: "rgba(168,85,247,0.25)" }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "#a855f7" }}
                    >
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="font-medium" style={{ color: "rgba(233,213,255,0.9)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t" style={{ borderColor: "rgba(168,85,247,0.2)" }}>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Ideal para</h3>
              <p className="leading-relaxed text-lg" style={{ color: "rgba(216,180,254,0.8)" }}>
                Empresas, oficinas y negocios que necesitan conectividad dedicada de alta velocidad,
                sin interrupciones y con soporte técnico especializado.
              </p>
            </div>
          </div>

          {/* Cotización */}
          <div
            className="rounded-3xl border bg-white/10 backdrop-blur-sm p-10 shadow-lg"
            style={{ borderColor: "rgba(168,85,247,0.3)" }}
          >
            <h2 className="text-3xl font-black text-white mb-2">Solicitar Cotización</h2>
            <p className="mb-8" style={{ color: "rgba(216,180,254,0.65)" }}>
              Servicio: <span className="font-bold text-white">{service.titulo}</span>
              {" "}•{" "}
              <span className="font-semibold" style={{ color: "rgba(216,180,254,0.85)" }}>{service.badge}</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold mb-2 text-white uppercase tracking-wide">Nombre</label>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-purple-400"
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-white uppercase tracking-wide">Teléfono</label>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-purple-400"
                    placeholder="WhatsApp / teléfono"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-white uppercase tracking-wide">Correo (opcional)</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-purple-400"
                  placeholder="tucorreo@email.com"
                  value={form.correo}
                  onChange={(e) => setForm({ ...form, correo: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-white uppercase tracking-wide">Detalles</label>
                <textarea
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 min-h-[140px] outline-none transition focus:ring-2 focus:ring-purple-400"
                  placeholder={`Ej: necesito información sobre ${service.titulo.toLowerCase()}, velocidad requerida, ubicación...`}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-xl font-bold px-6 py-4 text-white hover:brightness-110 transition uppercase tracking-wide text-lg"
                style={{ background: "#a855f7" }}
              >
                Enviar por WhatsApp
              </button>

              <p className="text-xs text-center" style={{ color: "rgba(216,180,254,0.5)" }}>
                Esta cotización identifica automáticamente el servicio de{" "}
                <span className="font-semibold">{service.titulo}</span>
              </p>
            </form>
          </div>

          {/* Otros servicios */}
          {otherServices.length > 0 && (
            <div
              className="rounded-3xl border bg-white/10 backdrop-blur-sm p-10 shadow-lg"
              style={{ borderColor: "rgba(168,85,247,0.3)" }}
            >
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-wide">Otros servicios</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherServices.map((item) => (
                  <Link
                    key={item.key}
                    href={`/divisiones/dedicated-services/${item.key}`}
                    className="rounded-2xl border-2 px-6 py-4 text-white font-bold text-center uppercase tracking-wide transition hover:bg-purple-500/20"
                    style={{ borderColor: "#a855f7" }}
                  >
                    {item.titulo}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <DedicatedContacto />
      <Footer />
    </main>
  );
}
