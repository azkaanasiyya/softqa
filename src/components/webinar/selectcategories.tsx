import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectCategoriesProps {
  onCategoryChange: (value: string) => void;
  selectedCategory: string;
}

export function SelectCategories( {onCategoryChange, selectedCategory}: SelectCategoriesProps ) {
  return (
    <Select onValueChange={onCategoryChange} value={selectedCategory}>
      <SelectTrigger className="w-full max-h-12 h-full hidden md:flex cursor-pointer">
        <SelectValue placeholder="All categories" />
      </SelectTrigger>
      <SelectContent className="overflow-y-auto max-h-[264px] h-full w-[216px]">
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
