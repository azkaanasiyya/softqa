"use client";

import FadeInSection from "@/components/animation/fadein";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const webinars = [
  {
    id: 1,
    title: "Zero Defects!",
    tag: "#Innovation",
    tagColor: "bg-additional-purplish",
    date: "Feb 28, 2024",
    subtitle: "Achieving Zero Defects with QA Automation",
    description: "Implement QA automation practices that help minimize bugs and deliver software with zero defects.",
    image: "/webinar/priya.png",
    visibleOn: "all"
  },
  {
    id: 2,
    title: "Scale QA Effortlessly",
    tag: "#Productivity",
    tagColor: "bg-additional-sweet",
    date: "Feb 12, 2024",
    subtitle: "Building Scalable Testing Strategies",
    description: "Discover strategies to design scalable QA frameworks that grow with your organization’s needs.",
    image: "/webinar/mark.png",
    visibleOn: "all"
  },
  {
    id: 3,
    title: "AI Test Script",
    tag: "#Innovation",
    tagColor: "bg-additional-diamond",
    date: "Feb 8, 2024",
    subtitle: "Writing Test Scripts with AI Assistance",
    description: "Learn how AI can help you generate and refine test scripts, saving time and reducing errors.",
    image: "/webinar/maria.png",
    visibleOn: "all"
  }
];

export default function MoreWebDetail() {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      setItemsPerPage(width >= 768 ? 3 : 1);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

   const visibleData = webinars.slice(currentIndex, currentIndex + itemsPerPage);

  const handleNext = () => {
    const nextIndex = currentIndex + itemsPerPage;
    if (nextIndex < webinars.length) {
        setCurrentIndex(nextIndex)
    }
  }

  const handlePrev = () => {
    const prevIndex = currentIndex - itemsPerPage;
    if (prevIndex >= 0) {
        setCurrentIndex(prevIndex)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center px-6 md:px-8 lg:px-[124px]">
      <div className="max-w-[1192px] py-12 md:py-16 lg:pt-20 pb-[104px] border-t-2 border-grayscale-100 flex flex-col gap-8">
        <FadeInSection delay={0.5} className="flex flex-row w-full justify-between items-center">
          <h3 className="text-[24px] md:text-[40px] leading-[30px] md:leading-[50px] text-grayscale-900">
            More webinars <br className="md:hidden" /> from SoftQA
          </h3>
          <Link href="/webinar">
            <div className="inline-flex h-12 gap-1.5 p-3 items-center rounded-[12px] border-2 border-grayscale-100 cursor-pointer hover:bg-grayscale-200">
              <p className="text-[14px] leading-[22px] text-primary-500">See all</p>
              <Image src="/webinar/right-web.png" alt="icon" width={16} height={16} />
            </div>
          </Link>
        </FadeInSection>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            {visibleData.map((item) => (
                <FadeInSection
                  key={item.id}
                  delay={0.5}
                  className="bg-grayscale-50 rounded-[16px] p-2 lg:min-h-[456px] flex flex-col"
                >
                  <div className={`${item.tagColor} rounded-[12px] pl-[13.82px] md:pl-[14.58px] lg:pl-4 flex flex-row gap-[13.87px] lg:gap-6 justify-between`}>
                    <div className="flex flex-col max-w-[164px] items-start justify-between my-[13.82px] md:my-[14.58px] lg:my-4">
                      <h4 className="text-[27.64px] md:text-[18.49px] lg:text-[32px] leading-[34.56px] md:leading-[23.11px] lg:leading-10 text-grayscale-900">
                        {item.title}
                      </h4>
                      <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                        <p className="text-[10px] leading-[150%] text-grayscale-900">{item.tag}</p>
                      </div>
                    </div>
                    <Image
                      src={item.image}
                      alt="webinar"
                      width={156}
                      height={212}
                      className="rounded-tr-[12px] rounded-br-[12px] object-cover w-[134.77px] h-[183.14px] md:w-[122.49px] md:h-[117.87px] lg:w-[156px] lg:h-[212px]"
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-[52.86px] md:gap-[18.84px] lg:gap-[26px] py-4 px-2 lg:p-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-[14px] leading-[22px] text-grayscale-600">{item.date}</p>
                      <div className="flex flex-col gap-1 lg:gap-3">
                        <h5 className="text-[18px] lg:text-[24px] leading-7 lg:leading-[30px] text-grayscale-900">{item.subtitle}</h5>
                        <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-grayscale-600 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <Link href="/webinar/webinardetail" className="cursor-pointer">
                      <div className="flex flex-row gap-1 items-end cursor-pointer">
                        <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-primary-500 font-medium underline">Read more</p>
                        <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4" />
                      </div>
                    </Link>
                  </div>
                </FadeInSection>
            ))}
          </div>

          <div className="flex flex-row md:hidden justify-between items-center">
            <div
                onClick={handlePrev}
                className={cn(
                    "flex justify-center items-center w-8 h-8 rounded-full border-transparent transition-colors",
                    currentIndex === 0
                    ? "bg-[#FAFAFA] cursor-not-allowed"
                    : "bg-primary-500 cursor-pointer hover:bg-primary-400"
                )}
            >
                <ArrowLeft
                    className={cn(
                        "w-4 h-4",
                        currentIndex === 0 ? "text-[#ABB1B9]" : "text-base-white"
                    )}
                />
            </div>
            <div
                onClick={handleNext}
                className={cn(
                    "flex justify-center items-center w-8 h-8 rounded-full border-transparent transition-colors",
                    currentIndex + itemsPerPage >= webinars.length
                    ? "bg-[#FAFAFA] cursor-not-allowed"
                    : "bg-primary-500 cursor-pointer hover:bg-primary-400"
                )}
            >
                <ArrowRight
                    className={cn(
                        "w-4 h-4",
                        currentIndex + itemsPerPage >= webinars.length ? "text-[#ABB1B9]" : "text-base-white"
                    )}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
