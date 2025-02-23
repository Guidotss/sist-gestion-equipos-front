import { Plus, Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <div className="flex items-center gap-4">
          <form>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="w-[200px] pl-9" placeholder="Search projects..." type="search" />
            </div>
          </form>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/projects/website-redesign">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader className="pb-4">
              <div>
                <CardTitle>Website Redesign</CardTitle>
                <CardDescription>Marketing</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <Progress value={75} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Team member" />
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Team member" />
                      <AvatarFallback>B</AvatarFallback>
                    </Avatar>
                  </div>
                  <span className="text-sm text-muted-foreground">Due Aug 24</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/projects/mobile-app">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader className="pb-4">
              <div>
                <CardTitle>Mobile App</CardTitle>
                <CardDescription>Development</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <Progress value={45} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Team member" />
                      <AvatarFallback>C</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Team member" />
                      <AvatarFallback>D</AvatarFallback>
                    </Avatar>
                  </div>
                  <span className="text-sm text-muted-foreground">Due Sep 12</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}

