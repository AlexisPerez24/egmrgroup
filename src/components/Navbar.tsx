"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#otros", label: "Otros" },
  { href: "#renta", label: "Renta" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  // Scroll spy (sección activa)
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // elegimos la entrada visible con mayor "intersectionRatio"
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) {
          setActive("#" + visible.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0.1, 0.2, 0.3, 0.4],
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Sombra/blur al scrollear
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function close() {
    setOpen(false);
  }

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b backdrop-blur",
        scrolled ? "bg-white/80 shadow-sm" : "bg-white/60",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3" onClick={close}>
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-slate-200 bg-white">
            <Image
              src="/egmr-logo.png"
              alt="EGMR GROUP logo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="font-extrabold text-lg tracking-tight text-slate-900">
              EGMR <span className="text-slate-500">GROUP</span>
            </div>
            <div className="hidden sm:block text-xs text-slate-600">
              Soluciones tecnológicas
            </div>
          </div>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                className={[
                  "transition",
                  isActive
                    ? "text-[color:var(--egmr-teal)]"
                    : "text-slate-700 hover:text-black",
                ].join(" ")}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#cotizacion"
            className="hidden md:inline-flex items-center justify-center rounded-xl font-semibold transition px-4 py-2 bg-[color:var(--egmr-ink)] text-white hover:brightness-110"
          >
            Cotizar
          </a>

          {/* Botón móvil */}
          <button
            aria-label="Abrir menú"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden border-t bg-white/90 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3 text-sm font-semibold">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className={[
                    "rounded-xl px-3 py-2 transition",
                    isActive
                      ? "bg-slate-100 text-[color:var(--egmr-teal)]"
                      : "text-slate-700 hover:bg-slate-100",
                  ].join(" ")}
                >
                  {l.label}
                </a>
              );
            })}

            <a
              href="#cotizacion"
              onClick={close}
              className="mt-2 rounded-xl px-4 py-3 bg-[color:var(--egmr-ink)] text-white text-center"
            >
              Cotizar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}