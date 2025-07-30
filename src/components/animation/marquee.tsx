"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";

type MarqueeProps = {
  children: ReactNode;
  duration?: number; 
};

export default function Marquee({ children, duration = 10}: MarqueeProps){
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        x: "-50%",
        ease: "none",
        duration: duration,
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, [duration]);
  
  return (
    <div
      className="relative overflow-hidden w-full"
      ref={containerRef}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-[248px] bg-gradient-to-r from-white to-transparent z-10" />

      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-[248px] bg-gradient-to-l from-white to-transparent z-10" />

      <div
        ref={marqueeRef}
        className="flex flex-row gap-8 md:gap-12 lg:gap-20 whitespace-nowrap w-max"
      >
        {children}
        {children}
      </div>
    </div>
  )
}
