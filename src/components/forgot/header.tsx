import Image from "next/image";
import FadeInSection from "../animation/fadein";

export default function ForgotHeader() {
    return (
        <FadeInSection delay={0.5} className="flex flex-col justify-center items-center bg-base-white w-full py-3 md:py-5">
            <Image src="/logo.svg" alt="logo" width={124} height={40} />
        </FadeInSection>
    )
}