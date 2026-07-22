"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed, Wallet, Car, Film, ArrowRight } from "lucide-react";
import Link from "next/link";

const transactions = [
  {
    id: 1,
    title: "Grocery Store",
    category: "Food",
    date: "Today",
    amount: -3250,
    icon: UtensilsCrossed,
    type: "expense",
  },
  //   {
  //     id: 2,
  //     title: "Monthly Salary",
  //     category: "Income",
  //     date: "Yesterday",
  //     amount: 180000,
  //     icon: Wallet,
  //     type: "income",
  //   },
  {
    id: 3,
    title: "Netflix",
    category: "Entertainment",
    date: "20 Jul",
    amount: -1100,
    icon: Film,
    type: "expense",
  },
  {
    id: 4,
    title: "inDrive",
    category: "Transport",
    date: "19 Jul",
    amount: -850,
    icon: Car,
    type: "expense",
  },
];

export default function RecentTransactions() {
  return (
    <Card className="rounded-3xl border shadow-sm border-white/10 bg-white/10">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl text-white font-semibold">
          Recent Transactions
        </CardTitle>

        <Link
          href="/transactions"
          className="flex items-center gap-1 text-sm font-medium text-purple-800 hover:text-purple-700"
        >
          View All
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardHeader>

      <CardContent className="space-y-2">
        {transactions.map((transaction) => {
          const Icon = transaction.icon;

          return (
            <div
              key={transaction.id}
              className="flex items-center justify-between rounded-2xl p-4 transition hover:bg-purple-200"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-300">
                  <Icon className="h-5 w-5 text-black " />
                </div>

                <div>
                  <h3 className="font-medium">{transaction.title}</h3>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="rounded-full bg-purple-100 px-2 py-1 text-xs text-black">
                      {transaction.category}
                    </span>

                    <span className="text-xs text-black">
                      {transaction.date}
                    </span>
                  </div>
                </div>
              </div>

              <p
                className={`text-sm font-semibold ${
                  transaction.type === "income"
                    ? "text-black-600"
                    : "text-white"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}Rs{" "}
                {Math.abs(transaction.amount).toLocaleString()}
              </p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
