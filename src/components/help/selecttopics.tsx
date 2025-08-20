"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectProps } from "@radix-ui/react-select";

interface SelectTopicsProps extends SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  onBlur?: () => void;
  name?: string;
}

export function SelectTopics({ value, onValueChange, onBlur, name, ...props }: SelectTopicsProps) {
  return (
    <Select value={value} onValueChange={onValueChange} {...props}>
      <SelectTrigger onBlur={onBlur} name={name} className="w-full">
        <SelectValue placeholder="Select one" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="general">General questions</SelectItem>
          <SelectItem value="billing">Billing and Payments</SelectItem>
          <SelectItem value="technical">Technical Support</SelectItem>
          <SelectItem value="getting">Getting Started</SelectItem>
          <SelectItem value="advanced">Advanced Features</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
