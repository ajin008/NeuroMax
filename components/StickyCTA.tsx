"use client";

import React from "react";
import { Zap, Users } from "lucide-react";

interface StickyCTAProps {
  targetClass: 8 | 9 | 10;
}

export default function StickyCTA({ targetClass }: StickyCTAProps) {
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

  const originalPrice =
    targetClass === 8 ? "1,899" : targetClass === 9 ? "1,949" : "1,999";

  return (
    <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
      {/* Floating Glass Container */}
      <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-[28px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Top Info Row */}
        <div className="flex items-center justify-between gap-4 mb-1 px-1">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full border border-black bg-gray-800 flex items-center justify-center text-[8px]"
                >
                  👤
                </div>
              ))}
            </div>
            <span className="text-[10px] font-bold text-brand-orange uppercase tracking-tighter flex items-center gap-1">
              <Users size={10} /> 12 Seats Left
            </span>
          </div>
          <span className="text-[10px] font-medium text-gray-500 italic">
            Offer ends in 4h 12m
          </span>
        </div>

        <div className="flex items-center justify-between">
          {/* Price Details */}
          <div className="pl-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white tracking-tighter">
                ₹{getPrice()}
              </span>
              <span className="text-sm text-gray-500 line-through decoration-brand-orange/50">
                ₹{originalPrice}
              </span>
            </div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Limited Slot
            </div>
          </div>

          {/* SaaS Style Button */}
          <button className="relative group overflow-hidden bg-brand-orange hover:bg-orange-500 text-black font-black px-8 py-4 rounded-2xl shadow-[0_0_20px_rgba(255,102,0,0.3)] transition-all active:scale-95">
            <span className="relative z-10 flex items-center gap-2 text-sm uppercase">
              Join Now <Zap size={16} fill="currentColor" />
            </span>
            {/* Subtle Shine Effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          </button>
        </div>
      </div>
    </div>
  );
}
