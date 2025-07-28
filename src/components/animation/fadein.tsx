"use client";

import React, { PropsWithChildren, useEffect, useRef } from "react";
import gsap from "gsap";

interface FadeInSectionProps extends PropsWithChildren {
  delay?: number;
  variant?: "top-to-bottom" | "bottom-to-top" | "left-to-right" | "right-to-left";
  stagger?: number;
  className?: string;
}

export default function FadeInSection({
  children,
  delay = 0,
  variant = "bottom-to-top",
  stagger = 0.2,
  className = "",
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = ref.current?.children;
            if (elements) {
              const fromVars: gsap.TweenVars = { opacity: 0 };
                if (variant === "bottom-to-top") fromVars.y = 25;
                else if (variant === "top-to-bottom") fromVars.y = -25;
                else if (variant === "left-to-right") fromVars.x = -25;
                else if (variant === "right-to-left") fromVars.x = 25;

                gsap.fromTo(
                elements,
                fromVars,
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 0.75,
                    delay,
                    stagger,
                    ease: "power2.out",
                }
                );
            }
            observerInstance.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [delay, variant,stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}