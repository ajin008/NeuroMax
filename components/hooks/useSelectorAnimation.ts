import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const useSelectorAnimation = (activeClass: number) => {
  const containerRef = useRef(null);

  // Entrance Animation
  useGSAP(
    () => {
      gsap.from(".selector-dock", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "expo.out",
      });
    },
    { scope: containerRef }
  );

  // Switch Animation (Triggered when activeClass changes)
  useGSAP(() => {
    gsap.fromTo(
      ".active-indicator",
      { opacity: 0, scaleX: 0 },
      { opacity: 1, scaleX: 1, duration: 0.4, ease: "power2.inOut" }
    );
  }, [activeClass]);

  return containerRef;
};
