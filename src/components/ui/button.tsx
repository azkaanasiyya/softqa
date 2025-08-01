import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        login:
          "bg-white border-[2px] border-grayscale-100 hover:bg-neutral-100",
        request: 
          "bg-primary-900 hover:bg-primary-800",
        get:
          "bg-cyan-500 hover:bg-cyan-400",
        talk:
          "bg-primary-800 hover:bg-primary-700 border-2 border-white-opacity-6",
        pricing:
          "bg-white-opacity-12 hover:bg-white-opacity-6 border-2 border-white-opacity-6",
        dropdown:
          "bg-base-white border border-primary-500",
        developer:
          "bg-base-white hover:bg-primary-100 hover:shadow hover:scale-[1.02]"
      },
      size: {
        default: "h-[48px] rounded-[8px] px-[24px] py-[12px] text-[16px] flex flex-col justify-center items-center leading-[24px] font-medium",
        medium: "h-[56px] rounded-[12px] px-[24px] py-[16px] text-[16px] flex flex-row gap-[8px] leading-[24px] font-medium",
        big: "h-[64px] w-full md:w-auto rounded-[12px] px-[32px] py-[20px] text-[16px] flex flex-col justify-center items-center leading-[24px] font-medium",
        select: "h-[64px] rounded-[12px] px-[16px] text-[16px] flex flex-col items-start leading-[24px] font-normal text-grayscale-400",
        developer: "w-[52px] h-[52px] rounded-full text-[20px]"
      },
    },
    defaultVariants: {
      variant: "login",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
