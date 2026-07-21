import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendType?: "up" | "down";
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  trendType = "up",
}: StatCardProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-2xl">
      <div className="flex items-start justify-between">
        <div>
          <p className="text text-black">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-white">{value}</h2>

          {trend && (
            <p
              className={`mt-3 text-sm font-medium ${
                trendType === "up" ? "text-purple-600" : "text-orange-600"
              }`}
            >
              {trend}
            </p>
          )}
        </div>

        <div className="rounded-xl bg-blue-500/20 p-3">
          <Icon className="h-6 w-6 text-cyan-300" />
        </div>
      </div>
    </div>
  );
}
