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
      <div 
          className="relative w-full h-12 md:min-w-[370px] xl:min-w-[216px] rounded-[16px] border-2 border-grayscale-100 focus-within:border-primary-500 focus-within:ring-[3px] focus-within:ring-[#24697514] data-[state=open]:border-primary-500 data-[state=open]:ring-[3px] data-[state=open]:ring-[#24697514]"
      >
          <Command>
              <CommandInput 
                  placeholder="Search webinar..." 
                  onValueChange={onSearchChange} 
                  className="placeholder:text-grayscale-400 flex w-full rounded-[16px] pl-[44px] pr-4 text-[16px] leading-6 bg-transparent border-none outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />
          </Command>
      </div>
    </PopoverTrigger>
      <PopoverContent className="p-0" align="start">
      <Command>
        <div className="relative">
          <CommandGroup className="h-[324px] w-[304px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {webinars.map((webinar) => (
              <CommandItem
                key={webinar.subtitle}
                value={webinar.subtitle}
                onSelect={() => {
                  handleSelect(webinar.subtitle);
                }}
                className="cursor-pointer h-16"
              >
                <div className="w-full flex flex-col">
                  <span className="line-clamp-1 text-[16px] leading-6 text-grayscale-900">{webinar.subtitle}</span>
                  <span className="text-[14px] leading-6 text-grayscale-500">{webinar.date}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <div className="absolute bottom-0 h-16 w-full bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>
      </Command>
    </PopoverContent>
   </Popover>
   )
}