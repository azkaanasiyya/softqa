import { Input } from "../ui/input";
import Image from "next/image";

export default function WebinarFeatures() {
    return (
        <div className="bg-base-white flex flex-col justify-center items-center pt-[124px] pb-[132px] px-[124px]">
            <div className="max-w-[1192px] flex flex-col gap-10">
                <div className="flex flex-row justify-between items-center">
                    <h3 className="text-[40px] leading-[50px] text-grayscale-900">Watch past webinars</h3>
                    <div className="flex flex-row gap-4">
                        <Input type="search" placeholder="Search webinar..." />
                        <div className="inline-flex h-12 gap-2 p-3 items-center rounded-[12px] border-2 border-grayscale-100">
                            <p className="text-[16px] text-grayscale-900 whitespace-nowrap">Most recent</p>
                            <Image src="/webinar/down.png" alt="icon" width={20} height={20} className="object-contain"/>
                        </div>  
                        <div className="inline-flex h-12 gap-2 p-3 items-center rounded-[12px] border-2 border-grayscale-100">
                            <p className="text-[16px] text-grayscale-900 whitespace-nowrap">All categories</p>
                            <Image src="/webinar/down.png" alt="icon" width={20} height={20} className="object-contain"/>
                        </div>     
                    </div>
                </div>
                <div className="flex flex-col gap-16">
                    <div className="grid grid-cols-3 gap-8">
                        <div className="bg-grayscale-50 rounded-[16px] p-2 h-[456px] flex flex-col">
                            <div className="bg-additional-palm rounded-[12px] pl-4 flex flex-row gap-6">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-4">
                                    <h4 className="text-[32px] leading-10 text-grayscale-900">Open Source QA</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Innovation</p>
                                    </div>
                                </div>
                                <Image src="/webinar/john.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px]" />
                            </div>
                            <div className="flex flex-col justify-between h-[228px] p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Mar 23, 2024</p>
                                    <div className="flex flex-col gap-3">
                                        <h5 className="text-[24px] leading-[30px] text-grayscale-900">Exploring Open Source SoftQA Tools </h5>
                                        <p className="text-[16px] leading-6 text-grayscale-600">A guide to the best open-source QA tools for small and medium-sized teams.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-1 items-end cursor-pointer">
                                    <p className="text-[16px] leading-6 text-primary-500 font-medium underline">Read more</p>
                                    <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-grayscale-50 rounded-[16px] p-2 h-[456px] flex flex-col">
                            <div className="bg-additional-light rounded-[12px] pl-4 flex flex-row gap-6">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-4">
                                    <h4 className="text-[32px] leading-10 text-grayscale-900">100% Coverage</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Technology</p>
                                    </div>
                                </div>
                                <Image src="/webinar/david.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px]" />
                            </div>
                            <div className="flex flex-col justify-between h-[228px] p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Mar 20, 2024</p>
                                    <div className="flex flex-col gap-3">
                                        <h5 className="text-[24px] leading-[30px] text-grayscale-900">Achieving 100% Test Coverage</h5>
                                        <p className="text-[16px] leading-6 text-grayscale-600">Learn how to utilize batch mode and automation tools to cover all your test cases...</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-1 items-end cursor-pointer">
                                    <p className="text-[16px] leading-6 text-primary-500 font-medium underline">Read more</p>
                                    <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-grayscale-50 rounded-[16px] p-2 h-[456px] flex flex-col">
                            <div className="bg-additional-salty rounded-[12px] pl-4 flex flex-row gap-6">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-4">
                                    <h4 className="text-[32px] leading-10 text-grayscale-900">Secure Your Code</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Security</p>
                                    </div>
                                </div>
                                <Image src="/webinar/james.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px]" />
                            </div>
                            <div className="flex flex-col justify-between h-[228px] p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Mar 18, 2024</p>
                                    <div className="flex flex-col gap-3">
                                        <h5 className="text-[24px] leading-[30px] text-grayscale-900">Enhancing Security in Automated Testing</h5>
                                        <p className="text-[16px] leading-6 text-grayscale-600">Protect your code and maintain compliance with robust security measures in your autom...</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-1 items-end cursor-pointer">
                                    <p className="text-[16px] leading-6 text-primary-500 font-medium underline">Read more</p>
                                    <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-grayscale-50 rounded-[16px] p-2 h-[456px] flex flex-col">
                            <div className="bg-additional-snow rounded-[12px] pl-4 flex flex-row gap-6">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-4">
                                    <h4 className="text-[32px] leading-10 text-grayscale-900">Continuous QA</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#DevOps</p>
                                    </div>
                                </div>
                                <Image src="/webinar/laura.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px]" />
                            </div>
                            <div className="flex flex-col justify-between h-[228px] p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Mar 4, 2024</p>
                                    <div className="flex flex-col gap-3">
                                        <h5 className="text-[24px] leading-[30px] text-grayscale-900">Continuous Testing for DevOps Success</h5>
                                        <p className="text-[16px] leading-6 text-grayscale-600">Understand the role of continuous testing in DevOps pipelines and how it enhances colla...</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-1 items-end cursor-pointer">
                                    <p className="text-[16px] leading-6 text-primary-500 font-medium underline">Read more</p>
                                    <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-grayscale-50 rounded-[16px] p-2 h-[456px] flex flex-col">
                            <div className="bg-additional-purplish rounded-[12px] pl-4 flex flex-row gap-6">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-4">
                                    <h4 className="text-[32px] leading-10 text-grayscale-900">Zero Defects!</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Innovation</p>
                                    </div>
                                </div>
                                <Image src="/webinar/priya.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px]" />
                            </div>
                            <div className="flex flex-col justify-between h-[228px] p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Feb 28, 2024</p>
                                    <div className="flex flex-col gap-3">
                                        <h5 className="text-[24px] leading-[30px] text-grayscale-900">Achieving Zero Defects with QA Automation</h5>
                                        <p className="text-[16px] leading-6 text-grayscale-600">Implement QA automation practices that help minimize bugs and deliver software with zero...</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-1 items-end cursor-pointer">
                                    <p className="text-[16px] leading-6 text-primary-500 font-medium underline">Read more</p>
                                    <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-grayscale-50 rounded-[16px] p-2 h-[456px] flex flex-col">
                            <div className="bg-additional-sweet rounded-[12px] pl-4 flex flex-row gap-6">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-4">
                                    <h4 className="text-[32px] leading-10 text-grayscale-900">Scale QA Effortlessly</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Productivity</p>
                                    </div>
                                </div>
                                <Image src="/webinar/mark.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px]" />
                            </div>
                            <div className="flex flex-col justify-between h-[228px] p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Feb 12, 2024</p>
                                    <div className="flex flex-col gap-3">
                                        <h5 className="text-[24px] leading-[30px] text-grayscale-900">Building Scalable Testing Strategies</h5>
                                        <p className="text-[16px] leading-6 text-grayscale-600">Discover strategies to design scalable QA frameworks that grow with your organization&apos;...</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-1 items-end cursor-pointer">
                                    <p className="text-[16px] leading-6 text-primary-500 font-medium underline">Read more</p>
                                    <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-grayscale-50 rounded-[16px] p-2 h-[456px] flex flex-col">
                            <div className="bg-additional-diamond rounded-[12px] pl-4 flex flex-row gap-6">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-4">
                                    <h4 className="text-[32px] leading-10 text-grayscale-900">AI Test Script</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Innovation</p>
                                    </div>
                                </div>
                                <Image src="/webinar/maria.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px]" />
                            </div>
                            <div className="flex flex-col justify-between h-[228px] p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Feb 8, 2024</p>
                                    <div className="flex flex-col gap-3">
                                        <h5 className="text-[24px] leading-[30px] text-grayscale-900">Writing Test Scripts with AI Assistance</h5>
                                        <p className="text-[16px] leading-6 text-grayscale-600">Learn how AI can help you generate and refine test scripts, saving time and reducing...</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-1 items-end cursor-pointer">
                                    <p className="text-[16px] leading-6 text-primary-500 font-medium underline">Read more</p>
                                    <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-grayscale-50 rounded-[16px] p-2 h-[456px] flex flex-col">
                            <div className="bg-additional-palm rounded-[12px] pl-4 flex flex-row gap-6">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-4">
                                    <h4 className="text-[32px] leading-10 text-grayscale-900">Collaborate Better</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Teamwork</p>
                                    </div>
                                </div>
                                <Image src="/webinar/monica-rivera.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px]" />
                            </div>
                            <div className="flex flex-col justify-between h-[228px] p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Feb 1, 2024</p>
                                    <div className="flex flex-col gap-3">
                                        <h5 className="text-[24px] leading-[30px] text-grayscale-900">Bridging the Gap: Developers and Testers</h5>
                                        <p className="text-[16px] leading-6 text-grayscale-600">Foster collaboration between development and QA teams to enhance software quality a...</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-1 items-end cursor-pointer">
                                    <p className="text-[16px] leading-6 text-primary-500 font-medium underline">Read more</p>
                                    <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-grayscale-50 rounded-[16px] p-2 h-[456px] flex flex-col">
                            <div className="bg-additional-light rounded-[12px] pl-4 flex flex-row gap-6">
                                <div className="flex flex-col max-w-[164px] items-start justify-between my-4">
                                    <h4 className="text-[32px] leading-10 text-grayscale-900">QA Solution</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Education</p>
                                    </div>
                                </div>
                                <Image src="/webinar/michael.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px]" />
                            </div>
                            <div className="flex flex-col justify-between h-[228px] p-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Jan 15, 2024</p>
                                    <div className="flex flex-col gap-3">
                                        <h5 className="text-[24px] leading-[30px] text-grayscale-900">QA Automation: Challenges and Solutions</h5>
                                        <p className="text-[16px] leading-6 text-grayscale-600">Overcome the common challenges faced during QA automation with tried-and-true so...</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-1 items-end cursor-pointer">
                                    <p className="text-[16px] leading-6 text-primary-500 font-medium underline">Read more</p>
                                    <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-4 items-center">
                            <div className="bg-[#FAFAFA] flex flex-col justify-center items-center rounded-full p-2">
                                <Image src="/webinar/arrow-left.png" alt="icon" width={16} height={16} />
                            </div>
                            <span className="text-[16px] leading-6 text-[#ABB1B9] font-medium">Previous</span>
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
                            <span className="text-[16px] leading-6 text-primary-900 font-medium">Next</span>
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