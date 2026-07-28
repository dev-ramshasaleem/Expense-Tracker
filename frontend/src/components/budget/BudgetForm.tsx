"use client";

import { useState } from "react";
import { api } from "@/src/lib/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BudgetForm() {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const today = new Date();

      await api.post(
        "/budgets",
        {
          amount: Number(amount),
          month: today.getMonth() + 1,
          year: today.getFullYear(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert("Budget saved successfully!");
      setAmount("");
    } catch (error) {
      console.error(error);
      alert("Failed to save budget.");
    }
  };

  return (
    <Card className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl">
      <CardHeader>
        <CardTitle>Monthly Budget</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium">Budget Amount</label>

            <Input
              type="number"
              placeholder="Enter your monthly budget"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="rounded-xl mt-4"
            />
          </div>

          <Button
            type="submit"
            className="w-full rounded-xl bg-purple-600 hover:bg-purple-700"
          >
            Save Budget
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
