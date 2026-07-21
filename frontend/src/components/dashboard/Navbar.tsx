"use client";

import MobileSidebar from "./MobileSidebar";
import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 bg-white/5 px-4 backdrop-blur-xl sm:px-6">
      <div className="flex items-center gap-4">
        <MobileSidebar />

        <h2 className="text-lg font-semibold text-white md:text-xl">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <Bell className="h-5 w-5 text-white" />

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 font-semibold text-white">
          R
        </div>
      </div>
    </header>
  );
}
