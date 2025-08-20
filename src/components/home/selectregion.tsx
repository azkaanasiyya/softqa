// Perbaiki SelectRegion.tsx
"use client"

import * as React from "react"
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
    SelectItem
} from "@/components/ui/select"
import Image from "next/image"
import { Command, CommandInput, CommandList } from "../ui/command";
import { SelectProps } from "@radix-ui/react-select";

interface SelectRegionProps extends SelectProps {
    value?: string;
    onValueChange?: (value: string) => void;
    onBlur?: () => void;
    name?: string;
}

export function SelectRegion({ value, onValueChange, onBlur, name, ...props }: SelectRegionProps) {
    const regions = [
        { value: "andorra", label: "Andorra", icon: "/home/modal/andorra.png" },
        { value: "united", label: "United Arab Emirates", icon: "/home/modal/united.png" },
        { value: "afghanistan", label: "Afghanistan", icon: "/home/modal/afghanistan.png" },
        { value: "antigua", label: "Antigua And Barbuda", icon: "/home/modal/antigua.png" },
    ];

    const selectedRegion = regions.find(region => region.value === value);

    return (
        <Select value={value} onValueChange={onValueChange} {...props}>
            <SelectTrigger onBlur={onBlur} name={name}>
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
                <Command>
                    <CommandInput placeholder="Search country..." />
                    <CommandList>
                        {regions.map((region) => (
                            <SelectItem key={region.value} value={region.value}>
                                <div className="flex items-center gap-2">
                                    <Image src={region.icon} alt={region.label} width={20} height={20} className="w-5 h-5" />
                                    <span>{region.label}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </CommandList>
                </Command>
            </SelectContent>
        </Select>
    );
}