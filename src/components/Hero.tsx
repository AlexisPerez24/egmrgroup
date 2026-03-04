import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 420px at 20% 20%, rgba(123,183,216,.35), transparent 60%)," +
            "radial-gradient(800px 420px at 80% 30%, rgba(31,107,134,.28), transparent 60%)," +
            "linear-gradient(135deg, var(--egmr-ink), var(--egmr-navy))",
        }}
      />

      {/* decor */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-[color:var(--egmr-sky)]/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-28 text-white">
        {/* badge (más moderno) */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-sm text-white/80 bg-white/5 backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-[color:var(--egmr-sky)]" />
          Seguridad & telecomunicaciones
          <span className="ml-1 text-white/40">•</span>
          <span className="text-white/70">Tijuana, B.C.</span>
        </div>

        {/* Logo + heading */}
        <div className="mt-8 flex items-center gap-5">
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-white/15 bg-white/10 shadow-sm">
            <Image
              src="/egmr-logo.png"
              alt="EGMR GROUP"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              EGMR <span className="text-white/80">GROUP</span>
            </h1>
            <p className="text-white/75 mt-3 max-w-2xl leading-relaxed">
              Soluciones tecnológicas integrales para empresas: Internet, videovigilancia,
              control de acceso y soporte técnico.
            </p>
          </div>
        </div>

        {/* CTAs (más premium) */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#servicios"
            className="inline-flex items-center justify-center rounded-xl font-semibold px-8 py-3 bg-white text-black hover:bg-slate-100 transition"
          >
            Ver servicios
          </a>

          <a
            href="#cotizacion"
            className="inline-flex items-center justify-center rounded-xl font-semibold px-8 py-3 border border-white/30 hover:bg-white hover:text-black transition"
          >
            Generar cotización
          </a>
        </div>

        {/* micro detalle (muy sutil) */}
        <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-white/60">
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
            Respuesta rápida
          </span>
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
            Instalación y soporte
          </span>
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
            Atención por WhatsApp
          </span>
        </div>
      </div>
    </section>
  );
}