import Image from "next/image";
import Link from "next/link";
import FadeInSection from "../animation/fadein";

export default function Footer() {
    return (
        <div className="bg-[url('/footer/bg-footer-mobile.png')] md:bg-[url('/footer/bg-footer-tablet.png')] lg:bg-[url('/footer/bg-footer.png')] bg-no-repeat bg-top bg-cover pt-12 md:pt-[88px] lg:pt-[104px] pb-8 md:pb-10 lg:pb-8 px-6 md:px-8 lg:px-[124px] flex flex-col items-center justify-center">
            <div className="max-w-[1192px] w-full flex flex-col gap-20 md:gap-[104px]">
                <div className="flex flex-col gap-12 md:gap-8 max-w-[1192px] w-full items-center">
                    <FadeInSection delay={0.5} className="flex flex-col items-center justify-center gap-4 md:gap-6 max-w-[305px] w-full">
                        <Image src="/footer/logo-footer.svg" alt="footer" width={64} height={64} />
                        <p className="text-center text-[16px] leading-[24px] font-normal text-base-white opacity-[88%]">Deliver unparalleled digital experience with our AI-powered unit testing.</p>
                    </FadeInSection>
                    <FadeInSection delay={0.5} className="flex flex-row justify-between max-w-[1192px] w-full items-center">
                        <ul className="flex flex-col gap-8">
                            <Link href="/">
                                <li className="cursor-pointer text-[24px] md:text-[32px] leading-[30px] md:leading-[40px] font-normal text-base-white hover:underline transition duration-200">Home</li> 
                            </Link>
                            <Link href="/developer">
                                <li className="cursor-pointer text-[24px] md:text-[32px] leading-[30px] md:leading-[40px] font-normal text-base-white hover:underline transition duration-200">Developer</li>
                            </Link>
                        </ul>
                        <ul className="flex flex-col gap-8">
                            <Link href="/webinar">
                                <li className="cursor-pointer text-[24px] md:text-[32px] leading-[30px] md:leading-[40px] font-normal text-base-white text-end hover:underline transition duration-200">Webinar</li>
                            </Link>
                            <Link href="/pricing">
                                <li className="cursor-pointer text-[24px] md:text-[32px] leading-[30px] md:leading-[40px] font-normal text-base-white text-end hover:underline transition duration-200">Pricing</li>
                            </Link>
                        </ul>
                    </FadeInSection>
                </div>
                <FadeInSection delay={0.5} className="flex flex-col-reverse md:flex-row md:justify-between items-center gap-4 md:gap-0 pt-6 md:pt-8 border-t border-[#FFFFFF1F]">
                    <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-normal text-white-opacity-80">© Copyright 2025 SoftQA. All rights reserved.</p>
                    <div className="flex flex-row gap-6">
                        <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <div className="bg-[#FFFFFF1F] w-10 h-10 rounded-full flex flex-col items-center justify-center cursor-pointer">
                                <Image src="/footer/x.svg" alt="footer" width={16} height={16} className="opacity-80 hover:opacity-100 transition duration-200"/>
                            </div>
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <div className="bg-[#FFFFFF1F] w-10 h-10 rounded-full flex flex-col items-center justify-center cursor-pointer">
                                <Image src="/footer/linkedin.svg" alt="footer" width={16} height={16} className="opacity-80 hover:opacity-100 transition duration-200"/>
                            </div>
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <div className="bg-[#FFFFFF1F] w-10 h-10 rounded-full flex flex-col items-center justify-center cursor-pointer">
                            <Image src="/footer/ig.svg" alt="footer" width={16} height={16} className="opacity-80 hover:opacity-100 transition duration-200"/>
                        </div>
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <div className="bg-[#FFFFFF1F] w-10 h-10 rounded-full flex flex-col items-center justify-center cursor-pointer">
                                <Image src="/footer/github.svg" alt="footer" width={16} height={16} className="opacity-80 hover:opacity-100 transition duration-200"/>
                            </div>
                        </Link>
                        
                    </div>
                </FadeInSection>
            </div>
        </div>
    )
}