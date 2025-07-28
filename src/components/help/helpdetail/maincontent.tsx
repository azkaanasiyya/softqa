import Image from "next/image";
import { SelectQuestion } from "./selectquestion";
import FadeInSection from "@/components/animation/fadein";

export default function MainContent() {
    return (
        <div className="flex flex-col justify-center items-center bg-base-white px-6 md:px-8 lg:px-[124px] py-12 md:py-16 lg:pt-[104px] lg:pb-[116px]">
            <div className="max-w-[1192px] flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
                <FadeInSection delay={0.5} className="hidden md:flex md:flex-col gap-1 rounded-[16px] bg-grayscale-50 p-3 w-full lg:max-w-[376px]">
                    <div className="flex flex-col py-3 px-4 rounded-[12px] bg-base-white text-[18px] leading-7 text-primary-500">How do I create an account?</div>
                    <div className="flex flex-col py-3 px-4 text-[18px] leading-7 text-grayscale-900">How do I update my profile information?</div>
                    <div className="flex flex-col py-3 px-4 text-[18px] leading-7 text-grayscale-900">How can I delete my account?</div>
                    <div className="flex flex-col py-3 px-4 text-[18px] leading-7 text-grayscale-900">Configure sign up and login settings</div>
                    <div className="flex flex-col py-3 px-4 text-[18px] leading-7 text-grayscale-900">Understand main dev account</div>
                    <div className="flex flex-col py-3 px-4 text-[18px] leading-7 text-grayscale-900">Collaborate with team in a workspace</div>
                </FadeInSection>
                <SelectQuestion />
                <FadeInSection delay={0.5} className="flex flex-col gap-12 lg:pl-12 lg:pr-[102px] max-w-[784px] w-full">
                    <FadeInSection delay={0.5} className="flex flex-col gap-6">
                        <h3 className="text-[32px] md:text-[40px] leading-10 md:leading-[50px] text-grayscale-900">How do I create an account?</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-3 items-center">
                                <div className="flex flex-col justify-center items-center px-1 w-5 h-5 bg-primary-500 rounded-full text-[14px] leading-[18px] text-base-white font-medium">1</div>
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-500">From your device, go to the Google Account sign in page.</span>
                            </div>
                            <div className="flex flex-row gap-3 items-center">
                                <div className="flex flex-col justify-center items-center px-1 w-5 h-5 bg-primary-500 rounded-full text-[14px] leading-[18px] text-base-white font-medium">2</div>
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-500">Click Create account.</span>
                            </div>
                            <div className="flex flex-row gap-3 items-start">
                                <div className="flex flex-col justify-center items-center px-1 w-5 h-5 mt-1 bg-primary-500 rounded-full text-[14px] leading-[18px] text-base-white font-medium">3</div>
                                <div className="flex flex-col">
                                   <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-500">In the drop down, select if the account is for your:</span>
                                    <ul className="list-disc text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-500 pl-7">
                                        <li>Personal use</li>
                                        <li>Child</li>
                                        <li>Work or business</li>
                                    </ul> 
                                </div>
                            </div>
                            <div className="flex flex-row gap-3 items-center">
                                <div className="flex flex-col justify-center items-center px-1 w-5 h-5 bg-primary-500 rounded-full text-[14px] leading-[18px] text-base-white font-medium">4</div>
                                <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-500">To set up your account, follow the steps on the screen.</span>
                            </div>
                        </div>
                        <div className="bg-primary-50 py-3 px-5 rounded-[16px] border border-primary-100">
                            <p className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-500">
                                <span className="font-medium text-grayscale-900">Tip:</span> To use Gmail for your business, a Google Workspace account might be better for you than a personal Google Account. With Google Workspace, you get increased storage, professional email addresses, and additional features.
                            </p>
                        </div>
                    </FadeInSection>
                    <FadeInSection delay={0.5} className="flex flex-col gap-6 pt-10 border-t border-grayscale-100">
                        <h5 className="text-[24px] leading-[30px] text-grayscale-900">The username I want is taken</h5>
                        <div className="flex flex-col gap-3">
                            <span className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-500">You can’t create a Gmail address if the username you requested is:</span>
                            <div>
                                <ul className="list-disc text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-500 pl-6">
                                    <li>Already being used</li>
                                </ul>  
                            </div>
                            <div>
                                <ul className="list-disc text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-500 pl-6">
                                    <li>Very similar to an existing username.</li>
                                    <ul className="list-disc text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-500 pl-7">
                                        <li>For example, if example@gmail.com already exists, you can&apos;t use examp1e@gmail.com.</li>
                                    </ul>
                                </ul>  
                            </div>
                            <div>
                                <ul className="list-disc text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-500 pl-6">
                                    <li>The same as a username that someone used in the past and then deleted.</li>
                                </ul>  
                            </div>
                            <div>
                                <ul className="list-disc text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-500 pl-6">
                                    <li>Reserved by Google to prevent spam or abuse.</li>
                                </ul>  
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection delay={0.5} className="bg-primary-50 flex flex-col items-center gap-4 rounded-[12px] p-6">
                        <h5 className="text-[20px] md:text-[24px] leading-9 md:leading-[30px] text-grayscale-900">Was this article helpful?</h5>
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex flex-row gap-4">
                                <div className="cursor-pointer hover:bg-grayscale-100 flex flex-row gap-2 items-center bg-base-white rounded-[8px] border-2 border-grayscale-100 px-6 py-3">
                                    <Image src="/help/like.png" alt="thumb up" width={24} height={24} />
                                    <span className="text-[16px] leading-6 font-medium text-primary-500">Yes</span>
                                </div>
                                <div className="cursor-pointer hover:bg-grayscale-100 flex flex-row gap-2 items-center bg-base-white rounded-[8px] border-2 border-grayscale-100 px-6 py-3">
                                    <Image src="/help/dislike.png" alt="thumb up" width={24} height={24} />
                                    <span className="text-[16px] leading-6 font-medium text-primary-500">No</span>
                                </div>
                            </div>
                            <span className="text-[14px] leading-[22px] text-grayscale-500 text-center">14 out of 19 found this helpful</span>
                        </div>
                    </FadeInSection>
                </FadeInSection>
            </div>
        </div>
    )
}