"use client";

import Image from "next/image"
import { useState } from "react"

const testimonials = [
  {
    name: "Malik Ganteng",
    title: "Senior Engineer, Clause",
    message:
      "SoftQA helps us deploy faster and increase our efficiency by 80%. Because of the confidence that we have on SoftQA we are able to test fast and release faster. It helps us debug our code easily, reduce developer feedback time, and helps in quickly implementing our go-to-market strategy.",
    avatar: "/home/testimonials/malik.png",
    color: "bg-additional-salty",
  },
  {
    name: "Carlos Mendes",
    title: "Head of Engineering, CloudNova",
    message:
      "Since integrating SoftQA, our automated testing coverage grew by 60%, and regression bugs dropped sharply. QA and dev now collaborate better, saving time and reducing last-minute surprises across multiple product lines.",
    avatar: "/home/testimonials/carlos.png",
    color: "bg-additional-palm",
  },
  {
    name: "Alyssa Tan",
    title: "Product Manager, Loopware",
    message:
      "SoftQA provides instant insights into test progress and quality trends. Our release cycle is now tighter, more predictable, and we've seen fewer bugs reach production thanks to early error detection.",
    avatar: "/home/testimonials/alyssa.png",
    color: "bg-additional-light",
  },
  {
    name: "Emily Zhang",
    title: "CTO, Neurobit Systems",
    message:
      "Speed matters to us, and SoftQA lets us deliver without compromising product quality. Its automation and reporting tools helped us reduce delays and ship confidently during rapid scaling phases.",
    avatar: "/home/testimonials/emily.png",
    color: "bg-additional-snow",
  },
]

export default function HomeTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => setActiveIndex((activeIndex + 1) % testimonials.length)
  const prev = () => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="flex flex-col justify-center items-center px-6 md:px-8 lg:px-[124px] py-12 md:py-20 lg:pt-[124px] lg:pb-[132px] border-y">
      <div className="max-w-[1192px] flex flex-col gap-10 md:gap-12 lg:gap-16 items-center justify-center">
       
        <div className="max-w-[580px] flex flex-col gap-3 md:gap-4 items-center">
          <div className="flex flex-row gap-2">
            <div className="h-[22px] w-[1px] bg-primary-500" />
            <p className="text-[14px] font-medium leading-[22px] uppercase text-primary-500">
              we love developers
            </p>
          </div>
          <h2 className="max-w-[580px] text-[32px] md:text-[48px] leading-10 md:leading-[60px] font-normal text-center text-grayscale-900">
            They talk about it <br /> better than us
          </h2>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-stretch w-full">

          <div className="flex flex-row md:hidden gap-2 mt-6 items-center justify-center">
            <button onClick={prev} className="bg-transparent hover:bg-primary-50 rounded-[12px] w-12 h-12 flex justify-center items-center">
              <Image src="/home/testimonials/arrow-left.png" alt="prev" width={20} height={20} />
            </button>
            <button onClick={next} className="bg-primary-50 hover:bg-primary-100 rounded-[12px] w-12 h-12 flex justify-center items-center">
              <Image src="/home/testimonials/arrow-right.png" alt="next" width={20} height={20} />
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
                <div className="flex flex-col justify-center items-center p-2">
                    <button onClick={prev}><Image src="/home/testimonials/arrow-up.png" alt="up" width={16} height={16} /></button>
                </div>
                <button onClick={next}><Image src="/home/testimonials/arrow-down.png" alt="down" width={32} height={32} /></button>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col w-7 gap-2">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`flex-1 cursor-pointer rounded-tr-[8px] rounded-br-[8px] ${t.color} ${activeIndex === i ? 'opacity-100' : 'opacity-50'}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>

          <div className="flex md:hidden flex-row h-4 gap-1">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`w-1/4 cursor-pointer ${t.color} rounded-t-[8px] ${activeIndex === i ? 'opacity-100' : 'opacity-50'}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}