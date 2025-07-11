import Image from "next/image";

export default function Footer() {
    return (
        <div className="bg-[url('/footer/bg-footer.png')] bg-no-repeat bg-top bg-cover pt-[104px] pb-8 px-[124px] flex flex-col items-center justify-center">
            <div className="max-w-[1192px] flex flex-col gap-[104px]">
                <div className="flex flex-col gap-8 w-[1192px] items-center">
                    <div className="flex flex-col items-center justify-center gap-6 w-[305px]">
                        <Image src="/footer/logo-footer.svg" alt="footer" width={64} height={64} />
                        <p className="text-center text-[16px] leading-[24px] font-normal text-base-white opacity-[88%]">Deliver unparalleled digital experience with our AI-powered unit testing.</p>
                    </div>
                    <div className="flex flex-row justify-between w-[1192px] items-center">
                        <ul className="flex flex-col gap-8">
                            <li className="text-[32px] leading-[40px] font-normal text-base-white">Home</li>
                            <li className="text-[32px] leading-[40px] font-normal text-base-white">Developer</li>
                        </ul>
                        <ul className="flex flex-col gap-8">
                            <li className="text-[32px] leading-[40px] font-normal text-base-white text-end">Webinar</li>
                            <li className="text-[32px] leading-[40px] font-normal text-base-white text-end">Pricing</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row justify-between pt-8 border-t border-[#FFFFFF1F]">
                    <p className="text-[16px] leading-[24px] font-normal text-[#FFFFFFCC]">© Copyright 2025 SoftQA. All rights reserved.</p>
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