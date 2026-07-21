"use client";

import { navItems } from "@/src/lib/navigation";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-white/5 backdrop-blur-xl lg:flex lg:flex-col">
      <div className="border-b border-white/10 p-6">
        <h1 className="text-2xl font-bold text-white">SpendO</h1>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item) => (
          <SidebarItem key={item.href} {...item} />
        ))}
      </nav>
    </aside>
  );
}
