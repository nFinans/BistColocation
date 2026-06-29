import React from "react";
import { Activity, Shield, Server, Target, BarChart3, Zap, ChevronRight } from "lucide-react";

const PROBLEMS = [
  {
    icon: Activity,
    title: "Gecikmeli Veri Tuzağı",
    body: "İndikatörler fiyat tutuştuktan sonra yanar. Privy ile henüz emir defterindeki yoğunluğu görün.",
  },
  {
    icon: Shield,
    title: "Kör Uçuş",
    body: "Büyük oyuncuların kurduğu tuzakları (Spoofing) Privy BIST Algoritması v2.0 ile anında filtreleyin.",
  },
  {
    icon: Server,
    title: "İletim Gecikmesi",
    body: "Normal emir iletim ve veri işleme hızları kâr marjını eritir; her milisaniye kayıptır.",
  },
];

const ADVANTAGES = [
  {
    icon: Target,
    title: "Likidite Merceği",
    body: "Anlık akışları özel algoritmalarla likidite pencerelerinde tek tek işleriz.",
  },
  {
    icon: BarChart3,
    title: "Gerçek Fiyatlama Motoru",
    body: "Gürültüden arındırılmış, gerçekleşen işlemlerle hesaplanan reel değerler.",
  },
  {
    icon: Zap,
    title: "0ms Uygulama",
    body: "Borsalara en yakın özel sunucularda mikrosaniye seviyesinde işlem.",
  },
];

export default function Comparison({ onCheckout }) {
  return (
    <section id="avantaj" className="relative py-24 px-5 sm:px-8" data-testid="comparison-section">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* PROBLEM */}
        <div className="cell p-8 sm:p-10" style={{ borderColor: "rgba(239,83,80,0.20)" }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-mono tracking-widest text-[#ef5350]">
              /// GELENEKSEL ANALİZ
            </span>
            <span className="h-px flex-1 bg-[#1e2233]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-tight">
            Geleneksel analiz sizi <span className="text-[#ef5350]">yarı yolda</span> bırakır.
          </h2>
          <div className="space-y-4">
            {PROBLEMS.map((p) => (
              <div
                key={p.title}
                className="flex gap-4 p-4 rounded-2xl"
                style={{ background: "rgba(239,83,80,0.04)", border: "1px solid rgba(239,83,80,0.18)" }}
              >
                <div className="mt-0.5">
                  <p.icon className="text-[#ef5350] w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{p.title}</h4>
                  <p className="text-[#a0a4b0] text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ADVANTAGE */}
        <div
          className="relative cell p-8 sm:p-10"
          style={{
            borderColor: "rgba(132,204,22,0.35)",
            background:
              "linear-gradient(180deg, rgba(132,204,22,0.06), rgba(245,197,24,0.03)), #0b0e14",
            boxShadow: "0 30px 80px rgba(132,204,22,0.10)",
          }}
        >
          <div
            className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl font-black rotate-3 text-xs font-mono tracking-wider"
            style={{ background: "#facc15", color: "#07080b" }}
          >
            HFT ÇÖZÜMLERİ
          </div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-mono tracking-widest text-[#a3e635]">
              /// PRIVY CO-LOCATION
            </span>
            <span className="h-px flex-1 bg-[#1e2233]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-tight">
            Privy Co-Location Makinesi{" "}
            <span style={{ color: "#a3e635" }}>avantajı</span>.
          </h2>
          <div className="space-y-4">
            {ADVANTAGES.map((a) => (
              <div
                key={a.title}
                className="flex gap-4 p-4 rounded-2xl"
                style={{ background: "rgba(132,204,22,0.05)", border: "1px solid rgba(132,204,22,0.22)" }}
              >
                <div className="mt-0.5">
                  <a.icon style={{ color: "#a3e635" }} className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{a.title}</h4>
                  <p className="text-[#a0a4b0] text-sm leading-relaxed">{a.body}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onCheckout}
            data-testid="comparison-cta"
            className="cta-shine btn-gold mt-8 w-full justify-center"
          >
            MAKİNEMİ HAZIRLA <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
