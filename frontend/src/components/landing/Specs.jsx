import React from "react";
import { Server, Cpu, Network, ShieldCheck, HardDrive, Clock } from "lucide-react";

const SPECS = [
  {
    icon: Server,
    title: "Co-Location Sunucu",
    color: "#a3e635",
    items: [
      "Borsa İstanbul veri merkezine fiziksel yakınlık",
      "Doğrudan FIX bağlantısı",
      "İzole kabin / rack içinde özel makine",
    ],
  },
  {
    icon: Cpu,
    title: "İşlemci & Bellek",
    color: "#facc15",
    items: [
      "Yüksek frekanslı Xeon / EPYC sınıfı CPU",
      "ECC RAM ile veri bütünlüğü",
      "NVMe SSD üzerinde sıcak veri",
    ],
  },
  {
    icon: Network,
    title: "Düşük Gecikmeli Ağ",
    color: "#10b981",
    items: [
      "Doğrudan cross-connect bağlantı",
      "10/25 Gbps redundant uplink",
      "Sub-millisecond emir yolu",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Güvenlik & Erişim",
    color: "#f5c518",
    items: [
      "2FA + IP whitelist",
      "Tam denetim ve loglama",
      "Donanım izolasyonu",
    ],
  },
  {
    icon: HardDrive,
    title: "Kurulum & Algo",
    color: "#a3e635",
    items: [
      "Privy Neural Algo v2.0 önyüklü",
      "MS SQL & yüksek hızlı veri katmanı",
      "Python / Flask trading stack",
    ],
  },
  {
    icon: Clock,
    title: "Süreklilik",
    color: "#facc15",
    items: [
      "99.99% uptime hedefi",
      "Yedekli güç ve soğutma",
      "Anlık izleme + bildirim",
    ],
  },
];

export default function Specs() {
  return (
    <section
      id="specs"
      className="py-24 px-5 sm:px-8"
      style={{ background: "linear-gradient(180deg, #07080b, #0b0e14)" }}
      data-testid="specs-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#a3e635]">
            /// Donanım & Altyapı
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold text-white leading-tight">
            Kurumsal sınıf{" "}
            <span style={{ color: "#facc15" }}>HFT donanımı</span>,
            <br className="hidden sm:block" />
            bireysel trader'a açıldı.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SPECS.map((s) => (
            <div
              key={s.title}
              className="cell p-6 transition-transform hover:-translate-y-1"
              data-testid={`spec-${s.title}`}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: `${s.color}18`,
                  border: `1px solid ${s.color}55`,
                }}
              >
                <s.icon className="w-5 h-5" style={{ color: s.color }} />
              </div>
              <h3 className="text-white text-lg font-bold mb-3">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="text-[#a0a4b0] text-sm flex gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ background: s.color }}
                    />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
