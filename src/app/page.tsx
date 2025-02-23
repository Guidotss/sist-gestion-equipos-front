import { redirect, RedirectType } from "next/navigation";

export default function Home() {
  redirect("/{main}/dashboard", RedirectType.replace)
}
