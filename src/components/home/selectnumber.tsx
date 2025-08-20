"use client"

import * as React from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { SelectProps } from "@radix-ui/react-select";

interface SelectNumberProps extends SelectProps {
    value?: string;
    onValueChange?: (value: string) => void;
    onBlur?: () => void;
    name?: string;
}

export function SelectNumber({ value, onValueChange, onBlur, name, ...props }: SelectNumberProps) {
    return (
        <Select value={value} onValueChange={onValueChange} {...props}>
            <SelectTrigger onBlur={onBlur} name={name} className="w-full">
                <SelectValue placeholder="Select one" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="1-10 users">1-10 users</SelectItem>
                    <SelectItem value="10-20 users">10-20 users</SelectItem>
                    <SelectItem value="<50 users">&lt;50 users</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}