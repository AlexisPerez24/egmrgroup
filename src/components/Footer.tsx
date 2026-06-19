
interface FooterProps {
  color?: string;
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `${r},${g},${b}`;
}

export default function Footer({ color }: FooterProps) {
  const year = new Date().getFullYear();
  const accent = color ?? "#38bdf8";
  const rgb = hexToRgb(accent);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;600&display=swap');

        .footer-root {
          position: relative;
          overflow: hidden;
          ${color ? "" : "background: linear-gradient(160deg, #04060e 0%, #070c17 60%, #04060e 100%);"}
          font-family: 'DM Sans', sans-serif;
        }

        /* Fondo grid */
        .footer-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(${rgb},0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(${rgb},0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 90% 100% at 50% 0%, black 10%, transparent 80%);
          pointer-events: none;
        }

        /* Orb central superior */
        .footer-orb {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 280px;
          background: radial-gradient(ellipse at 50% 0%, rgba(${rgb},0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Acento superior */
        .footer-top-accent {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(${rgb},0.15) 15%,
            rgba(${rgb},0.45) 50%,
            rgba(${rgb},0.15) 85%,
            transparent 100%
          );
        }

        /* Logo ring */
        .footer-logo-ring {
          position: absolute;
          inset: -3px;
          border-radius: 14px;
          border: 1px solid rgba(${rgb},0.2);
          background: conic-gradient(
            from 180deg,
            rgba(${rgb},0.35),
            transparent 40%,
            rgba(${rgb},0.3) 70%,
            transparent
          );
          animation: footer-spin 12s linear infinite;
        }
        @keyframes footer-spin {
          to { transform: rotate(360deg); }
        }

        /* Column titles */
        .footer-col-title {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${accent};
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-col-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(${rgb},0.3), transparent);
          border-radius: 99px;
        }

        /* Nav links */
        .footer-link {
          font-size: 13px;
          color: rgba(${rgb},0.55);
          text-decoration: none;
          transition: color 0.25s, padding-left 0.25s;
          display: block;
          padding: 3px 0;
        }
        .footer-link:hover {
          color: rgba(${rgb},0.95);
          padding-left: 6px;
        }

        /* Contacto items */
        .footer-contact-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 4px 0;
        }
        .footer-contact-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: rgba(${rgb},0.08);
          border: 1px solid rgba(${rgb},0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          flex-shrink: 0;
        }
        .footer-contact-text {
          font-size: 12.5px;
          color: rgba(${rgb},0.55);
          line-height: 1.6;
          padding-top: 4px;
        }

        /* Back to top */
        .footer-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border-radius: 10px;
          border: 1px solid rgba(${rgb},0.22);
          background: rgba(${rgb},0.05);
          color: rgba(${rgb},0.75);
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.25s, box-shadow 0.25s, color 0.25s, border-color 0.25s;
        }
        .footer-top-btn:hover {
          background: rgba(${rgb},0.12);
          border-color: rgba(${rgb},0.4);
          box-shadow: 0 0 16px rgba(${rgb},0.18);
          color: ${accent};
        }

        /* Bottom bar */
        .footer-bottom {
          border-top: 1px solid rgba(${rgb},0.08);
          padding: 20px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }
        .footer-bottom-text {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          color: rgba(${rgb},0.28);
        }

        /* División badge */
        .footer-div-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 2px 10px 2px 6px;
          border-radius: 99px;
          border: 1px solid rgba(${rgb},0.15);
          background: rgba(${rgb},0.04);
          font-size: 12px;
          color: rgba(${rgb},0.45);
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
          margin-bottom: 8px;
          font-weight: 500;
        }
        .footer-div-badge:hover {
          background: rgba(${rgb},0.1);
          border-color: rgba(${rgb},0.3);
          color: rgba(${rgb},0.9);
        }
        .footer-div-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
      `}</style>

      <footer
        className="footer-root"
        style={color ? { background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)" } : undefined}
      >
        <div className="footer-top-accent" />
        <div className="footer-grid" />
        <div className="footer-orb" />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 0", position: "relative", zIndex: 1 }}>

          {/* ── MAIN GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">

            {/* ── Columna 1: Brand ── */}
            <div>
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontWeight: 900, fontSize: 20, letterSpacing: "0.04em", color: "#fff", lineHeight: 1.1 }}>
                  EGMR <span style={{ color: accent }}>GROUP</span>
                </div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: `rgba(${rgb},0.38)`, marginTop: 4 }}>
                  Soluciones tecnológicas
                </div>
              </div>

              <p style={{ fontSize: 13.5, lineHeight: 1.8, color: `rgba(${rgb},0.48)`, maxWidth: 300, marginBottom: 28 }}>
                Empresa tecnológica en Tijuana, B.C. México. Especialistas en seguridad electrónica, telecomunicaciones y equipamiento empresarial.
              </p>

              <a href="#top" className="footer-top-btn">
                Volver arriba
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 8V2M2 5l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* ── Columna 2: Navegación ── */}
            <div>
              <div className="footer-col-title">Navegación</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                  { href: "#servicios", label: "Servicios" },
                  { href: "#contacto", label: "Contacto" },
                  { href: "#top", label: "Inicio" },
                ].map((l) => (
                  <a key={l.href} href={l.href} className="footer-link">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Columna 3: Contacto ── */}
            <div>
              <div className="footer-col-title">Contacto</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div className="footer-contact-row">
                  <div className="footer-contact-icon">📍</div>
                  <div className="footer-contact-text">
                    Tijuana, B.C.<br />México
                  </div>
                </div>
                <div className="footer-contact-row">
                  <div className="footer-contact-icon">💬</div>
                  <div className="footer-contact-text">
                    Atención por WhatsApp<br />
                    <span style={{ color: `rgba(${rgb},0.6)`, fontSize: 11 }}>Respuesta rápida</span>
                  </div>
                </div>
                <div className="footer-contact-row">
                  <div className="footer-contact-icon">⏰</div>
                  <div className="footer-contact-text">
                    Lun – Sáb<br />9:00 am – 7:00 pm
                  </div>
                </div>
                <div className="footer-contact-row">
                  <div className="footer-contact-icon">🔒</div>
                  <div className="footer-contact-text">
                    Soporte técnico 24/7<br />
                    <span style={{ color: `rgba(${rgb},0.6)`, fontSize: 11 }}>Para clientes dedicados</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* ── BOTTOM BAR ── */}
          <div className="footer-bottom">
            <div className="footer-bottom-text">
              © {year} EGMR GROUP — Soluciones Tecnológicas
            </div>
            <div className="footer-bottom-text">
              Tijuana, B.C. México
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
