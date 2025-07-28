"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";
import { deveTestimonials as slides } from "../data/developer";
import FadeInSection from "../animation/fadein";
                               
export default function DeveloperHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-[url('/developer/bg-hero.png')] bg-no-repeat bg-center bg-cover py-16 md:py-20 lg:py-[104px] px-6 md:px-8 lg:px-[124px] flex flex-col items-center">
      <div className="max-w-[1192px] flex flex-col gap-[72px]">
        <FadeInSection delay={0.5} className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          <div className="flex flex-col gap-3 md:gap-4 lg:max-w-[580px]">
            <div className="flex flex-row gap-2">
              <div className="h-[22px] w-[1px] bg-cyan-500" />
              <p className="text-[14px] font-medium leading-[22px] uppercase text-cyan-500">developer</p>
            </div>
            <h1 className="text-[40px] md:text-[56px] leading-[50px] md:leading-[70px] font-normal text-base-white">
              Crush Bugs, Ship Faster, Deploy with Confidence.
            </h1>
          </div>
          <div className="flex flex-col gap-10 lg:gap-6 lg:pt-[52px] lg:max-w-[580px]">
            <p className="text-[18px] leading-[32px] font-normal text-[#FFFFFFE0]">
              SoftQA is the Modern Software Quality Platform that empowers developers to ship more features
              without compromising code quality, without leaving their IDE.
            </p>
            <div className="flex flex-col w-full md:w-auto md:flex-row gap-4 md:gap-5">
              <Link href="/auth/sign-up">
                <Button variant="get" size="big" className="cursor-pointer text-primary-900">
                  Get Started
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="talk" size="big" className="cursor-pointer text-cyan-500">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.5} className="flex flex-col gap-8">
          <div className="bg-base-white border-2 border-grayscale-100 rounded-[16px] pt-4 px-4 pb-6 md:p-6 lg:pr-12 lg:pl-6 flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-12">
            <Image
              src={slides[currentSlide].image}
              alt="img"
              width={388}
              height={416}
              className="w-full lg:w-[388px] h-auto"
            />
            <div className="flex flex-col justify-between gap-6 lg:py-3">
              <p className="text-[20px] md:text-[24px] lg:text-[32px] font-normal text-grayscale-900 leading-9 md:leading-[42px] lg:leading-12">
                “{slides[currentSlide].quote}”
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                {slides[currentSlide].stats.map((stat, idx) => (
                  <div key={idx} className="max-w-[334px] w-full flex-col">
                    <h3 className="text-[32px] lg:text-[40px] leading-10 lg:leading-[50px] text-grayscale-900">
                      {stat.value}
                    </h3>
                    <p className="text-[16px] leading-6 text-grayscale-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
  
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full cursor-pointer h-2 ${
                    currentSlide === index ? "w-8 bg-primary-500" : "w-2 bg-grayscale-200"
                  }`}
                />
              ))}
            </div>

            <div className="flex justify-between items-center w-full">

              <div className="flex items-center gap-2 md:gap-4">
                <button onClick={prev} className="bg-primary-50 rounded-full cursor-pointer flex justify-center items-center w-6 h-6 md:w-8 md:h-8">
                  <Image src="/developer/arrow-left.png" alt="prev" width={16} height={16} />
                </button>
                <div className="flex flex-row gap-2 items-center">
                  <p className="hidden md:block text-[16px] leading-6 font-normal text-grayscale-500">Previous</p>
                  <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-6 font-medium text-primary-900">
                    {slides[(currentSlide - 1 + slides.length) % slides.length].name.split(" ")[0]}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-4">
                <div className="flex flex-row gap-2 items-center">
                  <p className="hidden md:block text-[16px] leading-6 font-normal text-grayscale-500">Next</p>
                  <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-6 font-medium text-primary-900">
                    {slides[(currentSlide + 1) % slides.length].name.split(" ")[0]}
                  </p>
                </div>
                <button onClick={next} className="bg-primary-500 rounded-full cursor-pointer flex justify-center items-center w-8 h-8">
                  <Image src="/developer/arrow-right.png" alt="next" width={16} height={16} />
                </button>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
