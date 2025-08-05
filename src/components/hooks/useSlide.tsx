// src/hooks/useSlide.js
"use client";

import { useEffect, RefObject, DependencyList } from "react";
import gsap from "gsap";

export default function useSlide(
  refs: (RefObject<HTMLElement | null> | null)[], // <-- Tipe data diubah menjadi array of RefObject
  dependencies: DependencyList
) {
  useEffect(() => {
    refs.forEach((ref) => {
      // Pastikan ref ada dan memiliki elemen saat ini
      if (ref?.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
      }
    });
  }, [refs, ...dependencies]);
}