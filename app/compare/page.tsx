import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ComparisonTable } from "@/components/comparison-table"

interface ComparePageProps {
  searchParams: Promise<{ cars?: string }>
}

export default async function ComparePage({ searchParams }: ComparePageProps) {
  const params = await searchParams
  const carIds = params.cars?.split(",") || []

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Compare Cars</h1>
          <p className="text-muted-foreground">Compare specifications, features, and prices side by side</p>
        </div>
        <ComparisonTable carIds={carIds} />
      </main>
      <Footer />
    </div>
  )
}
