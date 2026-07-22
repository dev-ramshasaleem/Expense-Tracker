"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Wallet, Target, Download } from "lucide-react";

const actions = [
  {
    title: "Add Expense",
    description: "Record a new expense",
    href: "/dashboard/expenses/new",
    icon: PlusCircle,
  },
  {
    title: "Add Income",
    description: "Record your income",
    href: "/dashboard/income/new",
    icon: Wallet,
  },
  {
    title: "Set Budget",
    description: "Manage monthly budget",
    href: "/dashboard/budget",
    icon: Target,
  },
  {
    title: "Export Report",
    description: "Download CSV or PDF",
    href: "/dashboard/reports",
    icon: Download,
  },
];

export default function QuickActions() {
  return (
    <Card className="rounded-3xl border shadow-sm border-white/10 bg-white/10">
      <CardHeader>
        <CardTitle className="text font-semibold text-white">
          Quick Actions
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {actions.map((action) => {
            const Icon = action.icon;

            return (
              <Link
                key={action.title}
                href={action.href}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5  hover:-translate-y-1 hover:border-purple-500 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-300 transition-colors group-hover:bg-purple-200">
                  <Icon className="h-6 w-6 text-black transition-colors group-hover:text-purple-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-black">{action.title}</h3>
                  <p className="mt-1 text-sm text-black">
                    {action.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
