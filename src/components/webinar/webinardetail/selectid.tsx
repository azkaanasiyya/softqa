"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import Image from "next/image"

const sectionList = [
  { id: "section-1", label: "00:00 - 12:00" },
  { id: "section-2", label: "12:01 - 30:00" },
  { id: "section-3", label: "30:01 - 50:00" },
  { id: "section-4", label: "50:01 - 57:00" },
]

export function MobileSectionSelect({
  activeId,
  setActiveId,
}: {
  activeId: string
  setActiveId: (id: string) => void
}) {
  return (
    <Select value={activeId} onValueChange={(val) => {
      setActiveId(val)
      const el = document.getElementById(val)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }}>
      <SelectTrigger 
        icon={<Image src="/webinar/playlist.png" alt="icon" width={20} height={20} />} 
        className="md:hidden px-4 py-[15px] rounded-[12px] border-2 border-grayscale-100 justify-between">
        <SelectValue placeholder="Select section" />
        {/* <Image src="/webinar/playlist.png" alt="icon" width={20} height={20} /> */}
      </SelectTrigger>
      <SelectContent>
        {sectionList.map((section) => (
          <SelectItem key={section.id} value={section.id}>
            {section.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
