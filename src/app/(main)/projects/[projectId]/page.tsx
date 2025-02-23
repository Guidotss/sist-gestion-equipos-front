"use client"

import { Plus, MoreHorizontal } from "lucide-react"
import { useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function ProjectPage({ params }: { params: { projectId: string } }) {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false)

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <header className="border-b">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold">Website Redesign Project</h1>
            <Badge variant="outline">In Progress</Badge>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <Avatar className="border-2 border-background">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Team member" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Team member" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            </div>
            <Button variant="outline">Invite</Button>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
        <div className="flex h-full gap-6">

          <div className="w-80 shrink-0">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">To Do</h3>
                <Badge variant="secondary">4</Badge>
              </div>
              <Dialog open={isNewTaskOpen} onOpenChange={setIsNewTaskOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Task</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="task-title">Title</Label>
                      <Input id="task-title" placeholder="Enter task title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="task-description">Description</Label>
                      <Textarea id="task-description" placeholder="Enter task description" />
                    </div>
                    <div className="space-y-2">
                      <Label>Assign to</Label>
                      <div className="flex gap-2">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                          <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" size="icon">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button variant="outline" onClick={() => setIsNewTaskOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setIsNewTaskOpen(false)}>Create Task</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="space-y-3">
              <Card>
                <CardHeader className="p-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-sm">Design System Updates</CardTitle>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <p className="text-sm text-muted-foreground">Update color palette and typography...</p>
                  <div className="mt-3 flex items-center justify-between">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Badge variant="secondary">Design</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="w-80 shrink-0">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">In Progress</h3>
                <Badge variant="secondary">2</Badge>
              </div>
              <Button variant="ghost" size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-3">
              <Card>
                <CardHeader className="p-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-sm">Homepage Wireframes</CardTitle>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <p className="text-sm text-muted-foreground">Create low-fidelity wireframes...</p>
                  <div className="mt-3 flex items-center justify-between">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" alt="User" />
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <Badge variant="secondary">Design</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="w-80 shrink-0">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">Done</h3>
                <Badge variant="secondary">1</Badge>
              </div>
              <Button variant="ghost" size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-3">
              <Card>
                <CardHeader className="p-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-sm">Competitor Analysis</CardTitle>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <p className="text-sm text-muted-foreground">Research competitor websites...</p>
                  <div className="mt-3 flex items-center justify-between">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" alt="User" />
                      <AvatarFallback>CD</AvatarFallback>
                    </Avatar>
                    <Badge variant="secondary">Research</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

