"use client"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Search } from "lucide-react"

export function HeroSearch() {
  return (
    <div className="relative mx-auto max-w-4xl -mt-8 md:-mt-12 bg-background rounded-2xl shadow-xl border p-2 md:p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
        <div className="flex flex-col gap-1 px-4 py-2">
          <label className="text-xs font-semibold text-muted-foreground">عن ماذا تبحث؟</label>
          <div className="flex items-center gap-2 text-foreground">
            <Search className="h-4 w-4 text-primary" />
            <input
              placeholder="ملعب، فندق، مطعم..."
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground/60"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 px-4 py-2 md:border-r">
          <label className="text-xs font-semibold text-muted-foreground">الموقع</label>
          <div className="flex items-center gap-2 text-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <input
              placeholder="الرياض، جدة..."
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground/60"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 px-4 py-2 md:border-r">
          <label className="text-xs font-semibold text-muted-foreground">التاريخ</label>
          <div className="flex items-center gap-2 text-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <input
              type="text"
              placeholder="اختر التاريخ"
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground/60"
            />
          </div>
        </div>
        <div className="flex items-center justify-center p-2">
          <Button size="lg" className="w-full h-full rounded-xl gap-2 text-lg">
            <span>بحث</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
