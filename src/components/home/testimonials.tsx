import Image from "next/image";

export default function HomeTestimonials() {
    return (
        <div className="flex flex-col justify-center items-center px-6 md:px-8 lg:px-[124px] py-12 md:py-20 lg:pt-[124px] lg:pb-[132px] border-y">
            <div className="max-w-[1192px] flex flex-col gap-10 md:gap-12 lg:gap-16 items-center justify-center">
                <div className="max-w-[580px] flex flex-col gap-3 md:gap-4 items-center">
                    <div className="flex flex-row gap-2">
                        <div className="h-[22px] w-[1px] bg-primary-500" />
                        <p className="text-[14px] font-medium leading-[22px] uppercase text-primary-500">we love developers</p>
                    </div>
                    <h2 className="max-w-[580px] text-[32px] md:text-[48px] leading-10 md:leading-[60px] font-normal text-center text-grayscale-900">They talk about it <br /> better than us</h2>
                </div>
                <div className="flex flex-col-reverse md:flex-row items-stretch">
                    <div className="flex flex-row md:hidden gap-2 mt-6 items-center justify-center">
                        <div className="bg-transparent cursor-pointer hover:bg-primary-50 rounded-[12px] w-12 h-12 flex flex-col justify-center items-center">
                            <Image src="/home/testimonials/arrow-left.png" alt="testimonial" width={20} height={20}/>
                        </div>
                        <div className="bg-primary-50 cursor-pointer hover:bg-primary-100 rounded-[12px] w-12 h-12 flex flex-col justify-center items-center">
                            <Image src="/home/testimonials/arrow-right.png" alt="testimonial" width={20} height={20}/>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 min-h-[448px] justify-between md:px-10 lg:px-16 p-6 md:py-12 lg:py-14 bg-additional-salty rounded-b-[8px] md:rounded-b-[0px] md:rounded-tl-[16px] md:rounded-bl-[16px]">
                        <p className="text-[20px] md:text-[28px] leading-9 md:leading-[48px] font-normal text-grayscale-900">“SoftQA helps us deploy faster and increase our efficiency by 80%. Because of the confidence that we have on SoftQA we are able to test fast and release faster. It helps us debug our code easily, reduce developer feedback time, and helps in quickly implementing our go-to-market strategy.”</p>
                        <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-5 items-center">
                                <Image src="/home/testimonials/malik.png" alt="testimonial" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16"/>
                                <div className="flex flex-col gap-1.5">
                                    <p className="text-[16px] md:text-[18px] font-normal text-grayscale-900 leading-6 md:leading-[28px]">Malik Ganteng</p>
                                    <p className="text-[14px] leading-[22px] md:text-[16px] font-normal md:leading-[24px] text-grayscale-600">Senior Engineer, Clause</p>
                                </div>
                            </div>
                            <div className="hidden md:flex md:flex-col">
                                <Image src="/home/testimonials/arrow-up.png" alt="testimonial" width={32} height={32} />
                                <Image src="/home/testimonials/arrow-down.png" alt="testimonial" width={32} height={32} />
                            </div> 
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col w-7 gap-2">
                        <div className="flex-1 bg-additional-salty rounded-tr-[16px] rounded-br-[8px]"></div>
                        <div className="flex-1 bg-additional-palm rounded-tr-[8px] rounded-br-[8px]" ></div>
                        <div className="flex-1 bg-additional-light rounded-tr-[8px] rounded-br-[8px]"></div>
                        <div className="flex-1 bg-additional-snow rounded-tr-[8px] rounded-br-[8px]"></div>
                    </div>
                    <div className="flex md:hidden flex-row h-4 gap-1">
                        <div className="w-1/4 bg-additional-salty rounded-t-[8px]"></div>
                        <div className="w-1/4 bg-additional-palm rounded-t-[8px]"></div>
                        <div className="w-1/4 bg-additional-light rounded-t-[8px]"></div>
                        <div className="w-1/4 bg-additional-snow rounded-t-[8px]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}