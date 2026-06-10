"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const ventaItems = [
  {
    key: "computo",
    icono: "💻",
    titulo: "Equipos de Cómputo",
    badge: "Laptops + Desktops",
    resumen: "Equipos de cómputo para oficina y negocio de las mejores marcas del mercado.",
    features: ["Laptops y desktops", "Marcas confiables", "Garantía incluida"],
    tipo: "venta",
  },
  {
    key: "papeleria",
    icono: "📦",
    titulo: "Papelería",
    badge: "Material de oficina",
    resumen: "Artículos de papelería y material de oficina para tu día a día.",
    features: ["Amplio catálogo", "Entregas a domicilio", "Precios competitivos"],
    tipo: "venta",
  },
  {
    key: "accesorios",
    icono: "🖱️",
    titulo: "Accesorios y Consumibles",
    badge: "Teclados · Tintas · Tóner",
    resumen: "Teclados, ratones, tintas, tóner y accesorios compatibles con todas las marcas.",
    features: ["Consumibles originales", "Compatibles garantizados", "Entrega rápida"],
    tipo: "venta",
  },
  {
    key: "impresoras",
    icono: "🖨️",
    titulo: "Renta de Impresoras",
    badge: "Renta mensual",
    resumen: "Renta mensual de impresoras para oficina con mantenimiento preventivo incluido.",
    features: ["Mantenimiento incluido", "Sin inversión inicial", "Soporte técnico"],
    tipo: "renta",
  },
];

const badgeColor: Record<string, string> = {
  venta: "#f97316",
  renta: "#16a34a",
};

const badgeLabel: Record<string, string> = {
  venta: "VENTA",
  renta: "RENTA",
};

export default function EvtaProductos() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = canvas.offsetHeight || 600;

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
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="productos"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-slate-200/30 bg-white/10 backdrop-blur">
            <div className="w-2 h-2 rounded-full bg-[color:var(--egmr-teal)]" />
            <span className="text-sm font-semibold text-slate-200 uppercase tracking-widest">
              Nuestros productos
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-4">
            Lo que ofrecemos
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Soluciones completas para tu oficina y negocio
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ventaItems.map((item, i) => (
            <Link key={i} href={`/divisiones/egmr/evta/productos/${item.key}`} className="group relative">
              <div className="h-full rounded-2xl border border-blue-300/30 bg-white/10 backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300/60 hover:bg-white/15">
                {/* Ícono */}
                <div className="mb-8">
                  <div className="w-24 h-24 rounded-2xl flex items-center justify-center border border-slate-200/30 bg-gradient-to-br from-[color:var(--egmr-teal)]/30 to-blue-600/20 shadow-lg text-5xl">
                    {item.icono}
                  </div>
                </div>

                {/* Tipo badge */}
                <div className="mb-3">
                  <span
                    className="inline-flex rounded-full px-3 py-1 text-xs font-black text-white uppercase tracking-widest"
                    style={{ background: badgeColor[item.tipo] }}
                  >
                    {badgeLabel[item.tipo]}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-xl font-black text-white mb-3 leading-tight uppercase tracking-wide">
                  {item.titulo}
                </h3>

                {/* Badge secundario */}
                <div className="mb-4">
                  <span className="inline-flex rounded-full border border-blue-300/40 bg-white/10 px-4 py-1.5 text-xs font-bold text-slate-200 backdrop-blur uppercase tracking-widest">
                    {item.badge}
                  </span>
                </div>

                {/* Descripción */}
                <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                  {item.resumen}
                </p>

                {/* Features */}
                <div className="space-y-2 pb-6 border-b border-white/10">
                  {item.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                      <span className="text-[color:var(--egmr-teal)] font-bold">✓</span>
                      {f}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-2 text-[color:var(--egmr-teal)] font-black group-hover:gap-3 transition-all uppercase tracking-widest text-sm">
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
