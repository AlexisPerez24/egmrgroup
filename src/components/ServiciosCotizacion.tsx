"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ServiciosCotizacion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  const services = [
    {
      key: "camaras",
      titulo: "Cámaras y Videoporteros",
      badge: "Videovigilancia + instalación",
      resumen:
        "Vigilancia de alta definición para interiores y exteriores. Instalación profesional y mantenimiento preventivo.",
      features: ["Alta definición", "Monitoreo remoto", "Grabación continua"],
      icono: "📹",
    },
    {
      key: "acceso",
      titulo: "Control de Acceso",
      badge: "Seguridad por áreas",
      resumen:
        "Autoriza, restringe y protege accesos a tu negocio. Tecnología confiable y escalable según tus necesidades.",
      features: ["Control por zonas", "Alertas inteligentes", "Historial de accesos"],
      icono: "🔐",
    },
    {
      key: "soporte",
      titulo: "Soporte y Mantenimiento",
      badge: "Remoto + visitas programadas",
      resumen:
        "Reparación y mantenimiento de equipos de cómputo. Equipo técnico disponible para resolver problemas rápidamente.",
      features: ["Soporte 24/7", "Visitas técnicas", "Mantenimiento preventivo"],
      icono: "🔧",
    },
  ];

  return (
    <section
      id="servicios"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0b1622 0%, #0d1f2d 55%, #071318 100%)",
      }}
    >
      {/* Canvas animado de fondo */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-slate-200/30 bg-white/10 backdrop-blur">
            <div className="w-2 h-2 rounded-full bg-[color:var(--egmr-teal)]" />
            <span className="text-sm font-semibold text-slate-200 uppercase tracking-widest">
              Nuestros servicios
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-4">
            Servicios principales
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Soluciones especializadas en seguridad, acceso y soporte técnico
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link
              key={s.key}
              href={`/servicios/${s.key}`}
              className="group relative"
            >
              {/* Card Container */}
              <div className="h-full rounded-2xl border border-blue-300/30 bg-white/10 backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300/60 hover:bg-white/15">
                {/* Icon Container */}
                <div className="mb-8">
                  <div className="w-24 h-24 rounded-2xl flex items-center justify-center border border-slate-200/30 bg-gradient-to-br from-[color:var(--egmr-teal)]/30 to-blue-600/20 shadow-lg group-hover:shadow-2xl transition-all text-5xl">
                    {s.icono}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-3 leading-tight uppercase tracking-wide">
                  {s.titulo}
                </h3>

                {/* Badge */}
                <div className="mb-4">
                  <span className="inline-flex rounded-full border border-blue-300/40 bg-white/10 px-4 py-1.5 text-xs font-bold text-slate-200 backdrop-blur uppercase tracking-widest">
                    {s.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed mb-6 flex-grow text-sm">
                  {s.resumen}
                </p>

                {/* Features */}
                <div className="mb-8 space-y-2 pb-6 border-b border-white/10">
                  {s.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                      <span className="text-[color:var(--egmr-teal)] font-bold">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[color:var(--egmr-teal)] font-black group-hover:gap-3 transition-all uppercase tracking-widest">
                  <span>Ver más</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}