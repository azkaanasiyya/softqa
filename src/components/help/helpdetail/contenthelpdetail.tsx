import Link from "next/link";

export default function ContentHelpDetail() {
    return (
        <div className="flex flex-col justify-center items-center bg-primary-900 px-6 md:px-10 lg:px-[124px] pt-6 lg:pt-8 pb-16">
            <div className="max-w-[1192px] w-full flex flex-col gap-12">
                <div className="flex flex-row gap-1 items-center">
                    <Link href="/help" className="cursor-pointer">
                        <span className="text-[16px] leading-6 text-base-white">Help Center</span>
                    </Link>
                    <span className="text-[16px] leading-6 text-base-white w-4 flex flex-col justify-center items-center">/</span>
                    <span className="text-[16px] leading-6 text-white-opacity-80">General questions</span>
                </div>
                <h1 className="text-[40px] md:text-[56px] leading-[50px] md:leading-[70px] text-base-white text-center">General questions</h1>
            </div>
        </div>
    )
}