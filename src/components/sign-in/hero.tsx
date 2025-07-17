import Image from "next/image";
import { InputEmail } from "../custom/inputemail";
import { Button } from "../ui/button";

export default function SignInHero() {
    return (
        <div className="flex flex-col justify-center w-full items-center">
            <div className="flex flex-row max-w-[1720px] w-full gap-[124px] pl-[124px] mx-auto">
                <div className="pt-[45px] pb-[124px] flex flex-col gap-24 items-start">
                    <Image src="/logo.svg" alt="logo" width={148.8} height={48} />
                    <div className="flex flex-col items-center gap-6 max-w-[488px] w-full">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-10">
                                <h4 className="text-[32px] leading-10 text-grayscale-900">Welcome Back!</h4>
                                <span className="text-[18px] leading-8 text-grayscale-600">Sign in to access your dashboard and continue optimizing your QA process.</span>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[16px] leading-6 text-grayscale-900">Email</span>
                                    <InputEmail placeholder="Enter your email"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[16px] leading-6 text-grayscale-900">Password</span>
                                        <InputEmail placeholder="Enter your password"/>
                                    </div>
                                    <span className="text-[14px] leading-[22px] font-medium text-primary-500 text-end">Forgot Password?</span>
                                </div>
                                <Button variant="request" size="medium" className="w-full text-cyan-500">Sign In</Button>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-6">
                            <Image src="/auth/or.png" alt="image" width={488} height={22} />
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex items-center justify-center gap-3 w-[488px] px-6 py-5 rounded-[12px] border-2 border-grayscale-100 h-14">
                                    <Image src="/auth/google.png" alt="image" width={18} height={18} />
                                    <span className="text-[16px] leading-6 text-grayscale-900">Continue with Google</span>
                                </div>
                                <div className="flex justify-center gap-3 items-center w-[488px] px-6 py-5 rounded-[12px] border-2 border-grayscale-100 h-14">
                                    <Image src="/auth/apple.png" alt="image" width={16.28} height={20} />
                                    <span className="text-[16px] leading-6 text-grayscale-900">Continue with Apple</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span className="text-[16px] leading-6 text-grayscale-600">Don’t have an Account?</span>
                            <span className="text-[16px] leading-6 text-primary-500 font-medium">Sign Up</span>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('/auth/bg-sign-in.png')] bg-no-repeat bg-center bg-cover pt-[216px] px-[72px] pb-16 flex flex-col w-full gap-[210px]">
                    <div className="flex flex-col max-w-[560px] gap-8">
                        <h1 className="text-[56px] leading-[70px] text-base-white">Revolutionize QA with Smarter Automation</h1>
                        <div className="flex flex-col gap-10">
                            <p className="text-[24px] leading-9 text-[#FFFFFFEB]">&quot;SoftQA has completely transformed our testing process. It’s reliable, efficient, and ensures our releases are always top-notch.&quot;</p>
                            <div className="flex flex-row items-center gap-4">
                                <Image src="/auth/michael.png" alt="image" width={56} height={56} />
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[16px] leading-6 text-base-white">Michael Carter</span>
                                    <span className="text-[14px] leading-[22px] text-[#FFFFFFEB]">Software Engineer at DevCore</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center max-w-[560px] gap-8">
                        <Image src="/auth/join.png" alt="image" width={560} height={22} />
                        <div className="flex flex-col items-center gap-10">
                            <div className="flex flex-row gap-10">
                                <Image src="/auth/discord.png" alt="image" width={114} height={32} />
                                <Image src="/auth/mailchimp.png" alt="image" width={112} height={32} />
                                <Image src="/auth/grammarly.png" alt="image" width={120} height={32} />
                                <Image src="/auth/attentive.png" alt="image" width={94} height={32} />
                            </div>
                            <div className="flex flex-row gap-10">
                                <Image src="/auth/hellosign.png" alt="image" width={111.33} height={32} />
                                <Image src="/auth/intercom.png" alt="image" width={111.33} height={32} />
                                <Image src="/auth/square.png" alt="image" width={87.66} height={32} />
                                <Image src="/auth/dropbox.png" alt="image" width={108.67} height={32} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}