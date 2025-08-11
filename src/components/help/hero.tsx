import { InputSearch } from "../custom/inputsearch";
import Image from "next/image";
import Link from "next/link";
import { HelpModal } from "./modal";
import FadeInSection from "../animation/fadein";

export default function HelpHero() {
    return (
        <div className="bg-[url('/line.png')] bg-no-repeat bg-center bg-[length:1192px_auto] flex flex-col justify-center items-center border-t border-grayscale-100 px-6 md:px-8 lg:px-[124px] pb-12 pt-16 md:py-20 lg:pt-[104px] lg:pb-[116px] w-full">
            <FadeInSection className="max-w-[1192px] flex flex-col gap-10 md:gap-12 lg:gap-20 justify-center items-center w-full">
                <FadeInSection delay={0.5} className="flex flex-col gap-8 md:gap-10 w-full max-w-[784px]">
                    <h1 className="text-[40px] md:text-[56px] leading-[50px] md:leading-[70px] text-center tracking-tight text-grayscale-900">How can we help?</h1>
                    <div className="flex flex-col items-center justify-center w-full gap-4 overflow-hidden">
                        <div className="bg-primary-50 rounded-[24px] p-3 w-full">
                            <InputSearch placeholder="Ask a question..." className="w-full"/>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center md:justify-center overflow-hidden w-full">
                            <span className="text-[14px] md:text-[16px] leading-[22px] md:leading-6 text-grayscale-900">Common searches:</span>
                            <div className="flex flex-row gap-2 md:gap-4 items-center justify-center overflow-x-auto whitespace-nowrap scrollbar-hide">
                                <div className="bg-grayscale-50 border border-grayscale-100 rounded-[8px] py-[5px] md:py-2 px-3 text-[14px] md:text-[16px] leading-[22px] md:leading-6 text-grayscale-900 whitespace-nowrap">Reset my password?</div>
                                <div className="bg-grayscale-50 border border-grayscale-100 rounded-[8px] py-[5px] md:py-2 px-3 text-[14px] md:text-[16px] leading-[22px] md:leading-6 text-grayscale-900 whitespace-nowrap">Subscription plans</div>
                                <div className="bg-grayscale-50 border border-grayscale-100 rounded-[8px] py-[5px] md:py-2 px-3 text-[14px] md:text-[16px] leading-[22px] md:leading-6 text-grayscale-900 whitespace-nowrap">Bug Detection</div>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <FadeInSection delay={0.5} className="bg-grayscale-50 rounded-[16px] flex flex-col pt-0 md:pt-1 pb-2 md:pb-4 px-4 md:px-6 gap-2 max-w-[376px] w-full">
                        <Link href="/help/helpdetail" className="cursor-pointer">
                            <div className="flex flex-row justify-between items-center py-5 border-b border-grayscale-100">
                                <h5 className="text-[18px] md:text-[24px] leading-7 md:leading-[30px] text-grayscale-900">General questions</h5>
                                <div className="flex flex-col justify-center items-center rounded-[8px] w-6 h-6 bg-grayscale-100 hover:bg-grayscale-300 p-1">
                                    <Image src="/help/right-green.png" alt="icon" width={16} height={16} className="hover:opacity-80 transition duration-200"/>
                                </div>
                            </div>
                        </Link>                        
                        <div className="flex flex-col gap-1 w-full">
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-900 line-clamp-1">How do I create an account?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-900 line-clamp-1">How do I update my profile informa...</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-900 line-clamp-1">How can I delete my account?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection delay={0.5} className="bg-grayscale-50 rounded-[16px] flex flex-col pt-0 md:pt-1 pb-2 md:pb-4 px-4 md:px-6 gap-2 max-w-[376px] w-full">
                        <Link href="/help/helpdetail" className="cursor-pointer">
                            <div className="flex flex-row justify-between items-center py-5 border-b border-grayscale-100">
                                <h5 className="text-[18px] md:text-[24px] leading-7 md:leading-[30px] text-grayscale-900">Billing and Payments</h5>
                                <div className="flex flex-col justify-center items-center rounded-[8px] w-6 h-6 bg-grayscale-100 hover:bg-grayscale-300 p-1">
                                    <Image src="/help/right-green.png" alt="icon" width={16} height={16} className="hover:opacity-80 transition duration-200"/>
                                </div>
                            </div>
                        </Link>
                        <div className="flex flex-col gap-1 w-full">
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-900 line-clamp-1">What payment methods are accept...</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-900 line-clamp-1">How do I view my invoice?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-900 line-clamp-1">What is the refund policy?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection delay={0.5} className="bg-grayscale-50 rounded-[16px] flex flex-col pt-0 md:pt-1 pb-2 md:pb-4 px-4 md:px-6 gap-2 max-w-[376px] w-full">
                        <Link href="/help/helpdetail" className="cursor-pointer">
                            <div className="flex flex-row justify-between items-center py-5 border-b border-grayscale-100">
                                <h5 className="text-[18px] md:text-[24px] leading-7 md:leading-[30px] text-grayscale-900">Technical Support</h5>
                                <div className="flex flex-col justify-center items-center rounded-[8px] w-6 h-6 bg-grayscale-100 hover:bg-grayscale-300 p-1">
                                    <Image src="/help/right-green.png" alt="icon" width={16} height={16} className="hover:opacity-80 transition duration-200"/>
                                </div>
                            </div>
                        </Link>
                        <div className="flex flex-col gap-1 w-full">
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-900 line-clamp-1">How can I troubleshoot login issues?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-900 line-clamp-1">What should I do if the app crashes?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-900 line-clamp-1">How do I report a bug?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection delay={0.5} className="bg-grayscale-50 rounded-[16px] flex flex-col pt-0 md:pt-1 pb-2 md:pb-4 px-4 md:px-6 gap-2 max-w-[376px] w-full">
                        <Link href="/help/helpdetail" className="cursor-pointer">
                            <div className="flex flex-row justify-between items-center py-5 border-b border-grayscale-100">
                                <h5 className="text-[18px] md:text-[24px] leading-7 md:leading-[30px] text-grayscale-900">Getting Started</h5>
                                <div className="flex flex-col justify-center items-center rounded-[8px] w-6 h-6 bg-grayscale-100 hover:bg-grayscale-300 p-1">
                                    <Image src="/help/right-green.png" alt="icon" width={16} height={16} className="hover:opacity-80 transition duration-200"/>
                                </div>
                            </div>
                        </Link>
                        <div className="flex flex-col gap-1 w-full">
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-900 line-clamp-1">How do I navigate the dashboard?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-900 line-clamp-1">Where can I find tutorials?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-900 line-clamp-1">How do I set up my first project?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection delay={0.5} className="bg-grayscale-50 rounded-[16px] flex flex-col pt-0 md:pt-1 pb-2 md:pb-4 px-4 md:px-6 gap-2 max-w-[376px] w-full">
                        <Link href="/help/helpdetail" className="cursor-pointer">
                            <div className="flex flex-row justify-between items-center py-5 border-b border-grayscale-100">
                                <h5 className="text-[18px] md:text-[24px] leading-7 md:leading-[30px] text-grayscale-900">Advanced Features</h5>
                                <div className="flex flex-col justify-center items-center rounded-[8px] w-6 h-6 bg-grayscale-100 hover:bg-grayscale-300 p-1">
                                    <Image src="/help/right-green.png" alt="icon" width={16} height={16} className="hover:opacity-80 transition duration-200"/>
                                </div>
                            </div>
                        </Link>
                        <div className="flex flex-col gap-1 w-full">
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-900 line-clamp-1">How do I integrate with third-party t...</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-900 line-clamp-1">What automation options are availa...</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-900 line-clamp-1">How can I customize my workflow?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection delay={0.5} className="bg-[url('/help/bg-help.png')] bg-no-repeat bg-center bg-cover max-w-[376px] w-full p-6 flex flex-col gap-10 md:justify-between rounded-[16px]">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-[32px] leading-10 text-white">Haven&apos;t found what you need?</h4>
                            <span className="text-[16px] leading-6 text-[#FFFFFFEB]">Get in touch - we&apos;re happy to help!</span>
                        </div>
                        <HelpModal />
                    </FadeInSection>
                </div>
            </FadeInSection>
        </div>
    )
}