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
import FadeInSection from "../animation/fadein";

export default function FAQs() {
    return (
        <div className="bg-primary-50 py-12 md:py-20 lg:py-[116px] px-8 lg:px-[124px] flex flex-col justify-center items-center">
            <div className="max-w-[1192px] flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
                <div className="max-w-[478px] w-full flex flex-col justify-between items-start">
                    <div className="flex flex-col items-center w-full lg:items-start gap-4">
                        <div className="flex flex-row gap-2">
                            <div className="h-[22px] w-[1px] bg-primary-500" />
                            <p className="text-[14px] font-medium leading-[22px] uppercase text-primary-500">faq</p>
                        </div>
                        <h2 className="lg:max-w-[580px] w-full text-[32px] md:text-[48px] leading-10 md:leading-[60px] font-normal text-center lg:text-start text-grayscale-900">Frequently asked questions</h2>
                    </div>
                    <Link href="/help" className="hidden lg:block cursor-pointer">
                        <Button variant="login" size="medium" className="cursor-pointer text-primary-500">
                            Help Center
                        <Image src="/home/help-icon.png" alt="faqs" width={16} height={16} />
                    </Button>
                    </Link>
                </div>
                <div className="flex justify-center pt-5 md:pt-8 lg:pt-12 max-w-[682px] w-full">
                    <FadeInSection delay={0.5} className="flex flex-col w-full">
                        <Accordion
                            type="single"
                            collapsible
                        >
                            {faqs.map((faq) => (
                                <AccordionItem value={faq.value} key={faq.value}>
                                    <AccordionTrigger className="cursor-pointer">{faq.title}</AccordionTrigger>
                                    <AccordionContent>{faq.desc}</AccordionContent>
                                    <AccordionContent>{faq.description}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </FadeInSection>
                </div>
                <Link href="/help" className="lg:hidden cursor-pointer mt-4 items-center justify-center flex-row">
                        <Button variant="login" size="medium" className="cursor-pointer text-primary-500">
                            Help Center
                        <Image src="/home/help-icon.png" alt="faqs" width={16} height={16} />
                    </Button>
                </Link>
            </div>
        </div>
    )
}