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

interface SelectCategoriesProps {
  onCategoryChange: (value: string) => void;
}

export function SelectCategories( {onCategoryChange}: SelectCategoriesProps ) {
  return (
    <Select onValueChange={onCategoryChange}>
      <SelectTrigger icon={<ChevronDownIcon />} className="w-full max-h-12 h-full hidden md:flex cursor-pointer">
        <SelectValue placeholder="All categories" />
      </SelectTrigger>
      <SelectContent className="overflow-y-auto max-h-[264px] h-full">
        <SelectGroup>
          <SelectItem value="all">All categories</SelectItem>
          <SelectItem value="#Teamwork">#Teamwork</SelectItem>
          <SelectItem value="#Technology">#Technology</SelectItem>
          <SelectItem value="#Productivity">#Productivity</SelectItem>
          <SelectItem value="#Innovation">#Innovation</SelectItem>
          <SelectItem value="#Security">#Security</SelectItem>
          <SelectItem value="#DevOps">#DevOps</SelectItem>
          <SelectItem value="#Education">#Education</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
