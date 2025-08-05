import * as React from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface SelectRecentProps {
  onSortChange: (value: string) => void;
  selectedSort: string;
}

export function SelectRecent({ onSortChange, selectedSort }: SelectRecentProps) {
  const options = [
    { value: "pop", label: "Popular" },
    { value: "recent", label: "Most recent" },
    { value: "old", label: "Oldest" },
  ]
  
  return (
    <Select onValueChange={onSortChange} value={selectedSort}>
      <SelectTrigger icon={<ChevronDownIcon />} className={cn("w-full max-h-12 h-full hidden md:flex", "cursor-pointer")}>
        <SelectValue placeholder="Most recent" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}