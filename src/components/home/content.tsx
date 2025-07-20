import Image from "next/image";

export default function HomeContent() {
    return (
        <div className="flex flex-col gap-8 md:gap-16 lg:gap-20 justify-center items-center py-12 md:py-20 px-6 md:px-8 lg:p-[124px]">
            <div className="max-w-[1192px] w-full flex flex-col items-center gap-4">
                <div className="flex flex-row gap-2">
                    <div className="h-[22px] w-[1px] bg-primary-500" />
                    <p className="text-[14px] font-medium leading-[22px] text-primary-500">FEATURES</p>
                </div>
                <div className="flex flex-col max-w-[580px] gap-4 items-center">
                    <h2 className="text-[32px] leading-10 md:text-[48px] font-normal text-center text-grayscale-900 md:leading-[60px]">Your Last Manual Unit Test Was Yesterday</h2>
                    <p className="text-[18px] md:text-[20px] leading-7 md:leading-[36px] text-center text-grayscale-500">SoftQA crafts unit tests at enterprise scale, freeing your creativity for development and enlightening your code&apos;s testability.</p>
                </div>
            </div>
            <div className="max-w-[1192px] grid grids-cols-1 lg:grid-cols-2 gap-8">
                <div className="rounded-[16px] bg-additional-unbleached flex flex-col lg:max-w-[580px] w-full">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="flex flex-col gap-2 md:justify-between p-6 md:p-8 md:h-[296px] lg:max-w-[324px] w-full border-b border-grayscale-100">
                            <div className="flex flex-row gap-2">
                                <div className="h-[22px] w-[1px] bg-primary-500" />
                                <p className="text-[14px] font-medium leading-[22px] text-primary-500">AUTOPILOT</p>
                            </div>
                            <h4 className="text-[24px] md:text-[32px] leading-[30px] md:leading-10 text-grayscale-900 font-normal underline">Autopilot for Unit Testing</h4>
                        </div>
                        <div className="bg-additional-palm h-[316px] md:h-auto md:max-w-[256px] w-full rounded-t-[16px] md:rounded-tl-[0px] md:rounded-tr-[16px] flex flex-col justify-center items-center">
                            <Image
                                src="/home/autopilot.png"
                                alt="autopilot"
                                width={180}
                                height={180}
                                className="w-[229.92px] h-[229.92px] md:w-[180px] md:h-[180px]"
                            />
                        </div>
                    </div>
                    <div className="px-6 py-4 md:p-8">
                        <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 font-normal text-grayscale-600">SoftQA analyzes your code and AI-generates precise unit tests, shifting your focus to developing exciting features while removing manual labor from testing processes.</p>
                    </div>
                </div>
                <div className="rounded-[16px] bg-primary-50 flex flex-col lg:max-w-[580px] w-full">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="flex flex-col gap-2 md:justify-between p-6 md:p-8 md:h-[296px] lg:max-w-[324px] w-full border-b border-grayscale-100">
                            <div className="flex flex-row gap-2">
                                <div className="h-[22px] w-[1px] bg-primary-500" />
                                <p className="text-[14px] font-medium leading-[22px] text-primary-500">ALL IN ONE</p>
                            </div>
                            <h4 className="text-[24px] md:text-[32px] leading-[30px] md:leading-10 text-grayscale-900 font-normal">One tool for all browser</h4>
                        </div>
                        <div className="bg-additional-light h-[316px] md:h-auto md:max-w-[256px] w-full rounded-t-[16px] md:rounded-tl-[0px] md:rounded-tr-[16px] flex flex-col justify-center items-center">
                            <Image
                                src="/home/allinone.png"
                                alt="autopilot"
                                width={180}
                                height={180}
                                className="w-[229.92px] h-[229.92px] md:w-[180px] md:h-[180px]"
                            />
                        </div>
                    </div>
                    <div className="px-6 py-4 md:p-8">
                        <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 font-normal text-grayscale-600">Supports browser testing on Chrome, Edge, Safari, Firefox, IE, Android, iOS, as well as mobile app testing for iOS, Android, and Flutter.</p>
                    </div>
                </div>
                <div className="rounded-[16px] bg-additional-distant flex flex-col lg:max-w-[580px] w-full">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="flex flex-col gap-2 md:justify-between p-6 md:p-8 md:h-[296px] lg:max-w-[324px] w-full border-b border-grayscale-100">
                            <div className="flex flex-row gap-2">
                                <div className="h-[22px] w-[1px] bg-primary-500" />
                                <p className="text-[14px] font-medium leading-[22px] text-primary-500">MAXIMIZED</p>
                            </div>
                            <h4 className="text-[24px] md:text-[32px] leading-[30px] md:leading-10 text-grayscale-900 font-normal">Test Coverage, Maximized</h4>
                        </div>
                        <div className="bg-additional-salty h-[316px] md:h-auto md:max-w-[256px] w-full rounded-t-[16px] md:rounded-tl-[0px] md:rounded-tr-[16px] flex flex-col justify-center items-center">
                            <Image
                                src="/home/maximize.png"
                                alt="autopilot"
                                width={180}
                                height={179}
                                className="w-[229.92px] h-[228.64px] md:w-[180px] md:h-[179px]"
                            />
                        </div>
                    </div>
                    <div className="px-6 py-4 md:p-8">
                        <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 font-normal text-grayscale-600">SoftQA automates code analysis and generates precise unit tests, freeing you to focus on developing exciting features without manual testing.</p>
                    </div>
                </div>
                <div className="rounded-[16px] bg-additional-whitest flex flex-col lg:max-w-[580px] w-full">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="flex flex-col gap-2 md:justify-between p-6 md:p-8 md:h-[296px] lg:max-w-[324px] w-full border-b border-grayscale-100">
                            <div className="flex flex-row gap-2">
                                <div className="h-[22px] w-[1px] bg-primary-500" />
                                <p className="text-[14px] font-medium leading-[22px] text-primary-500">FAST</p>
                            </div>
                            <h4 className="text-[24px] md:text-[32px] leading-[30px] md:leading-10 text-grayscale-900 font-normal">Testing at Warp Speed</h4>
                        </div>
                        <div className="bg-additional-snow h-[316px] md:h-auto md:max-w-[256px] w-full rounded-t-[16px] md:rounded-tl-[0px] md:rounded-tr-[16px] flex flex-col justify-center items-center">
                            <Image
                                src="/home/fast.png"
                                alt="autopilot"
                                width={180}
                                height={180}
                                className="w-[229.92px] h-[229.92px] md:w-[180px] md:h-[180px]"
                            />
                        </div>
                    </div>
                    <div className="px-6 py-4 md:p-8">
                        <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 font-normal text-grayscale-600">SoftQA swiftly generates unit tests for your entire codebase by pointing it to a directory. Boost productivity and maximize coding minutes with our bulk test generation.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}