import Image from "next/image";
import { Button } from "../ui/button";

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center px-20 py-5">
            <Image src="/logo.svg" alt="logo" width={124} height={40}/>
            <ul className="flex flex-row gap-10 cursor-pointer">
                <li className="text-[16px] font-normal text-grayscale-900">Developer</li>
                <li className="text-[16px] font-normal text-grayscale-900">Webinar</li>
                <li className="text-[16px] font-normal text-grayscale-900">Pricing</li>
            </ul>
            <div className="flex flex-row gap-4">
                <Button
                    variant="login"
                    size="default"
                    className="cursor-pointer text-primary-500"
                >
                    Sign In
                </Button>
                <Button
                    variant="request"
                    size="default"
                    className="cursor-pointer text-cyan-500"
                >
                    Get Started
                </Button>
            </div>
        </div>
    )
}