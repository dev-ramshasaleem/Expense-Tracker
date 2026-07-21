"use client";

import { navItems } from "@/src/lib/navigation";
import SidebarItem from "./SidebarItem";
import { Banknote } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-white/5 backdrop-blur-xl lg:flex lg:flex-col">
      <div className="border-b border-white/10 p-6">
        <div className="flex items-center gap-3">
          <Banknote className="h-10 w-10 text-white" />
          <h1 className="text-2xl font-bold text-white">SpendO</h1>
        </div>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item) => (
          <SidebarItem key={item.href} {...item} />
        ))}
      </nav>
    </aside>
  );
}
