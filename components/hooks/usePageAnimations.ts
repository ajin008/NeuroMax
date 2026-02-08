// components/hooks/usePageAnimations.tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

// Register GSAP plugins only on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export const usePageAnimations = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // Simple reveal animations without ScrollTrigger
      const sections = document.querySelectorAll("section");

      sections.forEach((section, index) => {
        gsap.from(section, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
        });
      });

      // Background glow pulse
      gsap.to(".bg-glow", {
        opacity: 0.6,
        scale: 1.05,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container }
  );

  return container;
};
