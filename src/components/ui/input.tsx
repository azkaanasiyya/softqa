import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 w-full border-grayscale-100 flex h-12 min-w-0 rounded-[12px] border-2 bg-transparent px-4 py-3 text-[16px] leading-6 text-grayscale-400 transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-[16px] file:font-normal disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus:border-[1.5px] focus:border-primary-500 focus-visible:ring-[3px] focus-visible:ring-[#24697514] focus:outline-none",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
