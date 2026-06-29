import React, { useEffect, useState } from "react";
import { Zap } from "lucide-react";

export default function TopBar({ onCheckout }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="topbar"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#07080b]/85 border-b border-[#1e2233]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3" data-testid="topbar-brand">
          <img
            src="/logo.png"
            alt="Privy — Predictive Complex Data Analytics"
            className="h-12 md:h-14 w-auto select-none"
            draggable="false"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-[#a0a4b0]">
          <a href="#avantaj" className="hover:text-white transition" data-testid="nav-avantaj">
            Avantaj
          </a>
          <a href="#metrik" className="hover:text-white transition" data-testid="nav-metrik">
            Metrikler
          </a>
          <a href="#terminal" className="hover:text-white transition" data-testid="nav-terminal">
            Terminal
          </a>
          <a href="#krallar" className="hover:text-white transition" data-testid="nav-krallar">
            Performans
          </a>
          <a href="#specs" className="hover:text-white transition" data-testid="nav-specs">
            Donanım
          </a>
          <a href="#sss" className="hover:text-white transition" data-testid="nav-sss">
            S.S.S.
          </a>
        </nav>

        <button
          onClick={onCheckout}
          data-testid="topbar-cta"
          className="cta-shine inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-bold tracking-wider rounded-lg text-[#07080b]"
          style={{
            background: "linear-gradient(135deg, #f5c518 0%, #facc15 100%)",
            boxShadow: "0 6px 22px rgba(245,197,24,0.30)",
          }}
        >
          <Zap className="w-4 h-4" />
          ŞİMDİ BAŞVUR
        </button>
      </div>
    </header>
  );
}
