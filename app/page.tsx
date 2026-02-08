"use client";

import { useState, useEffect } from "react";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Hero from "@/components/Hero";
import ClassSelector from "@/components/ClassSelector";
import EventDetails from "@/components/EventDetails";
import TheValue from "@/components/TheValue";
import Mentor from "@/components/Mentor";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { Zap, TrendingUp, Users } from "lucide-react";
import { usePageAnimations } from "@/components/hooks/usePageAnimations";
import { useCTAAnimation } from "@/components/hooks/useCTAAnimation";

export default function Home() {
  const [activeClass, setActiveClass] = useState<8 | 9 | 10>(10);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize animations only after component is mounted
  const mainContainer = usePageAnimations();
  const ctaContainer = useCTAAnimation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getPrice = () => {
    const prices = { 8: "90", 9: "95", 10: "99" };
    return prices[activeClass];
  };

  return (
    <main
      ref={mainContainer}
      className="min-h-screen bg-background text-foreground selection:bg-brand-orange/30 overflow-x-hidden"
    >
      <AnnouncementBanner />

      {/* Simplified Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-royal-blue/5 blur-[80px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-orange/5 blur-[80px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Hero targetClass={activeClass} />

        {/* Class Selection */}
        <section className="py-12 relative flex flex-col items-center">
          {activeClass === 10 && (
            <div className="mb-4 z-20 bg-brand-orange text-black text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 uppercase tracking-wide shadow-lg">
              <TrendingUp size={14} /> Most Popular for Board Exams
            </div>
          )}
          <ClassSelector
            activeClass={activeClass}
            onClassChange={setActiveClass}
          />
        </section>

        {/* Social Proof Ticker */}
        {activeClass === 10 && (
          <div className="w-full flex justify-center py-6 bg-linear-to-r from-white/5 to-white/2 border-y border-white/10">
            <div className="flex items-center gap-8 px-4">
              <span className="flex items-center gap-2 text-sm">
                <Users size={16} className="text-brand-orange" />
                <span className="font-semibold">1,240</span> Students Registered
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-2 text-sm">
                <Zap size={16} className="text-brand-orange" />
                <span className="font-semibold">98%</span> Success Rate
              </span>
            </div>
          </div>
        )}

        <EventDetails />
        <Mentor />
        <TheValue />

        <Footer />
      </div>

      <div ref={ctaContainer}>
        <StickyCTA targetClass={activeClass} />
      </div>
    </main>
  );
}
