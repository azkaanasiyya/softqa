import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { HomeModal } from "../home/modal";
import FadeInSection from "../animation/fadein";

export default function CTA() {
    return (
        <div className="bg-primary-900 flex flex-col items-center justify-center pt-12 md:pt-20 lg:pt-0 overflow-hidden">
            <FadeInSection delay={0.5} className="max-w-[1440px] flex flex-col lg:flex-row gap-12 lg:gap-8 lg:pl-[128px] items-center justify-center">
                <div className="flex flex-col items-center lg:items-start gap-8 md:gap-12 max-w-[327px] md:max-w-[704px] lg:max-w-[580px]">
                    <div className="flex flex-col items-start md:items-center lg:items-start gap-4">
                        <h2 className="text-[32px] md:text-[48px] leading-10 md:leading-[60px] font-normal text-start md:text-center lg:text-start text-base-white">
                            Ready to turn{" "}
                            <br className="block md:hidden" />
                            your
                            <br className="hidden md:block" />
                            development innovation?
                        </h2>
                        <p className="text-[18px] leading-8 md:leading-[28px] font-normal text-start md:text-center lg:text-start text-base-white opacity-[88%]">Try and see the magic of the SoftQA in action.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto md:gap-5">
                        <Link href="/auth/sign-up">
                           <Button variant="get" size="big" className="cursor-pointer text-primary-900">Get Started</Button> 
                        </Link>
                        <HomeModal triggerType="green"/>
                    </div>
                </div>
                <Image src="/cta/img-desktop.png" alt="cta" width={704} height={484} className="w-[704px] h-[484px] object-cover object-left-top overflow-visible hidden lg:block" />
                <Image src="/cta/img-tablet.png" alt="cta" width={768} height={256} className="w-[768px] h-[256px] hidden md:block lg:hidden" />
                <Image src="/cta/img-mobile.png" alt="cta" width={375} height={180} className="w-[375px] h-[180px] md:hidden" />
            </FadeInSection>
        </div>
    )
}