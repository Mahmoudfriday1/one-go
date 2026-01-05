import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, CreditCard, Lock } from "lucide-react"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-secondary/20 pb-20">
      <Navbar />

      <div className="container max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold mb-10 text-center">إتمام عملية الحجز</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Payment Method */}
            <Card className="rounded-3xl border-none shadow-md overflow-hidden">
              <div className="bg-primary/5 p-6 border-b flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  طريقة الدفع
                </h2>
                <div className="flex gap-2">
                  <div className="h-6 w-10 bg-slate-200 rounded animate-pulse" />
                  <div className="h-6 w-10 bg-slate-200 rounded animate-pulse" />
                </div>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">رقم البطاقة</label>
                  <Input placeholder="0000 0000 0000 0000" className="h-12 rounded-xl" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">تاريخ الانتهاء</label>
                    <Input placeholder="MM/YY" className="h-12 rounded-xl text-center" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">رمز الأمان (CVV)</label>
                    <Input placeholder="***" className="h-12 rounded-xl text-center" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">الاسم على البطاقة</label>
                  <Input placeholder="الاسم الكامل كما يظهر على البطاقة" className="h-12 rounded-xl" />
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center gap-4 p-4 bg-green-50 border border-green-100 rounded-2xl text-green-700 text-sm">
              <ShieldCheck className="h-6 w-6 shrink-0" />
              <p>حجزك محمي ومؤمن بالكامل. نستخدم تشفير SSL لضمان سرية بياناتك.</p>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <Card className="rounded-3xl border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 pb-2 border-b">ملخص الحجز</h3>
                <div className="flex gap-4 mb-6">
                  <div className="h-16 w-16 rounded-xl bg-secondary overflow-hidden shrink-0">
                    <img src="/placeholder.svg?key=w3jdw" alt="Thumb" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">منتجع السحاب الفندقي</p>
                    <p className="text-xs text-muted-foreground">جدة، حي أبحر</p>
                  </div>
                </div>

                <div className="space-y-3 py-4 border-y border-dashed">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">المبلغ الفرعي</span>
                    <span>٨٥٠ ر.س</span>
                  </div>
                  <div className="flex justify-between text-sm text-green-600">
                    <span>خصم (أول حجز)</span>
                    <span>- ٥٠ ر.س</span>
                  </div>
                </div>

                <div className="flex justify-between font-bold text-xl pt-4">
                  <span>الإجمالي</span>
                  <span className="text-primary">٨٠٠ ر.س</span>
                </div>

                <Button className="w-full h-14 rounded-2xl mt-8 text-lg font-bold gap-2 group">
                  <Lock className="h-5 w-5 group-hover:animate-bounce" />
                  دفع آمن الآن
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
