import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PiggyBank,
  WalletMinimal,
} from "lucide-react";

import StatCard from "./StatCard";

export default function StatsGrid() {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Balance"
        value="$12,540"
        icon={Wallet}
        trend="+12.5% this month"
      />

      <StatCard
        title="Income"
        value="$18,200"
        icon={TrendingUp}
        trend="+8.4%"
      />

      <StatCard
        title="Expenses"
        value="$5,660"
        icon={TrendingDown}
        trend="-2.1%"
        trendType="down"
      />

      <StatCard
        title="Savings"
        value="$6,880"
        icon={WalletMinimal}
        trend="+18%"
      />
    </section>
  );
}
