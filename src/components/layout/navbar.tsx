"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname(); 

    const navItems = [
        { name: "Developer", href: "/developer" },
        { name: "Webinar", href: "/webinar" },
        { name: "Pricing", href: "/pricing" },
    ];

    return (
        <div className="flex flex-row justify-between items-center px-20 py-5">
            <Link href="/" className="cursor-pointer">
                <Image src="/logo.svg" alt="logo" width={124} height={40} />
            </Link>
            <ul className="flex flex-row gap-10 cursor-pointer">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <li key={item.name}>
                            <Link href={item.href}>
                                <p
                                    className={`text-[16px] ${
                                        isActive ? "font-medium text-black border-b border-primary-500" : "font-normal text-grayscale-900"
                                    } pb-1`}
                                >
                                    {item.name}
                                </p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div className="flex flex-row gap-4">
                <Link href="/auth/sign-in">
                    <Button
                        variant="login"
                        size="default"
                        className="cursor-pointer text-primary-500"
                    >
                        Sign In
                    </Button>
                </Link>
                <Button
                    variant="request"
                    size="default"
                    className="cursor-pointer text-cyan-500"
                >
                    Get Started
                </Button>
            </div>
        </div>
    );
}
