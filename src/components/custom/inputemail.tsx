import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import * as React from "react";

export function InputEmail(props: React.ComponentProps<typeof Input>) {
    return (
        <Input 
            {...props}
            className={cn(
                "max-w-[520px] w-full h-14 border-[1.5px] border-primary-500 p-4 text-[16px] text-grayscale-400 leading-6 rounded-[12px]",
                props.className
            )}
        />
    )
}