"use client";

import React from "react";
import { Calendar, Clock, Gift, Monitor, ShieldCheck } from "lucide-react";

const eventDetails = [
  {
    icon: <Calendar className="w-6 h-6 text-brand-orange" />,
    title: "Date",
    value: "10th February 2026",
    description: "Tuesday Evening Session",
  },
  {
    icon: <Clock className="w-6 h-6 text-brand-orange" />,
    title: "Time",
    value: "7:00 PM – 9:00 PM IST",
    description: "2 Hours Intensive Prep",
  },
  {
    icon: <Gift className="w-6 h-6 text-brand-orange" />,
    title: "Bonuses",
    value: "Study Package",
    description: "100-Question PDF included",
  },
  {
    icon: <Monitor className="w-6 h-6 text-brand-orange" />,
    title: "Platform",
    value: "Zoom Webinar",
    description: "Live & Interactive",
  },
];

export default function EventDetails() {
  return (
    <section className="w-full bg-background py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
            The <span className="text-brand-orange">Session</span> Blueprint
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">
            Lock your calendar. This is the only 120 minutes you need to
            transform your board exam preparation.
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {eventDetails.map((detail, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.03] backdrop-blur-md rounded-[32px] p-8 border border-white/5 hover:border-brand-orange/20 transition-all duration-500"
            >
              {/* Icon Glow Container */}
              <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-orange/20 transition-all duration-500">
                {detail.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h3 className="font-bold text-gray-500 text-[10px] uppercase tracking-[0.2em]">
                  {detail.title}
                </h3>
                <p className="text-lg font-black text-white leading-tight">
                  {detail.value}
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  {detail.description}
                </p>
              </div>

              {/* Corner Accent for SaaS feel */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange shadow-[0_0_10px_#FF6600]" />
              </div>
            </div>
          ))}
        </div>

        {/* Security / Extra Info Bar */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Recording available for 7 days post-session
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
