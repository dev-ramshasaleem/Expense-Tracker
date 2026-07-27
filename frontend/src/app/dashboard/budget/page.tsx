"use client";

import BudgetForm from "@/src/components/budget/BudgetForm";
import BudgetSummary from "@/src/components/budget/BudgetSummary";

export default function BudgetPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Budget</h1>
        <p className="text-muted-foreground">
          Set and track your monthly budget.
        </p>
      </div>

      <BudgetForm />

      <BudgetSummary />
    </div>
  );
}
