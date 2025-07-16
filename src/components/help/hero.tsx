import { InputSearch } from "../custom/inputsearch";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HelpHero() {
    return (
        <div className="flex flex-col justify-center items-center px-[124px] pt-[104px] pb-[116px]">
            <div className="max-w-[1192px] flex flex-col gap-20 justify-center items-center">
                <div className="flex flex-col gap-10 max-w-[784px]">
                    <h1 className="text-[56px] leading-[70px] text-center text-grayscale-900">How can we help?</h1>
                    <div className="flex flex-col items-center gap-4">
                        <div className="bg-primary-50 rounded-[24px] p-3">
                            <InputSearch placeholder="Ask a question..." />
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <span className="text-[16px] leading-6 text-grayscale-900">Common searches:</span>
                            <div className="bg-grayscale-50 border border-grayscale-100 rounded-[8px] py-2 px-3 text-[16px] leading-6 text-grayscale-900">Reset my password?</div>
                            <div className="bg-grayscale-50 border border-grayscale-100 rounded-[8px] py-2 px-3 text-[16px] leading-6 text-grayscale-900">Subscription plans</div>
                            <div className="bg-grayscale-50 border border-grayscale-100 rounded-[8px] py-2 px-3 text-[16px] leading-6 text-grayscale-900">Bug Detection</div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    <div className="bg-grayscale-50 rounded-[16px] flex flex-col pt-1 pb-4 px-6 gap-2 w-[376px]">
                        <Link href="/help/helpdetail" className="cursor-pointer">
                            <div className="flex flex-row justify-between py-5 border-b border-grayscale-100">
                                <h5 className="text-[24px] leading-[30px] text-grayscale-900">General questions</h5>
                                <div className="flex flex-col justify-center items-center rounded-[8px] w-6 h-6 bg-grayscale-100 p-1">
                                    <Image src="/help/right-green.png" alt="icon" width={16} height={16} />
                                </div>
                            </div>
                        </Link>                        
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[18px] leading-7 text-grayscale-900">How do I create an account?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[18px] leading-7 text-grayscale-900">How do I update my profile informa...</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[18px] leading-7 text-grayscale-900">How can I delete my account?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-grayscale-50 rounded-[16px] flex flex-col pt-1 pb-4 px-6 gap-2 w-[376px]">
                        <div className="flex flex-row justify-between py-5 border-b border-grayscale-100">
                            <h5 className="text-[24px] leading-[30px] text-grayscale-900">Billing and Payments</h5>
                            <div className="flex flex-col justify-center items-center rounded-[8px] w-6 h-6 bg-grayscale-100 p-1">
                                <Image src="/help/right-green.png" alt="icon" width={16} height={16} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[18px] leading-7 text-grayscale-900">What payment methods are accept...</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[18px] leading-7 text-grayscale-900">How do I view my invoice?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[18px] leading-7 text-grayscale-900">What is the refund policy?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-grayscale-50 rounded-[16px] flex flex-col pt-1 pb-4 px-6 gap-2 w-[376px]">
                        <div className="flex flex-row justify-between py-5 border-b border-grayscale-100">
                            <h5 className="text-[24px] leading-[30px] text-grayscale-900">Technical Support</h5>
                            <div className="flex flex-col justify-center items-center rounded-[8px] w-6 h-6 bg-grayscale-100 p-1">
                                <Image src="/help/right-green.png" alt="icon" width={16} height={16} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[18px] leading-7 text-grayscale-900">How can I troubleshoot login issues?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[18px] leading-7 text-grayscale-900">What should I do if the app crashes?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[18px] leading-7 text-grayscale-900">How do I report a bug?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-grayscale-50 rounded-[16px] flex flex-col pt-1 pb-4 px-6 gap-2 w-[376px]">
                        <div className="flex flex-row justify-between py-5 border-b border-grayscale-100">
                            <h5 className="text-[24px] leading-[30px] text-grayscale-900">Getting Started</h5>
                            <div className="flex flex-col justify-center items-center rounded-[8px] w-6 h-6 bg-grayscale-100 p-1">
                                <Image src="/help/right-green.png" alt="icon" width={16} height={16} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[18px] leading-7 text-grayscale-900">How do I navigate the dashboard?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[18px] leading-7 text-grayscale-900">Where can I find tutorials?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[18px] leading-7 text-grayscale-900">How do I set up my first project?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-grayscale-50 rounded-[16px] flex flex-col pt-1 pb-4 px-6 gap-2 w-[376px]">
                        <div className="flex flex-row justify-between py-5 border-b border-grayscale-100">
                            <h5 className="text-[24px] leading-[30px] text-grayscale-900">Advanced Features</h5>
                            <div className="flex flex-col justify-center items-center rounded-[8px] w-6 h-6 bg-grayscale-100 p-1">
                                <Image src="/help/right-green.png" alt="icon" width={16} height={16} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[18px] leading-7 text-grayscale-900">How do I integrate with third-party t...</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[18px] leading-7 text-grayscale-900">What automation options are availa...</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <span className="text-[18px] leading-7 text-grayscale-900">How can I customize my workflow?</span>
                                <Image src="/help/right-gray.png" alt="icon" width={16} height={16} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[url('/help/bg-help.png')] bg-no-repeat bg-center bg-cover w-[376px] p-6 flex flex-col justify-between rounded-[16px]">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-[32px] leading-10 text-white">Haven&apos;t found what you need?</h4>
                            <span className="text-[16px] leading-6 text-[#FFFFFFEB]">Get in touch - we&apos;re happy to help!</span>
                        </div>
                        <Button variant="get" size="default" className="cursor-pointer text-primary-500">Contact Us</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}