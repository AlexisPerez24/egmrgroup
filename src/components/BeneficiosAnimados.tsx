"use client";

import { useEffect, useRef } from "react";

type Beneficio = {
  numero: string;
  titulo: string;
  descripcion: string;
};

export default function BeneficiosAnimados({ beneficios, accentColor = "#38bdf8" }: {
  beneficios: Beneficio[];
  accentColor?: string;
}) {
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

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0b1622 0%, #0d1f2d 55%, #071318 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none w-full h-full"
        style={{ opacity: 0.7 }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-white mb-4">¿Por qué elegirnos?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((b, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-blue-300/30 bg-white/10 backdrop-blur-sm hover:bg-white/15 hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="text-5xl font-black mb-4" style={{ color: accentColor }}>
                {b.numero}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                {b.titulo}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">{b.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
