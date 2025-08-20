"use client"

import FadeInSection from "../animation/fadein";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { SelectTopics } from "./selecttopics";
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import * as React from "react"
import {
    FormField,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const helpFormSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Email is invalid"),
    topics: z.string().min(1, "Topics is required"),
    question: z.string().nonempty("Question is required"),
})

type HelpModalProps = {
    triggerType?: 'white' | 'green';
};

export function HelpModal({ }: HelpModalProps) {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

    const methods = useForm({
        resolver: zodResolver(helpFormSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            topics: undefined,
            question: "",
        }
    })

    const onSubmit = (data: z.infer<typeof helpFormSchema>) => {
        console.log("Form submitted with data:", data);
        setIsDialogOpen(false);
        methods.reset();
    }

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="get"
                    size="default"
                    className="cursor-pointer text-primary-500 w-full max-w-[328px]"
                    onClick={() => setIsDialogOpen(true)}
                >
                    Contact Us
                </Button>
            </DialogTrigger>

            <DialogContent className="w-full md:max-w-[584px] max-w-[90vw] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pt-5 md:pt-6 pb-6 md:pb-10 px-6 md:px-8 max-h-[90vh]">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <FadeInSection delay={0.5} className="flex flex-col gap-6">
                            <DialogHeader>
                                <DialogTitle>Get in touch</DialogTitle>
                            </DialogHeader>

                            <FormField
                                name="name"
                                render={({ field }) => (
                                    <div className="flex flex-col gap-2">
                                        <FormLabel>Your name*</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your name" {...field} />
                                        </FormControl>
                                        <FormMessage name="name"/>
                                    </div>
                                )}
                            />

                            <FormField
                                name="email"
                                render={({ field }) => (
                                    <div className="flex flex-col gap-2">
                                        <FormLabel>Your Email*</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage name="email"/>
                                    </div>
                                )}
                            />

                            <FormField
                                name="topics"
                                render={({ field }) => (
                                    <div className="flex flex-col gap-2">
                                        <FormLabel>Topics*</FormLabel>
                                        <FormControl>
                                            <SelectTopics
                                                value={field.value}
                                                onValueChange={field.onChange}
                                                onBlur={field.onBlur}
                                                name={field.name}
                                            />
                                        </FormControl>
                                        <FormMessage name="topics"/>
                                    </div>
                                )}
                            />

                            <FormField
                                name="question"
                                render={({ field }) => (
                                    <div className="flex flex-col gap-2">
                                        <FormLabel>What issues can we help?*</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter your question, issues, or else..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage name="question"/>
                                    </div>
                                )}
                            />
                        </FadeInSection>

                        <FadeInSection delay={0.5} className="mt-6">
                            <DialogFooter>
                                <Button
                                    type="submit"
                                    variant="request"
                                    size="big"
                                    className="cursor-pointer text-cyan-500 w-full lg:max-w-[520px]"
                                >
                                    Submit
                                </Button>
                            </DialogFooter>
                        </FadeInSection>
                    </form>
                </FormProvider>
            </DialogContent>
        </Dialog>
    )
}
