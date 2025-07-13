import Image from "next/image";

export default function DeveloperValue() {
    return (
        <div className="bg-primary-50 bg-[url('/developer/bg-value.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center p-[124px]">
            <div className="max-w-[1192px] flex flex-row gap-8">
                <div className="bg-base-white py-10 px-8 rounded-[16px] flex flex-col gap-8 max-w-[379px]">
                    <Image src="/developer/clock.png" alt="img" width={40} height={40} />
                    <div className="flex flex-col gap-2">
                        <h5 className="text-[24px] leading-[30px] font-normal text-grayscale-900">Faster feature deployments</h5>
                        <p className="text-[18px] leading-8 font-normal text-grayscale-600">Launch new features quickly while meeting user needs.</p>
                    </div>
                </div>
                <div className="bg-base-white py-10 px-8 rounded-[16px] flex flex-col gap-8 max-w-[379px]">
                    <Image src="/developer/dollar.png" alt="img" width={40} height={40} />
                    <div className="flex flex-col gap-2">
                        <h5 className="text-[24px] leading-[30px] font-normal text-grayscale-900">Save time and budget</h5>
                        <p className="text-[18px] leading-8 font-normal text-grayscale-600">Cut QA time by 90% and save thousands dollars over time.</p>
                    </div>
                </div>
                <div className="bg-base-white py-10 px-8 rounded-[16px] flex flex-col gap-8 max-w-[379px]">
                    <Image src="/developer/pointer.png" alt="img" width={40} height={40} />
                    <div className="flex flex-col gap-2">
                        <h5 className="text-[24px] leading-[30px] font-normal text-grayscale-900">Improve customer retention</h5>
                        <p className="text-[18px] leading-8 font-normal text-grayscale-600">Say goodbye to bugs. Improve user satisfaction and reduce churn.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}