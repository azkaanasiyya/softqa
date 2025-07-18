import Link from "next/link";
import { InputEmail } from "../custom/inputemail";
import { Button } from "../ui/button";
import Image from "next/image";

export default function ForgotHero() {
    return (
        <div className="bg-primary-50 py-[248px] px-[430px] flex flex-col justify-center items-center">
            <div className="bg-base-white rounded-[12px] max-w-[580px] w-full py-10 px-12 flex flex-col items-center gap-4">
                <div className="felx flex-col gap-6">
                    <div className="flex flex-col gap-4">
                       <h4 className="text-[32px] leading-10 text-grayscale-900 text-center">Password recovery</h4> 
                       <p className="text-[18px] leading-8 text-grayscale-600 text-center">Enter your account&apos;s email and we&apos;ll send you an email to reset the password.</p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-[16px] leading-6 text-grayscale-900">Email</span>
                            <InputEmail placeholder="Enter your email"/>
                        </div>
                        <Button variant="request" size="medium" className="w-full text-cyan-500">Send Email</Button>
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <span className="text-[16px] leading-6 text-grayscale-600">Back to</span>
                    <div className="flex flex-row gap-1 items-center">
                        <Image src="/auth/left-arrow.png" alt="image" width={16} height={16} />
                        <Link href="/auth/sign-in" className="cursor-pointer">
                            <span className="text-[16px] leading-6 font-medium text-primary-500">Sign In</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}