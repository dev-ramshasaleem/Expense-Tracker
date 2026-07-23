import { z } from "zod";

export const incomeSchema = z.object({
  title: z.string().min(1, "Title is required"),

  amount: z.number().positive("Amount is required"),

  source: z.string().min(1, "Source is required"),

  date: z.string().min(1, "Date is required"),

  description: z.string().optional(),
});

export type IncomeFormData = z.infer<typeof incomeSchema>;