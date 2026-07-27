"use client";

import { useEffect, useState } from "react";
import { api } from "@/src/lib/axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface BudgetData {
  budget: {
    id: string;
    amount: number;
  };
  spent: number;
  remaining: number;
  percentageUsed: number;
}

export default function BudgetSummary() {
  const [data, setData] = useState<BudgetData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await api.get("/budgets/current", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBudget();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return (
      <Card className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl">
        <CardContent className="p-6">
          <p>No budget has been set for this month.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl">
      <CardHeader>
        <CardTitle>Budget Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex justify-between">
          <span>Budget</span>
          <span className="font-semibold">
            Rs {data.budget.amount.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Spent</span>
          <span className="font-semibold text-red-500">
            Rs {data.spent.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Remaining</span>
          <span className="font-semibold text-green-600">
            Rs {data.remaining.toLocaleString()}
          </span>
        </div>

        <div className="space-y-2">
          <Progress value={Math.min(data.percentageUsed, 100)} />

          <p className="text-sm text-muted-foreground">
            {data.percentageUsed.toFixed(0)}% of your budget used
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
