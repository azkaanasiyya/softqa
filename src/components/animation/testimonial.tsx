import { useEffect, RefObject } from "react";
import { gsap } from "gsap";

interface TestimonialRefs {
  mainCardRef: RefObject<HTMLDivElement | null>;
  sideIndicatorsRef: RefObject<HTMLDivElement | null>;
  bottomIndicatorsRef: RefObject<HTMLDivElement | null>;
}

export default function TestimonialAnimation(refs: TestimonialRefs, activeIndex: number): void {
  useEffect(() => {
    const elementsToAnimate = [
      refs.mainCardRef.current,
      refs.sideIndicatorsRef.current,
      refs.bottomIndicatorsRef.current,
    ];

    const tl = gsap.timeline();

    tl.to(elementsToAnimate, {
      opacity: 0,
      y: 10,
      duration: 0.5,
      ease: "power2.inOut",
    });

    tl.fromTo(
      elementsToAnimate,
      { opacity: 0, y: -10 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut" } 
    );
  }, [activeIndex, refs]);
}