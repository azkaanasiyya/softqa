"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import FadeInSection from "../animation/fadein";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Developer", href: "/developer" },
    { name: "Webinar", href: "/webinar" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="relative z-50 flex flex-col justify-center items-center">
      <FadeInSection delay={0.5} className="max-w-[1280px] w-full flex justify-between items-center px-8 lg:px-20 py-5">
        <Link href="/" className="cursor-pointer">
          <Image src="/logo.svg" alt="logo" width={124} height={40} />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex flex-row gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link href={item.href}>
                  <p
                    className={`text-[16px] pb-1 ${
                      isActive
                        ? "font-medium text-black border-b border-primary-500"
                        : "font-normal text-grayscale-900"
                    }`}
                  >
                    {item.name}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4">
          <Link href="/auth/sign-in">
            <Button variant="login" size="default" className="text-primary-500 cursor-pointer">
              Sign In
            </Button>
          </Link>
          <Link href="/auth/sign-up">
            <Button variant="request" size="default" className="text-cyan-500 cursor-pointer">
              Get Started
            </Button>
          </Link>
          
        </div>

        {/* Mobile/Tablet Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </FadeInSection>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown Menu */}
          <FadeInSection delay={0.5} className="fixed top-0 left-0 w-full lg:w-auto bg-white z-50 lg:hidden">
            <div className="flex justify-between items-center py-5 px-8 border-b mb-4 md:mb-10 border-grayscale-100">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image src="/logo.svg" alt="logo" width={124} height={40} />
              </Link>
              <button onClick={() => setIsOpen(false)} aria-label="Close Menu" className="bg-grayscale-50 p-2 rounded-[8px] border border-grayscale-100 w-10 h-10">
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col items-start md:items-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-[20px] md:text-[24px] text-grayscale-900 text-start md:text-center py-3.5 md:py-4 px-6"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 p-6 md:p-8">
              <Link href="/auth/sign-up" onClick={() => setIsOpen(false)}>
                <Button variant="request" size="default" className="w-full text-cyan-500">
                  Get Started
                </Button>
              </Link>
              
              <Link href="/auth/sign-in" onClick={() => setIsOpen(false)}>
                <Button variant="login" size="default" className="w-full text-primary-500">
                  Sign In
                </Button>
              </Link> 
            </div>
          </FadeInSection>
        </>
      )}
    </nav>
  );
}
