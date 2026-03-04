"use client";

import { useState } from "react";

export default function Contacto() {
  const whatsappNumber = "526645601401"; // +52 664 560 1401
  const phoneDisplay = "664 560 1401";
  const email = "contacto@egmrgroup.com";

  const whatsappMsg = encodeURIComponent(
    "Hola, me gustaría solicitar información y una cotización de EGMR GROUP."
  );

  const [copied, setCopied] = useState<"" | "phone" | "email">("");

  async function copy(text: string, key: "phone" | "email") {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      window.setTimeout(() => setCopied(""), 1200);
    } catch {
      // fallback simple
      setCopied(key);
      window.setTimeout(() => setCopied(""), 1200);
    }
  }

  return (
    <section id="contacto" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="relative overflow-hidden rounded-[28px] p-10 text-white border border-white/10"
          style={{
            background:
              "radial-gradient(900px 420px at 20% 20%, rgba(123,183,216,.35), transparent 60%)," +
              "radial-gradient(800px 420px at 80% 30%, rgba(31,107,134,.28), transparent 60%)," +
              "linear-gradient(135deg, var(--egmr-ink), var(--egmr-navy))",
          }}
        >
          {/* decor */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-[color:var(--egmr-sky)]/10 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight mb-2">
              Contáctanos
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl">
              WhatsApp y correo disponibles para atención y cotizaciones. Respuesta rápida y asesoría personalizada.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* WhatsApp */}
              <div className="group rounded-3xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/80">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-2xl bg-white/10 border border-white/10">
                        💬
                      </span>
                      WhatsApp
                    </div>

                    <h3 className="text-xl font-semibold mt-3">{phoneDisplay}</h3>
                    <p className="text-white/70 mt-1 text-sm">
                      Atención rápida para cotizaciones y soporte.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => copy(phoneDisplay, "phone")}
                    className="shrink-0 rounded-xl px-3 py-2 text-sm font-semibold border border-white/20 hover:bg-white/10 transition"
                  >
                    {copied === "phone" ? "Copiado ✓" : "Copiar"}
                  </button>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    className="inline-flex items-center justify-center rounded-xl font-semibold px-6 py-3 bg-white text-black hover:bg-slate-100 transition"
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enviar mensaje
                  </a>

                  <a
                    className="inline-flex items-center justify-center rounded-xl font-semibold px-6 py-3 border border-white/30 hover:bg-white hover:text-black transition"
                    href={`tel:+${whatsappNumber}`}
                  >
                    Llamar
                  </a>
                </div>
              </div>

              {/* Correo */}
              <div className="group rounded-3xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/80">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-2xl bg-white/10 border border-white/10">
                        ✉️
                      </span>
                      Correo
                    </div>

                    <h3 className="text-xl font-semibold mt-3 break-all">{email}</h3>
                    <p className="text-white/70 mt-1 text-sm">
                      Ideal para enviar detalles técnicos o archivos.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => copy(email, "email")}
                    className="shrink-0 rounded-xl px-3 py-2 text-sm font-semibold border border-white/20 hover:bg-white/10 transition"
                  >
                    {copied === "email" ? "Copiado ✓" : "Copiar"}
                  </button>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    className="inline-flex items-center justify-center rounded-xl font-semibold px-6 py-3 border border-white/30 hover:bg-white hover:text-black transition"
                    href={`mailto:${email}`}
                  >
                    Enviar correo
                  </a>

                  <a
                    className="inline-flex items-center justify-center rounded-xl font-semibold px-6 py-3 bg-white text-black hover:bg-slate-100 transition"
                    href={`mailto:${email}?subject=${encodeURIComponent(
                      "Cotización - EGMR GROUP"
                    )}`}
                  >
                    Cotizar por correo
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 text-xs text-white/60">
              EGMR GROUP • Soluciones Tecnológicas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}