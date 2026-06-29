import React, { useEffect } from "react";
import { X, ExternalLink, ShieldCheck } from "lucide-react";

const WHOP_LOADER_SRC = "https://js.whop.com/static/checkout/loader.js";

function ensureWhopLoader() {
  if (document.querySelector(`script[src="${WHOP_LOADER_SRC}"]`)) return;
  const s = document.createElement("script");
  s.src = WHOP_LOADER_SRC;
  s.async = true;
  s.defer = true;
  document.head.appendChild(s);
}

export default function WhopModal({ plan, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    ensureWhopLoader();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6 modal-back"
      onClick={onClose}
      data-testid="whop-modal"
    >
      <div
        className="relative w-full max-w-3xl h-[92vh] rounded-2xl overflow-hidden flex flex-col modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between px-5 py-4 border-b shrink-0"
          style={{
            borderColor: "#1e2233",
            background: "linear-gradient(90deg, rgba(132,204,22,0.10), transparent)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #a3e635 0%, #10b981 100%)",
              }}
            >
              <ShieldCheck className="w-5 h-5 text-[#07080b]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{plan.title}</div>
              <div className="text-[11px] font-mono text-[#a0a4b0]">
                Güvenli Ödeme · Whop Checkout
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={plan.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1.5 rounded border border-[#2b2b43] text-[#a0a4b0] hover:text-white hover:border-[#a3e635] transition"
              data-testid="whop-open-new-tab"
            >
              <ExternalLink className="w-3 h-3" />
              Yeni Sekmede Aç
            </a>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-md flex items-center justify-center border border-[#2b2b43] hover:border-[#ef5350] hover:text-[#ef5350] text-[#a0a4b0] transition"
              data-testid="whop-close-btn"
              aria-label="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto" style={{ background: "#0b0e14" }}>
          {/* Whop embed mount. Loader replaces this div with the checkout iframe. */}
          <div
            key={plan.planId}
            data-whop-checkout-plan-id={plan.planId}
            data-whop-checkout-theme="dark"
            className="w-full min-h-full"
            data-testid="whop-embed-mount"
          />
          <div className="text-center text-[10px] font-mono text-[#6b7080] py-3 px-4">
            Ödeme sayfası açılmıyorsa{" "}
            <a
              href={plan.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a3e635] underline"
            >
              yeni sekmede açın
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
