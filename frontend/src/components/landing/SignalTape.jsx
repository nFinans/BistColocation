import React from "react";

const TICKS = [
  { sym: "THYAO", chg: "+2.45%", sig: "TF AL", price: "327.83", color: "#a3e635" },
  { sym: "EUPWR", chg: "+4.58%", sig: "TF AL", price: "92.71", color: "#a3e635" },
  { sym: "TOASO", chg: "-1.30%", sig: "TF SAT", price: "215.40", color: "#ef5350" },
  { sym: "GESAN", chg: "+8.47%", sig: "TF AL", price: "95.76", color: "#a3e635" },
  { sym: "BRYAT", chg: "-1.21%", sig: "TF SAT", price: "98.48", color: "#ef5350" },
  { sym: "ASTOR", chg: "+1.12%", sig: "TF AL", price: "72.33", color: "#a3e635" },
  { sym: "SISE", chg: "-2.42%", sig: "TF SAT", price: "97.58", color: "#ef5350" },
  { sym: "SKBNK", chg: "+0.77%", sig: "TF AL", price: "97.99", color: "#a3e635" },
  { sym: "AKBNK", chg: "+0.55%", sig: "TF AL", price: "24.20", color: "#a3e635" },
  { sym: "ENERY", chg: "+2.22%", sig: "TF AL", price: "88.84", color: "#a3e635" },
];

export default function SignalTape() {
  const list = [...TICKS, ...TICKS];
  return (
    <div className="relative mt-16 tape overflow-hidden" data-testid="signal-tape">
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0a0d14, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0a0d14, transparent)" }}
      />
      <div className="flex items-center gap-10 py-3 scroll-x whitespace-nowrap" style={{ width: "200%" }}>
        <div className="flex items-center gap-2 px-5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] dot-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-[#a3e635]">CANLI · BIST CO-LOCATION</span>
        </div>
        {list.map((t, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <span className="text-sm font-semibold text-white">{t.sym}</span>
            <span className="font-mono text-xs text-[#a0a4b0]">{t.price}</span>
            <span className="font-mono text-xs" style={{ color: t.color }}>{t.chg}</span>
            <span
              className="text-[9px] font-mono px-1.5 py-0.5 rounded border"
              style={{ borderColor: t.color, color: t.color }}
            >
              {t.sig}
            </span>
            <span className="text-[#2b2b43]">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
