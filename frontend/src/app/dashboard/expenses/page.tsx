import ExpenseForm from "@/src/components/expense/ExpenseForm";

export default function AddExpensePage() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Add Expense</h1>
        <p className="mt-2 text-gray-400">
          Record a new expense to keep track of your spending.
        </p>
      </div>

      <ExpenseForm />
    </div>
  );
}
