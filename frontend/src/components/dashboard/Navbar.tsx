"use client";

import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import MobileSidebar from "./MobileSidebar";

interface User {
  name: string;
  email: string;
}

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    console.log("Stored User:", storedUser);

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log("Parsed User:", parsedUser);
      setUser(parsedUser);
    }
  }, []);

  const initial = user?.name?.charAt(0).toUpperCase() || "?";

  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 bg-white/5 px-4 backdrop-blur-xl sm:px-6">
      <div className="flex items-center gap-4">
        <MobileSidebar />

        <h2 className="text-lg font-semibold text-white md:text-xl">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 font-semibold text-white">
          {initial}
        </div>

        <LogOut className="h-5 w-5 cursor-pointer text-white transition hover:text-red-400" />
      </div>
    </header>
  );
}
