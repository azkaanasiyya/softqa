import Image from "next/image";

export default function HomeTestimonials() {
    return (
        <div className="flex flex-col justify-center items-center px-[124px] pt-[124px] pb-[132px] border-y">
            <div className="max-w-[1192px] flex flex-col gap-16 items-center justify-center">
                <div className="max-w-[1192px] flex flex-col gap-4 items-center px-[306px]">
                <div className="flex flex-row gap-2">
                    <div className="h-[22px] w-[1px] bg-primary-500" />
                    <p className="text-[14px] font-medium leading-[22px] uppercase text-primary-500">we love developers</p>
                </div>
                <h2 className="max-w-[580px] text-[48px] leading-[60px] font-normal text-center text-grayscale-900">They talk about it <br /> better than us</h2>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col h-[448px] justify-between px-16 py-14 bg-additional-salty rounded-tl-[16px] rounded-bl-[16px]">
                        <p className="text-[28px] leading-[48px] font-normal text-grayscale-900">“SoftQA helps us deploy faster and increase our efficiency by 80%. Because of the confidence that we have on SoftQA we are able to test fast and release faster. It helps us debug our code easily, reduce developer feedback time, and helps in quickly implementing our go-to-market strategy.”</p>
                        <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-5 items-center">
                                <Image src="/home/testimonials/malik.png" alt="testimonial" width={64} height={64} />
                                <div className="flex flex-col gap-1.5">
                                    <p className="text-[18px] font-normal text-grayscale-900 leading-[28px]">Malik Ganteng</p>
                                    <p className="text-[16px] font-normal leading-[24px] text-grayscale-600">Senior Engineer, Clause</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <Image src="/home/testimonials/arrow-up.png" alt="testimonial" width={32} height={32} />
                                <Image src="/home/testimonials/arrow-down.png" alt="testimonial" width={32} height={32} />
                            </div> 
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-additional-salty w-7 h-[106px] rounded-tr-[16px] rounded-br-[8px]"></div>
                        <div className="bg-additional-palm w-7 h-[106px] rounded-tr-[8px] rounded-br-[8px]"></div>
                        <div className="bg-additional-light w-7 h-[106px] rounded-tr-[8px] rounded-br-[8px]"></div>
                        <div className="bg-additional-snow w-7 h-[106px] rounded-tr-[8px] rounded-br-[8px]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}