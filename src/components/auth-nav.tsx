import Link from "next/link";
import { Layout } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AuthNav() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Layout className="h-6 w-6" />
          <span className="text-lg font-semibold">ProjectHub</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/register">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
