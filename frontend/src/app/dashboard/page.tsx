"use client";
import QuickActions from "@/src/components/QuickActions";
import RecentTransactions, {
  Transaction,
} from "@/src/components/RecentTransactions";
import DashboardHeader from "@/src/components/dashboard/DashboardHeader";
import StatsGrid from "@/src/components/dashboard/cards/StatsGrid";
import { api } from "@/src/lib/axios";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [stats, setStats] = useState({
    totalBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
    totalSavings: 0,
  });
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await api.get("/dashboard/recent-transactions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("API response:", res.data);
        setTransactions(res.data.transactions);

      } catch (err) {
        console.error(err);
      }
    };

   
    const fetchDashboardStats = async () => {
  try {
    const token = localStorage.getItem("token");

   const res = await api.get("/dashboard", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
console.log("Dashboard API Response:", res.data);

    setStats({
  totalBalance: res.data.data.totalBalance,
  totalIncome: res.data.data.totalIncome,
  totalExpense: res.data.data.totalExpenses,
  totalSavings:
    res.data.data.totalIncome - res.data.data.totalExpenses,
});
  } catch (err) {
    console.error(err);
  }
  
};
fetchTransactions();
fetchDashboardStats();
  }, []);
  return (
    <div className="space-y-2">
      <DashboardHeader />
     <StatsGrid stats={stats} />
<RecentTransactions transactions={transactions} />
      <QuickActions />
    </div>
  );
}
