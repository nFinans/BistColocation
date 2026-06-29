# Privy Co-Location Makinesi — Landing Page PRD

## Original Problem Statement
Kullanıcı, BIST Terminal React projesi (zip + public GitHub repo) ile basit tek-sayfalık Privy Co-Location HTML dosyasını birleştirip, profesyonel tek-sayfalık bir co-location makine talep / satış landing'ine dönüştürmek istedi.

## Tasarım & Marka
- Logo: `/app/frontend/public/logo.png` (yüklenen PRIVY logosu)
- Renk paleti: siyah/koyu (#07080b, #0b0e14) + lime (#a3e635, #84cc16) + emerald (#10b981) + gold (#facc15, #f5c518) — logo tonlarıyla uyumlu
- Tipografi: Outfit (headlines) + JetBrains Mono (mono/labels)
- Dil: Sadece Türkçe

## Implemented (Iteration 1 — 2026-01)
- React tek-sayfa landing (`/app/frontend/src/pages/Landing.jsx`)
- Bölümler: TopBar, Hero (logo + canlı sinyal tape), Karşılaştırma, Metrikler, Terminal, Algo Kings, Donanım/Specs, S.S.S., CTA, Footer
- **Whop Modal** (`WhopModal.jsx`) — `data-whop-checkout-plan-id="plan_m2vNxXmIQjyKb"` iframe içinde aynı sayfada açılıyor (HTML'deki tek colocation linki). Zip/GitHub'daki diğer planlar kullanılmadı.
- "Şimdi Başvur" CTA'ları (TopBar, Hero, Karşılaştırma, Kings, CTA Section) hepsi aynı modal'ı tetikliyor.
- WhatsApp yüzen butonu + footer + CTA section linki → `https://wa.me/905415478141` (ön-yazılı destek mesajıyla)
- Talep formu yok (kullanıcı vazgeçti)
- SendGrid entegrasyonu yok (form iptal edildi)

## Architecture
- Frontend: React 19 + Tailwind + craco
- Backend: Mevcut FastAPI iskeleti dokunulmadı (static landing)
- Whop checkout loader: `https://js.whop.com/static/checkout/loader.js` (modal açılınca lazy-load)

## Backlog / İleride
- P1: SEO meta (OG image, Twitter cards) ve favicon optimizasyonu
- P1: Mobil performans testi
- P2: Privy Algo blog / dokümantasyon linki entegrasyonu
- P2: Gerçek terminal screenshot'ı eklenirse görsel yükleme

## Notes
- Privyalgo.com'daki terminal ve algo_kings görselleri eksik dönerse, görseller graceful placeholder ile gizleniyor.
