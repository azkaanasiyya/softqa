import { InputEmail } from "../custom/inputemail";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { DropdownHelp } from "./dropdown";

export function HelpModal() {
    return (
        <Dialog>
            <form>
        <DialogTrigger asChild>
          <Button variant="get" size="default" className="cursor-pointer text-primary-500 w-full max-w-[328px]">Contact Us</Button>
        </DialogTrigger>
        <DialogContent className="w-full">
            <div className="flex flex-col gap-6">
                <DialogHeader>
                    <DialogTitle>Get in touch</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-2">
                    <span className="text-[16px] leading-6 text-grayscale-900">Your name*</span>
                    <InputEmail placeholder="Enter your name"/>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[16px] leading-6 text-grayscale-900">Your Email*</span>
                    <InputEmail placeholder="Enter your email"/>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[16px] leading-6 text-grayscale-900">Topics*</span>
                    <DropdownHelp />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[16px] leading-6 text-grayscale-900">What issues can we help?*</span>
                    <Textarea placeholder="Enter your question, issues, or else..."/>
                </div>
            </div>
          <DialogFooter>
            <Button variant="request" size="big" className="cursor-pointer text-cyan-500 w-full max-w-[520px]">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </form>
        </Dialog>
    )
}