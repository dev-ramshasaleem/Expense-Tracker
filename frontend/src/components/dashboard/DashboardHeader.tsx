"use client";

import { Plus, CalendarDays, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  return (
    <section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      {/* Left Side */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Good Morning, Ramsha
          <Sparkles className="absolute right-240  h-7 w-7 -translate-y-8 text-white" />
        </h1>

        <div className="mt-2 flex items-center gap-2 text-sm text-white">
          <CalendarDays className="h-4 w-4" />
          <span>{today}</span>
        </div>
      </div>

      {/* Right Side */}
      <Button
        className="
        w-full
        md:w-auto
        rounded-xl
        bg-purple-600
        px-6
        py-6
        text-white
        hover:bg-purple-400
        "
      >
        <Plus className="mr-2 h-5 w-5" />
        Add Expense
      </Button>
    </section>
  );
}
