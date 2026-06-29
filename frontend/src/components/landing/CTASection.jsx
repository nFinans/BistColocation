import React from "react";
import { ChevronRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/905415478141?text=" + encodeURIComponent(
  "Merhaba, Privy Co-Location Makinesi hakkında bilgi almak istiyorum."
);

export default function CTASection({ onCheckout }) {
  return (
    <section className="py-24 px-5 sm:px-8" data-testid="cta-section">
      <div
        className="max-w-5xl mx-auto rounded-[40px] p-10 sm:p-16 text-center relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 700px 300px at 50% 0%, rgba(245,197,24,0.16), transparent 60%), linear-gradient(180deg, #0b0e14, #07080b)",
          border: "1px solid rgba(132,204,22,0.30)",
          boxShadow: "0 40px 120px rgba(132,204,22,0.10)",
        }}
      >
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(132,204,22,0.20), transparent 60%)",
            filter: "blur(60px)",
          }}
        />

        <p className="text-[#a0a4b0] italic mb-6 max-w-2xl mx-auto">
          "Bizim işimiz, belirsizliği yönetilebilir ve kazançlı stratejilere
          çevirmektir. Privy Co-Location Makinesi ile artık masadaki oyunu
          yöneten siz olacaksınız." — nFinans
        </p>
        <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
          Uzman ekip, <span style={{ color: "#facc15" }}>kurumsal kalite</span>.
        </h2>
        <p className="text-[#a0a4b0] max-w-2xl mx-auto mb-10">
          Bir tıkla başvurun veya WhatsApp üzerinden destek ekibimize ulaşın.
          Erişim ve kurulum 24–72 saat içinde başlatılır.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onCheckout}
            data-testid="cta-primary"
            className="cta-shine btn-primary text-base sm:text-lg"
          >
            CO-LOCATION ERİŞİMİ AL <ChevronRight className="w-5 h-5" />
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="cta-whatsapp"
            className="btn-ghost"
          >
            <MessageCircle className="w-5 h-5" style={{ color: "#a3e635" }} />
            WHATSAPP İLE DESTEK
          </a>
        </div>
      </div>
    </section>
  );
}
