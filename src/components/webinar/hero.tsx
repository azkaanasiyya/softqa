import Image from "next/image";
import { Button } from "../ui/button";

export default function WebinarHero() {
    return (
        <div className="bg-primary-900 flex flex-col justify-center items-center pt-16 pb-12 md:py-20 lg:py-[104px] px-6 md:px-8 lg:px-[124px]">
            <div className="max-w-[1192px] flex flex-col justify-center items-center gap-[104px]">
                <div className="flex flex-col justify-center items-center gap-6">
                    <div className="flex flex-col gap-4 items-center max-w-[786px]">
                        <div className="flex flex-row gap-2">
                            <div className="h-[22px] w-[1px] bg-cyan-500" />
                            <p className="text-[14px] font-medium leading-[22px] uppercase text-cyan-500">our webinar</p>
                        </div>
                        <h1 className="text-[40px] md:text-[56px] leading-[50px] md:leading-[70px] font-normal text-base-white text-center">Grow as a Developer with our Training Webinars</h1>
                    </div>
                    <p className="max-w-[654px] text-center text-[18px] leading-8 font-normal text-[#FFFFFFEB]">Free live training workshops, Monday to Friday, from the comfort of your own home. Let’s learn, grow, and build together.</p>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-row justify-between items-center">
                        <h3 className="text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-10 lg:leading-[50px] text-base-white">Upcoming</h3>
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col justify-center cursor-pointer items-center w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-white-opacity-12">
                                <Image src="/webinar/left-web.png" alt="icon" width={20} height={20} className="md:w-[20px] md:h-[20px] w-4 h-4" />
                            </div>
                            <div className="bg-cyan-500 flex flex-col justify-center cursor-pointer items-center w-8 md:w-10 h-8 md:h-10 rounded-full">
                                <Image src="/webinar/right-web.png" alt="icon" width={20} height={20} className="md:w-[20px] md:h-[20px] w-4 h-4" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="max-w-[576px] min-h-[464px] w-full h-full flex flex-col p-2 rounded-[16px] bg-grayscale-50">
                            <div className="bg-additional-lavender rounded-[12px] pl-4 flex flex-row justify-between">
                                <div className="flex flex-col justify-between my-4 items-start">
                                    <h4 className="text-[23.04px] md:text-[24px] lg:text-[32px] leading-[28.8px] md:leading-[30px] lg:leading-10 text-grayscale-900">Cost- <br />Efficient QA</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Business</p>
                                    </div>
                                </div>
                                <Image src="/webinar/anthony.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px]" />
                            </div>
                            <div className="min-h-[236px] h-full flex flex-col gap-8 md:gap-6 lg:justify-between items-start px-3 pb-3 pt-4 lg:py-4 lg:pl-4 lg:pr-16">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Mar 23, 2024</p>
                                    <div className="flex flex-col gap-2 lg:gap-3">
                                        <h5 className="text-[24px] leading-[30px] text-grayscale-900">Reducing QA Costs with Automation</h5>
                                        <p className="text-[16px] leading-6 text-grayscale-600">Learn how automation can significantly reduce quality assurance costs while ensuring high software standards. Discover practical t...</p>
                                    </div>
                                </div>
                                <Button variant="request" size="medium" className="text-cyan-500 w-full lg:w-auto">Register</Button>
                            </div>
                        </div>
                        <div className="max-w-[576px] min-h-[464px] w-full h-full md:flex hidden md:flex-col p-2 rounded-[16px] bg-grayscale-50">
                            <div className="bg-additional-touch rounded-[12px] pl-4 flex flex-row justify-between">
                                <div className="flex flex-col justify-between my-4 items-start">
                                    <h4 className="text-[23.04px] md:text-[24px] lg:text-[32px] leading-[28.8px] text-grayscale-900">Machine <br />Learning QA</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#innovation</p>
                                    </div>
                                </div>
                                <Image src="/webinar/monica.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px]" />
                            </div>
                            <div className="min-h-[236px] h-full flex flex-col gap-8 md:gap-6 lg:justify-between items-start px-3 pb-3 pt-4 lg:py-4 lg:pl-4 lg:pr-16">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Mar 23, 2024</p>
                                    <div className="flex flex-col gap-3">
                                        <h5 className="text-[24px] leading-[30px] text-grayscale-900">The Future of QA with Machine Learning</h5>
                                        <p className="text-[16px] leading-6 text-grayscale-600">Explore how machine learning is revolutionizing QA by enabling smarter and faster testing. Gain insights into tools and trends that...</p>
                                    </div>
                                </div>
                                <Button variant="request" size="medium" className="text-cyan-500 w-full lg:w-auto">Register</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}