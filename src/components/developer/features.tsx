import Image from "next/image";

export default function DeveloperFeatures() {
    return (
        <div className="bg-base-white bg-[url('/developer/bg-features.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center py-[132px] px-[124px]">
            <div className="max-w-[1192px] flex flex-col gap-[104px]">
                <div className="flex flex-row gap-24 items-center">
                    <div className="flex flex-col gap-6 max-w-[540px]">
                        <div className="flex flex-row gap-2">
                            <div className="h-[22px] w-[1px] bg-primary-500" />
                            <p className="text-[14px] font-medium leading-[22px] uppercase text-primary-500">Effortless Testing</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[40px] leading-[50px] font-normal text-grayscale-900">We Test, You Build</h3>
                            <p className="text-[18px] leading-8 text-grayscale-600">Concentrate on building your codebase while we handle the testing. Our system ensures your tests stay up-to-date automatically as your code evolves, maintaining precision and consistency with minimal effort.</p>
                        </div>
                    </div>
                    <div className="bg-additional-salty rounded-[16px] py-[52px] px-12">
                        <Image src="/developer/effortless.png" alt="img" width={460} height={344} />
                    </div>
                </div>
                <div className="flex flex-row gap-24 items-center">
                    <div className="bg-additional-snow rounded-[16px] py-[52px] px-12">
                        <div className="grid grid-cols-2 gap-4">
                            <Image src="/developer/code-1.png" alt="img" width={222} height={164} />
                            <Image src="/developer/code-2.png" alt="img" width={222} height={164} />
                            <Image src="/developer/code-3.png" alt="img" width={222} height={164} />
                            <Image src="/developer/code-4.png" alt="img" width={222} height={164} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 max-w-[540px]">
                        <div className="flex flex-row gap-2">
                            <div className="h-[22px] w-[1px] bg-primary-500" />
                            <p className="text-[14px] font-medium leading-[22px] uppercase text-primary-500">Code Security</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[40px] leading-[50px] font-normal text-grayscale-900">Secure Your Codebase</h3>
                            <p className="text-[18px] leading-8 text-grayscale-600">Your code remains entirely private—never used for training or shared externally. Safeguard your production code with robust security, including code obfuscation and deployment options.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-24 items-center">
                    <div className="flex flex-col gap-6 max-w-[540px]">
                        <div className="flex flex-row gap-2">
                            <div className="h-[22px] w-[1px] bg-primary-500" />
                            <p className="text-[14px] font-medium leading-[22px] uppercase text-primary-500">Coverage Fast</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[40px] leading-[50px] font-normal text-grayscale-900">Intelligent QA for <br />Complete Coverage</h3>
                            <p className="text-[18px] leading-8 text-grayscale-600">Quickly generate comprehensive tests for extensive codebases in one go. With Batch Mode, eliminate technical debt and achieve full test coverage at unparalleled speed.</p>
                        </div>
                    </div>
                    <div className="bg-additional-light rounded-[16px] py-[52px] px-12">
                        <div className="flex flex-col gap-3">
                            <Image src="/developer/coverage-1.png" alt="img" width={460} height={93} />
                            <Image src="/developer/coverage-2.png" alt="img" width={460} height={293} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}