"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ReportData } from "@/src/app/dashboard/reports/page";
import { Wallet, TrendingDown, PiggyBank } from "lucide-react";

export default function SummaryCards({ report }: { report: ReportData }) {
  const cards = [
    {
      title: "Income",
      value: report.summary.totalIncome,
      icon: Wallet,
    },
    {
      title: "Expenses",
      value: report.summary.totalExpense,
      icon: TrendingDown,
    },
    {
      title: "Savings",
      value: report.summary.savings,
      icon: Wallet,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card
            key={card.title}
            className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl"
          >
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-muted-foreground">{card.title}</p>

                <h2 className="mt-2 text-2xl font-bold">
                  Rs {card.value.toLocaleString()}
                </h2>
              </div>

              <div className="rounded-full bg-purple-300 p-3">
                <Icon className="h-6 w-6 text-black" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
