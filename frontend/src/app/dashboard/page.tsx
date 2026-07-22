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

        const res = await api.get("/expenses?limit=3", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("API response:", res.data);

        const formatted = res.data.expenses.map((expense: any) => ({
          id: expense.id,
          title: expense.title,
          category: expense.category,
          date: expense.date,
          amount: expense.amount,
          type: "expense",
        }));
        setTransactions(res.data.expenses);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTransactions();
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
