import Image from "next/image";

export default function DeveloperValue() {
    return (
        <div className="bg-primary-50 bg-[url('/developer/bg-value.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center py-12 md:py-20 px-6 md:px-8 lg:p-[124px]">
            <div className="max-w-[1192px] flex flex-col lg:flex-row gap-6 md:gap-8">
                <div className="bg-base-white lg:py-10 lg:px-8 md:p-8 p-6 rounded-[16px] flex flex-col md:flex-row lg:flex-col items-start gap-5 md:gap-[30px] lg:gap-8 w-full lg:max-w-[379px]">
                    <Image src="/developer/clock.png" alt="img" width={40} height={40} />
                    <div className="flex flex-col gap-2">
                        <h5 className="text-[20px] md:text-[24px] leading-9 md:leading-[30px] font-normal text-grayscale-900">Faster feature deployments</h5>
                        <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 font-normal text-grayscale-600">Launch new features quickly while meeting user needs.</p>
                    </div>
                </div>
                <div className="bg-base-white lg:py-10 lg:px-8 md:p-8 p-6 rounded-[16px] flex flex-col md:flex-row lg:flex-col items-start gap-5 md:gap-[30px] lg:gap-8 w-full lg:max-w-[379px]">
                    <Image src="/developer/dollar.png" alt="img" width={40} height={40} />
                    <div className="flex flex-col gap-2">
                        <h5 className="text-[20px] md:text-[24px] leading-9 md:leading-[30px] font-normal text-grayscale-900">Save time and budget</h5>
                        <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 font-normal text-grayscale-600">Cut QA time by 90% and save thousands dollars over time.</p>
                    </div>
                </div>
                <div className="bg-base-white lg:py-10 lg:px-8 md:p-8 p-6 rounded-[16px] flex flex-col md:flex-row lg:flex-col items-start gap-5 md:gap-[30px] lg:gap-8 w-full lg:max-w-[379px]">
                    <Image src="/developer/pointer.png" alt="img" width={40} height={40} />
                    <div className="flex flex-col gap-2">
                        <h5 className="text-[20px] md:text-[24px] leading-9 md:leading-[30px] font-normal text-grayscale-900">Improve customer retention</h5>
                        <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 font-normal text-grayscale-600">Say goodbye to bugs. Improve user satisfaction and reduce churn.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}