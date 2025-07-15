import Image from "next/image";

export default function MoreWebDetail() {
    return (
        <div className="flex flex-col justify-center items-center px-[124px]">
            <div className="max-w-[1192px] pt-20 pb-[104px] border-t-2 border-grayscale-100 flex flex-col gap-8">
                <div className="flex flex-row w-full justify-between items-center">
                    <h3 className="text-[40px] leading-[50px] text-grayscale-900">More webinars from SoftQA</h3>
                    <div className="inline-flex h-12 gap-1.5 p-3 items-center rounded-[12px] border-2 border-grayscale-100">
                        <p className="text-[14px] leading-[22px] text-primary-500">See all</p>
                        <Image src="/webinar/right-web.png" alt="icon" width={16} height={16}/>
                    </div> 
                </div>
                <div className="grid grid-cols-3 gap-8">
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
                </div>
            </div>
        </div>
    )
}