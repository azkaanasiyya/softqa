import FadeInSection from "../animation/fadein";
import { InputName } from "../custom/inputname";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { SelectTopics } from "./selecttopics";

export function HelpModal() {
    return (
        <Dialog>
            <form>
        <DialogTrigger asChild>
          <Button variant="get" size="default" className="cursor-pointer text-primary-500 w-full max-w-[328px]">Contact Us</Button>
        </DialogTrigger>
        <DialogContent className="w-full md:max-w-[584px] max-w-[90vw] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pt-5 md:pt-6 pb-6 md:pb-10 px-6 md:px-8 max-h-[90vh]">
            <FadeInSection delay={0.5} className="flex flex-col gap-6">
                <DialogHeader>
                    <DialogTitle>Get in touch</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-2">
                    <span className="text-[16px] leading-6 text-grayscale-900">Your name*</span>
                    <InputName placeholder="Enter your name"/>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[16px] leading-6 text-grayscale-900">Your Email*</span>
                    <InputName placeholder="Enter your email"/>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[16px] leading-6 text-grayscale-900">Topics*</span>
                    <SelectTopics />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[16px] leading-6 text-grayscale-900">What issues can we help?*</span>
                    <Textarea placeholder="Enter your question, issues, or else..."/>
                </div>
            </FadeInSection>
            <FadeInSection delay={0.5}>
                <DialogFooter>
                    <Button variant="request" size="big" className="cursor-pointer text-cyan-500 w-full lg:max-w-[520px]">Submit</Button>
                </DialogFooter>
            </FadeInSection>
        </DialogContent>
      </form>
        </Dialog>
    )
}