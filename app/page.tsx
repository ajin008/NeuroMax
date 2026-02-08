"use client";

import { useState } from "react";
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
  const mainContainer = usePageAnimations();
  const ctaContainer = useCTAAnimation();

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

      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="bg-glow absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-royal-blue/10 blur-[120px] rounded-full opacity-50" />
        <div className="bg-glow absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-brand-orange/10 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="relative z-10">
        <Hero targetClass={activeClass} />

        {/* Class Selection */}
        <section className="py-12 relative flex flex-col items-center">
          {activeClass === 10 && (
            <div className="popular-badge -mb-5 z-20 bg-brand-orange text-black text-[10px] font-black px-4 py-1 rounded-full flex items-center gap-1 uppercase tracking-widest shadow-[0_0_20px_rgba(255,102,0,0.4)]">
              <TrendingUp size={12} /> Most Popular for Board Exams
            </div>
          )}
          <ClassSelector
            activeClass={activeClass}
            onClassChange={setActiveClass}
          />
        </section>

        {/* Social Proof Ticker */}
        {activeClass === 10 && (
          <div className="ticker-reveal w-full flex justify-center py-4 bg-white/2 border-y border-white/5 overflow-hidden">
            <div className="flex items-center gap-8 animate-infinite-scroll whitespace-nowrap text-gray-500 font-bold text-[10px] uppercase tracking-[0.3em]">
              <span className="flex items-center gap-2">
                <Users size={14} className="text-brand-orange" /> 1,240 Students
                Registered
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Zap size={14} className="text-brand-orange" /> 98% Success Rate
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Users size={14} className="text-brand-orange" /> 1,240 Students
                Registered
              </span>
            </div>
          </div>
        )}

        <EventDetails />
        <Mentor />
        <TheValue />

        <Footer />
      </div>

      <StickyCTA targetClass={activeClass} />
    </main>
  );
}
