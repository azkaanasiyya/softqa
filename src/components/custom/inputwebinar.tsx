"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function InputWebinar(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full max-w-[760px]">
      <span className="absolute left-4 top-1/2 -translate-y-1/2">
        <Search className={cn("w-5 h-5", focused ? "text-primary-500" : "text-grayscale-400")} />
      </span>
      <input
        {...props}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
        className={cn(
          "w-full md:min-w-[370px] lg:min-w-[216px] h-12 pl-[44px] border-2 border-grayscale-100 pr-4 py-3 text-[16px] text-grayscale-400 leading-6 rounded-[16px]",
          focused && "border-primary-500 text-primary-500",
          props.className
        )}
      />
    </div>
  );
}

