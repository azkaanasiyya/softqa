import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { ListFilter } from "lucide-react"

interface SelectCategoriesProps {
  onCategoryChange: (value: string) => void;
  selectedCategory: string;
}

export function SelectMobile( {onCategoryChange, selectedCategory}: SelectCategoriesProps ) {
  return (
    <Select onValueChange={onCategoryChange} value={selectedCategory}>
      <SelectTrigger hideDefaultIcon={true} className="flex flex-col md:hidden items-center justify-center w-12 h-12 rounded-[12px] border-2 border-grayscale-100">
        <ListFilter className="w-5 h-5 text-grayscale-400"/>
      </SelectTrigger>
      <SelectContent className="overflow-y-auto max-h-[264px] h-full w-[300px]">
        <SelectGroup>
          <SelectItem value="all">All categories</SelectItem>
          <SelectItem value="teamwork">#Teamwork</SelectItem>
          <SelectItem value="technology">#Technology</SelectItem>
          <SelectItem value="productivity">#Productivity</SelectItem>
          <SelectItem value="innovation">#Innovation</SelectItem>
          <SelectItem value="security">#Security</SelectItem>
          <SelectItem value="devOps">#DevOps</SelectItem>
          <SelectItem value="education">#Education</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}