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

export function SelectCategories() {
  return (
    <Select>
      <SelectTrigger icon={<ChevronDownIcon />} className="w-full max-h-12 h-full hidden md:flex">
        <SelectValue placeholder="All categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">All categories</SelectItem>
          <SelectItem value="team">#Teamwork</SelectItem>
          <SelectItem value="tech">#Technology</SelectItem>
          <SelectItem value="prod">#Productivity</SelectItem>
          <SelectItem value="innov">#Innovation</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
