"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const servicios = [
  {
    key: "internet-dedicado",
    icono: "🌐",
    titulo: "Internet Dedicado",
    badge: "Simétrico Empresarial",
    resumen: "Alta velocidad, conexión estable 24/7 y soporte especializado para tu empresa.",
    features: ["Velocidad simétrica garantizada", "Sin límite de datos", "SLA garantizado"],
  },
  {
    key: "soporte-red",
    icono: "🔧",
    titulo: "Soporte de Red",
    badge: "Empresarial",
    resumen: "Instalación, configuración y mantenimiento de redes para empresas.",
    features: ["Cableado estructurado", "WiFi empresarial", "VPN y seguridad"],
  },
];

export default function DedicatedServicios() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; color: string;
    }[] = [];

    const colors = [
      "rgba(168,85,247,",
      "rgba(192,132,252,",
      "rgba(216,180,254,",
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

    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="servicios"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0d0a1a 0%, #1a0a2e 55%, #0d0a1a 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none w-full h-full"
        style={{ opacity: 0.7 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-purple-300/30 bg-white/10 backdrop-blur">
            <div className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="text-sm font-semibold text-slate-200 uppercase tracking-widest">
              Nuestros servicios
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-4">
            Internet Dedicado
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Conectividad empresarial confiable y de alto rendimiento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {servicios.map((s) => (
            <Link key={s.key} href={`/divisiones/dedicated-services/${s.key}`} className="group relative">
              <div className="h-full rounded-2xl border border-purple-300/30 bg-white/10 backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-purple-300/60 hover:bg-white/15">
                <div className="mb-8">
                  <div className="w-24 h-24 rounded-2xl flex items-center justify-center border border-purple-200/30 bg-gradient-to-br from-purple-500/30 to-purple-800/20 shadow-lg text-5xl">
                    {s.icono}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white mb-3 leading-tight uppercase tracking-wide">
                  {s.titulo}
                </h3>

                <div className="mb-4">
                  <span className="inline-flex rounded-full border border-purple-300/40 bg-white/10 px-4 py-1.5 text-xs font-bold text-slate-200 backdrop-blur uppercase tracking-widest">
                    {s.badge}
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6 text-sm">{s.resumen}</p>

                <div className="mb-8 space-y-2 pb-6 border-b border-white/10">
                  {s.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                      <span className="text-purple-400 font-bold">✓</span>
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-purple-400 font-black group-hover:gap-3 transition-all uppercase tracking-widest text-sm">
                  <span>Ver más</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
