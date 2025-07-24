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

export function SelectRegion() {
  return (
    <Select>
      <SelectTrigger icon={<ChevronDownIcon/>} className="w-full">
        <SelectValue placeholder="Select one" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="andorra">Andorra</SelectItem>
          <SelectItem value="united">United Arab Emirates</SelectItem>
          <SelectItem value="afghanistan">Afghanistan</SelectItem>
          <SelectItem value="antiqua">Antiqua And Barbuda</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
