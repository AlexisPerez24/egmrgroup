"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function DedicatedHero() {
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
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.5 + 0.1,
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
      className="relative overflow-hidden"
      style={{
        minHeight: "92vh",
        background: "linear-gradient(160deg, #0d0a1a 0%, #1a0a2e 55%, #0d0a1a 100%)",
      }}
    >
      {/* Canvas partículas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Diagonal accent púrpura */}
      <div
        className="absolute top-0 right-0 h-full w-1/2 opacity-15 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 45%, #7c3aed 45%, #a855f7 58%, transparent 58%)",
        }}
      />

      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)" }} />

      <div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex items-center"
        style={{ minHeight: "92vh" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-20">

          {/* LEFT */}
          <div className="text-white">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-purple-300/30 bg-purple-500/10 backdrop-blur">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-widest text-purple-200">
                Internet Dedicado Empresarial
              </span>
            </div>

            <h1
              className="font-black mb-4 leading-tight"
              style={{ fontSize: "clamp(36px, 7vw, 72px)" }}
            >
              dEdicaTEd
              <span className="block" style={{ color: "#a855f7" }}>Services</span>
            </h1>

            <p
              className="text-lg font-bold uppercase tracking-widest mb-4"
              style={{ color: "rgba(216,180,254,0.85)" }}
            >
              Simétrico Empresarial
            </p>

            <p
              className="text-base mb-10 leading-relaxed max-w-lg"
              style={{ color: "rgba(186,230,253,0.65)" }}
            >
              Internet de alta velocidad exclusivo para tu empresa. Conexión
              simétrica estable 24/7, sin límite de datos y con soporte técnico
              especializado.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="#servicios"
                className="px-8 py-4 rounded-xl font-bold text-base transition transform hover:scale-105"
                style={{ background: "#a855f7", color: "#fff" }}
              >
                Ver servicios →
              </Link>
              <Link
                href="#contacto"
                className="px-8 py-4 rounded-xl font-bold text-base border transition hover:bg-white/10"
                style={{ borderColor: "rgba(168,85,247,0.4)", color: "#e9d5ff" }}
              >
                Cotizar ahora
              </Link>
            </div>

            <div className="flex gap-10">
              <div>
                <div className="text-3xl font-black" style={{ color: "#a855f7" }}>24/7</div>
                <p className="text-sm" style={{ color: "rgba(216,180,254,0.55)" }}>Disponibilidad</p>
              </div>
              <div>
                <div className="text-3xl font-black" style={{ color: "#a855f7" }}>100%</div>
                <p className="text-sm" style={{ color: "rgba(216,180,254,0.55)" }}>Simétrico</p>
              </div>
              <div>
                <div className="text-3xl font-black" style={{ color: "#a855f7" }}>SLA</div>
                <p className="text-sm" style={{ color: "rgba(216,180,254,0.55)" }}>Garantizado</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">
            <div className="relative" style={{ width: 380, height: 380, animation: "float 4s ease-in-out infinite" }}>
              {/* Glow orb detrás */}
              <div className="absolute inset-0 rounded-full pointer-events-none" style={{
                background: "radial-gradient(circle at 50% 55%, rgba(109,40,217,0.75) 0%, rgba(168,85,247,0.35) 45%, transparent 75%)",
                filter: "blur(28px)",
                transform: "scale(1.15)",
              }} />
              {/* Halo exterior animado */}
              <div className="absolute inset-0 rounded-full pointer-events-none" style={{
                boxShadow: "0 0 60px 20px rgba(168,85,247,0.3), 0 0 120px 40px rgba(109,40,217,0.2)",
                borderRadius: "50%",
                animation: "pulse-glow 3s ease-in-out infinite",
              }} />
              {/* Imagen */}
              <Image
                src="/icons/internet.png"
                alt="dEdicaTEd Services - Internet Dedicado"
                fill
                className="object-contain relative z-10"
                priority
                style={{
                  filter:
                    "drop-shadow(0 0 30px rgba(168,85,247,0.9)) " +
                    "drop-shadow(0 0 70px rgba(109,40,217,0.6)) " +
                    "drop-shadow(0 0 120px rgba(168,85,247,0.3)) " +
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
                0%, 100% { opacity: 0.7; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.06); }
              }
            `}</style>
          </div>

        </div>
      </div>
    </section>
  );
}
