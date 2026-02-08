"use client";

import React from "react";
import {
  Target,
  Layout,
  MessageCircle,
  Timer,
  AlertTriangle,
  Zap,
  ChevronRight,
  TrendingUp,
  Award,
} from "lucide-react";

const valuePoints = [
  {
    title: "Strategic Selection",
    description:
      "Carefully curated from 10+ years of CBSE papers for maximum probability.",
    icon: <Target className="w-6 h-6 text-brand-orange" />,
  },
  {
    title: "Expert Frameworks",
    description:
      "Learn step-by-step how to structure answers to satisfy board examiners.",
    icon: <Layout className="w-6 h-6 text-brand-orange" />,
  },
  {
    title: "Doubt Resolution",
    description:
      "Don't get stuck. Get your questions answered instantly during the live stream.",
    icon: <MessageCircle className="w-6 h-6 text-brand-orange" />,
  },
  {
    title: "Time Optimization",
    description:
      "Proven techniques to complete your paper 30 minutes early with zero stress.",
    icon: <Timer className="w-6 h-6 text-brand-orange" />,
  },
  {
    title: "Pitfall Analysis",
    description:
      "Avoid the common silly mistakes that cost toppers their perfect 100.",
    icon: <AlertTriangle className="w-6 h-6 text-brand-orange" />,
  },
  {
    title: "Last-Minute Mastery",
    description:
      "The ultimate priority-based revision strategy for the final exam week.",
    icon: <Zap className="w-6 h-6 text-brand-orange" />,
  },
];

export default function TheValue() {
  return (
    <section className="w-full bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What You&apos;ll <span className="text-brand-orange">Master</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A precision-engineered session designed to turn your board exam
            anxiety into absolute confidence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {valuePoints.map((point, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-card border border-white/5 hover:border-brand-orange/20 hover:bg-white/[0.02] transition-all duration-500"
            >
              <div className="mb-6 p-3 w-fit rounded-2xl bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors">
                {point.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                {point.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {point.description}
              </p>

              <div className="flex items-center text-sm font-bold text-gray-500 group-hover:text-white transition-colors cursor-pointer">
                View Details{" "}
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* High-Impact Investment Card */}
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-10 md:p-16">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-royal-blue/10 blur-[100px] rounded-full" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3">
              <Award className="text-brand-orange" /> Why this is a no-brainer
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="text-center">
                <div className="text-5xl font-black text-brand-orange mb-2">
                  ₹99
                </div>
                <div className="text-gray-400 font-medium uppercase tracking-widest text-xs">
                  Small Investment
                </div>
              </div>

              <div className="flex justify-center md:rotate-0 rotate-90 opacity-20">
                <ChevronRight size={48} strokeWidth={1} />
              </div>

              <div className="text-center">
                <div className="text-5xl font-black text-white mb-2 flex items-center justify-center gap-2">
                  <TrendingUp className="text-green-500 w-8 h-8" /> 20%
                </div>
                <div className="text-gray-400 font-medium uppercase tracking-widest text-xs">
                  Potential Score Boost
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 mt-12 max-w-xl mx-auto italic">
              "The most affordable way to ensure you don&apos;t walk into the
              exam hall unprepared."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
