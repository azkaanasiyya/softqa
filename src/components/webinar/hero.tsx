"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { webinarHeroData } from "../data/webinarhero"
import FadeInSection from "../animation/fadein"
import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WebinarHero() {
  const [itemsPerPage, setItemsPerPage] = useState(2)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth
      if (width >= 768) {
        setItemsPerPage(2) 
      } else {
        setItemsPerPage(1) 
      }
    }

    updateItemsPerPage()
    window.addEventListener("resize", updateItemsPerPage)
    return () => window.removeEventListener("resize", updateItemsPerPage)
  }, [])

  const visibleData = webinarHeroData.slice(currentIndex, currentIndex + itemsPerPage)

  const handleNext = () => {
    const nextIndex = currentIndex + itemsPerPage
    if (nextIndex < webinarHeroData.length) {
      setCurrentIndex(nextIndex)
    }
  }

  const handlePrev = () => {
    const prevIndex = currentIndex - itemsPerPage
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex)
    }
  }

  return (
    <div className="relative bg-primary-900 flex flex-col justify-center items-center pt-16 pb-12 md:py-20 lg:py-[104px] px-6 md:px-8 lg:px-[124px]
    before:absolute before:inset-0 before:bg-[url('/line.png')] before:bg-no-repeat before:bg-center before:bg-[length:1192px_auto] before:opacity-12 before:z-0">
      <div className="max-w-[1192px] flex flex-col justify-center items-center gap-10 md:gap-16 lg:gap-[104px]">
        <FadeInSection delay={0.5} className="flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col gap-4 items-center max-w-[786px]">
            <div className="flex flex-row gap-2">
              <div className="h-[22px] w-[1px] bg-cyan-500" />
              <p className="text-[14px] font-medium leading-[22px] uppercase text-cyan-500">our webinar</p>
            </div>
            <h1 className="text-[40px] md:text-[56px] leading-[50px] md:leading-[70px] font-normal text-base-white text-center">
              Grow as a Developer with our Training Webinars
            </h1>
          </div>
          <p className="max-w-[654px] text-center text-[18px] leading-8 font-normal text-[#FFFFFFEB]">
            Free live training workshops, Monday to Friday, from the comfort of your <br className="hidden md:block lg:hidden"/> own home. Let’s learn, grow, and build together.
          </p>
        </FadeInSection>

        <div className="flex flex-col gap-10 w-full">
          <FadeInSection delay={0.5} className="flex flex-row justify-between items-center w-full">
            <h3 className="relative text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-10 lg:leading-[50px] text-base-white">
              Upcoming
              <span className="absolute top-2 right-[-8px] w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            </h3>

            <div className="flex flex-row gap-4">
              <div
                onClick={handlePrev}
                className={cn(
                  "flex justify-center items-center w-8 md:w-10 h-8 md:h-10 rounded-full transition-colors",
                  currentIndex === 0
                    ? "border-2 border-white-opacity-12"
                    : "bg-cyan-500 cursor-pointer hover:bg-cyan-400"
                )}
              >
                <ArrowLeft
                  className={cn(
                    "w-5 h-5",
                    currentIndex === 0 ? "text-[#FFFFFF66]" : "text-primary-500"
                  )}
                />
              </div>

              <div
                onClick={handleNext}
                className={cn(
                  "flex justify-center items-center w-8 md:w-10 h-8 md:h-10 rounded-full transition-colors",
                  currentIndex + itemsPerPage >= webinarHeroData.length
                    ? "border-2 border-white-opacity-12"
                    : "bg-cyan-500 cursor-pointer hover:bg-cyan-400"
                )}
              >
                <ArrowRight
                  className={cn(
                    "w-5 h-5",
                    currentIndex + itemsPerPage >= webinarHeroData.length ? "text-[#FFFFFF66]" : "text-primary-500"
                  )}
                />
              </div>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {visibleData.map((item) => (
              <FadeInSection delay={0.5} key={item.id} className="max-w-[576px] min-h-[464px] w-full flex flex-col p-2 rounded-[16px] bg-grayscale-50">
                <div className={`${item.bgColor} rounded-[12px] pl-4 flex flex-row justify-between`}>
                  <div className="flex flex-col justify-between my-4 items-start">
                    <h4 className="text-[23.04px] md:text-[24px] lg:text-[32px] leading-[28.8px] md:leading-[30px] lg:leading-10 text-grayscale-900 whitespace-pre-line">
                      {item.title}
                    </h4>
                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                      <p className="text-[10px] leading-[150%] text-grayscale-900">{item.tag}</p>
                    </div>
                  </div>
                  <Image src={item.image} alt="speaker" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px]" />
                </div>
                <div className="min-h-[236px] h-full flex flex-col gap-8 md:gap-6 lg:justify-between items-start px-3 pb-3 pt-4 lg:py-4 lg:pl-4 lg:pr-16">
                  <div className="flex flex-col gap-1">
                    <p className="text-[14px] leading-[22px] text-grayscale-600">{item.date}</p>
                    <div className="flex flex-col gap-2 lg:gap-3">
                      <h5 className="text-[24px] leading-[30px] text-grayscale-900">{item.subtitle}</h5>
                      <p className="text-[16px] leading-6 text-grayscale-600 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                  <Button variant="request" size="medium" className="text-cyan-500 w-full lg:w-auto cursor-pointer">
                    Register
                  </Button>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
