import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronDownIcon } from "lucide-react"

export function SelectNumber() {
  return (
    <Select>
      <SelectTrigger icon={<ChevronDownIcon />} className="w-full">
        <SelectValue placeholder="Select one" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="1">1-10 users</SelectItem>
          <SelectItem value="10">10-20 users</SelectItem>
          <SelectItem value="50">&lt;50 users</SelectItem>
          <SelectItem value="custom">Custom</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
