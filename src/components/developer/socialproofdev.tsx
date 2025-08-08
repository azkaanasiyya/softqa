import Image from "next/image";
import Marquee from "../animation/marquee";
import FadeInSection from "../animation/fadein";

export default function SocialProofDev() {
    return (
        <div className="bg-primary-50 relative py-8 md:py-12 lg:py-16 flex flex-col gap-4 md:gap-8 items-center overflow-hidden">
            <div className="absolute">
                <Image
                    src="/home/bg-line.png"
                    alt="social proof"
                    width={1248}
                    height={48}
                    className="w-[167px] h-[48px]"
                />
            </div>
            <FadeInSection delay={0.5}>
                <p className="text-[18px] md:text-[20px] text-grayscale-600 leading-7 md:leading-9 font-regular">Trusted by 2M+ users globally</p>
            </FadeInSection>
            <div className="relative w-full flex justify-center items-center">
                <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10" />

                <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10" />

                <div className="w-full overflow-hidden">
                    <Marquee duration={25}>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Image
                        key={i}
                        src={`/home/social/social${i + 1}.png`}
                        alt="social proof"
                        width={167}
                        height={48}
                        className="w-auto md:w-[167px] h-6 md:h-10 lg:h-12"
                        />
                    ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}