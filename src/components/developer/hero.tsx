import { Button } from "../ui/button";
import Image from "next/image";

export default function DeveloperHero() {
    return (
        <div className="bg-[url('/developer/bg-hero.png')] bg-no-repeat bg-center bg-cover py-16 md:py-20 lg:py-[104px] px-6 md:px-8 lg:px-[124px] flex flex-col justify-center items-center">
            <div className="max-w-[1192px] flex flex-col gap-[72px]">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                    <div className="flex flex-col gap-3 md:gap-4 lg:max-w-[580px]">
                        <div className="flex flex-row gap-2">
                            <div className="h-[22px] w-[1px] bg-cyan-500" />
                            <p className="text-[14px] font-medium leading-[22px] uppercase text-cyan-500">developer</p>
                        </div>
                            <h1 className="lg:max-w-[580px] text-[40px] md:text-[56px] leading-[50px] md:leading-[70px] font-normal text-base-white">Crush Bugs, Ship Faster, Deploy with Confidence.</h1>
                    </div>
                    <div className="flex flex-col gap-10 lg:gap-6 lg:pt-[52px] lg:max-w-[580px]">
                        <p className="text-[18px] leading-[32px] font-normal text-[#FFFFFFE0]">SoftQA is the Modern Software Quality Platform that empowers developers to ship more features without compromising code quality, without leaving their IDE.</p>
                        <div className="flex flex-col w-full md:w-auto md:flex-row gap-4 md:gap-5">
                            <Button variant="get" size="big" className="cursor-pointer text-primary-900">Get Started</Button>
                            <Button variant="talk" size="big" className="cursor-pointer text-cyan-500">View Pricing</Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="bg-base-white border-2 border-grayscale-100 flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-12 pt-4 pb-6 md:py-6 lg:pr-12 lg:pl-6 px-4 md:px-6 rounded-[16px]">
                        <Image src="/developer/img-hero.png" alt="img" width={388} height={416} className="lg:w-[388px] lg:h-[416px] w-full h-full"/>
                        <div className="flex flex-col lg:justify-between gap-6 items-start lg:py-3">
                            <p className="text-[20px] md:text-[24px] lg:text-[32px] font-normal leading-9 md:leading-[42px] lg:leading-12 text-grayscale-900">“SoftQA’s automation tools streamlined our entire QA process. We went from spending weeks on manual testing to running efficient, error-free test cycles in just hours!&quot;</p>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex flex-col items-start max-w-[334px] w-full">
                                    <h3 className="text-[32px] lg:text-[40px] leading-10 lg:leading-[50px] font-normal text-grayscale-900">70%</h3>
                                    <p className="text-[16px] leading-6 font-normal text-grayscale-600">Reduction in testing time</p>
                                </div>
                                <div className="flex flex-col items-start max-w-[334px] w-full">
                                    <h3 className="text-[32px] lg:text-[40px] leading-10 lg:leading-[50px] font-normal text-grayscale-900">85%</h3>
                                    <p className="text-[16px] leading-6 font-normal text-grayscale-600">Of automated testing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-2 md:gap-4 justify-center items-center">
                            <div className="bg-primary-50 rounded-full cursor-pointer flex flex-col justify-center items-center md:w-8 w-6 h-6 md:h-8">
                                <Image src="/developer/arrow-left.png" alt="img" width={16} height={16} />
                            </div>
                            <div className="flex flex-row gap-2">
                                <p className="hidden md:block text-[16px] leading-6 font-normal text-grayscale-500">Previous</p>
                                <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-6 font-medium text-primary-900">Darlene</p>
                            </div>
                        </div>
                        <Image src="/developer/indicator.png" alt="img" width={60} height={6} />
                        <div className="flex flex-row gap-2 md:gap-4 justify-center items-center">
                            <div className="flex flex-row gap-2">
                                <p className="hidden md:block text-[16px] leading-6 font-normal text-grayscale-500">Next</p>
                                <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-6 font-medium text-primary-900">Hawkins</p>
                            </div>
                            <div className="bg-primary-500 rounded-full cursor-pointer flex flex-col justify-center items-center w-8 h-8">
                                <Image src="/developer/arrow-right.png" alt="img" width={16} height={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}