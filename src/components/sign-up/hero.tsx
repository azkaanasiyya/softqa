import Image from "next/image";
import { InputEmail } from "../custom/inputemail";
import { Button } from "../ui/button";
import Link from "next/link";

export default function SignHero() {
    return (
        <div className="flex flex-col justify-center w-full items-center">
            <div className="flex flex-row max-w-[1720px] max-h-[1024px] h-full w-full gap-[124px] pl-[124px] mx-auto">
                <div className="pt-[45px] pb-[124px] flex flex-col gap-16 items-start">
                    <Image src="/logo.svg" alt="logo" width={148.8} height={48} />
                    <div className="flex flex-col items-center gap-6 max-w-[488px] w-full">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <h4 className="text-[32px] leading-10 text-grayscale-900">Get Started with SoftQA Today</h4>
                                <span className="text-[18px] leading-8 text-grayscale-600">Join thousands of developers and QA professionals streamlining their testing processes with our platform.</span>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[16px] leading-6 text-grayscale-900">Name</span>
                                    <InputEmail placeholder="Justinus Lhaksana"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[16px] leading-6 text-grayscale-900">Email</span>
                                    <InputEmail placeholder="justinuslhak@mail.com"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[16px] leading-6 text-grayscale-900">Password</span>
                                    <InputEmail placeholder="******"/>
                                </div>
                                <Button variant="request" size="medium" className="w-full text-cyan-500">Sign Up</Button>
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
                            <span className="text-[16px] leading-6 text-grayscale-600">Already have an Account?</span>
                            <Link href="/auth/sign-in" className="cursor-pointer">
                               <span className="text-[16px] leading-6 text-primary-500 font-medium">Sign In</span> 
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative bg-[url('/auth/bg-sign-in.png')] bg-no-repeat bg-center bg-cover pt-[104px] pl-[72px] pb-16 flex flex-col w-full gap-[80px] overflow-hidden">
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