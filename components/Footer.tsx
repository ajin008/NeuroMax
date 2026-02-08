"use client";

import React from "react";
import { useFooterAnimation } from "./hooks/useFooterAnimation";
import { Shield } from "lucide-react";

export default function Footer() {
  const footerRef = useFooterAnimation();

  return (
    <footer
      ref={footerRef}
      className="w-full bg-black border-t border-white/5 pt-12 pb-32 md:pb-12 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top Part: Support & Trust */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <h3 className="text-sm font-black text-white uppercase tracking-[0.2em]">
              Support
            </h3>
            <p className="text-gray-500 text-xs font-medium">
              10 AM - 7 PM •{" "}
              <a
                href="mailto:support@cbse100.com"
                className="text-brand-orange hover:underline transition-all"
              >
                neuromaxaccademy@gmail.com
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/2 border border-white/5">
            <Shield size={12} className="text-green-500/50" />
            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">
              Secure payment via Razorpay
            </span>
          </div>
        </div>

        {/* Bottom Part: Brand & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em]">
              © 2026 CBSE 100 Initiative
            </p>
            <p className="text-gray-800 text-[9px] uppercase tracking-tighter">
              Independent educational initiative.
            </p>
          </div>

          <nav className="flex gap-8 text-[9px] font-black text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-all">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-all">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-all">
              Refunds
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
