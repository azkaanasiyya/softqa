import FadeInSection from "@/components/animation/fadein";
import Image from "next/image";
import Link from "next/link";

export default function MoreWebDetail() {
    return (
        <div className="flex flex-col justify-center items-center px-6 md:px-8 lg:px-[124px]">
            <div className="max-w-[1192px] py-12 md:py-16 lg:pt-20 pb-[104px] border-t-2 border-grayscale-100 flex flex-col gap-8">
                <FadeInSection delay={0.5} className="flex flex-row w-full justify-between items-center">
                    <h3 className="text-[24px] md:text-[40px] leading-[30px] md:leading-[50px] text-grayscale-900">More webinars <br className="md:hidden"/> from SoftQA</h3>
                    <Link href="/webinar">
                        <div className="inline-flex h-12 gap-1.5 p-3 items-center rounded-[12px] border-2 border-grayscale-100 cursor-pointer hover:bg-grayscale-200">
                            <p className="text-[14px] leading-[22px] text-primary-500">See all</p>
                            <Image src="/webinar/right-web.png" alt="icon" width={16} height={16}/>
                        </div> 
                    </Link>
                </FadeInSection>
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                        <FadeInSection delay={0.5} className="bg-grayscale-50 rounded-[16px] p-2 lg:min-h-[456px] flex flex-col">
                            <div className="bg-additional-purplish rounded-[12px] pl-[13.82px] md:pl-[14.58px] lg:pl-4 flex flex-row gap-[13.87px] lg:gap-6 justify-between">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-[13.82px] md:my-[14.58px] lg:my-4">
                                    <h4 className="text-[27.64px] md:text-[18.49px] lg:text-[32px] leading-[34.56px] md:leading-[23.11px] lg:leading-10 text-grayscale-900">Zero Defects!</h4>
                                        <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                            <p className="text-[10px] leading-[150%] text-grayscale-900">#Innovation</p>
                                        </div>
                                </div>
                                <Image src="/webinar/priya.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px] w-[134.77px] h-[183.14px] md:w-[122.49px] md:h-[117.87px] lg:w-[156px] lg:h-[212px]" />
                            </div>
                                <div className="flex flex-col justify-between gap-[52.86px] md:gap-[18.84px] lg:gap-[26px] py-4 px-2 lg:p-4">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[14px] leading-[22px] text-grayscale-600">Feb 28, 2024</p>
                                        <div className="flex flex-col gap-1 lg:gap-3">
                                            <h5 className="text-[18px] lg:text-[24px] leading-7 lg:leading-[30px] text-grayscale-900">Achieving Zero Defects with QA Automation</h5>
                                            <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-grayscale-600 line-clamp-2">Implement QA automation practices that help minimize bugs and deliver software with zero defects.</p>
                                        </div>
                                    </div>
                                    <Link href="/webinar/webinardetail" className="cursor-pointer">
                                        <div className="flex flex-row gap-1 items-end cursor-pointer">
                                            <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-primary-500 font-medium underline">Read more</p>
                                            <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                        </div>
                                    </Link>
                                </div>
                        </FadeInSection>
                        <FadeInSection delay={0.5} className="bg-grayscale-50 rounded-[16px] hidden p-2 lg:min-h-[456px] md:flex md:flex-col">
                                <div className="bg-additional-sweet rounded-[12px] pl-[13.82px] md:pl-[14.58px] lg:pl-4 flex flex-row gap-[13.87px] lg:gap-6 justify-between">
                                    <div className="flex flex-col max-w-[164px] items-start justify-between my-[13.82px] md:my-[14.58px] lg:my-4">
                                        <h4 className="text-[27.64px] md:text-[18.49px] lg:text-[32px] leading-[34.56px] md:leading-[23.11px] lg:leading-10 text-grayscale-900">Scale QA Effortlessly</h4>
                                        <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                            <p className="text-[10px] leading-[150%] text-grayscale-900">#Productivity</p>
                                        </div>
                                    </div>
                                <Image src="/webinar/mark.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px] w-[134.77px] h-[183.14px] md:w-[122.49px] md:h-[117.87px] lg:w-[156px] lg:h-[212px]" />
                            </div>
                            <div className="flex flex-col justify-between gap-[52.86px] md:gap-[18.84px] lg:gap-[26px] py-4 px-2 lg:p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Feb 12, 2024</p>
                                    <div className="flex flex-col gap-1 lg:gap-3">
                                        <h5 className="text-[18px] lg:text-[24px] leading-7 lg:leading-[30px] text-grayscale-900">Building Scalable Testing Strategies</h5>
                                        <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-grayscale-600 line-clamp-2">Discover strategies to design scalable QA frameworks that grow with your organization’s needs.</p>
                                    </div>
                                </div>
                                <Link href="/webinar/webinardetail" className="cursor-pointer">
                                    <div className="flex flex-row gap-1 items-end cursor-pointer">
                                        <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-primary-500 font-medium underline">Read more</p>
                                        <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                    </div>
                                </Link>
                            </div>
                        </FadeInSection>
                        <FadeInSection delay={0.5} className="bg-grayscale-50 rounded-[16px] hidden p-2 lg:min-h-[456px] md:flex md:flex-col">
                            <div className="bg-additional-diamond rounded-[12px] pl-[13.82px] md:pl-[14.58px] lg:pl-4 flex flex-row gap-[13.87px] lg:gap-6 justify-between">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-[13.82px] md:my-[14.58px] lg:my-4">
                                    <h4 className="text-[27.64px] md:text-[18.49px] lg:text-[32px] leading-[34.56px] md:leading-[23.11px] lg:leading-10 text-grayscale-900">AI Test Script</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Innovation</p>
                                    </div>
                                </div>
                                <Image src="/webinar/maria.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px] w-[134.77px] h-[183.14px] md:w-[122.49px] md:h-[117.87px] lg:w-[156px] lg:h-[212px]" />
                            </div>
                            <div className="flex flex-col justify-between gap-[52.86px] md:gap-[18.84px] lg:gap-[26px] py-4 px-2 lg:p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Feb 8, 2024</p>
                                    <div className="flex flex-col gap-1 lg:gap-3">
                                        <h5 className="text-[18px] lg:text-[24px] leading-7 lg:leading-[30px] text-grayscale-900">Writing Test Scripts with AI Assistance</h5>
                                        <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-grayscale-600 line-clamp-2">Learn how AI can help you generate and refine test scripts, saving time and reducing errors.</p>
                                    </div>
                                </div>
                                <Link href="/webinar/webinardetail" className="cursor-pointer">
                                    <div className="flex flex-row gap-1 items-end cursor-pointer">
                                        <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-primary-500 font-medium underline">Read more</p>
                                        <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                    </div>
                                </Link>
                            </div>
                        </FadeInSection>
                    </div>
                    <div className="flex flex-row md:hidden justify-between items-center">
                        <div className="bg-[#FAFAFA] flex flex-col justify-center items-center rounded-full p-2">
                            <Image src="/webinar/arrow-left.png" alt="icon" width={16} height={16} />
                        </div>
                        <div className="bg-primary-500 flex flex-col justify-center items-center rounded-full p-2">
                            <Image src="/webinar/arrow-right.png" alt="icon" width={16} height={16} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}