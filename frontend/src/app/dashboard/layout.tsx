import { ReactNode } from "react";
import Navbar from "@/src/components/dashboard/Navbar";
import Sidebar from "@/src/components/dashboard/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 to-purple-600 p-6 sm:p-4 md:p-5 lg:p-6">
      <div className="flex h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-2.5rem)] lg:h-[calc(100vh-3rem)] overflow-hidden rounded-2xl lg:rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Navbar />

          <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
