import type React from "react"
import { Layout, Users } from "lucide-react"
import Link from "next/link"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex flex-col justify-between p-10 bg-primary text-primary-foreground">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Layout className="h-6 w-6" />
            <span className="text-lg font-semibold">ProjectHub</span>
          </Link>
          <h1 className="mt-20 text-4xl font-bold">Manage your projects with ease</h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Streamline your workflow, collaborate with your team, and deliver projects on time.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Layout className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">Intuitive Kanban Boards</h3>
              <p className="text-sm text-primary-foreground/80">Visualize your workflow and track progress</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">Team Collaboration</h3>
              <p className="text-sm text-primary-foreground/80">Work together seamlessly with your team</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="md:hidden">
          <header className="border-b">
            <div className="flex h-16 items-center justify-between px-6">
              <Link href="/" className="flex items-center gap-2">
                <Layout className="h-6 w-6" />
                <span className="text-lg font-semibold">ProjectHub</span>
              </Link>
            </div>
          </header>
        </div>
        <div className="flex-1 flex items-center justify-center p-6">{children}</div>
      </div>
    </div>
  )
}

