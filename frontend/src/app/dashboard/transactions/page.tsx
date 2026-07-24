"use client";

import TransactionsList from "@/src/components/transactions/TransactionsList";

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Transactions</h1>
        <p className="text-white">View all your transactions history.</p>
      </div>

      <TransactionsList />
    </div>
  );
}
