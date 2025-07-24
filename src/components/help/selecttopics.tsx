import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectTopics() {
  return (
    <Select>
      <SelectTrigger className="w-full">
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
