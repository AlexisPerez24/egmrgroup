"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function EVTAHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [
      "rgba(125,211,252,",
      "rgba(56,189,248,",
      "rgba(186,230,253,",
      "rgba(255,255,255,",
    ];

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.5 + 0.1,
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
      className="relative overflow-hidden"
      style={{
        minHeight: "80vh",
        background: "linear-gradient(160deg, #0b1622 0%, #0d1f2d 55%, #071318 100%)",
      }}
    >
      {/* Canvas partículas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Diagonal accent */}
      <div
        className="absolute top-0 right-0 h-full w-1/2 opacity-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 45%, #1f6b86 45%, #0ea5e9 58%, transparent 58%)",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)" }} />

      <div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex items-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-20">

          {/* LEFT */}
          <div className="text-white">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur">
              <div className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-widest">
                Soluciones para tu Oficina y Negocio
              </span>
            </div>

            <h1 className="font-black mb-4 leading-tight" style={{ fontSize: "clamp(48px, 9vw, 80px)" }}>
              EVTA
              <span className="block" style={{ color: "#38bdf8" }}>SOLUCIONES</span>
            </h1>

            <p className="text-lg font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(186,230,253,0.85)" }}>
              Equipa tu oficina y negocio
            </p>

            <p className="text-base mb-10 leading-relaxed max-w-lg" style={{ color: "rgba(186,230,253,0.65)" }}>
              Venta de equipos de cómputo, papelería y accesorios. Renta de impresoras con
              mantenimiento incluido. Todo lo que necesitas en un solo lugar.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#productos"
                className="px-8 py-4 rounded-xl font-bold text-base transition transform hover:scale-105"
                style={{ background: "#fff", color: "#071318" }}
              >
                Ver productos →
              </Link>
              <Link
                href="#contacto"
                className="px-8 py-4 rounded-xl font-bold text-base border transition hover:bg-white/10"
                style={{ borderColor: "rgba(56,189,248,0.4)", color: "#bae6fd" }}
              >
                Cotizar ahora
              </Link>
            </div>
          </div>

          {/* RIGHT — imagen con brillo ajustado */}
          <div className="flex items-center justify-center">
            <div
              className="relative w-full"
              style={{ height: 480, animation: "float 4s ease-in-out infinite" }}
            >
              <Image
                src="/icons/evta.png"
                alt="EVTA Soluciones"
                fill
                className="object-contain relative z-10"
                priority
                style={{
                  filter:
                    "drop-shadow(0 0 20px rgba(56,189,248,0.9)) " +
                    "drop-shadow(0 0 55px rgba(14,116,144,0.65)) " +
                    "drop-shadow(0 0 100px rgba(56,189,248,0.3)) " +
                    "brightness(1.05)",
                }}
              />
            </div>

            <style>{`
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-16px); }
              }
            `}</style>
          </div>

        </div>
      </div>
    </section>
  );
}
