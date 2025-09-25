import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { MyCarsGrid } from "@/components/my-cars-grid"

export default async function MyCarsPage() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/auth/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">My Cars</h1>
            <p className="text-muted-foreground">Manage your car listings</p>
          </div>
          <MyCarsGrid />
        </main>
      </div>
      <Footer />
    </div>
  )
}
