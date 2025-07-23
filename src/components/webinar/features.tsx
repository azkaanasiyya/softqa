// import { Input } from "../ui/input";
import Image from "next/image";
import Link from "next/link";
import { InputWebinar } from "../custom/inputwebinar";

export default function WebinarFeatures() {
    return (
        <div className="bg-base-white flex flex-col justify-center items-center pt-[48.49px] pb-12 md:py-16 lg:pt-[124px] lg:pb-[132px] px-6 md:px-8 lg:px-[124px]">
            <div className="max-w-[1192px] flex flex-col gap-4 md:gap-6 lg:gap-10">
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:justify-between items-stretch lg:items-center">
                    <h3 className="text-[32px] md:text-[40px] leading-10 md:leading-[50px] text-grayscale-900 w-full">Watch past webinars</h3>
                    <div className="flex flex-row gap-4 w-full justify-between lg:justify-end">
                        <InputWebinar placeholder="Search webinar..."/>
                        <div className="hidden md:inline-flex h-12 gap-2 p-3 items-center rounded-[12px] border-2 border-grayscale-100">
                            <p className="text-[16px] text-grayscale-900 whitespace-nowrap">Most recent</p>
                            <Image src="/webinar/down.png" alt="icon" width={20} height={20} className="object-contain"/>
                        </div>  
                        <div className="hidden md:inline-flex  h-12 gap-2 p-3 items-center rounded-[12px] border-2 border-grayscale-100">
                            <p className="text-[16px] text-grayscale-900 whitespace-nowrap">All categories</p>
                            <Image src="/webinar/down.png" alt="icon" width={20} height={20} className="object-contain"/>
                        </div>
                        <div className="flex flex-col md:hidden items-center justify-center w-12 h-12 rounded-[12px] border-2 border-grayscale-100">
                            <Image src="/webinar/filter.png" alt="icon" width={20} height={20} className="w-5 h-5"/>
                        </div>     
                    </div>
                </div>
                <div className="flex flex-col gap-10 lg:gap-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                        <div className="bg-grayscale-50 rounded-[16px] p-2 lg:min-h-[456px] flex flex-col">
                            <div className="bg-additional-palm rounded-[12px] pl-[13.82px] md:pl-[14.58px] lg:pl-4 flex flex-row gap-6 justify-between">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-[13.82px] md:my-[14.58px] lg:my-4">
                                    <h4 className="text-[27.46px] md:text-[29.16px] lg:text-[32px] leading-[34.56px] md:leading-[36.44px] lg:leading-10 text-grayscale-900">Open Source QA</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Innovation</p>
                                    </div>
                                </div>
                                <Image src="/webinar/john.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px] w-[134.77px] h-[183.14px] md:w-[142.13px] md:h-[193.16px] lg:w-[156px] lg:h-[212px]" />
                            </div>
                            <div className="flex flex-col gap-[52.86px] md:gap-[18.84px] lg:gap-[26px] py-4 px-2 lg:p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Mar 23, 2024</p>
                                    <div className="flex flex-col gap-1 lg:gap-3">
                                        <h5 className="text-[18px] md:text-[24px] leading-7 md:leading-[30px] text-grayscale-900">Exploring Open Source SoftQA Tools </h5>
                                        <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-grayscale-600 line-clamp-2">A guide to the best open-source QA tools for small and medium-sized teams.</p>
                                    </div>
                                </div>
                                <Link href="/webinar/webinardetail" className="cursor-pointer">
                                    <div className="flex flex-row gap-1 items-end cursor-pointer">
                                        <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-primary-500 font-medium underline">Read more</p>
                                        <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-grayscale-50 rounded-[16px] p-2 lg:min-h-[456px] flex flex-col">
                            <div className="bg-additional-light rounded-[12px] pl-[13.82px] md:pl-[14.58px] lg:pl-4 flex flex-row gap-6 justify-between">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-[13.82px] md:my-[14.58px] lg:my-4">
                                    <h4 className="text-[27.46px] md:text-[29.16px] lg:text-[32px] leading-[34.56px] md:leading-[36.44px] lg:leading-10 text-grayscale-900">100% Coverage</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Technology</p>
                                    </div>
                                </div>
                                <Image src="/webinar/david.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px] w-[134.77px] h-[183.14px] md:w-[142.13px] md:h-[193.16px] lg:w-[156px] lg:h-[212px]" />
                            </div>
                            <div className="flex flex-col justify-between gap-[52.86px] md:gap-[18.84px] lg:gap-[26px] py-4 px-2 lg:p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Mar 20, 2024</p>
                                    <div className="flex flex-col gap-1 lg:gap-3">
                                        <h5 className="text-[18px] md:text-[24px] leading-7 md:leading-[30px] text-grayscale-900">Achieving 100% Test Coverage</h5>
                                        <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-grayscale-600 line-clamp-2">Learn how to utilize batch mode and automation tools to cover all your test cases and minimize technical debt.</p>
                                    </div>
                                </div>
                                <Link href="/webinar/webinardetail" className="cursor-pointer">
                                    <div className="flex flex-row gap-1 items-end cursor-pointer">
                                        <p className="text-[16px] leading-6 text-primary-500 font-medium underline">Read more</p>
                                        <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-grayscale-50 rounded-[16px] p-2 lg:min-h-[456px] flex flex-col">
                            <div className="bg-additional-salty rounded-[12px] pl-[13.82px] md:pl-[14.58px] lg:pl-4 flex flex-row gap-6 justify-between">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-[13.82px] md:my-[14.58px] lg:my-4">
                                    <h4 className="text-[27.46px] md:text-[29.16px] lg:text-[32px] leading-[34.56px] md:leading-[36.44px] lg:leading-10 text-grayscale-900">Secure Your Code</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Security</p>
                                    </div>
                                </div>
                                <Image src="/webinar/james.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px] w-[134.77px] h-[183.14px] md:w-[142.13px] md:h-[193.16px] lg:w-[156px] lg:h-[212px]" />
                            </div>
                            <div className="flex flex-col justify-between gap-[52.86px] md:gap-[18.84px] lg:gap-[26px] py-4 px-2 lg:p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Mar 18, 2024</p>
                                    <div className="flex flex-col gap-1 lg:gap-3">
                                        <h5 className="text-[18px] md:text-[24px] leading-7 md:leading-[30px] text-grayscale-900">Enhancing Security in Automated Testing</h5>
                                        <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-grayscale-600 line-clamp-2">Protect your code and maintain compliance with robust security measures in your automated testing processes.</p>
                                    </div>
                                </div>
                                <Link href="/webinar/webinardetail" className="cursor-pointer">
                                    <div className="flex flex-row gap-1 items-end cursor-pointer">
                                        <p className="text-[16px] leading-6 text-primary-500 font-medium underline">Read more</p>
                                        <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-grayscale-50 rounded-[16px] p-2 lg:min-h-[456px] flex flex-col">
                            <div className="bg-additional-snow rounded-[12px] pl-[13.82px] md:pl-[14.58px] lg:pl-4 flex flex-row gap-6 justify-between">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-[13.82px] md:my-[14.58px] lg:my-4">
                                    <h4 className="text-[27.46px] md:text-[29.16px] lg:text-[32px] leading-[34.56px] md:leading-[36.44px] lg:leading-10 text-grayscale-900">Continuous QA</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#DevOps</p>
                                    </div>
                                </div>
                                <Image src="/webinar/laura.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px] w-[134.77px] h-[183.14px] md:w-[142.13px] md:h-[193.16px] lg:w-[156px] lg:h-[212px]" />
                            </div>
                            <div className="flex flex-col justify-between gap-[52.86px] md:gap-[18.84px] lg:gap-[26px] py-4 px-2 lg:p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Mar 4, 2024</p>
                                    <div className="flex flex-col gap-1 lg:gap-3">
                                        <h5 className="text-[18px] md:text-[24px] leading-7 md:leading-[30px] text-grayscale-900">Continuous Testing for DevOps Success</h5>
                                        <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-grayscale-600 line-clamp-2">Understand the role of continuous testing in DevOps pipelines and how it enhances collaboration and delivery speed.</p>
                                    </div>
                                </div>
                               <Link href="/webinar/webinardetail" className="cursor-pointer">
                                    <div className="flex flex-row gap-1 items-end cursor-pointer">
                                        <p className="text-[16px] leading-6 text-primary-500 font-medium underline">Read more</p>
                                        <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-grayscale-50 rounded-[16px] p-2 lg:min-h-[456px] flex flex-col">
                            <div className="bg-additional-purplish rounded-[12px] pl-[13.82px] md:pl-[14.58px] lg:pl-4 flex flex-row gap-6 justify-between">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-[13.82px] md:my-[14.58px] lg:my-4">
                                    <h4 className="text-[27.46px] md:text-[29.16px] lg:text-[32px] leading-[34.56px] md:leading-[36.44px] lg:leading-10 text-grayscale-900">Zero Defects!</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Innovation</p>
                                    </div>
                                </div>
                                <Image src="/webinar/priya.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px] w-[134.77px] h-[183.14px] md:w-[142.13px] md:h-[193.16px] lg:w-[156px] lg:h-[212px]" />
                            </div>
                            <div className="flex flex-col justify-between gap-[52.86px] md:gap-[18.84px] lg:gap-[26px] py-4 px-2 lg:p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Feb 28, 2024</p>
                                    <div className="flex flex-col gap-1 lg:gap-3">
                                        <h5 className="text-[18px] md:text-[24px] leading-7 md:leading-[30px] text-grayscale-900">Achieving Zero Defects with QA Automation</h5>
                                        <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-grayscale-600 line-clamp-2">Implement QA automation practices that help minimize bugs and deliver software with zero defects.</p>
                                    </div>
                                </div>
                                <Link href="/webinar/webinardetail" className="cursor-pointer">
                                    <div className="flex flex-row gap-1 items-end cursor-pointer">
                                        <p className="text-[16px] leading-6 text-primary-500 font-medium underline">Read more</p>
                                        <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-grayscale-50 rounded-[16px] p-2 lg:min-h-[456px] flex flex-col">
                            <div className="bg-additional-sweet rounded-[12px] pl-[13.82px] md:pl-[14.58px] lg:pl-4 flex flex-row gap-6 justify-between">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-[13.82px] md:my-[14.58px] lg:my-4">
                                    <h4 className="text-[27.46px] md:text-[29.16px] lg:text-[32px] leading-[34.56px] md:leading-[36.44px] lg:leading-10 text-grayscale-900">Scale QA Effortlessly</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Productivity</p>
                                    </div>
                                </div>
                                <Image src="/webinar/mark.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px] w-[134.77px] h-[183.14px] md:w-[142.13px] md:h-[193.16px] lg:w-[156px] lg:h-[212px]" />
                            </div>
                            <div className="flex flex-col justify-between gap-[52.86px] md:gap-[18.84px] lg:gap-[26px] py-4 px-2 lg:p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Feb 12, 2024</p>
                                    <div className="flex flex-col gap-1 lg:gap-3">
                                        <h5 className="text-[18px] md:text-[24px] leading-7 md:leading-[30px] text-grayscale-900">Building Scalable Testing Strategies</h5>
                                        <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-grayscale-600 line-clamp-2">Discover strategies to design scalable QA frameworks that grow with your organization’s needs.</p>
                                    </div>
                                </div>
                                <Link href="/webinar/webinardetail" className="cursor-pointer">
                                    <div className="flex flex-row gap-1 items-end cursor-pointer">
                                        <p className="text-[16px] leading-6 text-primary-500 font-medium underline">Read more</p>
                                        <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-grayscale-50 rounded-[16px] p-2 lg:min-h-[456px] flex flex-col">
                            <div className="bg-additional-diamond rounded-[12px] pl-[13.82px] md:pl-[14.58px] lg:pl-4 flex flex-row gap-6 justify-between">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-[13.82px] md:my-[14.58px] lg:my-4">
                                    <h4 className="text-[27.46px] md:text-[29.16px] lg:text-[32px] leading-[34.56px] md:leading-[36.44px] lg:leading-10 text-grayscale-900">AI Test Script</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Innovation</p>
                                    </div>
                                </div>
                                <Image src="/webinar/maria.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px] w-[134.77px] h-[183.14px] md:w-[142.13px] md:h-[193.16px] lg:w-[156px] lg:h-[212px]" />
                            </div>
                            <div className="flex flex-col justify-between gap-[52.86px] md:gap-[18.84px] lg:gap-[26px] py-4 px-2 lg:p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Feb 8, 2024</p>
                                    <div className="flex flex-col gap-1 lg:gap-3">
                                        <h5 className="text-[18px] md:text-[24px] leading-7 md:leading-[30px] text-grayscale-900">Writing Test Scripts with AI Assistance</h5>
                                        <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-grayscale-600 line-clamp-2">Learn how AI can help you generate and refine test scripts, saving time and reducing errors.</p>
                                    </div>
                                </div>
                                <Link href="/webinar/webinardetail" className="cursor-pointer">
                                    <div className="flex flex-row gap-1 items-end cursor-pointer">
                                        <p className="text-[16px] leading-6 text-primary-500 font-medium underline">Read more</p>
                                        <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-grayscale-50 rounded-[16px] p-2 lg:min-h-[456px] flex flex-col">
                            <div className="bg-additional-palm rounded-[12px] pl-[13.82px] md:pl-[14.58px] lg:pl-4 flex flex-row gap-6 justify-between">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-[13.82px] md:my-[14.58px] lg:my-4">
                                    <h4 className="text-[27.46px] md:text-[29.16px] lg:text-[32px] leading-[34.56px] md:leading-[36.44px] lg:leading-10 text-grayscale-900">Collaborate Better</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Teamwork</p>
                                    </div>
                                </div>
                                <Image src="/webinar/monica-rivera.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px] w-[134.77px] h-[183.14px] md:w-[142.13px] md:h-[193.16px] lg:w-[156px] lg:h-[212px]" />
                            </div>
                            <div className="flex flex-col justify-between gap-[52.86px] md:gap-[18.84px] lg:gap-[26px] py-4 px-2 lg:p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Feb 1, 2024</p>
                                    <div className="flex flex-col gap-1 lg:gap-3">
                                        <h5 className="text-[18px] md:text-[24px] leading-7 md:leading-[30px] text-grayscale-900">Bridging the Gap: Developers and Testers</h5>
                                        <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-grayscale-600 line-clamp-2">Foster collaboration between development and QA teams to enhance software quality and team dynamics.</p>
                                    </div>
                                </div>
                                <Link href="/webinar/webinardetail" className="cursor-pointer">
                                    <div className="flex flex-row gap-1 items-end cursor-pointer">
                                        <p className="text-[16px] leading-6 text-primary-500 font-medium underline">Read more</p>
                                        <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-grayscale-50 rounded-[16px] p-2 lg:min-h-[456px] flex flex-col">
                            <div className="bg-additional-light rounded-[12px] pl-[13.82px] md:pl-[14.58px] lg:pl-4 flex flex-row gap-6 justify-between">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-[13.82px] md:my-[14.58px] lg:my-4">
                                    <h4 className="text-[27.46px] md:text-[29.16px] lg:text-[32px] leading-[34.56px] md:leading-[36.44px] lg:leading-10 text-grayscale-900">QA Solution</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Education</p>
                                    </div>
                                </div>
                                <Image src="/webinar/michael.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px] w-[134.77px] h-[183.14px] md:w-[142.13px] md:h-[193.16px] lg:w-[156px] lg:h-[212px]" />
                            </div>
                            <div className="flex flex-col justify-between gap-[52.86px] md:gap-[18.84px] lg:gap-[26px] py-4 px-2 lg:p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Jan 15, 2024</p>
                                    <div className="flex flex-col gap-1 lg:gap-3">
                                        <h5 className="text-[18px] md:text-[24px] leading-7 md:leading-[30px] text-grayscale-900">QA Automation: Challenges and Solutions</h5>
                                        <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-grayscale-600 line-clamp-2">Overcome the common challenges faced during QA automation with tried-and-true solutions.</p>
                                    </div>
                                </div>
                                <Link href="/webinar/webinardetail" className="cursor-pointer">
                                    <div className="flex flex-row gap-1 items-end cursor-pointer">
                                        <p className="text-[16px] leading-6 text-primary-500 font-medium underline">Read more</p>
                                        <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-4 items-center">
                            <div className="bg-[#FAFAFA] flex flex-col justify-center items-center rounded-full p-2">
                                <Image src="/webinar/arrow-left.png" alt="icon" width={16} height={16} />
                            </div>
                            <span className="hidden md:block text-[16px] leading-6 text-[#ABB1B9] font-medium">Previous</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <div className="bg-primary-500 rounded-[12px] px-1 pt-0.5 pb-1 w-10 h-10 flex flex-col items-center justify-center">
                                <span className="w-8 h-6 text-[16px] text-center font-medium leading-6 text-base-white">1</span>
                            </div>
                            <div className="bg-base-white border-2 border-grayscale-100 rounded-[12px] px-1 pt-0.5 pb-1 w-10 h-10 flex flex-col items-center justify-center">
                                <span className="w-8 h-6 text-[16px] text-center font-medium leading-6 text-primary-500">2</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <span className="hidden md:block text-[16px] leading-6 text-primary-900 font-medium">Next</span>
                            <div className="bg-primary-500 flex flex-col justify-center items-center rounded-full p-2">
                                <Image src="/webinar/arrow-right.png" alt="icon" width={16} height={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}