import React from "react";

const METRICS = [
  {
    label: "Alıcı / Satıcı Skoru",
    title: "Kazanç Oranı",
    range: ["#10b981", "#a3e635"],
    desc: "Anlık alıcı–satıcı baskı dengesi −100 / +100 skala üzerinde.",
  },
  {
    label: "Piyasa Duyarlılığı",
    title: "Sentiment",
    range: ["#a3e635", "#facc15"],
    desc: "Mikro yapı ve emir defteri sinyallerinden türetilen duyarlılık.",
  },
  {
    label: "Oynaklık Endeksi",
    title: "Volatilite",
    range: ["#facc15", "#f5c518"],
    desc: "5dk / 15dk / 1H bantlarında dinamik volatilite haritası.",
  },
  {
    label: "Momentum",
    title: "Trend Gücü",
    range: ["#f5c518", "#ef5350"],
    desc: "Yön gücü ve sürdürülebilirlik ölçümü, kırılım takibi.",
  },
];

export default function Metrics() {
  return (
    <section id="metrik" className="py-24 px-5 sm:px-8" data-testid="metrics-section">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#a3e635]">
          /// Neleri Hesaplıyoruz
        </span>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold text-white leading-tight">
          Saniyede milyonlarca veri,
          <br />
          <span className="text-[#a0a4b0]">tek bir net sinyale</span>.
        </h2>
        <p className="mt-5 text-[#a0a4b0] max-w-2xl mx-auto">
          Privy Neural Algo, BIST emir akışını mikrosaniye seviyesinde tarayarak şu kuantitatif
          metrikleri üretir:
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {METRICS.map((m) => (
          <div
            key={m.title}
            className="cell p-6 transition-transform hover:-translate-y-1"
            data-testid={`metric-${m.title}`}
          >
            <div
              className="h-1.5 w-14 rounded-full mb-5"
              style={{ background: `linear-gradient(90deg, ${m.range[0]}, ${m.range[1]})` }}
            />
            <p className="text-[10px] tracking-widest font-mono uppercase text-[#6b7080] mb-1">
              {m.label}
            </p>
            <h4 className="text-white text-xl font-bold mb-3">{m.title}</h4>
            <p className="text-[#a0a4b0] text-sm leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
