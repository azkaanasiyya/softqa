import { useEffect, RefObject } from "react";
import { gsap } from "gsap";

interface TestimonialRefs {
  mainCardRef: RefObject<HTMLDivElement | null>;
  sideIndicatorsRef: RefObject<HTMLDivElement | null>;
  bottomIndicatorsRef: RefObject<HTMLDivElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;
}

export default function TestimonialAnimation(refs: TestimonialRefs, activeIndex: number): void {
  useEffect(() => {
    const elementsToFade = [
      refs.mainCardRef.current,
      refs.sideIndicatorsRef.current,
      refs.bottomIndicatorsRef.current,
    ].filter(el => el !== null);

    const contentToMove = refs.contentRef.current;

    if (elementsToFade.length === 0) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(elementsToFade, {
        opacity: 0.5,
        duration: 0.5,
        ease: "power2.inOut",
      });

      if (contentToMove) {
          tl.to(contentToMove, {
              opacity: 0,
              y: 10,
              duration: 0.5,
              ease: "power2.inOut",
          }, "<");
      }

      tl.to(elementsToFade, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
      });

      if (contentToMove) {
          tl.fromTo(
              contentToMove,
              { opacity: 0, y: -10 },
              { opacity: 1, y: 0, duration: 0.75, ease: "power2.out" },
              "<"
          );
      }
    }, refs.mainCardRef.current || document.body); 

    return () => ctx.revert();
  }, [activeIndex, refs]);
}