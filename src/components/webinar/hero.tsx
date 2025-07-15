import Image from "next/image";
import { Button } from "../ui/button";

export default function WebinarHero() {
    return (
        <div className="bg-primary-900 flex flex-col justify-center items-center py-[104px] px-[124px]">
            <div className="max-w-[1192px] flex flex-col justify-center items-center gap-[104px]">
                <div className="flex flex-col justify-center items-center gap-6">
                    <div className="flex flex-col gap-4 items-center max-w-[786px]">
                        <div className="flex flex-row gap-2">
                            <div className="h-[22px] w-[1px] bg-cyan-500" />
                            <p className="text-[14px] font-medium leading-[22px] uppercase text-cyan-500">our webinar</p>
                        </div>
                        <h1 className="text-[56px] leading-[70px] font-normal text-base-white text-center">Grow as a Developer with our Training Webinars</h1>
                    </div>
                    <p className="max-w-[654px] text-center text-[18px] leading-8 font-normal text-[#FFFFFFEB]">Free live training workshops, Monday to Friday, from the comfort of your own home. Let’s learn, grow, and build together.</p>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-row justify-between items-center">
                        <h3 className="text-[40px] leading-[50px] text-base-white">Upcoming</h3>
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col justify-center cursor-pointer items-center w-10 h-10 rounded-full p-2.5 border-2 border-white-opacity-12">
                                <Image src="/webinar/left-web.png" alt="icon" width={20} height={20} />
                            </div>
                            <div className="bg-cyan-500 flex flex-col justify-center cursor-pointer items-center w-10 h-10 rounded-full p-2.5">
                                <Image src="/webinar/right-web.png" alt="icon" width={20} height={20} />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="w-[576px] h-[464px] flex flex-col p-2 rounded-[16px] bg-grayscale-50">
                            <div className="bg-additional-lavender rounded-[12px] pl-4 flex flex-row justify-between">
                                <div className="flex flex-col justify-between my-4 items-start">
                                    <h4 className="text-[32px] leading-10 text-grayscale-900">Cost- <br />Efficient QA</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#Business</p>
                                    </div>
                                </div>
                                <Image src="/webinar/anthony.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px]" />
                            </div>
                            <div className="h-[236px] flex flex-col justify-between items-start py-4 pl-4 pr-16">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Mar 23, 2024</p>
                                    <div className="flex flex-col gap-3">
                                        <h5 className="text-[24px] leading-[30px] text-grayscale-900">Reducing QA Costs with Automation</h5>
                                        <p className="text-[16px] leading-6 text-grayscale-600">Learn how automation can significantly reduce quality assurance costs while ensuring high software standards. Discover practical t...</p>
                                    </div>
                                </div>
                                <Button variant="request" size="medium" className="text-cyan-500">Register</Button>
                            </div>
                        </div>
                        <div className="w-[576px] h-[464px] flex flex-col p-2 rounded-[16px] bg-grayscale-50">
                            <div className="bg-additional-touch rounded-[12px] pl-4 flex flex-row justify-between">
                                <div className="flex flex-col justify-between my-4 items-start">
                                    <h4 className="text-[32px] leading-10 text-grayscale-900">Machine <br />Learning QA</h4>
                                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                                        <p className="text-[10px] leading-[150%] text-grayscale-900">#innovation</p>
                                    </div>
                                </div>
                                <Image src="/webinar/monica.png" alt="icon" width={156} height={212} className="rounded-tr-[12px] rounded-br-[12px]" />
                            </div>
                            <div className="h-[236px] flex flex-col justify-between items-start py-4 pl-4 pr-16">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] leading-[22px] text-grayscale-600">Mar 23, 2024</p>
                                    <div className="flex flex-col gap-3">
                                        <h5 className="text-[24px] leading-[30px] text-grayscale-900">The Future of QA with Machine Learning</h5>
                                        <p className="text-[16px] leading-6 text-grayscale-600">Explore how machine learning is revolutionizing QA by enabling smarter and faster testing. Gain insights into tools and trends that...</p>
                                    </div>
                                </div>
                                <Button variant="request" size="medium" className="text-cyan-500">Register</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}