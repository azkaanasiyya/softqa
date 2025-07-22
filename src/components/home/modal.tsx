import { InputEmail } from "../custom/inputemail";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import Image from "next/image";

export function HomeModal() {
    return (
        <Dialog>
            <form>
        <DialogTrigger asChild>
            <Button
                variant="login"
                size="big"
                className="cursor-pointer text-primary-500 w-full"
            >
                Talk to Sales       
            </Button>
        </DialogTrigger> 
        <DialogContent className="w-full max-w-[584px] overflow-y-auto max-h-[90vh]">
            <div className="flex flex-col w-full gap-6">
                <div className="flex flex-col gap-2">
                    <DialogHeader>
                        <DialogTitle>Contact our sales team! </DialogTitle>
                    </DialogHeader>
                    <div className="relative">
                        <p className="text-[18px] leading-7 text-grayscale-900">Just few details and your questions answered by one of our product experts.</p>
                        <Image src="/home/sales.png" alt="icon" width={72} height={28} className="absolute -bottom-1 left-35 object-contain"/>
                    </div>
                </div>
                <div className="flex flex-row gap-6">
                    <div className="flex flex-col w-full gap-2">
                        <span className="text-[16px] leading-6 text-grayscale-900">First name*</span>
                        <InputEmail placeholder="Enter first name"/>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <span className="text-[16px] leading-6 text-grayscale-900">Last name*</span>
                        <InputEmail placeholder="Enter last name"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[16px] leading-6 text-grayscale-900">Your Email*</span>
                    <InputEmail placeholder="Enter your email"/>
                </div>
                <div className="flex flex-row gap-6">
                    <div className="flex flex-col w-full gap-2">
                        <span className="text-[16px] leading-6 text-grayscale-900">Region*</span>
                        <div className="inline-flex w-full h-14 justify-between px-4 items-center rounded-[12px] border-2 border-grayscale-100">
                            <p className="text-[16px] leading-6 text-grayscale-400 whitespace-nowrap">Select one</p>
                            <Image src="/webinar/down.png" alt="icon" width={20} height={20} className="object-contain"/>
                        </div>  
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <span className="text-[16px] leading-6 text-grayscale-900">Number of users*</span>
                        <div className="inline-flex w-full h-14 justify-between px-4 items-center rounded-[12px] border-2 border-grayscale-100">
                            <p className="text-[16px] leading-6 text-grayscale-400 whitespace-nowrap">Select one</p>
                            <Image src="/webinar/down.png" alt="icon" width={20} height={20} className="object-contain"/>
                        </div> 
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[16px] leading-6 text-grayscale-400">Additional notes*</span>
                    <Textarea variant="sales" placeholder="What would you like to talk about?"/>
                </div>
            </div>
          <DialogFooter>
            <Button variant="request" size="big" className="cursor-pointer text-cyan-500 w-full max-w-[520px]">Send to Sales</Button>
          </DialogFooter>
        </DialogContent>
      </form>
        </Dialog>
    )
}