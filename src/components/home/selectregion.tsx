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
import Image from "next/image"

export function SelectRegion() {
  return (
    <Select>
      <SelectTrigger icon={<ChevronDownIcon/>} className="w-full">
        <SelectValue placeholder="Select one" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="andorra">
            <Image src="/home/modal/andorra.png" alt="andorra" width={20} height={20} className="w-5 h-5" />
            Andorra
          </SelectItem>
          <SelectItem value="united">
            <Image src="/home/modal/united.png" alt="united" width={20} height={20} className="w-5 h-5" />
            United Arab Emirates
          </SelectItem>
          <SelectItem value="afghanistan">
            <Image src="/home/modal/afghanistan.png" alt="afghanistan" width={20} height={20} className="w-5 h-5" />
            Afghanistan
          </SelectItem>
          <SelectItem value="antigua">
            <Image src="/home/modal/antigua.png" alt="antigua" width={20} height={20} className="w-5 h-5" />
            Antigua And Barbuda
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
