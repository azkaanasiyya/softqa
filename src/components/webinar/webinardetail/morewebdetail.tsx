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
    name: "Priya Sharma",
    role: "Senior DevOps",
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
    name: "Mark Thompson",
    role: "Senior QA Architect",
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
    name: "Maria Gonzalez",
    role: "Automation Strategist",
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
      <div className="max-w-[1192px] py-12 md:py-16 lg:pt-20 pb-12 md:pb-16 lg:pb-[104px] border-t-2 border-grayscale-100 flex flex-col gap-8">
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
              <Link key={item.id} href="/webinar/webinardetail" className="cursor-pointer group">
                  <FadeInSection
                    delay={0.5}
                    className="bg-grayscale-50 rounded-[16px] p-2 xl:min-h-[456px] flex flex-col"
                  >
                    <div className={`${item.tagColor} rounded-[12px] pl-[13.82px] md:pl-[14.58px] xl:pl-4 flex flex-row gap-[13.87px] xl:gap-6 justify-between`}>
                      <div className="flex flex-col max-w-[164px] items-start justify-between my-[13.82px] md:my-[14.58px] xl:my-4">
                        <h4 className="md:w-[94.76px] xl:w-auto text-[27.64px] md:text-[18.49px] xl:text-[32px] leading-[34.56px] md:leading-[23.11px] xl:leading-10 text-grayscale-900">
                          {item.title}
                        </h4>
                        <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                          <p className="text-[10px] leading-[150%] text-grayscale-900">{item.tag}</p>
                        </div>
                      </div>
                      <div className="relative">
                        <Image
                          src={item.image}
                          alt="webinar"
                          width={156}
                          height={212}
                          className="rounded-tr-[12px] rounded-br-[12px] object-cover w-[134.77px] h-[183.14px] md:w-[90.13px] md:h-[122.49px] xl:w-[156px] xl:h-[212px]"
                        />
                        <div className="absolute bottom-0 left-0 z-10 flex flex-col px-[10.37px] py-[9.47px] md:px-[6.93px] md:py-[5.73px] xl:p-3">
                          <p className="text-[12.09px] md:text-[8.09px] xl:text-[14px] leading-[15.55px] md:leading-[10.4px] xl:leading-[18px] font-medium text-base-white">{item.name}</p>
                          <p className="text-[10.37px] md:text-[6.93px] xl:text-[12px] leading-[15.55px] md:leading-[10.4px] xl:leading-[18px] text-base-white">{item.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between gap-[52.86px] md:gap-[18.84px] xl:gap-[26px] py-4 px-2 xl:p-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-[14px] leading-[22px] text-grayscale-600">{item.date}</p>
                        <div className="flex flex-col gap-1 xl:gap-3">
                          <h5 className="text-[18px] xl:text-[24px] leading-7 xl:leading-[30px] text-grayscale-900 group-hover:text-primary-500">{item.subtitle}</h5>
                          <p className="text-[14px] xl:text-[16px] leading-[22px] xl:leading-6 text-grayscale-600 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <Link href="/webinar/webinardetail" className="cursor-pointer">
                        <div className="flex flex-row gap-1 items-end cursor-pointer">
                          <p className="text-[14px] xl:text-[16px] leading-[22px] xl:leading-6 text-primary-500 font-medium group-hover:underline">Read more</p>
                          <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4" />
                        </div>
                      </Link>
                    </div>
                  </FadeInSection>
              </Link>
                
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
