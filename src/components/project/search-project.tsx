"use client"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function SearchProjects() {
  return (
    <form>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input className="w-[200px] pl-9" placeholder="Search projects..." type="search" />
      </div>
    </form>
  )
}