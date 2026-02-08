// components/hooks/useCTAAnimation.tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

// No ScrollTrigger registration here since we're not using it
export const useCTAAnimation = () => {
  const ctaRef = useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".cta-content > *");

      if (items.length === 0) return;

      gsap.from(items, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3,
      });
    },
    { scope: ctaRef }
  );

  return ctaRef;
};
