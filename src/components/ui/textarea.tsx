import * as React from "react"
import { cn } from "@/lib/utils"

type TextareaProps = React.ComponentProps<"textarea"> & {
  variant?: "default" | "sales" | "help"
}

const variantClasses: Record<Required<TextareaProps>["variant"], string> = {
  default: "",

  sales:
    "placeholder:text-grayscale-400 focus:border-[1.5px] focus:border-primary-500 focus-visible:ring-[3px] focus-visible:ring-[#24697514] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 bg-base-white aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-[148px] w-full max-w-[520px] border-2 border-grayscale-100 p-4 text-[16px] leading-6 text-grayscale-900 rounded-[12px] transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",

  help:
    "bg-transparent border border-transparent text-grayscale-900 placeholder:text-grayscale-400 focus-visible:ring-0 focus-visible:border-muted-foreground",
}

function Textarea({
  className,
  variant = "default",
  ...props
}: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-grayscale-400 focus:border-[1.5px] focus:border-primary-500 focus-visible:ring-[3px] focus-visible:ring-[#24697514] focus:outline-none bg-base-white aria-invalid:border-destructive flex field-sizing-content min-h-[148px] w-full max-w-[520px] border-2 border-grayscale-100 p-4 text-[16px] leading-6 text-grayscale-900 rounded-[12px] transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
}

export { Textarea }