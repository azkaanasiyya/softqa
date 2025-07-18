import { Button } from "../ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "../data/faqs";
import Link from "next/link";

export default function FAQs() {
    return (
        <div className="bg-primary-50 py-[116px] px-[124px] flex flex-col justify-center items-center">
            <div className="max-w-[1192px] flex flex-col lg:flex-row gap-8">
                <div className="max-w-[478px] w-full flex flex-col justify-between items-start">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-2">
                            <div className="h-[22px] w-[1px] bg-primary-500" />
                            <p className="text-[14px] font-medium leading-[22px] uppercase text-primary-500">faq</p>
                        </div>
                        <h2 className="max-w-[580px] text-[48px] leading-[60px] font-normal text-grayscale-900">Frequently asked questions</h2>
                    </div>
                    <Link href="/help" className="cursor-pointer">
                        <Button variant="login" size="medium" className="cursor-pointer text-primary-500">
                            Help Center
                        <Image src="/home/help-icon.png" alt="faqs" width={16} height={16} />
                    </Button>
                    </Link>
                </div>
                <div className="flex justify-center pt-12 max-w-[682px] w-full">
                    <div className="flex flex-col max-w-[682px] w-full">
                        <Accordion
                            type="single"
                            collapsible
                            className="max-w-[682px] w-full"
                        >
                            {faqs.map((faq) => (
                                <AccordionItem value={faq.value} key={faq.value}>
                                    <AccordionTrigger>{faq.title}</AccordionTrigger>
                                    <AccordionContent>{faq.desc}</AccordionContent>
                                    <AccordionContent>{faq.description}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}