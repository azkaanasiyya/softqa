"use client"

import * as React from "react"
// import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// type Checked = DropdownMenuCheckboxItemProps["checked"]

export function DropdownHelp() {
//   const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
//   const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
//   const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="dropdown" size="select">Select one</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[520px]">
        <DropdownMenuCheckboxItem
        //   checked={showStatusBar}
        //   onCheckedChange={setShowStatusBar}
        >
          General questions
        </DropdownMenuCheckboxItem> 
        <DropdownMenuCheckboxItem
        >
          Billing and Payments
        </DropdownMenuCheckboxItem> 
        <DropdownMenuCheckboxItem
        >
          Technical Support
        </DropdownMenuCheckboxItem> 
        <DropdownMenuCheckboxItem
        >
          Getting Started
        </DropdownMenuCheckboxItem> 
        <DropdownMenuCheckboxItem
        >
          Advanced Features
        </DropdownMenuCheckboxItem> 
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
