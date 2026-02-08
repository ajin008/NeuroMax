"use client";

import React from "react";
import { Sparkles, Check } from "lucide-react";

interface ClassSelectorProps {
  activeClass: 8 | 9 | 10;
  onClassChange: (classNum: 8 | 9 | 10) => void;
}

export default function ClassSelector({
  activeClass,
  onClassChange,
}: ClassSelectorProps) {
  const classes = [
    { num: 8, price: "90" },
    { num: 9, price: "95" },
    { num: 10, price: "99" },
  ] as const;

  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-12">
      <div className="flex flex-col items-center gap-8">
        {/* Modern Tab Header */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-inner">
          <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            Exclusive Batch Selection
          </span>
        </div>

        {/* The "Unified Dock" Selector */}
        <div className="w-full p-2 grid grid-cols-3 gap-2 bg-[#0D0D0D] border border-white/10 rounded-[32px] shadow-2xl relative">
          {classes.map((cls) => {
            const isActive = activeClass === cls.num;

            return (
              <button
                key={cls.num}
                onClick={() => onClassChange(cls.num as 8 | 9 | 10)}
                className={`relative group flex flex-col items-center justify-center py-8 rounded-[24px] transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-b from-white/10 to-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                    : "hover:bg-white/[0.02]"
                }`}
              >
                {/* Visual Accent for Active State */}
                {isActive && (
                  <div className="absolute inset-x-8 top-0 h-[2px] bg-brand-orange shadow-[0_0_15px_#FF6600] rounded-full" />
                )}

                <span
                  className={`text-xs font-bold uppercase tracking-widest mb-1 transition-colors ${
                    isActive ? "text-brand-orange" : "text-gray-600"
                  }`}
                >
                  Grade
                </span>

                <div className="flex items-baseline gap-1 mb-4">
                  <span
                    className={`text-5xl font-black tracking-tighter ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {cls.num}
                  </span>
                  <span
                    className={`text-sm font-bold italic ${
                      isActive ? "text-brand-orange" : "text-gray-600"
                    }`}
                  >
                    th
                  </span>
                </div>

                {/* Price Label with Minimalist Icon */}
                <div
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    isActive ? "opacity-100 scale-100" : "opacity-40 scale-90"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      isActive
                        ? "bg-brand-orange text-black"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    <Check size={12} strokeWidth={4} />
                  </div>
                  <span
                    className={`text-xl font-black ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  >
                    ₹{cls.price}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Floating Support Info */}
        <div className="text-center space-y-2">
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
            {activeClass === 10
              ? "🔥 Targeted for 2026 Board Exams"
              : "Strategic Foundation Course"}
          </p>
          <div className="flex justify-center gap-1">
            <div
              className={`h-1 w-8 rounded-full transition-all duration-500 ${
                activeClass === 8 ? "bg-brand-orange w-12" : "bg-white/10"
              }`}
            />
            <div
              className={`h-1 w-8 rounded-full transition-all duration-500 ${
                activeClass === 9 ? "bg-brand-orange w-12" : "bg-white/10"
              }`}
            />
            <div
              className={`h-1 w-8 rounded-full transition-all duration-500 ${
                activeClass === 10 ? "bg-brand-orange w-12" : "bg-white/10"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
