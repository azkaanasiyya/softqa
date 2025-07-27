import Image from "next/image";
import { InputEmail } from "../custom/inputemail";
import { Button } from "../ui/button";
import Link from "next/link";
import { InputPassword } from "../custom/inputpassword";
import { InputUser } from "../custom/inputuser";

export default function SignHero() {
    return (
        <div className="flex flex-col justify-center w-full items-center overflow-hidden">
            <div className="flex flex-row max-w-[1720px] max-h-[1024px] h-full w-full gap-[124px] px-6 md:px-8 lg:pl-[124px] lg:mx-auto lg:pr-[0px]">
                <div className="lg:w-1/3 py-6 md:pt-12 lg:pt-[45px] pb-[86px] lg:pb-[124px] flex flex-col gap-8 md:gap-12 lg:gap-16 items-start">
                    <Image src="/logo.svg" alt="logo" width={148.8} height={48} className="lg:w-[148.8px] lg:h-[48px] w-[124px] h-[40px]"/>
                    <div className="flex flex-col items-center gap-6 w-full lg:max-w-[488px]">
                        <div className="flex flex-col gap-8 w-full">
                            <div className="flex flex-col gap-4">
                                <h4 className="text-[24px] md:text-[32px] leading-[30px] md:leading-10 text-grayscale-900">Get Started with SoftQA Today</h4>
                                <span className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Join thousands of developers and QA professionals streamlining their testing processes with our platform.</span>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[16px] leading-6 text-grayscale-900">Name</span>
                                    <InputUser placeholder="Justinus Lhaksana"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[16px] leading-6 text-grayscale-900">Email</span>
                                    <InputEmail placeholder="justinuslhak@mail.com"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[16px] leading-6 text-grayscale-900">Password</span>
                                    <InputPassword placeholder="******"/>
                                </div>
                                <Button variant="request" size="medium" className="w-full text-cyan-500">Sign Up</Button>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-6 w-full">
                            <Image src="/auth/or.png" alt="image" width={488} height={22} className="lg:w-[488px] lg:h-[22px] w-full h-full"/>
                            <div className="flex flex-col items-center gap-4 w-full">
                                <div className="flex items-center justify-center gap-3 w-full lg:max-w-[488px] px-6 py-5 rounded-[12px] border-2 border-grayscale-100 h-14">
                                    <Image src="/auth/google.png" alt="image" width={18} height={18} />
                                    <span className="text-[16px] leading-6 text-grayscale-900">Continue with Google</span>
                                </div>
                                <div className="flex justify-center gap-3 items-center w-full lg:max-w-[488px] px-6 py-5 rounded-[12px] border-2 border-grayscale-100 h-14">
                                    <Image src="/auth/apple.png" alt="image" width={16.28} height={20} />
                                    <span className="text-[16px] leading-6 text-grayscale-900">Continue with Apple</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span className="text-[16px] leading-6 text-grayscale-600">Already have an Account?</span>
                            <Link href="/auth/sign-in" className="cursor-pointer">
                               <span className="text-[16px] leading-6 text-primary-500 font-medium">Sign In</span> 
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative bg-[url('/auth/bg-sign-in.png')] bg-no-repeat bg-center bg-cover pt-[104px] pl-[72px] pb-16 hidden lg:flex lg:flex-col w-full gap-[80px] overflow-hidden lg:w-2/3">
                    <h1 className="text-[56px] leading-[70px] max-w-[560px] text-base-white">
                        Accelerate Your Team for Testing Software!
                    </h1>

                    <div className="relative">
                        <Image
                        src="/auth/signup.png"
                        alt="signup image"
                        width={685}
                        height={742}
                        />

                        <Image
                        src="/auth/leader.png"
                        alt="leader image"
                        width={624}
                        height={80}
                        className="absolute bottom-25 z-9999 -left-8 "
                        />
                    </div>
                    <Image src="/auth/gradient.png" alt="signup bg" width={704} height={464} className="absolute z-10 bottom-0 left-0 w-full h-[464px]" />
                </div>
            </div>
        </div>
        
    )
}