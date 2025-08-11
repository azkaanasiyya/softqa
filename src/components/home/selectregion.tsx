import * as React from "react"
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronDownIcon } from "lucide-react"
import Image from "next/image"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";

export function SelectRegion() {
  const regions = [
    { value: "andorra", label: "Andorra", icon: "/home/modal/andorra.png" },
    { value: "united", label: "United Arab Emirates", icon: "/home/modal/united.png" },
    { value: "afghanistan", label: "Afghanistan", icon: "/home/modal/afghanistan.png" },
    { value: "antigua", label: "Antigua And Barbuda", icon: "/home/modal/antigua.png" },
  ];

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const selectedRegion = regions.find(region => region.value === value);

  return (
    <Select open={open} onOpenChange={setOpen} value={value} onValueChange={setValue}>
      <SelectTrigger icon={<ChevronDownIcon/>}>
        {value ? (
          <div className="flex items-center gap-2">
            <Image src={selectedRegion?.icon || ""} alt={selectedRegion?.label || ""} width={20} height={20} className="w-5 h-5" />
            <span>{selectedRegion?.label}</span>
          </div>
        ) : (
          <SelectValue placeholder="Select one" />
        )}
      </SelectTrigger>
      <SelectContent>
        <Command className="w-full">
          <CommandInput 
            placeholder="Search country..." 
            className="pl-9 text-[16px] h-12 border-b border-grayscale-100"
          />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup className="">
              {regions.map((region) => (
                <CommandItem
                  key={region.value}
                  value={region.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Image src={region.icon} alt={region.label} width={20} height={20} className="w-5 h-5 mr-2" />
                  {region.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </SelectContent>
    </Select>
  );
}