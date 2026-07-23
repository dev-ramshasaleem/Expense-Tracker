"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { incomeSchema, IncomeFormData } from "@/src/schemas/income.schema";
import { useRouter } from "next/navigation";
import { api } from "@/src/lib/axios";


export default function IncomeForm() {
  const router = useRouter();

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<IncomeFormData>({
  resolver: zodResolver(incomeSchema),
});
  const onSubmit = async (data: IncomeFormData) => {
  try {
    const token = localStorage.getItem("token");

    const response = await api.post("/income", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);

    alert("Income added successfully!");

    router.push("/dashboard");
  } catch (error) {
    console.error(error);

    alert("Failed to add income");
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
            <Input placeholder="Enter title" {...register("title")} />

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

          {/* Source */}
          <div>
  <label className="mb-2 block text-sm font-medium text-white">
    Source
  </label>

  <select
    {...register("source")}
    className="w-full rounded-lg border border-white/10 bg-white/10 p-3 text-white outline-none"
  >
    <option value="">Select Source</option>
    <option value="Salary" className="text-black">
      Salary
    </option>
    <option value="Freelance" className="text-black">
      Freelance
    </option>
    <option value="Business" className="text-black">
      Business
    </option>
    <option value="Investment" className="text-black">
      Investment
    </option>
    <option value="Gift" className="text-black">
      Gift
    </option>
    <option value="Other" className="text-black">
      Other
    </option>
  </select>

  {errors.source && (
    <p className="mt-1 text-sm text-red-500">
      {errors.source.message}
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
            Save Income
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
