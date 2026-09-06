import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Co-Location Makinesi tam olarak nedir?",
    a: "Borsa İstanbul'un veri merkezine fiziksel olarak en yakın noktada, sizin için özelleştirilmiş, Privy Neural Algo v2.0 yazılımı önyüklü, izole bir fiziksel sunucudur. Emirleriniz ve veri akışınız mikrosaniye seviyesinde işlenir.",
  },
  {
    q: "Kuruluma ne kadar sürede başlayabilirim?",
    a: "Başvuru ve ödemenin ardından donanım tahsisi ve algoritmik yazılım kurulumu genellikle 24–72 saat içinde tamamlanır. Süreç boyunca özel bir sunucu ile iletişimde kalırsınız.",
  },
  {
    q: "Privy Neural Algo v2.0 neyi farklı yapar?",
    a: "Klasik göstergeler yerine emir defteri yoğunluğu, akıllı para/likidite akışı, sentiment ve volatiliteyi birleştirerek algoritmik sinyaller, Hedge Wall, MaxBuy/MaxSell kümeleri üretir. Sinyaller gerçek zamanlıdır.",
  },
  {
    q: "Yatırım tavsiyesi midir?",
    a: "Hayır. Privy bir analiz ve karar destek aracıdır. Sunulan veriler, sinyaller ve görselleştirmeler yatırım tavsiyesi olarak yorumlanmamalıdır. Tüm kararlar algoritmik yazılımlara aittir.",
  },
  {
    q: "Sözleşme süresi ve iptal nasıl işliyor?",
    a: "Sözleşme detayları başvuru aşamasında size iletilir. İptal ve süreç soruları için WhatsApp destek hattımızdan dilediğiniz an ulaşabilirsiniz.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="sss" className="py-24 px-5 sm:px-8" data-testid="faq-section">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#a3e635]">
            /// S.S.S.
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold text-white leading-tight">
            Sık sorulanlar.
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="cell overflow-hidden"
                data-testid={`faq-item-${i}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className="text-white font-semibold">{f.q}</span>
                  <span
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: isOpen ? "#facc15" : "rgba(255,255,255,0.04)",
                      color: isOpen ? "#07080b" : "#a0a4b0",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-[#a0a4b0] text-sm leading-relaxed fade-in">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
