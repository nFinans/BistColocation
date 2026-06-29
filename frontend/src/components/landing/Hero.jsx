import React from "react";
import { ChevronRight, Zap, Server, Cpu, Gauge } from "lucide-react";
import SignalTape from "@/components/landing/SignalTape";

export default function Hero({ onCheckout }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid bg-radial-gold pt-16 pb-16"
      data-testid="hero-section"
    >
      {/* ambient glows */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(132,204,22,0.18), transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold mb-8 fade-in"
          style={{
            background: "rgba(245,197,24,0.08)",
            border: "1px solid rgba(245,197,24,0.45)",
            color: "#facc15",
            letterSpacing: "0.12em",
          }}
          data-testid="hero-badge"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] dot-pulse" />
          NEURAL ALGO v2.0 · MİKROSANİYE HIZ · BIST CO-LOCATION
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight max-w-5xl mx-auto rise"
          data-testid="hero-headline"
        >
          Piyasanın{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #a3e635 0%, #10b981 50%, #facc15 100%)",
            }}
          >
            Niyetini Gör
          </span>
          ,<br className="hidden sm:block" />
          Hareketi <span className="text-white">Saniyeler Önce</span>{" "}
          <span style={{ color: "#facc15" }}>Yakala.</span>
        </h1>

        <p
          className="mt-8 text-lg sm:text-xl text-[#a0a4b0] max-w-3xl mx-auto leading-relaxed rise"
          style={{ animationDelay: ".12s" }}
          data-testid="hero-subheadline"
        >
          Privy Neural Algo'nun karmaşık veri analitiğini, Borsa İstanbul'a
          en yakın veri merkezlerinde doğrudan{" "}
          <span className="text-white font-semibold">Co-Location Makinesi</span>{" "}
          üzerinde çalıştırın. Gecikme süresini{" "}
          <span className="text-[#a3e635] font-semibold">sıfıra</span> indirin,
          kurumsal oyuncuların önüne geçin.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 rise"
          style={{ animationDelay: ".24s" }}
        >
          <button
            onClick={onCheckout}
            data-testid="hero-cta-primary"
            className="cta-shine btn-primary text-base sm:text-lg"
          >
            <Zap className="w-5 h-5" />
            CO-LOCATION ERİŞİMİ AL
            <ChevronRight className="w-5 h-5" />
          </button>
          <a href="#krallar" data-testid="hero-cta-secondary" className="btn-ghost">
            PERFORMANSI GÖR
          </a>
        </div>

        {/* metric strip */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 rise"
          style={{ animationDelay: ".36s" }}
        >
          <MiniStat icon={Gauge} label="GECİKME" value="< 1ms" accent="#a3e635" />
          <MiniStat icon={Server} label="UPTIME" value="99.99%" accent="#facc15" />
          <MiniStat icon={Cpu} label="VERİ İŞLEME" value="1M+ tick/sn" accent="#10b981" />
          <MiniStat icon={Zap} label="EMIR HIZI" value="Mikrosaniye" accent="#f5c518" />
        </div>
      </div>

      <SignalTape />
    </section>
  );
}

function MiniStat({ icon: Icon, label, value, accent }) {
  return (
    <div
      className="cell px-4 py-4 text-left"
      data-testid={`hero-mini-${label}`}
      style={{ borderColor: "rgba(43,43,67,0.7)" }}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <Icon className="w-3.5 h-3.5" style={{ color: accent }} />
        <span className="text-[10px] font-mono tracking-widest text-[#6b7080]">
          {label}
        </span>
      </div>
      <div className="font-mono text-lg font-bold" style={{ color: accent }}>
        {value}
      </div>
    </div>
  );
}
