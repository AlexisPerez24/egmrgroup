"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive("#" + visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.1, 0.2, 0.3, 0.4] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;600;700&display=swap');

        .nav-root {
          position: sticky;
          top: 0;
          z-index: 50;
          transition: background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .nav-root::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(56,189,248,0.18) 20%,
            rgba(56,189,248,0.35) 50%,
            rgba(56,189,248,0.18) 80%,
            transparent 100%
          );
        }
        .nav-root-top {
          background: rgba(7, 11, 20, 0.55);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: none;
        }
        .nav-root-scrolled {
          background: rgba(5, 8, 17, 0.92);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          box-shadow: 0 2px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(56,189,248,0.12);
        }

        /* ── LOGO ── */
        .nav-logo-ring {
          position: absolute;
          inset: -3px;
          border-radius: 14px;
          border: 1px solid rgba(125,211,252,0.25);
          background: conic-gradient(
            from 0deg,
            rgba(56,189,248,0.45),
            transparent 40%,
            rgba(56,189,248,0.4) 70%,
            transparent
          );
          animation: nav-spin 9s linear infinite;
        }
        @keyframes nav-spin {
          to { transform: rotate(360deg); }
        }
        .nav-logo-inner {
          position: absolute;
          inset: 4px;
          border-radius: 10px;
          overflow: hidden;
        }
        .nav-brand-name {
          font-weight: 900;
          font-size: 15px;
          letter-spacing: 0.04em;
          color: #fff;
          line-height: 1.15;
        }
        .nav-brand-name span {
          color: #38bdf8;
        }
        .nav-brand-sub {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(125,211,252,0.4);
          line-height: 1;
        }

        /* ── DESKTOP LINKS ── */
        .nav-link {
          position: relative;
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(186,230,253,0.6);
          text-decoration: none;
          padding: 6px 0;
          transition: color 0.25s;
          white-space: nowrap;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #38bdf8, rgba(56,189,248,0));
          border-radius: 99px;
          transition: width 0.3s cubic-bezier(.22,1,.36,1);
        }
        .nav-link:hover {
          color: rgba(186,230,253,1);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link-active {
          color: #38bdf8 !important;
        }
        .nav-link-active::after {
          width: 100% !important;
          background: linear-gradient(90deg, #38bdf8, rgba(56,189,248,0.3)) !important;
        }

        /* ── CTA BUTTON ── */
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 20px;
          border-radius: 10px;
          border: 1px solid rgba(56,189,248,0.35);
          background: rgba(56,189,248,0.07);
          color: rgba(125,211,252,0.9);
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.25s, box-shadow 0.25s, border-color 0.25s, color 0.25s;
          backdrop-filter: blur(10px);
          white-space: nowrap;
        }
        .nav-cta:hover {
          background: rgba(56,189,248,0.15);
          border-color: rgba(56,189,248,0.55);
          box-shadow: 0 0 18px rgba(56,189,248,0.22), inset 0 0 12px rgba(56,189,248,0.06);
          color: #bae6fd;
        }

        /* ── HAMBURGER ── */
        .nav-ham {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          padding: 7px;
          border-radius: 10px;
          border: 1px solid rgba(56,189,248,0.2);
          background: rgba(56,189,248,0.05);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .nav-ham:hover {
          background: rgba(56,189,248,0.1);
          border-color: rgba(56,189,248,0.35);
        }
        .nav-ham-bar {
          height: 1.5px;
          background: rgba(186,230,253,0.75);
          border-radius: 99px;
          transition: transform 0.3s cubic-bezier(.22,1,.36,1), opacity 0.2s, width 0.3s;
          transform-origin: center;
        }

        /* ── MOBILE MENU ── */
        .nav-mobile {
          border-top: 1px solid rgba(56,189,248,0.12);
          background: rgba(4,6,14,0.97);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          padding: 16px 20px 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          animation: slideDown 0.25s cubic-bezier(.22,1,.36,1);
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-mob-link {
          display: block;
          padding: 12px 16px;
          border-radius: 12px;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(186,230,253,0.65);
          text-decoration: none;
          border: 1px solid transparent;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .nav-mob-link:hover,
        .nav-mob-link-active {
          background: rgba(56,189,248,0.08);
          border-color: rgba(56,189,248,0.2);
          color: #7dd3fc;
        }
        .nav-mob-cta {
          display: block;
          margin-top: 8px;
          padding: 13px 16px;
          border-radius: 12px;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          background: rgba(56,189,248,0.1);
          border: 1px solid rgba(56,189,248,0.3);
          color: #7dd3fc;
          text-align: center;
          text-decoration: none;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .nav-mob-cta:hover {
          background: rgba(56,189,248,0.18);
          box-shadow: 0 0 16px rgba(56,189,248,0.2);
        }

      `}</style>

      <header className={`nav-root ${scrolled ? "nav-root-scrolled" : "nav-root-top"}`}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── Logo ── */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
            <div style={{ position: "relative", width: 40, height: 40, flexShrink: 0 }}>
              <div className="nav-logo-ring" />
              <div className="nav-logo-inner">
                <Image
                  src="/icons/egmr-logo.png"
                  alt="EGMR GROUP"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div>
              <div className="nav-brand-name">
                EGMR <span>GROUP</span>
              </div>
              <div className="nav-brand-sub">Soluciones tecnológicas</div>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link${active === l.href ? " nav-link-active" : ""}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* ── Right side ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a href="#contacto" className="nav-cta hidden md:inline-flex">
              Cotizar
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Hamburger */}
            <button
              aria-label="Menú"
              className="md:hidden nav-ham"
              style={{ outline: "none", background: open ? "rgba(56,189,248,0.12)" : undefined }}
              onClick={() => setOpen((v) => !v)}
            >
              <div
                className="nav-ham-bar"
                style={{
                  transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
                }}
              />
              <div
                className="nav-ham-bar"
                style={{ opacity: open ? 0 : 1 }}
              />
              <div
                className="nav-ham-bar"
                style={{
                  transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        {open && (
          <div className="nav-mobile md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-mob-link${active === l.href ? " nav-mob-link-active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="nav-mob-cta"
              onClick={() => setOpen(false)}
            >
              Cotizar →
            </a>
          </div>
        )}
      </header>
    </>
  );
}
