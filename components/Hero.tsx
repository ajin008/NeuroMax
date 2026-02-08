"use client";

import React from "react";

interface HeroProps {
  targetClass: 8 | 9 | 10;
}

export default function Hero({ targetClass }: HeroProps) {
  const getPrice = () => {
    switch (targetClass) {
      case 8:
        return "90";
      case 9:
        return "95";
      case 10:
        return "99";
      default:
        return "99";
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-background pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-brand-orange/10 blur-[120px] rounded-full" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* Modern Badge */}
        <div className="flex justify-center mb-8">
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-linear-to-r from-brand-orange to-royal-blue rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative px-6 py-2 bg-black rounded-full border border-white/10 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-300">
                Class {targetClass} CBSE Board Prep 2026
              </span>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Master the Top 100
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-brand-orange to-orange-400">
              Most-Asked Questions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Stop drowning in textbooks. We analyzed 10 years of papers to give
            you the exact questions that appear year after year.
            <span className="text-white font-medium">
              {" "}
              2 Hours of power-packed learning.
            </span>
          </p>
        </div>

        {/* SaaS Style Bento Grid for Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {/* Card 1 */}
          <div className="group relative p-8 rounded-3xl bg-card border border-white/5 hover:border-brand-orange/30 transition-all">
            <div className="text-4xl font-bold text-white mb-2">100+</div>
            <p className="text-gray-500 font-medium">
              Curated Questions from last 10 years
            </p>
          </div>

          {/* Card 2 - Highlighted */}
          <div className="relative p-8 rounded-3xl bg-linear-to-b from-brand-orange/20 to-transparent border border-brand-orange/20">
            <div className="text-4xl font-bold text-brand-orange mb-2">
              2 Hours
            </div>
            <p className="text-gray-300 font-medium text-lg italic">
              The only revision you need before the exam.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-card border border-white/5">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold text-white">
                ₹{getPrice()}
              </span>
              <span className="text-gray-500 line-through text-lg">₹1,999</span>
            </div>
            <p className="text-gray-500 font-medium">
              One-time slot. No replays.
            </p>
          </div>
        </div>

        {/* High-Contrast CTA */}
        <div className="flex flex-col items-center gap-6">
          <button className="group relative px-12 py-5 bg-brand-orange rounded-2xl text-black font-black text-xl overflow-hidden shadow-[0_0_40px_rgba(255,102,0,0.3)] hover:shadow-[0_0_60px_rgba(255,102,0,0.5)] transition-all active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              BUY NOW & JOIN WHATSAPP
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>

          {/* Urgency Counter */}
          <div className="flex items-center gap-4 text-brand-orange font-bold animate-pulse">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[10px]"
                >
                  👤
                </div>
              ))}
            </div>
            <span>Almost Full! Only 5 seats left for this batch.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
