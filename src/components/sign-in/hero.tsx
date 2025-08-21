"use client"

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import FadeInSection from "../animation/fadein";
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import * as React from "react"
import {
    FormField,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const SignInSchema = z.object({
    email: z.string().email("Email is invalid"),
    password: z.string().min(8, "Password must be at least 8 characters"),
})

export default function SignInHero() {
    const methods = useForm({
        resolver: zodResolver(SignInSchema),
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = (data: z.infer<typeof SignInSchema>) => {
        console.log("Sign in with data:", data)
        methods.reset() 
    }

    return (
        <div className="flex flex-col justify-center w-screen items-center">
            <FadeInSection delay={0.5} className="flex flex-col items-center lg:items-start lg:flex-row max-w-[1720px] w-full lg:gap-[124px] py-8 md:pt-12 px-6 md:px-8 lg:py-0 lg:pr-0 lg:pl-[124px] lg:mx-auto">
                <div className="lg:pt-[45px] md:pb-[152px] lg:pb-[124px] flex flex-col gap-8 md:gap-[88px] lg:gap-24 items-start w-full lg:max-w-[488px]">
                    <Link href="/" className="cursor-pointer">
                        <Image src="/logo.svg" alt="logo" width={148.8} height={48} className="lg:w-[148.8px] lg:h-[48px] w-[124px] h-[40px]"/>
                    </Link> 
                    <div className="flex flex-col items-center gap-6 w-full lg:max-w-[488px]">
                        <FadeInSection delay={0.5} className="flex flex-col gap-6 md:gap-12 lg:gap-8 w-full">
                            <div className="flex flex-col gap-3 lg:gap-4">
                                <h4 className="text-[24px] md:text-[32px] leading-[30px] md:leading-10 text-grayscale-900">Welcome Back!</h4>
                                <span className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">
                                    Sign in to access your dashboard and continue optimizing your QA process.
                                </span>
                            </div>

                            <FormProvider {...methods}>
                                <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
                                    
                                    <FormField
                                        name="email"
                                        render={({ field }) => (
                                            <div className="flex flex-col gap-2">
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter your email" {...field} />
                                                </FormControl>
                                                <FormMessage name="email"/>
                                            </div>
                                        )}
                                    />

                                    <FormField
                                        name="password"
                                        render={({ field }) => (
                                            <div className="flex flex-col gap-2">
                                                <div className="flex justify-between items-center">
                                                    <FormLabel>Password</FormLabel>
                                                    <Link href="/auth/forgot" className="cursor-pointer text-sm text-primary-500 font-medium">
                                                        Forgot Password?
                                                    </Link>
                                                </div>
                                                <FormControl>
                                                    <Input type="password" placeholder="Enter your password" {...field} />
                                                </FormControl>
                                                <FormMessage name="password"/>
                                            </div>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        variant="request"
                                        size="medium"
                                        className="w-full text-cyan-500 cursor-pointer h-[48px] md:h-full"
                                    >
                                        Sign In
                                    </Button>
                                </form>
                            </FormProvider>
                        </FadeInSection>

                        <FadeInSection delay={0.5} className="flex flex-col items-center gap-6 w-full">
                            <Image src="/auth/or.png" alt="image" width={488} height={22} className="hidden lg:block w-full h-full"/>
                            <Image src="/auth/or-tablet.png" alt="image" width={704} height={22} className="hidden md:block lg:hidden w-full h-full"/>
                            <Image src="/auth/or-mobile.png" alt="image" width={327} height={22} className="block md:hidden w-full h-full"/>
                            <div className="flex flex-col items-center gap-4 w-full">
                                <div className="cursor-pointer flex items-center justify-center gap-3 w-full lg:max-w-[488px] px-6 py-3 md:py-5 rounded-[12px] border-2 border-grayscale-100 h-12 md:h-14">
                                    <Image src="/auth/google.png" alt="image" width={18} height={18} />
                                    <span className="text-[16px] leading-6 text-grayscale-900">Continue with Google</span>
                                </div>
                                <div className="cursor-pointer flex justify-center gap-3 items-center w-full lg:max-w-[488px] px-6 py-3 md:py-5 rounded-[12px] border-2 border-grayscale-100 h-12 md:h-14">
                                    <Image src="/auth/apple.png" alt="image" width={16.28} height={20} />
                                    <span className="text-[16px] leading-6 text-grayscale-900">Continue with Apple</span>
                                </div>
                            </div>
                        </FadeInSection>

                        <FadeInSection delay={0.3} className="flex flex-row gap-2">
                            <span className="text-[16px] leading-6 text-grayscale-600">Don’t have an Account?</span>
                            <Link href="/auth/sign-up" className="cursor-pointer">
                                <span className="text-[16px] leading-6 text-primary-500 font-medium">Sign Up</span>
                            </Link>
                        </FadeInSection>
                    </div>
                </div>

                <div className="bg-[url('/auth/bg-sign-in.png')] bg-cover pt-[216px] px-[72px] pb-16 hidden lg:flex lg:flex-col w-[704px] xl:w-full gap-[210px]">
                    <FadeInSection delay={0.5} className="flex flex-col max-w-[560px] gap-8">
                        <h1 className="text-[56px] leading-[70px] text-base-white">Revolutionize QA with Smarter Automation</h1>
                        <div className="flex flex-col gap-10">
                            <div className="relative">
                                <p className="text-[24px] leading-9 text-[#FFFFFFEB]">
                                    &quot;SoftQA has completely transformed our testing process. It’s reliable, efficient, and ensures our releases are always top-notch.&quot;
                                </p>
                                <Image src="/auth/quote.png" alt="image" width={21.7} height={16} className="absolute top-[-18px] left-[-22px]"/>
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                <Image src="/auth/michael.png" alt="image" width={56} height={56} />
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[16px] leading-6 text-base-white">Michael Carter</span>
                                    <span className="text-[14px] leading-[22px] text-[#FFFFFFEB]">Software Engineer at DevCore</span>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection delay={0.5} className="flex flex-col items-center max-w-[560px] gap-8">
                        <Image src="/auth/join.png" alt="image" width={560} height={22} />
                        <div className="flex flex-col items-center gap-10">
                            <div className="flex flex-wrap gap-10">
                                <Image src="/auth/discord.png" alt="image" width={114} height={32} />
                                <Image src="/auth/mailchimp.png" alt="image" width={112} height={32} />
                                <Image src="/auth/grammarly.png" alt="image" width={120} height={32} />
                                <Image src="/auth/attentive.png" alt="image" width={94} height={32} />
                            </div>
                            <div className="flex flex-wrap gap-10">
                                <Image src="/auth/hellosign.png" alt="image" width={111.33} height={32} />
                                <Image src="/auth/intercom.png" alt="image" width={111.33} height={32} />
                                <Image src="/auth/square.png" alt="image" width={87.66} height={32} />
                                <Image src="/auth/dropbox.png" alt="image" width={108.67} height={32} />
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </FadeInSection>
        </div>
    )
}
