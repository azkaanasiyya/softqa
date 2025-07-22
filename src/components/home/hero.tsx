import { Button } from "../ui/button";
import Image from "next/image";
import { HomeModal } from "./modal";
import Link from "next/link";

export default function HomeHero() {
    return (
        <div className="px-6 md:px-8 lg:px-[124px] py-16 md:py-20 lg:pt-[88px] lg:pb-[104px] flex flex-col justify-center items-center">
            <div className="max-w-[1192px] w-full flex flex-col lg:flex-row items-center justify-center gap-12">
                <div className="flex flex-col gap-6 lg:justify-between lg:py-6 lg:max-w-[580px] items-start">
                    <div className="flex flex-col lg:justify-between gap-4 md:gap-6 lg:min-h-[568px]">
                        <div className="flex flex-col gap-3 md:gap-4">
                            <div className="flex flex-row gap-2">
                                <div className="h-[22px] w-[1px] bg-primary-500" />
                                <p className="text-[14px] font-medium leading-[22px] uppercase text-primary-500">autonomus QA</p>
                            </div>
                            <h1 className="text-[40px] md:text-[56px] leading-[50px] md:leading-[70px] font-normal text-grayscale-900">The World&apos;s Most Accurate Unit Testing Generative AI</h1>
                        </div>
                        <div className="flex flex-col gap-8 md:gap-10 lg:gap-[32px]">
                            <p className="text-[18px] md:text-[20px] font-normal leading-8 md:leading-[36px] max-w-[485px] text-grayscale-600">
                                SoftQA automatically writes your unit tests at mind-boggling scale. Your software development process will never feel the same again.
                            </p>
                            <div className="flex flex-col md:flex-row w-full md:w-auto gap-4 md:gap-5">
                                <Link href="/auth/sign-up">
                                    <Button
                                        variant="request"
                                        size="big"
                                        className="cursor-pointer text-cyan-500"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                                
                                <HomeModal triggerType="white"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src="/home/hero.png" alt="hero" width={564} height={616} className="lg:w-[564px] lg:h-[616px] max-w-[704px] max-h-[768.91px] w-full h-full"/>
            </div>
        </div>
    )
}