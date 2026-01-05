import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MapPin, Filter, Search } from "lucide-react"

const categoryNames: Record<string, string> = {
  stadiums: "الملاعب الرياضية",
  hotels: "الفنادق والمنتجعات",
  restaurants: "المطاعم والكافيهات",
  wellness: "المراكز الصحية",
}

const mockData = [
  {
    id: 1,
    name: "ملعب السلطان المطور",
    location: "الرياض، الملقا",
    rating: 4.8,
    price: "١٢٠ ر.س/ساعة",
    image: "/placeholder.svg?key=i0y3c",
  },
  {
    id: 2,
    name: "أرينا سبورت سنتر",
    location: "الرياض، النرجس",
    rating: 4.6,
    price: "١٨٠ ر.س/ساعة",
    image: "/placeholder.svg?key=teapl",
  },
  {
    id: 3,
    name: "ملعب النخيل العشبي",
    location: "الرياض، الياسمين",
    rating: 4.5,
    price: "١٠٠ ر.س/ساعة",
    image: "/placeholder.svg?key=nnakt",
  },
  {
    id: 4,
    name: "جولدن جول",
    location: "الرياض، الصحافة",
    rating: 4.9,
    price: "١٥٠ ر.س/ساعة",
    image: "/placeholder.svg?key=1ieth",
  },
]

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const title = categoryNames[category] || "خدماتنا"

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />

      <div className="container px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="p-6 bg-secondary/30 rounded-2xl border">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="h-5 w-5 text-primary" />
                <h2 className="font-bold">تصفية النتائج</h2>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">بحث بالاسم</label>
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input className="pr-10" placeholder="ابحث هنا..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">المنطقة</label>
                  <Select dir="rtl">
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المنطقة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="riyadh">الرياض</SelectItem>
                      <SelectItem value="jeddah">جدة</SelectItem>
                      <SelectItem value="dammam">الدمام</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">ترتيب حسب</label>
                  <Select dir="rtl">
                    <SelectTrigger>
                      <SelectValue placeholder="الأعلى تقييماً" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">الأعلى تقييماً</SelectItem>
                      <SelectItem value="price-low">السعر: من الأقل</SelectItem>
                      <SelectItem value="price-high">السعر: من الأعلى</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full mt-4">تطبيق الفلاتر</Button>
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <main className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockData.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md flex items-center gap-1 text-xs font-bold text-primary shadow-sm">
                      <Star className="h-3 w-3 fill-primary" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs mb-4">
                      <MapPin className="h-3 w-3" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center justify-between border-t pt-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                          السعر يبدأ من
                        </span>
                        <span className="font-bold text-lg text-primary">{item.price}</span>
                      </div>
                      <Button size="sm" className="rounded-lg">
                        احجز الآن
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
