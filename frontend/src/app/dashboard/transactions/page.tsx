"use client";

import TransactionsList from "@/src/components/transactions/TransactionsList";

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-white">View all your transactions history.</h1>
      </div>

      <TransactionsList />
    </div>
  );
}
