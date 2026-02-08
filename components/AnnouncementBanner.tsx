"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function AnnouncementBanner() {
  return (
    <div className="relative w-full overflow-hidden border-b border-white/5 bg-[#0A0A0A] py-3 px-4">
      {/* Subtle Animated Background Pulse */}
      <div className="absolute inset-0 bg-brand-orange/5 animate-pulse" />

      <div className="relative z-10 flex items-center justify-center gap-3">
        {/* Glowing Icon */}
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange/20 shadow-[0_0_15px_rgba(255,102,0,0.4)]">
          <Sparkles className="h-3.5 w-3.5 text-brand-orange" />
        </div>

        <p className="text-sm font-bold tracking-wide text-gray-200">
          <span className="text-brand-orange uppercase mr-2 tracking-widest">
            Board Exam 2026:
          </span>
          The &apos;100 Most-Repeated Questions&apos; Series is now{" "}
          <span className="text-white underline decoration-brand-orange underline-offset-4">
            LIVE
          </span>
        </p>

        {/* Live Indicator */}
        <div className="hidden sm:flex items-center gap-1.5 ml-4 px-2 py-1 rounded-md bg-white/5 border border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="text-[10px] font-black text-white uppercase tracking-tighter">
            Online
          </span>
        </div>
      </div>
    </div>
  );
}
