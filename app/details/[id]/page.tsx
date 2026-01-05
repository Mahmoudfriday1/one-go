import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Calendar, CheckCircle, Info } from "lucide-react"

export default function DetailsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />

      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section className="space-y-4">
              <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/placeholder.svg?key=3f7ms" alt="Main View" className="w-full h-full object-cover" />
                <div className="absolute bottom-6 right-6 flex gap-2">
                  <Badge className="bg-white/90 text-primary hover:bg-white border-none py-1 px-3">صورة (١/٨)</Badge>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold">منتجع السحاب الفندقي</h1>
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>جدة، منطقة أبحر الشمالية</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-2xl font-bold">
                  <Star className="h-5 w-5 fill-primary" />
                  <span className="text-xl">٤.٩</span>
                  <span className="text-xs text-muted-foreground">(١٢٠ مراجعة)</span>
                </div>
              </div>
            </section>

            <section className="p-8 bg-secondary/20 rounded-3xl border border-primary/10">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                وصف المكان
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                استمتع بإقامة فاخرة لا تُنسى في قلب عروس البحر الأحمر. يوفر منتجع السحاب إطلالات خلابة على البحر مع مرافق
                عالمية المستوى تشمل مسابح خاصة، مراكز سبا، ومطاعم تقدم أشهى المأكولات العالمية والمحلية.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {["واي فاي مجاني", "موقف سيارات", "إفطار مجاني", "مسبح خارجي"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24 rounded-3xl border-2 border-primary/10 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary text-primary-foreground p-6 text-center">
                  <span className="text-3xl font-bold">٨٥٠ ر.س</span>
                  <span className="text-sm opacity-90"> / ليلة</span>
                </div>

                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary/50 rounded-2xl border flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">
                            تاريخ الوصول
                          </p>
                          <p className="text-sm font-bold">٢٤ مايو ٢٠٢٤</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-2xl border flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">
                            وقت الوصول
                          </p>
                          <p className="text-sm font-bold">٠٢:٠٠ م</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 border-t pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">الإقامة (١ ليلة)</span>
                      <span>٨٥٠ ر.س</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">رسوم الخدمة</span>
                      <span>٤٥ ر.س</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
                      <span>الإجمالي</span>
                      <span className="text-primary">٨٩٥ ر.س</span>
                    </div>
                  </div>

                  <Button className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20 transition-transform active:scale-95">
                    تأكيد الحجز والدفع
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground">
                    لن يتم خصم المبلغ إلا بعد التأكيد النهائي
                  </p>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}
