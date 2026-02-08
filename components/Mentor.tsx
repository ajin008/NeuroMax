"use client";

import React from "react";
import { Award, BookOpen, Users, Star } from "lucide-react";

export default function Mentor() {
  return (
    <section className="w-full bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-[40px] bg-white/[0.02] border border-white/5 p-8 md:p-16">
          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-orange/5 blur-[100px] -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Avatar Section */}
            <div className="relative group">
              {/* Animated Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-brand-orange via-transparent to-royal-blue opacity-20 group-hover:opacity-40 animate-spin-slow transition duration-1000" />

              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full border-2 border-white/10 p-2 bg-black">
                <div className="w-full h-full rounded-full overflow-hidden bg-white/5 flex items-center justify-center relative">
                  {/* Replace with actual image: <img src="/mentor.jpg" className="object-cover w-full h-full" /> */}
                  <span className="text-6xl">👨‍🏫</span>

                  {/* Floating Experience Badge */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand-orange text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                    10+ Years Exp
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="absolute -top-2 -right-2 bg-black border border-white/10 p-3 rounded-2xl shadow-2xl">
                <Star className="text-brand-orange fill-brand-orange w-5 h-5" />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6">
                <Award size={14} className="text-brand-orange" />
                <span className="text-[10px] font-black text-brand-orange uppercase tracking-[0.2em]">
                  Verified Expert Mentor
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                Learn from the{" "}
                <span className="text-brand-orange text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
                  Specialist.
                </span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                <span className="text-white font-bold">Rahul Sharma</span> has
                analyzed 1,000+ board papers to decode the examiner&apos;s
                mindset. He doesn&apos;t just teach subjects; he teaches the{" "}
                <span className="italic text-gray-200 underline decoration-brand-orange">
                  science of scoring.
                </span>
              </p>

              {/* Modern Grid Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/5 p-6 rounded-3xl group hover:bg-white/10 transition-colors">
                  <BookOpen className="w-5 h-5 text-brand-orange mb-3 mx-auto lg:mx-0" />
                  <div className="text-2xl font-black text-white">1,000+</div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                    Papers Cracked
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 p-6 rounded-3xl group hover:bg-white/10 transition-colors">
                  <Users className="w-5 h-5 text-brand-orange mb-3 mx-auto lg:mx-0" />
                  <div className="text-2xl font-black text-white">5,000+</div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                    Lives Impacted
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 p-6 rounded-3xl group hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-center lg:justify-start gap-1 text-brand-orange mb-3">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                  <div className="text-2xl font-black text-white">95%</div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
