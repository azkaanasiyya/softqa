"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function InputSearch(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full max-w-[760px]">
      <span className="absolute left-5 top-1/2 -translate-y-1/2">
        <Search className={cn("w-5 h-5", focused ? "text-grayscale-900" : "text-grayscale-400")} />
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
          "w-full h-12 md:h-16 bg-base-white border-2 border-grayscale-100 p-5 pl-[52px] text-[16px] leading-6 rounded-[12px] md:rounded-[16px] transition-colors",
          focused && "border-primary-500 text-grayscale-900",
          props.className
        )}
      />
    </div>
  );
}
