"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";

type MarqueeProps = {
  children: ReactNode;
  duration?: number; 
};

export default function Marquee({ children, duration = 5 }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const contentWidth = contentRef.current.offsetWidth;

    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(
      contentRef.current,
      { x: 0 },
      {
        x: -contentWidth / 2,
        duration,
        ease: "linear"
      }
    );

    return () => {
      tl.kill(); 
    };
  }, [duration]);

  return (
    <div
      className="relative overflow-hidden w-full"
      ref={containerRef}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-[248px] bg-gradient-to-r from-white to-transparent z-10" />

      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-[248px] bg-gradient-to-l from-white to-transparent z-10" />

      <div
        ref={contentRef}
        className="flex flex-row gap-8 md:gap-12 lg:gap-20 whitespace-nowrap w-max"
      >
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}
