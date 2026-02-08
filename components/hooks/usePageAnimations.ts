import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const usePageAnimations = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // Reveal main sections on scroll
      const sections = gsap.utils.toArray("section");
      sections.forEach((section: any) => {
        gsap.from(section, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Background glow pulse
      gsap.to(".bg-glow", {
        opacity: 0.8,
        scale: 1.1,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container }
  );

  return container;
};
