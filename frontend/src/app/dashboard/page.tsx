import QuickActions from "@/src/components/QuickActions";
import RecentTransactions from "@/src/components/RecentTransactions";
import DashboardHeader from "@/src/components/dashboard/DashboardHeader";
import StatsGrid from "@/src/components/dashboard/cards/StatsGrid";

export default function DashboardPage() {
  return (
    <div className="space-y-2">
      <DashboardHeader />

      <StatsGrid />

      <RecentTransactions />

      <QuickActions />
    </div>
  );
}
