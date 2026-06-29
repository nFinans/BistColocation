import React, { useState } from "react";
import TopBar from "@/components/landing/TopBar";
import Hero from "@/components/landing/Hero";
import Comparison from "@/components/landing/Comparison";
import Metrics from "@/components/landing/Metrics";
import Terminal from "@/components/landing/Terminal";
import Kings from "@/components/landing/Kings";
import Specs from "@/components/landing/Specs";
import Faq from "@/components/landing/Faq";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import WhopModal from "@/components/landing/WhopModal";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

// SADECE colocation Whop plan id (HTML dosyasından)
const COLOCATION_PLAN = {
  title: "Co-Location Makinesi Erişimi",
  subtitle: "Privy Neural Algo · BIST Co-Location",
  planId: "plan_m2vNxXmIQjyKb",
  url: "https://whop.com/checkout/plan_m2vNxXmIQjyKb/?d2c=true",
};

export default function Landing() {
  const [showWhop, setShowWhop] = useState(false);

  const openCheckout = () => setShowWhop(true);
  const closeCheckout = () => setShowWhop(false);

  return (
    <div className="min-h-screen" data-testid="landing-root">
      <TopBar onCheckout={openCheckout} />
      <Hero onCheckout={openCheckout} />
      <Comparison onCheckout={openCheckout} />
      <Metrics />
      <Terminal />
      <Kings onCheckout={openCheckout} />
      <Specs />
      <Faq />
      <CTASection onCheckout={openCheckout} />
      <Footer />

      <WhatsAppButton />
      {showWhop && <WhopModal plan={COLOCATION_PLAN} onClose={closeCheckout} />}
    </div>
  );
}
