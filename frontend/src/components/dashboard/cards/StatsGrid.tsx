import { Wallet, TrendingUp, TrendingDown, WalletMinimal } from "lucide-react";

import StatCard from "./StatCard";
interface Stats {
  totalBalance: number;
  totalIncome: number;
  totalExpense: number;
  totalSavings: number;
}

interface StatsGridProps {
  stats: Stats;
}
export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Balance"
        value={stats.totalBalance}
        icon={Wallet}
      />

      <StatCard title="Income" value={stats.totalIncome} icon={TrendingUp} />

      <StatCard
        title="Expenses"
        value={stats.totalExpense}
        icon={TrendingDown}
        trendType="down"
      />

      <StatCard
        title="Savings"
        value={stats.totalSavings}
        icon={WalletMinimal}
      />
    </section>
  );
}
