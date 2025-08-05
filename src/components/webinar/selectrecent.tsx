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

export function SelectRecent() {
  return (
    <Select>
      <SelectTrigger icon={<ChevronDownIcon />} className="w-full max-h-12 h-full hidden md:flex cursor-pointer">
        <SelectValue placeholder="Most recent" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="pop">Popular</SelectItem>
          <SelectItem value="recent">Recent</SelectItem>
          <SelectItem value="old">Oldest</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
