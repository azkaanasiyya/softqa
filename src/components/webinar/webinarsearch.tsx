"use client"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { webinars } from "../data/webinars"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface WebinarSearchProps {
  onSearchChange: (value: string) => void;
}

export function WebinarSearch({ onSearchChange }: WebinarSearchProps) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleSelect = (selectedTitle: string) => {
    const selectedWebinar = webinars.find(webinar => webinar.subtitle === selectedTitle);
        if (selectedWebinar) {
        router.push(`/webinar/webinardetail?id=${selectedWebinar.id}`); 
        }
        setOpen(false);
        onSearchChange("");
    };


  return (
    <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
                <div className="relative w-full md:min-w-[370px] lg:min-w-[216px]">
                    <Command
                    >
                        <CommandInput 
                        placeholder="Search webinar..." 
                        onValueChange={onSearchChange} 
                        />
                    </Command>
                </div>
            </PopoverTrigger>
      <PopoverContent className="p-0" align="start">
        <Command>
          <CommandGroup className="h-[324px] w-[304px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {webinars.map((webinar) => (
              <CommandItem
                key={webinar.subtitle}
                value={webinar.subtitle} 
                onSelect={() => {
                  handleSelect(webinar.subtitle);
                }}
                className="cursor-pointer"
              >
                <div className="w-full flex flex-col">
                  <span className="line-clamp-1 text-[16px] leading-6 text-grayscale-900">{webinar.subtitle}</span>
                  <span className="text-[14px] leading-6 text-grayscale-500">{webinar.date}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}