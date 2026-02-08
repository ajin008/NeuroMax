import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const useHeroAnimation = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1 },
      });

      tl.from(".hero-badge", { opacity: 0, y: 20, duration: 0.8 })
        .from(".hero-title", { opacity: 0, y: 40, stagger: 0.1 }, "-=0.6")
        .from(".hero-sub", { opacity: 0, y: 20 }, "-=0.6")
        // Stats now slide up smoothly instead of scaling
        .from(
          ".hero-stats",
          {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(".hero-cta", { opacity: 0, y: 20 }, "-=0.4");
    },
    { scope: containerRef }
  );

  return containerRef;
};
