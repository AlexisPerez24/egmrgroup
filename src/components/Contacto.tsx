"use client";

import { useState } from "react";

interface Props {
  color?: string;
}

export default function Contacto({ color = "#38bdf8" }: Props) {
  const whatsappNumber = "526645601401";
  const phoneDisplay = "664 560 1401";
  const email = "contacto@egmrgroup.com";

  const whatsappMsg = encodeURIComponent(
    "Hola, me gustaría solicitar información y una cotización de EGMR GROUP."
  );

  const [copied, setCopied] = useState<"" | "phone" | "email">("");

  async function copy(text: string, key: "phone" | "email") {
    try {
      await navigator.clipboard.writeText(text);
    } catch { /* noop */ }
    setCopied(key);
    window.setTimeout(() => setCopied(""), 1200);
  }

  return (
    <section id="contacto" className="relative py-16 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <div
          className="relative overflow-hidden rounded-[28px] p-10 text-white border"
          style={{
            borderColor: `${color}30`,
            background:
              `radial-gradient(900px 420px at 20% 20%, ${color}28, transparent 60%),` +
              `radial-gradient(800px 420px at 80% 30%, ${color}18, transparent 60%),` +
              `linear-gradient(135deg, rgba(10,16,30,0.95), rgba(7,11,20,0.98))`,
          }}
        >
          {/* Decor */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full blur-3xl"
            style={{ background: `${color}0a` }} />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full blur-3xl"
            style={{ background: `${color}08` }} />

          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight mb-2">Contáctanos</h2>
            <p className="text-white/80 mb-8 max-w-2xl">
              WhatsApp y correo disponibles para atención y cotizaciones. Respuesta rápida y asesoría personalizada.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* WhatsApp */}
              <div className="rounded-3xl p-6 border bg-white/5 hover:bg-white/10 transition"
                style={{ borderColor: `${color}20` }}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/80">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-2xl border"
                        style={{ background: `${color}15`, borderColor: `${color}30` }}>
                        💬
                      </span>
                      WhatsApp
                    </div>
                    <h3 className="text-xl font-semibold mt-3">{phoneDisplay}</h3>
                    <p className="text-white/70 mt-1 text-sm">Atención rápida para cotizaciones y soporte.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => copy(phoneDisplay, "phone")}
                    className="shrink-0 rounded-xl px-3 py-2 text-sm font-semibold border border-white/20 hover:bg-white/10 transition"
                    style={{ borderColor: `${color}30`, color }}
                  >
                    {copied === "phone" ? "Copiado ✓" : "Copiar"}
                  </button>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    className="inline-flex items-center justify-center rounded-xl font-semibold px-6 py-3 transition text-white"
                    style={{ background: color }}
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enviar mensaje
                  </a>
                  <a
                    className="inline-flex items-center justify-center rounded-xl font-semibold px-6 py-3 border transition hover:bg-white/10"
                    style={{ borderColor: `${color}40`, color }}
                    href={`tel:+${whatsappNumber}`}
                  >
                    Llamar
                  </a>
                </div>
              </div>

              {/* Correo */}
              <div className="rounded-3xl p-6 border bg-white/5 hover:bg-white/10 transition"
                style={{ borderColor: `${color}20` }}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/80">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-2xl border"
                        style={{ background: `${color}15`, borderColor: `${color}30` }}>
                        ✉️
                      </span>
                      Correo
                    </div>
                    <h3 className="text-xl font-semibold mt-3 break-all">{email}</h3>
                    <p className="text-white/70 mt-1 text-sm">Ideal para enviar detalles técnicos o archivos.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => copy(email, "email")}
                    className="shrink-0 rounded-xl px-3 py-2 text-sm font-semibold border transition hover:bg-white/10"
                    style={{ borderColor: `${color}30`, color }}
                  >
                    {copied === "email" ? "Copiado ✓" : "Copiar"}
                  </button>
                </div>
                <div className="mt-6">
                  <a
                    className="inline-flex items-center justify-center rounded-xl font-semibold px-6 py-3 transition text-white"
                    style={{ background: color }}
                    href={`https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent("Servicio - EGMR GROUP")}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cotizar por correo
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 text-xs text-white/60">EGMR GROUP • Soluciones Tecnológicas</div>
          </div>
        </div>
      </div>
    </section>
  );
}
