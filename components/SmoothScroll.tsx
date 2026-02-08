// components/SmoothScroll.tsx - FIXED VERSION
"use client";

import { ReactNode, useEffect, useState } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      lerp: 0.05,
      wheelMultiplier: 0.7,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setIsInitialized(true);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
