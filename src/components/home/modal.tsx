"use client"

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
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { Input } from "@/components/ui/input"
import Image from "next/image";
import { SelectRegion } from "./selectregion";
import { SelectNumber } from "./selectnumber";
import FadeInSection from "../animation/fadein";

const salesFormSchema = z.object({
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
    email: z.string().email("Email is invalid"),
    region: z.string().min(1, "Region is required"),
    users: z.string().min(1, "Number of users is required"),
    notes: z.string().nonempty("Additional notes is required"),
})

type HomeModalProps = {
    triggerType?: 'white' | 'green';
};

export function HomeModal({ triggerType = 'white' }: HomeModalProps) {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

    const methods = useForm({
        resolver: zodResolver(salesFormSchema),
        mode: "onChange",
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            region: undefined, 
            users: undefined,
            notes: "",
        },
    })

    const onSubmit = (data: z.infer<typeof salesFormSchema>) => {
        console.log("Form submitted with data:", data);
        setIsDialogOpen(false);
        methods.reset();
    }

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                {triggerType === 'white' ? (
                    <div>
                        <Button
                            variant="login"
                            size="big"
                            className="cursor-pointer text-primary-500 w-full"
                            onClick={() => setIsDialogOpen(true)}
                        >
                            Talk to Sales
                        </Button>
                    </div>
                ) : (
                    <Button
                        variant="talk"
                        size="big"
                        className="cursor-pointer text-cyan-500"
                        onClick={() => setIsDialogOpen(true)}
                    >
                        Talk to Sales
                    </Button>
                )}
            </DialogTrigger>
            
            <DialogContent className="w-full md:max-w-[584px] max-w-[90vw] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-h-[90vh] pt-5 md:pt-6 pb-6 md:pb-10 px-6 md:px-8">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <FadeInSection delay={0.5} className="flex flex-col w-full gap-6">
                            <div className="flex flex-col gap-2">
                                <DialogHeader>
                                    <DialogTitle>Contact our sales team!</DialogTitle>
                                </DialogHeader>
                                <div className="relative">
                                    <p className="text-[16px] md:text-[18px] leading-6 md:leading-7 text-grayscale-900">Just few details and your questions answered by one of our product <br className="block md:hidden"/> experts.</p>
                                    <Image src="/home/sales.png" alt="icon" width={72} height={28} className="absolute bottom-0 md:-bottom-1 left-15 md:left-35 object-contain md:w-[72px] md:h-[28px] w-[60px] h-6"/>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <FormField
                                    name="firstName"
                                    render={({ field }) => (
                                        <div className="flex flex-col w-full gap-2">
                                            <FormLabel>First name*</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter first name" {...field} />
                                            </FormControl>
                                            <FormMessage name="firstName" />
                                        </div>
                                    )}
                                />
                                <FormField
                                    name="lastName"
                                    render={({ field }) => (
                                        <div className="flex flex-col w-full gap-2">
                                            <FormLabel>Last name*</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter last name" {...field} />
                                            </FormControl>
                                            <FormMessage name="lastName" />
                                        </div>
                                    )}
                                />
                            </div>
                            <FormField
                                name="email"
                                render={({ field }) => (
                                    <div className="flex flex-col gap-2">
                                        <FormLabel>Your Email*</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage name="email" />
                                    </div>
                                )}
                            />
                            <div className="flex flex-col md:flex-row gap-6">
                                <FormField
                                    name="region"
                                    render={({ field }) => (
                                        <div className="flex flex-col w-full gap-2">
                                            <FormLabel>Region*</FormLabel>
                                            <FormControl>
                                                <SelectRegion 
                                                        value={field.value}
                                                        onValueChange={field.onChange}
                                                        onBlur={field.onBlur}
                                                        name={field.name} />  
                                            </FormControl>
                                            <FormMessage name="region" />
                                        </div>
                                    )}
                                />
                                <FormField
                                    name="users"
                                    render={({ field }) => (
                                        <div className="flex flex-col w-full gap-2">
                                            <FormLabel>Number of users*</FormLabel>
                                            <FormControl>
                                                <SelectNumber 
                                                    value={field.value}
                                                    onValueChange={field.onChange}
                                                    onBlur={field.onBlur}
                                                    name={field.name} />
                                            </FormControl>
                                            <FormMessage name="users" />
                                        </div>
                                    )}
                                />
                            </div>
                            <FormField
                                name="notes"
                                render={({ field }) => (
                                    <div className="flex flex-col gap-2">
                                        <FormLabel>Additional notes*</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="What would you like to talk about?" {...field} />
                                        </FormControl>
                                        <FormMessage name="notes" />
                                    </div>
                                )}
                            />
                        </FadeInSection>
                        <FadeInSection delay={0.5} className="mt-8">
                            <DialogFooter>
                                <Button type="submit" variant="request" size="big" className="cursor-pointer text-cyan-500 w-full max-w-[520px]">Send to Sales</Button>
                            </DialogFooter>
                        </FadeInSection>
                    </form>
                </FormProvider>
            </DialogContent>
        </Dialog>
    )
}