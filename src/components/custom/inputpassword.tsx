"use client"

import { cn } from "@/lib/utils"
import { Input } from "../ui/input"
import { Lock, Eye, EyeOff } from "lucide-react"
import * as React from "react"

export function InputPassword(props: React.ComponentProps<typeof Input>) {
  const [isFocused, setIsFocused] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <div className="relative w-full lg:max-w-[520px]">
      <span className="absolute left-5 top-1/2 -translate-y-1/2">
        <Lock
          className={cn("w-5 h-5", isFocused ? "text-primary-500" : "text-grayscale-400")}
        />
      </span>

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-5 top-1/2 -translate-y-1/2 focus:outline-none cursor-pointer"
        tabIndex={-1}
      >
        {showPassword ? (
          <EyeOff className={cn("w-5 h-5", isFocused ? "text-primary-500" : "text-grayscale-400")} />
        ) : (
          <Eye className={cn("w-5 h-5", isFocused ? "text-primary-500" : "text-grayscale-400")} />
        )}
      </button>

      <Input
        type={showPassword ? "text" : "password"}
        autoComplete="new-password"
        {...props}
        onFocus={(e) => {
          setIsFocused(true)
          props.onFocus?.(e)
        }}
        onBlur={(e) => {
          setIsFocused(false)
          props.onBlur?.(e)
        }}
        className={cn(
          "w-full h-12 md:h-14 border-2 border-grayscale-100 appearance-none p-4 pl-[52px] pr-[44px] text-[16px] leading-6 rounded-[12px]",
          isFocused && "border-primary-500 text-grayscale-900",
          props.className,
          "hide-password-toggle"
        )}
      />
    </div>
  )
}
