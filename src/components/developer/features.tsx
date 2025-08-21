import Image from "next/image";
import FadeInSection from "../animation/fadein";

export default function DeveloperFeatures() {
    return (
        <div className="bg-[url('/line.png')] bg-no-repeat bg-center bg-[length:1192px_auto] flex flex-col justify-center items-center py-12 md:py-20 lg:py-[132px] px-6 md:px-8 lg:px-[124px]">
            <div className="max-w-[1192px] flex flex-col gap-10 md:gap-16 lg:gap-[104px]">
                <FadeInSection delay={0.5} className="flex flex-col-reverse lg:flex-row gap-6 md:gap-10 lg:gap-24 items-center">
                    <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 lg:max-w-[540px]">
                        <div className="flex flex-row gap-2">
                            <div className="h-[22px] w-[1px] bg-primary-500" />
                            <p className="text-[14px] font-medium leading-[22px] uppercase text-primary-500">Effortless Testing</p>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                            <h3 className="text-[24px] md:text-[40px] leading-[30px] md:leading-[50px] font-normal text-grayscale-900">We Test, You Build</h3>
                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Concentrate on building your codebase while we handle the testing. Our system ensures your tests stay up-to-date automatically as your code evolves, maintaining precision and consistency with minimal effort.</p>
                        </div>
                    </div>
                    <div className="bg-additional-salty rounded-[16px] py-[30.58px] md:py-[65.84px] lg:py-[52px] px-[28.23px] md:px-[60.78px] lg:px-12 flex-col justify-center items-center">
                        <Image src="/developer/effortless.png" alt="img" width={460} height={344} className="w-full max-w-[460px] h-full max-h-[344px]" />
                    </div>
                </FadeInSection>
                <FadeInSection delay={0.5} className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-24 items-center">
                    <div className="bg-additional-snow rounded-[16px] py-[30.58px] md:py-[65.84px] lg:py-[52px] px-[28.23px] md:px-[60.78px] lg:px-12 flex flex-col justify-center items-center">
                        <div className="grid grid-cols-2 gap-4">
                            <Image src="/developer/code-1.png" alt="img" width={222} height={164} className="w-full max-w-[222px] h-full max-h-[164px]"/>
                            <Image src="/developer/code-2.png" alt="img" width={222} height={164} className="w-full max-w-[222px] h-full max-h-[164px]"/>
                            <Image src="/developer/code-3.png" alt="img" width={222} height={164} className="w-full max-w-[222px] h-full max-h-[164px]"/>
                            <Image src="/developer/code-4.png" alt="img" width={222} height={164} className="w-full max-w-[222px] h-full max-h-[164px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 lg:max-w-[540px]">
                        <div className="flex flex-row gap-2">
                            <div className="h-[22px] w-[1px] bg-primary-500" />
                            <p className="text-[14px] font-medium leading-[22px] uppercase text-primary-500">Code Security</p>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                            <h3 className="text-[24px] md:text-[40px] leading-[30px] md:leading-[50px] font-normal text-grayscale-900">Secure Your Codebase</h3>
                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Your code remains entirely private—never used for training or shared externally. Safeguard your production code with robust security, including code obfuscation and deployment options.</p>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection delay={0.5} className="flex flex-col-reverse lg:flex-row gap-6 md:gap-10 lg:gap-24 items-center">
                    <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 lg:max-w-[540px]">
                        <div className="flex flex-row gap-2">
                            <div className="h-[22px] w-[1px] bg-primary-500" />
                            <p className="text-[14px] font-medium leading-[22px] uppercase text-primary-500">Coverage Fast</p>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                            <h3 className="text-[24px] md:text-[40px] leading-[30px] md:leading-[50px] font-normal text-grayscale-900">Intelligent QA for <br className="hidden lg:block" />Complete Coverage</h3>
                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Quickly generate comprehensive tests for extensive codebases in one go. With Batch Mode, eliminate technical debt and achieve full test coverage at unparalleled speed.</p>
                        </div>
                    </div>
                    <div className="bg-additional-light rounded-[16px] py-[30.58px] md:py-[65.84px] lg:py-[52px] px-[28.23px] md:px-[60.78px] lg:px-12 flex-col justify-center items-center">
                        <div className="flex flex-col w-full gap-3">
                            <Image src="/developer/coverage-1.png" alt="img" width={460} height={93} className=" w-full max-w-[460px] h-full max-h-[93px]"/>
                            <Image src="/developer/coverage-2.png" alt="img" width={460} height={293} className=" w-full max-w-[460px] h-full max-h-[293px]"/>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </div>
    )
}