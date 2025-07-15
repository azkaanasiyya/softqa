import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export function InputSearch(props: React.ComponentProps<typeof Input>) {
  return (
    <Input
      {...props}
      className={cn(
        "w-[760px] h-16 border-2 border-grayscale-100 p-5 text-[16px] text-grayscale-400 leading-6 rounded-[16px]",
        props.className
      )}
    />
  );
}
