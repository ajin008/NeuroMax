import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useCTAAnimation = () => {
  const ctaRef = useRef(null);

  // Safeguard: Refresh ScrollTrigger when layout might change
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

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
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          once: true, // Animation happens only once
          onEnter: () => console.log("CTA Animation Started"), // Check your console!
        },
        // This ensures GSAP removes 'opacity' and 'transform' styles after finishing
        clearProps: "all",
      });
    },
    { scope: ctaRef }
  );

  return ctaRef;
};
