"use client";

import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import MobileSidebar from "./MobileSidebar";
import { useRouter, usePathname } from "next/navigation";
import { navItems } from "@/src/lib/navigation";

interface User {
  name: string;
  email: string;
}

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
  };

  const initial = user?.name?.charAt(0).toUpperCase() || "?";

  // Find current page title
  const currentItem = navItems.find((item) => item.href === pathname);

  return (
    <header className="flex h-22 items-center justify-between border-b border-white/10 bg-white/5 px-4 backdrop-blur-xl sm:px-6">
      <div className="flex items-center gap-4">
        <MobileSidebar />

        <h2 className="text-2xl font-bold text-white md:text-xl">
          {currentItem?.title }
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 font-semibold text-white">
          {initial}
        </div>

        <LogOut
          onClick={handleLogout}
          className="h-5 w-5 cursor-pointer text-white transition hover:text-red-400"
        />
      </div>
    </header>
  );
}
