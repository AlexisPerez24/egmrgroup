"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function EGMRHero() {
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
        minHeight: "92vh",
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
        className="absolute top-0 right-0 h-full w-1/2 opacity-25 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 45%, #1f6b86 45%, #0ea5e9 58%, transparent 58%)",
        }}
      />

      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,116,144,0.15) 0%, transparent 70%)" }} />

      <div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex items-center"
        style={{ minHeight: "92vh" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-20">

          {/* LEFT */}
          <div className="text-white">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur">
              <div className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-widest">
                Soluciones de Seguridad
              </span>
            </div>

            <h1 className="font-black mb-4 leading-tight" style={{ fontSize: "clamp(48px, 9vw, 80px)" }}>
              SISTEMAS DE
              <span className="block" style={{ color: "#38bdf8" }}>SEGURIDAD</span>
            </h1>

            <p className="text-lg font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(186,230,253,0.85)" }}>
              Protegemos lo que más te importa
            </p>

            <p className="text-base mb-10 leading-relaxed max-w-lg" style={{ color: "rgba(186,230,253,0.65)" }}>
              Instalación, mantenimiento y soporte de cámaras, videoporteros,
              control de acceso y grabación. Tecnología confiable para tu negocio o hogar.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="#servicios"
                className="px-8 py-4 rounded-xl font-bold text-base transition transform hover:scale-105"
                style={{ background: "#fff", color: "#071318" }}
              >
                Nuestros servicios →
              </Link>
              <Link
                href="#contacto"
                className="px-8 py-4 rounded-xl font-bold text-base border transition hover:bg-white/10"
                style={{ borderColor: "rgba(56,189,248,0.4)", color: "#bae6fd" }}
              >
                Cotizar ahora
              </Link>
            </div>

            <div className="flex gap-10">
              <div>
                <div className="text-3xl font-black" style={{ color: "#38bdf8" }}>24/7</div>
                <p className="text-sm" style={{ color: "rgba(186,230,253,0.55)" }}>Soporte continuo</p>
              </div>
              <div>
                <div className="text-3xl font-black" style={{ color: "#38bdf8" }}>+100</div>
                <p className="text-sm" style={{ color: "rgba(186,230,253,0.55)" }}>Clientes satisfechos</p>
              </div>
              <div>
                <div className="text-3xl font-black" style={{ color: "#38bdf8" }}>2020</div>
                <p className="text-sm" style={{ color: "rgba(186,230,253,0.55)" }}>Desde Tijuana</p>
              </div>
            </div>
          </div>

          {/* RIGHT — imagen con brillo */}
          <div className="flex items-center justify-center">
            <div
              className="relative w-full"
              style={{ height: 520, animation: "float 4s ease-in-out infinite" }}
            >
              {/* Glow orb detrás */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: "radial-gradient(ellipse at 50% 55%, rgba(14,116,144,0.6) 0%, rgba(56,189,248,0.25) 50%, transparent 75%)",
                filter: "blur(32px)",
                transform: "scale(1.2)",
                borderRadius: "50%",
              }} />
              {/* Halo pulsante */}
              <div className="absolute inset-0 pointer-events-none" style={{
                boxShadow: "0 0 60px 20px rgba(56,189,248,0.2), 0 0 120px 50px rgba(14,116,144,0.15)",
                borderRadius: "24px",
                animation: "pulse-glow 3s ease-in-out infinite",
              }} />
              {/* Imagen */}
              <Image
                src="/icons/egmr.png"
                alt="EGMR Sistemas de Seguridad"
                fill
                className="object-contain relative z-10 rounded-3xl"
                priority
                style={{
                  filter:
                    "drop-shadow(0 0 25px rgba(56,189,248,0.85)) " +
                    "drop-shadow(0 0 60px rgba(14,116,144,0.6)) " +
                    "drop-shadow(0 0 110px rgba(56,189,248,0.3)) " +
                    "brightness(1.05)",
                }}
              />
            </div>

            <style>{`
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-16px); }
              }
              @keyframes pulse-glow {
                0%, 100% { opacity: 0.6; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.05); }
              }
            `}</style>
          </div>

        </div>
      </div>
    </section>
  );
}
