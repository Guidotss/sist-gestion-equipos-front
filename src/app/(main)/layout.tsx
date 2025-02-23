import type React from "react"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Layout } from "lucide-react"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden w-64 border-r bg-muted/40 p-6 lg:block">
        <div className="flex items-center gap-2 mb-6">
          <Layout className="h-6 w-6" />
          <span className="text-lg font-semibold">ProjectHub</span>
        </div>
        <MainNav />
      </div>

      <div className="flex-1">
        <header className="border-b">
          <div className="flex h-16 items-center gap-4 px-6">
            <div className="flex-1" />
            <UserNav />
          </div>
        </header>

        <main>{children}</main>
      </div>
    </div>
  )
}

