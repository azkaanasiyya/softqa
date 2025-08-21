"use client"

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { InputEmail } from "../custom/inputemail";
import { InputPassword } from "../custom/inputpassword";
import { InputUser } from "../custom/inputuser";
import FadeInSection from "../animation/fadein";
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"

const SignUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Email is invalid"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export default function SignHero() {
  const methods = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: z.infer<typeof SignUpSchema>) => {
    console.log("Sign Up success:", data)
    methods.reset()
  }

  return (
    <div className="flex flex-col justify-center w-screen items-center">
      <FadeInSection
        delay={0.5}
        className="flex flex-col lg:flex-row max-w-[1720px] h-full w-full gap-[124px] px-6 md:px-8 lg:pl-[124px] lg:mx-auto lg:pr-[0px]"
      >
        <div className="w-full lg:max-w-[488px] py-6 md:pt-12 lg:pt-[45px] pb-[86px] lg:pb-[124px] flex flex-col gap-8 md:gap-12 lg:gap-16 items-start">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/logo.svg"
              alt="logo"
              width={148.8}
              height={48}
              className="lg:w-[148.8px] lg:h-[48px] w-[124px] h-[40px]"
            />
          </Link>

          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="flex flex-col items-center gap-6 w-full lg:max-w-[488px]"
            >
              <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col gap-4">
                  <h4 className="text-[24px] md:text-[32px] leading-[30px] md:leading-10 tracking-tight text-grayscale-900">
                    Get Started with SoftQA Today
                  </h4>
                  <span className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">
                    Join thousands of developers and QA professionals
                    streamlining their testing processes with our platform.
                  </span>
                </div>

                <div className="flex flex-col gap-6">
                  <FormField
                    name="name"
                    render={({ field }) => (
                      <div className="flex flex-col gap-2">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <InputUser placeholder="Justinus Lhaksana" {...field} />
                        </FormControl>
                        <FormMessage name="name"/>
                      </div>
                    )}
                  />

                  <FormField
                    name="email"
                    render={({ field }) => (
                      <div className="flex flex-col gap-2">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <InputEmail placeholder="justinuslhak@mail.com" {...field} />
                        </FormControl>
                        <FormMessage name="email"/>
                      </div>
                    )}
                  />

                  <FormField
                    name="password"
                    render={({ field }) => (
                      <div className="flex flex-col gap-2">
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <InputPassword placeholder="******" {...field} />
                        </FormControl>
                        <FormMessage name="password"/>
                      </div>
                    )}
                  />

                  <Button
                    type="submit"
                    variant="request"
                    size="medium"
                    className="w-full text-cyan-500 cursor-pointer h-[48px] md:h-14"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 w-full">
                <Image
                  src="/auth/or.png"
                  alt="image"
                  width={488}
                  height={22}
                  className="hidden lg:block w-full h-full"
                />
                <Image
                  src="/auth/or-tablet.png"
                  alt="image"
                  width={704}
                  height={22}
                  className="hidden md:block lg:hidden w-full h-full"
                />
                <Image
                  src="/auth/or-mobile.png"
                  alt="image"
                  width={327}
                  height={22}
                  className="block md:hidden w-full h-full"
                />

                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="cursor-pointer flex items-center justify-center gap-3 w-full lg:max-w-[488px] px-6 py-3 md:py-5 rounded-[12px] border-2 border-grayscale-100 h-12 md:h-14">
                    <Image src="/auth/google.png" alt="image" width={18} height={18} />
                    <span className="text-[16px] leading-6 text-grayscale-900">
                      Continue with Google
                    </span>
                  </div>
                  <div className="cursor-pointer flex justify-center gap-3 items-center w-full lg:max-w-[488px] px-6 py-3 md:py-5 rounded-[12px] border-2 border-grayscale-100 h-12 md:h-14">
                    <Image src="/auth/apple.png" alt="image" width={16.28} height={20} />
                    <span className="text-[16px] leading-6 text-grayscale-900">
                      Continue with Apple
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <span className="text-[16px] leading-6 text-grayscale-600">
                  Already have an Account?
                </span>
                <Link href="/auth/sign-in" className="cursor-pointer">
                  <span className="text-[16px] leading-6 text-primary-500 font-medium">
                    Sign In
                  </span>
                </Link>
              </div>
            </form>
          </FormProvider>
        </div>

        <div className="relative bg-[url('/auth/bg-sign-in.png')] bg-no-repeat bg-center bg-cover pt-[104px] pl-[72px] pb-16 hidden lg:flex lg:flex-col w-[704px] xl:w-full gap-[80px] overflow-hidden">
          <h1 className="text-[56px] leading-[70px] max-w-[560px] text-base-white">
            Accelerate Your Team for Testing Software!
          </h1>

          <div className="relative">
            <Image src="/auth/signup.png" alt="signup image" width={685} height={742} />
            <Image
              src="/auth/leader.png"
              alt="leader image"
              width={624}
              height={80}
              className="absolute bottom-0 -left-8"
            />
          </div>

          <Image
            src="/auth/gradient.png"
            alt="signup bg"
            width={704}
            height={464}
            className="absolute z-10 bottom-0 left-0 w-full min-h-[464px]"
          />
        </div>
      </FadeInSection>
    </div>
  )
}
