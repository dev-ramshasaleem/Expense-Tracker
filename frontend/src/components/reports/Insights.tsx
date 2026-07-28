"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReportData } from "@/src/app/dashboard/reports/page";
import { BadgeDollarSign, Receipt, TrendingUp } from "lucide-react";

export default function Insights({ report }: { report: ReportData }) {
  const insights = [
    {
      title: "Highest Spending Category",
      value: report.highestCategory,
      icon: TrendingUp,
    },
    {
      title: "Total Transactions",
      value: report.totalTransactions,
      icon: Receipt,
    },
    {
      title: "Average Expense",
      value: `Rs ${report.averageExpense.toLocaleString(undefined, {
        maximumFractionDigits: 2,
      })}`,
      icon: BadgeDollarSign,
    },
  ];

  return (
    <Card className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl">
      <CardHeader>
        <CardTitle>Insights</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-between text-black rounded-2xl p-4 transition hover:bg-purple-200/20"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-300">
                  <Icon className="h-5 w-5 text-black" />
                </div>

                <div>
                  <p className="text-sm  text-black">{item.title}</p>
                  <p className="font-semibold text-white">{item.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
