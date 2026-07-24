"use client";

import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/src/lib/axios";
import {
  ArrowRight,
  LucideIcon,
  UtensilsCrossed,
  Wallet,
  Car,
  Film,
  CircleDollarSign,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Transaction {
  id: string;
  title: string;
  category: string;
  amount: number;
  date: string;
  type: "income" | "expense";
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const categoryIcons: Record<string, LucideIcon> = {
    Food: UtensilsCrossed,
    Income: Wallet,
    Transport: Car,
    Entertainment: Film,
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await api.get("/transactions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTransactions(res.data.transactions);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Card className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl">
      <CardContent className="p-6 space-y-4">
        {transactions.map((transaction) => {
          const Icon = categoryIcons[transaction.category] ?? CircleDollarSign;

          return (
            <div
              key={transaction.id}
              className="flex items-center justify-between rounded-2xl p-4 transition hover:bg-purple-200/20"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-300">
                  <Icon className="h-5 w-5 text-black" />
                </div>

                <div>
                  <h3 className="font-medium text-white">
                    {transaction.title}
                  </h3>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="rounded-full bg-purple-100 px-2 py-1 text-xs text-black">
                      {transaction.category}
                    </span>

                    <span className="text-xs text-gray-300">
                      {new Date(transaction.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <p
                className={`font-semibold ${
                  transaction.type === "income"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"} Rs{" "}
                {transaction.amount.toLocaleString()}
              </p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
