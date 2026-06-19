"use client";

import { useState, useRef } from "react";

const DIVISIONS = [
  {
    key: "egmr",
    label: "EGMR",
    subtitle: "Sistemas de Seguridad",
    color: "#38bdf8",
    glow: "rgba(56,189,248,",
    icon: "🔒",
  },
  {
    key: "evta",
    label: "EVTA",
    subtitle: "Equipos de Oficina",
    color: "#f97316",
    glow: "rgba(249,115,22,",
    icon: "🖨️",
  },
  {
    key: "dedicated",
    label: "dEdicaTEd Services",
    subtitle: "Internet Dedicado",
    color: "#a855f7",
    glow: "rgba(168,85,247,",
    icon: "🌐",
  },
];

type Status = { type: "idle" | "loading" | "ok" | "error"; msg: string };

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [statuses, setStatuses] = useState<Record<string, Status>>(
    Object.fromEntries(DIVISIONS.map((d) => [d.key, { type: "idle", msg: "" }]))
  );
  const fileRefs = useRef<Record<string, HTMLInputElement | null>>({});

  function setStatus(key: string, s: Status) {
    setStatuses((prev) => ({ ...prev, [key]: s }));
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin/upload", {
      method: "POST",
      headers: { "x-admin-password": password },
      body: (() => {
        const fd = new FormData();
        fd.append("division", "egmr");
        return fd;
      })(),
    });
    if (res.status === 401) {
      setAuthError("Contraseña incorrecta. Intenta de nuevo.");
    } else if (res.status === 400) {
      // missing file → password was accepted
      setAuthed(true);
      setAuthError("");
    } else if (res.status === 500) {
      setAuthError("El servidor no tiene configurada la contraseña. Contacta al desarrollador.");
    } else {
      setAuthed(true);
      setAuthError("");
    }
  }

  async function handleUpload(division: string) {
    const input = fileRefs.current[division];
    const file = input?.files?.[0];
    if (!file) {
      setStatus(division, { type: "error", msg: "Selecciona un archivo PDF primero." });
      return;
    }
    setStatus(division, { type: "loading", msg: "Subiendo catálogo…" });

    const fd = new FormData();
    fd.append("file", file);
    fd.append("division", division);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: { "x-admin-password": password },
        body: fd,
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus(division, { type: "error", msg: data.error ?? "Error al subir." });
      } else {
        setStatus(division, { type: "ok", msg: "¡Catálogo actualizado correctamente!" });
        if (input) input.value = "";
      }
    } catch {
      setStatus(division, { type: "error", msg: "Error de red. Intenta de nuevo." });
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;600;700;900&display=swap');

        body { background: #070b14; margin: 0; }

        .adm-root {
          min-height: 100vh;
          background: linear-gradient(135deg, #070b14 0%, #0d1525 100%);
          font-family: 'DM Sans', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 16px;
        }

        .adm-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          backdrop-filter: blur(20px);
          padding: 40px;
          width: 100%;
          max-width: 560px;
        }

        .adm-logo {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(125,180,220,0.4);
          margin-bottom: 32px;
          text-align: center;
        }

        .adm-input {
          width: 100%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 14px 18px;
          color: #fff;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s;
        }
        .adm-input:focus {
          border-color: rgba(56,189,248,0.4);
        }
        .adm-input::placeholder { color: rgba(150,180,220,0.35); }

        .adm-btn-login {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          background: linear-gradient(135deg, #0ea5e9, #38bdf8);
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: filter 0.2s, transform 0.15s;
          margin-top: 16px;
        }
        .adm-btn-login:hover { filter: brightness(1.1); transform: translateY(-1px); }

        .adm-div-card {
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          padding: 24px;
          margin-bottom: 16px;
        }

        .adm-file-zone {
          border: 2px dashed rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          margin: 16px 0 12px;
          position: relative;
        }
        .adm-file-zone:hover {
          background: rgba(255,255,255,0.04);
        }
        .adm-file-input {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
          width: 100%;
          height: 100%;
        }

        .adm-btn-upload {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 14px;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: filter 0.2s, transform 0.15s;
          color: #fff;
        }
        .adm-btn-upload:hover { filter: brightness(1.12); transform: translateY(-1px); }
        .adm-btn-upload:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

        .adm-status {
          margin-top: 10px;
          font-size: 13px;
          border-radius: 8px;
          padding: 10px 14px;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
        }
        .adm-status-ok    { background: rgba(34,197,94,0.12); color: #4ade80; border: 1px solid rgba(34,197,94,0.25); }
        .adm-status-error { background: rgba(239,68,68,0.12); color: #f87171; border: 1px solid rgba(239,68,68,0.25); }
        .adm-status-loading { background: rgba(148,163,184,0.08); color: rgba(186,210,240,0.6); border: 1px solid rgba(148,163,184,0.15); }
      `}</style>

      <div className="adm-root">
        <div style={{ width: "100%", maxWidth: 580 }}>
          <div className="adm-logo">EGMR GROUP · Panel de administración</div>

          {!authed ? (
            /* ─── Login ─── */
            <div className="adm-card">
              <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 800, margin: "0 0 8px", textAlign: "center" }}>
                Acceso privado
              </h2>
              <p style={{ color: "rgba(186,210,240,0.5)", fontSize: 14, textAlign: "center", margin: "0 0 28px" }}>
                Ingresa la contraseña para gestionar los catálogos.
              </p>
              <form onSubmit={handleLogin}>
                <input
                  className="adm-input"
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoFocus
                />
                {authError && (
                  <p style={{ color: "#f87171", fontSize: 13, marginTop: 10, fontFamily: "'Space Mono',monospace" }}>
                    {authError}
                  </p>
                )}
                <button className="adm-btn-login" type="submit">
                  Entrar →
                </button>
              </form>
            </div>
          ) : (
            /* ─── Panel ─── */
            <div>
              <div className="adm-card" style={{ marginBottom: 20 }}>
                <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 800, margin: "0 0 8px" }}>
                  Catálogos PDF
                </h2>
                <p style={{ color: "rgba(186,210,240,0.5)", fontSize: 14, margin: 0 }}>
                  Sube o reemplaza el catálogo de cada división. Solo se aceptan archivos PDF.
                </p>
              </div>

              {DIVISIONS.map((d) => {
                const st = statuses[d.key];
                return (
                  <div
                    key={d.key}
                    className="adm-div-card"
                    style={{ borderColor: `${d.color}25` }}
                  >
                    {/* Header división */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 10,
                        background: `${d.color}18`, border: `1px solid ${d.color}35`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 18,
                      }}>
                        {d.icon}
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, color: "#fff", fontSize: 15 }}>{d.label}</div>
                        <div style={{ fontSize: 12, color: "rgba(186,210,240,0.45)", fontFamily: "'Space Mono',monospace" }}>
                          {d.subtitle}
                        </div>
                      </div>
                    </div>

                    {/* Zona de archivo */}
                    <div
                      className="adm-file-zone"
                      style={{ borderColor: `${d.color}30` }}
                      onClick={() => fileRefs.current[d.key]?.click()}
                    >
                      <input
                        type="file"
                        accept="application/pdf"
                        className="adm-file-input"
                        ref={(el) => { fileRefs.current[d.key] = el; }}
                        onChange={() => {
                          const name = fileRefs.current[d.key]?.files?.[0]?.name;
                          setStatus(d.key, name
                            ? { type: "idle", msg: `Archivo seleccionado: ${name}` }
                            : { type: "idle", msg: "" }
                          );
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <div style={{ pointerEvents: "none" }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={d.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 8px", display: "block", opacity: 0.7 }}>
                          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                          <polyline points="17 8 12 3 7 8"/>
                          <line x1="12" y1="3" x2="12" y2="15"/>
                        </svg>
                        <div style={{ fontSize: 13, color: "rgba(186,210,240,0.5)" }}>
                          Haz clic para seleccionar el PDF
                        </div>
                        <div style={{ fontSize: 11, color: "rgba(186,210,240,0.3)", marginTop: 4, fontFamily: "'Space Mono',monospace", letterSpacing: "0.06em" }}>
                          se guardará como catalogo-{d.key}.pdf
                        </div>
                      </div>
                    </div>

                    {/* Botón subir */}
                    <button
                      className="adm-btn-upload"
                      style={{ background: `linear-gradient(135deg, ${d.color}cc, ${d.color})`, boxShadow: `0 4px 18px ${d.glow}30)` }}
                      onClick={() => handleUpload(d.key)}
                      disabled={st.type === "loading"}
                    >
                      {st.type === "loading" ? "Subiendo…" : `Subir catálogo de ${d.label}`}
                    </button>

                    {/* Status */}
                    {st.msg && (
                      <div className={`adm-status adm-status-${st.type === "idle" ? "loading" : st.type}`}>
                        {st.type === "ok" && "✓ "}{st.type === "error" && "✕ "}{st.msg}
                      </div>
                    )}
                  </div>
                );
              })}

              <p style={{
                textAlign: "center",
                fontFamily: "'Space Mono',monospace",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(125,180,220,0.2)",
                marginTop: 24,
              }}>
                Los cambios se reflejan en el sitio de forma inmediata
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
