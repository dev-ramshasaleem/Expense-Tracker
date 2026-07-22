"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { expenseSchema, ExpenseFormData } from "@/src/schemas/expense.schema";
import { useRouter } from "next/navigation";
import { api } from "@/src/lib/axios";

export default function ExpenseForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(expenseSchema),
  });
  const onSubmit = async (data: ExpenseFormData) => {
    try {
      const token = localStorage.getItem("token");

      await api.post("/expenses", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Expense added successfully!");

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Failed to add expense");
    }

    // We'll connect the backend next
  };
  return (
    <Card className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl">
      <CardContent className="space-y-6 p-6">
        {/* Title */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Title
            </label>
            <Input placeholder="e.g. Grocery Shopping" {...register("title")} />

            {errors.title && (
              <p className="mt-1 text-sm text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Amount */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Amount
            </label>
            <Input
              type="number"
              placeholder="Enter amount"
              {...register("amount", {
                valueAsNumber: true,
              })}
            />

            {errors.amount && (
              <p className="mt-1 text-sm text-red-500">
                {errors.amount.message}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Category
            </label>

            <select
              {...register("category")}
              className="w-full rounded-lg border border-white/10 bg-white/10 p-3 text-white outline-none"
            >
              <option value="">Select Category</option>
              <option value="Food" className="text-black">
                Food
              </option>
              <option value="Transport" className="text-black">
                Transport
              </option>
              <option value="Shopping" className="text-black">
                Shopping
              </option>
              <option value="Entertainment" className="text-black">
                Entertainment
              </option>
              <option value="Bills" className="text-black">
                Bills
              </option>
              <option value="Health" className="text-black">
                Health
              </option>
              <option value="Education" className="text-black">
                Education
              </option>
              <option value="Travel" className="text-black">
                Travel
              </option>
              <option value="Other" className="text-black">
                Other
              </option>
            </select>

            {errors.category && (
              <p className="mt-1 text-sm text-red-500">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Date
            </label>

            <Input type="date" {...register("date")} />

            {errors.date && (
              <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Description
            </label>
            <Textarea
              rows={4}
              placeholder="Optional description..."
              {...register("description")}
            />{" "}
          </div>

          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            {" "}
            Save Expense
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
