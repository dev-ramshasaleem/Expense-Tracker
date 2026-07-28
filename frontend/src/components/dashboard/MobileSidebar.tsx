"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import SidebarItem from "./SidebarItem";
import { navItems } from "@/src/lib/navigation";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger >
        <button className="rounded-xl p-2 transition hover:bg-white/10 lg:hidden">
          <Menu className="h-6 w-6 text-white" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-72 border-r border-white/10 bg-white/10 p-0 text-white backdrop-blur-xl"
      >
        {/* Logo */}
        <div className="border-b border-white/10 px-6 py-8">
          <Link href="/dashboard">
            <h1 className="bg-gradient-to-br from-orange-300 to-purple-600 bg-clip-text text-3xl font-bold text-transparent">
              Spendo
            </h1>

            <p className="mt-1 text-sm text-gray-400">
              Smart Expense Tracker
            </p>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 px-4 py-6">
          {navItems.map((item) => (
            <SidebarItem key={item.href} {...item} />
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-6 left-4 right-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg">
          <p className="text-sm font-medium text-white">
            Track your finances
          </p>
          <p className="mt-1 text-xs text-gray-400">
            Stay organized and reach your savings goals.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}