"use client";

import { useState, useEffect, useRef } from "react";

export default function DedicatedContacto() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const whatsappNumber = "526645601401";
  const phoneDisplay = "664 560 1401";
  const email = "contacto@egmrgroup.com";

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
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const whatsappMsg = encodeURIComponent(
    "Hola, me gustaría solicitar información y una cotización de dEdicaTEd Services."
  );

  const [copied, setCopied] = useState<"" | "phone" | "email">("");

  async function copy(text: string, key: "phone" | "email") {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      window.setTimeout(() => setCopied(""), 1200);
    } catch {
      setCopied(key);
      window.setTimeout(() => setCopied(""), 1200);
    }
  }

  return (
    <section
      id="contacto"
      className="relative py-16 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0d0a1a 0%, #1a0a2e 55%, #0d0a1a 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none w-full h-full"
        style={{ opacity: 0.7 }}
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <div
          className="relative overflow-hidden rounded-[28px] p-10 text-white border"
          style={{
            borderColor: "rgba(168,85,247,0.25)",
            background:
              "radial-gradient(900px 420px at 20% 20%, rgba(109,40,217,.25), transparent 60%)," +
              "radial-gradient(800px 420px at 80% 30%, rgba(168,85,247,.2), transparent 60%)," +
              "linear-gradient(135deg, #1a0a2e, #0d0a1a)",
          }}
        >
          {/* Decor orbs */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full blur-3xl"
            style={{ background: "rgba(168,85,247,0.08)" }} />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full blur-3xl"
            style={{ background: "rgba(109,40,217,0.1)" }} />

          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight mb-2">Contáctanos</h2>
            <p className="mb-8 max-w-2xl" style={{ color: "rgba(216,180,254,0.75)" }}>
              WhatsApp y correo disponibles para atención y cotizaciones. Respuesta rápida y asesoría personalizada.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* WhatsApp */}
              <div
                className="group rounded-3xl p-6 border transition hover:bg-white/10"
                style={{ borderColor: "rgba(168,85,247,0.2)", background: "rgba(168,85,247,0.08)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold" style={{ color: "rgba(216,180,254,0.85)" }}>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-2xl border"
                        style={{ background: "rgba(168,85,247,0.15)", borderColor: "rgba(168,85,247,0.3)" }}>
                        💬
                      </span>
                      WhatsApp
                    </div>
                    <h3 className="text-xl font-semibold mt-3 text-white">{phoneDisplay}</h3>
                    <p className="mt-1 text-sm" style={{ color: "rgba(216,180,254,0.65)" }}>
                      Atención rápida para cotizaciones y soporte.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => copy(phoneDisplay, "phone")}
                    className="shrink-0 rounded-xl px-3 py-2 text-sm font-semibold border transition hover:bg-white/10"
                    style={{ borderColor: "rgba(168,85,247,0.35)", color: "rgba(216,180,254,0.85)" }}
                  >
                    {copied === "phone" ? "Copiado ✓" : "Copiar"}
                  </button>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    className="inline-flex items-center justify-center rounded-xl font-semibold px-6 py-3 text-white transition hover:brightness-110"
                    style={{ background: "#a855f7" }}
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enviar mensaje
                  </a>
                  <a
                    className="inline-flex items-center justify-center rounded-xl font-semibold px-6 py-3 border transition hover:bg-white/10 text-white"
                    style={{ borderColor: "rgba(168,85,247,0.4)" }}
                    href={`tel:+${whatsappNumber}`}
                  >
                    Llamar
                  </a>
                </div>
              </div>

              {/* Correo */}
              <div
                className="group rounded-3xl p-6 border transition hover:bg-white/10"
                style={{ borderColor: "rgba(168,85,247,0.2)", background: "rgba(168,85,247,0.08)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold" style={{ color: "rgba(216,180,254,0.85)" }}>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-2xl border"
                        style={{ background: "rgba(168,85,247,0.15)", borderColor: "rgba(168,85,247,0.3)" }}>
                        ✉️
                      </span>
                      Correo
                    </div>
                    <h3 className="text-xl font-semibold mt-3 break-all text-white">{email}</h3>
                    <p className="mt-1 text-sm" style={{ color: "rgba(216,180,254,0.65)" }}>
                      Ideal para enviar detalles técnicos o archivos.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => copy(email, "email")}
                    className="shrink-0 rounded-xl px-3 py-2 text-sm font-semibold border transition hover:bg-white/10"
                    style={{ borderColor: "rgba(168,85,247,0.35)", color: "rgba(216,180,254,0.85)" }}
                  >
                    {copied === "email" ? "Copiado ✓" : "Copiar"}
                  </button>
                </div>

                <div className="mt-6">
                  <a
                    className="inline-flex items-center justify-center rounded-xl font-semibold px-6 py-3 text-white transition hover:brightness-110"
                    style={{ background: "#a855f7" }}
                    href={`https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent("Servicio - dEdicaTEd Services")}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cotizar por correo
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 text-xs" style={{ color: "rgba(216,180,254,0.45)" }}>
              EGMR GROUP • dEdicaTEd Services
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
