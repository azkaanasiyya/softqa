import { Button } from "../ui/button";
import Image from "next/image";
import { HomeModal } from "./modal";

export default function HomeHero() {
    return (
        <div className="px-[124px] pt-[88px] pb-[104px] flex flex-row justify-center items-center">
            <div className="max-w-[1192px] flex flex-row items-center justify-center gap-12">
                <div className="flex flex-col justify-between py-6 max-w-[580px] items-start">
                    <div className="flex flex-col justify-between h-[568px]">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row gap-2">
                                <div className="h-[22px] w-[1px] bg-primary-500" />
                                <p className="text-[14px] font-medium leading-[22px] uppercase text-primary-500">autonomus QA</p>
                            </div>
                            <h1 className="text-[56px] leading-[70px] font-normal text-grayscale-900">The World&apos;s Most Accurate Unit Testing Generative AI</h1>
                        </div>
                        <div className="flex flex-col gap-[32px]">
                            <p className="text-[20px] font-normal leading-[36px] max-w-[485px] text-grayscale-600">
                                SoftQA automatically writes your unit tests at mind-boggling scale. Your software development process will never feel the same again.
                            </p>
                            <div className="flex flex-row gap-5">
                                <Button
                                    variant="request"
                                    size="big"
                                    className="cursor-pointer text-cyan-500"
                                >
                                    Get Started
                                </Button>
                                <HomeModal />
                            </div>
                        </div>
                    </div>
                </div>
                <Image src="/home/hero.png" alt="hero" width={564} height={616}/>
            </div>
        </div>
    )
}