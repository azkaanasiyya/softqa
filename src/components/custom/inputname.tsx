import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import * as React from "react";

export function InputName(props: React.ComponentProps<typeof Input>) {
    return (
        <Input 
            {...props}
            className={cn(
                "w-full lg:max-w-[520px] h-14 border-[2px] border-grayscale-100 p-4 text-[16px] text-grayscale-900 leading-6 rounded-[12px]",
                "focus:border-[1.5px] focus:border-primary-500 focus-visible:ring-[3px] focus-visible:ring-[#24697514] focus:outline-none",
                props.className
            )}
        />
    )

}