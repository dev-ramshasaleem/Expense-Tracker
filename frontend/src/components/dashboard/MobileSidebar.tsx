"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import SidebarItem from "./SidebarItem";
import { navItems } from "@/src/lib/navigation";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <button className="lg:hidden rounded-md p-2 hover:bg-white/10">
            <Menu className="h-6 w-6 text-white" />
          </button>
        }
      />

      <SheetContent
        side="left"
        className="border-white/10 bg-slate-950 text-white"
      >
        <Link href="/dashboard" className="mb-8 block text-2xl font-bold">
          Expense Tracker
        </Link>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <SidebarItem key={item.href} {...item} />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
