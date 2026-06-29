import React from "react";
import { CheckCircle2, Target, ChevronRight } from "lucide-react";

export default function Kings({ onCheckout }) {
  return (
    <section id="krallar" className="py-24 px-5 sm:px-8" data-testid="kings-section">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold mb-6"
            style={{
              background: "rgba(245,197,24,0.08)",
              border: "1px solid rgba(245,197,24,0.45)",
              color: "#facc15",
              letterSpacing: "0.12em",
            }}
          >
            <Target className="w-3.5 h-3.5" /> KANITLANMIŞ BAŞARI
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
            Algoritmanın <span style={{ color: "#facc15" }}>Kralları</span>.
          </h2>
          <p className="text-[#a0a4b0] text-lg leading-relaxed mb-8">
            Sadece hisseyi elinizde tutmak yerine,{" "}
            <span className="text-white font-semibold">Privy Neural Algo'nun</span>{" "}
            dinamik sinyalleriyle işlem yaptığınızda ortaya çıkan{" "}
            <span className="text-[#a3e635] font-semibold">muazzam getiri farkı</span>.
          </p>

          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div
                className="p-2 rounded-lg mt-0.5"
                style={{ background: "rgba(132,204,22,0.10)", border: "1px solid rgba(132,204,22,0.30)" }}
              >
                <CheckCircle2 style={{ color: "#a3e635" }} className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-lg mb-1">Alfa Getirisi (Reel Fark)</div>
                <p className="text-[#a0a4b0] text-sm leading-relaxed">
                  Hissenin kendi saf performansının üzerine çıkarak, algoritmanın doğru
                  noktalarda işleme girmesiyle elde edilen net ekstra kazanç.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div
                className="p-2 rounded-lg mt-0.5"
                style={{ background: "rgba(132,204,22,0.10)", border: "1px solid rgba(132,204,22,0.30)" }}
              >
                <CheckCircle2 style={{ color: "#a3e635" }} className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-lg mb-1">Duygusal Hatalara Son</div>
                <p className="text-[#a0a4b0] text-sm leading-relaxed">
                  Panik satışları ve FOMO alımları yerine matematiksel doğruluğu kanıtlanmış
                  modelle, disiplinli işlem yapın.
                </p>
              </div>
            </li>
          </ul>

          <button
            onClick={onCheckout}
            data-testid="kings-cta"
            className="cta-shine btn-primary mt-10"
          >
            Şimdi Başvur <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div
          className="rounded-3xl overflow-hidden border transition-transform duration-500 hover:scale-[1.02]"
          style={{
            borderColor: "#1e2233",
            boxShadow: "0 30px 80px rgba(245,158,11,0.18)",
          }}
        >
          <img
            src="/algo-kings.png"
            alt="Algoritma Performans Tablosu"
            className="w-full object-cover block"
          />
        </div>
      </div>
    </section>
  );
}
