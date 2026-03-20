export default function QuienesSomos() {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            ¿Quiénes somos?
          </h2>
          <p className="text-slate-600 mt-2 max-w-3xl">
            Somos EGMR GROUP, una empresa enfocada en soluciones tecnológicas para seguridad y telecomunicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Historia / Misión / Visión */}
          <div className="rounded-2xl border bg-white p-8 shadow-sm border-slate-200">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
              EGMR GROUP • Tijuana, B.C.
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-5 mb-2">Nuestra historia</h3>
            <p className="text-slate-700 leading-relaxed">
              EGMR Soluciones Tecnológicas es una empresa 100% mexicana que nació en 2020 en la ciudad de Tijuana,
              Baja California. Fundada por emprendedores apasionados por la tecnología, iniciamos con un enfoque claro:
              brindar servicios de alta calidad en cableado estructurado, soporte técnico e instalación y mantenimiento
              de equipos de vigilancia.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-slate-50 border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-2">Nuestra misión</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Asegurar que cada uno de nuestros servicios cumpla con las necesidades y calidad requerida por nuestros
                  clientes, brindándoles la seguridad de estar con los mejores.
                </p>
              </div>

              <div className="rounded-2xl border p-5 bg-slate-50 border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-2">Nuestra visión</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Convertirnos en el equipo mejor actualizado en el área de seguridad y telecomunicaciones, transformando
                  a EGMR en el mejor proveedor.
                </p>
              </div>
            </div>
          </div>

          {/* Valores */}
          <div
            className="rounded-2xl border p-8 shadow-sm border-slate-200"
            style={{
              background:
                "radial-gradient(700px 380px at 10% 10%, rgba(123,183,216,.25), transparent 55%)," +
                "radial-gradient(700px 380px at 90% 40%, rgba(31,107,134,.18), transparent 55%)," +
                "linear-gradient(135deg, rgba(15,45,58,.06), rgba(255,255,255,1))",
            }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-2">Nuestros valores</h3>
            <p className="text-slate-600 mb-6">
              La base de nuestro trabajo: calidad, comunicación e innovación.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border bg-white p-6 border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-slate-100 border border-slate-200">
                    
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Calidad</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Brindamos seguridad a nuestros clientes asegurando que nuestros servicios y/o productos cuentan con
                      calidad y regulaciones necesarias adecuadas a cada proyecto.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border bg-white p-6 border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-slate-100 border border-slate-200">
                    
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Comunicación</h4>
                    <ul className="text-slate-700 text-sm list-disc pl-5 space-y-1">
                      <li>Capacidad de reacción</li>
                      <li>Honestidad</li>
                      <li>Trabajo en equipo</li>
                      <li>Empatía</li>
                      <li>Creatividad</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border bg-white p-6 border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-slate-100 border border-slate-200">
                    
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Innovación</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Formamos a nuestro equipo continuamente para mantenernos vigentes en innovación de procesos,
                      sistemas y servicios para beneficio de nuestros clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}