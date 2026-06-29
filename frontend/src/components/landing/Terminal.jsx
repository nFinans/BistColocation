import React from "react";

export default function Terminal() {
  return (
    <section
      id="terminal"
      className="relative py-24 px-5 sm:px-8"
      style={{ background: "linear-gradient(180deg, #0b0e14, #07080b)" }}
      data-testid="terminal-section"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#facc15]">
            /// Terminal Görünümü
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold text-white leading-tight">
            Karanlık odayı{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #facc15, #a3e635)" }}
            >
              aydınlatıyoruz
            </span>
            .
          </h2>
          <p className="mt-5 text-[#a0a4b0] max-w-2xl mx-auto text-lg">
            Geleneksel grafiklerin ötesine geçin. Privy Algo, emir akışını ve
            likiditeyi analiz ederek piyasanın gerçek yönünü gösterir.
          </p>
        </div>

        <div
          className="relative rounded-3xl overflow-hidden float-y"
          style={{
            border: "1px solid #1e2233",
            boxShadow:
              "0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(245,197,24,0.10)",
          }}
        >
          <img
            src="/terminal.png"
            alt="Privy Algo Terminal"
            className="w-full object-cover block"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <FeatCard
            title="Net Sinyaller (AL / SAT)"
            color="#a3e635"
            body="Karmaşık veriler süzülerek aksiyona dönüştürülebilen net işlem sinyallerine çevrilir."
          />
          <FeatCard
            title="Market Score & Momentum"
            color="#facc15"
            body="Saniyeler içinde güncellenen alış / satış baskısı odaklı kuantitatif skorlar."
          />
          <FeatCard
            title="Gerçek Fiyat Tespiti"
            color="#10b981"
            body="AVG Price ile Real Price arasındaki uyumsuzluğu yakalayıp trend kırılımlarını önceden haber verir."
          />
        </div>
      </div>
    </section>
  );
}

function FeatCard({ title, body, color }) {
  return (
    <div className="cell p-6" style={{ borderColor: "rgba(43,43,67,0.7)" }}>
      <div
        className="h-1 w-10 rounded-full mb-4"
        style={{ background: color }}
      />
      <h4 className="font-bold mb-2 text-lg" style={{ color }}>
        {title}
      </h4>
      <p className="text-[#a0a4b0] text-sm leading-relaxed">{body}</p>
    </div>
  );
}
