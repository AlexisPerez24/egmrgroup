"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
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

    const colors = ["rgba(125,211,252,", "rgba(56,189,248,", "rgba(186,230,253,", "rgba(255,255,255,"];

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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');

        .hero-section {
          font-family: 'DM Sans', sans-serif;
        }

        /* ── BADGE ── */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 100px;
          border: 1px solid rgba(125,211,252,0.25);
          background: rgba(125,211,252,0.06);
          backdrop-filter: blur(12px);
          font-size: 11px;
          font-family: 'Space Mono', monospace;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(186,230,253,0.85);
          animation: fadeSlideDown 0.9s cubic-bezier(.22,1,.36,1) both;
        }
        .hero-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 8px #38bdf8, 0 0 18px rgba(56,189,248,0.5);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%,100% { box-shadow: 0 0 6px #38bdf8, 0 0 14px rgba(56,189,248,0.4); }
          50%      { box-shadow: 0 0 10px #7dd3fc, 0 0 28px rgba(125,211,252,0.7); }
        }

        /* ── LOGO ── */
        .hero-logo-wrap {
          position: relative;
          width: 80px; height: 80px;
          animation: fadeSlideUp 1s .2s cubic-bezier(.22,1,.36,1) both;
        }
        .hero-logo-ring {
          position: absolute; inset: -4px;
          border-radius: 22px;
          border: 1px solid rgba(125,211,252,0.2);
          background: conic-gradient(from 0deg, rgba(56,189,248,0.4), transparent 40%, rgba(56,189,248,0.4) 70%, transparent);
          animation: spin-ring 8s linear infinite;
        }
        @keyframes spin-ring { to { transform: rotate(360deg); } }
        .hero-logo-inner {
          position: absolute; inset: 4px;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
        }

        /* ── HEADLINE ── */
        .hero-h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(72px, 12vw, 130px);
          line-height: 0.92;
          letter-spacing: -0.01em;
          color: #fff;
          animation: fadeSlideUp 1s .35s cubic-bezier(.22,1,.36,1) both;
        }
        .hero-h1-accent {
          display: block;
          background: linear-gradient(90deg, #7dd3fc 0%, #38bdf8 40%, #bae6fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 24px rgba(56,189,248,0.35));
        }
        .hero-line {
          width: 48px; height: 2px;
          background: linear-gradient(90deg, #38bdf8, transparent);
          margin: 0 auto;
          animation: fadeSlideUp 1s .45s cubic-bezier(.22,1,.36,1) both;
        }
        .hero-desc {
          font-size: 15px;
          line-height: 1.8;
          color: rgba(186,230,253,0.7);
          max-width: 480px;
          font-weight: 300;
          animation: fadeSlideUp 1s .5s cubic-bezier(.22,1,.36,1) both;
        }

        /* ── BUTTONS ── */
        .hero-btns {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          animation: fadeSlideUp 1s .6s cubic-bezier(.22,1,.36,1) both;
        }
        .hero-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 28px;
          border-radius: 10px;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 700;
          overflow: hidden;
          transition: transform 0.25s, box-shadow 0.25s;
          border: 1px solid rgba(125,211,252,0.25);
          background: rgba(255,255,255,0.04);
          color: rgba(186,230,253,0.9);
          backdrop-filter: blur(10px);
        }
        .hero-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(56,189,248,0.18), rgba(125,211,252,0.08));
          opacity: 0;
          transition: opacity 0.3s;
        }
        .hero-btn:hover::before { opacity: 1; }
        .hero-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(56,189,248,0.18), 0 0 0 1px rgba(125,211,252,0.3);
          color: #e0f2fe;
        }
        .hero-btn-primary {
          background: linear-gradient(135deg, rgba(56,189,248,0.22), rgba(14,165,233,0.14));
          border-color: rgba(56,189,248,0.4);
          color: #bae6fd;
        }
        .hero-btn-primary:hover {
          box-shadow: 0 8px 40px rgba(56,189,248,0.3), 0 0 0 1px rgba(56,189,248,0.5);
        }
        .hero-btn-icon {
          width: 14px; height: 14px;
          opacity: 0.7;
          transition: transform 0.3s, opacity 0.3s;
        }
        .hero-btn:hover .hero-btn-icon {
          transform: translateX(3px);
          opacity: 1;
        }

        /* ── TAGS ── */
        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          animation: fadeSlideUp 1s .72s cubic-bezier(.22,1,.36,1) both;
        }
        .hero-tag {
          padding: 5px 14px;
          border-radius: 100px;
          font-size: 10px;
          font-family: 'Space Mono', monospace;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(186,230,253,0.55);
          border: 1px solid rgba(125,211,252,0.1);
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(8px);
          transition: color .25s, border-color .25s;
        }
        .hero-tag:hover {
          color: rgba(186,230,253,0.9);
          border-color: rgba(125,211,252,0.3);
        }

        /* ── GRID LINES ── */
        .hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(125,211,252,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(125,211,252,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }

        /* ── GLOW ORBS ── */
        .hero-orb {
          position: absolute; border-radius: 50%;
          filter: blur(80px); pointer-events: none;
        }
        .hero-orb-1 {
          width: 500px; height: 500px;
          top: -120px; right: -80px;
          background: radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%);
          animation: orb-drift 12s ease-in-out infinite alternate;
        }
        .hero-orb-2 {
          width: 600px; height: 400px;
          bottom: -100px; left: -100px;
          background: radial-gradient(circle, rgba(14,116,144,0.15) 0%, transparent 70%);
          animation: orb-drift 16s ease-in-out infinite alternate-reverse;
        }
        .hero-orb-3 {
          width: 300px; height: 300px;
          top: 40%; left: 50%;
          transform: translate(-50%,-50%);
          background: radial-gradient(circle, rgba(125,211,252,0.06) 0%, transparent 70%);
          animation: orb-drift 10s ease-in-out infinite alternate;
        }
        @keyframes orb-drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(30px, 20px) scale(1.08); }
        }

        /* ── VERTICAL TEXT ── */
        .hero-vert-text {
          position: absolute;
          left: 28px; top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(125,211,252,0.25);
          white-space: nowrap;
          animation: fadeSlideDown 1s .8s both;
          display: none;
        }
        @media (min-width: 900px) { .hero-vert-text { display: block; } }

        /* ── SCROLL HINT ── */
        .hero-scroll {
          position: absolute; bottom: 32px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          animation: fadeSlideUp 1s 1.1s both;
          cursor: pointer;
        }
        .hero-scroll-text {
          font-family: 'Space Mono', monospace;
          font-size: 9px; letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(125,211,252,0.35);
        }
        .hero-scroll-bar {
          width: 1px; height: 40px;
          background: linear-gradient(to bottom, rgba(56,189,248,0.5), transparent);
          animation: scroll-bar 2s ease-in-out infinite;
        }
        @keyframes scroll-bar {
          0%,100% { opacity: 0.3; transform: scaleY(1); }
          50%      { opacity: 0.8; transform: scaleY(1.15); }
        }

        /* ── DIVIDER ── */
        .hero-divider {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(125,211,252,0.15) 30%, rgba(125,211,252,0.15) 70%, transparent);
          margin: 28px 0;
          animation: fadeSlideUp 1s .55s cubic-bezier(.22,1,.36,1) both;
        }

        /* ── KEYFRAMES ── */
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        id="top"
        className="hero-section relative overflow-hidden h-screen flex flex-col justify-center items-center text-white"
        style={{ background: "linear-gradient(160deg, #0b1622 0%, #0d1f2d 55%, #071318 100%)" }}
      >
        {/* Canvas particles */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.7 }} />

        {/* Grid */}
        <div className="hero-grid" />

        {/* Orbs */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />

        {/* Vertical side text */}
        <div className="hero-vert-text">Tijuana, B.C. · México</div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-0">

          {/* Badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Seguridad &amp; Telecomunicaciones
            <span style={{ color: "rgba(125,211,252,0.3)" }}>·</span>
            <span style={{ color: "rgba(125,211,252,0.5)" }}>Tijuana, B.C.</span>
          </div>

          {/* Logo */}
          <div className="hero-logo-wrap" style={{ marginTop: 36 }}>
            <div className="hero-logo-ring" />
            <div className="hero-logo-inner">
              <Image src="/egmr-logo.png" alt="EGMR GROUP" fill className="object-cover" priority />
            </div>
          </div>

          {/* Headline */}
          <h1 className="hero-h1" style={{ marginTop: 24 }}>
            EGMR
            <span className="hero-h1-accent"> GROUP</span>
          </h1>

          {/* Thin line */}
          <div className="hero-line" style={{ marginTop: 20 }} />

          {/* Description */}
          <p className="hero-desc" style={{ marginTop: 20 }}>
            Soluciones tecnológicas integrales para empresas: Internet, videovigilancia,
            control de acceso y soporte técnico.
          </p>

          {/* Divider */}
          <div className="hero-divider" />

          {/* Buttons */}
          <div className="hero-btns">
            <Link href="#evta" className="hero-btn hero-btn-primary">
              EVTA
              <svg className="hero-btn-icon" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="#dedicatedServices" className="hero-btn">
              dEdicatEd Services
              <svg className="hero-btn-icon" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="#egmr" className="hero-btn">
              EGMR
              <svg className="hero-btn-icon" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Tags */}
          <div className="hero-tags" style={{ marginTop: 20 }}>
            <span className="hero-tag">⚡ Respuesta rápida</span>
            <span className="hero-tag">🔧 Instalación y soporte</span>
            <span className="hero-tag">💬 Atención por WhatsApp</span>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hero-scroll">
          <span className="hero-scroll-text">Scroll</span>
          <div className="hero-scroll-bar" />
        </div>
      </section>
    </>
  );
}
