import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, User, Menu } from "lucide-react"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <span className="text-2xl font-bold tracking-tight text-primary">Bookify</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/services/stadiums" className="text-sm font-medium transition-colors hover:text-primary">
              ملاعب
            </Link>
            <Link href="/services/hotels" className="text-sm font-medium transition-colors hover:text-primary">
              فنادق
            </Link>
            <Link href="/services/restaurants" className="text-sm font-medium transition-colors hover:text-primary">
              مطاعم
            </Link>
            <Link href="/services/wellness" className="text-sm font-medium transition-colors hover:text-primary">
              صحة وجمال
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="hidden md:flex items-center gap-2">
            <User className="h-5 w-5" />
            <span>دخول</span>
          </Button>
          <Button className="hidden md:flex">ابدأ الآن</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
