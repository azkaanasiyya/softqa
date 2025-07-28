"use client"

import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import { SelectRegion } from "./selectregion";
import { SelectNumber } from "./selectnumber";
import { InputName } from "../custom/inputname";
import FadeInSection from "../animation/fadein";

type HomeModalProps = {
    triggerType?: 'white' | 'green';
};

export function HomeModal({triggerType = 'white'}: HomeModalProps) {
    return (
        <Dialog>
            <form onSubmit={(e) => e.preventDefault()}>
            {triggerType === 'white' ? (
            <DialogTrigger asChild>
                <div className="w-full">
                    <Button
                        variant="login"
                        size="big"
                        className="cursor-pointer text-primary-500 w-full"
                    >
                        Talk to Sales       
                    </Button> 
                </div>
                
            </DialogTrigger>
            ) : (
            <DialogTrigger asChild>
                <Button variant="talk" size="big" className="cursor-pointer text-cyan-500 w-full">Talk to Sales</Button>
            </DialogTrigger>
            )}
        <DialogContent className="w-full md:max-w-[584px] max-w-[90vw] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-h-[90vh]">
            <FadeInSection delay={0.5} className="flex flex-col w-full gap-6">
                <div className="flex flex-col gap-2">
                    <DialogHeader>
                        <DialogTitle>Contact our sales team! </DialogTitle>
                    </DialogHeader>
                    <div className="relative">
                        <p className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-900">Just few details and your questions answered by one of our product <br className="block md:hidden"/> experts.</p>
                        <Image src="/home/sales.png" alt="icon" width={72} height={28} className="absolute bottom-0 md:-bottom-1 left-15 md:left-35 object-contain md:w-[72px] md:h-[28px] w-[60px] h-6"/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col w-full gap-2">
                        <span className="text-[16px] leading-6 text-grayscale-900">First name*</span>
                        <InputName placeholder="Enter first name"/>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <span className="text-[16px] leading-6 text-grayscale-900">Last name*</span>
                        <InputName placeholder="Enter last name"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[16px] leading-6 text-grayscale-900">Your Email*</span>
                    <InputName placeholder="Enter your email"/>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col w-full gap-2">
                        <span className="text-[16px] leading-6 text-grayscale-900">Region*</span>
                        <SelectRegion />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <span className="text-[16px] leading-6 text-grayscale-900">Number of users*</span>
                        <SelectNumber />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[16px] leading-6 text-grayscale-400">Additional notes*</span>
                    <Textarea variant="sales" placeholder="What would you like to talk about?"/>
                </div>
            </FadeInSection>
            <FadeInSection delay={0.5}>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="request" size="big" className="cursor-pointer text-cyan-500 w-full max-w-[520px]">Send to Sales</Button>
                    </DialogClose>
                </DialogFooter>
            </FadeInSection>
        </DialogContent>
      </form>
        </Dialog>
    )
}