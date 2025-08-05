"use client";

import Image from "next/image";
import { useState, useEffect } from "react"; 
import { testimonials } from "../data/testimonials";
import FadeInSection from "../animation/fadein";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

export default function HomeTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []); 

  const next = () => setActiveIndex((activeIndex + 1) % testimonials.length);
  const prev = () => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length);

  const isFirstSlide = activeIndex === 0;
  const isLastSlide = activeIndex === testimonials.length - 1;

  return (
    <div className="flex flex-col justify-center items-center px-6 md:px-8 lg:px-[124px] py-12 md:py-20 lg:pt-[124px] lg:pb-[132px] border-y">
      <div className="max-w-[1192px] flex flex-col gap-10 md:gap-12 lg:gap-16 items-center justify-center">
        
        <FadeInSection delay={0.5} className="max-w-[580px] flex flex-col gap-3 md:gap-4 items-center">
          <div className="flex flex-row gap-2">
            <div className="h-[22px] w-[1px] bg-primary-500" />
            <p className="text-[14px] font-medium leading-[22px] uppercase text-primary-500">
              we love developers
            </p>
          </div>
          <h2 className="max-w-[580px] text-[32px] md:text-[48px] leading-10 md:leading-[60px] font-normal text-center text-grayscale-900">
            They talk about it <br /> better than us
          </h2>
        </FadeInSection>

        <div className="flex flex-col-reverse md:flex-row items-stretch w-full">

          <div className="flex flex-row md:hidden gap-2 mt-6 items-center justify-center">
            <button
              onClick={prev}
              disabled={isFirstSlide} 
              className={`rounded-[12px] p-5 flex justify-center items-center ${isFirstSlide ? 'bg-transparent' : 'cursor-pointer bg-primary-50'}`}
            >
              <ArrowLeft className={`w-5 h-5 ${isFirstSlide ? 'text-grayscale-300' : 'text-primary-500'}`} strokeWidth={2.5}/>
            </button>
            <button
              onClick={next}
              disabled={isLastSlide} 
              className={`rounded-[12px] p-5 flex justify-center items-center ${isLastSlide ? 'bg-transparent' : 'cursor-pointer bg-primary-50'}`}
            >
              <ArrowRight className={`w-5 h-5 ${isLastSlide ? 'text-grayscale-300' : 'text-primary-500'}`} strokeWidth={2.5}/>
            </button>
          </div>

          <div className={`flex flex-col flex-1 min-h-[448px] justify-between md:px-10 lg:px-16 p-6 md:py-12 lg:py-14 ${testimonials[activeIndex].color} rounded-b-[8px] md:rounded-b-[0px] md:rounded-tl-[16px] md:rounded-bl-[16px]`}>
            <p className="text-[20px] md:text-[28px] leading-9 md:leading-[48px] font-normal text-grayscale-900">
              “{testimonials[activeIndex].message}”
            </p>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-5 items-center">
                <Image src={testimonials[activeIndex].avatar} alt="testimonial" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16" />
                <div className="flex flex-col gap-1.5">
                  <p className="text-[16px] md:text-[18px] font-normal text-grayscale-900 leading-6 md:leading-[28px]">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-[14px] leading-[22px] md:text-[16px] font-normal md:leading-[24px] text-grayscale-600">
                    {testimonials[activeIndex].title}
                  </p>
                </div>
              </div>
              <div className="hidden md:flex md:flex-col items-center">
                <button
                  className={`flex flex-col justify-center items-center p-2 rounded-[8px] ${isFirstSlide ? 'bg-transparent' : 'cursor-pointer bg-base-white'}`}
                  onClick={prev}
                  disabled={isFirstSlide}
                >
                  <ArrowUp className={`w-4 h-4 ${isFirstSlide ? 'text-grayscale-300' : 'text-grayscale-900'}`} strokeWidth={3.5}/>
                </button>
                <button
                  className={`flex flex-col justify-center items-center p-2 rounded-[8px] ${isLastSlide ? 'bg-transparent' : 'cursor-pointer bg-base-white'}`}
                  onClick={next}
                  disabled={isLastSlide}
                >
                  <ArrowDown className={`w-4 h-4 ${isLastSlide ? 'text-grayscale-300' : 'text-grayscale-900'}`} strokeWidth={3.5}/>
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col w-7 gap-2">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`flex-1 cursor-pointer rounded-tr-[8px] rounded-br-[8px] ${t.color}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>

          <div className="flex md:hidden flex-row h-4 gap-1">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`w-1/4 cursor-pointer ${t.color} rounded-t-[8px]`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}