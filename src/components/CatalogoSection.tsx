"use client";

import { useState, useEffect, useRef } from "react";

interface Props {
  empresa: string;
  descripcion: string;
  pdfPath: string;
  color: string;
  colorGlow: string;
}

export default function CatalogoSection({ empresa, descripcion, pdfPath, color, colorGlow }: Props) {
  const [verPdf, setVerPdf] = useState(false);
  const division = pdfPath.split("/").pop()?.replace(".pdf", "") ?? "";
  const [activePdfUrl, setActivePdfUrl] = useState<string>(pdfPath);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!division) return;
    fetch(`/api/catalogos?division=${division}`)
      .then((r) => r.json())
      .then((data) => { if (data.url) setActivePdfUrl(data.url); })
      .catch(() => {});
  }, [division, pdfPath]);

  /* ── Canvas con partículas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // "rgba(249,115,22," → "249,115,22"
    const rgb = colorGlow.slice(5, -1);

    type P = { x: number; y: number; r: number; vx: number; vy: number; alpha: number };
    let particles: P[] = [];
    let raf: number;
    let started = false;

    const spawn = () => {
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.15,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${p.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };

    /* ResizeObserver: arranca cuando el canvas ya tiene tamaño real */
    const ro = new ResizeObserver(() => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w > 0 && h > 0) {
        canvas.width = w;
        canvas.height = h;
        spawn();
        if (!started) {
          started = true;
          draw();
        }
      }
    });
    ro.observe(canvas);

    const onResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      spawn();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [colorGlow]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;600;700;900&display=swap');

        .cat-root {
          position: relative;
          padding: 80px 0;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }
        .cat-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          display: block;
        }
        .cat-card {
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(14px);
          padding: 40px;
          display: flex; flex-direction: column; gap: 28px;
        }
        @media (min-width: 768px) { .cat-card { flex-direction: row; align-items: center; } }
        .cat-icon-wrap {
          width: 80px; height: 80px; border-radius: 20px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .cat-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 22px; border-radius: 12px; font-weight: 700;
          font-size: 13px; letter-spacing: 0.04em; cursor: pointer;
          text-decoration: none; border: none; outline: none;
          font-family: 'DM Sans', sans-serif;
          transition: filter 0.2s, transform 0.15s;
        }
        .cat-btn:hover { filter: brightness(1.12); transform: translateY(-1px); }
        .cat-btn-ghost {
          background: rgba(255,255,255,0.06) !important;
          border: 1px solid rgba(255,255,255,0.14) !important;
          color: rgba(220,230,255,0.8) !important;
        }
        .cat-viewer {
          margin-top: 24px; border-radius: 20px; overflow: hidden;
          background: rgba(0,0,0,0.35);
          animation: cat-open 0.3s cubic-bezier(.22,1,.36,1);
        }
        @keyframes cat-open {
          from { opacity:0; transform:translateY(12px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .cat-viewer-toolbar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 20px; background: rgba(0,0,0,0.2);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          flex-wrap: wrap; gap: 10px;
        }
        .cat-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 14px; border-radius: 99px;
          font-family: 'Space Mono', monospace; font-size: 10px;
          font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
        }
      `}</style>

      <section
        id="catalogo"
        className="cat-root"
        style={{
          background: "#070b14",
        }}
      >
        <canvas ref={canvasRef} className="cat-canvas" />


        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="cat-badge" style={{ background: `${color}14`, border: `1px solid ${color}35`, color, marginBottom: 16 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
              </svg>
              Catálogo oficial
            </div>
            <h2 style={{ fontSize: "clamp(28px,5vw,44px)", fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.1 }}>
              Catálogo <span style={{ color }}>{empresa}</span>
            </h2>
            <p style={{ color: "rgba(186,210,240,0.6)", fontSize: 15, maxWidth: 480, margin: "12px auto 0" }}>
              {descripcion}
            </p>
          </div>

          {/* Card */}
          <div className="cat-card" style={{ borderColor: `${color}22` }}>
            <div className="cat-icon-wrap" style={{ background: `${color}14`, border: `1px solid ${color}30` }}>
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2v6h6M9 13h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H9v-3zM14 13h.5c.8 0 1.5.7 1.5 1.5S15.3 16 14.5 16H14v-3zM17 13v3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, color: "#fff", marginBottom: 6 }}>
                Catálogo de productos y servicios
              </div>
              <div style={{ fontSize: 13, color: "rgba(186,210,240,0.5)", marginBottom: 20, fontFamily: "'Space Mono', monospace", letterSpacing: "0.05em" }}>
                {activePdfUrl.split("/").pop()?.split("?")[0]} · PDF
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <button
                  className="cat-btn"
                  style={{ background: color, color: "#fff", boxShadow: `0 4px 20px ${colorGlow}35)` }}
                  onClick={() => setVerPdf(v => !v)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {verPdf
                      ? <><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></>
                      : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
                    }
                  </svg>
                  {verPdf ? "Ocultar catálogo" : "Ver en línea"}
                </button>

                <a href={activePdfUrl} download className="cat-btn cat-btn-ghost">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Descargar PDF
                </a>

                <a href={activePdfUrl} target="_blank" rel="noreferrer" className="cat-btn cat-btn-ghost">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Abrir en nueva pestaña
                </a>
              </div>
            </div>
          </div>

          {/* Visor PDF */}
          {verPdf && (
            <div className="cat-viewer" style={{ border: `1px solid ${color}25` }}>
              <div className="cat-viewer-toolbar">
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "rgba(186,210,240,0.45)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Vista previa — {activePdfUrl.split("/").pop()?.split("?")[0]}
                </span>
                <div style={{ display: "flex", gap: 8 }}>
                  <a href={activePdfUrl} download className="cat-btn cat-btn-ghost" style={{ padding: "7px 14px", fontSize: 12 }}>Descargar</a>
                  <a href={activePdfUrl} target="_blank" rel="noreferrer" className="cat-btn cat-btn-ghost" style={{ padding: "7px 14px", fontSize: 12 }}>Pantalla completa</a>
                </div>
              </div>
              <iframe
                src={`${activePdfUrl}${activePdfUrl.startsWith("/") ? "#toolbar=1&navpanes=0" : ""}`}
                title={`Catálogo ${empresa}`}
                style={{ width: "100%", height: 680, border: "none", display: "block" }}
              />
            </div>
          )}

          <p style={{
            textAlign: "center", marginTop: 24,
            fontFamily: "'Space Mono',monospace", fontSize: 10,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "rgba(125,180,220,0.25)",
          }}>
            Catálogo actualizado periódicamente · Consulta por WhatsApp para más información
          </p>

        </div>
      </section>
    </>
  );
}
