export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="font-extrabold text-lg tracking-tight text-slate-900">
              EGMR <span className="text-slate-500">GROUP</span>
            </div>
            <p className="text-sm text-slate-600 mt-2 max-w-sm">
              Soluciones tecnológicas para seguridad y telecomunicaciones: Internet, videovigilancia,
              control de acceso y soporte técnico.
            </p>

            <a
              href="#top"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[color:var(--egmr-teal)] hover:underline"
            >
              Volver arriba <span className="inline-block">↑</span>
            </a>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-semibold text-slate-900">Secciones</div>
            <div className="mt-3 flex flex-col gap-2 text-sm font-semibold text-slate-700">
              <a className="hover:text-black transition" href="#servicios">
                Servicios
              </a>
              <a className="hover:text-black transition" href="#otros">
                Otros servicios
              </a>
              <a className="hover:text-black transition" href="#renta">
                Renta
              </a>
              <a className="hover:text-black transition" href="#nosotros">
                Nosotros
              </a>
              <a className="hover:text-black transition" href="#contacto">
                Contacto
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-sm font-semibold text-slate-900">¿Listo para cotizar?</div>
            <p className="text-sm text-slate-600 mt-2">
              Selecciona un servicio y envía tu solicitud por WhatsApp en menos de 1 minuto.
            </p>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href="#cotizacion"
                className="inline-flex items-center justify-center rounded-xl font-semibold px-4 py-3 bg-[color:var(--egmr-ink)] text-white hover:brightness-110 transition"
              >
                Ir a cotización
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-xl font-semibold px-4 py-3 border border-slate-200 text-slate-700 hover:bg-white transition"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} EGMR GROUP — Soluciones Tecnológicas
          </div>

          <div className="text-xs text-slate-500">
            Tijuana, B.C. • Atención por WhatsApp y correo
          </div>
        </div>
      </div>
    </footer>
  );
}