import Image from "next/image";

export default function SocialProof() {
    return (
        <div className="relative bg-[url('/home/bg-social.png')] bg-no-repeat bg-center bg-cover border-t border-b border-grayscale-100 py-16 flex flex-col gap-4 md:gap-8 items-center overflow-hidden">
            <div className="absolute">
                <Image
                    src="/home/bg-line.png"
                    alt="social proof"
                    width={1248}
                    height={48}
                    className="w-[167px] h-[48px]"
                />
            </div>
            <p className="text-[18px] md:text-[20px] text-grayscale-600 leading-7 md:leading-9 font-regular">Trusted by 2M+ users globally</p>
            <div className="flex flex-row gap-8 md:gap-12 lg:gap-20 justify-center">
                {Array.from({length:6}).map((_, i) => (
                        <Image
                            key={i}
                            src={`/home/social/social${i + 1}.png`}
                            alt="social proof"
                            width={167}
                            height={48}
                            className="w-auto md:w-[167px] h-6 md:h-10 lg:h-12"
                        />
                    ))}
            </div>
        </div>
    )
}