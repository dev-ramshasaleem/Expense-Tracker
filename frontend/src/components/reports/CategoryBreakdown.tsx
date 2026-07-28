"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  UtensilsCrossed,
  Car,
  Film,
  ShoppingBag,
  CircleDollarSign,
  LucideIcon,
} from "lucide-react";
import { ReportData } from "@/src/app/dashboard/reports/page";

const categoryIcons: Record<string, LucideIcon> = {
  Food: UtensilsCrossed,
  Transport: Car,
  Entertainment: Film,
  Shopping: ShoppingBag,
};

export default function CategoryBreakdown({ report }: { report: ReportData }) {
  return (
    <Card className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl">
      <CardHeader>
        <CardTitle>Expense by Category</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {report.categoryBreakdown.length === 0 ? (
          <p className="text-muted-foreground">No expense data available.</p>
        ) : (
          report.categoryBreakdown.map((item) => {
            const Icon = categoryIcons[item.category] ?? CircleDollarSign;

            return (
              <div
                key={item.category}
                className="flex items-center justify-between rounded-2xl p-4 hover:bg-purple-200/20 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-300">
                    <Icon className="h-5 w-5 text-black  rounded-full bg-purple-300" />
                  </div>

                  <span className="font-medium">{item.category}</span>
                </div>

                <span className="font-semibold text-red-500">
                  Rs {(item._sum.amount ?? 0).toLocaleString()}
                </span>
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}
