import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export function InputWebinar(props: React.ComponentProps<typeof Input>) {
  return (
    <Input
      {...props}
      className={cn(
        "w-full md:max-w-[377px] lg:max-w-[216px] h-12 border-2 border-grayscale-100 px-4 py-3 text-[16px] text-grayscale-400 leading-6 rounded-[16px]",
        props.className
      )}
    />
  );
}
