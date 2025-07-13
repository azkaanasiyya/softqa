import { Button } from "../ui/button";
import Image from "next/image";

export default function CTA() {
    return (
        <div className="bg-primary-900 flex flex-row gap-8 pl-[128px] items-center justify-center">
            <div className="flex flex-col gap-12 max-w-[580px]">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[48px] leading-[60px] font-normal text-base-white">Ready to turn your <br />development innovation?</h2>
                    <p className="text-[18px] leading-[28px] font-normal text-base-white opacity-[88%]">Try and see the magic of the SoftQA in action.</p>
                </div>
                <div className="flex flex-row gap-5">
                    <Button variant="get" size="big" className="cursor-pointer text-primary-900">Get Started</Button>
                    <Button variant="talk" size="big" className="cursor-pointer text-cyan-500">Talk to Sales</Button>
                </div>
            </div>
            <Image src="/cta/img-desktop.png" alt="cta" width={704} height={484} className="w-[704px] h-[484px] object-cover object-left-top" />
        </div>
    )
}