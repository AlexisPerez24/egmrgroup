"use client";

import { useState, useEffect } from "react";

interface Props {
  empresa: string;
  descripcion: string;
  pdfPath: string;         // ej: "/catalogos/egmr.pdf"
  color: string;
  colorGlow: string;
}

export default function CatalogoSection({ empresa, descripcion, pdfPath, color, colorGlow }: Props) {
  const [verPdf, setVerPdf] = useState(false);
  // Division key derived from path: "/catalogos/egmr.pdf" → "egmr"
  const division = pdfPath.split("/").pop()?.replace(".pdf", "") ?? "";
  const [activePdfUrl, setActivePdfUrl] = useState<string>(pdfPath);

  useEffect(() => {
    if (!division) return;
    fetch(`/api/catalogos?division=${division}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.url) setActivePdfUrl(data.url);
      })
      .catch(() => {/* fallback to pdfPath */});
  }, [division, pdfPath]);

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

        .cat-card {
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(14px);
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        @media (min-width: 768px) {
          .cat-card {
            flex-direction: row;
            align-items: center;
          }
        }

        .cat-icon-wrap {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cat-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.04em;
          cursor: pointer;
          text-decoration: none;
          transition: filter 0.2s, box-shadow 0.2s, transform 0.2s;
          border: none;
          outline: none;
          font-family: 'DM Sans', sans-serif;
        }
        .cat-btn:hover {
          filter: brightness(1.12);
          transform: translateY(-1px);
        }
        .cat-btn-ghost {
          border: 1px solid rgba(255,255,255,0.15) !important;
          background: rgba(255,255,255,0.06) !important;
          color: rgba(220,230,255,0.85) !important;
        }
        .cat-btn-ghost:hover {
          background: rgba(255,255,255,0.12) !important;
          border-color: rgba(255,255,255,0.25) !important;
          transform: translateY(-1px);
        }

        /* PDF Viewer */
        .cat-viewer {
          margin-top: 24px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(0,0,0,0.3);
          animation: cat-open 0.3s cubic-bezier(.22,1,.36,1);
        }
        @keyframes cat-open {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .cat-viewer-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          background: rgba(0,0,0,0.2);
          flex-wrap: wrap;
          gap: 10px;
        }

        .cat-no-pdf {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 60px 20px;
          text-align: center;
        }

        .cat-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          border-radius: 99px;
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
      `}</style>

      <section
        id="catalogo"
        className="cat-root"
        style={{ background: "transparent" }}
      >
        {/* Orb decorativo */}
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 500, height: 300,
          background: `radial-gradient(ellipse, ${colorGlow}08 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", position: "relative" }}>

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
            <p style={{ color: "rgba(186,210,240,0.6)", marginTop: 12, fontSize: 15, maxWidth: 480, margin: "12px auto 0" }}>
              {descripcion}
            </p>
          </div>

          {/* Card principal */}
          <div className="cat-card" style={{ borderColor: `${color}22` }}>
            {/* Ícono PDF */}
            <div className="cat-icon-wrap" style={{ background: `${color}14`, border: `1px solid ${color}30` }}>
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2v6h6M9 13h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H9v-3zM14 13h.5c.8 0 1.5.7 1.5 1.5S15.3 16 14.5 16H14v-3zM17 13v3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Info */}
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, color: "#fff", marginBottom: 6 }}>
                Catálogo de productos y servicios
              </div>
              <div style={{ fontSize: 13, color: "rgba(186,210,240,0.55)", marginBottom: 20, fontFamily: "'Space Mono', monospace", letterSpacing: "0.05em" }}>
                {activePdfUrl.split("/").pop()?.split("?")[0]} · PDF
              </div>

              {/* Botones */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {/* Ver en línea */}
                <button
                  className="cat-btn"
                  style={{ background: color, color: "#fff", boxShadow: `0 4px 20px ${colorGlow}35` }}
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

                {/* Descargar */}
                <a
                  href={activePdfUrl}
                  download
                  className="cat-btn cat-btn-ghost"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Descargar PDF
                </a>

                {/* Nueva pestaña */}
                <a
                  href={activePdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cat-btn cat-btn-ghost"
                >
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

          {/* Visor PDF inline */}
          {verPdf && (
            <div className="cat-viewer" style={{ borderColor: `${color}25` }}>
              {/* Toolbar del visor */}
              <div className="cat-viewer-toolbar">
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "rgba(186,210,240,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Vista previa — {activePdfUrl.split("/").pop()?.split("?")[0]}
                </span>
                <div style={{ display: "flex", gap: 8 }}>
                  <a href={activePdfUrl} download className="cat-btn cat-btn-ghost" style={{ padding: "7px 14px", fontSize: 12 }}>
                    Descargar
                  </a>
                  <a href={activePdfUrl} target="_blank" rel="noreferrer" className="cat-btn cat-btn-ghost" style={{ padding: "7px 14px", fontSize: 12 }}>
                    Pantalla completa
                  </a>
                </div>
              </div>

              {/* iframe del PDF */}
              <iframe
                src={`${activePdfUrl}${activePdfUrl.startsWith("/") ? "#toolbar=1&navpanes=0" : ""}`}
                title={`Catálogo ${empresa}`}
                style={{ width: "100%", height: 680, border: "none", display: "block" }}
              />
            </div>
          )}

          {/* Nota actualización */}
          <p style={{
            textAlign: "center",
            marginTop: 24,
            fontFamily: "'Space Mono',monospace",
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(125,180,220,0.28)",
          }}>
            Catálogo actualizado periódicamente · Consulta por WhatsApp para más información
          </p>

        </div>
      </section>
    </>
  );
}
