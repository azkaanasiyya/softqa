"use client"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { ListVideo } from "lucide-react"

export function SelectQuestion() {
  return (
    <Select>
      <SelectTrigger
          icon={
            <ListVideo 
              className="text-grayscale-400 w-5 h-5 size-5"
            />
        }
        className="md:hidden px-4 py-[15px] rounded-[12px] border-2 border-grayscale-100 justify-between"
      >
        <SelectValue placeholder="Choose a question" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="q1">How do I create an account?</SelectItem>
        <SelectItem value="q2">How do I update my profile information?</SelectItem>
        <SelectItem value="q3">How can I delete my account?</SelectItem>
        <SelectItem value="q4">Configure sign up and login settings</SelectItem>
        <SelectItem value="q5">Understand main dev account</SelectItem>
        <SelectItem value="q6">Collaborate with team in a workspace</SelectItem>
      </SelectContent>
    </Select>
  )
}
