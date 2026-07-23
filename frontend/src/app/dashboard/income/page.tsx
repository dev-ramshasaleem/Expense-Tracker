import IncomeForm from "@/src/components/income/IncomeForm";

export default function AddIncomePage() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Add Income</h1>

        <p className="mt-2 text-gray-400">
          Record a new income source.
        </p>
      </div>

      <IncomeForm />
    </div>
  );
}