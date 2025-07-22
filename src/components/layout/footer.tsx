import Image from "next/image";

export default function Footer() {
    return (
        <div className="bg-[url('/footer/bg-footer-mobile.png')] md:bg-[url('/footer/bg-footer-tablet.png')] lg:bg-[url('/footer/bg-footer.png')] bg-no-repeat bg-top bg-cover pt-12 md:pt-[88px] lg:pt-[104px] pb-8 md:pb-10 lg:pb-8 px-6 md:px-8 lg:px-[124px] flex flex-col items-stretch justify-center">
            <div className="max-w-[1192px] flex flex-col gap-20 md:gap-[104px]">
                <div className="flex flex-col gap-12 md:gap-8 max-w-[1192px] w-full items-center">
                    <div className="flex flex-col items-center justify-center gap-4 md:gap-6 max-w-[305px] w-full">
                        <Image src="/footer/logo-footer.svg" alt="footer" width={64} height={64} />
                        <p className="text-center text-[16px] leading-[24px] font-normal text-base-white opacity-[88%]">Deliver unparalleled digital experience with our AI-powered unit testing.</p>
                    </div>
                    <div className="flex flex-row justify-between max-w-[1192px] w-full items-center">
                        <ul className="flex flex-col gap-8">
                            <li className="text-[24px] md:text-[32px] leading-[30px] md:leading-[40px] font-normal text-base-white">Home</li>
                            <li className="text-[24px] md:text-[32px] leading-[30px] md:leading-[40px] font-normal text-base-white">Developer</li>
                        </ul>
                        <ul className="flex flex-col gap-8">
                            <li className="text-[24px] md:text-[32px] leading-[30px] md:leading-[40px] font-normal text-base-white text-end">Webinar</li>
                            <li className="text-[24px] md:text-[32px] leading-[30px] md:leading-[40px] font-normal text-base-white text-end">Pricing</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row md:justify-between items-center gap-4 md:gap-0 pt-6 md:pt-8 border-t border-[#FFFFFF1F]">
                    <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-normal text-white-opacity-80">© Copyright 2025 SoftQA. All rights reserved.</p>
                    <div className="flex flex-row gap-6">
                        <div className="bg-[#FFFFFF1F] w-10 h-10 rounded-full flex flex-col items-center justify-center">
                            <Image src="/footer/x.svg" alt="footer" width={16} height={16} />
                        </div>
                        <div className="bg-[#FFFFFF1F] w-10 h-10 rounded-full flex flex-col items-center justify-center">
                            <Image src="/footer/linkedin.svg" alt="footer" width={16} height={16} />
                        </div>
                        <div className="bg-[#FFFFFF1F] w-10 h-10 rounded-full flex flex-col items-center justify-center">
                            <Image src="/footer/ig.svg" alt="footer" width={16} height={16} />
                        </div>
                        <div className="bg-[#FFFFFF1F] w-10 h-10 rounded-full flex flex-col items-center justify-center">
                            <Image src="/footer/github.svg" alt="footer" width={16} height={16} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}