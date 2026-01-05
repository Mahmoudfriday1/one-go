import { Navbar } from "@/components/navbar"
import { HeroSearch } from "@/components/hero-search"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Hotel, Utensils, Zap, Star, Shield, Smartphone } from "lucide-react"

const categories = [
  { name: "ملاعب رياضية", icon: Trophy, color: "bg-green-100 text-green-600", slug: "stadiums" },
  { name: "فنادق", icon: Hotel, color: "bg-blue-100 text-blue-600", slug: "hotels" },
  { name: "مطاعم وكافيهات", icon: Utensils, color: "bg-orange-100 text-orange-600", slug: "restaurants" },
  { name: "مراكز صحية", icon: Zap, color: "bg-purple-100 text-purple-600", slug: "wellness" },
]

const featuredPlaces = [
  {
    name: "ملعب الأرينا المتطور",
    location: "الرياض، حي النرجس",
    price: "١٥٠ ر.س/ساعة",
    rating: 4.9,
    image: "/modern-football-stadium.jpg",
  },
  {
    name: "فندق الإطلالة الفاخر",
    location: "جدة، الكورنيش",
    price: "٨٥٠ ر.س/ليلة",
    rating: 4.8,
    image: "/luxury-hotel-room.png",
  },
  {
    name: "مطعم مذاق الشرق",
    location: "الدمام، الواجهة البحرية",
    price: "متوسط الأسعار",
    rating: 4.7,
    image: "/upscale-restaurant-interior.png",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/modern-city-landscape-skyline.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-balance">كل شيء.. حجز واحد</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            اكتشف واحجز أفضل الملاعب، الفنادق، والمطاعم في منطقتك بكل سهولة وسرعة.
          </p>
        </div>
      </section>

      <div className="container px-4">
        <HeroSearch />

        {/* Categories Section */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-8">استكشف حسب الفئة</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <Card
                key={idx}
                className="group hover:shadow-lg transition-all cursor-pointer border-none bg-secondary/50"
              >
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <div className={`p-4 rounded-full mb-4 ${cat.color} group-hover:scale-110 transition-transform`}>
                    <cat.icon className="h-8 w-8" />
                  </div>
                  <span className="font-bold">{cat.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Places */}
        <section className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">أماكن مميزة</h2>
            <Button variant="link">عرض الكل</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPlaces.map((place, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all border-none shadow-md">
                <div className="relative h-48">
                  <img
                    src={place.image || "/placeholder.svg"}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-bold">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{place.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{place.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{place.location}</p>
                  <div className="flex items-center justify-between border-t pt-4">
                    <span className="font-bold text-primary">{place.price}</span>
                    <Button>احجز الآن</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-32 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">لماذا تختار One-Go؟</h2>
            <p className="text-muted-foreground">نسعى لتوفير أفضل تجربة حجز في المملكة بأحدث التقنيات</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">حجز آمن</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                بياناتك ومدفوعاتك محمية بأعلى معايير الأمان العالمية لضمان تجربة حجز مطمئنة.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">تأكيد فوري</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                لا مزيد من الانتظار. احصل على تأكيد حجزك فوراً عبر التطبيق والرسائل النصية.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">سهولة الاستخدام</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                واجهة بسيطة وعصرية صممت خصيصاً لتناسب احتياجات المستخدم العربي في كل مكان.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
