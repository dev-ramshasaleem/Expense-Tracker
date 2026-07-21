import DashboardHeader from "@/src/components/dashboard/DashboardHeader";
import StatsGrid from "@/src/components/dashboard/cards/StatsGrid";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <StatsGrid />
    </div>
  );
}
