import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Settings, History, LayoutDashboard } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-secondary/10 pb-20">
      <Navbar />

      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 space-y-2">
            <Button
              variant="secondary"
              className="w-full justify-start gap-3 rounded-xl h-12 font-bold bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <LayoutDashboard className="h-5 w-5" />
              لوحة التحكم
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl h-12 text-muted-foreground">
              <History className="h-5 w-5" />
              سجل الحجوزات
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl h-12 text-muted-foreground">
              <Settings className="h-5 w-5" />
              الإعدادات
            </Button>
          </aside>

          {/* Main Dashboard Content */}
          <main className="flex-1 space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">أهلاً بك، أحمد! 👋</h1>
              <p className="text-muted-foreground">لديك ٢ حجز قادم هذا الأسبوع</p>
            </div>

            <section>
              <h2 className="text-xl font-bold mb-4">الحجوزات القادمة</h2>
              <div className="grid gap-6">
                {[
                  {
                    name: "ملعب السلطان المطور",
                    type: "ملعب",
                    date: "٢٥ مايو",
                    time: "٠٨:٠٠ م",
                    status: "مؤكد",
                    color: "bg-green-100 text-green-700",
                  },
                  {
                    name: "فندق الإطلالة",
                    type: "فندق",
                    date: "٢٨ مايو",
                    time: "٠٢:٠٠ م",
                    status: "بانتظار الدفع",
                    color: "bg-orange-100 text-orange-700",
                  },
                ].map((booking, idx) => (
                  <Card
                    key={idx}
                    className="rounded-2xl border-none shadow-sm overflow-hidden hover:shadow-md transition-all"
                  >
                    <CardContent className="p-0 flex flex-col md:flex-row">
                      <div className="w-full md:w-48 h-32 bg-secondary/50 shrink-0">
                        <img
                          src={`/placeholder.svg?key=yoxgq&height=200&width=300&query=${booking.type}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-lg">{booking.name}</h3>
                            <Badge className={booking.color + " border-none"}>{booking.status}</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> {booking.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {booking.time}
                            </span>
                          </div>
                        </div>
                        <Button variant="outline" className="rounded-xl gap-2 bg-transparent">
                          عرض التفاصيل
                          <ArrowRight className="h-4 w-4 rotate-180" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
