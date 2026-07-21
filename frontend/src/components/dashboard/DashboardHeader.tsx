"use client";

import { Button } from "@/components/ui/button";
import { CalendarDays, Plus, Sparkles } from "lucide-react";

export default function DashboardHeader() {
  // Replace this with the logged-in user's name later
  const userName = "Ramsha";

  const hour = new Date().getHours();

  const greeting =
    hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  return (
    <section className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          {greeting}, {userName} ✨
          {/* <Sparkles className="absolute right-14  h-7 w-7 -translate-y-8 text-white" /> */}
        </h1>

        <div className="mt-3 flex items-center gap-2 text-sm text-white">
          <CalendarDays className="h-4 w-4" />
          <span>{today}</span>
        </div>
      </div>

      {/* Right */}
      <Button className="h-12 w-full rounded-xl bg-cyan-500 px-6 text-white hover:bg-cyan-400 lg:w-auto">
        <Plus className="mr-2 h-5 w-5" />
        Add Expense
      </Button>
    </section>
  );
}
