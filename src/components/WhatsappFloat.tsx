"use client";

import { useState } from "react";

const PHONE = "526645601401";
const MSG   = encodeURIComponent(
  "Hola, me gustaría solicitar información y una cotización de EGMR GROUP."
);
const HREF  = `https://wa.me/${PHONE}?text=${MSG}`;

export default function WhatsappFloat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        /* ── BOTÓN PRINCIPAL ── */
        .wa-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 55;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 11px 18px 11px 14px;
          border-radius: 50px;
          background: rgba(6, 14, 9, 0.94);
          border: 1px solid rgba(37,211,102,0.35);
          box-shadow: 0 8px 32px rgba(0,0,0,0.45), 0 0 20px rgba(37,211,102,0.1);
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          transition: border-color 0.3s, box-shadow 0.3s, background 0.3s;
          animation: wa-enter 0.5s 0.6s cubic-bezier(.22,1,.36,1) both;
          outline: none;
          -webkit-appearance: none;
          appearance: none;
        }
        .wa-btn:hover {
          border-color: rgba(37,211,102,0.6);
          background: rgba(10, 22, 13, 0.97);
          box-shadow: 0 12px 40px rgba(0,0,0,0.55), 0 0 28px rgba(37,211,102,0.2);
        }
        @keyframes wa-enter {
          from { opacity: 0; transform: translateY(20px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0)    scale(1);   }
        }

        /* Anillo pulsante */
        .wa-ring {
          position: absolute;
          inset: -5px;
          border-radius: 50px;
          border: 2px solid rgba(37,211,102,0.28);
          animation: wa-ring-pulse 2.8s ease-out infinite;
          pointer-events: none;
        }
        @keyframes wa-ring-pulse {
          0%   { transform: scale(1);    opacity: 0.7; }
          100% { transform: scale(1.18); opacity: 0;   }
        }

        /* Ícono WA */
        .wa-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #128C7E 0%, #25D366 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 12px rgba(37,211,102,0.4);
        }

        /* Punto online */
        .wa-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #25D366;
          flex-shrink: 0;
          animation: wa-dot-glow 2s ease-in-out infinite;
        }
        @keyframes wa-dot-glow {
          0%, 100% { box-shadow: 0 0 4px #25D366, 0 0 8px rgba(37,211,102,0.5); }
          50%       { box-shadow: 0 0 8px #25D366, 0 0 18px rgba(37,211,102,0.8); }
        }

        /* ── TARJETA DE CHAT ── */
        .wa-card {
          position: fixed;
          bottom: 90px;
          right: 24px;
          z-index: 55;
          width: 304px;
          border-radius: 22px;
          overflow: hidden;
          background: rgba(5, 11, 7, 0.98);
          border: 1px solid rgba(37,211,102,0.18);
          box-shadow:
            0 28px 64px rgba(0,0,0,0.65),
            0 0 0 1px rgba(37,211,102,0.06),
            0 0 40px rgba(37,211,102,0.07);
          backdrop-filter: blur(32px);
          -webkit-backdrop-filter: blur(32px);
          font-family: 'DM Sans', sans-serif;
          animation: wa-card-in 0.28s cubic-bezier(.22,1,.36,1);
        }
        @keyframes wa-card-in {
          from { opacity: 0; transform: translateY(14px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Header de la tarjeta */
        .wa-card-header {
          padding: 16px 16px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, rgba(37,211,102,0.1) 0%, rgba(0,0,0,0) 100%);
          border-bottom: 1px solid rgba(37,211,102,0.09);
          position: relative;
        }

        /* Avatar */
        .wa-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #075E54 0%, #128C7E 50%, #25D366 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 15px;
          color: #fff;
          flex-shrink: 0;
          position: relative;
          box-shadow: 0 0 14px rgba(37,211,102,0.3);
        }
        .wa-avatar-status {
          position: absolute;
          bottom: 1px;
          right: 1px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #25D366;
          border: 2px solid rgba(5,11,7,1);
          box-shadow: 0 0 6px rgba(37,211,102,0.9);
        }

        /* Cerrar */
        .wa-close {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: rgba(134,239,172,0.45);
          font-size: 12px;
          transition: background 0.2s, color 0.2s;
          outline: none;
        }
        .wa-close:hover {
          background: rgba(255,255,255,0.12);
          color: rgba(134,239,172,0.9);
        }

        /* Burbuja de mensaje */
        .wa-bubble-wrap {
          padding: 14px 14px 0;
        }
        .wa-bubble {
          padding: 12px 14px;
          background: rgba(37,211,102,0.08);
          border: 1px solid rgba(37,211,102,0.13);
          border-radius: 4px 16px 16px 16px;
          font-size: 13px;
          color: rgba(210,245,220,0.85);
          line-height: 1.6;
          position: relative;
        }
        .wa-bubble::before {
          content: '';
          position: absolute;
          top: 0;
          left: -6px;
          border-top: 7px solid rgba(37,211,102,0.13);
          border-left: 6px solid transparent;
        }
        .wa-bubble-time {
          text-align: right;
          margin-top: 5px;
          font-family: 'Space Mono', monospace;
          font-size: 9.5px;
          color: rgba(134,239,172,0.3);
          letter-spacing: 0.05em;
        }

        /* Indicador "escribiendo" */
        .wa-typing {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 10px 14px;
          background: rgba(37,211,102,0.05);
          border: 1px solid rgba(37,211,102,0.1);
          border-radius: 4px 12px 12px 12px;
          margin-top: 8px;
        }
        .wa-typing-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(37,211,102,0.5);
        }
        .wa-typing-dot:nth-child(1) { animation: wa-typing 1.2s 0s ease-in-out infinite; }
        .wa-typing-dot:nth-child(2) { animation: wa-typing 1.2s 0.2s ease-in-out infinite; }
        .wa-typing-dot:nth-child(3) { animation: wa-typing 1.2s 0.4s ease-in-out infinite; }
        @keyframes wa-typing {
          0%, 100% { transform: translateY(0);    opacity: 0.4; }
          50%       { transform: translateY(-4px); opacity: 1;   }
        }

        /* CTA */
        .wa-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin: 14px;
          padding: 13px;
          border-radius: 13px;
          background: linear-gradient(135deg, #128C7E 0%, #25D366 100%);
          color: #fff;
          font-weight: 700;
          font-size: 13.5px;
          letter-spacing: 0.02em;
          text-decoration: none;
          transition: filter 0.2s, box-shadow 0.2s, transform 0.2s;
          box-shadow: 0 4px 20px rgba(37,211,102,0.35);
        }
        .wa-cta:hover {
          filter: brightness(1.1);
          box-shadow: 0 6px 28px rgba(37,211,102,0.5);
          transform: translateY(-1px);
        }
        .wa-cta:active {
          transform: translateY(0);
        }

        /* Pie de la tarjeta */
        .wa-card-footer {
          padding: 10px 16px 12px;
          border-top: 1px solid rgba(37,211,102,0.07);
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(134,239,172,0.22);
          text-align: center;
        }
      `}</style>

      {/* ── TARJETA ── */}
      {open && (
        <div className="wa-card">
          {/* Header */}
          <div className="wa-card-header">
            <div className="wa-avatar">
              EG
              <div className="wa-avatar-status" />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", lineHeight: 1.2 }}>
                EGMR GROUP
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 3 }}>
                <div className="wa-dot" style={{ width: 6, height: 6 }} />
                <span style={{ fontSize: 11, color: "#25D366", fontWeight: 600 }}>
                  En línea ahora
                </span>
              </div>
            </div>
            <button className="wa-close" onClick={() => setOpen(false)} aria-label="Cerrar">
              ✕
            </button>
          </div>

          {/* Mensajes */}
          <div className="wa-bubble-wrap">
            <div className="wa-bubble">
              ¡Hola! 👋 ¿En qué podemos ayudarte hoy? Escríbenos para información o cotización, respondemos rápido.
              <div className="wa-bubble-time">Ahora ✓✓</div>
            </div>
            <div className="wa-typing">
              <div className="wa-typing-dot" />
              <div className="wa-typing-dot" />
              <div className="wa-typing-dot" />
            </div>
          </div>

          {/* CTA */}
          <a
            href={HREF}
            target="_blank"
            rel="noreferrer"
            className="wa-cta"
            onClick={() => setOpen(false)}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Iniciar conversación
          </a>

          <div className="wa-card-footer">Respuesta típica en minutos</div>
        </div>
      )}

      {/* ── BOTÓN FLOTANTE ── */}
      <button
        className="wa-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir WhatsApp"
      >
        <div className="wa-ring" />

        {/* Ícono */}
        <div className="wa-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>

        {/* Texto */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>
            WhatsApp
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 3 }}>
            <div className="wa-dot" />
            <span style={{
              fontSize: 10,
              color: "#25D366",
              fontFamily: "'Space Mono', monospace",
              letterSpacing: "0.06em",
            }}>
              En línea
            </span>
          </div>
        </div>
      </button>
    </>
  );
}
