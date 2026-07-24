"use client";

import TransactionsList from "@/src/components/transactions/TransactionsList";

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Transactions</h1>
        <p className="text-gray-300">
          View all your income and expense history.
        </p>
      </div>

      <TransactionsList />
    </div>
  );
}
