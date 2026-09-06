import React from "react";
import { MessageCircle, Globe } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/905415478141?text=" + encodeURIComponent(
  "Merhaba, Privy Co-Location Makinesi hakkında bilgi almak istiyorum."
);
const WHATSAPP_LABEL = "+90 541 547 81 41";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "#1e2233", background: "#05060a" }}
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img
            src="/logo.png"
            alt="Privy"
            className="h-14 w-auto"
            draggable="false"
          />
          <p className="mt-5 text-sm text-[#a0a4b0] max-w-md leading-relaxed">
            Privy Neural Algo, Borsa İstanbul hisseleri için kuantitatif
            sinyaller üretir; Co-Location Makinesi yazılımı ile bu sinyaller mikrosaniye
            seviyesinde çalıştırılır. Yatırım tavsiyesi değildir; bağımsız karar
            süreçlerinde yardımcı bir algoritmik yazılımdır.
          </p>
        </div>

        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#6b7080] mb-3">
            Ürün
          </div>
          <ul className="space-y-2 text-sm text-[#a0a4b0]">
            <li><a href="#avantaj" className="hover:text-white">Avantaj</a></li>
            <li><a href="#metrik" className="hover:text-white">Metrikler</a></li>
            <li><a href="#krallar" className="hover:text-white">Performans</a></li>
            <li><a href="#specs" className="hover:text-white">Donanım</a></li>
            <li><a href="#sss" className="hover:text-white">S.S.S.</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#6b7080] mb-3">
            Destek
          </div>
          <ul className="space-y-2 text-sm text-[#a0a4b0]">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
                data-testid="footer-whatsapp"
              >
                <MessageCircle className="w-3.5 h-3.5" style={{ color: "#a3e635" }} />
                WhatsApp · {WHATSAPP_LABEL}
              </a>
            </li>
            <li>
              <a
                href="https://bist.privyalgo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
                data-testid="footer-website"
              >
                <Globe className="w-3.5 h-3.5" />
                bist.privyalgo.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="border-t py-5 px-5 sm:px-8 text-[11px] font-mono text-[#6b7080] flex flex-col sm:flex-row items-center justify-between gap-2"
        style={{ borderColor: "#1e2233" }}
      >
        <div>© {new Date().getFullYear()} NFİNANS — PrivyAlgo. Tüm hakları saklıdır.</div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] dot-pulse" />
          BIST · CO-LOCATION · v2.0
        </div>
      </div>
    </footer>
  );
}
